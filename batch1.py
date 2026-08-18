import plant_builder as pb

pb.add_p({
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
})

pb.add_p({
    "id": "neem",
    "name": "Neem",
    "commonNames": {"en": "Indian Lilac / Neem", "hi": "नीम (Neem)", "ta": "வேம்பு (Vembu)", "bn": "নিম (Neem)"},
    "scientificName": "Azadirachta indica",
    "sanskritName": "Nimba, Arishta (निम्ब, अरिष्ट)",
    "family": "Meliaceae",
    "isPopular": True,
    "has3DModel": True,
    "image": "https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=800&q=80",
    "bannerImage": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
    "ayushSystems": ["Ayurveda", "Unani", "Siddha", "Yoga & Naturopathy"],
    "healthCategories": ["Skin Health", "Immunity", "General Wellness", "Digestive Health"],
    "shortDescription": "Celebrated as the 'Village Pharmacy of India', Neem is nature's most powerful purifier with bitter cooling properties.",
    "traditionalSignificance": "The Sanskrit word 'Arishta' means 'reliever of sickness'. Renowned in Unani as a premier blood purifier (Musaffi-e-Dam) and in Siddha for deep skin restoration.",
    "medicinalUses": [
      "Treats acne, eczema, psoriasis, and diverse inflammatory skin conditions",
      "Purifies bloodstream and eliminates metabolic toxins (Rakta Shodhaka)",
      "Natural dental cleaner (Datun) that fights plaque and periodontal pathogens",
      "Supports healthy blood sugar levels and enhances liver function"
    ],
    "ayurvedicProfile": {
      "rasa": "Tikta (Bitter), Kashaya (Astringent)",
      "guna": "Laghu (Light), Ruksha (Dry)",
      "virya": "Sheeta (Cooling)",
      "vipaka": "Katu (Pungent)",
      "doshaKarma": "Balances Pitta & Kapha; may aggravate Vata if taken in excess"
    },
    "phytochemicals": ["Azadirachtin", "Nimbin", "Nimbidin", "Quercetin", "Gedunin"],
    "partsUsed": ["Leaves", "Bark", "Twigs", "Seeds", "Seed Oil"],
    "cultivation": {
      "climate": "Arid / Semi-arid / Tropical",
      "soil": "Sandy, stony or nutrient-poor soil with good drainage",
      "sunlight": "Full direct sunlight",
      "watering": "Extremely drought resistant; minimal water once established",
      "homeGardening": "Planted as shade tree outdoors; dwarfed varieties in terrace gardens."
    },
    "preparations": [
      {"name": "Neem Leaf Paste (Lepa)", "usage": "Crushed leaves applied topically for pimples, insect bites, and wounds."},
      {"name": "Neem Decoction Wash (Kashayam)", "usage": "Boiled leaf water used as antiseptic rinse for skin and hair."},
      {"name": "Neem Twig (Datun)", "usage": "Chewed end used as natural antibacterial toothbrush."}
    ],
    "precautions": "Avoid prolonged internal use by infants, pregnant women, or severely dehydrated individuals.",
    "region": "Widespread across the Indian subcontinent",
    "difficulty": "Very Easy",
    "threeDConfig": {
      "modelType": "neem",
      "scale": 1.1,
      "cameraPos": [0, 2.0, 3.5],
      "hotspots": [
        {"id": "leaves", "name": "Compound Leaves", "pos": [0.3, 1.8, 0.3], "description": "Bitter serrated leaves used for blood cleansing, skin remedies, and pest control."},
        {"id": "bark", "name": "Stem Bark", "pos": [0, 0.9, 0], "description": "High in astringent tannins; used in periodontal powders and bitter febrifuges."},
        {"id": "fruit", "name": "Neem Drupe / Seed", "pos": [-0.2, 1.4, 0.3], "description": "Pressed to extract cold-pressed Neem oil, a premier organic antimicrobial oil."},
        {"id": "root", "name": "Taproot", "pos": [0, 0.1, 0], "description": "Extracts historically used in Siddha medicine for deep-seated skin conditions."}
      ]
    }
})
