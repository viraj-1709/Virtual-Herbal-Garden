import json

questions = [
  {
    "id": "q1",
    "category": "Plant Identification & AYUSH",
    "question": {
      "en": "Which revered medicinal plant is traditionally referred to as 'The Queen of Herbs' and 'The Incomparable One' in Ayurveda?",
      "hi": "आयुर्वेद में किस पूजनीय औषधीय पौधे को 'जड़ी-बूटियों की रानी' और 'तुलना-रहित' कहा जाता है?",
      "ta": "ஆயுர்வேதத்தில் 'மூலிகைகளின் அரசி' என்று பாரம்பரியமாக அழைக்கப்படும் புனித தாவரம் எது?",
      "bn": "আয়ুর্বেদে কোন পবিত্র ঔষধি গাছটিকে 'ভেষজের রানী' হিসেবে উল্লেখ করা হয়?"
    },
    "options": [
      {"text": {"en": "Tulsi (Holy Basil)", "hi": "तुलसी (Tulsi)", "ta": "துளசி (Tulsi)", "bn": "তুলসী (Tulsi)"}, "isCorrect": True},
      {"text": {"en": "Neem (Indian Lilac)", "hi": "नीम (Neem)", "ta": "வேம்பு (Neem)", "bn": "নিম (Neem)"}, "isCorrect": False},
      {"text": {"en": "Aloe Vera (Ghritkumari)", "hi": "घृतकुमारी (Aloe Vera)", "ta": "கற்றாழை (Aloe)", "bn": "ঘৃতকুমারী (Aloe)"}, "isCorrect": False},
      {"text": {"en": "Ashwagandha", "hi": "अश्वगंधा (Ashwagandha)", "ta": "அமுக்கிரா (Ashwagandha)", "bn": "অশ্বগন্ধা (Ashwagandha)"}, "isCorrect": False}
    ],
    "explanation": {
      "en": "Tulsi (Ocimum tenuiflorum) is revered across classical Ayurveda texts as the 'Queen of Herbs' and an unparalleled adaptogen for immunity and respiratory health.",
      "hi": "तुलसी (Ocimum tenuiflorum) को शास्त्रीय ग्रंथों में जड़ी-बूटियों की रानी और रोग प्रतिरोधक क्षमता का उत्कृष्ट रसायन माना गया है।",
      "ta": "துளசி அதன் தனித்துவமான நோய் எதிர்ப்பு சக்தி மற்றும் சுவாச குணங்களுக்காக மூலிகைகளின் அரசியாக போற்றப்படுகிறது.",
      "bn": "তুলসী তার অনন্য রোগ প্রতিরোধ ক্ষমতা এবং শ্বাসযন্ত্রের সুরক্ষার জন্য ভেষজের রানী হিসেবে পরিচিত।"
    }
  },
  {
    "id": "q2",
    "category": "Active Phytochemicals",
    "question": {
      "en": "What is the primary active golden polyphenol found in Turmeric (Curcuma longa) responsible for its potent anti-inflammatory effects?",
      "hi": "हल्दी (Curcuma longa) में पाया जाने वाला प्राथमिक सक्रिय पॉलीफेनोल कौन सा है जो इसके सूजन-रोधी प्रभावों के लिए जिम्मेदार है?",
      "ta": "மஞ்சளில் உள்ள சக்திவாய்ந்த வீக்க எதிர்ப்பு பாலிபினால் எது?",
      "bn": "হলুদের মধ্যে থাকা প্রধান সক্রিয় পলিফেনল কোনটি যা এর প্রদাহ-বিরোধী গুণের জন্য দায়ী?"
    },
    "options": [
      {"text": {"en": "Curcumin", "hi": "करक्यूमिन (Curcumin)", "ta": "குர்குமின் (Curcumin)", "bn": "কারকিউমিন (Curcumin)"}, "isCorrect": True},
      {"text": {"en": "Azadirachtin", "hi": "एज़ाडिराक्टिन (Azadirachtin)", "ta": "அசாடிராக்டின்", "bn": "আজাদির্যাকটিন"}, "isCorrect": False},
      {"text": {"en": "Withanolide A", "hi": "विथानोलाइड ए (Withanolide A)", "ta": "விதனாலாய்டு", "bn": "উইথানোলাইড"}, "isCorrect": False},
      {"text": {"en": "Eugenol", "hi": "यूजेनॉल (Eugenol)", "ta": "யூஜெனால்", "bn": "ইউজেনল"}, "isCorrect": False}
    ],
    "explanation": {
      "en": "Curcumin is the primary bioactive curcuminoid compound in turmeric rhizomes celebrated globally for antioxidant and anti-inflammatory action.",
      "hi": "करक्यूमिन हल्दी का मुख्य बायोएक्टिव घटक है जो सूजन और ऑक्सीडेटिव स्ट्रेस को कम करता है।",
      "ta": "குர்குமின் மஞ்சளில் காணப்படும் முதன்மை வேதிப்பொருளாகும், இது சக்திவாய்ந்த அழற்சி எதிர்ப்பு பண்புகளைக் கொண்டுள்ளது.",
      "bn": "কারকিউমিন হল হলুদের প্রধান জৈব উপাদান যা প্রদাহ দূর করতে সহায়ক।"
    }
  },
  {
    "id": "q3",
    "category": "AYUSH Philosophy",
    "question": {
      "en": "Which AYUSH system is built upon the core philosophy of 'Similia Similibus Curentur' (Like Cures Like)?",
      "hi": "कौन सी आयुष चिकित्सा प्रणाली 'सिमिलिया सिमिलिबस क्युरेंटूर' (समः समं शमयति) के सिद्धांत पर आधारित है?",
      "ta": "'ஒத்தவை ஒத்தவற்றை குணப்படுத்தும்' என்ற கொள்கையின் அடிப்படையில் அமைந்த ஆயுஷ் முறை எது?",
      "bn": "কোন আয়ুষ চিকিৎসা ব্যবস্থা 'লাইক কিউরস লাইক' নীতির ওপর প্রতিষ্ঠিত?"
    },
    "options": [
      {"text": {"en": "Homeopathy", "hi": "होम्योपैथी (Homeopathy)", "ta": "ஹோமியோபதி (Homeopathy)", "bn": "হোমিওপ্যাথি (Homeopathy)"}, "isCorrect": True},
      {"text": {"en": "Ayurveda", "hi": "आयुर्वेद (Ayurveda)", "ta": "ஆயுர்வேதம் (Ayurveda)", "bn": "আয়ুর্বেদ (Ayurveda)"}, "isCorrect": False},
      {"text": {"en": "Unani", "hi": "यूनानी (Unani)", "ta": "யுனானி (Unani)", "bn": "ইউনানি (Unani)"}, "isCorrect": False},
      {"text": {"en": "Siddha", "hi": "सिद्ध (Siddha)", "ta": "சித்தா (Siddha)", "bn": "সিদ্ধ (Siddha)"}, "isCorrect": False}
    ],
    "explanation": {
      "en": "Homeopathy, developed by Dr. Samuel Hahnemann, operates on the Law of Similars—using micro-potencies of natural botanicals to cure matched symptom profiles.",
      "hi": "होम्योपैथी चिकित्सा प्रणाली डॉ सैमुअल हैनीमैन द्वारा स्थापित 'समरूपता के नियम' पर आधारित है।",
      "ta": "ஹோமியோபதி முறை சாமுவேல் ஹானிமன் அவர்களால் உருவாக்கப்பட்ட ஒத்தவை விதி அடிப்படையில் இயங்குகிறது.",
      "bn": "হোমিওপ্যাথি চিকিৎসা ব্যবস্থা ড. স্যামুয়েল হ্যানিম্যান কর্তৃক উদ্ভাবিত সাদৃশ্য নীতির ওপর প্রতিষ্ঠিত।"
    }
  },
  {
    "id": "q4",
    "category": "Plant Anatomy & Parts Used",
    "question": {
      "en": "Which anatomical part of Ashwagandha (Withania somnifera) is primarily dried, ground, and formulated for strength and vitality?",
      "hi": "अश्वगंधा (Withania somnifera) के किस पौधे के हिस्से का उपयोग मुख्य रूप से सुखाकर शक्ति और जीवन शक्ति के लिए किया जाता है?",
      "ta": "அசுவகந்தா தாவரத்தில் வலிமை மற்றும் புத்துணர்ச்சிக்காக முதன்மையாகப் பயன்படுத்தப்படும் பகுதி எது?",
      "bn": "অশ্বগন্ধা উদ্ভিদের কোন অংশটি মূলত শুকিয়ে শক্তি ও সতেজতার জন্য ব্যবহার করা হয়?"
    },
    "options": [
      {"text": {"en": "Roots (Moola)", "hi": "जड़ें (Roots / मूल)", "ta": "வேர்கள் (Roots)", "bn": "মূল / শিকড় (Roots)"}, "isCorrect": True},
      {"text": {"en": "Flowers (Pushpa)", "hi": "फूल (Flowers)", "ta": "மலர்கள் (Flowers)", "bn": "ফুল (Flowers)"}, "isCorrect": False},
      {"text": {"en": "Seeds (Beeja)", "hi": "बीज (Seeds)", "ta": "விதைகள் (Seeds)", "bn": "বীজ (Seeds)"}, "isCorrect": False},
      {"text": {"en": "Bark (Twak)", "hi": "छाल (Bark)", "ta": "பட்டை (Bark)", "bn": "বাকল (Bark)"}, "isCorrect": False}
    ],
    "explanation": {
      "en": "The fleshy roots of Ashwagandha are concentrated with withanolides and adaptogenic saponins, traditionally ground into Churna.",
      "hi": "अश्वगंधा की जड़ों में विथानोलाइड्स प्रचुर मात्रा में होते हैं, जो तनाव को कम करके शारीरिक बल प्रदान करते हैं।",
      "ta": "அசுவகந்தாவின் வேர்களில் தான் அதிக மருத்துவ குணங்கள் கொண்ட விதனாலாய்டுகள் நிறைந்துள்ளன.",
      "bn": "অশ্বগন্ধার মূলে প্রচুর পরিমাণে উইথানোলাইড থাকে যা শারীরিক বল বৃদ্ধি করে।"
    }
  },
  {
    "id": "q5",
    "category": "Traditional Formulations",
    "question": {
      "en": "Which famous botanical triad of herbs forms the classical Ayurvedic formulation 'Triphala'?",
      "hi": "शास्त्रीय आयुर्वेदिक योग 'त्रिफला' किन तीन औषधीय फलों से मिलकर बनता है?",
      "ta": "புகழ்பெற்ற பாரம்பரிய 'திரிபலா' சூரணத்தை உருவாக்கும் மூன்று மூலிகை பழங்கள் எவை?",
      "bn": "বিখ্যাত আয়ুর্বেদিক 'ত্রিফলা' কোন তিনটি ফল নিয়ে গঠিত?"
    },
    "options": [
      {"text": {"en": "Amalaki, Haritaki, Bibhitaki", "hi": "आंवला, हरड़, बहेड़ा", "ta": "நெல்லிக்காய், கடுக்காய், தான்றிக்காய்", "bn": "আমলকী, হরিতকী, বহেরা"}, "isCorrect": True},
      {"text": {"en": "Tulsi, Neem, Giloy", "hi": "तुलसी, नीम, गिलोय", "ta": "துளசி, வேம்பு, சீந்தில்", "bn": "তুলসী, নিম, গুলঞ্চ"}, "isCorrect": False},
      {"text": {"en": "Ginger, Black Pepper, Pippali", "hi": "सोंठ, काली मिर्च, पिप्पली (त्रिकटु)", "ta": "சுக்கு, மிளகு, திப்பிலி", "bn": "শুঁঠ, গোলমরিচ, পিপুল"}, "isCorrect": False},
      {"text": {"en": "Ashwagandha, Shatavari, Brahmi", "hi": "अश्वगंधा, शतावरी, ब्राह्मी", "ta": "அசுவகந்தா, தண்ணீர்விட்டான், பிராமி", "bn": "অশ্বগন্ধা, শতমূলী, ব্রাহ্মী"}, "isCorrect": False}
    ],
    "explanation": {
      "en": "Triphala (Three Fruits) combines Amalaki (Amla), Haritaki (Harad), and Bibhitaki (Baheda)—serving as the pinnacle daily bowel tonic and antioxidant in Ayurveda.",
      "hi": "त्रिफला तीन फलों (आंवला, हरड़ और बहेड़ा) का अद्भुत मिश्रण है जो पाचन और शरीर शुद्धि के लिए सर्वोत्तम माना जाता है।",
      "ta": "திரிபலா என்பது நெல்லிக்காய், கடுக்காய் மற்றும் தான்றிக்காய் ஆகியவற்றின் கலவையாகும்.",
      "bn": "ত্রিফলা হল আমলকী, হরিতকী ও বহেরার সংমিশ্রণ যা হজম ও দেহ শুদ্ধির জন্য শ্রেষ্ঠ।"
    }
  },
  {
    "id": "q6",
    "category": "Plant Identification",
    "question": {
      "en": "Which plant is known as 'Amrita' (Nectar of Immortality) and forms the primary ingredient in Samsamani Vati for immunity and fevers?",
      "hi": "किस पौधे को 'अमृता' (अमरता का अमृत) कहा जाता है और यह रोग प्रतिरोधक क्षमता के लिए संशमनी वटी का मुख्य घटक है?",
      "ta": "'அமிர்தா' என்று அழைக்கப்படும் மற்றும் காய்ச்சலுக்கான முதன்மை மூலிகைக் கொடி எது?",
      "bn": "কোন গাছটিকে 'অমৃতা' বলা হয় এবং এটি জ্বর নিরাময়ে প্রধান উপাদান?"
    },
    "options": [
      {"text": {"en": "Giloy (Guduchi)", "hi": "गिलोय (Guduchi)", "ta": "சீந்தில் கொடி (Giloy)", "bn": "গুলঞ্চ (Giloy)"}, "isCorrect": True},
      {"text": {"en": "Neem", "hi": "नीम", "ta": "வேம்பு", "bn": "নিম"}, "isCorrect": False},
      {"text": {"en": "Aloe Vera", "hi": "घृतकुमारी", "ta": "கற்றாழை", "bn": "ঘৃতকুমারী"}, "isCorrect": False},
      {"text": {"en": "Moringa", "hi": "सहजन", "ta": "முருங்கை", "bn": "সজনে"}, "isCorrect": False}
    ],
    "explanation": {
      "en": "Giloy (Tinospora cordifolia) is hailed as Amrita in classical scriptures for its unmatched immunomodulatory and antipyretic properties.",
      "hi": "गिलोय को अमृत तुल्य माना गया है जो सभी प्रकार के ज्वर को दूर करके प्लेटलेट्स और इम्यूनिटी को बढ़ाता है।",
      "ta": "சீந்தில் கொடி (கிலோய்) நோய் எதிர்ப்பு சக்தியை அதிகரிக்கும் அமிர்த மூலிகையாகும்.",
      "bn": "গুলঞ্চকে রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি এবং জ্বর নিরাময়ের জন্য অমৃত হিসেবে বিবেচনা করা হয়।"
    }
  }
]

with open('src/data/quizData.js', 'w', encoding='utf-8') as f:
    f.write('export const quizQuestions = ' + json.dumps(questions, indent=2, ensure_ascii=False) + ';\n')

print("quizData.js generated.")
