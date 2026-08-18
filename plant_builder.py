import json, os

os.makedirs('src/data', exist_ok=True)
all_plants = []

def add_p(p):
    all_plants.append(p)

def save_p():
    with open('src/data/plantsData.js', 'w', encoding='utf-8') as f:
        f.write('export const plantsData = ' + json.dumps(all_plants, indent=2, ensure_ascii=False) + ';\n')
    print(f"Total plants saved: {len(all_plants)}")
