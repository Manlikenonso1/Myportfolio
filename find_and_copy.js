import fs from 'fs';
import path from 'path';

const possiblePaths = [
  '/Users/manlikenonso/Downloads/IMG_1741.jpeg',
  '/Users/manlikenonso/Desktop/IMG_1741.jpeg',
  '/Users/manlikenonso/IMG_1741.jpeg',
  '/Users/manlikenonso/Pictures/IMG_1741.jpeg',
  '/Users/manlikenonso/My Porfolio app/IMG_1741.jpeg',
  '/Users/manlikenonso/Downloads/IMG_1741.jpg',
  '/Users/manlikenonso/Desktop/IMG_1741.jpg',
  '/Users/manlikenonso/IMG_1741.jpg',
  '/Users/manlikenonso/Pictures/IMG_1741.jpg',
];

let found = false;
for (const p of possiblePaths) {
  if (fs.existsSync(p)) {
    console.log(`Found image at ${p}! Copying to public/IMG_1741.jpeg...`);
    fs.copyFileSync(p, './public/IMG_1741.jpeg');
    console.log('Copy complete!');
    found = true;
    break;
  }
}

if (!found) {
  console.log("Could not find IMG_1741.jpeg in standard locations. Let's do a search in main directories.");
  const dirsToSearch = [
    '/Users/manlikenonso/Downloads',
    '/Users/manlikenonso/Desktop',
    '/Users/manlikenonso'
  ];
  for (const dir of dirsToSearch) {
    if (found) break;
    try {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        if (file.toLowerCase() === 'img_1741.jpeg' || file.toLowerCase() === 'img_1741.jpg') {
          const fullPath = path.join(dir, file);
          console.log(`Found image at ${fullPath}! Copying...`);
          fs.copyFileSync(fullPath, './public/IMG_1741.jpeg');
          found = true;
          break;
        }
      }
    } catch (e) {
      // ignore
    }
  }
}

if (!found) {
  console.error("Error: IMG_1741.jpeg not found anywhere!");
}
