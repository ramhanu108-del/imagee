// SmartTools Hub - Native Quotes Library (Final 205 Edition)
// Distribution: Indian (50), Western (50), Chinese (35), Japanese/Zen (25), Buddhist/Sufi (25), Global (20)

const RAW_PHILOSOPHER_QUOTES = [
    {
        id: "phil_in_001",
        author: "Adi Shankaracharya",
        era: "8th Century",
        tradition: "Advaita Vedanta",
        category: "Self-Knowledge",
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
        id: "phil_in_002",
        author: "Swami Vivekananda",
        era: "19th Century",
        tradition: "Modern Vedanta",
        category: "Strength",
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
        id: "phil_in_003",
        author: "Chanakya",
        era: "4th Century BC",
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
        id: "phil_in_004",
        author: "Gautama Buddha",
        era: "Ancient",
        tradition: "Buddhism",
        category: "Mind",
        region: "India",
        translations: {
            en: "All that we are is the result of what we have thought.",
            hi: "हम जो कुछ भी हैं, वह हमारे विचारों का ही परिणाम है।",
            es: "Todo lo que somos es el resultado de lo que hemos pensado.",
            fr: "Tout ce que nous sommes est le résultat de ce que nous avons pensé.",
            de: "Alles, was wir sind, ist das Ergebnis dessen, was wir gedacht haben.",
            pt: "Tudo o que somos é o resultado do que pensamos.",
            ja: "我々のすべては、我々が考えたことの結果である。"
        }
    },
    {
        id: "phil_in_005",
        author: "Kabir",
        era: "15th Century",
        tradition: "Bhakti",
        category: "Unity",
        region: "India",
        translations: {
            en: "God is within, why seek Him without?",
            hi: "परमात्मा भीतर है, उसे बाहर क्यों खोजते हो?",
            es: "Dios está dentro, ¿por qué buscarlo fuera?",
            fr: "Dieu est à l'intérieur, pourquoi le chercher à l'extérieur ?",
            de: "Gott ist im Inneren, warum suchst du ihn draußen?",
            pt: "Deus está dentro, por que buscá-Lo fora?",
            ja: "神は内にあり、なぜ外に探すのか？"
        }
    },
    {
        id: "phil_in_006",
        author: "Ramana Maharshi",
        era: "20th Century",
        tradition: "Advaita",
        category: "Self-Inquiry",
        region: "India",
        translations: {
            en: "Silence is the most powerful speech.",
            hi: "मौन ही सबसे शक्तिशाली वाणी है।",
            es: "El silencio es el habla más poderosa.",
            fr: "Le silence est le discours le plus puissant.",
            de: "Stille ist die mächtigste Rede.",
            pt: "O silêncio é a fala mais poderosa.",
            ja: "沈黙は最も強力な演説である。"
        }
    },
    {
        id: "phil_in_007",
        author: "Mahavira",
        era: "Ancient",
        tradition: "Jainism",
        category: "Compassion",
        region: "India",
        translations: {
            en: "Non-violence is the highest duty.",
            hi: "अहिंसा परमो धर्मः।",
            es: "La no violencia es el deber supremo.",
            fr: "La non-violence est le devoir suprême.",
            de: "Gewaltlosigkeit ist die höchste Pflicht.",
            pt: "A não violência é o dever supremo.",
            ja: "非暴力は最高の義務である。"
        }
    },
    {
        id: "phil_in_008",
        author: "Guru Nanak",
        era: "15th Century",
        tradition: "Sikhism",
        category: "Truth",
        region: "India",
        translations: {
            en: "Truth is higher than everything.",
            hi: "सत्य सब कुछ से ऊपर है।",
            es: "La verdad es superior a todo.",
            fr: "La vérité est plus haute que tout.",
            de: "Wahrheit steht über allem.",
            pt: "A verdade está acima de tudo.",
            ja: "真理はすべてより高い。"
        }
    },
    {
        id: "phil_in_009",
        author: "Patanjali",
        era: "Ancient",
        tradition: "Yoga",
        category: "Mind",
        region: "India",
        translations: {
            en: "Yoga is the cessation of the fluctuations of the mind.",
            hi: "चित्त की वृत्तियों का निरोध ही योग है।",
            es: "El yoga es el cese de las fluctuaciones de la mente.",
            fr: "Le yoga est la cessation des fluctuations de l'esprit.",
            de: "Yoga ist das Zur-Ruhe-Bringen der Gedanken im Geist.",
            pt: "Yoga é a cessação das flutuações da mente.",
            ja: "ヨガとは心の働きを止めることである。"
        }
    },
    {
        id: "phil_in_010",
        author: "Ramanuja",
        era: "11th Century",
        tradition: "Vishishtadvaita",
        category: "Devotion",
        region: "India",
        translations: {
            en: "All knowledge is of the real.",
            hi: "सभी ज्ञान यथार्थ का ही है।",
            es: "Todo conocimiento es de lo real.",
            fr: "Toute connaissance est celle du réel.",
            de: "Alles Wissen ist Wissen vom Wirklichen.",
            pt: "Todo conhecimento é do real.",
            ja: "すべての知識は実在に関するものである。"
        }
    },
    {
        id: "phil_in_011",
        author: "Ramakrishna Paramahamsa",
        era: "19th Century",
        tradition: "Mysticism",
        category: "Unity",
        region: "India",
        translations: {
            en: "Many are the names of God and infinite the forms through which He may be approached.",
            hi: "ईश्वर के अनेक नाम हैं और वे अनंत रूप हैं जिनसे उनके पास पहुंचा जा सकता है।",
            es: "Muchos son los nombres de Dios e infinitas las formas a través de las cuales se puede llegar a Él.",
            fr: "Les noms de Dieu sont nombreux et les formes par lesquelles on peut l'approcher sont infinies.",
            de: "Gott hat viele Namen und unendlich viele Formen, durch die man sich ihm nähern kann.",
            pt: "Muitos são os nomes de Deus e infinitas as formas pelas quais Ele pode ser abordado.",
            ja: "神の名は多く、神に近づくための形は無限である。"
        }
    },
    {
        id: "phil_in_012",
        author: "Basavanna",
        era: "12th Century",
        tradition: "Lingayatism",
        category: "Work",
        region: "India",
        translations: {
            en: "Work is Worship.",
            hi: "काय कवे कैलास (कार्य ही पूजा है)।",
            es: "El trabajo es adoración.",
            fr: "Le travail est une adoration.",
            de: "Arbeit ist Gottesdienst.",
            pt: "O trabalho é adoração.",
            ja: "労働は礼拝である。"
        }
    },
    {
        id: "phil_in_013",
        author: "Mirabai",
        era: "16th Century",
        tradition: "Bhakti",
        category: "Devotion",
        region: "India",
        translations: {
            en: "I am trapped in the sea of existence; save me, my Lord.",
            hi: "मैं भवसागर में फंसी हूँ; हे प्रभु, मेरी रक्षा करें।",
            es: "Estoy atrapada en el mar de la existencia; sálvame, mi Señor.",
            fr: "Je suis prisonnière de la mer de l'existence ; sauve-moi, mon Seigneur.",
            de: "Ich bin im Meer des Daseins gefangen; rette mich, mein Herr.",
            pt: "Estou presa no mar da existência; salve-me, meu Senhor.",
            ja: "私は存在の海に囚われています。主よ、私をお救いください。"
        }
    },
    {
        id: "phil_in_014",
        author: "Tulsidas",
        era: "16th Century",
        tradition: "Bhakti",
        category: "Compassion",
        region: "India",
        translations: {
            en: "Compassion is the root of all religion.",
            hi: "दया धर्म का मूल है।",
            es: "La compasión es la raíz de toda religión.",
            fr: "La compassion est la racine de toute religion.",
            de: "Mitgefühl ist die Wurzel aller Religion.",
            pt: "A compaixão é a raiz de toda religião.",
            ja: "慈悲はすべての宗教の根源である。"
        }
    },
    {
        id: "phil_in_015",
        author: "Tukaram",
        era: "17th Century",
        tradition: "Bhakti",
        category: "Humility",
        region: "India",
        translations: {
            en: "God is for the lowliest of the low.",
            hi: "ईश्वर सबसे दीन-हीन के लिए है।",
            es: "Dios es para los más humildes entre los humildes.",
            fr: "Dieu est pour les plus humbles des humbles.",
            de: "Gott ist für die Geringsten der Geringen.",
            pt: "Deus é para os mais humildes dos humildes.",
            ja: "神は最も卑しい人々のためのものである。"
        }
    },
    {
        id: "phil_in_016",
        author: "Nagarjuna",
        era: "2nd Century",
        tradition: "Madhyamaka",
        category: "Emptiness",
        region: "India",
        translations: {
            en: "Everything exists only in relation to something else.",
            hi: "सब कुछ केवल किसी और के संबंध में मौजूद है।",
            es: "Todo existe solo en relación con algo más.",
            fr: "Tout n'existe qu'en relation avec autre chose.",
            de: "Alles existiert nur in Bezug auf etwas anderes.",
            pt: "Tudo existe apenas em relação a outra coisa.",
            ja: "すべては他の何かとの関係においてのみ存在する。"
        }
    },
    {
        id: "phil_in_017",
        author: "Basavanna",
        era: "12th Century",
        tradition: "Lingayatism",
        category: "Equality",
        region: "India",
        translations: {
            en: "Don't steal, don't kill, don't lie.",
            hi: "चोरी न करें, हत्या न करें, झूठ न बोलें।",
            es: "No robes, no mates, no mientas.",
            fr: "Ne vole pas, ne tue pas, ne mens pas.",
            de: "Stehle nicht, töte nicht, lüge nicht.",
            pt: "Não roube, não mate, não minta.",
            ja: "盗むな、殺すな、嘘をつくな。"
        }
    },
    {
        id: "phil_in_018",
        author: "Sant Ravidas",
        era: "15th Century",
        tradition: "Bhakti",
        category: "Purity",
        region: "India",
        translations: {
            en: "If the mind is pure, the water in the pot is as holy as the Ganges.",
            hi: "मन चंगा तो कठौती में गंगा।",
            es: "Si la mente es pura, el agua en la vasija es tan sagrada como el Ganges.",
            fr: "Si l'esprit est pur, l'eau du pot est aussi sacrée que le Gange.",
            de: "Wenn der Geist rein ist, ist das Wasser im Topf so heilig wie der Ganges.",
            pt: "Si a mente é pura, a água no pote é tão sagrada quanto o Gange.",
            ja: "心が清らかであれば、鉢の水はガンジス川と同じくらい神聖である。"
        }
    },
    {
        id: "phil_in_019",
        author: "Sarvepalli Radhakrishnan",
        era: "20th Century",
        tradition: "Idealism",
        category: "Education",
        region: "India",
        translations: {
            en: "The end-product of education should be a free creative man.",
            hi: "शिक्षा का अंतिम उत्पाद एक स्वतंत्र रचनात्मक व्यक्ति होना चाहिए।",
            es: "El producto final de la educación debe ser un hombre creativo libre.",
            fr: "Le produit final de l'éducation devrait être un homme créatif libre.",
            de: "Das Endprodukt der Erziehung sollte ein freier, kreativer Mensch sein.",
            pt: "O produto final da educação deve ser um homem criativo livre.",
            ja: "教育の最終成果は、自由で創造的な人間であるべきだ。"
        }
    },
    {
        id: "phil_in_020",
        author: "Lal Ded",
        era: "14th Century",
        tradition: "Kashmir Shaivism",
        category: "Introspection",
        region: "India",
        translations: {
            en: "Look for God within your own body.",
            hi: "अपने शरीर के भीतर ईश्वर को खोजें।",
            es: "Busca a Dios dentro de tu propio cuerpo.",
            fr: "Cherchez Dieu à l'intérieur de votre propre corps.",
            de: "Suche Gott in deinem eigenen Körper.",
            pt: "Busque a Deus dentro do seu próprio corpo.",
            ja: "自分自身の体の中に神を探しなさい。"
        }
    },
    {
        id: "phil_in_021",
        author: "Eknath",
        era: "16th Century",
        tradition: "Bhakti",
        category: "Equanimity",
        region: "India",
        translations: {
            en: "One who finds happiness within is truly free.",
            hi: "जिसे अपने भीतर सुख मिलता है वह वास्तव में स्वतंत्र है।",
            es: "Quien encuentra la felicidad dentro es verdaderamente libre.",
            fr: "Celui qui trouve le bonheur à l'intérieur est vraiment libre.",
            de: "Wer das Glück im Inneren findet, ist wahrhaft frei.",
            pt: "Aquele que encontra a felicidade interior é verdadeiramente livre.",
            ja: "内に幸福を見いだす者は、真に自由である。"
        }
    },
    {
        id: "phil_in_022",
        author: "Dnyaneshwar",
        era: "13th Century",
        tradition: "Bhakti",
        category: "Love",
        region: "India",
        translations: {
            en: "The entire world is my family.",
            hi: "हे विश्वचि माझे घर (यह सारा संसार मेरा घर है)।",
            es: "Todo el mundo es mi familia.",
            fr: "Le monde entier est ma famille.",
            de: "Die ganze Welt ist meine Familie.",
            pt: "Todo o mundo é a minha família.",
            ja: "全世界が私の家族である。"
        }
    },
    {
        id: "phil_in_023",
        author: "Vidyaranya",
        era: "14th Century",
        tradition: "Advaita",
        category: "Bliss",
        region: "India",
        translations: {
            en: "Bliss is the very nature of the self.",
            hi: "आनंद ही आत्मा का स्वरूप है।",
            es: "El éxtasis es la naturaleza misma del ser.",
            fr: "La félicité est la nature même du soi.",
            de: "Glückseligkeit ist das wahre Wesen des Selbst.",
            pt: "O êxtase é a própria natureza do ser.",
            ja: "至福こそが自己の真の性質である。"
        }
    },
    {
        id: "phil_in_024",
        author: "Mahanama",
        era: "Ancient",
        tradition: "Theravada",
        category: "Mindfulness",
        region: "India",
        translations: {
            en: "Mindfulness is the path to the deathless.",
            hi: "जागरुकता ही अमरता का मार्ग है।",
            es: "La atención plena es el camino hacia lo inmortal.",
            fr: "La pleine conscience est le chemin vers l'immortalité.",
            de: "Achtsamkeit ist der Weg zur Unsterblichkeit.",
            pt: "A atenção plena é o caminho para o imortal.",
            ja: "マインドフルネスは不死への道である。"
        }
    },
    {
        id: "phil_in_025",
        author: "Vajrasattva",
        era: "Ancient",
        tradition: "Vajrayana",
        category: "Purity",
        region: "India",
        translations: {
            en: "All phenomena are pure by nature.",
            hi: "सभी प्रपंच स्वभाव से शुद्ध हैं।",
            es: "Todos los fenómenos son puros por naturaleza.",
            fr: "Tous les phénomènes sont purs par nature.",
            de: "Alle Phänomene sind von Natur aus rein.",
            pt: "Todos os fenômenos são puros por natureza.",
            ja: "あらゆる現象は本質的に純粋である。"
        }
    },
    {
        id: "phil_in_026",
        author: "Sri Aurobindo",
        era: "20th Century",
        tradition: "Integral Yoga",
        category: "Evolution",
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
        id: "phil_in_027",
        author: "Ramakrishna",
        era: "19th Century",
        tradition: "Bhakti",
        category: "Sincerity",
        region: "India",
        translations: {
            en: "God is seen when the mind is settled.",
            hi: "जब मन स्थिर होता है तब ईश्वर दिखाई देता है।",
            es: "Dios se ve cuando la mente está en calma.",
            fr: "Dieu est vu quand l'esprit est apaisé.",
            de: "Gott wird gesehen, wenn der Geist zur Ruhe gekommen ist.",
            pt: "Deus é visto quando a mente está calma.",
            ja: "心が静まった時、神が見える。"
        }
    },
    {
        id: "phil_in_028",
        author: "Vivekananda",
        era: "19th Century",
        tradition: "Modern Vedanta",
        category: "Fearlessness",
        region: "India",
        translations: {
            en: "Be fearless. The greatest sin is fear.",
            hi: "निर्भय बनो। सबसे बड़ा पाप डर है।",
            es: "Sé valiente. El mayor pecado es el miedo.",
            fr: "Sois sans peur. Le plus grand péché est la peur.",
            de: "Sei furchtlos. Die größte Sünde ist die Furcht.",
            pt: "Seja destemido. O maior pecado é o medo.",
            ja: "恐れるな。最大の罪は恐れである。"
        }
    },
    {
        id: "phil_in_029",
        author: "Chanakya",
        era: "Ancient",
        tradition: "Political Wisdom",
        category: "Learning",
        region: "India",
        translations: {
            en: "Education is the best friend.",
            hi: "शिक्षा सबसे अच्छी मित्र है।",
            es: "La educación es el mejor amigo.",
            fr: "L'éducation est la meilleure amie.",
            de: "Bildung ist der beste Freund.",
            pt: "A educação é o melhor amigo.",
            ja: "教育は最高の友である。"
        }
    },
    {
        id: "phil_in_030",
        author: "Gautama Buddha",
        era: "Ancient",
        tradition: "Buddhism",
        category: "Peace",
        region: "India",
        translations: {
            en: "Better than a thousand hollow words, is one word that brings peace.",
            hi: "हजारों खोखले शब्दों से बेहतर वह एक शब्द है जो शांति लाता है।",
            es: "Mejor que mil palabras huecas, es una palabra que trae paz.",
            fr: "Mieux vaut un seul mot qui apporte la paix que mille mots vides.",
            de: "Besser als tausend hohle Worte ist ein einziges Wort, das Frieden bringt.",
            pt: "Melhor do que mil palavras vazias, é uma palavra que traz paz.",
            ja: "千の空虚な言葉よりも、平安をもたらす一言のほうが優れている。"
        }
    },
    {
        id: "phil_in_031",
        author: "Mahavira",
        era: "Ancient",
        tradition: "Jainism",
        category: "Ahimsa",
        region: "India",
        translations: {
            en: "Non-violence is the highest religion.",
            hi: "अहिंसा परो धर्मः।",
            es: "La no violencia es la religión suprema.",
            fr: "La non-violence est la plus haute religion.",
            de: "Gewaltlosigkeit ist die höchste Religion.",
            pt: "A não violência é a religião suprema.",
            ja: "非暴力は最高の道徳である。"
        }
    },
    {
        id: "phil_in_032",
        author: "Nishkulanand Swami",
        era: "19th Century",
        tradition: "Bhakti",
        category: "Detachment",
        region: "India",
        translations: {
            en: "Renunciation is not possible without inner detachment.",
            hi: "आंतरिक वैराग्य के बिना त्याग संभव नहीं है।",
            es: "La renuncia no es posible sin el desapego interior.",
            fr: "Le renoncement n'est pas possible sans détachement intérieur.",
            de: "Entsagung ist ohne inneres Loslassen nicht möglich.",
            pt: "A renúncia não é possível sem desapego interior.",
            ja: "内なる離執がなければ、放棄は不可能である。"
        }
    },
    {
        id: "phil_in_033",
        author: "Shankaracharya",
        era: "Ancient",
        tradition: "Advaita",
        category: "Reality",
        region: "India",
        translations: {
            en: "Brahman is real, the world is an illusion.",
            hi: "ब्रह्म सत्यं जगन्मिथ्या।",
            es: "Brahman es real, el mundo es una ilusión.",
            fr: "Brahman est réel, le monde est une illusion.",
            de: "Brahman ist real, die Welt ist eine Illusion.",
            pt: "Brahman é real, o mundo é uma ilusão.",
            ja: "絶対者は実在であり、世界は幻影である。"
        }
    },
    {
        id: "phil_in_034",
        author: "Vivekananda",
        era: "19th Century",
        tradition: "Modern Vedanta",
        category: "Purity",
        region: "India",
        translations: {
            en: "Purity, patience, and perseverance are the three essentials.",
            hi: "पवित्रता, धैर्य और दृढ़ता तीन अनिवार्य चीजें हैं।",
            es: "La pureza, la paciencia y la perseverancia son los tres elementos esenciales.",
            fr: "La pureté, la patience et la persévérance sont les trois éléments essentiels.",
            de: "Reinheit, Geduld und Ausdauer sind die drei wesentlichen Dinge.",
            pt: "Pureza, paciência e perseverança são as três coisas essenciais.",
            ja: "純粋、忍耐、そして不屈の精神。これら三つが不可欠である。"
        }
    },
    {
        id: "phil_in_035",
        author: "Ramakrishna",
        era: "19th Century",
        tradition: "Universalism",
        category: "Truth",
        region: "India",
        translations: {
            en: "All paths lead to the same God.",
            hi: "सभी मार्ग एक ही ईश्वर की ओर ले जाते हैं।",
            es: "Todos los caminos conducen al mismo Dios.",
            fr: "Tous les chemins mènent au même Dieu.",
            de: "Alle Wege führen zum selben Gott.",
            pt: "Todos os caminhos levam ao mesmo Deus.",
            ja: "すべての道は同じ神へと通じている。"
        }
    },
    {
        id: "phil_in_036",
        author: "Basavanna",
        era: "12th Century",
        tradition: "Lingayatism",
        category: "Social Reform",
        region: "India",
        translations: {
            en: "The body is the temple.",
            hi: "देह ही देवालय है।",
            es: "El cuerpo es el templo.",
            fr: "Le corps est le temple.",
            de: "Der Körper ist der Tempel.",
            pt: "O corpo é o templo.",
            ja: "体は寺院である。"
        }
    },
    {
        id: "phil_in_037",
        author: "Mirabai",
        era: "16th Century",
        tradition: "Bhakti",
        category: "Devotion",
        region: "India",
        translations: {
            en: "Nothing is mine except the Lord.",
            hi: "मेरे तो गिरधर गोपाल, दूसरो न कोई।",
            es: "Nada है mío excepto el Señor.",
            fr: "Rien n'est à moi, sauf le Seigneur.",
            de: "Nichts gehört mir, außer der Herr.",
            pt: "Nada é meu, exceto o Senhor.",
            ja: "主のほかに私のものは何もない。"
        }
    },
    {
        id: "phil_in_038",
        author: "Eknath",
        era: "16th Century",
        tradition: "Bhakti",
        category: "Peace",
        region: "India",
        translations: {
            en: "He who has peace in his heart has peace in the world.",
            hi: "जिसके हृदय में शांति है, उसके लिए संसार में शांति है।",
            es: "Quien tiene paz en su corazón tiene paz en el mundo.",
            fr: "Celui qui a la paix dans son cœur a la paix dans le monde.",
            de: "Wer Frieden in seinem Herzen hat, hat Frieden in der Welt.",
            pt: "Aquele que tem paz no coração tem paz no mundo.",
            ja: "心に平和を持つ者は、世界に平和を持つ。"
        }
    },
    {
        id: "phil_in_039",
        author: "Guru Gobind Singh",
        era: "17th Century",
        tradition: "Sikhism",
        category: "Courage",
        region: "India",
        translations: {
            en: "Recognize the whole human race as one.",
            hi: "मानस की जात सबै एकै पहचानबो।",
            es: "Reconoce a toda la raza humana como una sola.",
            fr: "Reconnais toute la race humaine comme une seule.",
            de: "Erkenne die ganze Menschheit als eins an.",
            pt: "Reconheça toda a raça humana como uma só.",
            ja: "全人類を一なるものとして認識せよ。"
        }
    },
    {
        id: "phil_in_040",
        author: "Mirabai",
        era: "16th Century",
        tradition: "Bhakti",
        category: "Love",
        region: "India",
        translations: {
            en: "The sharp arrow of love has pierced my heart.",
            hi: "प्रेम की पैनी कटार ने मेरे हृदय को छेद दिया है।",
            es: "La aguda flecha del amor ha atravesado mi corazón.",
            fr: "La flèche acérée de l'amour a transpercé mon cœur.",
            de: "Der scharfe Pfeil der Liebe hat mein Herz durchbohrt.",
            pt: "A flecha afiada do amor perfurou meu coração.",
            ja: "愛の鋭い矢が私の心を射抜いた。"
        }
    },
    {
        id: "phil_in_041",
        author: "Ramakrishna",
        era: "19th Century",
        tradition: "Bhakti",
        category: "Simplicity",
        region: "India",
        translations: {
            en: "The simpler the heart, the more God is revealed.",
            hi: "हृदय जितना सरल होगा, ईश्वर उतना ही प्रकट होगा।",
            es: "Cuanto más simple es el corazón, más se revela Dios.",
            fr: "Plus le cœur est simple, plus Dieu se révèle.",
            de: "Je einfacher das Herz, desto mehr offenbart sich Gott.",
            pt: "Quanto mais simples o coração, mais Deus se revela.",
            ja: "心が純粋であればあるほど、神はより多く現れる。"
        }
    },
    {
        id: "phil_in_042",
        author: "Vivekananda",
        era: "19th Century",
        tradition: "Modern Vedanta",
        category: "Self-Reliance",
        region: "India",
        translations: {
            en: "You are the creator of your own destiny.",
            hi: "आप अपने भाग्य के निर्माता स्वयं हैं।",
            es: "Tú eres el creador de tu propio destino.",
            fr: "Tu es le créateur de ton propre destin.",
            de: "Du bist der Schöpfer deines eigenen Schicksals.",
            pt: "Você é o criador do seu próprio destino.",
            ja: "あなたは自分自身の運命の創造主である。"
        }
    },
    {
        id: "phil_in_043",
        author: "Basavanna",
        era: "12th Century",
        tradition: "Lingayatism",
        category: "Kindness",
        region: "India",
        translations: {
            en: "Kindness is the root of all righteousness.",
            hi: "दया ही धर्म का मूल है।",
            es: "La amabilidad es la raíz de toda rectitud.",
            fr: "La gentillesse est la racine de toute droiture.",
            de: "Freundlichkeit ist die Wurzel aller Rechtschaffenheit.",
            pt: "A bondade é a raiz de toda retidão.",
            ja: "優しさはすべての義の根源である。"
        }
    },
    {
        id: "phil_in_044",
        author: "Shankaracharya",
        era: "Ancient",
        tradition: "Advaita",
        category: "Detachment",
        region: "India",
        translations: {
            en: "Renounce the ego and find the self.",
            hi: "अहंकार का त्याग करें और आत्मा को पाएं।",
            es: "Renuncia al ego y encuentra el ser.",
            fr: "Renonce à l'ego et trouve le soi.",
            de: "Verzichte auf das Ego und finde das Selbst.",
            pt: "Renuncie ao ego e encontre o ser.",
            ja: "エゴ（自我）を捨てて、自己（真我）を見いだしなさい。"
        }
    },
    {
        id: "phil_in_045",
        author: "Guru Nanak",
        era: "15th Century",
        tradition: "Sikhism",
        category: "Service",
        region: "India",
        translations: {
            en: "Service to humanity is service to God.",
            hi: "मानवता की सेवा ही ईश्वर की सेवा है।",
            es: "El servicio a la humanidad es servicio a Dios.",
            fr: "Le service à l'humanité est le service à Dieu.",
            de: "Dienst an der Menschheit ist Dienst an Gott.",
            pt: "O serviço à humanidade é o serviço a Deus.",
            ja: "人類への献身は神への献身である。"
        }
    },
    {
        id: "phil_in_046",
        author: "Tukaram",
        era: "17th Century",
        tradition: "Bhakti",
        category: "Universal Love",
        region: "India",
        translations: {
            en: "Treat all beings as if they were God.",
            hi: "सभी जीवों के साथ ऐसा व्यवहार करें जैसे वे ईश्वर हों।",
            es: "Trata a todos los seres como si fueran Dios.",
            fr: "Traitez tous les êtres comme s'ils étaient Dieu.",
            de: "Behandle alle Wesen so, als wären sie Gott.",
            pt: "Trate todos os seres como se fossem Deus.",
            ja: "すべての生きとし生けるものを神であるかのように扱いなさい。"
        }
    },
    {
        id: "phil_in_047",
        author: "Gautama Buddha",
        era: "Ancient",
        tradition: "Buddhism",
        category: "Suffering",
        region: "India",
        translations: {
            en: "The root of suffering is attachment.",
            hi: "दुख की जड़ मोह (आसक्ति) है।",
            es: "La raíz del sufrimiento es el apego.",
            fr: "La racine de la souffrance est l'attachement.",
            de: "Die Wurzel des Leidens ist die Verhaftung.",
            pt: "A raiz do sofrimento é o apego.",
            ja: "苦しみの根源は執着である。"
        }
    },
    {
        id: "phil_in_048",
        author: "Chanakya",
        era: "Ancient",
        tradition: "Moral Wisdom",
        category: "Time",
        region: "India",
        translations: {
            en: "Time perfects all things.",
            hi: "काल सब कुछ सिद्ध कर देता है।",
            es: "El tiempo perfecciona todas las cosas.",
            fr: "Le temps perfectionne toutes choses.",
            de: "Die Zeit vervollkommnet alle Dinge.",
            pt: "O tempo aperfeiçoa todas as coisas.",
            ja: "時はすべてを完成させる。"
        }
    },
    {
        id: "phil_in_049",
        author: "Vivekananda",
        era: "19th Century",
        tradition: "Modern Vedanta",
        category: "Faith",
        region: "India",
        translations: {
            en: "Believe in yourself first.",
            hi: "सबसे पहले अपने आप में विश्वास करो।",
            es: "Cree en ti mismo primero.",
            fr: "Crois d'abord en toi-même.",
            de: "Glaube zuerst an dich selbst.",
            pt: "Acredite em si mesmo primeiro.",
            ja: "まず自分自身を信じなさい。"
        }
    },
    {
        id: "phil_in_050",
        author: "Mahatma Gandhi",
        era: "20th Century",
        tradition: "Modern Wisdom",
        category: "Non-violence",
        region: "India",
        translations: {
            en: "Strength does not come from physical capacity. It comes from an indomitable will.",
            hi: "शक्ति शारीरिक क्षमता से नहीं आती है। यह एक अदम्य इच्छाशक्ति से आती है।",
            es: "La fuerza no proviene de la capacidad física. Proviene de una voluntad indomable.",
            fr: "La force ne vient pas des capacités physiques. Elle vient d'une volonté indomptable.",
            de: "Stärke kommt nicht aus körperlicher Kraft. Sie kommt aus einem unbeugsamen Willen.",
            pt: "A força não provém da capacidade física. Provém de uma vontade indomável.",
            ja: "強さは身体的能力から来るのではない。それは不屈の意志から来る。"
        }
    },
    {
        id: "phil_we_011",
        author: "Arthur Schopenhauer",
        era: "19th Century",
        tradition: "Pessimism",
        category: "Wealth",
        region: "Germany",
        translations: {
            en: "Wealth is like sea-water; the more we drink, the thirstier we become.",
            hi: "धन समुद्र के पानी की तरह है; जितना अधिक हम पीते हैं, उतने ही प्यासे होते जाते हैं।",
            es: "La riqueza es como el agua de mar; cuanto más bebemos, más sedientos nos volvemos.",
            fr: "La richesse est comme l'eau de mer ; plus on en boit, plus on a soif.",
            de: "Der Reichtum gleicht dem Seewasser: Je mehr man davon trinkt, desto durstiger wird man.",
            pt: "A riqueza é como a água do mar; quanto mais bebemos, mais sede temos.",
            ja: "富は海水のようなものだ。飲めば飲むほど、喉が渇く。"
        }
    },
    {
        id: "phil_we_012",
        author: "Søren Kierkegaard",
        era: "19th Century",
        tradition: "Existentialism",
        category: "Anxiety",
        region: "Denmark",
        translations: {
            en: "Life can only be understood backwards; but it must be lived forwards.",
            hi: "जीवन को केवल पीछे की ओर मुड़कर समझा जा सकता है; लेकिन इसे आगे की ओर जिया जाना चाहिए।",
            es: "La vida solo puede ser entendida hacia atrás; pero debe ser vivida hacia adelante.",
            fr: "La vie ne peut être comprise qu'en regardant en arrière ; mais elle doit être vécue en regardant en avant.",
            de: "Das Leben kann nur rückwärts verstanden werden, aber es muss vorwärts gelebt werden.",
            pt: "A vida só pode ser compreendida olhando para trás; mas deve ser vivida olhando para frente.",
            ja: "人生は後ろ向きにしか理解できないが、前向きに生きられなければならない。"
        }
    },
    {
        id: "phil_we_013",
        author: "Ralph Waldo Emerson",
        era: "19th Century",
        tradition: "Transcendentalism",
        category: "Nature",
        region: "USA",
        translations: {
            en: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
            hi: "एक ऐसी दुनिया में खुद बने रहना जो आपको लगातार कुछ और बनाने की कोशिश कर रही है, सबसे बड़ी उपलब्धि है।",
            es: "Ser uno mismo en un mundo que constantemente intenta convertirte en algo más es el mayor logro.",
            fr: "Être soi-même dans un monde qui essaie constamment de vous transformer en quelqu'un d'autre est le plus grand accomplissement.",
            de: "Sich selbst treu zu bleiben in einer Welt, die ständig versucht, einen zu etwas anderem zu machen, ist die größte Leistung.",
            pt: "Ser você mesmo em um mundo que está constantemente tentando fazer de você outra coisa é a maior conquista.",
            ja: "絶えずあなたを別のものにしようとする世界の中で、自分自身であり続けることは、最大の達成である。"
        }
    },
    {
        id: "phil_we_014",
        author: "Henry David Thoreau",
        era: "19th Century",
        tradition: "Transcendentalism",
        category: "Simplicity",
        region: "USA",
        translations: {
            en: "Our life is frittered away by detail. Simplify, simplify.",
            hi: "हमारा जीवन विवरणों में बर्बाद हो जाता है। सरल बनाओ, सरल बनाओ।",
            es: "Nuestra vida se desperdicia en detalles. Simplifica, simplifica.",
            fr: "Notre vie est gaspillée par les détails. Simplifiez, simplifiez.",
            de: "Unser Leben wird durch Details vergeudet. Vereinfachen, vereinfachen.",
            pt: "Nossa vida é desperdiçada em detalhes. Simplifique, simplifique.",
            ja: "私たちの人生は細事によって無駄にされている。簡素にせよ、簡素にせよ。"
        }
    },
    {
        id: "phil_we_015",
        author: "David Hume",
        era: "18th Century",
        tradition: "Empiricism",
        category: "Habit",
        region: "Scotland",
        translations: {
            en: "Reason is, and ought only to be the slave of the passions.",
            hi: "तर्क है, और केवल भावनाओं का दास होना चाहिए।",
            es: "La razón es, y solo debe ser, la esclava de las pasiones.",
            fr: "La raison est, et ne doit être que l'esclave des passions.",
            de: "Die Vernunft ist und sollte nur die Sklavin der Leidenschaften sein.",
            pt: "A razão é, e deve ser apenas a escrava das paixões.",
            ja: "理性は情熱の奴隷であり、またそうあるべきである。"
        }
    },
    {
        id: "phil_we_016",
        author: "John Locke",
        era: "17th Century",
        tradition: "Empiricism",
        category: "Experience",
        region: "England",
        translations: {
            en: "No man's knowledge here can go beyond his experience.",
            hi: "यहाँ किसी भी मनुष्य का ज्ञान उसके अनुभव से आगे नहीं जा सकता।",
            es: "El conocimiento de ningún hombre aquí puede ir más allá de su experiencia.",
            fr: "Nul ne peut avoir de connaissances au-delà de son expérience.",
            de: "Niemandes Wissen kann über seine Erfahrung hinausgehen.",
            pt: "O conhecimento de nenhum homem aqui pode ir além da sua experiência.",
            ja: "いかなる人間の知識も、その経験を超えることはできない。"
        }
    },
    {
        id: "phil_we_017",
        author: "Thomas Hobbes",
        era: "17th Century",
        tradition: "Social Contract",
        category: "Nature",
        region: "England",
        translations: {
            en: "The secret thoughts of a man run over all things, holy, profane, clean, obscene, grave, and light.",
            hi: "मनुष्य के गुप्त विचार सभी चीजों—पवित्र, अपवित्र, स्वच्छ, अश्लील, गंभीर और हल्के—पर चलते हैं।",
            es: "Los pensamientos secretos de un hombre recorren todas las cosas, sagradas, profanas, limpias, obscenas, graves y ligeras.",
            fr: "Les pensées secrètes d'un homme parcourent toutes choses, sacrées, profanes, propres, obscènes, graves et légères.",
            de: "Die geheimen Gedanken eines Menschen schweifen über alle Dinge, heilige, profane, saubere, obszöne, ernste und leichte.",
            pt: "Os pensamentos secretos de um homem percorrem todas as coisas, sagradas, profanas, limpas, obscenas, graves e leves.",
            ja: "人間の秘密の思考は、神聖なもの、俗悪なもの、清潔なもの、卑猥なもの、重大なもの、軽微なもの、あらゆるものに及ぶ。"
        }
    },
    {
        id: "phil_we_018",
        author: "René Descartes",
        era: "17th Century",
        tradition: "Rationalism",
        category: "Existence",
        region: "France",
        translations: {
            en: "I think, therefore I am.",
            hi: "मैं सोचता हूं, इसलिए मैं हूं।",
            es: "Pienso, luego existo.",
            fr: "Je pense, donc je suis.",
            de: "Ich denke, also bin ich.",
            pt: "Penso, logo existo.",
            ja: "我思う、ゆえに我あり。"
        }
    },
    {
        id: "phil_we_019",
        author: "Francis Bacon",
        era: "17th Century",
        tradition: "Empiricism",
        category: "Knowledge",
        region: "England",
        translations: {
            en: "Knowledge is power.",
            hi: "ज्ञान ही शक्ति है।",
            es: "El conocimiento es poder.",
            fr: "La connaissance est le pouvoir.",
            de: "Wissen ist Macht.",
            pt: "Conhecimento é poder.",
            ja: "知は力なり。"
        }
    },
    {
        id: "phil_we_020",
        author: "Evelyn Beatrice Hall",
        era: "20th Century",
        tradition: "Biography",
        category: "Liberty",
        region: "UK",
        translations: {
            en: "I detest what you write, but I would give my life to make it possible for you to continue to write.",
            hi: "मैं जो तुम लिखते हो उससे नफरत करता हूं, लेकिन मैं तुम्हें लिखना जारी रखने देने के लिए अपनी जान दे दूंगा।",
            es: "Detesto lo que escribes, pero daría mi vida para que pudieras seguir escribiendo.",
            fr: "Je déteste ce que vous écrivez, mais je donnerais ma vie pour que vous puissiez continuer à écrire.",
            de: "Ich verabscheue, was du schreibst, aber ich würde mein Leben geben, damit du weiter schreiben kannst.",
            pt: "Detesto o que você escreve, mas daria minha vida para que você pudesse continuar a escrever.",
            ja: "私はあなたの書くことに反対だが、あなたがそれを書き続ける権利のためには命をかけても守る。"
        }
    },
    {
        id: "phil_we_021",
        author: "Jean-Jacques Rousseau",
        era: "18th Century",
        tradition: "Enlightenment",
        category: "Freedom",
        region: "France",
        translations: {
            en: "Man is born free, and everywhere he is in chains.",
            hi: "मनुष्य स्वतंत्र पैदा हुआ है, और हर जगह वह जंजीरों में जकड़ा हुआ है।",
            es: "El hombre nace libre, pero en todos lados está encadenado.",
            fr: "L'homme est né libre, et partout il est dans les fers.",
            de: "Der Mensch ist frei geboren, und überall liegt er in Ketten.",
            pt: "O homem nasce livre, e em todos os lugares ele está acorrentado.",
            ja: "人間は自由なものとして生まれた、しかし至るところで鎖につながれている。"
        }
    },
    {
        id: "phil_we_022",
        author: "Georg Wilhelm Friedrich Hegel",
        era: "19th Century",
        tradition: "Idealism",
        category: "History",
        region: "Germany",
        translations: {
            en: "The history of the world is none other than the progress of the consciousness of freedom.",
            hi: "विश्व का इतिहास स्वतंत्रता की चेतना की प्रगति के अलावा और कुछ नहीं है।",
            es: "La historia del mundo no es más que el progreso de la conciencia de la libertad.",
            fr: "L'histoire du monde n'est rien d'autre que le progrès de la conscience de la liberté.",
            de: "Die Weltgeschichte ist nichts anderes als der Fortschritt im Bewusstsein der Freiheit.",
            pt: "A história do mundo nada mais é do que o progresso da consciência da liberdade.",
            ja: "世界史とは、自由の意識の進歩にほかならない。"
        }
    },
    {
        id: "phil_we_023",
        author: "Karl Marx",
        era: "19th Century",
        tradition: "Marxism",
        category: "Change",
        region: "Germany",
        translations: {
            en: "The philosophers have only interpreted the world, in various ways; the point is to change it.",
            hi: "दार्शनिकों ने केवल विभिन्न तरीकों से दुनिया की व्याख्या की है; मुद्दा उसे बदलने का है।",
            es: "Los filósofos solo han interpretado el mundo de diversas maneras; de lo que se trata es de transformarlo.",
            fr: "Les philosophes n'ont fait qu'interpréter le monde de diverses manières ; ce qui importe, c'est de le transformer.",
            de: "Die Philosophen haben die Welt nur verschieden interpretiert; es kommt aber darauf an, sie zu verändern.",
            pt: "Os filósofos apenas interpretaram o mundo de várias maneiras; o ponto é mudá-lo.",
            ja: "哲学者たちは世界を様々に解釈してきたにすぎない。肝心なのは、世界を変えることである。"
        }
    },
    {
        id: "phil_we_024",
        author: "Bertrand Russell",
        era: "20th Century",
        tradition: "Analytic Philosophy",
        category: "Truth",
        region: "England",
        translations: {
            en: "The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.",
            hi: "दुनिया के साथ पूरी समस्या यह है कि मूर्ख और कट्टरपंथी हमेशा अपने बारे में इतने निश्चित होते हैं, और बुद्धिमान लोग संदेहों से भरे होते हैं।",
            es: "El problema de la humanidad es que los estúpidos están seguros de todo y los inteligentes están llenos de dudas.",
            fr: "Le problème avec le monde, c'est que les imbéciles et les fanatiques sont toujours si sûrs d'eux, et les gens sages si pleins de doutes.",
            de: "Das Problem mit der Welt ist, dass die Narren und Fanatiker so sicher sind, und die Weisen so voller Zweifel.",
            pt: "Todo o problema com o mundo é que tolos e fanáticos estão sempre tão certos de si mesmos, e as pessoas mais sábias tão cheias de dúvidas.",
            ja: "世界の全体的な問題は、愚か者や狂信者が常に自分自身に確信を持ちすぎており、賢明な人々が疑念に満ちていることだ。"
        }
    },
    {
        id: "phil_we_025",
        author: "Ludwig Wittgenstein",
        era: "20th Century",
        tradition: "Analytic Philosophy",
        category: "Language",
        region: "Austria",
        translations: {
            en: "The limits of my language mean the limits of my world.",
            hi: "मेरी भाषा की सीमाएँ मेरे विश्व की सीमाएँ हैं।",
            es: "Los límites de mi lenguaje significan los límites de mi mundo.",
            fr: "Les limites de mon langage signifient les limites de mon monde.",
            de: "Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt.",
            pt: "Os limites da minha linguagem significam os limites do meu mundo.",
            ja: "私の言語の限界は、私の世界の限界を意味する。"
        }
    },
    {
        id: "phil_we_026",
        author: "Martin Heidegger",
        era: "20th Century",
        tradition: "Phenomenology",
        category: "Thinking",
        region: "Germany",
        translations: {
            en: "Thinking begins only when we have come to know that reason, glorified for centuries, is the most stiff-necked adversary of thought.",
            hi: "सोचना तभी शुरू होता है जब हमें पता चलता है कि सदियों से महिमामंडित तर्क, विचार का सबसे हठी विरोधी है।",
            es: "Pensar comienza solo cuando nos damos cuenta de que la razón es el adversario más obstinado del pensamiento.",
            fr: "Penser ne commence que lorsque nous avons compris que la raison est l'adversaire le plus acharné de la pensée.",
            de: "Das Denken beginnt erst dann, wenn wir erfahren haben, dass die seit Jahrhunderten verherrlichte Vernunft der hartnäckigste Widersacher des Denkens ist.",
            pt: "O pensamento começa apenas quando percebemos que a razão é o adversário mais teimoso do pensamento.",
            ja: "思考が始まるのは、何世紀にもわたって美化されてきた理性が、思考の最も頑固な敵対者であることを私たちが知った時である。"
        }
    },
    {
        id: "phil_we_027",
        author: "Simone de Beauvoir",
        era: "20th Century",
        tradition: "Existentialism",
        category: "Identity",
        region: "France",
        translations: {
            en: "One is not born, but rather becomes, a woman.",
            hi: "कोई महिला पैदा नहीं होती, बल्कि बन जाती है।",
            es: "No se nace mujer, se llega a serlo.",
            fr: "On ne naît pas femme, on le devient.",
            de: "Man kommt nicht als Frau zur Welt, man wird es.",
            pt: "Não se nasce mulher, torna-se mulher.",
            ja: "人は女に生まれるのではない、女になるのだ。"
        }
    },
    {
        id: "phil_we_028",
        author: "Albert Camus",
        era: "20th Century",
        tradition: "Absurdism",
        category: "Rebellion",
        region: "France",
        translations: {
            en: "I rebel; therefore we exist.",
            hi: "मैं विद्रोह करता हूं; इसलिए हमारा अस्तित्व है।",
            es: "Me rebelo; luego existimos.",
            fr: "Je me révolte, donc nous sommes.",
            de: "Ich empöre mich, also sind wir.",
            pt: "Eu me rebeldio; portanto, existimos.",
            ja: "私は反抗する、ゆえに我々は存在する。"
        }
    },
    {
        id: "phil_we_029",
        author: "Hannah Arendt",
        era: "20th Century",
        tradition: "Political Theory",
        category: "Action",
        region: "Germany/USA",
        translations: {
            en: "The most radical revolutionary will become a conservative the day after the revolution.",
            hi: "क्रांति के अगले ही दिन सबसे कट्टर क्रांतिकारी रूढ़िवादी बन जाएगा।",
            es: "El revolucionario más radical se convertirá en conservador el día después de la revolución.",
            fr: "Le révolutionnaire le plus radical deviendra un conservateur le lendemain de la révolution.",
            de: "Der radikalste Revolutionär wird am Tag nach der Revolution zum Konservativen.",
            pt: "O revolucionário mais radical se tornará um conservador no dia seguinte à revolução.",
            ja: "最も過激な革命家は、革命の翌日には保守主義者になる。"
        }
    },
    {
        id: "phil_we_030",
        author: "Michel Foucault",
        era: "20th Century",
        tradition: "Post-structuralism",
        category: "Power",
        region: "France",
        translations: {
            en: "Where there is power, there is resistance.",
            hi: "जहाँ शक्ति है, वहाँ प्रतिरोध है।",
            es: "Donde hay poder, hay resistencia.",
            fr: "Là où il y a du pouvoir, il y a de la résistance.",
            de: "Wo Macht ist, ist auch Widerstand.",
            pt: "Onde há poder, há resistência.",
            ja: "権力があるところには、抵抗がある。"
        }
    },
    {
        id: "phil_we_031",
        author: "Heraclitus",
        era: "Ancient",
        tradition: "Presocratic",
        category: "Change",
        region: "Greece",
        translations: {
            en: "No man ever steps in the same river twice.",
            hi: "कोई भी मनुष्य एक ही नदी में दोबारा कदम नहीं रखता।",
            es: "Nadie se baña dos veces en el mismo río.",
            fr: "On ne se baigne jamais deux fois dans le même fleuve.",
            de: "Man kann nicht zweimal in denselben Fluss steigen.",
            pt: "Nenhum homem jamais pisa no mesmo rio duas vezes.",
            ja: "万物は流転する（同じ川に二度入ることはできない）。"
        }
    },
    {
        id: "phil_we_032",
        author: "Pythagoras",
        era: "Ancient",
        tradition: "Pythagoreanism",
        category: "Silence",
        region: "Greece",
        translations: {
            en: "Silence is better than unmeaning words.",
            hi: "अर्थहीन शब्दों से मौन बेहतर है।",
            es: "El silencio es mejor que las palabras sin sentido.",
            fr: "Le silence est préférable aux paroles insignifiantes.",
            de: "Schweigen ist besser als bedeutungslose Worte.",
            pt: "O silêncio é melhor do que palavras sem sentido.",
            ja: "無意味な言葉よりも沈黙のほうが良い。"
        }
    },
    {
        id: "phil_we_033",
        author: "Diogenes",
        era: "Ancient",
        tradition: "Cynicism",
        category: "Honesty",
        region: "Greece",
        translations: {
            en: "I am looking for an honest man.",
            hi: "मैं एक ईमानदार आदमी की तलाश कर रहा हूं।",
            es: "Estoy buscando a un hombre honesto.",
            fr: "Je cherche un homme honnête.",
            de: "Ich suche einen ehrlichen Menschen.",
            pt: "Estou procurando por um homem honesto.",
            ja: "私は一人の正直な人間を探している。"
        }
    },
    {
        id: "phil_we_034",
        author: "Seneca",
        era: "Ancient",
        tradition: "Stoicism",
        category: "Greatness",
        region: "Rome",
        translations: {
            en: "It is a rough road that leads to the heights of greatness.",
            hi: "महानता की ऊंचाइयों तक जाने वाला मार्ग कठिन होता है।",
            es: "Es un camino áspero el que lleva a las cumbres de la grandeza.",
            fr: "C'est un chemin rude qui mène aux sommets de la grandeur.",
            de: "Es ist ein rauer Weg, der zu den Höhen der Größe führt.",
            pt: "É um caminho difícil o que leva às alturas da grandeza.",
            ja: "偉大さの頂点へと続く道は、険しいものである。"
        }
    },
    {
        id: "phil_we_035",
        author: "Epicurus",
        era: "Ancient",
        tradition: "Epicureanism",
        category: "Fear",
        region: "Greece",
        translations: {
            en: "Death is nothing to us. When we exist, death is not; and when death exists, we are not.",
            hi: "मृत्यु हमारे लिए कुछ भी नहीं है। जब हम होते हैं, मृत्यु नहीं होती; और जब मृत्यु होती है, हम नहीं होते।",
            es: "La muerte no es nada para nosotros. Cuando existimos, la muerte no está; y cuando la muerte está, nosotros no estamos.",
            fr: "La mort n'est rien pour nous. Quand nous sommes, la mort n'est pas ; et quand la mort est, nous ne sommes plus.",
            de: "Der Tod geht uns nichts an. Wenn wir sind, ist der Tod nicht da; wenn der Tod da ist, sind wir nicht mehr.",
            pt: "A morte não é nada para nós. Quando existimos, a morte não está lá; e quando a morte está lá, nós não existimos mais.",
            ja: "死は我々にとって何ものでもない。我々が生きているとき死は存在せず、死が存在するとき我々は生きていないからだ。"
        }
    },
    {
        id: "phil_we_036",
        author: "Cicero",
        era: "Ancient",
        tradition: "Civic Humanism",
        category: "Learning",
        region: "Rome",
        translations: {
            en: "A room without books is like a body without a soul.",
            hi: "किताबों के बिना कमरा बिना आत्मा के शरीर की तरह है।",
            es: "Una habitación sin libros es como un cuerpo sin alma.",
            fr: "Une pièce sans livres est comme un corps sans âme.",
            de: "Ein Raum ohne Bücher ist wie ein Körper ohne Seele.",
            pt: "Um quarto sem livros é como um corpo sem alma.",
            ja: "本のない部屋は、魂のない体のようなものだ。"
        }
    },
    {
        id: "phil_we_037",
        author: "Blaise Pascal",
        era: "17th Century",
        tradition: "Religious Philosophy",
        category: "Solitude",
        region: "France",
        translations: {
            en: "All of humanity's problems stem from man's inability to sit quietly in a room alone.",
            hi: "मानवता की सभी समस्याएं मनुष्य की एक कमरे में अकेले चुपचाप बैठने की अक्षमता से उत्पन्न होती हैं।",
            es: "Todos los problemas de la humanidad provienen de la incapacidad del hombre para sentarse tranquilamente solo en una habitación.",
            fr: "Tout le malheur des hommes vient d'une seule chose, qui est de ne savoir pas demeurer en repos dans une chambre.",
            de: "Alles Unglück der Menschen rührt daher, dass sie nicht ruhig in einem Zimmer bleiben können.",
            pt: "Todos os problemas da humanidade advêm da incapacidade do homem de sentar-se calmamente em um quarto sozinho.",
            ja: "人間の不幸などというものは、どれも人間が部屋にじっとしていられないことから起こる。"
        }
    },
    {
        id: "phil_we_038",
        author: "Thomas Aquinas",
        era: "13th Century",
        tradition: "Scholasticism",
        category: "Reason",
        region: "Italy",
        translations: {
            en: "Beware the man of a single book.",
            hi: "एक ही किताब पढ़ने वाले आदमी से सावधान रहें।",
            es: "Teme al hombre de un solo libro.",
            fr: "Méfiez-vous de l'homme d'un seul livre.",
            de: "Fürchte den Mann eines einzigen Buches.",
            pt: "Cuidado com o homem de um único livro.",
            ja: "たった一冊の本しか読まない人間を警戒せよ。"
        }
    },
    {
        id: "phil_we_039",
        author: "Adam Smith",
        era: "18th Century",
        tradition: "Classical Liberalism",
        category: "Self-Interest",
        region: "Scotland",
        translations: {
            en: "It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest.",
            hi: "यह कसाई, शराब बनाने वाले या बेकर की परोपकारिता से नहीं है कि हम अपने रात्रिभोज की उम्मीद करते हैं, बल्कि उनके अपने हित के सम्मान से है।",
            es: "No es de la benevolencia del carnicero, el cervecero o el panadero de donde esperamos nuestra cena, sino de su preocupación por su propio interés.",
            fr: "Ce n'est pas de la bienveillance du boucher, du brasseur ou du boulanger que nous attendons notre dîner, mais de leur souci de leur propre intérêt.",
            de: "Nicht von dem Wohlwollen des Metzgers, Brauers oder Bäckers erwarten wir unser Abendessen, sondern von ihrer Rücksicht auf ihr eigenes Interesse.",
            pt: "Não é da benevolência do açougueiro, do cervejeiro ou do padeiro que esperamos nosso jantar, mas da consideração deles pelo seu próprio interesse.",
            ja: "我々が食事を期待できるのは、肉屋や酒屋やパン屋の慈悲心からではなく、彼ら自身の利害に対する配慮からである。"
        }
    },
    {
        id: "phil_we_041",
        author: "Socrates",
        era: "Ancient",
        tradition: "Western Philosophy",
        category: "Character",
        region: "Greece",
        translations: {
            en: "An unexamined life is not worth living.",
            hi: "बिना जांचा-परखा जीवन जीने योग्य नहीं है।",
            es: "Una vida no examinada no vale la pena vivirla.",
            fr: "Une vie sans examen ne vaut pas d'être vécue.",
            de: "Ein ungeprüftes Leben ist nicht lebenswert.",
            pt: "Uma vida não examinada não vale a pena ser vivida.",
            ja: "吟味されざる生に、生きる価値はない。"
        }
    },
    {
        id: "phil_we_042",
        author: "Plato",
        era: "Ancient",
        tradition: "Platonism",
        category: "Love",
        region: "Greece",
        translations: {
            en: "At the touch of love everyone becomes a poet.",
            hi: "प्यार के स्पर्श से हर कोई कवि बन जाता है।",
            es: "Al toque del amor todos se vuelven poetas.",
            fr: "Au contact de l'amour, tout le monde devient poète.",
            de: "Bei der Berührung der Liebe wird jeder zum Dichter.",
            pt: "Ao toque do amor todos se tornam poetas.",
            ja: "愛に触れると、誰でも詩人になる。"
        }
    },
    {
        id: "phil_we_043",
        author: "Aristotle",
        era: "Ancient",
        tradition: "Peripatetic",
        category: "Wisdom",
        region: "Greece",
        translations: {
            en: "Practical wisdom is only to be found in a mind that is well-informed and well-balanced.",
            hi: "व्यावहारिक बुद्धिमत्ता केवल उसी मस्तिष्क में पाई जाती है जो अच्छी तरह से सूचित और संतुलित हो।",
            es: "La sabiduría práctica solo se encuentra en una mente bien informada y equilibrada.",
            fr: "La sagesse pratique ne se trouve que dans un esprit bien informé et équilibré.",
            de: "Praktische Weisheit findet sich nur in einem Geist, der gut informiert und ausgeglichen ist.",
            pt: "A sabedoria prática só é encontrada em uma mente bem informada e equilibrada.",
            ja: "実践的な知恵は、十分な知識を持ち、バランスの取れた心にのみ宿る。"
        }
    },
    {
        id: "phil_we_044",
        author: "Seneca",
        era: "Ancient",
        tradition: "Stoicism",
        category: "Difficulty",
        region: "Rome",
        translations: {
            en: "It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.",
            hi: "ऐसा नहीं है कि चीजें कठिन हैं इसलिए हम साहस नहीं करते; ऐसा इसलिए है क्योंकि हम साहस नहीं करते कि वे कठिन हैं।",
            es: "No es porque las cosas sean difíciles que no nos atrevemos; es porque no nos atrevemos que son difíciles.",
            fr: "Ce n'est pas parce que les choses sont difficiles que nous n'osons pas ; c'est parce que nous n'osons pas qu'elles sont difficiles.",
            de: "Nicht weil es schwer ist, wagen wir es nicht, sondern weil wir es nicht wagen, ist es schwer.",
            pt: "Não é porque as coisas são difíceis que não ousamos; é porque não ousamos que elas são difíceis.",
            ja: "困難だからやらないのではない。やらないから困難なのだ。"
        }
    },
    {
        id: "phil_we_045",
        author: "Epictetus",
        era: "Ancient",
        tradition: "Stoicism",
        category: "Freedom",
        region: "Greece",
        translations: {
            en: "No man is free who is not master of himself.",
            hi: "कोई भी मनुष्य स्वतंत्र नहीं है जो स्वयं का स्वामी नहीं है।",
            es: "Ningún hombre es libre si no es dueño de sí mismo.",
            fr: "Nul homme n'est libre s'il n'est pas maître de lui-même.",
            de: "Niemand ist frei, der nicht sein eigener Herr ist.",
            pt: "Nenhum homem é livre se não for senhor de si mesmo.",
            ja: "自分自身を制することができない者に、自由はない。"
        }
    },
    {
        id: "phil_we_046",
        author: "Marcus Aurelius",
        era: "Ancient",
        tradition: "Stoicism",
        category: "Mind",
        region: "Rome",
        translations: {
            en: "Our life is what our thoughts make it.",
            hi: "हमारा जीवन वही है जो हमारे विचार उसे बनाते हैं।",
            es: "Nuestra vida es lo que nuestros pensamientos hacen de ella.",
            fr: "Notre vie est ce que nos pensées en font.",
            de: "Das Leben eines Menschen ist das, was seine Gedanken daraus machen.",
            pt: "Nossa vida é o que nossos pensamentos fazem dela.",
            ja: "人生とは、我々の思考が作り上げるものである。"
        }
    },
    {
        id: "phil_we_047",
        author: "Epicurus",
        era: "Ancient",
        tradition: "Epicureanism",
        category: "Equality",
        region: "Greece",
        translations: {
            en: "Not what we have, but what we enjoy, constitutes our abundance.",
            hi: "जो हमारे पास है वह नहीं, बल्कि जिसका हम आनंद लेते हैं, वह हमारी समृद्धि बनाता है।",
            es: "No lo que tenemos, sino lo que disfrutamos, constituye nuestra abundancia.",
            fr: "Ce n'est pas ce que nous avons, mais ce dont nous jouissons, qui constitue notre abondance.",
            de: "Nicht was wir haben, sondern was wir genießen, macht unseren Reichtum aus.",
            pt: "Não o que temos, mas o que desfrutamos, constitui nossa abundância.",
            ja: "私たちが持っているものではなく、楽しんでいることが、私たちの豊かさを築くのである。"
        }
    },
    {
        id: "phil_we_048",
        author: "Socrates",
        era: "Ancient",
        tradition: "Western Philosophy",
        category: "Wisdom",
        region: "Greece",
        translations: {
            en: "He who is not contented with what he has, would not be contented with what he would like to have.",
            hi: "जो उसके पास है उससे संतुष्ट नहीं है, वह उससे भी संतुष्ट नहीं होगा जिसे वह पाना चाहता है।",
            es: "El que no se contenta con lo que tiene, no se contentaría con lo que le gustaría tener.",
            fr: "Celui qui n'est pas content de ce qu'il a, ne serait pas content de ce qu'il voudrait avoir.",
            de: "Wer nicht mit dem zufrieden ist, was er hat, wäre auch nicht mit dem zufrieden, was er haben möchte.",
            pt: "Aquele que não está contente com o que tem, não estaria contente com o que gostaria de ter.",
            ja: "今あるものに満足できない者は、欲しいものを手に入れても満足できない。"
        }
    },
    {
        id: "phil_we_049",
        author: "Cicero",
        era: "Ancient",
        tradition: "Rome Politics",
        category: "Friendship",
        region: "Rome",
        translations: {
            en: "Friendship improves happiness and abates misery.",
            hi: "मित्रता खुशियों को बढ़ाती है और दुखों को कम करती है।",
            es: "La amistad mejora la felicidad y disminuye la miseria.",
            fr: "L'amitié améliore le bonheur et réduit la misère.",
            de: "Freundschaft steigert das Glück und lindert das Elend.",
            pt: "A amizade aumenta a felicidade e diminui a miséria.",
            ja: "友情は幸福を高め、不幸を和らげる。"
        }
    },
    {
        id: "phil_we_050",
        author: "Socrates",
        era: "Ancient",
        tradition: "Western Philosophy",
        category: "Reputation",
        region: "Greece",
        translations: {
            en: "The way to gain a good reputation is to endeavor to be what you desire to appear.",
            hi: "अच्छी प्रतिष्ठा पाने का तरीका यह है कि आप वैसा ही बनने का प्रयास करें जैसा आप दिखना चाहते हैं।",
            es: "La forma de ganar una buena reputación es esforzarse por ser lo que deseas parecer.",
            fr: "Le moyen de gagner une bonne réputation est de s'efforcer d'être ce que l'on désire paraître.",
            de: "Der Weg zu einem guten Ruf besteht darin, danach zu streben, das zu sein, was man zu sein scheint.",
            pt: "A maneira de ganhar uma boa reputação é esforçar-se para ser o que você deseja parecer.",
            ja: "良い評判を得る方法は、自分がそう見られたいと思う通りの人間になるよう努めることである。"
        }
    },
    {
        id: "phil_ch_001",
        author: "Confucius",
        era: "Ancient",
        tradition: "Confucianism",
        category: "Action",
        region: "China",
        translations: {
            en: "Wheresoever you go, go with all your heart.",
            hi: "आप जहाँ भी जाएँ, पूरे दिल से जाएँ।",
            es: "Donde quiera que vayas, ve con todo tu corazón.",
            fr: "Où que tu ailles, vas-y avec tout ton cœur.",
            de: "Wohin du auch gehst, geh mit deinem ganzen Herzen.",
            pt: "Aonde quer que você vá, vá com todo o seu coração.",
            ja: "いかなる場所に行く時も、全精力を傾けて行きなさい。"
        }
    },
    {
        id: "phil_ch_002",
        author: "Laozi",
        era: "Ancient",
        tradition: "Taoism",
        category: "Tao",
        region: "China",
        translations: {
            en: "A journey of a thousand miles begins with a single step.",
            hi: "हजार मील की यात्रा एक कदम से शुरू होती है।",
            es: "Un viaje de mil millas comienza con un solo paso.",
            fr: "Un voyage de mille lieues commence par un seul pas.",
            de: "Eine Reise von tausend Meilen beginnt mit einem einzigen Schritt.",
            pt: "Uma jornada de mil milhas começa com um único passo.",
            ja: "千里の道も一歩から。"
        }
    },
    {
        id: "phil_ch_003",
        author: "Zhuangzi",
        era: "Ancient",
        tradition: "Taoism",
        category: "Freedom",
        region: "China",
        translations: {
            en: "Happiness is the absence of the striving for happiness.",
            hi: "खुशी की तलाश का अभाव ही खुशी है।",
            es: "La felicidad es la ausencia de la lucha por la felicidad.",
            fr: "Le bonheur est l'absence de la recherche du bonheur.",
            de: "Glück ist die Abwesenheit des Strebens nach Glück.",
            pt: "A felicidade é a ausência da luta pela felicidade.",
            ja: "真の幸福とは、幸福を求めないことである。"
        }
    },
    {
        id: "phil_ch_004",
        author: "Mencius",
        era: "Ancient",
        tradition: "Confucianism",
        category: "Nature",
        region: "China",
        translations: {
            en: "The great man is he who does not lose his child's-heart.",
            hi: "महान व्यक्ति वह है जो अपने बच्चे जैसे हृदय को नहीं खोता।",
            es: "El gran hombre es aquel que no pierde su corazón de niño.",
            fr: "Le grand homme est celui qui ne perd pas son cœur d'enfant.",
            de: "Der große Mensch ist der, der sein kindliches Herz nicht verliert.",
            pt: "O grande homem é aquele que não perde o seu coração de criança.",
            ja: "大人（たいじん）とは、赤子の心を失わない者である。"
        }
    },
    {
        id: "phil_ch_005",
        author: "Sun Tzu",
        era: "Ancient",
        tradition: "Strategy",
        category: "Strategy",
        region: "China",
        translations: {
            en: "Know yourself and know your enemy, and you will never be defeated.",
            hi: "खुद को जानो और अपने दुश्मन को जानो, और तुम कभी नहीं हारोगे।",
            es: "Conócete a ti mismo y conoce a tu enemigo, y nunca serás derrotado.",
            fr: "Connais-toi toi-même et connais ton ennemi, et tu ne seras jamais vaincu.",
            de: "Kenne dich selbst und kenne deinen Feind, und du wirst niemals besiegt werden.",
            pt: "Conheça a si mesmo e conheça seu inimigo, e você nunca será derrotado.",
            ja: "彼を知り己を知れば百戦殆うからず。"
        }
    },
    {
        id: "phil_ch_006",
        author: "Xunzi",
        era: "Ancient",
        tradition: "Confucianism",
        category: "Learning",
        region: "China",
        translations: {
            en: "Learning continues until death.",
            hi: "सीखना मृत्यु तक जारी रहता है।",
            es: "El aprendizaje continúa hasta la muerte.",
            fr: "L'apprentissage continue jusqu'à la mort.",
            de: "Lernen dauert bis zum Tod an.",
            pt: "O aprendizado continua até a morte.",
            ja: "学問は死ぬまで終わらない。"
        }
    },
    {
        id: "phil_ch_007",
        author: "Mozi",
        era: "Ancient",
        tradition: "Mohism",
        category: "Universal Love",
        region: "China",
        translations: {
            en: "Universal love is the way to peace.",
            hi: "सार्वभौमिक प्रेम ही शांति का मार्ग है।",
            es: "El amor universal es el camino hacia la paz.",
            fr: "L'amour universel est le chemin vers la paix.",
            de: "Allgemeine Liebe ist der Weg zum Frieden.",
            pt: "O amor universal é o caminho para a paz.",
            ja: "兼愛（博愛）こそが平和への道である。"
        }
    },
    {
        id: "phil_ch_008",
        author: "Han Fei",
        era: "Ancient",
        tradition: "Legalism",
        category: "Law",
        region: "China",
        translations: {
            en: "No country is permanently strong, nor is any country permanently weak.",
            hi: "कोई भी देश स्थायी रूप से मजबूत नहीं होता, न ही कोई देश स्थायी रूप से कमजोर होता है।",
            es: "Ningún país es permanentemente fuerte, ni ningún país es permanentemente débil.",
            fr: "Aucun pays n'est durablement fort, ni aucun pays n'est durablement faible.",
            de: "Kein Land ist dauerhaft stark, und kein Land ist dauerhaft schwach.",
            pt: "Nenhum país é permanentemente forte, nem qualquer país é permanentemente fraco.",
            ja: "いかなる国も永久に強くはなく、また永久に弱くもない。"
        }
    },
    {
        id: "phil_ch_009",
        author: "Laozi",
        era: "Ancient",
        tradition: "Taoism",
        category: "Simplicity",
        region: "China",
        translations: {
            en: "Simplicity, patience, compassion. These three are your greatest treasures.",
            hi: "सादगी, धैर्य, करुणा। ये तीन आपके सबसे बड़े खजाने हैं।",
            es: "Simplicidad, paciencia, compasión. Estos tres son tus mayores tesoros.",
            fr: "Simplicité, patience, compassion. Ces trois-là sont vos plus grands trésors.",
            de: "Einfachheit, Geduld, Mitgefühl. Diese drei sind deine größten Schätze.",
            pt: "Simplicidade, paciência, compaixão. Estes três são os seus maiores tesouros.",
            ja: "慈悲、節約、謙虚。これら三つこそが最大の宝である。"
        }
    },
    {
        id: "phil_ch_010",
        author: "Confucius",
        era: "Ancient",
        tradition: "Confucianism",
        category: "Character",
        region: "China",
        translations: {
            en: "Our greatest glory is not in never falling, but in rising every time we fall.",
            hi: "हमारी सबसे बड़ी महिमा कभी न गिरने में नहीं, बल्कि हर बार गिरकर संभलने में है।",
            es: "Nuestra mayor gloria no está en no caer nunca, sino en levantarnos cada vez que caemos.",
            fr: "Notre plus grande gloire n'est pas de ne jamais tomber, mais de nous relever à chaque fois que nous tombons.",
            de: "Unser größter Ruhm ist nicht, niemals zu fallen, sondern jedes Mal wieder aufzustehen, wenn wir fallen.",
            pt: "Nossa maior glória não está em nunca cair, mas em nos levantarmos toda vez que caímos.",
            ja: "最大の栄光は、一度も転ばないことではなく、転ぶたびに起き上がることにある。"
        }
    },
    {
        id: "phil_ch_011",
        author: "Laozi",
        era: "Ancient",
        tradition: "Taoism",
        category: "Non-Action",
        region: "China",
        translations: {
            en: "Nature does not hurry, yet everything is accomplished.",
            hi: "प्रकृति जल्दबाजी नहीं करती, फिर भी सब कुछ पूरा हो जाता है।",
            es: "La naturaleza no se apresura, sin embargo, todo se logra.",
            fr: "La nature ne se presse pas, pourtant tout est accompli.",
            de: "Die Natur beeilt sich nicht, und doch wird alles erreicht.",
            pt: "A natureza não se apressa, mas tudo é realizado.",
            ja: "天地自然は急がない、しかしすべてを成し遂げる。"
        }
    },
    {
        id: "phil_ch_012",
        author: "Sun Tzu",
        era: "Ancient",
        tradition: "Military Strategy",
        category: "Wisdom",
        region: "China",
        translations: {
            en: "The supreme art of war is to subdue the enemy without fighting.",
            hi: "युद्ध की सर्वोच्च कला बिना लड़े दुश्मन को वश में करना है।",
            es: "El arte supremo de la guerra es someter al enemigo sin luchar.",
            fr: "L'art suprême de la guerre, c'est de soumettre l'ennemi sans combat.",
            de: "Die höchste Kriegskunst besteht darin, den Feind ohne Kampf zu besiegen.",
            pt: "A suprema arte da guerra é subjugar o inimigo sem lutar.",
            ja: "戦わずして勝つのが、最上の勝利である。"
        }
    },
    {
        id: "phil_ch_013",
        author: "Confucius",
        era: "Ancient",
        tradition: "Confucianism",
        category: "Ethics",
        region: "China",
        translations: {
            en: "What you do not want done to yourself, do not do to others.",
            hi: "जो आप अपने साथ नहीं करना चाहते, वह दूसरों के साथ न करें।",
            es: "Lo que no quieras que te hagan a ti, no se lo hagas a los demás.",
            fr: "Ne fais pas à autrui ce que tu ne voudrais pas qu'on te fasse.",
            de: "Was du nicht willst, dass man dir tu, das füg auch keinem andern zu.",
            pt: "O que você não quer que façam a você, não faça aos outros.",
            ja: "己の欲せざる所、人に施すことなかれ。"
        }
    },
    {
        id: "phil_ch_014",
        author: "Zhuangzi",
        era: "Ancient",
        tradition: "Taoism",
        category: "Perspective",
        region: "China",
        translations: {
            en: "Flow with whatever is happening and let your mind be free.",
            hi: "जो कुछ भी हो रहा है उसके साथ बहें और अपने मन को मुक्त रहने दें।",
            es: "Fluye con lo que esté sucediendo y deja que tu mente sea libre.",
            fr: "Laisse-toi porter par ce qui arrive et laisse ton esprit libre.",
            de: "Fließe mit dem, was geschieht, und lass deinen Geist frei sein.",
            pt: "Flua com o que estiver acontecendo e deixe sua mente livre.",
            ja: "流れに身を任せ、心を開放しなさい。"
        }
    },
    {
        id: "phil_ch_015",
        author: "Laozi",
        era: "Ancient",
        tradition: "Taoism",
        category: "Power",
        region: "China",
        translations: {
            en: "He who knows others is wise; he who knows himself is enlightened.",
            hi: "जो दूसरों को जानता है वह बुद्धिमान है; जो खुद को जानता है वह प्रबुद्ध है।",
            es: "Quien conoce a los demás es sabio; quien se conoce a sí mismo está iluminado.",
            fr: "Celui qui connaît les autres est sage ; celui qui se connaît lui-même est éclairé.",
            de: "Wer andere kennt, ist klug; wer sich selbst kennt, ist erleuchtet.",
            pt: "Aquele que conhece os outros é sábio; aquele que conhece a si mesmo é iluminado.",
            ja: "他を知る者は智、自らを知る者は明なり。"
        }
    },
    {
        id: "phil_ch_016",
        author: "Xunzi",
        era: "Ancient",
        tradition: "Confucianism",
        category: "Action",
        region: "China",
        translations: {
            en: "Thinking without learning is dangerous.",
            hi: "बिना सीखे सोचना खतरनाक है।",
            es: "Pensar sin aprender es peligroso.",
            fr: "Penser sans apprendre est dangereux.",
            de: "Denken ohne Lernen ist gefährlich.",
            pt: "Pensar sem aprender é perigoso.",
            ja: "学びて思わざれば則ち罔（くら）し、思いて学ばざれば則ち殆（あやう）し。"
        }
    },
    {
        id: "phil_ch_017",
        author: "Wang Yangming",
        era: "15th Century",
        tradition: "Neo-Confucianism",
        category: "Action",
        region: "China",
        translations: {
            en: "Knowledge and action are one.",
            hi: "ज्ञान और कर्म एक हैं।",
            es: "El conocimiento y la acción son uno.",
            fr: "La connaissance et l'action ne font qu'un.",
            de: "Wissen und Handeln sind eins.",
            pt: "Conhecimento e ação são um só.",
            ja: "知行合一（ちこうごういつ）。"
        }
    },
    {
        id: "phil_ch_018",
        author: "Unknown (Proverb)",
        era: "Ancient",
        tradition: "Chinese Wisdom",
        category: "Wisdom",
        region: "China",
        translations: {
            en: "The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.",
            hi: "वह व्यक्ति जो प्रश्न पूछता है, वह एक मिनट के लिए मूर्ख है, वह व्यक्ति जो नहीं पूछता, वह जीवन भर के लिए मूर्ख है।",
            es: "El hombre que hace una pregunta es un tonto por un minuto, el hombre que no la hace es un tonto de por vida.",
            fr: "Celui qui pose une question est un imbécile pendant une minute, celui qui n'en pose pas est un imbécile pour toute la vie.",
            de: "Wer fragt, ist ein Narr für eine Minute. Wer nicht fragt, bleibt ein Narr für immer.",
            pt: "O homem que faz uma pergunta é tolo por um minuto, o homem que não faz é tolo pela vida inteira.",
            ja: "問うは一時の恥、問わぬは一生の恥。"
        }
    },
    {
        id: "phil_ch_019",
        author: "Laozi",
        era: "Ancient",
        tradition: "Taoism",
        category: "Tao",
        region: "China",
        translations: {
            en: "The Tao that can be told is not the eternal Tao.",
            hi: "जिस ताओ (मार्ग) को बताया जा सकता है वह शाश्वत ताओ नहीं है।",
            es: "El Tao que puede ser expresado no es el verdadero Tao.",
            fr: "Le Tao qui peut être énoncé n'est pas le Tao éternel.",
            de: "Das Dao, das man benennen kann, ist nicht das ewige Dao.",
            pt: "O Tao que pode ser dito não é o Tao eterno.",
            ja: "道（タオ）の道とすべきは、常の道に非（あら）ず。"
        }
    },
    {
        id: "phil_ch_021",
        author: "Zhuangzi",
        era: "Ancient",
        tradition: "Taoism",
        category: "Uselessness",
        region: "China",
        translations: {
            en: "All men know the use of the useful, but nobody knows the use of the useless.",
            hi: "सभी लोग उपयोगी के उपयोग को जानते हैं, लेकिन कोई भी अनुपयोगी के उपयोग को नहीं जानता।",
            es: "Todos los hombres conocen la utilidad de lo útil, pero nadie conoce la utilidad de lo inútil.",
            fr: "Tous les hommes connaissent l'utilité de l'utile, mais personne ne connaît l'utilité de l'inutile.",
            de: "Alle Menschen kennen den Nutzen des Nützlichen, aber niemand kennt den Nutzen des Unnützen.",
            pt: "Todos os homens conhecem o uso do útil, mas ninguém conhece o uso do inútil.",
            ja: "人、みな有用の用を知りて、無用の用を知るなきなり。"
        }
    },
    {
        id: "phil_ch_022",
        author: "Confucius",
        era: "Ancient",
        tradition: "Confucianism",
        category: "Learning",
        region: "China",
        translations: {
            en: "To study and at times to practice what one has learned, is that not a pleasure?",
            hi: "अध्ययन करना और समय-समय पर जो सीखा है उसका अभ्यास करना, क्या यह खुशी की बात नहीं है?",
            es: "Estudiar y, a veces, practicar lo aprendido, ¿no es eso un placer?",
            fr: "Apprendre et, le moment venu, mettre en pratique ce qu'on a appris, n'est-ce pas un plaisir ?",
            de: "Lernen und das Gelernte von Zeit zu Zeit anwenden, ist das nicht ein Vergnügen?",
            pt: "Estudar e, às vezes, praticar o que se aprendeu, não é um prazer?",
            ja: "学びて時にこれを習う、亦（また）説（よろこ）ばしからずや。"
        }
    },
    {
        id: "phil_ch_023",
        author: "Laozi",
        era: "Ancient",
        tradition: "Taoism",
        category: "Weakness",
        region: "China",
        translations: {
            en: "The soft overcomes the hard. The slow overcomes the fast.",
            hi: "कोमल कठोर पर विजय प्राप्त करता है। धीमा तेज पर विजय प्राप्त करता है।",
            es: "Lo blando vence a lo duro. Lo lento vence a lo rápido.",
            fr: "Le mou triomphe du dur. Le lent triomphe du rapide.",
            de: "Das Weiche besiegt das Harte. Das Langsame besiegt das Schnelle.",
            pt: "O macio supera o duro. O lento supera o rápido.",
            ja: "柔よく剛を制す。"
        }
    },
    {
        id: "phil_ch_024",
        author: "Unknown (Proverb)",
        era: "Ancient",
        tradition: "Chinese Wisdom",
        category: "Practice",
        region: "China",
        translations: {
            en: "I hear and I forget. I see and I remember. I do and I understand.",
            hi: "मैं सुनता हूँ और भूल जाता हूँ। मैं देखता हूँ और याद रखता हूँ। मैं करता हूँ और समझ जाता हूँ।",
            es: "Lo escucho y lo olvido. Lo veo y lo recuerdo. Lo hago y lo entiendo.",
            fr: "J'entends et j'oublie. Je vois et je me souviens. Je fais et je comprends.",
            de: "Ich höre und ich vergesse. Ich sehe und ich erinnere mich. Ich tue und ich verstehe.",
            pt: "Eu ouço e esqueço. Eu vejo e lembro. Eu faço e entendo.",
            ja: "聞くは忘れる、見るは覚える、行うは理解する。"
        }
    },
    {
        id: "phil_ch_025",
        author: "Han Fei",
        era: "Ancient",
        tradition: "Legalism",
        category: "Clarity",
        region: "China",
        translations: {
            en: "When the law is clear, the people are at peace.",
            hi: "जब कानून स्पष्ट होता है, तो लोग शांति में होते हैं।",
            es: "Cuando la ley es clara, el pueblo está en paz.",
            fr: "Quand la loi est claire, le peuple est en paix.",
            de: "Wenn das Gesetz klar ist, ist das Volk in Frieden.",
            pt: "Quando a lei é clara, o povo está em paz.",
            ja: "法が明白であれば、民は安らぐ。"
        }
    },
    {
        id: "phil_ch_026",
        author: "Zhu Xi",
        era: "12th Century",
        tradition: "Neo-Confucianism",
        category: "Learning",
        region: "China",
        translations: {
            en: "If one intends to be a good man, one must read books.",
            hi: "यदि कोई भला आदमी बनने का इरादा रखता है, तो उसे किताबें पढ़नी चाहिए।",
            es: "Si uno pretende ser un buen hombre, debe leer libros.",
            fr: "Si l'on a l'intention d'être un homme de bien, on doit lire des livres.",
            de: "Wenn man beabsichtigt, ein guter Mensch zu sein, muss man Bücher lesen.",
            pt: "Se alguém pretende ser um homem bom, deve ler livros.",
            ja: "善人たらんとするならば、書を読まざるべからず。"
        }
    },
    {
        id: "phil_ch_027",
        author: "Mencius",
        era: "Ancient",
        tradition: "Confucianism",
        category: "Integrity",
        region: "China",
        translations: {
            en: "I like life, and I also like righteousness. If I cannot keep the two together, I will let life go and choose righteousness.",
            hi: "मुझे जीवन पसंद है, और मुझे धर्म (नीति) भी पसंद है। यदि मैं दोनों को एक साथ नहीं रख सकता, तो मैं जीवन को त्याग दूँगा और धर्म को चुनूँगा।",
            es: "Me gusta la vida, y también me gusta la rectitud. Si no puedo mantener las dos juntas, dejaré ir la vida y elegiré la rectitud.",
            fr: "J'aime la vie, et j'aime aussi la droiture. Si je ne peux garder les deux ensemble, je laisserai la vie s'en aller et je choisirai la droiture.",
            de: "Ich liebe das Leben, und ich liebe auch die Rechtschaffenheit. Wenn ich beides nicht zusammenhalten kann, werde ich das Leben fahren lassen und die Rechtschaffenheit wählen.",
            pt: "Eu gosto da vida, e também gosto da retidão. Se eu não puder manter os dois juntos, deixarei a vida ir e escolherei a retidão.",
            ja: "生もまた、我が欲する所なり。義もまた、我が欲する所なり。二つのもの、併(あわ)せ得べからざれば、生を捨てて義を取る者なり。"
        }
    },
    {
        id: "phil_ch_028",
        author: "Wang Yangming",
        era: "16th Century",
        tradition: "Neo-Confucianism",
        category: "Conscience",
        region: "China",
        translations: {
            en: "The shine of your innate knowledge is essentially pure.",
            hi: "आपके जन्मजात ज्ञान की चमक मूलतः शुद्ध है।",
            es: "El brillo de tu conocimiento innato es esencialmente puro.",
            fr: "L'éclat de votre connaissance innée est essentiellement pur.",
            de: "Der Glanz deiner angeborenen Erkenntnis ist im Wesentlichen rein.",
            pt: "O brilho do seu conhecimento inato é essencialmente puro.",
            ja: "良知の輝きは本質的に純粋である（良知は本来清明なり）。"
        }
    },
    {
        id: "phil_ch_029",
        author: "Sun Tzu",
        era: "Ancient",
        tradition: "Military Strategy",
        category: "Preparation",
        region: "China",
        translations: {
            en: "Opportunities multiply as they are seized.",
            hi: "अवसर ज्यों-ज्यों पकड़े जाते हैं, त्यों-त्यों बढ़ते जाते हैं।",
            es: "Las oportunidades se multiplican a medida que se aprovechan.",
            fr: "Les opportunités se multiplient à mesure qu'elles sont saisies.",
            de: "Chancen vervielfachen sich, wenn sie ergriffen werden.",
            pt: "As oportunidades se multiplicam à medida que são aproveitadas.",
            ja: "機会は捉えるにつれて増えていく。"
        }
    },
    {
        id: "phil_ch_030",
        author: "Mozi",
        era: "Ancient",
        tradition: "Mohism",
        category: "Partiality",
        region: "China",
        translations: {
            en: "Partiality is the cause of all the trouble in the world.",
            hi: "पक्षपात ही दुनिया की तमाम मुसीबतों का कारण है।",
            es: "La parcialidad es la causa de todos los problemas en el mundo.",
            fr: "La partialité est la cause de tous les problèmes dans le monde.",
            de: "Parteilichkeit ist die Ursache für allen Ärger in der Welt.",
            pt: "A parcialidade é a causa de todo o problema no mundo.",
            ja: "別（へだて）こそが天下の患いの根源である（兼愛交利）。"
        }
    },
    {
        id: "phil_ch_031",
        author: "Confucius",
        era: "Ancient",
        tradition: "Confucianism",
        category: "Mistakes",
        region: "China",
        translations: {
            en: "A man who has committed a mistake and doesn't correct it is committing another mistake.",
            hi: "वह व्यक्ति जिसने गलती की है और उसे सुधारता नहीं है, वह दूसरी गलती कर रहा है।",
            es: "El hombre que ha cometido un error y no lo corrige, está cometiendo otro error.",
            fr: "L'homme qui a commis une erreur et ne la corrige pas en commet une autre.",
            de: "Ein Mensch, der einen Fehler begangen hat und ihn nicht korrigiert, begeht einen weiteren Fehler.",
            pt: "Um homem que cometeu um erro e não o corrige está cometendo outro erro.",
            ja: "過ちて改めざる、これを過ちという。"
        }
    },
    {
        id: "phil_ch_032",
        author: "Laozi",
        era: "Ancient",
        tradition: "Taoism",
        category: "Silence",
        region: "China",
        translations: {
            en: "Those who know do not speak. Those who speak do not know.",
            hi: "जो जानते हैं वे बोलते नहीं। जो बोलते हैं वे जानते नहीं।",
            es: "Los que saben no hablan. Los que hablan no saben.",
            fr: "Ceux qui savent ne parlent pas. Ceux qui parlent ne savent pas.",
            de: "Die Wissenden reden nicht. Die Redenden wissen nicht.",
            pt: "Aqueles que sabem não falam. Aqueles que falam não sabem.",
            ja: "知る者は言わず、言う者は知らず。"
        }
    },
    {
        id: "phil_ch_033",
        author: "Zhuangzi",
        era: "Ancient",
        tradition: "Taoism",
        category: "Transformation",
        region: "China",
        translations: {
            en: "Once I dreamt I was a butterfly, fluttering hither and thither. Suddenly I awaked, and there I was, myself again.",
            hi: "एक बार मैंने सपना देखा कि मैं एक तितली हूँ, इधर-उधर फड़फड़ा रही हूँ। अचानक मैं जाग गया, और वहाँ मैं था, फिर से खुद।",
            es: "Una vez soñé que era una mariposa, revoloteando de aquí para allá. De repente desperté, y allí estaba yo, de nuevo yo mismo.",
            fr: "Une fois, je rêvais que j'étais un papillon, voletant ça et là. Soudain, je m'éveillais, et j'étais de nouveau moi-même.",
            de: "Einst träumte ich, ich sei ein Schmetterling, der hin und her flatterte. Plötzlich erwachte ich und da war ich wieder ich selbst.",
            pt: "Uma vez sonhei que era uma borboleta, esvoaçando de um lado para o outro. De repente acordei, e lá estava eu, eu mesmo novamente.",
            ja: "昔者(むかし)荘周、夢に蝶と為る。俄然(がぜん)として覚むれば、則(すなわ)ち蘧蘧(きょきょ)として周なり。"
        }
    },
    {
        id: "phil_ch_034",
        author: "Guanzi",
        era: "Ancient",
        tradition: "Legalism",
        category: "Foresight",
        region: "China",
        translations: {
            en: "If you are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people.",
            hi: "यदि आप एक वर्ष की योजना बना रहे हैं, तो चावल बोएँ; यदि आप एक दशक की योजना बना रहे हैं, तो पेड़ लगाएँ; यदि आप जीवन भर की योजना बना रहे हैं, तो लोगों को शिक्षित करें।",
            es: "Si estás planeando para un año, siembra arroz; si estás planeando para una década, planta árboles; si estás planeando para toda la vida, educa a la gente.",
            fr: "Si vous prévoyez pour un an, semez du riz ; si vous prévoyez pour dix ans, plantez des arbres ; si vous prévoyez pour toute une vie, éduquez les gens.",
            de: "Wenn du für ein Jahr planst, säe Reis; wenn du für ein Jahrzehnt planst, pflanze Bäume; wenn du für ein ganzes Leben planst, erziehe Menschen.",
            pt: "Se você está planejando para um ano, semeie arroz; se você está planejando para uma década, plante árvores; se você está planejando para a vida toda, eduque as pessoas.",
            ja: "一年の計は穀を植うるに如(し)くは莫(な)く、十年の計は樹を植うるに如くは莫く、終身の計は人を樹(う)うるに如くはき。"
        }
    },
    {
        id: "phil_ch_035",
        author: "Li Bai",
        era: "8th Century",
        tradition: "Poetry",
        category: "Living",
        region: "China",
        translations: {
            en: "The birds have vanished down the sky. Now the last cloud drains away. We sit together, the mountain and me, until only the mountain remains.",
            hi: "पक्षी आकाश में ओझल हो गए हैं। अब आखिरी बादल भी छंट गया है। हम साथ बैठे हैं, पहाड़ और मैं, जब तक कि केवल पहाड़ ही नहीं रह जाता।",
            es: "Los pájaros han desaparecido en el cielo. Ahora la última nube se desvanece. Nos sentamos juntos, la montaña y yo, hasta que solo queda la montaña.",
            fr: "Les oiseaux se sont évanouis dans le ciel. Maintenant, le dernier nuage s'efface. Nous sommes assis ensemble, la montagne et moi, jusqu'à ce qu'il ne reste plus que la montagne.",
            de: "Die Vögel sind am Himmel verschwunden. Jetzt zieht die letzte Wolke davon. Wir sitzen zusammen, der Berg und ich, bis nur noch der Berg übrig ist.",
            pt: "Os pássaros desapareceram no céu. Agora, a última nuvem se esvai. Sentamo-nos juntos, a montanha e eu, até que reste apenas a montanha.",
            ja: "衆鳥（しゅうちょう）は高きに飛び去り、孤雲（こうん）独り去りて閑（かん）なり。相（あ）い看（み）て両（ふた）つながら厭（いと）わざるは、独り敬亭山（けいていざん）有るのみ。"
        }
    },
    {
        id: "phil_ja_001",
        author: "Dogen Zenji",
        era: "13th Century",
        tradition: "Zen Buddhism",
        category: "Time",
        region: "Japan",
        translations: {
            en: "To study the Way is to study the self. To study the self is to forget the self.",
            hi: "मार्ग का अध्ययन करना स्वयं का अध्ययन करना है। स्वयं का अध्ययन करना स्वयं को भूल जाना है।",
            es: "Estudiar el Camino es estudiar el ser. Estudiar el ser es olvidar el ser.",
            fr: "Étudier la Voie, c'est s'étudier soi-même. S'étudier soi-même, c'est s'oublier soi-même.",
            de: "Den Weg zu studieren bedeutet, sich selbst zu studieren. Sich selbst zu studieren bedeutet, sich selbst zu vergessen.",
            pt: "Estudar o Caminho é estudar o ser. Estudar o ser é esquecer o ser.",
            ja: "仏道をならうというは、自己をならうなり。自己をならうというは、自己をわするるなり。"
        }
    },
    {
        id: "phil_ja_002",
        author: "Miyamoto Musashi",
        era: "17th Century",
        tradition: "Bushido",
        category: "Strategy",
        region: "Japan",
        translations: {
            en: "Do nothing which is of no use.",
            hi: "ऐसा कुछ भी न करें जिसका कोई उपयोग न हो।",
            es: "No hagas nada que sea inútil.",
            fr: "Ne fais rien qui ne soit utile.",
            de: "Tue nichts Sinnloses.",
            pt: "Não faça nada que não tenha utilidade.",
            ja: "役に立たぬことをせぬこと。"
        }
    },
    {
        id: "phil_ja_003",
        author: "Bashō",
        era: "17th Century",
        tradition: "Haiku",
        category: "Nature",
        region: "Japan",
        translations: {
            en: "Do not seek to follow in the footsteps of the men of old; seek what they sought.",
            hi: "पुराने लोगों के पदचिह्नों पर चलने की कोशिश न करें; वह खोजें जो उन्होंने खोजा था।",
            es: "No busques seguir los pasos de los hombres de antaño; busca lo que ellos buscaron.",
            fr: "Ne cherche pas à suivre les traces des anciens ; cherche ce qu'ils ont cherché.",
            de: "Suche nicht, in die Fußstapfen der Alten zu treten; suche das, was sie suchten.",
            pt: "Não procure seguir as pegadas dos homens de antigamente; procure o que eles procuraram.",
            ja: "古人の跡を求めず、古人の求めたるところを求めよ。"
        }
    },
    {
        id: "phil_ja_004",
        author: "Hakuin Ekaku",
        era: "18th Century",
        tradition: "Zen Buddhism",
        category: "Mind",
        region: "Japan",
        translations: {
            en: "What is the sound of one hand clapping?",
            hi: "एक हाथ की ताली की आवाज क्या है?",
            es: "¿Cuál es el sonido de una mano aplaudiendo?",
            fr: "Quel est le son d'une seule main qui applaudit ?",
            de: "Wie klingt das Klatschen einer Hand?",
            pt: "Qual é o som de uma mão batendo palmas?",
            ja: "隻手（せきしゅ）の声とは何か？"
        }
    },
    {
        id: "phil_ja_005",
        author: "Takuan Sōhō",
        era: "17th Century",
        tradition: "Zen Buddhism",
        category: "Focus",
        region: "Japan",
        translations: {
            en: "If the mind is nowhere, it is everywhere.",
            hi: "यदि मन कहीं नहीं है, तो वह हर जगह है।",
            es: "Si la mente no está en ninguna parte, está en todas partes.",
            fr: "Si l'esprit n'est nulle part, il est partout.",
            de: "Wenn der Geist nirgendwo ist, ist er überall.",
            pt: "Se a mente não está em lugar nenhum, ela está em todo lugar.",
            ja: "心をどこにも置かなければ、心はどこにでもある（無念無想）。"
        }
    },
    {
        id: "phil_ja_006",
        author: "Ikkyu Sōjun",
        era: "15th Century",
        tradition: "Zen Buddhism",
        category: "Honesty",
        region: "Japan",
        translations: {
            en: "Every day is a good day.",
            hi: "हर दिन एक अच्छा दिन है।",
            es: "Cada día es un buen día.",
            fr: "Chaque jour est un bon jour.",
            de: "Jeder Tag ist ein guter Tag.",
            pt: "Cada dia é um bom dia.",
            ja: "日々是好日（にちにちこれこうじつ）。"
        }
    },
    {
        id: "phil_ja_007",
        author: "Sen no Rikyū",
        era: "16th Century",
        tradition: "Tea Ceremony",
        category: "Simplicity",
        region: "Japan",
        translations: {
            en: "Tea is naught but this: first you heat the water, then you make the tea. Then you drink it properly. That is all you need to know.",
            hi: "चाय और कुछ नहीं बस यही है: पहले आप पानी गर्म करें, फिर चाय बनाएं। फिर उसे ठीक से पिएं। बस इतना ही जानने की जरूरत है।",
            es: "El té no es más que esto: primero calientas el agua, luego haces el té. Luego lo bebes adecuadamente. Eso es todo lo que necesitas saber.",
            fr: "Le thé n'est rien d'autre que cela : d'abord on chauffe l'eau, puis on fait le thé. Ensuite on le boit comme il se doit. C'est tout ce qu'il faut savoir.",
            de: "Tee ist nichts weiter als dies: Zuerst erhitzt du das Wasser, dann machst du den Tee. Dann trinkst du ihn anständig. Das ist alles, was du wissen musst.",
            pt: "O chá nada mais é do que isto: primeiro você aquece a água, depois faz o chá. Depois você o bebe adequadamente. Isso é tudo o que você precisa saber.",
            ja: "茶道とはただ湯をわかし茶をたてて、のむばかりなる事と知るべし。"
        }
    },
    {
        id: "phil_ja_008",
        author: "Yamamoto Tsunetomo",
        era: "18th Century",
        tradition: "Bushido",
        category: "Death",
        region: "Japan",
        translations: {
            en: "The Way of the Samurai is found in death.",
            hi: "सामुराई का मार्ग मृत्यु में पाया जाता है।",
            es: "El Camino del Samurái se encuentra en la muerte.",
            fr: "La Voie du Samouraï se trouve dans la mort.",
            de: "Der Weg des Samurai liegt im Sterben.",
            pt: "O Caminho do Samurai é encontrado na morte.",
            ja: "武士道と云うは、死ぬ事と見つけたり。"
        }
    },
    {
        id: "phil_ja_009",
        author: "Dogen Zenji",
        era: "13th Century",
        tradition: "Zen",
        category: "Practice",
        region: "Japan",
        translations: {
            en: "Enlightenment is like the moon reflected on the water.",
            hi: "बोध जल पर प्रतिबिंबित चंद्रमा के समान है।",
            es: "La iluminación es como la luna reflejada en el agua.",
            fr: "L'éveil est comme la lune se reflétant sur l'eau.",
            de: "Erleuchtung ist wie der Mond, der sich im Wasser spiegelt.",
            pt: "A iluminação é como a lua refletida na água.",
            ja: "悟りとは、水に宿る月の如し。"
        }
    },
    {
        id: "phil_ja_010",
        author: "Musashi Miyamoto",
        era: "17th Century",
        tradition: "Bushido",
        category: "Mind",
        region: "Japan",
        translations: {
            en: "You must under no circumstances be hurried in your mind.",
            hi: "आपको किसी भी स्थिति में अपने मन में जल्दबाजी नहीं करनी चाहिए।",
            es: "Bajo ninguna circunstancia debes apresurarte en tu mente.",
            fr: "En aucune circonstance vous ne devez avoir l'esprit pressé.",
            de: "Du darfst unter keinen Umständen in deinem Geist in Eile sein.",
            pt: "Você não deve, sob nenhuma circunstância, ter pressa em sua mente.",
            ja: "心には、いささかも急ぎなき事なり。"
        }
    },
    {
        id: "phil_ja_011",
        author: "Bashō",
        era: "17th Century",
        tradition: "Zen Poetry",
        category: "Nature",
        region: "Japan",
        translations: {
            en: "The old pond, a frog jumps in: sound of water.",
            hi: "पुराना तालाब, मेंढक कूदा: पानी की आवाज।",
            es: "El viejo estanque, salta una rana: ruido de agua.",
            fr: "Un vieil étang, une grenouille plonge : le bruit de l'eau.",
            de: "Der alte Teich, ein Frosch springt hinein: das Geräusch des Wassers.",
            pt: "O velho lago, uma rã mergulha: ruído de água.",
            ja: "古池や、蛙飛びこむ、水の音。"
        }
    },
    {
        id: "phil_ja_012",
        author: "Japanese Proverb",
        era: "Traditional",
        tradition: "Wisdom",
        category: "Perseverance",
        region: "Japan",
        translations: {
            en: "Fall seven times, stand up eight.",
            hi: "सात बार गिरें, आठ बार खड़े हों।",
            es: "Cáete siete veces, levántate ocho.",
            fr: "Sept fois à terre, huit fois debout.",
            de: "Siebenmal hinfallen, achtmal aufstehen.",
            pt: "Caiu sete vezes, levante-se oito.",
            ja: "七転び八起き。"
        }
    },
    {
        id: "phil_ja_013",
        author: "Ryōkan Taigu",
        era: "18th Century",
        tradition: "Zen Buddhism",
        category: "Simplicity",
        region: "Japan",
        translations: {
            en: "The thief left it behind: the moon at my window.",
            hi: "चोर उसे पीछे छोड़ गया: मेरी खिड़की पर चंद्रमा।",
            es: "El ladrón lo dejó atrás: la luna en mi ventana.",
            fr: "Le voleur l'a oublié : la lune à ma fenêtre.",
            de: "Der Dieb hat ihn zurückgelassen: der Mond an meinem Fenster.",
            pt: "O ladrão deixou-o para trás: a lua na minha janela.",
            ja: "盗人(ぬすびと)に、取り残されし、窓の月。"
        }
    },
    {
        id: "phil_ja_014",
        author: "Yagyu Munenori",
        era: "17th Century",
        tradition: "Kenjutsu",
        category: "Strategy",
        region: "Japan",
        translations: {
            en: "The mind of the path is like a mirror.",
            hi: "मार्ग का मन दर्पण के समान है।",
            es: "La mente del camino es como un espejo.",
            fr: "L'esprit de la voie est comme un miroir.",
            de: "Der Geist des Weges ist wie ein Spiegel.",
            pt: "A mente do caminho é como um espelho.",
            ja: "道の心は鏡の如し。"
        }
    },
    {
        id: "phil_ja_015",
        author: "Miyamoto Musashi",
        era: "17th Century",
        tradition: "Bushido",
        category: "Flexibility",
        region: "Japan",
        translations: {
            en: "Become as the water.",
            hi: "पानी की तरह बनो।",
            es: "Conviértete en agua.",
            fr: "Deviens comme l'eau.",
            de: "Werde wie das Wasser.",
            pt: "Torne-se como a água.",
            ja: "水の心になること。"
        }
    },
    {
        id: "phil_ja_016",
        author: "Kūkai (Kōbō-Daishi)",
        era: "9th Century",
        tradition: "Shingon Buddhism",
        category: "Unity",
        region: "Japan",
        translations: {
            en: "The universe is the teacher.",
            hi: "ब्रह्मांड ही गुरु है।",
            es: "El universo es el maestro.",
            fr: "L'univers est le professeur.",
            de: "Das Universum ist der Lehrer.",
            pt: "O universo é o professor.",
            ja: "三界の主は、宇宙なり。"
        }
    },
    {
        id: "phil_ja_017",
        author: "Bankei Yōtaku",
        era: "17th Century",
        tradition: "Zen Buddhism",
        category: "Unborn",
        region: "Japan",
        translations: {
            en: "The Unborn is the source of all things.",
            hi: "अजन्मा ही सभी चीजों का स्रोत है।",
            es: "Lo No Nacido es la fuente de todas las cosas.",
            fr: "Le Non-Né est la source de toutes choses.",
            de: "Das Ungeborene ist der Ursprung aller Dinge.",
            pt: "O Não-Nascido é a fonte de todas as coisas.",
            ja: "不生（ふしょう）は万物の源なり。"
        }
    },
    {
        id: "phil_ja_018",
        author: "Japanese Proverb",
        era: "Traditional",
        tradition: "Wisdom",
        category: "Humility",
        region: "Japan",
        translations: {
            en: "The stalk of rice lowers its head when it ripens.",
            hi: "चावल का डंठल पकने पर अपना सिर झुका लेता है।",
            es: "La espiga de arroz baja la cabeza cuando madura.",
            fr: "L'épi de riz baisse la tête lorsqu'il mûrit.",
            de: "Die Reisähre senkt ihr Haupt, wenn sie reif wird.",
            pt: "O talo de arroz abaixa a cabeça quando amadurece.",
            ja: "実るほど頭の下がる稲穂かな。"
        }
    },
    {
        id: "phil_ja_019",
        author: "Tesshū Yamaoka",
        era: "19th Century",
        tradition: "Zen / Swordsmanship",
        category: "Unity",
        region: "Japan",
        translations: {
            en: "The sword is the mind.",
            hi: "खड्ग ही मन है।",
            es: "La espada es la mente.",
            fr: "Le sabre est l'esprit.",
            de: "Das Schwert ist der Geist.",
            pt: "A espada é a mente.",
            ja: "剣即心（けんそくしん）。"
        }
    },
    {
        id: "phil_ja_020",
        author: "Saigyō Hōshi",
        era: "12th Century",
        tradition: "Zen Poetry",
        category: "Wanderer",
        region: "Japan",
        translations: {
            en: "I see no path, and my heart has no goals.",
            hi: "मुझे कोई रास्ता नहीं दिखता, और मेरे हृदय का कोई लक्ष्य नहीं है।",
            es: "No veo camino, y mi corazón no tiene metas.",
            fr: "Je ne vois pas de chemin, et mon cœur n'a pas de buts.",
            de: "Ich sehe keinen Weg, und mein Herz hat keine Ziele.",
            pt: "Não vejo caminho, e meu coração não tem metas.",
            ja: "道なき道を、心なき心で行く。"
        }
    },
    {
        id: "phil_ja_021",
        author: "Japanese Proverb",
        era: "Traditional",
        tradition: "Wisdom",
        category: "Beauty",
        region: "Japan",
        translations: {
            en: "Wabi-sabi: Finding beauty in imperfection.",
            hi: "वाबी-साबी: अपूर्णता में सुंदरता खोजना।",
            es: "Wabi-sabi: Encontrar la belleza en la imperfección.",
            fr: "Wabi-sabi : Trouver la beauté dans l'imperfection.",
            de: "Wabi-sabi: Schönheit in der Unvollkommenheit finden.",
            pt: "Wabi-sabi: Encontrar beleza na imperfeição.",
            ja: "わび・さび（不完全なものに美を見出す）。"
        }
    },
    {
        id: "phil_ja_022",
        author: "Eisai Zenji",
        era: "12th Century",
        tradition: "Zen Buddhism",
        category: "Health",
        region: "Japan",
        translations: {
            en: "Tea is the ultimate mental medicine.",
            hi: "चाय परम मानसिक औषधि है।",
            es: "El té es la medicina mental definitiva.",
            fr: "Le thé est le médicament mental ultime.",
            de: "Tee ist das ultimative geistige Heilmittel.",
            pt: "O chá é o remédio mental supremo.",
            ja: "茶は養生の仙薬なり。"
        }
    },
    {
        id: "phil_ja_023",
        author: "Miyamoto Musashi",
        era: "17th Century",
        tradition: "Bushido",
        category: "Persistence",
        region: "Japan",
        translations: {
            en: "Step by step walk the thousand-mile road.",
            hi: "कदम दर कदम हजार मील की सड़क पर चलें।",
            es: "Paso a paso recorre el camino de mil millas.",
            fr: "Pas à pas, parcourez la route de mille lieues.",
            de: "Schritt für Schritt wanderst du den tausend Meilen langen Weg.",
            pt: "Passo a passo percorra a estrada de mil milhas.",
            ja: "千日の稽古を鍛とし、万日の稽古を練とす。"
        }
    },
    {
        id: "phil_ja_024",
        author: "Takuan Sōhō",
        era: "17th Century",
        tradition: "Zen",
        category: "Mind",
        region: "Japan",
        translations: {
            en: "The mind must always be allowed to flow freely.",
            hi: "मन को हमेशा स्वतंत्र रूप से बहने देना चाहिए।",
            es: "Se debe permitir que la mente fluya siempre libremente.",
            fr: "L'esprit doit toujours pouvoir circuler librement.",
            de: "Dem Geist muss immer erlaubt sein, frei zu fließen.",
            pt: "A mente deve sempre poder fluir livremente.",
            ja: "心は常に留まることなく流れるべきである（不動智）。"
        }
    },
    {
        id: "phil_ja_025",
        author: "Inazo Nitobe",
        era: "19th Century",
        tradition: "Bushido",
        category: "Honor",
        region: "Japan",
        translations: {
            en: "Rectitude is the power of deciding upon a course of conduct in accordance with reason, without wavering.",
            hi: "ईमानदारी तर्क के अनुसार आचरण के मार्ग पर बिना हिचकिचाहट के निर्णय लेने की शक्ति है।",
            es: "La rectitud es el poder de decidir sobre un curso de conducta de acuerdo con la razón, sin vacilar.",
            fr: "La rectitude est le pouvoir de décider d'une ligne de conduite conforme à la raison, sans hésiter.",
            de: "Rechtschaffenheit ist die Kraft, ohne Zögern über einen Verhaltenskurs in Übereinstimmung mit der Vernunft zu entscheiden.",
            pt: "Retidão é o poder de decidir sobre um curso de conduta de acordo com a razão, sem hesitar.",
            ja: "義とは、理由に従って惑うことなく行動を決定する力である。"
        }
    },
    {
        id: "phil_we_001",
        author: "Socrates",
        era: "Ancient",
        tradition: "Western Philosophy",
        category: "Wisdom",
        region: "Greece",
        translations: {
            en: "The only true wisdom is in knowing you know nothing.",
            hi: "एकमात्र सच्ची बुद्धिमत्ता यह जानने में है कि आप कुछ नहीं जानते।",
            es: "La única verdadera sabiduría está en saber que no sabes nada.",
            fr: "La seule vraie sagesse est de savoir que l'on ne sait rien.",
            de: "Die einzige wahre Weisheit besteht darin, zu wissen, dass man nichts weiß.",
            pt: "A única verdadeira sabedoria está em saber que você não sabe nada.",
            ja: "唯一の真の知恵は、自分が何も知らないということを知ることにある。"
        }
    },
    {
        id: "phil_we_002",
        author: "Will Durant (Summing Aristotle)",
        era: "20th Century",
        tradition: "Philosophy",
        category: "Habit",
        region: "USA",
        translations: {
            en: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
            hi: "हम वही हैं जो हम बार-बार करते हैं। इसलिए, उत्कृष्टता कोई कार्य नहीं, बल्कि एक आदत है।",
            es: "Somos lo que hacemos repetidamente. La excelencia, entonces, no es un acto, sino un hábito.",
            fr: "Nous sommes ce que nous faisons de manière répétée. L'excellence n'est donc pas un acte, mais une habitude.",
            de: "Wir sind das, was wir wiederholt tun. Vorzüglichkeit ist also keine Handlung, sondern eine Gewohnheit.",
            pt: "Nós somos o que fazemos repetidamente. A excelência, então, não é um ato, mas um hábito.",
            ja: "私たちは繰り返し行うことの集積である。ゆえに卓越性とは、行為ではなく習慣である。"
        }
    },
    {
        id: "phil_we_003",
        author: "Marcus Aurelius",
        era: "2nd Century AD",
        tradition: "Stoicism",
        category: "Mind",
        region: "Rome",
        translations: {
            en: "The happiness of your life depends upon the quality of your thoughts.",
            hi: "आपके जीवन की खुशी आपके विचारों की गुणवत्ता पर निर्भर करती है।",
            es: "La felicidad de tu vida depende de la calidad de tus pensamientos.",
            fr: "Le bonheur de votre vie dépend de la qualité de vos pensées.",
            de: "Das Glück deines Lebens hängt von der Beschaffenheit deiner Gedanken ab.",
            pt: "A felicidade da sua vida depende da qualidade dos seus pensamentos.",
            ja: "人生の幸福は、あなたの思考の質によって決まる。"
        }
    },
    {
        id: "phil_we_004",
        author: "Seneca",
        era: "1st Century AD",
        tradition: "Stoicism",
        category: "Time",
        region: "Rome",
        translations: {
            en: "It is not that we have a short time to live, but that we waste a lot of it.",
            hi: "ऐसा नहीं है कि हमारे पास जीने के लिए कम समय है, बल्कि यह कि हम उसमें से बहुत कुछ बर्बाद कर देते हैं।",
            es: "No es que tengamos poco tiempo para vivir, sino que perdemos mucho de él.",
            fr: "Ce n'est pas que nous ayons peu de temps à vivre, c'est que nous en perdons beaucoup.",
            de: "Es ist nicht so, dass wir wenig Zeit zum Leben haben, sondern dass wir viel davon verschwenden.",
            pt: "Não é que tenhamos pouco tempo para viver, mas que desperdiçamos muito dele.",
            ja: "人生が短いのではなく、私たちがその多くを浪費しているのである。"
        }
    },
    {
        id: "phil_we_005",
        author: "Plato",
        era: "Ancient",
        tradition: "Platonism",
        category: "Self-Mastery",
        region: "Greece",
        translations: {
            en: "The first and greatest victory is to conquer yourself.",
            hi: "पहली और सबसे बड़ी जीत खुद को जीतना है।",
            es: "La primera y más grande victoria es conquistarte a ti mismo.",
            fr: "La première et la plus grande victoire est de se conquérir soi-même.",
            de: "Der erste und größte Sieg ist, sich selbst zu besiegen.",
            pt: "A primeira e maior vitória é conquistar a si mesmo.",
            ja: "最初の、そして最大の勝利は、自分自身に打ち勝つことである。"
        }
    },
    {
        id: "phil_we_006",
        author: "Epictetus",
        era: "1st Century AD",
        tradition: "Stoicism",
        category: "Control",
        region: "Greece",
        translations: {
            en: "Men are disturbed, not by things, but by the principles and notions which they form concerning things.",
            hi: "मनुष्य चीजों से नहीं, बल्कि उन सिद्धांतों और धारणाओं से परेशान होते हैं जो वे चीजों के बारे में बनाते हैं।",
            es: "Los hombres no se perturban por las cosas, sino por los principios y nociones que forman respecto a las cosas.",
            fr: "Les hommes ne sont pas troublés par les choses, mais par les principes et les notions qu'ils forment à leur sujet.",
            de: "Nicht die Dinge selbst beunruhigen die Menschen, sondern die Vorstellungen von den Dingen.",
            pt: "Os homens não se perturbam pelas coisas, mas pelos princípios e noções que formam a respeito delas.",
            ja: "人を不安にするのは事象そのものではなく、その事象について人が抱く判断や考えである。"
        }
    },
    {
        id: "phil_we_007",
        author: "Friedrich Nietzsche",
        era: "19th Century",
        tradition: "Existentialism",
        category: "Purpose",
        region: "Germany",
        translations: {
            en: "He who has a why to live can bear almost any how.",
            hi: "जिसके पास जीने का 'क्यों' है, वह लगभग किसी भी 'कैसे' को सहन कर सकता है।",
            es: "Quien tiene un porqué para vivir puede soportar casi cualquier cómo.",
            fr: "Celui qui a un pourquoi vivre peut supporter presque n'importe quel comment.",
            de: "Wer ein Warum zum Leben hat, erträgt fast jedes Wie.",
            pt: "Aquele que tem um porquê para viver pode suportar quase qualquer como.",
            ja: "生きる目的（なぜ）を持つ者は、どのような生き方（どのように）にも耐えることができる。"
        }
    },
    {
        id: "phil_we_008",
        author: "Immanuel Kant",
        era: "18th Century",
        tradition: "Enlightenment",
        category: "Ethics",
        region: "Germany",
        translations: {
            en: "Act only according to that maxim whereby you can at the same time will that it should become a universal law.",
            hi: "केवल उस सिद्धांत के अनुसार कार्य करें जिसे आप चाहते हों कि वह एक सार्वभौमिक नियम बन जाए।",
            es: "Actúa solo según aquella máxima por la cual puedas querer al mismo tiempo que se convierta en ley universal.",
            fr: "Agis uniquement d'après la maxime qui fait que tu peux vouloir en même temps qu'elle devienne une loi universelle.",
            de: "Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde.",
            pt: "Aja apenas de acordo com aquela máxima pela qual você possa querer ao mesmo tempo que ela se torne uma lei universal.",
            ja: "汝の意志の格率が、常に同時に普遍的な立法の原理として妥当しうるように行為せよ。"
        }
    },
    {
        id: "phil_we_009",
        author: "Jean-Paul Sartre",
        era: "20th Century",
        tradition: "Existentialism",
        category: "Freedom",
        region: "France",
        translations: {
            en: "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.",
            hi: "मनुष्य स्वतंत्र होने के लिए अभिशप्त है; क्योंकि दुनिया में आने के बाद, वह जो कुछ भी करता है उसके लिए वह स्वयं जिम्मेदार है।",
            es: "El hombre está condenado a ser libre; porque una vez arrojado al mundo, es responsable de todo lo que hace.",
            fr: "L'homme est condamné à être libre ; car, une fois jeté dans le monde, il est responsable de tout ce qu'il fait.",
            de: "Der Mensch ist verurteilt, frei zu sein; denn einmal in die Welt geworfen, ist er für alles verantwortlich, was er tut.",
            pt: "O homem está condenado a ser livre; porque, uma vez lançado no mundo, ele é responsável por tudo o que faz.",
            ja: "人間は自由であるという刑に処せられている。なぜなら、一度世界に投げ出されれば、自分の行うすべてのことに責任があるからだ。"
        }
    },
    {
        id: "phil_we_010",
        author: "Baruch Spinoza",
        era: "17th Century",
        tradition: "Rationalism",
        category: "Emotion",
        region: "Netherlands",
        translations: {
            en: "Peace is not the absence of war, it is a virtue, a state of mind, a disposition for benevolence.",
            hi: "शांति युद्ध की अनुपस्थिति नहीं है, यह एक गुण है, मन की एक अवस्था है, परोपकार की एक प्रवृत्ति है।",
            es: "La paz no es la ausencia de guerra, es una virtud, un estado mental, una disposición para la benevolencia.",
            fr: "La paix n'est pas l'absence de guerre, c'est une vertu, un état d'esprit, une disposition à la bienveillance.",
            de: "Friede ist nicht Abwesenheit von Krieg, er ist eine Tugend, eine Geisteshaltung, eine Neigung zu Wohlwollen.",
            pt: "A paz não é a ausência de guerra, é uma virtude, um estado de espírito, uma disposição para a benevolência.",
            ja: "平和とは、単に戦争がないことではない。それは美徳であり、心の状態であり、善意への性質である。"
        }
    },
    {
        id: "phil_ch_020",
        author: "Sun Tzu",
        era: "5th Century BC",
        tradition: "The Art of War",
        category: "Strategy",
        region: "China",
        translations: {
            en: "The greatest victory is that which requires no battle.",
            hi: "सबसे बड़ी जीत वह है जिसमें किसी लड़ाई की आवश्यकता नहीं होती है।",
            es: "La mayor victoria es la que no requiere batalla.",
            fr: "La plus grande victoire est celle qui ne nécessite aucun combat.",
            de: "Der größte Sieg ist der, der keinen Kampf erfordert.",
            pt: "A maior vitória é aquela que não exige batalha.",
            ja: "最大の勝利とは、戦わずして勝つことである。"
        }
    },
    {
        id: "phil_we_040",
        author: "Jean-Jacques Rousseau",
        era: "18th Century",
        tradition: "Social Contract",
        category: "Freedom",
        region: "France",
        translations: {
            en: "Patience is bitter, but its fruit is sweet.",
            hi: "धैर्य कड़वा है, लेकिन इसका फल मीठा है।",
            es: "La paciencia es amarga, pero su fruto es dulce.",
            fr: "La patience est amère, mais son fruit est doux.",
            de: "Geduld ist bitter, aber ihre Frucht ist süß.",
            pt: "A paciência é amarga, mas seu fruto é doce.",
            ja: "忍耐は苦いが、その実は甘い。"
        }
    },
    {
        id: "phil_bs_001",
        author: "Gautama Buddha",
        era: "Ancient",
        tradition: "Buddhism",
        category: "Happiness",
        region: "India",
        translations: {
            en: "Happiness never decreases by being shared.",
            hi: "बांटने से खुशी कभी कम नहीं होती।",
            es: "La felicidad nunca disminuye al ser compartida.",
            fr: "Le bonheur ne diminue jamais en étant partagé.",
            de: "Glück nimmt niemals ab, wenn man es teilt.",
            pt: "A felicidade nunca diminui ao ser compartilhada.",
            ja: "幸福は分かち合うことで決して減ることはない。"
        }
    },
    {
        id: "phil_bs_002",
        author: "Rumi",
        era: "13th Century",
        tradition: "Sufism",
        category: "Love",
        region: "Persia",
        translations: {
            en: "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
            hi: "कल मैं चतुर था, इसलिए मैं दुनिया को बदलना चाहता था। आज मैं समझदार हूँ, इसलिए मैं खुद को बदल रहा हूँ।",
            es: "Ayer era inteligente, así que quería cambiar el mundo. Hoy soy sabio, así que me estoy cambiando a mí mismo.",
            fr: "Hier, j'étais l'intelligent, alors je voulais changer le monde. Aujourd'hui je suis sage, alors je me change moi-même.",
            de: "Gestern war ich klug und wollte die Welt verändern. Heute bin ich weise und verändere mich selbst.",
            pt: "Ontem eu era inteligente, então queria mudar o mundo. Hoje sou sábio, então estou mudando a mim mesmo.",
            ja: "昨日、私は賢かったので、世界を変えたいと思っていた。今日、私は賢明なので、自分自身を変えている。"
        }
    },
    {
        id: "phil_bs_003",
        author: "Shams Tabrizi",
        era: "13th Century",
        tradition: "Sufism",
        category: "Spirituality",
        region: "Persia",
        translations: {
            en: "A life without love is of no account.",
            hi: "प्रेम के बिना जीवन का कोई महत्व नहीं है।",
            es: "Una vida sin amor no tiene importancia.",
            fr: "Une viale sans amour n'a aucune importance.",
            de: "Ein Leben ohne Liebe zählt nicht.",
            pt: "Uma vida sem amor não tem importância.",
            ja: "愛のない人生には価値がない。"
        }
    },
    {
        id: "phil_bs_004",
        author: "Guru Nanak",
        era: "15th Century",
        tradition: "Sikhism",
        category: "Equality",
        region: "Punjab",
        translations: {
            en: "Before becoming a Muslim, a Hindu, a Sikh, or a Christian, let's become a human first.",
            hi: "मुस्लिम, हिंदू, सिख या ईसाई बनने से पहले, आइए पहले इंसान बनें।",
            es: "Antes de convertirnos en musulmanes, hindúes, sikhs o cristianos, seamos primero humanos.",
            fr: "Avant de devenir musulman, hindou, sikh ou chrétien, devenons d'abord un humain.",
            de: "Bevor wir Muslime, Hindus, Sikhs oder Christen werden, lass uns zuerst Menschen werden.",
            pt: "Antes de nos tornarmos muçulmanos, hindus, sikhs ou cristãos, vamos nos tornar humanos primeiro.",
            ja: "イスラム教徒、ヒンドゥー教徒、シーク教徒、あるいはキリスト教徒になる前に、まずは人間になろう。"
        }
    },
    {
        id: "phil_bs_005",
        author: "Mahavira",
        era: "6th Century BC",
        tradition: "Jainism",
        category: "Ahimsa",
        region: "Ancient India",
        translations: {
            en: "Do not injure, abuse, oppress, enslave, insult, torment, torture, or kill any creature or living being.",
            hi: "किसी भी प्राणी या जीवित प्राणी को चोट न पहुँचाएँ, दुर्व्यवहार न करें, अत्याचार न करें, गुलाम न बनाएँ, अपमान न करें, प्रताड़ित न करें, प्रताड़ित न करें, या मारें नहीं।",
            es: "No dañes, abuses, oprimas, esclavices, insultes, atormentes, tortures ni mates a ninguna criatura o ser vivo.",
            fr: "Ne blessez pas, n'abusez pas, n'opprimez pas, ne réduisez pas en esclavage, n'insultez pas, ne tourmentez pas, ne torturez pas et ne tuez pas de créature ou d'être vivant.",
            de: "Verletze, misshandle, unterdrücke, versklave, beleidige, quäle, foltere oder töte kein Geschöpf oder Lebewesen.",
            pt: "Não fira, abuse, oprima, escravize, insulte, atormente, torture ou mate qualquer criatura ou ser vivo.",
            ja: "いかなる生き物も傷つけず、虐待せず、抑圧せず、奴隷にせず、侮辱せず、苦しめず、拷問せず、殺してはならない。"
        }
    },
    {
        id: "phil_bs_006",
        author: "Atisha",
        era: "11th Century",
        tradition: "Tibetan Buddhism",
        category: "Discipline",
        region: "Tibet",
        translations: {
            en: "The greatest discipline is the discipline of one's own mind.",
            hi: "सबसे बड़ा अनुशासन अपने मन का अनुशासन है।",
            es: "La mayor disciplina es la disciplina de la propia mente.",
            fr: "La plus grande discipline est la discipline de son propre esprit.",
            de: "Die größte Disziplin ist die Disziplin des eigenen Geistes.",
            pt: "A maior disciplina é a disciplina da própria mente.",
            ja: "最大の規律とは、自分の心の規律である。"
        }
    },
    {
        id: "phil_bs_007",
        author: "Tsongkhapa",
        era: "14th Century",
        tradition: "Gelug Buddhism",
        category: "Wisdom",
        region: "Tibet",
        translations: {
            en: "Wisdom is the eye that sees the nature of reality.",
            hi: "बुद्धि वह आँख है जो वास्तविकता की प्रकृति को देखती है।",
            es: "La sabiduría es el ojo que ve la naturaleza de la realidad.",
            fr: "La sagesse est l'œil qui voit la nature de la réalité.",
            de: "Weisheit ist das Auge, das die Natur der Realität sieht.",
            pt: "A sabedoria é o olho que vê a natureza da realidade.",
            ja: "知恵とは、現実の本質を見る眼である。"
        }
    },
    {
        id: "phil_bs_008",
        author: "Milarepa",
        era: "11th Century",
        tradition: "Kagyu Buddhism",
        category: "Practice",
        region: "Tibet",
        translations: {
            en: "In a state of loneliness, there is great power.",
            hi: "अकेलेपन की अवस्था में बड़ी शक्ति होती है।",
            es: "En un estado de soledad, hay un gran poder.",
            fr: "Dans un état de solitude, il y a un grand pouvoir.",
            de: "Im Zustand der Einsamkeit liegt eine große Kraft.",
            pt: "Em um estado de solidão, há um grande poder.",
            ja: "孤独の状態には、大きな力がある。"
        }
    },
    {
        id: "phil_bs_009",
        author: "Padmasambhava",
        era: "8th Century",
        tradition: "Nyingma Buddhism",
        category: "Realization",
        region: "Himalayas",
        translations: {
            en: "Do not follow the tracks of the ancient; seek what they sought.",
            hi: "प्राचीन लोगों के पदचिह्नों का अनुसरण न करें; उसे खोजें जो उन्होंने खोजा था।",
            es: "No sigas las huellas de los antiguos; busca lo que ellos buscaron.",
            fr: "Ne suivez pas les traces des anciens ; cherchez ce qu'ils cherchaient.",
            de: "Folge nicht den Spuren der Alten; suche das, was sie gesucht haben.",
            pt: "Não siga os rastros dos antigos; procure o que eles procuraram.",
            ja: "古人の跡を追うな。彼らが求めたものを求めよ。"
        }
    },
    {
        id: "phil_bs_010",
        author: "Ibn Arabi",
        era: "12th Century",
        tradition: "Sufism",
        category: "Unity",
        region: "Andalusia",
        translations: {
            en: "My heart has become capable of every form.",
            hi: "मेरा हृदय हर रूप के योग्य हो गया है।",
            es: "Mi corazón se ha vuelto capaz de todas las formas.",
            fr: "Mon cœur est devenu capable de toutes les formes.",
            de: "Mein Herz ist jeder Form fähig geworden.",
            pt: "Meu coração tornou-se capaz de todas as formas.",
            ja: "私の心は、あらゆる形を受け入れることができるようになった。"
        }
    },
    {
        id: "phil_bs_011",
        author: "Al-Ghazali",
        era: "11th Century",
        tradition: "Sufism",
        category: "Knowledge",
        region: "Persia",
        translations: {
            en: "Knowledge without action is vanity, and action without knowledge is insanity.",
            hi: "बिना कर्म का ज्ञान व्यर्थ है, और बिना ज्ञान का कर्म पागलपन है।",
            es: "El conocimiento sin acción es vanidad, y la acción sin conocimiento es locura.",
            fr: "La connaissance sans action est vanité, et l'action sans connaissance est folie.",
            de: "Wissen ohne Taten ist Eitelkeit, und Taten ohne Wissen sind Wahnsinn.",
            pt: "Conhecimento sem ação é vaidade, e ação sem conhecimento é loucura.",
            ja: "行動を伴わない知識は虚栄であり、知識を伴わない行動は狂気である。"
        }
    },
    {
        id: "phil_bs_012",
        author: "Omar Khayyam",
        era: "11th Century",
        tradition: "Sufism/Poetry",
        category: "Present Moments",
        region: "Persia",
        translations: {
            en: "Be happy for this moment. This moment is your life.",
            hi: "इस पल के लिए खुश रहें। यही पल आपका जीवन है।",
            es: "Sé feliz por este momento. Este momento es tu vida.",
            fr: "Soyez heureux pour ce moment. Ce moment est votre vie.",
            de: "Sei glücklich für diesen Moment. Dieser Moment ist dein Leben.",
            pt: "Seja feliz por este momento. Este momento é sua vida.",
            ja: "この瞬間のために幸せであれ。この瞬間こそがあなたの人生なのだ。"
        }
    },
    {
        id: "phil_bs_013",
        author: "Kabir",
        era: "15th Century",
        tradition: "Bhakti/Sufi",
        category: "Truth",
        region: "India",
        translations: {
            en: "Truth is within you.",
            hi: "सत्य आपके भीतर ही है।",
            es: "La verdad está dentro de ti.",
            fr: "La vérité est en vous.",
            de: "Die Wahrheit ist in dir.",
            pt: "A verdade está dentro de você.",
            ja: "真理はあなたの中にある。"
        }
    },
    {
        id: "phil_bs_014",
        author: "Bulleh Shah",
        era: "17th Century",
        tradition: "Sufism",
        category: "Universal Love",
        region: "Punjab",
        translations: {
            en: "Neither Hindu nor Muslim, but human.",
            hi: "न हिंदू न मुसलमान, बल्कि इंसान।",
            es: "Ni hindú ni musulmán, sino humano.",
            fr: "Ni hindou ni musulman, mais humain.",
            de: "Weder Hindu noch Muslim, sondern Mensch.",
            pt: "Nem hindu nem muçulmano, mas humano.",
            ja: "ヒンドゥー教徒でもイスラム教徒でもなく、ただの人間。"
        }
    },
    {
        id: "phil_bs_015",
        author: "Rabia Basri",
        era: "8th Century",
        tradition: "Sufism",
        category: "Devotion",
        region: "Iraq",
        translations: {
            en: "I love God: I have no time left in which to hate the devil.",
            hi: "मैं ईश्वर से प्रेम करती हूँ: मेरे पास शैतान से नफरत करने के लिए समय नहीं बचा है।",
            es: "Amo a Dios: no me queda tiempo para odiar al diablo.",
            fr: "J'aime Dieu : il ne me reste plus de temps pour haïr le diable.",
            de: "Ich liebe Gott: Mir bleibt keine Zeit, den Teufel zu hassen.",
            pt: "Eu amo a Deus: não me resta tempo para odiar o diabo.",
            ja: "私は神を愛している。悪魔を憎む時間は残されていない。"
        }
    },
    {
        id: "phil_bs_016",
        author: "Nagarjuna",
        era: "2nd Century AD",
        tradition: "Madhyamaka Buddhism",
        category: "Emptiness",
        region: "India",
        translations: {
            en: "Everything is dependent, thus everything is empty.",
            hi: "सब कुछ निर्भर है, इसलिए सब कुछ शून्य है।",
            es: "Todo es dependiente, por lo tanto todo está vacío.",
            fr: "Tout est dépendant, donc tout est vide.",
            de: "Alles ist abhängig, also ist alles leer.",
            pt: "Tudo é dependente, portanto tudo está vazio.",
            ja: "すべては縁起しており、それゆえにすべては空である。"
        }
    },
    {
        id: "phil_bs_017",
        author: "Dogen Zenji",
        era: "13th Century",
        tradition: "Zen Buddhism",
        category: "Nature",
        region: "Japan",
        translations: {
            en: "Flowers fall though we love them, and weeds grow though we do not love them.",
            hi: "फूल गिरते हैं चाहे हम उनसे प्यार करें, और खरपतवार उगते हैं चाहे हम उनसे प्यार न करें।",
            es: "Las flores caen aunque las amemos, y las malas hierbas crecen aunque no las amemos.",
            fr: "Les fleurs tombent bien que nous les aimions, et les mauvaises herbes poussent bien que nous ne les aimions pas.",
            de: "Blumen fallen, obwohl wir sie lieben, und Unkraut wächst, obwohl wir es nicht lieben.",
            pt: "As flores caem embora as amemos, e as ervas daninhas crescem embora não as amemos.",
            ja: "惜しめども花は散り、憎めども草は生い茂る。"
        }
    },
    {
        id: "phil_bs_018",
        author: "Bodhidharma",
        era: "5th Century",
        tradition: "Zen Buddhism",
        category: "Direct Experience",
        region: "India/China",
        translations: {
            en: "A special transmission outside the scriptures.",
            hi: "शास्त्रों के बाहर एक विशेष संचरण।",
            es: "Una transmisión especial fuera de las escrituras.",
            fr: "Une transmission spéciale en dehors des écritures.",
            de: "Eine besondere Übertragung außerhalb der Schriften.",
            pt: "Uma transmissão especial fora das escrituras.",
            ja: "教外別伝。"
        }
    },
    {
        id: "phil_bs_019",
        author: "Huang Po",
        era: "9th Century",
        tradition: "Zen Buddhism",
        category: "Mind",
        region: "China",
        translations: {
            en: "All the Buddhas and all sentient beings are nothing but the One Mind.",
            hi: "सभी बुद्ध और सभी संवेदनशील प्राणी केवल एक मन के अलावा कुछ नहीं हैं।",
            es: "Todos los Budas y todos los seres sintientes no son más que la Mente Única.",
            fr: "Tous les Bouddhas et tous les êtres sensibles ne sont rien d'autre que l'Esprit Unique.",
            de: "Alle Buddhas und alle fühlenden Wesen sind nichts als der Eine Geist.",
            pt: "Todos os Budas e todos os seres sencientes nada mais são do que a Mente Única.",
            ja: "諸仏も衆生も、ただこれ一心のみ。"
        }
    },
    {
        id: "phil_bs_020",
        author: "Linji",
        era: "9th Century",
        tradition: "Zen Buddhism",
        category: "Independence",
        region: "China",
        translations: {
            en: "If you meet the Buddha on the road, kill him.",
            hi: "यदि आप सड़क पर बुद्ध से मिलें, तो उन्हें मार दें।",
            es: "Si encuentras al Buda en el camino, mátalo.",
            fr: "Si vous rencontrez le Bouddha sur la route, tuez-le.",
            de: "Wenn du dem Buddha auf der Straße begegnest, töte ihn.",
            pt: "Se você encontrar o Buda no caminho, mate-o.",
            ja: "逢仏殺仏。"
        }
    },
    {
        id: "phil_bs_021",
        author: "Vimalakirti",
        era: "1st Century AD",
        tradition: "Mahayana Buddhism",
        category: "Non-duality",
        region: "India",
        translations: {
            en: "The roar of silence is the ultimate truth.",
            hi: "सन्नाटे की गूँज ही परम सत्य है।",
            es: "El rugido del silencio es la verdad última.",
            fr: "Le rugissement du silence est la vérité ultime.",
            de: "Das Brüllen der Stille ist die ultimative Wahrheit.",
            pt: "O rugido do silêncio é a verdade última.",
            ja: "沈黙の轟音こそが究極の真理である。"
        }
    },
    {
        id: "phil_bs_022",
        author: "Santideva",
        era: "8th Century",
        tradition: "Mahayana Buddhism",
        category: "Compassion",
        region: "India",
        translations: {
            en: "May I be a protector for those without one.",
            hi: "कि मैं उन लोगों का रक्षक बनूँ जिनका कोई नहीं है।",
            es: "Que sea un protector para los que no tienen uno.",
            fr: "Puissé-je être un protecteur pour ceux qui n'en ont pas.",
            de: "Möge ich ein Beschützer für diejenigen sein, die keinen haben.",
            pt: "Que eu possa ser um protetor para aqueles que não têm um.",
            ja: "無力な人々の守護者とならん。"
        }
    },
    {
        id: "phil_bs_023",
        author: "Asvaghosha",
        era: "2nd Century AD",
        tradition: "Mahayana Buddhism",
        category: "Faith",
        region: "India",
        translations: {
            en: "Suffering is the result of craving.",
            hi: "दुख तृष्णा का परिणाम है।",
            es: "El sufrimiento es el resultado del anhelo.",
            fr: "La souffrance est le résultat de l'envie.",
            de: "Leiden ist die Folge von Verlangen.",
            pt: "O sofrimento é o resultado do desejo.",
            ja: "苦しみは渇愛の結果である。"
        }
    },
    {
        id: "phil_bs_024",
        author: "Padampa Sangye",
        era: "11th Century",
        tradition: "Tibetan Buddhism",
        category: "Simplicity",
        region: "India/Tibet",
        translations: {
            en: "Fix your mind on nothing; that is enough.",
            hi: "अपना मन किसी चीज़ पर स्थिर न करें; वही काफी है।",
            es: "No fijes tu mente en nada; eso es suficiente.",
            fr: "Ne fixez votre esprit sur rien ; cela suffit.",
            de: "Fixiere deinen Geist auf nichts; das ist genug.",
            pt: "Não fixe sua mente em nada; isso é o suficiente.",
            ja: "心に何も留めるな。それで十分だ。"
        }
    },
    {
        id: "phil_bs_025",
        author: "Longchenpa",
        era: "14th Century",
        tradition: "Dzogchen Buddhism",
        category: "Nature of Mind",
        region: "Tibet",
        translations: {
            en: "The mind's nature is like space.",
            hi: "मन की प्रकृति आकाश के समान है।",
            es: "La naturaleza de la mente es como el espacio.",
            fr: "La nature de l'esprit est comme l'espace.",
            de: "Die Natur des Geistes ist wie der Raum.",
            pt: "A natureza da mente é como o espaço.",
            ja: "心の性質は宇宙のようである。"
        }
    },
    {
        id: "phil_gl_001",
        author: "Original Wisdom",
        era: "Various",
        tradition: "Universal Wisdom",
        category: "Wisdom",
        region: "Global",
        translations: {
            en: "Strong minds discuss ideas, average minds discuss events, weak minds discuss people.",
            hi: "मजबूत दिमाग विचारों पर चर्चा करते हैं, औसत दिमाग घटनाओं पर और कमजोर दिमाग लोगों पर।",
            es: "Las mentes fuertes discuten ideas, las mentes promedio discuten eventos, las mentes débiles discuten personas.",
            fr: "Les esprits forts discutent des idées, les esprits moyens discutent des événements, les esprits faibles discutent des gens.",
            de: "Starke Köpfe diskutieren über Ideen, durchschnittliche Köpfe über Ereignisse, schwache Köpfe über Menschen.",
            pt: "Mentes fortes discutem ideias, mentes médias discutem eventos, mentes fracas discutem pessoas.",
            ja: "強い心はアイデアを話し合い、普通の心は出来事を話し合い、弱い心は人々を話し合う。"
        }
    },
    {
        id: "phil_gl_002",
        author: "Davy Crockett",
        era: "19th Century",
        tradition: "American Folklore",
        category: "Conviction",
        region: "USA",
        translations: {
            en: "Be always sure you're right, then go ahead.",
            hi: "हमेशा सुनिश्चित रहें कि आप सही हैं, फिर आगे बढ़ें।",
            es: "Asegúrate siempre de tener razón, y luego sigue adelante.",
            fr: "Soyez toujours sûr d'avoir raison, puis foncez.",
            de: "Sei dir immer sicher, dass du recht hast, und dann mach weiter.",
            pt: "Tente sempre ter a certeza de que está certo e depois siga em frente.",
            ja: "自分が正しいと常に確信し、それから突き進め。"
        }
    },
    {
        id: "phil_gl_003",
        author: "Kahlil Gibran",
        era: "20th Century",
        tradition: "Lebanese Philosophy",
        category: "Spirituality",
        region: "Lebanon",
        translations: {
            en: "We choose our joys and sorrows long before we experience them.",
            hi: "हम अपने सुख और दुख उनके अनुभव करने से बहुत पहले ही चुन लेते हैं।",
            es: "Elegimos nuestras alegrías y tristezas mucho antes de experimentarlas.",
            fr: "Nous choisissons nos joies et nos peines bien avant de les vivre.",
            de: "Wir wählen unsere Freuden und Leiden lange bevor wir sie erleben.",
            pt: "Escolhemos nossas alegrias e angústias muito antes de vivenciá-las.",
            ja: "私たちは、喜びも悲しみも、それを経験するずっと前に選んでいる。"
        }
    },
    {
        id: "phil_gl_004",
        author: "Frantz Fanon",
        era: "20th Century",
        tradition: "Critical Theory",
        category: "Dignity",
        region: "Martinique/Algeria",
        translations: {
            en: "My final prayer: O my body, make of me always a man who questions!",
            hi: "मेरी अंतिम प्रार्थना: हे मेरे शरीर, मुझे हमेशा एक ऐसा व्यक्ति बनाओ जो प्रश्न पूछता हो!",
            es: "Mi última oración: ¡Oh cuerpo mío, haz de mí siempre un hombre que cuestione!",
            fr: "Ma dernière prière : O mon corps, fais de moi toujours un homme qui interroge !",
            de: "Mein letztes Gebet: O mein Körper, mache aus mir immer einen Menschen, der fragt!",
            pt: "Minha última oração: Ó meu corpo, faz de mim sempre um homem que questiona!",
            ja: "私の最後の祈り。おお、わが体よ、私を常に問い続ける人間にせよ。"
        }
    },
    {
        id: "phil_gl_005",
        author: "Che Guevara",
        era: "20th Century",
        tradition: "Marxist Philosophy",
        category: "Solidarity",
        region: "Argentina/Cuba",
        translations: {
            en: "If you tremble with indignation at every injustice then you are a comrade of mine.",
            hi: "यदि आप हर अन्याय पर आक्रोश से कांपते हैं तो आप मेरे साथी हैं।",
            es: "Si usted es capaz de temblar de indignación cada vez que se comete una injusticia en el mundo, somos compañeros.",
            fr: "Si vous tremblez d'indignation à chaque injustice, alors vous êtes un de mes camarades.",
            de: "Wenn du vor Empörung über jede Ungerechtigkeit zitterst, dann bist du ein Genosse von mir.",
            pt: "Se você treme de indignação a cada injustiça cometida no mundo, então somos companheiros.",
            ja: "もし君があらゆる不義に対して憤りで震えるなら、君は私の同志だ。"
        }
    },
    {
        id: "phil_gl_006",
        author: "Aung San Suu Kyi",
        era: "21st Century",
        tradition: "Democratic Socialism",
        category: "Courage",
        region: "Myanmar",
        translations: {
            en: "It is not power that corrupts but fear.",
            hi: "सत्ता नहीं बल्कि डर भ्रष्ट करता है।",
            es: "No es el poder lo que corrompe, sino el miedo.",
            fr: "Ce n'est pas le pouvoir qui corrompt, mais la peur.",
            de: "Nicht die Macht korrumpiert, sondern die Angst.",
            pt: "Não é o poder que corrompe, mas o medo.",
            ja: "権力が腐敗させるのではなく、恐怖が腐敗させるのだ。"
        }
    },
    {
        id: "phil_gl_007",
        author: "Nelson Mandela",
        era: "21st Century",
        tradition: "African Humanism",
        category: "Education",
        region: "South Africa",
        translations: {
            en: "Education is the most powerful weapon which you can use to change the world.",
            hi: "शिक्षा सबसे शक्तिशाली हथियार है जिसका उपयोग आप दुनिया को बदलने के लिए कर सकते हैं।",
            es: "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
            fr: "L'éducation est l'arme la plus puissante que vous puissiez utiliser pour changer le monde.",
            de: "Bildung ist die mächtigste Waffe, die man verwenden kann, um die Welt zu verändern.",
            pt: "A educação é a arma mais poderosa que você pode usar para mudar o mundo.",
            ja: "教育とは、世界を変えるために用いることができる、最も強力な武器である。"
        }
    },
    {
        id: "phil_gl_008",
        author: "Desmond Tutu",
        era: "21st Century",
        tradition: "Ubuntu",
        category: "Interconnectedness",
        region: "South Africa",
        translations: {
            en: "My humanity is bound up in yours, for we can only be human together.",
            hi: "मेरी मानवता आपकी मानवता से जुड़ी हुई है, क्योंकि हम केवल एक साथ ही मानव हो सकते हैं।",
            es: "Mi humanidad está ligada a la tuya, porque solo podemos ser humanos juntos.",
            fr: "Mon humanité est liée à la vôtre, car nous ne pouvons être humains qu'ensemble.",
            de: "Meine Menschlichkeit ist mit der deinen verbunden, denn wir können nur gemeinsam menschlich sein.",
            pt: "Minha humanidade está ligada à sua, pois só podemos ser humanos juntos.",
            ja: "私の人間性はあなたの人間性と結びついている。私たちは共に歩むことでしか人間になれないからだ。"
        }
    },
    {
        id: "phil_gl_009",
        author: "Wangari Maathai",
        era: "21st Century",
        tradition: "Ecofeminism",
        category: "Nature",
        region: "Kenya",
        translations: {
            en: "The environment and the economy are really both two sides of the same coin.",
            hi: "पर्यावरण और अर्थव्यवस्था वास्तव में एक ही सिक्के के दो पहलू हैं।",
            es: "El medio ambiente y la economía son en realidad las dos caras de la misma moneda.",
            fr: "L'environnement et l'économie sont en réalité les deux faces d'une même pièce.",
            de: "Umwelt und Wirtschaft sind eigentlich zwei Seiten derselben Medaille.",
            pt: "O meio ambiente e a economia são, na realidade, dois lados da mesma moeda.",
            ja: "環境と経済は、実際には同じコインの両面である。"
        }
    },
    {
        id: "phil_gl_010",
        author: "Wole Soyinka",
        era: "21st Century",
        tradition: "Yoruba Philosophy",
        category: "Justice",
        region: "Nigeria",
        translations: {
            en: "The greatest threat to freedom is the absence of criticism.",
            hi: "स्वतंत्रता के लिए सबसे बड़ा खतरा आलोचना की अनुपस्थिति है।",
            es: "La mayor amenaza para la libertad es la ausencia de crítica.",
            fr: "La plus grande menace pour la liberté est l'absence de critique.",
            de: "Die größte Bedrohung für die Freiheit ist das Fehlen von Kritik.",
            pt: "A maior ameaça à liberdade é a ausência de crítica.",
            ja: "自由に対する最大の脅威は、批判がないことである。"
        }
    },
    {
        id: "phil_gl_011",
        author: "Paulo Freire",
        era: "20th Century",
        tradition: "Critical Pedagogy",
        category: "Dialogue",
        region: "Brazil",
        translations: {
            en: "To speak a true word is to transform the world.",
            hi: "सच्चा शब्द बोलना दुनिया को बदलना है।",
            es: "Decir una palabra verdadera es transformar el mundo.",
            fr: "Prononcer une parole vraie, c'est transformer le monde.",
            de: "Ein wahres Wort zu sprechen bedeutet, die Welt zu verwandeln.",
            pt: "Dizer uma palavra verdadeira é transformar o mundo.",
            ja: "真実の言葉を語ることは、世界を変革することである。"
        }
    },
    {
        id: "phil_gl_012",
        author: "Gabriel Garcia Marquez",
        era: "20th Century",
        tradition: "Magical Realism",
        category: "Memory",
        region: "Colombia",
        translations: {
            en: "What matters in life is not what happens to you but what you remember and how you remember it.",
            hi: "जीवन में जो मायने रखता है वह यह नहीं है कि आपके साथ क्या होता है बल्कि वह है जो आपको याद रहता है और आप इसे कैसे याद रखते हैं।",
            es: "Lo que importa en la vida no es lo que te pasa, sino lo que recuerdas y cómo lo recuerdas.",
            fr: "Ce qui compte dans la vie, ce n'est pas ce qui vous arrive, mais ce dont vous vous souvenez et comment vous vous en souvenez.",
            de: "Was im Leben zählt, ist nicht, was einem passiert, sondern woran man sich erinnert und wie man sich erinnert.",
            pt: "O que importa na vida não é o que acontece com você, mas o que você recorda e como recorda.",
            ja: "人生で大切なのは、あなたに何が起きたかではなく、何を覚え、それをどう覚えているかだ。"
        }
    },
    {
        id: "phil_gl_013",
        author: "Rigoberta Menchu",
        era: "21st Century",
        tradition: "Indigenous Philosophy",
        category: "Peace",
        region: "Guatemala",
        translations: {
            en: "Peace is not only the absence of war; as long as there is poverty, racism, discrimination and exclusion we difficultly can achieve a world at peace.",
            hi: "शांति केवल युद्ध की अनुपस्थिति नहीं है; जब तक गरीबी, नस्लवाद, भेदभाव और बहिष्कार है, हम मुश्किल से शांतिपूर्ण दुनिया हासिल कर सकते हैं।",
            es: "La paz no es solamente la ausencia de la guerra; mientras haya pobreza, racismo, discriminación y exclusión difícilmente podremos alcanzar un mundo de paz.",
            fr: "La paix n'est pas seulement l'absence de guerre ; tant qu'il y aura de la pauvreté, du racisme, de la discrimination et de l'exclusion, nous pourrons difficilement parvenir à un monde en paix.",
            de: "Friede ist nicht nur die Abwesenheit von Krieg; solange es Armut, Rassismus, Diskriminierung und Ausgrenzung gibt, können wir kaum eine Welt im Frieden erreichen.",
            pt: "A paz não é apenas a ausência de guerra; enquanto houver pobreza, racismo, discriminação e exclusão, dificilmente poderemos alcançar um mundo em paz.",
            ja: "平和とは単に戦争がないことではない。貧困、人種差別、差別、排斥がある限り、平和な世界を実現することは困難である。"
        }
    },
    {
        id: "phil_gl_014",
        author: "Eduardo Galeano",
        era: "21st Century",
        tradition: "Open Veins",
        category: "Utopia",
        region: "Uruguay",
        translations: {
            en: "Utopia is on the horizon. I move two steps closer; it moves two steps further away.",
            hi: "यूटोपिया क्षितिज पर है। मैं दो कदम करीब आता हूँ; यह दो कदम और दूर चला जाता है।",
            es: "La utopía está en el horizonte. Camino dos pasos, ella se aleja dos pasos.",
            fr: "L'utopie est à l'horizon. Je m'approche de deux pas ; elle s'éloigne de deux pas.",
            de: "Die Utopie liegt am Horizont. Ich gehe zwei Schritte näher; sie rückt zwei Schritte weiter weg.",
            pt: "A utopia está no horizonte. Dou dois passos em direção a ela, ela se afasta dois passos.",
            ja: "ユートピアは地平線にある。私が二歩近づくと、それは二歩遠ざかる。"
        }
    },
    {
        id: "phil_gl_015",
        author: "Simon Bolivar",
        era: "19th Century",
        tradition: "Bolivarianism",
        category: "Liberty",
        region: "Venezuela",
        translations: {
            en: "A people that loves freedom will in the end be free.",
            hi: "जो लोग स्वतंत्रता से प्रेम करते हैं वे अंततः स्वतंत्र होंगे।",
            es: "Un pueblo que ama la libertad al final será libre.",
            fr: "Un peuple qui aime la liberté finira par être libre.",
            de: "Ein Volk, das die Freiheit liebt, wird am Ende frei sein.",
            pt: "Um povo que ama a liberdade, afinal, será livre.",
            ja: "自由を愛する人々は、最後には自由になるだろう。"
        }
    },
    {
        id: "phil_gl_016",
        author: "Jose Marti",
        era: "19th Century",
        tradition: "Cuban Philosophy",
        category: "Truth",
        region: "Cuba",
        translations: {
            en: "To be educated is to be free.",
            hi: "शिक्षित होना स्वतंत्र होना है।",
            es: "Ser culto es el único modo de ser libre.",
            fr: "Être instruit, c'est être libre.",
            de: "Gebildet zu sein bedeutet, frei zu sein.",
            pt: "Ser instruído é ser livre.",
            ja: "教育を受けることは、自由になることである。"
        }
    },
    {
        id: "phil_gl_017",
        author: "Sor Juana Ines de la Cruz",
        era: "17th Century",
        tradition: "Baroque Philosophy",
        category: "Knowledge",
        region: "Mexico",
        translations: {
            en: "I do not study to know more, but to ignore less.",
            hi: "मैं अधिक जानने के लिए नहीं, बल्कि कम अज्ञानी होने के लिए अध्ययन करती हूँ।",
            es: "No estudio por saber más, sino por ignorar menos.",
            fr: "Je n'étudie pas pour en savoir plus, mais pour moins ignorer.",
            de: "Ich lerne nicht, um mehr zu wissen, sondern um weniger zu ignorieren.",
            pt: "Não estudo para saber mais, mas para ignorar menos.",
            ja: "私はより多くを知るために学んでいるのではなく、知らざることを減らすために学んでいるのだ。"
        }
    },
    {
        id: "phil_gl_018",
        author: "Octavio Paz",
        era: "20th Century",
        tradition: "Modernism",
        category: "Solitude",
        region: "Mexico",
        translations: {
            en: "Solitude is the profoundest fact of the human condition.",
            hi: "अकेलापन मानवीय स्थिति का सबसे गहरा तथ्य है।",
            es: "La soledad es el hecho más profundo de la condición humana.",
            fr: "La solitude est le fait le plus profond de la condition humaine.",
            de: "Einsamkeit ist die tiefste Tatsache der conditio humana.",
            pt: "A solidão é o fato mais profundo da condição humana.",
            ja: "孤独は、人間の条件における最も深遠な事実である。"
        }
    },
    {
        id: "phil_gl_019",
        author: "Frida Kahlo",
        era: "20th Century",
        tradition: "Surrealism",
        category: "Spirit",
        region: "Mexico",
        translations: {
            en: "Feet, what do I need them for if I have wings to fly?",
            hi: "पैर, मुझे उनकी क्या ज़रूरत है अगर मेरे पास उड़ने के लिए पंख हैं?",
            es: "¿Pies para qué los quiero si tengo alas para volar?",
            fr: "Des pieds, pourquoi en ai-je besoin si j'ai des ailes pour voler ?",
            de: "Füße, wozu brauche ich sie, wenn ich Flügel zum Fliegen habe?",
            pt: "Pés, para que os quero, se tenho asas para voar?",
            ja: "足が何になるというの、私には羽ばたくための翼があるのに。"
        }
    },
    {
        id: "phil_gl_020",
        author: "Ibn Batuta",
        era: "14th Century",
        tradition: "Global Travel",
        category: "Exploration",
        region: "Morocco",
        translations: {
            en: "Traveling—it leaves you speechless, then turns you into a storyteller.",
            hi: "यात्रा—यह आपको अवाक छोड़ देती है, फिर आपको एक कहानीकार में बदल देती है।",
            es: "Viajar te deja sin palabras y luego te convierte en un narrador de historias.",
            fr: "Voyager vous laisse sans voix, puis vous transforme en conteur.",
            de: "Reisen macht einen erst sprachlos und verwandelt einen dann in einen Geschichtenerzähler.",
            pt: "Viajar deixa você sem palavras e depois o transforma em um contador de histórias.",
            ja: "旅をすることは人を絶句させ、それから物語の語り手へと変える。"
        }
    }
];

const QUOTES_LIBRARY = {
    en: RAW_PHILOSOPHER_QUOTES.map(q => ({ id: q.id, text: q.translations.en, author: q.author, category: q.category, tradition: q.tradition, era: q.era, region: q.region })),
    hi: RAW_PHILOSOPHER_QUOTES.map(q => ({ id: q.id, text: q.translations.hi, author: q.author, category: q.category, tradition: q.tradition, era: q.era, region: q.region })),
    es: RAW_PHILOSOPHER_QUOTES.map(q => ({ id: q.id, text: q.translations.es, author: q.author, category: q.category, tradition: q.tradition, era: q.era, region: q.region })),
    fr: RAW_PHILOSOPHER_QUOTES.map(q => ({ id: q.id, text: q.translations.fr, author: q.author, category: q.category, tradition: q.tradition, era: q.era, region: q.region })),
    de: RAW_PHILOSOPHER_QUOTES.map(q => ({ id: q.id, text: q.translations.de, author: q.author, category: q.category, tradition: q.tradition, era: q.era, region: q.region })),
    pt: RAW_PHILOSOPHER_QUOTES.map(q => ({ id: q.id, text: q.translations.pt, author: q.author, category: q.category, tradition: q.tradition, era: q.era, region: q.region })),
    ja: RAW_PHILOSOPHER_QUOTES.map(q => ({ id: q.id, text: q.translations.ja, author: q.author, category: q.category, tradition: q.tradition, era: q.era, region: q.region }))
};

export default QUOTES_LIBRARY;
