from pathlib import Path
files=[p for p in Path('.').rglob('*') if p.is_file() and '.git' not in p.parts]
print('Total files:', len(files))
for folder in ['pages','assets','data','schemas','content','templates','playbooks','prompts']:
    print(folder, len([p for p in Path(folder).rglob('*') if p.is_file()]) if Path(folder).exists() else 0)
