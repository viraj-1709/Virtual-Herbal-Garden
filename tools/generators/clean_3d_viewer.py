three_viewer_code = """import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeCanvasViewer({
  plant,
  selectedHotspot,
  onSelectHotspot,
  wireframe = false,
  isNightMode = false,
  autoRotate = true,
  batterySaver = false
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
    const height = container.clientHeight || 420;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 80);
    camera.position.set(0, 1.8, 3.2);
    cameraRef.current = camera;

    // Renderer (Performance tuned for low-end devices: powerPreference high-performance, precision mediump)
    const renderer = new THREE.WebGLRenderer({
      antialias: !batterySaver,
      alpha: true,
      powerPreference: 'default',
      precision: batterySaver ? 'mediump' : 'highp'
    });
    renderer.setSize(width, height);
    // Cap pixel ratio to 1.25 for smooth 60fps even on integrated GPUs
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, batterySaver ? 1.0 : 1.25));
    renderer.shadowMap.enabled = !batterySaver;
    if (renderer.shadowMap.enabled) {
      renderer.shadowMap.type = THREE.BasicShadowMap;
    }
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(isNightMode ? 0x1a2e22 : 0xf4fbf7, isNightMode ? 0.9 : 1.3);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(isNightMode ? 0x86efac : 0xfffaed, isNightMode ? 1.0 : 1.6);
    dirLight.position.set(3, 5, 3);
    if (!batterySaver) {
      dirLight.castShadow = true;
      dirLight.shadow.mapSize.width = 512;
      dirLight.shadow.mapSize.height = 512;
    }
    scene.add(dirLight);

    // Earthen garden pedestal
    const pedestalGeo = new THREE.CylinderGeometry(1.3, 1.5, 0.2, batterySaver ? 16 : 24);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: isNightMode ? 0x13261a : 0xdfd7cb,
      roughness: 0.85
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = -0.1;
    if (!batterySaver) pedestal.receiveShadow = true;
    scene.add(pedestal);

    // Terracotta Plant Pot
    const potGeo = new THREE.CylinderGeometry(0.65, 0.45, 0.65, batterySaver ? 14 : 20);
    const potMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.9 });
    const pot = new THREE.Mesh(potGeo, potMat);
    pot.position.y = 0.32;
    scene.add(pot);

    // Soil
    const soilGeo = new THREE.CylinderGeometry(0.63, 0.63, 0.06, batterySaver ? 14 : 20);
    const soilMat = new THREE.MeshStandardMaterial({ color: 0x3d2817, roughness: 0.95 });
    const soil = new THREE.Mesh(soilGeo, soilMat);
    soil.position.y = 0.64;
    scene.add(soil);

    // Plant group
    const plantGroup = new THREE.Group();
    plantGroupRef.current = plantGroup;
    scene.add(plantGroup);

    // Hotspots group
    const hotspotsGroup = new THREE.Group();
    hotspotsGroupRef.current = hotspotsGroup;
    scene.add(hotspotsGroup);

    buildPlantMesh(plant?.threeDConfig?.modelType || 'tulsi', plantGroup, wireframe, batterySaver);
    buildHotspots(plant?.threeDConfig?.hotspots || [], hotspotsGroup);

    // Animation Loop with Visibility detection
    let clock = new THREE.Clock();
    let isTabVisible = true;

    const onVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);
      if (!isTabVisible) return; // Save GPU when user switches tabs

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

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
        const pulse = 1 + Math.sin(time * 3 + index * 1.5) * 0.15;
        mesh.scale.set(pulse, pulse, pulse);
      });

      camera.position.lerp(targetCameraPosRef.current, 0.05);
      camera.lookAt(0, 0.85, 0);

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || 420;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('resize', handleResize);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      if (rendererRef.current && rendererRef.current.domElement) {
        container.innerHTML = '';
        rendererRef.current.dispose();
      }
    };
  }, [plant?.id, isNightMode, batterySaver]);

  useEffect(() => {
    if (!plantGroupRef.current) return;
    plantGroupRef.current.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.wireframe = wireframe;
      }
    });
  }, [wireframe]);

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
    const newZ = Math.max(1.8, Math.min(4.8, targetCameraPosRef.current.z + zoomDelta));
    targetCameraPosRef.current.z = newZ;
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden bg-gradient-to-b from-emerald-950/20 via-emerald-900/10 to-transparent border border-emerald-500/20 shadow-inner select-none">
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

      {hoveredNode && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full glass-panel border border-emerald-400/50 shadow-xl pointer-events-none flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
            Inspect: {hoveredNode.name}
          </span>
        </div>
      )}

      <div className="absolute bottom-4 left-4 pointer-events-none glass-panel px-3 py-1 rounded-lg border border-emerald-500/30 text-[11px] font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        Three.js WebGL • {plant?.scientificName}
      </div>
    </div>
  );
}

function buildPlantMesh(modelType, group, wireframe, batterySaver) {
  group.clear();

  const segs = batterySaver ? 8 : 12;

  const stemMat = new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.8, wireframe });
  const leafMat = new THREE.MeshStandardMaterial({ color: 0x22c55e, roughness: 0.5, side: THREE.DoubleSide, wireframe });
  const darkLeafMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.4, side: THREE.DoubleSide, wireframe });
  const flowerMat = new THREE.MeshStandardMaterial({ color: 0xa855f7, roughness: 0.6, wireframe });
  const fruitMat = new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.3, wireframe });

  if (modelType === 'tulsi') {
    const stemCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0.65, 0),
      new THREE.Vector3(0.04, 1.1, 0.02),
      new THREE.Vector3(-0.02, 1.6, 0),
      new THREE.Vector3(0, 2.1, 0)
    ]);
    const stemGeo = new THREE.TubeGeometry(stemCurve, batterySaver ? 10 : 16, 0.035, 6, false);
    const stemMesh = new THREE.Mesh(stemGeo, stemMat);
    group.add(stemMesh);

    const leafGeo = new THREE.SphereGeometry(0.18, segs, 6);
    leafGeo.scale(1.4, 0.2, 0.8);

    const leafCount = batterySaver ? 5 : 7;
    for (let i = 0; i < leafCount; i++) {
      const height = 0.85 + i * 0.18;
      const angle = (i * Math.PI) / 3;

      [-1, 1].forEach((dir) => {
        const leaf = new THREE.Mesh(leafGeo, i % 2 === 0 ? leafMat : darkLeafMat);
        leaf.position.set(Math.cos(angle) * 0.24 * dir, height, Math.sin(angle) * 0.24 * dir);
        leaf.rotation.set(0.2 * dir, angle, 0.3 * dir);
        group.add(leaf);
      });
    }

    for (let f = 0; f < 3; f++) {
      const spikeGeo = new THREE.CylinderGeometry(0.02, 0.04, 0.3, 6);
      const spike = new THREE.Mesh(spikeGeo, flowerMat);
      spike.position.set((f - 1) * 0.07, 2.15, (f - 1) * 0.03);
      spike.rotation.z = (f - 1) * 0.15;
      group.add(spike);
    }
  } else if (modelType === 'neem') {
    const trunkGeo = new THREE.CylinderGeometry(0.05, 0.08, 1.4, 8);
    const trunk = new THREE.Mesh(trunkGeo, stemMat);
    trunk.position.y = 1.35;
    group.add(trunk);

    const featherGeo = new THREE.BoxGeometry(0.45, 0.02, 0.1);
    const branchCount = batterySaver ? 8 : 12;
    for (let b = 0; b < branchCount; b++) {
      const branchHeight = 0.95 + (b * 0.1);
      const rotY = (b * Math.PI) / 4;
      const branch = new THREE.Mesh(featherGeo, leafMat);
      branch.position.set(Math.cos(rotY) * 0.32, branchHeight, Math.sin(rotY) * 0.32);
      branch.rotation.set(0.1, rotY, 0.2);
      group.add(branch);
    }
  } else if (modelType === 'aloe') {
    const aloeLeafGeo = new THREE.ConeGeometry(0.11, 1.2, 6);
    aloeLeafGeo.scale(1.2, 1.0, 0.4);
    const aloeMat = new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.3, wireframe });

    const totalLeaves = batterySaver ? 10 : 14;
    for (let l = 0; l < totalLeaves; l++) {
      const ring = Math.floor(l / 5);
      const angle = (l * (Math.PI * 2)) / 5 + (ring * 0.4);
      const tilt = 0.35 + ring * 0.25;
      const leaf = new THREE.Mesh(aloeLeafGeo, aloeMat);
      leaf.position.set(Math.cos(angle) * (0.14 + ring * 0.09), 0.75 + ring * 0.09, Math.sin(angle) * (0.14 + ring * 0.09));
      leaf.rotation.set(Math.sin(angle) * tilt, angle, Math.cos(angle) * tilt);
      group.add(leaf);
    }
  } else if (modelType === 'ashwagandha') {
    const stemGeo = new THREE.CylinderGeometry(0.04, 0.06, 1.1, 8);
    const stem = new THREE.Mesh(stemGeo, stemMat);
    stem.position.y = 1.15;
    group.add(stem);

    const leafGeo = new THREE.SphereGeometry(0.18, segs, 6);
    leafGeo.scale(1.3, 0.15, 0.9);
    for (let i = 0; i < 7; i++) {
      const angle = (i * Math.PI) / 3;
      const leaf = new THREE.Mesh(leafGeo, leafMat);
      leaf.position.set(Math.cos(angle) * 0.28, 0.85 + i * 0.14, Math.sin(angle) * 0.28);
      leaf.rotation.set(0.2, angle, 0.2);
      group.add(leaf);
    }
  } else {
    const rhizomeGeo = new THREE.TorusGeometry(0.22, 0.08, 6, 12);
    const rhizomeMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.9, wireframe });
    const rhizome = new THREE.Mesh(rhizomeGeo, rhizomeMat);
    rhizome.position.set(0, 0.68, 0);
    rhizome.rotation.x = Math.PI / 2;
    group.add(rhizome);

    const reedGeo = new THREE.CylinderGeometry(0.03, 0.045, 1.0, 6);
    const reed = new THREE.Mesh(reedGeo, stemMat);
    reed.position.y = 1.2;
    group.add(reed);

    const broadLeafGeo = new THREE.PlaneGeometry(0.3, 0.7, 2, 4);
    for (let b = 0; b < 4; b++) {
      const angle = (b * Math.PI * 2) / 4;
      const leaf = new THREE.Mesh(broadLeafGeo, leafMat);
      leaf.position.set(Math.cos(angle) * 0.18, 1.15 + b * 0.16, Math.sin(angle) * 0.18);
      leaf.rotation.set(0.3, angle, 0.2);
      group.add(leaf);
    }
  }
}

function buildHotspots(hotspotsList, group) {
  group.clear();

  hotspotsList.forEach((hotspot) => {
    const [x, y, z] = hotspot.pos || [0, 1, 0];

    const nodeGeo = new THREE.SphereGeometry(0.06, 12, 12);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x22c55e,
      emissive: 0x16a34a,
      emissiveIntensity: 0.85,
      roughness: 0.2
    });
    const mesh = new THREE.Mesh(nodeGeo, nodeMat);
    mesh.position.set(x, y, z);
    mesh.userData = { hotspot };

    const haloGeo = new THREE.SphereGeometry(0.09, 10, 10);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x86efac,
      transparent: true,
      opacity: 0.3
    });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    mesh.add(halo);

    group.add(mesh);
  });
}
"""

with open('src/components/ThreeCanvasViewer.jsx', 'w', encoding='utf-8') as f:
    f.write(three_viewer_code)

print("ThreeCanvasViewer.jsx updated for performance and zero emojis.")
