import os

os.makedirs('src/components', exist_ok=True)

three_canvas_code = """import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeCanvasViewer({
  plant,
  selectedHotspot,
  onSelectHotspot,
  wireframe = false,
  isNightMode = false,
  autoRotate = true
}) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const plantGroupRef = useRef(null);
  const hotspotsGroupRef = useRef(null);
  const animFrameIdRef = useRef(null);
  const isDraggingRef = useRef(false);
  const prevMousePosRef = useRef({ x: 0, y: 0 });
  const rotVelRef = useRef({ x: 0, y: 0 });
  const targetCameraPosRef = useRef(new THREE.Vector3(0, 1.8, 3.2));

  const [hoveredNode, setHoveredNode] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 450;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.8, 3.2);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(isNightMode ? 0x1a2e22 : 0xf4fbf7, isNightMode ? 0.8 : 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(isNightMode ? 0x86efac : 0xfffaed, isNightMode ? 1.0 : 1.8);
    dirLight.position.set(4, 6, 4);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(isNightMode ? 0x3b82f6 : 0xd1fae5, 0.8);
    fillLight.position.set(-4, 3, -3);
    scene.add(fillLight);

    // Earthen garden pedestal
    const pedestalGeo = new THREE.CylinderGeometry(1.4, 1.6, 0.25, 32);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: isNightMode ? 0x13261a : 0xdfd7cb,
      roughness: 0.85,
      metalness: 0.1
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = -0.125;
    pedestal.receiveShadow = true;
    scene.add(pedestal);

    // Terracotta Plant Pot
    const potGeo = new THREE.CylinderGeometry(0.7, 0.5, 0.7, 24);
    const potMat = new THREE.MeshStandardMaterial({
      color: 0xb45309,
      roughness: 0.9,
      metalness: 0.05
    });
    const pot = new THREE.Mesh(potGeo, potMat);
    pot.position.y = 0.35;
    pot.castShadow = true;
    pot.receiveShadow = true;
    scene.add(pot);

    // Soil
    const soilGeo = new THREE.CylinderGeometry(0.68, 0.68, 0.08, 24);
    const soilMat = new THREE.MeshStandardMaterial({ color: 0x3d2817, roughness: 0.95 });
    const soil = new THREE.Mesh(soilGeo, soilMat);
    soil.position.y = 0.69;
    scene.add(soil);

    // Plant group
    const plantGroup = new THREE.Group();
    plantGroupRef.current = plantGroup;
    scene.add(plantGroup);

    // Hotspots group
    const hotspotsGroup = new THREE.Group();
    hotspotsGroupRef.current = hotspotsGroup;
    scene.add(hotspotsGroup);

    // Build botanical model
    buildPlantMesh(plant?.threeDConfig?.modelType || 'tulsi', plantGroup, wireframe);
    buildHotspots(plant?.threeDConfig?.hotspots || [], hotspotsGroup);

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth rotation
      if (autoRotate && !isDraggingRef.current) {
        plantGroup.rotation.y += 0.3 * delta;
        hotspotsGroup.rotation.y = plantGroup.rotation.y;
      } else if (!isDraggingRef.current) {
        plantGroup.rotation.y += rotVelRef.current.y;
        plantGroup.rotation.x += rotVelRef.current.x;
        hotspotsGroup.rotation.y = plantGroup.rotation.y;
        hotspotsGroup.rotation.x = plantGroup.rotation.x;
        rotVelRef.current.x *= 0.92;
        rotVelRef.current.y *= 0.92;
      }

      // Hotspots pulsing
      hotspotsGroup.children.forEach((mesh, index) => {
        const pulse = 1 + Math.sin(time * 3 + index * 1.5) * 0.18;
        mesh.scale.set(pulse, pulse, pulse);
      });

      // Smooth camera interpolation
      camera.position.lerp(targetCameraPosRef.current, 0.05);
      camera.lookAt(0, 0.9, 0);

      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || 450;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      if (rendererRef.current && rendererRef.current.domElement) {
        container.innerHTML = '';
        rendererRef.current.dispose();
      }
    };
  }, [plant?.id, isNightMode]);

  // Update wireframe mode without re-mounting canvas
  useEffect(() => {
    if (!plantGroupRef.current) return;
    plantGroupRef.current.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.wireframe = wireframe;
      }
    });
  }, [wireframe]);

  // Update camera focus on hotspot selection
  useEffect(() => {
    if (!selectedHotspot || !plant?.threeDConfig?.hotspots) {
      targetCameraPosRef.current.set(0, 1.8, 3.2);
      return;
    }
    const found = plant.threeDConfig.hotspots.find(h => h.id === selectedHotspot.id);
    if (found && found.pos) {
      const [hx, hy, hz] = found.pos;
      targetCameraPosRef.current.set(hx * 0.8, hy + 0.4, hz + 1.8);
    }
  }, [selectedHotspot, plant]);

  // Mouse / Touch Interaction Handlers
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    prevMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (isDraggingRef.current) {
      const deltaX = e.clientX - prevMousePosRef.current.x;
      const deltaY = e.clientY - prevMousePosRef.current.y;
      prevMousePosRef.current = { x: e.clientX, y: e.clientY };

      if (plantGroupRef.current && hotspotsGroupRef.current) {
        plantGroupRef.current.rotation.y += deltaX * 0.008;
        plantGroupRef.current.rotation.x = Math.max(-0.4, Math.min(0.6, plantGroupRef.current.rotation.x + deltaY * 0.005));
        hotspotsGroupRef.current.rotation.y = plantGroupRef.current.rotation.y;
        hotspotsGroupRef.current.rotation.x = plantGroupRef.current.rotation.x;
        rotVelRef.current = { x: deltaY * 0.002, y: deltaX * 0.004 };
      }
      return;
    }

    // Raycasting for hover detection
    checkRaycast(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleClick = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(x, y), cameraRef.current);
    if (!hotspotsGroupRef.current) return;

    const intersects = raycaster.intersectObjects(hotspotsGroupRef.current.children, true);
    if (intersects.length > 0) {
      const hit = intersects[0].object;
      const hotspotData = hit.userData?.hotspot;
      if (hotspotData && onSelectHotspot) {
        onSelectHotspot(hotspotData);
      }
    }
  };

  const checkRaycast = (clientX, clientY) => {
    if (!containerRef.current || !cameraRef.current || !hotspotsGroupRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((clientY - rect.top) / rect.height) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(x, y), cameraRef.current);
    const intersects = raycaster.intersectObjects(hotspotsGroupRef.current.children, true);

    if (intersects.length > 0) {
      const hotspot = intersects[0].object.userData?.hotspot;
      setHoveredNode(hotspot);
      containerRef.current.style.cursor = 'pointer';
    } else {
      setHoveredNode(null);
      containerRef.current.style.cursor = isDraggingRef.current ? 'grabbing' : 'grab';
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (!cameraRef.current) return;
    const zoomDelta = e.deltaY * 0.002;
    const newZ = Math.max(1.8, Math.min(5.0, targetCameraPosRef.current.z + zoomDelta));
    targetCameraPosRef.current.z = newZ;
  };

  return (
    <div className="relative w-full h-[450px] md:h-[540px] rounded-2xl overflow-hidden bg-gradient-to-b from-emerald-950/20 via-emerald-900/10 to-transparent border border-emerald-500/20 shadow-inner select-none">
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={handleClick}
        onWheel={handleWheel}
      />

      {/* Floating Hover Tooltip */}
      {hoveredNode && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full glass-panel border border-emerald-400/50 shadow-xl pointer-events-none flex items-center gap-2 animate-bounce">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
            Click to inspect: {hoveredNode.name}
          </span>
        </div>
      )}

      {/* 3D Model Badge */}
      <div className="absolute bottom-4 left-4 pointer-events-none glass-panel px-3 py-1.5 rounded-lg border border-emerald-500/30 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        WebGL Three.js • {plant?.scientificName}
      </div>
    </div>
  );
}

// ---------------- PROCEDURAL BOTANICAL MESH GENERATORS ----------------
function buildPlantMesh(modelType, group, wireframe) {
  group.clear();

  const stemMat = new THREE.MeshStandardMaterial({
    color: 0x5c4033,
    roughness: 0.8,
    wireframe
  });
  const leafMat = new THREE.MeshStandardMaterial({
    color: 0x22c55e,
    roughness: 0.5,
    metalness: 0.1,
    side: THREE.DoubleSide,
    wireframe
  });
  const darkLeafMat = new THREE.MeshStandardMaterial({
    color: 0x15803d,
    roughness: 0.4,
    side: THREE.DoubleSide,
    wireframe
  });
  const flowerMat = new THREE.MeshStandardMaterial({
    color: 0xa855f7,
    roughness: 0.6,
    wireframe
  });
  const fruitMat = new THREE.MeshStandardMaterial({
    color: 0xf97316,
    roughness: 0.3,
    wireframe
  });

  if (modelType === 'tulsi') {
    // Main Stem
    const stemCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0.7, 0),
      new THREE.Vector3(0.05, 1.2, 0.02),
      new THREE.Vector3(-0.02, 1.7, 0),
      new THREE.Vector3(0, 2.2, 0)
    ]);
    const stemGeo = new THREE.TubeGeometry(stemCurve, 20, 0.035, 8, false);
    const stemMesh = new THREE.Mesh(stemGeo, stemMat);
    stemMesh.castShadow = true;
    group.add(stemMesh);

    // Leaves arranged in opposite pairs
    const leafGeo = new THREE.SphereGeometry(0.18, 12, 8);
    leafGeo.scale(1.4, 0.2, 0.8);

    for (let i = 0; i < 7; i++) {
      const height = 0.9 + i * 0.18;
      const angle = (i * Math.PI) / 3;

      [-1, 1].forEach((dir) => {
        const leaf = new THREE.Mesh(leafGeo, i % 2 === 0 ? leafMat : darkLeafMat);
        leaf.position.set(Math.cos(angle) * 0.25 * dir, height, Math.sin(angle) * 0.25 * dir);
        leaf.rotation.set(0.2 * dir, angle, 0.3 * dir);
        leaf.castShadow = true;
        group.add(leaf);
      });
    }

    // Flower Inflorescence spikes (Manjari)
    for (let f = 0; f < 3; f++) {
      const spikeGeo = new THREE.CylinderGeometry(0.02, 0.04, 0.35, 8);
      const spike = new THREE.Mesh(spikeGeo, flowerMat);
      spike.position.set((f - 1) * 0.08, 2.25, (f - 1) * 0.04);
      spike.rotation.z = (f - 1) * 0.15;
      group.add(spike);
    }
  } else if (modelType === 'neem') {
    // Neem Tree Stem
    const trunkGeo = new THREE.CylinderGeometry(0.06, 0.09, 1.5, 12);
    const trunk = new THREE.Mesh(trunkGeo, stemMat);
    trunk.position.y = 1.4;
    group.add(trunk);

    // Compound branches
    const featherGeo = new THREE.BoxGeometry(0.5, 0.02, 0.12);
    for (let b = 0; b < 12; b++) {
      const branchHeight = 1.0 + (b * 0.1);
      const rotY = (b * Math.PI) / 4;
      const branch = new THREE.Mesh(featherGeo, leafMat);
      branch.position.set(Math.cos(rotY) * 0.35, branchHeight, Math.sin(rotY) * 0.35);
      branch.rotation.set(0.1, rotY, 0.2);
      group.add(branch);
    }

    // Neem fruit drupes
    for (let d = 0; d < 4; d++) {
      const drupeGeo = new THREE.SphereGeometry(0.045, 8, 8);
      const drupe = new THREE.Mesh(drupeGeo, new THREE.MeshStandardMaterial({ color: 0x84cc16, wireframe }));
      drupe.position.set(Math.sin(d) * 0.25, 1.35 + d * 0.08, Math.cos(d) * 0.25);
      group.add(drupe);
    }
  } else if (modelType === 'aloe') {
    // Succulent Aloe Rosette
    const aloeLeafGeo = new THREE.ConeGeometry(0.12, 1.3, 7);
    aloeLeafGeo.scale(1.2, 1.0, 0.4);

    const aloeMat = new THREE.MeshStandardMaterial({
      color: 0x16a34a,
      roughness: 0.3,
      metalness: 0.05,
      wireframe
    });

    for (let l = 0; l < 14; l++) {
      const ring = Math.floor(l / 5);
      const angle = (l * (Math.PI * 2)) / 5 + (ring * 0.4);
      const tilt = 0.35 + ring * 0.25;
      const leaf = new THREE.Mesh(aloeLeafGeo, aloeMat);
      leaf.position.set(Math.cos(angle) * (0.15 + ring * 0.1), 0.8 + ring * 0.1, Math.sin(angle) * (0.15 + ring * 0.1));
      leaf.rotation.set(Math.sin(angle) * tilt, angle, Math.cos(angle) * tilt);
      leaf.castShadow = true;
      group.add(leaf);
    }
  } else if (modelType === 'ashwagandha') {
    // Shrubby Stem
    const stemGeo = new THREE.CylinderGeometry(0.04, 0.07, 1.2, 10);
    const stem = new THREE.Mesh(stemGeo, stemMat);
    stem.position.y = 1.2;
    group.add(stem);

    // Broad Velvety Leaves
    const leafGeo = new THREE.SphereGeometry(0.2, 10, 8);
    leafGeo.scale(1.3, 0.15, 0.9);
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 3;
      const leaf = new THREE.Mesh(leafGeo, leafMat);
      leaf.position.set(Math.cos(angle) * 0.3, 0.9 + i * 0.14, Math.sin(angle) * 0.3);
      leaf.rotation.set(0.2, angle, 0.2);
      group.add(leaf);
    }

    // Calyx & Red Berries
    for (let r = 0; r < 4; r++) {
      const berryGeo = new THREE.SphereGeometry(0.06, 8, 8);
      const berry = new THREE.Mesh(berryGeo, fruitMat);
      berry.position.set((r - 1.5) * 0.15, 1.45 + (r % 2) * 0.1, 0.1);
      group.add(berry);
    }
  } else {
    // Generic Botanical Model (Turmeric/Ginger)
    const rhizomeGeo = new THREE.TorusGeometry(0.25, 0.09, 8, 16);
    const rhizomeMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.9, wireframe });
    const rhizome = new THREE.Mesh(rhizomeGeo, rhizomeMat);
    rhizome.position.set(0, 0.72, 0);
    rhizome.rotation.x = Math.PI / 2;
    group.add(rhizome);

    // Pseudostem & Large Tropical Leaves
    const reedGeo = new THREE.CylinderGeometry(0.03, 0.05, 1.1, 8);
    const reed = new THREE.Mesh(reedGeo, stemMat);
    reed.position.y = 1.25;
    group.add(reed);

    const broadLeafGeo = new THREE.PlaneGeometry(0.35, 0.8, 4, 8);
    for (let b = 0; b < 5; b++) {
      const angle = (b * Math.PI * 2) / 5;
      const leaf = new THREE.Mesh(broadLeafGeo, leafMat);
      leaf.position.set(Math.cos(angle) * 0.2, 1.2 + b * 0.18, Math.sin(angle) * 0.2);
      leaf.rotation.set(0.3, angle, 0.2);
      group.add(leaf);
    }
  }
}

function buildHotspots(hotspotsList, group) {
  group.clear();

  hotspotsList.forEach((hotspot) => {
    const [x, y, z] = hotspot.pos || [0, 1, 0];

    // Glowing hotspot sphere
    const nodeGeo = new THREE.SphereGeometry(0.065, 16, 16);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x22c55e,
      emissive: 0x16a34a,
      emissiveIntensity: 0.9,
      roughness: 0.2,
      metalness: 0.8
    });
    const mesh = new THREE.Mesh(nodeGeo, nodeMat);
    mesh.position.set(x, y, z);
    mesh.userData = { hotspot };

    // Outer translucent halo
    const haloGeo = new THREE.SphereGeometry(0.1, 16, 16);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x86efac,
      transparent: true,
      opacity: 0.35
    });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    mesh.add(halo);

    group.add(mesh);
  });
}
"""

with open('src/components/ThreeCanvasViewer.jsx', 'w', encoding='utf-8') as f:
    f.write(three_canvas_code)

print("ThreeCanvasViewer.jsx created!")
