import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useGamification } from '../context/GamificationContext';
import { plantsData } from '../data/plantsData';
import ThreeCanvasViewer from './ThreeCanvasViewer';
import { 
  Box, 
  RotateCcw, 
  Sun, 
  Moon, 
  Grid, 
  Sparkles, 
  ArrowRight,
  Zap,
  Leaf,
  Layers,
  Sprout,
  ShieldCheck,
  BookOpen,
  Activity,
  FlaskConical,
  Award,
  ChevronRight,
  Info
} from 'lucide-react';

const plantAnatomyMap = {
  tulsi: [
    {
      id: 'leaves',
      partName: 'Foliage & Leaves',
      sanskritTerm: 'Patra (पत्र)',
      latinOrgan: 'Folium',
      icon: Leaf,
      color: 'emerald',
      morphology: 'Simple, opposite, elliptic-oblong with serrated margins; surface covered with aromatic multicellular glandular hairs (trichomes) containing essential oil reserves.',
      phytochemicals: ['Eugenol (71%)', 'Ursolic Acid', 'Rosmarinic Acid', 'β-Caryophyllene', 'Apigenin'],
      therapeuticActions: 'Potent expectorant, bronchodilator, antimicrobial, antipyretic, adaptogenic, and immunomodulatory.',
      clinicalIndications: 'Kasa (Cough), Shwasa (Asthma/Bronchitis), Pratishyaya (Rhinitis), Jvara (Fever), and mental fatigue.',
      classicalPreparations: [
        { name: 'Swarasa (Fresh Leaf Juice)', dose: '5–10 ml with raw honey', note: 'Primary emergency respiratory tonic' },
        { name: 'Tulsi Churna (Leaf Powder)', dose: '1–3 grams with warm water', note: 'Daily adaptogen and immune builder' },
        { name: 'Kashayam (Decoction)', dose: '25–50 ml boiled with ginger', note: 'Effective for fever and viral chills' }
      ],
      dhatuAffinity: 'Rasa, Rakta, Majja Dhatus',
      srotasAffinity: 'Pranavaha (Respiratory) & Annavaha (Digestive)',
      doshaKarma: 'Pacifies Kapha & Vata; mildly increases Pitta in excess'
    },
    {
      id: 'flowers',
      partName: 'Flower Inflorescence',
      sanskritTerm: 'Manjari / Pushpa (मञ्जरी / पुष्प)',
      latinOrgan: 'Inflorescentia',
      icon: Sparkles,
      color: 'purple',
      morphology: 'Terminal elongate verticillasters with small bilabiate purplish-green flowers bearing tiny nutlets (seeds); extremely rich in fragrant volatile terpenes.',
      phytochemicals: ['Linalool', 'Camphene', 'Methyl chavicol', 'Mucilage polysaccharides', 'Essential fatty acids'],
      therapeuticActions: 'Carminative, stomachic, mild sedative, and cooling demulcent for irritated mucous membranes.',
      clinicalIndications: 'Aruchi (Anorexia/loss of taste), Chhardi (Nausea), Agnimandya (Sluggish digestion), and genitourinary inflammation.',
      classicalPreparations: [
        { name: 'Manjari Hima (Cold Infusion)', dose: '30–50 ml', note: 'Soaked overnight with mishri for cooling Pitta relief' },
        { name: 'Seed Mucilage Drink', dose: '1 tsp soaked seeds in water/milk', note: 'Demulcent cooling tonic for summer' }
      ],
      dhatuAffinity: 'Rasa, Shukra Dhatus',
      srotasAffinity: 'Mutravaha Srotas (Urinary) & Purishavaha Srotas',
      doshaKarma: 'Tridosha Shamaka (Balances all 3 doshas)'
    },
    {
      id: 'stem',
      partName: 'Stem & Branch Axis',
      sanskritTerm: 'Kanda & Shakha (काण्ड एवं शाखा)',
      latinOrgan: 'Caulis',
      icon: Layers,
      color: 'amber',
      morphology: 'Quadrangular woody herbaceous stem with purplish pigmentation, dense pubescence, and rich vascular cambium containing structural lignans.',
      phytochemicals: ['Lignans', 'Flavonoid glycosides', 'Tannins', 'Phytosterols'],
      therapeuticActions: 'Astringent, diaphoretic, cardiac stimulant, and subtle electro-magnetic biofield stabilizer.',
      clinicalIndications: 'Hridya (Cardiovascular support), Sweda Janana (Inducing therapeutic sweating in fevers), and external bead contact therapy (Kanthi).',
      classicalPreparations: [
        { name: 'Kanda Kwatha (Woody Decoction)', dose: '20–40 ml', note: 'Deep-acting febrifuge formulation' },
        { name: 'Tulsi Mala (Therapeutic Wood Beads)', dose: 'Topical skin contact', note: 'Worn around neck for vagal nerve calm' }
      ],
      dhatuAffinity: 'Rasa, Rakta, Asthi Dhatus',
      srotasAffinity: 'Raktavaha Srotas & Manovaha Srotas',
      doshaKarma: 'Pacifies Vata & Kapha'
    },
    {
      id: 'root',
      partName: 'Fibrous Root System',
      sanskritTerm: 'Moola (मूल)',
      latinOrgan: 'Radix',
      icon: Sprout,
      color: 'teal',
      morphology: 'Extensive slender fibrous branched taproot network penetrating porous soil layers; accumulates bitter restorative secondary metabolites.',
      phytochemicals: ['Betulinic acid', 'Sterols', 'Polyphenolic acids', 'Trace minerals (Zinc, Iron)'],
      therapeuticActions: 'Febrifuge, antidote (Vishaghna), diaphoretic, and nervous stabilizer.',
      clinicalIndications: 'Vishamajvara (Recurrent malarial fevers), Kita Dansha (Insect & snake stings), and genitourinary dysuria.',
      classicalPreparations: [
        { name: 'Moola Churna (Root Powder)', dose: '1–2 grams with cow ghee', note: 'Administered for deep fever convalescence' },
        { name: 'Moola Lepa (Root Paste)', dose: 'Topical paste with water', note: 'Applied externally to scorpion and insect stings' }
      ],
      dhatuAffinity: 'Asthi & Majja Dhatus',
      srotasAffinity: 'Swedavaha Srotas (Sweat channels) & Manovaha Srotas',
      doshaKarma: 'Deeply pacifies Vata & Kapha'
    }
  ],
  neem: [
    {
      id: 'leaves',
      partName: 'Compound Foliage / Leaves',
      sanskritTerm: 'Nimba Patra (निम्ब पत्र)',
      latinOrgan: 'Folium',
      icon: Leaf,
      color: 'emerald',
      morphology: 'Alternate, imparipinnately compound leaves with 9–17 lanceolate serrated leaflets; extremely bitter taste with rich chlorophyll and flavonoid content.',
      phytochemicals: ['Nimbin', 'Nimbidin', 'Quercetin', 'Gedunin', 'β-Sitosterol'],
      therapeuticActions: 'Rakta Shodhaka (Blood purifier), Kushthaghna (Antidermatophytic), Krimighna (Anthelmintic), and natural hypoglycemic.',
      clinicalIndications: 'Kushtha (Psoriasis/Eczema), Mukhadushika (Acne vulgaris), Prameha (Diabetes), and Kandu (Pruritus/Itching).',
      classicalPreparations: [
        { name: 'Nimba Patra Swarasa (Fresh Juice)', dose: '5–10 ml with honey', note: 'Potent seasonal blood purifier' },
        { name: 'Nimbadi Kashayam (Classical Decoction)', dose: '20–30 ml twice daily', note: 'Gold standard for skin inflammation' },
        { name: 'Nimba Lepa (Topical Paste)', dose: 'Applied directly to skin', note: 'Antibacterial and scar-preventing' }
      ],
      dhatuAffinity: 'Rasa, Rakta, Meda Dhatus',
      srotasAffinity: 'Raktavaha Srotas & Swedavaha Srotas',
      doshaKarma: 'Pacifies Pitta and Kapha; may increase Vata if used excessively'
    },
    {
      id: 'bark',
      partName: 'Stem & Trunk Bark',
      sanskritTerm: 'Nimba Twak (निम्ब त्वक्)',
      latinOrgan: 'Cortex',
      icon: Layers,
      color: 'amber',
      morphology: 'Rough, deeply fissured, greyish-brown outer rhytidome with fibrous yellowish inner bast; highly concentrated in condensed tannins and bitter triterpenes.',
      phytochemicals: ['Margosine', 'Catechin tannins', 'Nimbinene', 'Desacetylnimbin', 'Polysaccharides'],
      therapeuticActions: 'Deep febrifuge (Jvarahara), astringent (Stambhana), anti-ulcer, and periodontal restorative.',
      clinicalIndications: 'Jvara (Chronic malarial/viral fevers), Dantaroga (Periodontitis/Plaque), Vrana (Chronic non-healing ulcers), and Grahani (IBS).',
      classicalPreparations: [
        { name: 'Twak Kwatha (Bark Decoction)', dose: '30–50 ml', note: 'Classical fever breaker and oral wash' },
        { name: 'Nimbadi Churna (Compound Powder)', dose: '2–3 grams', note: 'Digestive and liver tonic' }
      ],
      dhatuAffinity: 'Mamsa, Meda, Asthi Dhatus',
      srotasAffinity: 'Annavaha & Purishavaha Srotas',
      doshaKarma: 'Deeply clears Kapha & Pitta'
    },
    {
      id: 'seeds',
      partName: 'Fruit Kernel & Seed Oil',
      sanskritTerm: 'Nimba Phala & Bija Taila (निम्ब फल एवं बीज तैल)',
      latinOrgan: 'Semen & Oleum',
      icon: Sparkles,
      color: 'purple',
      morphology: 'Greenish-yellow ellipsoidal drupes containing oily seed kernels with extremely high limonoid titers; characteristic pungent sulfurous aroma.',
      phytochemicals: ['Azadirachtin A & B', 'Salannin', 'Meliantriol', 'Oleic Acid (50%)', 'Stearic Acid'],
      therapeuticActions: 'Supreme bio-pesticide, anti-fungal, pediculicidal (lice eradication), and deep tissue regenerator.',
      clinicalIndications: 'Shiras Kushtha (Scalp psoriasis/dandruff), Kitabha (Ringworm), Yuka (Head lice), and deep fungal infections.',
      classicalPreparations: [
        { name: 'Nimba Taila (Cold Pressed Seed Oil)', dose: 'External application only', note: 'Diluted with sesame or coconut oil' },
        { name: 'Jatyadi Taila (Neem Synergy Oil)', dose: 'Topical wound application', note: 'Rapid epithelization of bedsores' }
      ],
      dhatuAffinity: 'Rakta & Mamsa Dhatus',
      srotasAffinity: 'Swedavaha Srotas',
      doshaKarma: 'Kapha-Pitta Shamaka'
    },
    {
      id: 'twigs',
      partName: 'Young Twigs & Shoots',
      sanskritTerm: 'Nimba Datun / Shakha (निम्ब दातून)',
      latinOrgan: 'Ramulus',
      icon: Sprout,
      color: 'teal',
      morphology: 'Slender green flexible branches containing fibrous xylem that frays into natural bristles when chewed, releasing bioactive antibacterial sap.',
      phytochemicals: ['Silicon dioxide fibers', 'Triterpenoids', 'Tannins', 'Flavonoids', 'Vitamin C'],
      therapeuticActions: 'Danta Shodhana (Teeth cleaning), Mukha Daurgandhyahara (Eliminates halitosis), and gingival strengthener.',
      clinicalIndications: 'Danta Harsha (Teeth sensitivity), Danta Krimi (Dental cavities), and Pyorrhea.',
      classicalPreparations: [
        { name: 'Datun Toothbrush', dose: 'Chew fresh twig tip morning', note: 'Releases natural antibacterial agents directly to gums' }
      ],
      dhatuAffinity: 'Asthi & Majja Dhatus',
      srotasAffinity: 'Mukha Srotas (Oral cavity)',
      doshaKarma: 'Balances Kapha in the oral cavity'
    }
  ],
  aloe: [
    {
      id: 'leaves',
      partName: 'Succulent Parenchyma (Inner Gel)',
      sanskritTerm: 'Kumari Majja / Garbha (कुमारी मज्जा)',
      latinOrgan: 'Parenchyma Gel',
      icon: Leaf,
      color: 'emerald',
      morphology: 'Thick succulent lanceolate leaves with spinous margins; inner core consists of clear mucilaginous cellular parenchyma storing 99.5% water with bioactive polysaccharides.',
      phytochemicals: ['Acemannan (β-1,4-acetylated mannan)', 'Glucomannan', 'Bradikinase', 'Superoxide dismutase', 'Vitamin C & E'],
      therapeuticActions: 'Varnya (Complexion enhancer), Vrana Ropana (Wound healer), Dahashamaka (Burning sensation reliever), and adaptogenic demulcent.',
      clinicalIndications: 'Dagdhvrana (Sunburns/thermal burns), Amlapitta (Hyperacidity/GERD), Mukhadushika (Acne), and Kesha Patana (Alopecia/Hair fall).',
      classicalPreparations: [
        { name: 'Fresh Kumari Gel (Pulp)', dose: '15–30 ml blended fresh', note: 'Consumed on empty stomach for gut lining repair' },
        { name: 'Kumaryasava (Fermented Elixir)', dose: '15–20 ml with equal water', note: 'Premier Ayurvedic liver, anemia & hormonal tonic' },
        { name: 'Kanya Lepa (Gel Mask)', dose: 'Topical facial application', note: 'Rehydrates dermal collagen matrix' }
      ],
      dhatuAffinity: 'Rasa, Rakta, Shukra Dhatus',
      srotasAffinity: 'Artavavaha (Reproductive) & Annavaha Srotas (GI tract)',
      doshaKarma: 'Tridosha Shamaka (Particularly pacifies Pitta and Vata)'
    },
    {
      id: 'latex',
      partName: 'Sub-epidermal Bitter Exudate',
      sanskritTerm: 'Kumari Niryasa / Chenna (कुमारी निर्यास)',
      latinOrgan: 'Latex Exudatum',
      icon: Sparkles,
      color: 'amber',
      morphology: 'Yellowish bitter latex situated in pericyclic tubules beneath the green rind; contains intense anthraquinone C-glycosides.',
      phytochemicals: ['Aloin A & B (Barbaloin)', 'Aloe-emodin', 'Isobarbaloin', 'Anthracene derivatives'],
      therapeuticActions: 'Bhedana (Pungent stimulant laxative), Yakridottejaka (Hepatic stimulant), and anthelmintic.',
      clinicalIndications: 'Vibandha (Chronic obstinate constipation), Yakrit Pliha Roga (Hepatosplenomegaly), and Udara Roga (Ascites).',
      classicalPreparations: [
        { name: 'Elwa / Musabbar (Dried Latex Extract)', dose: '125–250 mg', note: 'Micro-dosed in classical digestive pill formulations' }
      ],
      dhatuAffinity: 'Purishavaha Dhatu',
      srotasAffinity: 'Purishavaha Srotas (Large intestine)',
      doshaKarma: 'Clears stagnant Kapha & Pitta through downward purgation (Adhobhaga)'
    },
    {
      id: 'root',
      partName: 'Adventitious Root Network',
      sanskritTerm: 'Kumari Moola (कुमारी मूल)',
      latinOrgan: 'Radix',
      icon: Sprout,
      color: 'teal',
      morphology: 'Shallow fibrous adventitious root system radiating horizontally from base to rapidly capture moisture in dry desert soils.',
      phytochemicals: ['Anthraquinones', 'Phytosterols', 'Mineral silicates'],
      therapeuticActions: 'Astringent, cooling tonic, and uterine stabilizer.',
      clinicalIndications: 'Raktapradara (Menorrhagia/heavy bleeding) and urinary dysuria.',
      classicalPreparations: [
        { name: 'Moola Kashayam (Root Decoction)', dose: '20–30 ml', note: 'Prescribed in classical gynecological formulations' }
      ],
      dhatuAffinity: 'Artava & Rasa Dhatus',
      srotasAffinity: 'Artavavaha Srotas',
      doshaKarma: 'Pitta & Vata Shamaka'
    }
  ],
  ashwagandha: [
    {
      id: 'root',
      partName: 'Medicinal Tuberous Root',
      sanskritTerm: 'Ashwagandha Moola (अश्वगंधा मूल)',
      latinOrgan: 'Radix',
      icon: Layers,
      color: 'amber',
      morphology: 'Straight, cylindrical, conical taproot (10–25 cm long, 1–2 cm diameter) with yellowish-brown outer surface and short starch-rich fracture; distinct equine aroma.',
      phytochemicals: ['Withanolides (Withaferin A, Withanolide D)', 'Withanosides I–VII', 'Alkaloids (Anaferine, Somniferine)', 'Steroidal lactones', 'Sitoindosides'],
      therapeuticActions: 'Supreme Rasayana (Rejuvenator), Balya (Strength promoter), Medhya (Nootropic), Vajikarana (Aphrodisiac), and adaptogenic anti-stress.',
      clinicalIndications: 'Kshaya (General debility/wasting), Manasika Tanav (Chronic stress/Anxiety), Anidra (Insomnia), Sandhivata (Osteoarthritis), and cognitive decline.',
      classicalPreparations: [
        { name: 'Ashwagandha Ksheerapaka (Milk Decoction)', dose: '1 tsp powder simmered in milk', note: 'Taken at bedtime for deep REM sleep and muscle recovery' },
        { name: 'Ashwagandharishta (Fermented Tonic)', dose: '15–25 ml with equal water', note: 'Rebuilds vitality after prolonged illness' },
        { name: 'Churna with Cow Ghee', dose: '3–6 grams twice daily', note: 'Supreme anabolic tonic for muscular stamina' }
      ],
      dhatuAffinity: 'Mamsa, Meda, Asthi, Majja, Shukra Dhatus (All 7 Dhatus)',
      srotasAffinity: 'Manovaha Srotas (Nervous system) & Shukravaha Srotas',
      doshaKarma: 'Pacifies Vata & Kapha; neutral to slight warming on Pitta'
    },
    {
      id: 'leaves',
      partName: 'Velvety Foliage / Leaves',
      sanskritTerm: 'Ashwagandha Patra (अश्वगंधा पत्र)',
      latinOrgan: 'Folium',
      icon: Leaf,
      color: 'emerald',
      morphology: 'Simple, alternate or opposite, ovate-elliptic leaves with dull green surface and velvety tomentose star-shaped hairs.',
      phytochemicals: ['Withaferin A (high concentration)', 'Withanone', 'Chlorogenic acid', 'Flavonol glycosides'],
      therapeuticActions: 'Shothahara (Anti-inflammatory), Vedanasthapana (Analgesic), and powerful antineoplastic cytotoxicity.',
      clinicalIndications: 'Amavata (Rheumatoid arthritis swellings), Granthi (Lymphadenitis/Tumors), and glandular inflammatory swellings.',
      classicalPreparations: [
        { name: 'Patra Kalka (Fresh Leaf Poultice)', dose: 'Warmed with castor oil applied locally', note: 'Rapid reduction in painful arthritic joint effusions' }
      ],
      dhatuAffinity: 'Mamsa & Meda Dhatus',
      srotasAffinity: 'Asthivaha & Sandhivaha Srotas (Joints & Skeletal)',
      doshaKarma: 'Kapha-Vata Shamaka'
    },
    {
      id: 'fruit',
      partName: 'Berry Fruit & Calyx',
      sanskritTerm: 'Ashwagandha Phala (अश्वगंधा फल)',
      latinOrgan: 'Fructus',
      icon: Sparkles,
      color: 'purple',
      morphology: 'Globose smooth berries (6mm diameter) turning orange-red upon ripening, enclosed inside an inflated papery persistent calyx.',
      phytochemicals: ['Withanolide glycosides', 'Proteolytic enzymes', 'Amino acids (Tryptophan, Glycine)', 'Carotenoids'],
      therapeuticActions: 'Diuretic, enzymatic coagulant, and digestive carminative.',
      clinicalIndications: 'Mutrakrichhra (Dysuria), loss of appetite, and traditional milk clotting for cheese fermentation.',
      classicalPreparations: [
        { name: 'Phala Hima (Fruit Infusion)', dose: '20–40 ml', note: 'Milder alternative used in pediatric tonic formulations' }
      ],
      dhatuAffinity: 'Rasa & Mutra Dhatus',
      srotasAffinity: 'Mutravaha Srotas',
      doshaKarma: 'Tridosha Balancer'
    }
  ],
  turmeric: [
    {
      id: 'rhizome',
      partName: 'Underground Golden Rhizome',
      sanskritTerm: 'Haridra Kanda (हरिद्रा कन्द)',
      latinOrgan: 'Rhizoma',
      icon: Layers,
      color: 'amber',
      morphology: 'Fleshy, oblong, ovate pyriform mother rhizome with cylindrical lateral fingers; deep golden-orange interior with warm pungent aromatic smell.',
      phytochemicals: ['Curcumin (Diferuloylmethane)', 'Demethoxycurcumin', 'Bisdemethoxycurcumin', 'Ar-Turmerone', 'Zingiberene', 'Curcumenol'],
      therapeuticActions: 'Varnya (Complexion enhancer), Shothahara (Anti-inflammatory), Krimighna (Antimicrobial), Vishaghna (Antitoxic), and blood glucose regulator.',
      clinicalIndications: 'Prameha (Diabetes mellitus), Amavata (Arthritis), Tvak Roga (Allergic hives/Eczema), Vrana (Wounds), and fatty liver metabolism.',
      classicalPreparations: [
        { name: 'Haridra Khanda (Classical Confection)', dose: '3–6 grams with warm milk', note: 'Premier treatment for chronic allergic rhinitis & urticaria' },
        { name: 'Golden Milk (Haldi Doodh)', dose: '1/2 tsp pure powder with pinch of piperine', note: 'Daily systemic anti-inflammatory elixir' },
        { name: 'Haridra Lepa (Topical Paste)', dose: 'Mixed with curd/rosewater', note: 'Antiseptic complexion beautifier' }
      ],
      dhatuAffinity: 'Rasa, Rakta, Meda, Mamsa Dhatus',
      srotasAffinity: 'Raktavaha Srotas (Circulation) & Medovaha Srotas (Metabolism)',
      doshaKarma: 'Tridosha Shamaka (Pacifies Kapha & Vata; balances Pitta in recommended doses)'
    },
    {
      id: 'leaves',
      partName: 'Broad Lanceolate Leaves',
      sanskritTerm: 'Haridra Patra (हरिद्रा पत्र)',
      latinOrgan: 'Folium',
      icon: Leaf,
      color: 'emerald',
      morphology: 'Large, erect, oblong-lanceolate smooth leaves (up to 1 meter long) with fragrant essential oil vesicles across leaf lamina.',
      phytochemicals: ['Terpinolene', 'Phellandrene', 'Eucalyptol', 'Curzerenone', 'Linalool'],
      therapeuticActions: 'Antiseptic aromatic wrap, diaphoretic steam agent, and culinary preservative.',
      clinicalIndications: 'Pratishyaya (Sinus congestion steam), skin revitalization, and traditional aromatic steaming.',
      classicalPreparations: [
        { name: 'Leaf Steam Inhalation', dose: 'Boiled fresh leaves in water', note: 'Clears blocked nasal passages and sinus phlegm' }
      ],
      dhatuAffinity: 'Rasa & Prana',
      srotasAffinity: 'Pranavaha Srotas',
      doshaKarma: 'Kapha-Vata Shamaka'
    },
    {
      id: 'stem',
      partName: 'Pseudostem & Bracts',
      sanskritTerm: 'Pratanda & Pushpa Manjari (प्रताण्ड एवं पुष्प मञ्जरी)',
      latinOrgan: 'Caulis Pseudostem',
      icon: Sprout,
      color: 'teal',
      morphology: 'Robust pseudostem composed of tightly rolled sheaths terminating in a dense cylindrical spike bearing pale yellow flowers with pink-tipped bracts.',
      phytochemicals: ['Phenolic acids', 'Flavonols', 'Polysaccharides'],
      therapeuticActions: 'Mild astringent, anti-hyperglycemic, and antioxidant.',
      clinicalIndications: 'Metabolic stagnation and mild digestive sluggishness.',
      classicalPreparations: [
        { name: 'Fresh Sheath Juice', dose: '10–15 ml', note: 'Used in tribal folk medicine for seasonal viral chills' }
      ],
      dhatuAffinity: 'Rasa Dhatu',
      srotasAffinity: 'Annavaha Srotas',
      doshaKarma: 'Kapha Shamaka'
    }
  ],
  ginger: [
    {
      id: 'rhizome',
      partName: 'Knobby Subterranean Rhizome',
      sanskritTerm: 'Ardraka (Fresh) / Shunthi (Dry) (आर्द्रक / शुण्ठी)',
      latinOrgan: 'Rhizoma',
      icon: Layers,
      color: 'amber',
      morphology: 'Thick, laterally compressed palmately lobed rhizome with pale buff cork and distinct fiber bundles; intensely pungent spicy taste and warming aroma.',
      phytochemicals: ['Gingerols (6-Gingerol, 8-Gingerol)', 'Shogaols (in dried form)', 'Zingerone', 'Zingiberene (sesquiterpene)', 'Paradols', 'Borneol'],
      therapeuticActions: 'Vishwabheshaja (The Universal Medicine), Deepana (Agni igniter), Pachana (Digestive of toxins), Hridya (Heart tonic), and anti-emetic.',
      clinicalIndications: 'Agnimandya (Indigestion), Chhardi (Nausea/Motion sickness), Kasa-Shwasa (Cough & Bronchial asthma), and Amavata (Joint stiffness).',
      classicalPreparations: [
        { name: 'Ardraka Khanda', dose: '3–5 grams with warm water', note: 'Renowned for chronic respiratory phlegm and digestive fire' },
        { name: 'Trikatu Churna (Compound Trinity)', dose: '1–2 grams with honey', note: 'Pinnacle metabolic & fat burner in Ayurveda' },
        { name: 'Fresh Ginger Salt Appetizer', dose: '1 slice with rock salt 10 min pre-meal', note: 'Awakens digestive enzymes and salivary secretions' }
      ],
      dhatuAffinity: 'Rasa, Rakta, Mamsa, Majja Dhatus',
      srotasAffinity: 'Annavaha Srotas (GI) & Pranavaha Srotas (Lungs)',
      doshaKarma: 'Fresh ginger pacifies Vata & Kapha; Dry ginger (Shunthi) is Tridosha Shamaka'
    },
    {
      id: 'stem',
      partName: 'Slender Reed-like Pseudostem',
      sanskritTerm: 'Ardraka Nala (आर्द्रक नल)',
      latinOrgan: 'Pseudocaulis',
      icon: Sprout,
      color: 'teal',
      morphology: 'Erect leafy pseudostem formed by sheathing leaf bases reaching 60–100 cm in height; stores photosynthetic starch and transports nutrients.',
      phytochemicals: ['Cellulose fibers', 'Volatile monoterpenes', 'Chlorophyll derivatives'],
      therapeuticActions: 'Mild diaphoretic, carminative, and antimicrobial.',
      clinicalIndications: 'Digestive heaviness and throat tickling.',
      classicalPreparations: [
        { name: 'Stem Decoction Infusion', dose: '20–30 ml', note: 'Traditional postpartum cleansing tea' }
      ],
      dhatuAffinity: 'Rasa Dhatu',
      srotasAffinity: 'Annavaha Srotas',
      doshaKarma: 'Kapha Shamaka'
    },
    {
      id: 'leaves',
      partName: 'Linear-Lanceolate Foliage',
      sanskritTerm: 'Ardraka Patra (आर्द्रक पत्र)',
      latinOrgan: 'Folium',
      icon: Leaf,
      color: 'emerald',
      morphology: 'Narrow distichous lanceolate blades with glossy upper surface and pleasant peppery fragrance when crushed.',
      phytochemicals: ['Citral', 'Camphor', 'Camphene', 'Flavonoid antioxidants'],
      therapeuticActions: 'Antibacterial mouth cleanser, aromatherapy decongestant, and digestive carminative.',
      clinicalIndications: 'Oral halitosis, sinus heaviness, and upper respiratory congestion.',
      classicalPreparations: [
        { name: 'Herbal Leaf Infusion', dose: 'Steeped in boiling water as tea', note: 'Caffeine-free refreshing digestive brew' }
      ],
      dhatuAffinity: 'Rasa Dhatu',
      srotasAffinity: 'Pranavaha Srotas',
      doshaKarma: 'Kapha-Vata Shamaka'
    }
  ]
};

export default function ThreeDPlantGarden({ initialPlant, onOpenDetails }) {
  const { t, getPlantCommonName } = useLanguage();
  const { mark3DViewed } = useGamification();

  const plantsWith3D = plantsData.filter(p => p.has3DModel);
  const [currentPlant, setCurrentPlant] = useState(() => {
    return initialPlant && initialPlant.has3DModel ? initialPlant : plantsWith3D[0];
  });

  const [wireframe, setWireframe] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [batterySaver, setBatterySaver] = useState(false);

  // Active anatomical part selection
  const currentAnatomyList = plantAnatomyMap[currentPlant.id] || [];
  const [selectedOrganIndex, setSelectedOrganIndex] = useState(0);

  useEffect(() => {
    if (initialPlant && initialPlant.has3DModel) {
      setCurrentPlant(initialPlant);
    }
  }, [initialPlant]);

  useEffect(() => {
    if (currentPlant) {
      mark3DViewed(currentPlant.id);
      setSelectedOrganIndex(0);
    }
  }, [currentPlant?.id]);

  const activeOrgan = currentAnatomyList[selectedOrganIndex] || currentAnatomyList[0];

  const handleSelectOrgan = (idx) => {
    setSelectedOrganIndex(idx);
  };

  return (
    <div className="space-y-8">
      
      {/* 3D Garden Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-800">
            <Box className="w-3.5 h-3.5" />
            <span>Three.js WebGL Botanical Studio</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            {t.threeD.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            {t.threeD.subtitle}
          </p>
        </div>

        {/* 3D Model Quick Selector Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {plantsWith3D.map((p) => (
            <button
              key={p.id}
              onClick={() => setCurrentPlant(p)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                currentPlant.id === p.id
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'glass-panel border border-emerald-500/20 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
              }`}
            >
              {getPlantCommonName(p)}
            </button>
          ))}
        </div>
      </div>

      {/* Main 3D Canvas & Anatomical Specs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left 7 Cols: High-Fidelity 3D Viewport */}
        <div className="lg:col-span-7 space-y-3">
          <div className="relative">
            <ThreeCanvasViewer
              plant={currentPlant}
              wireframe={wireframe}
              isNightMode={isNightMode}
              autoRotate={autoRotate}
              batterySaver={batterySaver}
            />

            {/* Viewport Control Overlay Buttons */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
              <button
                onClick={() => setBatterySaver(!batterySaver)}
                title="Toggle Performance Mode"
                className={`p-2 rounded-xl backdrop-blur-md border text-xs font-bold transition-all shadow-md ${
                  batterySaver
                    ? 'bg-amber-600 text-white border-amber-500'
                    : 'bg-black/40 text-white border-white/20 hover:bg-black/60'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setAutoRotate(!autoRotate)}
                title="Toggle 360° Auto-Rotation"
                className={`p-2 rounded-xl backdrop-blur-md border text-xs font-bold transition-all shadow-md ${
                  autoRotate
                    ? 'bg-emerald-600 text-white border-emerald-500'
                    : 'bg-black/40 text-white border-white/20 hover:bg-black/60'
                }`}
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setWireframe(!wireframe)}
                title={t.threeD.wireframe}
                className={`p-2 rounded-xl backdrop-blur-md border text-xs font-bold transition-all shadow-md ${
                  wireframe
                    ? 'bg-emerald-600 text-white border-emerald-500'
                    : 'bg-black/40 text-white border-white/20 hover:bg-black/60'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsNightMode(!isNightMode)}
                title={t.threeD.dayNight}
                className="p-2 rounded-xl bg-black/40 text-white border border-white/20 backdrop-blur-md hover:bg-black/60 transition-all shadow-md"
              >
                {isNightMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-200" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 dark:text-slate-400 px-1">
            <span className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-emerald-600" />
              {t.threeD.rotateHint}
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              AYUSH Pharmacopeia Standards
            </span>
          </div>
        </div>

        {/* Right 5 Cols: Detailed Botanical Anatomy Explorer */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-3xl p-5 sm:p-6 glass-panel border border-emerald-500/30 shadow-lg space-y-5">
            
            {/* Header & Organ Selector Pills */}
            <div className="space-y-3 border-b border-emerald-500/10 pb-4">
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  Detailed Anatomical Data
                </h3>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300/40">
                  {currentAnatomyList.length} Organs Cataloged
                </span>
              </div>

              {/* Anatomical Organ Navigation Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {currentAnatomyList.map((organ, idx) => {
                  const Icon = organ.icon || Leaf;
                  const isSelected = selectedOrganIndex === idx;
                  return (
                    <button
                      key={organ.id}
                      onClick={() => handleSelectOrgan(idx)}
                      className={`flex items-center gap-1.5 px-2.5 py-2 rounded-xl text-xs font-bold transition-all text-left ${
                        isSelected
                          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 scale-[1.02]'
                          : 'glass-panel border border-emerald-500/20 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${isSelected ? 'text-white' : 'text-emerald-600 dark:text-emerald-400'}`} />
                      <span className="truncate">{organ.partName.split('/')[0].trim()}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Anatomical Organ Deep-Dive Card */}
            {activeOrgan && (
              <div className="space-y-4 animate-in fade-in">
                
                {/* Organ Header Banner */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50/50 to-white dark:from-emerald-950/50 dark:via-emerald-900/30 dark:to-slate-900 border border-emerald-300/70 dark:border-emerald-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      {activeOrgan.latinOrgan} • Organ Anatomy
                    </span>
                    <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">
                      {activeOrgan.sanskritTerm}
                    </span>
                  </div>
                  <div className="font-heading font-extrabold text-lg text-slate-900 dark:text-white">
                    {activeOrgan.partName}
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed pt-1">
                    {activeOrgan.morphology}
                  </p>
                </div>

                {/* Bioactive Phytochemicals in this Part */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <FlaskConical className="w-3.5 h-3.5 text-teal-600" />
                    Concentrated Bioactive Phytochemicals
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeOrgan.phytochemicals.map((chem) => (
                      <span
                        key={chem}
                        className="px-2.5 py-1 rounded-xl text-xs font-bold glass-panel border border-teal-500/30 text-teal-800 dark:text-teal-300 bg-teal-500/10"
                      >
                        {chem}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Therapeutic Action & Clinical Indications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <div className="p-3 rounded-xl glass-panel border border-emerald-500/20 space-y-1">
                    <div className="text-[10px] uppercase font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
                      <Activity className="w-3 h-3 text-emerald-600" />
                      Therapeutic Action
                    </div>
                    <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
                      {activeOrgan.therapeuticActions}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl glass-panel border border-amber-500/20 space-y-1">
                    <div className="text-[10px] uppercase font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-amber-600" />
                      Clinical Indications
                    </div>
                    <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
                      {activeOrgan.clinicalIndications}
                    </p>
                  </div>
                </div>

                {/* Classical Preparations & Dosage */}
                <div className="space-y-2 pt-1">
                  <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Classical Dosage & Preparation Forms
                  </div>
                  <div className="space-y-1.5">
                    {activeOrgan.classicalPreparations.map((prep) => (
                      <div
                        key={prep.name}
                        className="p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs"
                      >
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white block">
                            {prep.name}
                          </span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400">
                            {prep.note}
                          </span>
                        </div>
                        <span className="font-mono text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded-md self-start sm:self-auto">
                          {prep.dose}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Physiological Dhatu & Dosha Affinity */}
                <div className="p-2.5 rounded-xl bg-emerald-950/10 dark:bg-emerald-950/50 border border-emerald-500/20 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                  <div className="text-slate-700 dark:text-slate-300">
                    <span className="font-bold text-emerald-800 dark:text-emerald-300">Dhatu:</span> {activeOrgan.dhatuAffinity}
                  </div>
                  <div className="text-slate-700 dark:text-slate-300">
                    <span className="font-bold text-amber-700 dark:text-amber-300">Dosha:</span> {activeOrgan.doshaKarma}
                  </div>
                </div>

              </div>
            )}

            {/* Action Footer */}
            <div className="pt-2 border-t border-emerald-500/10">
              <button
                onClick={() => onOpenDetails(currentPlant)}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20"
              >
                <span>View Full Pharmacopeial Record</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Comprehensive Botanical Anatomy Matrix Table */}
      <div className="rounded-3xl p-6 glass-panel border border-emerald-500/30 shadow-lg space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-500/10 pb-3">
          <div>
            <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-600" />
              Comparative Botanical Anatomy Matrix
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Side-by-side anatomical specifications across all utilized organs of {getPlantCommonName(currentPlant)} ({currentPlant.scientificName}).
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
              Family: {currentPlant.family}
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-emerald-500/20 text-slate-500 dark:text-slate-400 font-bold uppercase text-[10px] tracking-wider">
                <th className="py-3 px-3">Organ & Sanskrit Term</th>
                <th className="py-3 px-3">Morphological Characteristics</th>
                <th className="py-3 px-3">Primary Phytochemicals</th>
                <th className="py-3 px-3">Therapeutic Action</th>
                <th className="py-3 px-3">Standard Formulation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-500/10">
              {currentAnatomyList.map((organ, idx) => (
                <tr
                  key={organ.id}
                  onClick={() => handleSelectOrgan(idx)}
                  className={`cursor-pointer transition-colors ${
                    selectedOrganIndex === idx
                      ? 'bg-emerald-500/10 dark:bg-emerald-950/60 font-semibold text-emerald-900 dark:text-emerald-200'
                      : 'hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <td className="py-3 px-3 whitespace-nowrap">
                    <div className="font-bold text-slate-900 dark:text-white">{organ.partName}</div>
                    <div className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold">{organ.sanskritTerm}</div>
                  </td>
                  <td className="py-3 px-3 max-w-xs leading-relaxed line-clamp-2">
                    {organ.morphology}
                  </td>
                  <td className="py-3 px-3">
                    <div className="flex flex-wrap gap-1">
                      {organ.phytochemicals.slice(0, 3).map(c => (
                        <span key={c} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-teal-500/10 text-teal-800 dark:text-teal-300 border border-teal-500/20">
                          {c}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-3 max-w-xs leading-relaxed">
                    {organ.therapeuticActions}
                  </td>
                  <td className="py-3 px-3 whitespace-nowrap">
                    <span className="font-bold text-emerald-700 dark:text-emerald-300">
                      {organ.classicalPreparations[0]?.name || 'Churna'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
