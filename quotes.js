const QUOTES_BY_LANG = {
    en: [
        { text: "The unexamined life is not worth living.", author: "Socrates", country: "Greece" },
        { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle", country: "Greece" },
        { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche", country: "Germany" },
        { text: "Everything has beauty, but not everyone sees it.", author: "Confucius", country: "China" },
        { text: "Happiness is not an ideal of reason, but of imagination.", author: "Immanuel Kant", country: "Germany" },
        { text: "We suffer more often in imagination than in reality.", author: "Seneca", country: "Rome" },
        { text: "What you seek is seeking you.", author: "Rumi", country: "Persia" },
        { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", country: "United Kingdom" },
        { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt", country: "USA" },
        { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson", country: "USA" },
        { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein", country: "Germany" },
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", country: "USA" },
        { text: "Carpe Diem. Seize the day.", author: "Horace", country: "Rome" },
        { text: "Character is destiny.", author: "Heraclitus", country: "Greece" },
        { text: "To be, or not to be, that is the question.", author: "William Shakespeare", country: "United Kingdom" },
        { text: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu", country: "China" },
        { text: "Out of the mountain of despair, a stone of hope.", author: "Martin Luther King Jr.", country: "USA" },
        { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela", country: "South Africa" },
        { text: "Darkness cannot drive out darkness; only light can do that.", author: "Martin Luther King Jr.", country: "USA" },
        { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi", country: "India" },
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", author: "Steve Jobs", country: "USA" }
    ],
    hi: [
        { text: "स्वयं को जानना ही सभी ज्ञान की शुरुआत है।", author: "अरस्तू", country: "यूनान" },
        { text: "सफलता अंतिम नहीं है, विफलता घातक नहीं है: जारी रखने का साहस ही मायने रखता है।", author: "विंस्टन चर्चिल", country: "यूनाइटेड किंगडम" },
        { text: "जो आप चाहते हैं वह आपको खोज रहा है।", author: "रूमी", country: "फारस" },
        { text: "आपको वह बदलाव खुद बनना चाहिए जो आप दुनिया में देखना चाहते हैं।", author: "महात्मा गांधी", country: "भारत" },
        { text: "शक्ति शारीरिक क्षमता से नहीं आती है। यह एक अदम्य इच्छाशक्ति से आती है।", author: "महात्मा गांधी", country: "भारत" },
        { text: "कमजोर कभी माफ नहीं कर सकते। क्षमा करना बलवानों का गुण है।", author: "महात्मा गांधी", country: "भारत" },
        { text: "महान कार्य करने का एकमात्र तरीका यह है कि आप जो करते हैं उससे प्यार करें।", author: "स्टीव जॉब्स", country: "यूएसए" },
        { text: "शिक्षा सबसे शक्तिशाली हथियार है जिसका उपयोग आप दुनिया को बदलने के लिए कर सकते हैं।", author: "नेल्सन मंडेला", country: "दक्षिण अफ्रीका" }
    ],
    es: [
        { text: "Conocerse a uno mismo es el principio de toda sabiduría.", author: "Aristóteles", country: "Grecia" },
        { text: "El éxito no es el final, el fracaso no es fatal: es el coraje de continuar lo que cuenta.", author: "Winston Churchill", country: "Reino Unido" },
        { text: "Lo que buscas te está buscando a ti.", author: "Rumi", country: "Persia" },
        { text: "Debes ser el cambio que deseas ver en el mundo.", author: "Mahatma Gandhi", country: "India" },
        { text: "La felicidad no es algo que ya esté hecho. Viene de tus propias acciones.", author: "Dalai Lama", country: "Tíbet" },
        { text: "Solo se vive una vez, pero si lo haces bien, una vez es suficiente.", author: "Mae West", country: "USA" },
        { text: "La única forma de hacer un gran trabajo es amar lo que haces.", author: "Steve Jobs", country: "USA" }
    ],
    fr: [
        { text: "Se connaître soi-même est le début de toute sagesse.", author: "Aristote", country: "Grèce" },
        { text: "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.", author: "Winston Churchill", country: "Royaume-Uni" },
        { text: "Ce que tu cherches te cherche.", author: "Rumi", country: "Perse" },
        { text: "Soyez le changement que vous voulez voir dans le monde.", author: "Mahatma Gandhi", country: "Inde" },
        { text: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", author: "Gandhi", country: "Inde" },
        { text: "Le seul moyen de faire du bon travail est d'aimer ce que vous faites.", author: "Steve Jobs", country: "USA" }
    ],
    de: [
        { text: "Was dich nicht umbringt, macht dich stärker.", author: "Friedrich Nietzsche", country: "Deutschland" },
        { text: "Phantasie ist wichtiger als Wissen, denn Wissen ist begrenzt.", author: "Albert Einstein", country: "Deutschland" },
        { text: "Zwei Dinge sind unendlich, das Universum und die menschliche Dummheit.", author: "Albert Einstein", country: "Deutschland" },
        { text: "Man sieht nur mit dem Herzen gut. Das Wesentliche ist für die Augen unsichtbar.", author: "Antoine de Saint-Exupéry", country: "Frankreich" },
        { text: "Werkzeug formt den Menschen.", author: "Thomas Carlyle", country: "Großbritannien" },
        { text: "Der Weg ist das Ziel.", author: "Konfuzius", country: "China" }
    ],
    pt: [
        { text: "O ignorante afirma, o sábio duvida, o sensato reflete.", author: "Aristóteles", country: "Grécia" },
        { text: "A imaginação é mais importante que o conhecimento.", author: "Albert Einstein", country: "Alemanha" },
        { text: "A felicidade não é um ideal da razão, mas da imaginação.", author: "Immanuel Kant", country: "Alemanha" },
        { text: "O sucesso não é o final, o fracasso não é fatal: é a coragem para continuar que conta.", author: "Winston Churchill", country: "Reino Unido" },
        { text: "Conhece-te a ti mesmo.", author: "Sócrates", country: "Grécia" },
        { text: "Tudo tem beleza, mas nem todos a veem.", author: "Confúcio", country: "China" }
    ],
    ja: [
        { text: "我思う、故に我在り。", author: "ルネ・デカルト", country: "フランス" },
        { text: "知は力なり。", author: "フランシス・ベーコン", country: "イギリス" },
        { text: "千里の道も一歩から。", author: "老子", country: "中国" },
        { text: "無知の知。", author: "ソクラテス", country: "ギリシャ" },
        { text: "想像力は知識よりも重要だ。知識には限界がある。", author: "アルベルト・アインシュタイン", country: "ドイツ" },
        { text: "成功は決定的ではなく、失敗は致命的ではない。大切なのは続ける勇気だ。", author: "ウィンストン・チャーチル", country: "イギリス" }
    ]
};

if (typeof window !== 'undefined') {
    window.QUOTES_LIBRARY = QUOTES_BY_LANG;
}
export default QUOTES_BY_LANG;
