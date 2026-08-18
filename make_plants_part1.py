import json, os

plants = [
  {
    "id": "tulsi",
    "name": "Tulsi",
    "commonNames": {"en": "Holy Basil", "hi": "तुलसी (Tulsi)", "ta": "துளசி (Thulasi)", "bn": "তুলসী (Tulsi)"},
    "scientificName": "Ocimum tenuiflorum",
    "sanskritName": "Surasa, Tulasi (सुरसा, तुलसी)",
    "family": "Lamiaceae",
    "isPopular": True,
    "has3DModel": True,
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80",
    "ayushSystems": ["Ayurveda", "Yoga & Naturopathy", "Siddha", "Unani"],
    "healthCategories": ["Immunity", "Respiratory Health", "Digestive Health", "Mental Wellbeing"],
    "shortDescription": "Known as 'The Incomparable One' and Queen of Herbs, Tulsi is a premier adaptogen revered for respiratory vitality and immune defense.",
    "traditionalSignificance": "Revered in Charaka Samhita as an auspicious Rasayana. In classical Ayurveda, it strengthens Agni (digestive fire), calms Vata and Kapha doshas, and dispels toxic accumulations (Ama).",
    "medicinalUses": [
      "Relieves cough, cold, bronchitis, and respiratory congestion",
      "Supports gut balance, reduces bloating, and stimulates sluggish digestion",
      "Potent adaptogen that lowers cortisol and mitigates everyday mental stress",
      "Natural anti-microbial agent for oral health and topical skin cleansing"
    ],
    "ayurvedicProfile": {
      "rasa": "Katu (Pungent), Tikta (Bitter)",
      "guna": "Laghu (Light), Ruksha (Dry)",
      "virya": "Ushna (Heating)",
      "vipaka": "Katu (Pungent)",
      "doshaKarma": "Balances Kapha & Vata; moderately increases Pitta"
    },
    "phytochemicals": ["Eugenol", "Ursolic Acid", "Rosmarinic Acid", "Caryophyllene", "Apigenin"],
    "partsUsed": ["Leaves", "Seeds", "Roots", "Flowers"],
    "cultivation": {
      "climate": "Tropical / Subtropical",
      "soil": "Well-drained, rich loamy soil (pH 6.5 - 7.5)",
      "sunlight": "4–6 hours of direct sunlight daily",
      "watering": "Moderate; keep soil evenly moist without waterlogging",
      "homeGardening": "Easily cultivated in earthen clay pots on balconies and courtyards."
    },
    "preparations": [
      {"name": "Tulsi Herbal Tea (Swarasa / Kashayam)", "usage": "Boil 5-7 fresh leaves in water with ginger and honey for immunity."},
      {"name": "Tulsi Leaf Powder (Churna)", "usage": "1-2 grams with warm water twice daily."},
      {"name": "Tulsi Essential Oil / Nasya", "usage": "Inhaled in steam for sinus congestion."}
    ],
    "precautions": "Due to its heating nature, avoid excessive dosage during pregnancy or when taking anticoagulant medication.",
    "region": "Throughout India, Southeast Asia",
    "difficulty": "Easy",
    "threeDConfig": {
      "modelType": "tulsi",
      "scale": 1.2,
      "cameraPos": [0, 1.8, 3.2],
      "hotspots": [
        {"id": "leaves", "name": "Leaves (Patra)", "pos": [0, 1.2, 0.4], "description": "Rich in essential oil eugenol; primary part used for teas and cough syrups."},
        {"id": "flowers", "name": "Flower Inflorescence (Manjari)", "pos": [0, 2.1, 0.1], "description": "Loaded with fragrant seeds; used for digestive calm and cooling drinks."},
        {"id": "stem", "name": "Stem & Bark (Kanda)", "pos": [0, 0.7, 0], "description": "Used to craft sacred Tulsi beads (Kanthi) with therapeutic skin contact."},
        {"id": "root", "name": "Root System (Moola)", "pos": [0, -0.2, 0], "description": "Applied in classical formulations for fever management and insect bites."}
      ]
    }
  }
]

os.makedirs('src/data', exist_ok=True)
with open('src/data/plantsData.js', 'w', encoding='utf-8') as f:
    f.write('export const plantsData = ' + json.dumps(plants, indent=2, ensure_ascii=False) + ';\n')
print('Tulsi plant written.')
