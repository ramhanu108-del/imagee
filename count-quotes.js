import QUOTES_LIBRARY from './quotes.js';

let totalUnique = 0;
let totalIndian = 0;
let totalGlobal = 0;
let duplicatesId = 0;
let duplicatesText = 0;
let all7 = 0;
let missing7 = 0;

const enQuotes = QUOTES_LIBRARY.en || [];
const uniqueIds = new Set();
const uniqueTexts = new Set();
enQuotes.forEach(q => {
    if (uniqueIds.has(q.id)) {
        duplicatesId++;
    } else {
        uniqueIds.add(q.id);
        
        let indian = ['Indian', 'Hinduism', 'Advaita', 'Yoga', 'Buddhism', 'Jainism', 'Sikhism'].some(i => q.tradition && q.tradition.includes(i));
        if (indian) {
            totalIndian++;
        } else {
            totalGlobal++;
        }
    }
    
    if (uniqueTexts.has(q.text)) {
        duplicatesText++;
    } else {
        uniqueTexts.add(q.text);
    }
});

uniqueIds.forEach(id => {
    let langsWithId = 0;
    ['en', 'hi', 'es', 'fr', 'de', 'pt', 'ja'].forEach(lang => {
        if (QUOTES_LIBRARY[lang] && QUOTES_LIBRARY[lang].some(q => q.id === id)) {
            langsWithId++;
        }
    });
    if (langsWithId === 7) {
        all7++;
    } else {
        missing7++;
    }
});

console.log("Total unique quote objects: " + uniqueIds.size);
console.log("Total Indian philosophy quotes: " + totalIndian);
console.log("Total global/non-Indian quotes: " + totalGlobal);
console.log("Total duplicate IDs: " + duplicatesId);
console.log("Total duplicate English texts: " + duplicatesText);
console.log("Total quotes with all 7 translations: " + all7);
console.log("Total quotes missing any translation: " + missing7);
console.log("Final clean usable quote count after deduplication: " + uniqueIds.size);
