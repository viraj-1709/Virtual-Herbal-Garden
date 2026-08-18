import os

found = []
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.js', '.jsx')):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                txt = f.read()
                if 'unsplash' in txt:
                    found.append(path)

print("Files containing unsplash:", found)
