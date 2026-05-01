/**
 * SmartTools Hub - Unique Philosopher Wisdom Repository
 * ---------------------------------------------------
 * Structure: ID, Author, Era, Tradition, Category, Translations.
 * Only public-domain, licensed, or original/paraphrased translations should be added.
 */

const RAW_PHILOSOPHER_QUOTES = [
    {
        id: "phil_in_0001",
        author: "Sri Aurobindo",
        era: "20th Century India",
        tradition: "Integral Yoga",
        category: "Change",
        region: "India",
        translations: {
            en: "All life is Yoga.",
            hi: "समस्त जीवन योग है।",
            es: "Toda la vida es Yoga.",
            fr: "Toute vie est Yoga.",
            de: "Alles Leben ist Yoga.",
            pt: "Toda a vida é Yoga.",
            ja: "すべての生はヨガである。"
        }
    },
    {
        id: "phil_in_0002",
        author: "Guru Nanak",
        era: "15th Century India",
        tradition: "Sikhism",
        category: "Truth",
        region: "India",
        translations: {
            en: "Truth is higher than everything, but higher still is truthful living.",
            hi: "सत्य सब कुछ से ऊँचा है, लेकिन सत्य का जीवन और भी ऊँचा है।",
            es: "La verdad es superior a todo, pero aún superior es la vida veraz.",
            fr: "La vérité est plus haute que tout, mais vivre dans la vérité est encore plus haut.",
            de: "Die Wahrheit steht über allem, aber noch höher ist wahrhaftiges Leben.",
            pt: "A verdade é superior a tudo, mas ainda superior é viver de forma verdadeira.",
            ja: "真理はすべてより高いが、真理に基づいた生き方はさらに高い。"
        }
    },
    {
        id: "phil_in_0003",
        author: "Gautama Buddha",
        era: "Ancient India",
        tradition: "Buddhism",
        category: "Peace",
        region: "India",
        translations: {
            en: "Peace comes from within. Do not seek it without.",
            hi: "शांति भीतर से आती है। इसे बाहर मत खोजो।",
            es: "La paz viene de adentro. No la busques afuera.",
            fr: "La paix vient de l'intérieur. Ne la cherchez pas à l'extérieur.",
            de: "Der Frieden kommt von innen. Suche ihn nicht im Außen.",
            pt: "A paz vem de dentro. Não a procure fora.",
            ja: "平和は内から来る。外に求めてはならない。"
        }
    },
    {
        id: "phil_in_0004",
        author: "Chanakya",
        era: "4th Century BC India",
        tradition: "Arthashastra",
        category: "Action",
        region: "India",
        translations: {
            en: "A man is great by deeds, not by birth.",
            hi: "मनुष्य कर्म से महान होता है, जन्म से नहीं।",
            es: "Un hombre es grande por sus acciones, no por su nacimiento.",
            fr: "Un homme est grand par ses actes, non par sa naissance.",
            de: "Ein Mann ist durch seine Taten groß, nicht durch seine Geburt.",
            pt: "Um homem é grande pelas ações, não pelo nascimento.",
            ja: "人は行いによって偉大になるのであり、生まれによるのではない。"
        }
    },
    {
        id: "phil_000001",
        author: "Marcus Aurelius",
        era: "Ancient Rome",
        tradition: "Stoicism",
        category: "Wisdom",
        translations: {
            en: "The soul becomes dyed with the color of its thoughts.",
            hi: "आत्मा अपने विचारों के रंग में रंग जाती है।",
            es: "El alma se tiñe del color de sus pensamientos.",
            fr: "L’âme prend la couleur de ses pensées.",
            de: "Die Seele nimmt die Farbe ihrer Gedanken an.",
            pt: "A alma se tinge com a cor de seus pensamentos.",
            ja: "魂は思考の色に染まる。"
        }
    },
    {
        id: "phil_000002",
        author: "Socrates",
        era: "Ancient Greece",
        tradition: "Socratic Phil",
        category: "Knowledge",
        translations: {
            en: "The unexamined life is not worth living.",
            hi: "बिना परखा गया जीवन जीने योग्य नहीं है।",
            es: "La vida no examinada no vale la pena vivirla.",
            fr: "Une vie sans examen ne vaut pas la peine d'être vécue.",
            de: "Ein ungeprüftes Leben ist nicht lebenswert.",
            pt: "A vida não examinada não vale a pena ser vivida.",
            ja: "吟味されない人生に、生きる価値はない。"
        }
    },
    {
        id: "phil_000003",
        author: "Lao Tzu",
        era: "Ancient China",
        tradition: "Taoism",
        category: "Journey",
        translations: {
            en: "A journey of a thousand miles begins with a single step.",
            hi: "हजारों मील की यात्रा एक कदम से शुरू होती है।",
            es: "Un viaje de mil millas comienza con un solo paso.",
            fr: "Un voyage de mille lieues commence par un seul pas.",
            de: "Eine Reise von tausend Meilen beginnt mit einem einzigen Schritt.",
            pt: "Uma jornada de mil milhas começa com um único passo.",
            ja: "千里の道も一歩から。"
        }
    },
    {
        id: "phil_000004",
        author: "Adi Shankaracharya",
        era: "Ancient India",
        tradition: "Advaita Vedanta",
        category: "Consciousness",
        region: "India",
        translations: {
            en: "Knowledge is the only means to liberation.",
            hi: "ज्ञान ही मुक्ति का एकमात्र साधन है।",
            es: "El conocimiento es el único medio para la liberación.",
            fr: "La connaissance est le seul moyen de libération.",
            de: "Wissen ist das einzige Mittel zur Befreiung.",
            pt: "O conhecimento é o único meio para a libertação.",
            ja: "知識のみが解脱への唯一の手段である。"
        }
    },
    {
        id: "phil_000005",
        author: "Seneca",
        era: "Ancient Rome",
        tradition: "Stoicism",
        category: "Resilience",
        translations: {
            en: "Difficulties strengthen the mind, as labor does the body.",
            hi: "कठिनाइयां मन को मजबूत करती हैं, जैसे श्रम शरीर को करता है।",
            es: "Las dificultades fortalecen la mente, como el trabajo lo hace con el cuerpo.",
            fr: "Les difficultés renforcent l'esprit, comme le travail le fait pour le corps.",
            de: "Schwierigkeiten stärken den Geist, wie Arbeit den Körper.",
            pt: "As dificuldades fortalecem a mente, assim como o trabalho faz com o corpo.",
            ja: "困難は、労働が肉体を鍛えるように、精神を鍛える。"
        }
    },
    {
        id: "phil_000006",
        author: "Confucius",
        era: "Ancient China",
        tradition: "Confucianism",
        category: "Learning",
        translations: {
            en: "He who learns but does not think is lost! He who thinks but does not learn is in great danger.",
            hi: "वह जो सीखता है पर सोचता नहीं, खो गया है! वह जो सोचता है पर सीखता नहीं, बड़े खतरे में है।",
            es: "¡El que aprende pero no piensa está perdido! El que piensa pero no aprende está en gran peligro.",
            fr: "Celui qui apprend mais ne pense pas est perdu ! Celui qui pense mais n'apprend pas est en grand danger.",
            de: "Wer lernt, aber nicht denkt, ist verloren! Wer denkt, aber nicht lernt, ist in großer Gefahr.",
            pt: "Aquele que aprende mas não pensa está perdido! Aquele que pensa mas não aprende está em perigo.",
            ja: "学びて思わざれば則ち罔（くら）し、思いて学ばざれば則ち殆（あやう）し。"
        }
    },
    {
        id: "phil_in_0142",
        author: "Mahavira",
        era: "6th Century BC India",
        tradition: "Jainism",
        category: "Self-Conquest",
        region: "India",
        translations: {
            en: "Conquer yourself and you have conquered the world.",
            hi: "खुद को जीतो और तुमने दुनिया को जीत लिया है।",
            es: "Conquístate a ti mismo y habrás conquistado el mundo.",
            fr: "Conquiers-toi toi-même et tu auras conquis le monde.",
            de: "Besiege dich selbst und du hast die Welt besiegt.",
            pt: "Conquiste a si mesmo e você terá conquistado o mundo.",
            ja: "己に勝て。そうすれば世界に勝ったことになる。"
        }
    },
    {
        id: "phil_in_0143",
        author: "Kabir",
        era: "15th Century India",
        tradition: "Bhakti Movement",
        category: "Unity",
        region: "India",
        translations: {
            en: "I look at the world and I laugh; everyone is searching for God outside, but God is within.",
            hi: "मैं दुनिया को देखता हूँ और हँसता हूँ; हर कोई बाहर भगवान को खोज रहा है, लेकिन भगवान भीतर हैं।",
            es: "Miro al mundo y me río; todos buscan a Dios fuera, pero Dios está dentro.",
            fr: "Je regarde le monde et je ris ; tout le monde cherche Dieu à l'extérieur, mais Dieu est à l'intérieur.",
            de: "Ich schaue auf die Welt und lache; jeder sucht Gott im Außen, aber Gott ist im Inneren.",
            pt: "Olho para o mundo e rio; todos procuram por Deus fora, mas Deus está dentro.",
            ja: "私は世界を見て笑う。誰もが外側に神を探しているが、神は内側におられるのだ。"
        }
    },
    {
        id: "phil_in_0144",
        author: "Ramana Maharshi",
        era: "20th Century India",
        tradition: "Advaita",
        category: "Self-Inquiry",
        region: "India",
        translations: {
            en: "Who am I?",
            hi: "मैं कौन हूँ?",
            es: "¿Quién soy yo?",
            fr: "Qui suis-je ?",
            de: "Wer bin ich?",
            pt: "Quem sou eu?",
            ja: "私は誰か？"
        }
    },
    {
        id: "phil_in_0145",
        author: "Swami Vivekananda",
        era: "19th Century India",
        tradition: "Modern Vedanta",
        category: "Hope",
        region: "India",
        translations: {
            en: "Arise, awake, and stop not till the goal is reached.",
            hi: "उठो, जागो और तब तक मत रुको जब तक लक्ष्य प्राप्त न हो जाए।",
            es: "Levántate, despierta y no te detengas hasta alcanzar la meta.",
            fr: "Lève-toi, réveille-toi et ne t'arrête pas tant que le but n'est pas atteint.",
            de: "Steh auf, wach auf und höre nicht auf, bis das Ziel erreicht ist.",
            pt: "Levante-se, desperte e não pare até que o objetivo seja alcançado.",
            ja: "立て、目覚めよ、そして目的地に達するまで止まるな。"
        }
    },
    {
        id: "phil_in_0146",
        author: "Jiddu Krishnamurti",
        era: "20th Century India",
        tradition: "Modern Thought",
        category: "Fear",
        region: "India",
        translations: {
            en: "Freedom from the desire for an answer is essential to the understanding of a problem.",
            hi: "किसी समस्या को समझने के लिए उत्तर की इच्छा से मुक्ति आवश्यक है।",
            es: "La libertad del deseo de una respuesta es esencial para la comprensión de un problema.",
            fr: "La libération du désir d'une réponse est essentielle à la compréhension d'un problème.",
            de: "Die Freiheit vom Wunsch nach einer Antwort ist für das Verständnis eines Problems unerlässlich.",
            pt: "A liberdade do desejo por uma resposta é essencial para a compreensão de um problema.",
            ja: "問いへの答えを求める欲望から自由になることが、問題を理解するためには不可欠である。"
        }
    }
];

/**
 * Global Quotes Engine
 */
const QUOTES_LIBRARY = {};
const availableLanguages = ["en", "hi", "es", "fr", "de", "pt", "ja"];

function normalizeQuoteText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[.,!?;:]+$/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

for (const lang of availableLanguages) {
    if (!QUOTES_LIBRARY[lang]) {
        QUOTES_LIBRARY[lang] = [];
    }
    
    let seenText = new Set();
    let seenId = new Set();
    let duplicatesRemoved = 0;

    for (const raw of RAW_PHILOSOPHER_QUOTES) {
        if (!raw.translations || !raw.translations[lang]) continue;
        
        const quoteText = raw.translations[lang];
        let isDuplicate = false;
        
        if (lang === 'en') {
            const norm = normalizeQuoteText(quoteText);
            const DEBUG_MODE = false;
            if (seenText.has(norm)) {
                if (DEBUG_MODE) console.warn('Duplicate Quote Text detected: "' + quoteText + '"');
                isDuplicate = true;
                duplicatesRemoved++;
            } else {
                seenText.add(norm);
            }
            
            if (raw.id && seenId.has(raw.id)) {
                if (DEBUG_MODE) console.warn('Duplicate ID: ' + raw.id);
                isDuplicate = true;
                duplicatesRemoved++;
            } else if (raw.id) {
                seenId.add(raw.id);
            }
        }

        // Make sure it doesn't add blank auths or blank quotes
        if (!isDuplicate && quoteText && raw.author) {
             QUOTES_LIBRARY[lang].push({
                 id: raw.id,
                 text: quoteText,
                 author: String(raw.author || ""),
                 era: raw.era,
                 category: raw.category
             });
        }
    }
}

export default QUOTES_LIBRARY;
