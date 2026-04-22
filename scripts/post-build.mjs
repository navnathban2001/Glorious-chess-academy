import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

const standaloneDir = path.join(rootDir, '.next', 'standalone');
const publicSource = path.join(rootDir, 'public');
const staticSource = path.join(rootDir, '.next', 'static');

const publicDest = path.join(standaloneDir, 'public');
const staticDest = path.join(standaloneDir, '.next', 'static');

function copyRecursiveSync(src, dest) {
    if (!fs.existsSync(src)) return;
    
    const exists = fs.existsSync(dest);
    const stats = fs.statSync(src);
    const isDirectory = stats.isDirectory();
    
    if (isDirectory) {
        if (!exists) fs.mkdirSync(dest, { recursive: true });
        fs.readdirSync(src).forEach((childItemName) => {
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

console.log('--- Post-Build Asset Copy ---');

if (fs.existsSync(standaloneDir)) {
    console.log('Copying public folder to standalone...');
    copyRecursiveSync(publicSource, publicDest);
    
    console.log('Copying .next/static folder to standalone...');
    copyRecursiveSync(staticSource, staticDest);
    
    console.log('Post-build sync complete.');
} else {
    console.error('Error: .next/standalone not found. Ensure "output: standalone" is set in next.config.ts and you ran "next build".');
    process.exit(1);
}
