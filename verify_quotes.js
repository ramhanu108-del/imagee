
import fs from 'fs';

// Helper to extract the array from quotes.js
// Since it's an ESM export, we might need a trick or just simple regex for verification
const content = fs.readFileSync('./quotes.js', 'utf8');

// Use a simplified parsing logic for verification
const quoteBlocks = content.match(/\{[\s\S]*?id:\s*"(phil_.*?)"[\s\S]*?\}/g) || [];

console.log('Total quote objects found:', quoteBlocks.length);

const ids = new Set();
const texts = new Set();
const missingTranslations = [];
const duplicateIds = [];
const duplicateTexts = [];

quoteBlocks.forEach((block, index) => {
    const idMatch = block.match(/id:\s*"(.*?)"/);
    const enMatch = block.match(/en:\s*"(.*?)"/);
    
    if (!idMatch) return;
    const id = idMatch[1];
    
    if (ids.has(id)) {
        duplicateIds.push(id);
    }
    ids.add(id);
    
    if (enMatch) {
        const text = enMatch[1];
        if (texts.has(text)) {
            duplicateTexts.push({ id, text });
        }
        texts.add(text);
    }

    const translations = ['en', 'hi', 'es', 'fr', 'de', 'pt', 'ja'];
    translations.forEach(lang => {
        const regex = new RegExp(`${lang}:\\s*"(.*?)"`);
        if (!block.match(regex)) {
            missingTranslations.push({ id, lang });
        }
    });
});

console.log('Unique IDs:', ids.size);
console.log('Duplicate IDs:', duplicateIds);
console.log('Duplicate English texts:', duplicateTexts);
console.log('Missing translations count:', missingTranslations.length);
if (missingTranslations.length > 0) {
    console.log('Missing translations (first 5):', missingTranslations.slice(0, 5));
}
