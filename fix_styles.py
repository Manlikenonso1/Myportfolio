import os
import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    original = content

    # 1. Typography
    content = content.replace("font-['Space_Grotesk']", "font-['DM_Sans']")
    
    # 2. General glass-card
    content = content.replace("glass-card", "bg-[var(--card)]")
    
    # 3. Mesh background
    content = content.replace("mesh-bg", "bg-[var(--bg)]")
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated {filepath}")

base_dir = '/Users/manlikenonso/My Porfolio app/src'
for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith('.jsx'):
            process_file(os.path.join(root, file))
print("Done styling replacements.")
