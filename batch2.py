import plant_builder as pb

pb.add_p({
    "id": "aloe-vera",
    "name": "Aloe Vera",
    "commonNames": {"en": "Aloe Vera / Barbados Aloe", "hi": "घृतकुमारी / एलोवेरा (Ghritkumari)", "ta": "சோற்றுக்கற்றாழை (Sotru Katraazhai)", "bn": "ঘৃতকুমারী (Ghritakumari)"},
    "scientificName": "Aloe barbadensis miller",
    "sanskritName": "Ghritakumari, Kumari (घृतकुमारी, कुमारी)",
    "family": "Asphodelaceae",
    "isPopular": True,
    "has3DModel": True,
    "image": "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=800&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1200&q=80",
    "ayushSystems": ["Ayurveda", "Siddha", "Homeopathy", "Yoga & Naturopathy", "Unani"],
    "healthCategories": ["Skin Health", "Digestive Health", "General Wellness"],
    "shortDescription": "The 'Youth Maiden' herb, famed for its soothing cooling gel that heals burns, rejuvenates skin, and lubricates digestion.",
    "traditionalSignificance": "In Sanskrit, 'Kumari' means young maiden—indicating its unique affinity for female vitality, youthful skin cellular turn-over, and Pitta pacification.",
    "medicinalUses": [
      "Deeply moisturizes, heals burns, sunburns, cuts, and dermatological abrasions",
      "Soothes acid reflux, gastritis, and balances digestive inflammation",
      "Acts as a gentle laxative and detoxifier for sluggish colon motility",
      "Strengthens hair roots, eliminates scalp dandruff, and balances sebum"
    ],
    "ayurvedicProfile": {
      "rasa": "Tikta (Bitter), Madhura (Sweet)",
      "guna": "Guru (Heavy), Snigdha (Unctuous), Picchila (Slimy)",
      "virya": "Sheeta (Cooling)",
      "vipaka": "Madhura (Sweet)",
      "doshaKarma": "Balances all three doshas (Tridosha Shamaka), particularly cooling to Pitta"
    },
    "phytochemicals": ["Aloin", "Acemannan", "Glucomannan", "Anthraquinones", "Vitamin C & E"],
    "partsUsed": ["Inner Leaf Gel (Pulp)", "Leaf Juice", "Latex"],
    "cultivation": {
      "climate": "Arid / Tropical / Subtropical succulent",
      "soil": "Well-draining sandy loam or cactus mix",
      "sunlight": "Bright indirect to moderate direct sunlight",
      "watering": "Low water requirement; allow soil to dry between waterings",
      "homeGardening": "Thrives in windowsill pots and outdoor succulent beds."
    },
    "preparations": [
      {"name": "Fresh Kumari Gel (Pulp)", "usage": "Extracted clear inner fillet applied to face or consumed with cumin for Pitta balance."},
      {"name": "Kumaryasava", "usage": "Classical fermented Ayurvedic elixir for anemia, liver vitality, and menstrual harmony."},
      {"name": "Hair Mask", "usage": "Blended gel combined with coconut oil and hibiscus for silky follicles."}
    ],
    "precautions": "Do not ingest the bitter yellow aloin latex layer if pregnant or experiencing acute inflammatory bowel flares.",
    "region": "Indigenous to Mediterranean & dry regions of India",
    "difficulty": "Very Easy",
    "threeDConfig": {
      "modelType": "aloe",
      "scale": 1.3,
      "cameraPos": [0, 1.4, 2.8],
      "hotspots": [
        {"id": "leaves", "name": "Fleshy Rosette Leaves", "pos": [0.4, 0.9, 0.4], "description": "Stores soothing mucilage gel and acemannan polysaccharides for tissue regeneration."},
        {"id": "stem", "name": "Crown Base", "pos": [0, 0.3, 0], "description": "Central growth axis producing new offsets for propagation."},
        {"id": "root", "name": "Fibrous Root Network", "pos": [0, -0.1, 0], "description": "Shallow root system specialized for rapid moisture capture in arid soils."}
      ]
    }
})

pb.add_p({
    "id": "ashwagandha",
    "name": "Ashwagandha",
    "commonNames": {"en": "Indian Ginseng / Winter Cherry", "hi": "अश्वगंधा (Ashwagandha)", "ta": "அமுக்கிரா (Amukkara)", "bn": "অশ্বগন্ধা (Ashwagandha)"},
    "scientificName": "Withania somnifera",
    "sanskritName": "Ashwagandha, Varahakarni (अश्वगंधा)",
    "family": "Solanaceae",
    "isPopular": True,
    "has3DModel": True,
    "image": "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    "ayushSystems": ["Ayurveda", "Unani", "Siddha"],
    "healthCategories": ["Mental Wellbeing", "Immunity", "General Wellness"],
    "shortDescription": "The pinnacle Medhya & Balya herb of Ayurveda, translating to 'smell and strength of a stallion', bestowing stamina and serenity.",
    "traditionalSignificance": "Celebrated as an elite Rasayana in Charaka Samhita. It nourishes the nervous system (Majja Dhatu) and balances excess Vata caused by burnout.",
    "medicinalUses": [
      "Clinically recognized adaptogen that reduces serum cortisol and anxiety",
      "Enhances deep REM sleep quality without morning sedative grogginess",
      "Boosts physical stamina, muscular endurance, and athletic performance",
      "Supports cognitive recall, focus, and neuroprotective cell vitality"
    ],
    "ayurvedicProfile": {
      "rasa": "Tikta (Bitter), Kashaya (Astringent), Madhura (Sweet)",
      "guna": "Guru (Heavy), Snigdha (Unctuous)",
      "virya": "Ushna (Heating)",
      "vipaka": "Madhura (Sweet)",
      "doshaKarma": "Pacifies Vata & Kapha; neutral-to-slight increase in Pitta"
    },
    "phytochemicals": ["Withanolides (Withaferin A)", "Withanosides", "Alkaloids (Anaferine)", "Saponins"],
    "partsUsed": ["Dried Roots (Primary)", "Leaves", "Berries"],
    "cultivation": {
      "climate": "Dry, sub-tropical regions; needs dry weather for root formation",
      "soil": "Sandy loam or light red soils, pH 7.5 to 8.0",
      "sunlight": "Full sunlight",
      "watering": "Low to moderate; requires dry period before root harvesting",
      "homeGardening": "Cultivated in deep containers to allow root elongation."
    },
    "preparations": [
      {"name": "Ashwagandha Ksheerapaka (Milk Decoction)", "usage": "Simmer 1 tsp root powder in warm milk with nutmeg before bedtime."},
      {"name": "Ashwagandharishta", "usage": "Traditional fermented liquid tonic for memory and physical exhaustion."},
      {"name": "Ashwagandha Churna with Ghee", "usage": "Combined with warm A2 ghee and honey for tissue strength."}
    ],
    "precautions": "Caution in autoimmune thyroid overactivity or acute severe gastritis.",
    "region": "Central and Northwestern India (Madhya Pradesh, Rajasthan)",
    "difficulty": "Moderate",
    "threeDConfig": {
      "modelType": "ashwagandha",
      "scale": 1.1,
      "cameraPos": [0, 1.6, 3.0],
      "hotspots": [
        {"id": "root", "name": "Medicinal Tuberous Root", "pos": [0, 0.1, 0], "description": "The power center of the plant; packed with withanolides for vitality and neural rest."},
        {"id": "leaves", "name": "Velvety Leaves", "pos": [0.2, 1.2, 0.2], "description": "Used topically for joint inflammation and skin boils."},
        {"id": "fruit", "name": "Orange-Red Berries", "pos": [-0.2, 1.5, 0.1], "description": "Enclosed in papery calyces; used in traditional enzyme preparations."}
      ]
    }
})

pb.add_p({
    "id": "turmeric",
    "name": "Turmeric",
    "commonNames": {"en": "Turmeric / Golden Spice", "hi": "हल्दी (Haldi)", "ta": "மஞ்சள் (Manjal)", "bn": "হলুদ (Holud)"},
    "scientificName": "Curcuma longa",
    "sanskritName": "Haridra, Kanchani (हरिद्रा, काञ्चनी)",
    "family": "Zingiberaceae",
    "isPopular": True,
    "has3DModel": True,
    "image": "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    "ayushSystems": ["Ayurveda", "Siddha", "Unani", "Homeopathy"],
    "healthCategories": ["Immunity", "Skin Health", "Digestive Health", "General Wellness"],
    "shortDescription": "The sacred golden root of India with unmatched anti-inflammatory, antioxidant, and wound-healing prowess.",
    "traditionalSignificance": "Detailed in Sushruta Samhita for surgical dressings and blood detoxification (Varnya & Rakta Prasadana).",
    "medicinalUses": [
      "Powerful systemic anti-inflammatory soothing joint stiffness and arthritis",
      "Potent antimicrobial and skin complexion enhancer (Varnya)",
      "Aids bile production, fatty liver metabolism, and digestive comfort",
      "Supports cardiovascular endothelium and cellular DNA protection"
    ],
    "ayurvedicProfile": {
      "rasa": "Tikta (Bitter), Katu (Pungent)",
      "guna": "Laghu (Light), Ruksha (Dry)",
      "virya": "Ushna (Heating)",
      "vipaka": "Katu (Pungent)",
      "doshaKarma": "Tridosha Shamaka (Pacifies Kapha and Vata; balances Pitta in moderation)"
    },
    "phytochemicals": ["Curcumin", "Demethoxycurcumin", "Turmerones", "Zingiberene"],
    "partsUsed": ["Underground Rhizomes (Fresh & Dried)"],
    "cultivation": {
      "climate": "Warm and humid tropical climate (20°C–35°C)",
      "soil": "Rich, loose, well-drained loamy soil with abundant organic compost",
      "sunlight": "Partial shade to full morning sun",
      "watering": "Regular moderate watering; keep soil moist but never muddy",
      "homeGardening": "Grows remarkably well in 12-inch grow bags from live rhizome fingers."
    },
    "preparations": [
      {"name": "Golden Milk (Haldi Doodh)", "usage": "1/2 tsp pure turmeric simmered in milk with a pinch of black pepper (piperine)."},
      {"name": "Haridra Khanda", "usage": "Classical confection used for allergic hives, skin rashes, and respiratory allergies."},
      {"name": "Topical Ubtan Paste", "usage": "Turmeric with chickpea flour and rosewater for radiant skin."}
    ],
    "precautions": "Use therapeutic doses carefully if diagnosed with acute gallstones or bile duct obstructions.",
    "region": "Southern & Eastern India (Erode, Andhra Pradesh, Meghalaya)",
    "difficulty": "Easy",
    "threeDConfig": {
      "modelType": "turmeric",
      "scale": 1.2,
      "cameraPos": [0, 1.5, 3.0],
      "hotspots": [
        {"id": "root", "name": "Golden Rhizome (Kanda)", "pos": [0, 0.2, 0], "description": "Underground spice powerhouse concentrated with curcumin and volatile essential oils."},
        {"id": "leaves", "name": "Broad Lanceolate Leaves", "pos": [0.1, 1.4, 0.2], "description": "Aromatic leaves used in coastal Indian cooking for natural steaming fragrance."},
        {"id": "stem", "name": "Pseudostem & Bracts", "pos": [0, 0.8, 0], "description": "Upright stem leading to picturesque pale yellow flower spikes."}
      ]
    }
})

pb.add_p({
    "id": "ginger",
    "name": "Ginger",
    "commonNames": {"en": "Ginger / Great Medicine", "hi": "अदरक / सोंठ (Adrak / Sonth)", "ta": "இஞ்சி / சுக்கு (Inji / Sukku)", "bn": "আদা (Aada)"},
    "scientificName": "Zingiber officinale",
    "sanskritName": "Ardraka (Fresh), Shunthi (Dry) (आर्द्रक, शुण्ठी)",
    "family": "Zingiberaceae",
    "isPopular": True,
    "has3DModel": True,
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80",
    "ayushSystems": ["Ayurveda", "Unani", "Siddha", "Homeopathy"],
    "healthCategories": ["Digestive Health", "Respiratory Health", "Immunity"],
    "shortDescription": "Acclaimed in Ayurveda as 'Vishwabheshaja' (The Universal Medicine), ignite of digestive fire and vanquisher of nausea.",
    "traditionalSignificance": "Regarded as the universal herbal catalyst. Fresh ginger is Deepana (appetite stimulator), while dry ginger (Shunthi) pacifies Vata without aggravating Pitta.",
    "medicinalUses": [
      "Alleviates indigestion, gas, bloating, and stomach heaviness",
      "Highly effective for morning sickness, motion nausea, and vomiting",
      "Breaks down respiratory mucus and expels cold toxins",
      "Provides relief in menstrual cramping and inflammatory joint pain"
    ],
    "ayurvedicProfile": {
      "rasa": "Katu (Pungent)",
      "guna": "Laghu (Light), Snigdha (Unctuous in dry form)",
      "virya": "Ushna (Heating)",
      "vipaka": "Madhura (Sweet - dry form), Katu (Fresh form)",
      "doshaKarma": "Pacifies Vata & Kapha; excess fresh form can raise Pitta"
    },
    "phytochemicals": ["Gingerols", "Shogaols", "Zingerone", "Paradols", "Zingiberene"],
    "partsUsed": ["Fresh Rhizome", "Dried Rhizome (Sonth / Shunthi)"],
    "cultivation": {
      "climate": "Warm, humid climate with generous shade",
      "soil": "Rich loamy soil with abundant decomposed organic matter",
      "sunlight": "Filtered sunlight / Partial shade",
      "watering": "Consistent moisture; avoid stagnant water",
      "homeGardening": "Grows readily in deep pots or raised patio beds."
    },
    "preparations": [
      {"name": "Ginger Salt Appetizer", "usage": "Slice of fresh ginger with rock salt and lemon juice 10 minutes prior to meals."},
      {"name": "Trikatu Churna", "usage": "Famous classical trinity (Dry Ginger + Black Pepper + Pippali) for metabolic Agni."},
      {"name": "Ginger Tea with Honey", "usage": "Crushed ginger boiled in water for cough, sore throat, and shivering colds."}
    ],
    "precautions": "Moderate intake if suffering from active peptic ulcers or acute bleeding conditions.",
    "region": "Kerala, Assam, Meghalaya, Karnataka",
    "difficulty": "Easy",
    "threeDConfig": {
      "modelType": "ginger",
      "scale": 1.2,
      "cameraPos": [0, 1.4, 2.9],
      "hotspots": [
        {"id": "root", "name": "Knobby Rhizome", "pos": [0, 0.2, 0], "description": "Aromatic subterranean stem loaded with gingerols and digestive bio-actives."},
        {"id": "stem", "name": "Reed-like Pseudostem", "pos": [0, 0.8, 0], "description": "Slender leafy stems growing up to 1 meter in height."},
        {"id": "leaves", "name": "Linear-Lanceolate Leaves", "pos": [0.2, 1.2, 0.1], "description": "Narrow lush green foliage with distinctive pleasant spicy aroma when bruised."}
      ]
    }
})
