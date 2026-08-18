import os
import re

emoji_pattern = re.compile(
    "[\U00010000-\U0010ffff]|[\u2600-\u26ff]|[\u2700-\u27bf]|[\u2b50-\u2b55]",
    flags=re.UNICODE
)

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.js', '.jsx')):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                matches = emoji_pattern.findall(content)
                if matches:
                    print(f"{path}: {[hex(ord(m)) for m in set(matches)]}")
