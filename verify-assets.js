import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');

if (!fs.existsSync(distDir)) {
    console.error('dist directory does not exist. Did the build fail?');
    process.exit(1);
}

const htmlFiles = fs.readdirSync(distDir).filter(file => file.endsWith('.html'));

let hasError = false;

for (const htmlFile of htmlFiles) {
    const filePath = path.join(distDir, htmlFile);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Check script tags
    const scriptRegex = /<script\s+[^>]*src="([^"]+)"/ig;
    let match;
    while ((match = scriptRegex.exec(content)) !== null) {
        const assetPath = match[1];
        if (assetPath.startsWith('/') && !assetPath.startsWith('//')) {
            const assetFullPath = path.join(distDir, assetPath);
            if (!fs.existsSync(assetFullPath)) {
                console.error(`[ERROR] Missing script asset ${assetPath} referenced in ${htmlFile}`);
                hasError = true;
            }
        }
    }

    // Check link href (like CSS)
    const linkRegex = /<link\s+[^>]*href="([^"]+)"/ig;
    while ((match = linkRegex.exec(content)) !== null) {
        const assetPath = match[1];
        if (assetPath.startsWith('/') && !assetPath.startsWith('//')) {
            const assetFullPath = path.join(distDir, assetPath);
            if (!fs.existsSync(assetFullPath)) {
                console.error(`[ERROR] Missing link asset ${assetPath} referenced in ${htmlFile}`);
                hasError = true;
            }
        }
    }
}

if (hasError) {
    console.error('Asset verification failed. Some assets are missing.');
    process.exit(1);
} else {
    console.log('Asset verification passed. All HTML files reference valid assets.');
}
