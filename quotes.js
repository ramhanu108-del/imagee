/**
 * SmartTools Hub - Unique Philosopher Wisdom Repository
 * ---------------------------------------------------
 * Structure: ID, Author, Era, Tradition, Category, Translations.
 * Only public-domain, licensed, or original/paraphrased translations should be added.
 */

const RAW_PHILOSOPHER_QUOTES = [
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
            pt: "As dificultades fortalecem a mente, assim como o trabalho faz com o corpo.",
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
            ja: "学びて思わざれば則ち罔（くら）し、思いて学ばざれば則ち殆（あयाう）し।"
        }
    },
    // --- INDIAN PHILOSOPHY EXPANSION (150+ QUOTES) ---
    {
        id: "phil_in_0001",
        author: "Adi Shankaracharya",
        era: "8th Century India",
        tradition: "Advaita Vedanta",
        category: "Self-Knowledge",
        region: "India",
        translations: {
            en: "The world is an illusion, only the Self is real.",
            hi: "जगत मिथ्या है, केवल ब्रह्म ही सत्य है।",
            es: "El mundo es una ilusión, sólo el Ser es real.",
            fr: "Le monde est une illusion, seul le Soi est réel.",
            de: "Die Welt ist eine Illusion, nur das Selbst ist real.",
            pt: "O mundo é uma ilusão, apenas o Eu é real.",
            ja: "世界は幻影であり、自己のみが真実である。"
        }
    },
    {
        id: "phil_in_0002",
        author: "Swami Vivekananda",
        era: "19th Century India",
        tradition: "Modern Vedanta",
        category: "Strength",
        region: "India",
        translations: {
            en: "Arise, awake, and stop not until the goal is reached.",
            hi: "उठो, जागो और तब तक मत रुको जब तक लक्ष्य प्राप्त न हो जाए।",
            es: "Levántate, despierta y no te detengas hasta alcanzar la meta.",
            fr: "Lève-toi, réveille-toi et ne t'arrête pas avant d'avoir atteint le but.",
            de: "Steh auf, wach auf und höre nicht auf, bis das Ziel erreicht ist.",
            pt: "Levante-se, desperte e não pare até que o objetivo seja alcançado.",
            ja: "立ち上がれ、目覚めよ、そして目標に達するまで止まるな。"
        }
    },
    {
        id: "phil_in_0003",
        author: "Chanakya",
        era: "4th Century BC India",
        tradition: "Arthashastra",
        category: "Wisdom",
        region: "India",
        translations: {
            en: "Education is the best friend. An educated person is respected everywhere.",
            hi: "शिक्षा सबसे अच्छी मित्र है। एक शिक्षित व्यक्ति का हर जगह सम्मान होता है।",
            es: "La educación es el mejor amigo. Una persona educada es respetada en todas partes.",
            fr: "L'éducation est le meilleur ami. Une personne instruite est respectée partout.",
            de: "Bildung ist der beste Freund. Ein gebildeter Mensch wird überall geachtet.",
            pt: "A educação é o melhor amigo. Uma pessoa educada é respeitada em todos os lugares.",
            ja: "教育は最良の友である。教育を受けた者はどこでも尊敬される。"
        }
    },
    {
        id: "phil_in_0004",
        author: "Gautama Buddha",
        era: "Ancient India",
        tradition: "Buddhism",
        category: "Mindfulness",
        region: "India",
        translations: {
            en: "The mind is everything. What you think you become.",
            hi: "मन ही सब कुछ है। आप जो सोचते हैं, वही बन जाते हैं।",
            es: "La mente lo es todo. Te conviertes en lo que piensas.",
            fr: "L'esprit est tout. Ce que vous pensez, vous le devenez.",
            de: "Der Geist ist alles. Was du denkst, das wirst du.",
            pt: "A mente é tudo. O que você pensa, você se torna.",
            ja: "すべては心から始まる。考えた通りの人間になる。"
        }
    },
    {
        id: "phil_in_0005",
        author: "Guru Nanak",
        era: "15th Century India",
        tradition: "Sikhism",
        category: "Equality",
        region: "India",
        translations: {
            en: "Truth is higher than everything, but higher still is truthful living.",
            hi: "सत्य सबसे ऊपर है, लेकिन उससे भी ऊपर सच्चा आचरण है।",
            es: "La verdad está por encima de todo, pero más alta aún es la vida veraz.",
            fr: "La vérité est au-dessus de tout, mais plus haut encore est la vie véridique.",
            de: "Die Wahrheit steht über allem, aber noch höher steht ein wahrhaftiges Leben.",
            pt: "A verdade está acima de tudo, mas ainda mais elevada é a vida com verdade.",
            ja: "真理はすべてに勝るが、真理に基づいた生き方はそれ以上に尊い。"
        }
    },
    {
        id: "phil_in_0006",
        author: "Sant Kabir",
        era: "15th Century India",
        tradition: "Bhakti Movement",
        category: "Simplicity",
        region: "India",
        translations: {
            en: "Slowly, slowly, O mind; everything happens at its own pace.",
            hi: "धीरे धीरे रे मना, धीरे सब कुछ होय।",
            es: "Despacio, despacio, oh mente; todo sucede a su propio ritmo.",
            fr: "Lentement, lentement, ô esprit ; tout arrive à son propre rythme.",
            de: "Langsam, langsam, o Geist; alles geschieht in seinem eigenen Tempo.",
            pt: "Lentamente, lentamente, ó mente; tudo acontece no seu próprio ritmo.",
            ja: "ゆっくりと、ゆっくりと、心よ。すべてはそれ自体のペースで進むものだ。"
        }
    },
    {
        id: "phil_in_0007",
        author: "Patanjali",
        era: "Ancient India",
        tradition: "Yoga Sutras",
        category: "Concentration",
        region: "India",
        translations: {
            en: "Yoga is the cessation of the fluctuations of the mind.",
            hi: "योगः चित्तवृत्तिनिरोधः।",
            es: "El yoga es el cese de las fluctuaciones de la mente.",
            fr: "Le yoga est la cessation des fluctuations de l'esprit.",
            de: "Yoga ist das Zurruhekommen der Gedankenwellen im Geist.",
            pt: "Yoga é a cessação das flutuações da mente.",
            ja: "ヨガとは、心の働きを止めることである。"
        }
    },
    {
        id: "phil_in_0008",
        author: "Tiruvalluvar",
        era: "Ancient India",
        tradition: "Tamil Wisdom",
        category: "Virtue",
        region: "India",
        translations: {
            en: "Gratitude is the only thing that cannot be forgotten.",
            hi: "कृतज्ञता ही वह एकमात्र चीज़ है जिसे भुलाया नहीं जा सकता।",
            es: "La gratitud es lo único que no se puede olvidar.",
            fr: "La gratitude est la seule chose qui ne peut être oubliée.",
            de: "Dankbarkeit ist das Einzige, das man nicht vergessen kann.",
            pt: "A gratidão é a única coisa que não pode ser esquecida.",
            ja: "感謝こそは、決して忘れてはならない唯一のものである。"
        }
    },
    {
        id: "phil_in_0009",
        author: "Nagarjuna",
        era: "2nd Century India",
        tradition: "Mahayana Buddhism",
        category: "Emptiness",
        region: "India",
        translations: {
            en: "Whatever arises depending on causes is empty of inherent existence.",
            hi: "जो कुछ भी कारणों पर निर्भर होकर उत्पन्न होता है, वह अंतर्निहित अस्तित्व से शून्य है।",
            es: "Todo lo que surge dependiendo de causas está vacío de existencia inherente.",
            fr: "Tout ce qui surgit en fonction de causes est vide d'existence inhérente.",
            de: "Was auch immer in Abhängigkeit von Ursachen entsteht, ist leer an inhärenter Existenz.",
            pt: "Tudo o que surge dependendo de causas é vazio de existência inerente.",
            ja: "縁によって生じるものはすべて、自性（固有の実体）を欠いている。"
        }
    },
    {
        id: "phil_in_0010",
        author: "Mahavira",
        era: "6th Century BC India",
        tradition: "Jainism",
        category: "Non-violence",
        region: "India",
        translations: {
            en: "Non-violence is the highest religion.",
            hi: "अहिंसा परमो धर्मः।",
            es: "La no violencia es la religión más elevada.",
            fr: "La non-violence est la plus haute religion.",
            de: "Gewaltlosigkeit ist die höchste Religion.",
            pt: "A não violência é a religião mais elevada.",
            ja: "非暴力こそが至高の教えである。"
        }
    },
    {
        id: "phil_in_0011",
        author: "Rabindranath Tagore",
        era: "20th Century India",
        tradition: "Poetic Wisdom",
        category: "Light",
        region: "India",
        translations: {
            en: "Faith is the bird that feels the light when the dawn is still dark.",
            hi: "विश्वास वह पक्षी है जो भोर के अंधेरे में ही प्रकाश को महसूस कर लेता है।",
            es: "La fe es el pájaro que siente la luz cuando el amanecer aún está oscuro.",
            fr: "La foi est l'oiseau qui sent la lumière alors que l'aube est encore sombre.",
            de: "Glaube ist der Vogel, der das Licht spürt, wenn die Dämmerung noch dunkel ist.",
            pt: "A fé é o pássaro que sente a luz quando o amanecer ainda está escuro.",
            ja: "信仰とは、夜明けがまだ暗い時に光を感じる鳥である。"
        }
    },
    {
        id: "phil_in_0012",
        author: "Jiddu Krishnamurti",
        era: "20th Century India",
        tradition: "Modern Thought",
        category: "Freedom",
        region: "India",
        translations: {
            en: "It is no measure of health to be well adjusted to a profoundly sick society.",
            hi: "गहराई से बीमार समाज के साथ अच्छी तरह से तालमेल बिठाना स्वास्थ्य का पैमाना नहीं है।",
            es: "No es medida de salud estar bien adaptado a una sociedad profundamente enferma.",
            fr: "Ce n'est pas un signe de bonne santé que d'être bien adapté à une société profondément malade.",
            de: "Es ist kein Zeichen von Gesundheit, an eine zutiefst kranke Gesellschaft gut angepasst zu sein.",
            pt: "Não é medida de saúde estar bem adaptado a uma sociedade profundamente doente.",
            ja: "深く病んだ社会にうまく適応していることは、健康の証ではない。"
        }
    },
    {
        id: "phil_in_0013",
        author: "Ramana Maharshi",
        era: "20th Century India",
        tradition: "Advaita",
        category: "Self-Inquiry",
        region: "India",
        translations: {
            en: "Your duty is to be, and not to be this or that.",
            hi: "आपका कर्तव्य होना है, यह या वह होना नहीं।",
            es: "Tu deber es ser, y no ser esto o aquello.",
            fr: "Votre devoir est d'être, et non d'être ceci ou cela.",
            de: "Deine Pflicht ist es zu sein, und nicht dies oder jenes zu sein.",
            pt: "Seu dever é ser, e não ser isto ou aquilo.",
            ja: "あなたの義務は「ある」ことであり、これやあれであることではない。"
        }
    },
    {
        id: "phil_in_0014",
        author: "Sri Aurobindo",
        era: "20th Century India",
        tradition: "Integral Yoga",
        category: "Evolution",
        region: "India",
        translations: {
            en: "True knowledge is not attained by thinking. It is what you are; it is what you become.",
            hi: "सच्चा ज्ञान सोचने से नहीं मिलता। यह वह है जो आप हैं; यह वह है जो आप बनते हैं।",
            es: "El verdadero conocimiento no se alcanza pensando. Es lo que eres; es lo que te conviertes.",
            fr: "La vraie connaissance ne s'obtient pas par la pensée. C'est ce que vous êtes ; c'est ce que vous devenez.",
            de: "Wahres Wissen wird nicht durch Denken erlangt. Es ist das, was du bist; es ist das, was du wirst.",
            pt: "O verdadeiro conhecimento não é alcançado pelo pensamento. É o que você é; é o que você se torna.",
            ja: "真の知識は思考によって得られるものではない。それはあなたが「である」ものであり、あなたが「なる」ものだ。"
        }
    },
    {
        id: "phil_in_0015",
        author: "Swami Vivekananda",
        era: "19th Century India",
        tradition: "Modern Vedanta",
        category: "Fearlessness",
        region: "India",
        translations: {
            en: "The whole secret of existence is to have no fear.",
            hi: "अस्तित्व का पूरा रहस्य निडर होने में है।",
            es: "Todo el secreto de la existencia es no tener miedo.",
            fr: "Tout le secret de l'existence est de n'avoir aucune peur.",
            de: "Das ganze Geheimnis des Daseins besteht darin, keine Angst zu haben.",
            pt: "Todo o segredo da existência é não ter medo.",
            ja: "存在の全秘密は、恐れを持たないことにある。"
        }
    },
    {
        id: "phil_in_0016",
        author: "Chanakya",
        era: "4th Century BC India",
        tradition: "Arthashastra",
        category: "Company",
        region: "India",
        translations: {
            en: "Better it is to die than to preserve life by incurring disgrace.",
            hi: "अपमान सहकर जीवित रहने से बेहतर मरना है।",
            es: "Mejor es morir que preservar la vida incurriendo en desgracia.",
            fr: "Il vaut mieux mourir que de préserver sa vie en s'attirant le déshonneur.",
            de: "Es ist besser zu sterben, als das Leben unter Schande zu bewahren.",
            pt: "É melhor morrer do que preservar a vida incorrendo em desonra.",
            ja: "不名誉を被って生きながらえるより、死んだほうがましである。"
        }
    },
    {
        id: "phil_in_0017",
        author: "Gautama Buddha",
        era: "Ancient India",
        tradition: "Buddhism",
        category: "Peace",
        region: "India",
        translations: {
            en: "Peace comes from within. Do not seek it without.",
            hi: "शांति भीतर से आती है। इसे बाहर मत खोजो।",
            es: "La paz viene del interior. No la busques fuera.",
            fr: "La paix vient de l'intérieur. Ne la cherchez pas à l'extérieur.",
            de: "Frieden kommt von innen. Suche ihn nicht im Außen.",
            pt: "A paz vem de dentro. Não a procure fora.",
            ja: "平和は内側から訪れる。外に求めてはならない。"
        }
    },
    {
        id: "phil_in_0018",
        author: "Adi Shankaracharya",
        era: "8th Century India",
        tradition: "Advaita Vedanta",
        category: "Reality",
        region: "India",
        translations: {
            en: "Like the appearance of silver in mother of pearl, the world seems real until the Self is known.",
            hi: "सीप में चांदी की तरह, दुनिया तब तक वास्तविक लगती है जब तक कि स्वयं को न जान लिया जाए।",
            es: "Como la apariencia de plata en el nácar, el mundo parece real hasta que se conoce al Ser.",
            fr: "Comme l'apparence de l'argent dans la nacre, le monde semble réel jusqu'à ce que le Soi soit connu.",
            de: "Wie der Anschein von Silber im Perlmutt scheint die Welt real zu sein, bis das Selbst erkannt wird.",
            pt: "Como a aparência de prata na madrepérola, o mundo parece real até que o Eu seja conhecido.",
            ja: "真珠層に銀が見えるように、自己を知るまでは世界は実在するように見える。"
        }
    },
    {
        id: "phil_in_0019",
        author: "Swami Vivekananda",
        era: "19th Century India",
        tradition: "Modern Vedanta",
        category: "Character",
        region: "India",
        translations: {
            en: "We are what our thoughts have made us; so take care about what you think.",
            hi: "हम वही हैं जो हमारे विचारों ने हमें बनाया है; इसलिए इस बात का ध्यान रखें कि आप क्या सोचते हैं।",
            es: "Somos lo que nuestros pensamientos nos han hecho; así que ten cuidado con lo que piensas.",
            fr: "Nous sommes ce que nos pensées ont fait de nous ; alors faites attention à ce que vous pensez.",
            de: "Wir sind das, was unsere Gedanken aus uns gemacht haben; also pass auf, was du denkst.",
            pt: "Somos o que nossos pensamentos nos tornaram; portanto, tome cuidado com o que você pensa.",
            ja: "我々は自らの思考が作り上げたものである。ゆえに、何を考えるかに注意せよ。"
        }
    },
    {
        id: "phil_in_0020",
        author: "Patanjali",
        era: "Ancient India",
        tradition: "Yoga Sutras",
        category: "Purpose",
        region: "India",
        translations: {
            en: "When you are inspired by some great purpose, your thoughts break their bonds.",
            hi: "जब आप किसी महान उद्देश्य से प्रेरित होते हैं, तो आपके विचार अपने बंधन तोड़ देते हैं।",
            es: "Cuando te sientes inspirado por un gran propósito, tus pensamientos rompen sus ataduras.",
            fr: "Lorsque vous êtes inspiré par un grand dessein, vos pensées brisent leurs liens.",
            de: "Wenn man von einem großen Ziel inspiriert ist, sprengen die Gedanken ihre Fesseln.",
            pt: "Quando você se sente inspirado por algum grande propósito, seus pensamentos rompem seus laços.",
            ja: "大いなる目的に鼓舞されるとき、思考はその束縛を打ち破る。"
        }
    },
    // Adding more unique IDs to reach the 150+ goal...
    {
        id: "phil_in_0021",
        author: "Tiruvalluvar",
        era: "Ancient India",
        tradition: "Tamil Wisdom",
        category: "Speech",
        region: "India",
        translations: {
            en: "Pleasant words are better than even a gift made with a kind heart.",
            hi: "मीठे शब्द उस उपहार से भी बेहतर हैं जो दयालु हृदय से दिया गया हो।",
            es: "Las palabras agradables son mejores incluso que un regalo hecho con un corazón amable.",
            fr: "Des paroles agréables valent mieux encore qu'un cadeau fait avec un cœur bon.",
            de: "Angenehme Worte sind besser als selbst ein Geschenk aus gütigem Herzen.",
            pt: "Palavras agradáveis são melhores do que até mesmo um presente feito com um coração bondoso.",
            ja: "心地よい言葉は、優しい心で贈られる贈り物よりも価値がある。"
        }
    },
    {
        id: "phil_in_0022",
        author: "Guru Nanak",
        era: "15th Century India",
        tradition: "Sikhism",
        category: "Unity",
        region: "India",
        translations: {
            en: "Before becoming a Muslim, a Hindu, a Sikh or a Christian, let's become a human first.",
            hi: "मुसलमान, हिंदू, सिख या ईसाई बनने से पहले, आइए पहले इंसान बनें।",
            es: "Antes de ser musulmán, hindú, sij o cristiano, seamos primero humanos.",
            fr: "Avant de devenir musulman, hindou, sikh ou chrétien, devenons d'abord un humain.",
            de: "Bevor wir Moslems, Hindus, Sikhs oder Christen werden, lass uns zuerst Menschen werden.",
            pt: "Antes de se tornar um muçulmano, um hindu, um sikh ou um cristão, vamos nos tornar humanos primeiro.",
            ja: "イスラム教徒、ヒンドゥー教徒、シーク教徒、キリスト教徒になる前に、まず人間になろう。"
        }
    },
    {
        id: "phil_in_0023",
        author: "Adi Shankaracharya",
        era: "8th Century India",
        tradition: "Advaita Vedanta",
        category: "Detachment",
        region: "India",
        translations: {
            en: "Renunciation is not the removal of things of the world, but of the world from the mind.",
            hi: "त्याग दुनिया की चीजों को हटाना नहीं है, बल्कि मन से दुनिया को हटाना है।",
            es: "La renuncia no es la eliminación de las cosas del mundo, sino del mundo de la mente.",
            fr: "Le renoncement n'est pas le retrait des choses du monde, mais du monde de l'esprit.",
            de: "Entsagung ist nicht das Entfernen der Dinge aus der Welt, sondern der Welt aus dem Geist.",
            pt: "Renúncia não é a remoção das coisas do mundo, mas do mundo da mente.",
            ja: "放棄とは世界から物を取り除くことではなく、心から世界を取り除くことである。"
        }
    },
    {
        id: "phil_in_0024",
        author: "Swami Vivekananda",
        era: "19th Century India",
        tradition: "Modern Vedanta",
        category: "Divinity",
        region: "India",
        translations: {
            en: "Each soul is potentially divine.",
            hi: "प्रत्येक आत्मा संभावित रूप से दिव्य है।",
            es: "Cada alma es potencialmente divina.",
            fr: "Chaque âme est potentiellement divine.",
            de: "Jede Seele ist potenziell göttlich.",
            pt: "Cada alma é potencialmente divina.",
            ja: "それぞれの魂は、神性を秘めている。"
        }
    },
    {
        id: "phil_in_0025",
        author: "Chanakya",
        era: "4th Century BC India",
        tradition: "Arthashastra",
        category: "Action",
        region: "India",
        translations: {
            en: "Once you start working on something, don't be afraid of failure.",
            hi: "एक बार जब आप किसी चीज़ पर काम करना शुरू कर दें, तो असफलता से न डरें।",
            es: "Una vez que empieces a trabajar en algo, no tengas miedo al fracaso.",
            fr: "Une fois que vous commencez à travailler sur quelque chose, n'ayez pas peur de l'échec.",
            de: "Sobald man anfängt an etwas zu arbeiten, darf man keine Angst vor dem Scheitern haben.",
            pt: "Depois de começar a trabalhar em algo, não tenha medo do fracasso.",
            ja: "一度何かを始めたら、失敗を恐れてはならない。"
        }
    },
    {
        id: "phil_in_0026",
        author: "Gautama Buddha",
        era: "Ancient India",
        tradition: "Buddhism",
        category: "Love",
        region: "India",
        translations: {
            en: "Radiate boundless love towards the entire world.",
            hi: "पूरी दुनिया के प्रति असीम प्रेम बिखेरें।",
            es: "Irradia amor ilimitado hacia el mundo entero.",
            fr: "Rayonnez d'un amour sans limites vers le monde entier.",
            de: "Strahle grenzenlose Liebe in die ganze Welt aus.",
            pt: "Irradie amor ilimitado para o mundo inteiro.",
            ja: "全世界に向けて、限りない慈しみを広げよ。"
        }
    },
    {
        id: "phil_in_0027",
        author: "Mahavira",
        era: "6th Century BC India",
        tradition: "Jainism",
        category: "Self-Conquest",
        region: "India",
        translations: {
            en: "Conquer yourself, for that is a victory greater than conquering thousands in a battle.",
            hi: "अपने आप पर विजय प्राप्त करें, क्योंकि यह युद्ध में हजारों पर विजय पाने से बड़ी जीत है।",
            es: "Véncete a ti mismo, pues esa es una victoria mayor que vencer a miles en una batalla.",
            fr: "Conquiers-toi toi-même, car c'est une victoire plus grande que de vaincre des milliers au combat.",
            de: "Überwinde dich selbst, denn das ist ein größerer Sieg als Tausende in einer Schlacht zu besiegen.",
            pt: "Conquiste a si mesmo, pois essa é uma vitória maior do que conquistar milhares em uma batalha.",
            ja: "己に打ち勝て。それは戦場で千の敵に勝つよりも偉大な勝利である。"
        }
    },
    {
        id: "phil_in_0028",
        author: "Ramanuja",
        era: "11th Century India",
        tradition: "Vishishtadvaita",
        category: "Devotion",
        region: "India",
        translations: {
            en: "Knowledge is the path to the Divine, but devotion is the destination.",
            hi: "ज्ञान ईश्वर का मार्ग है, लेकिन भक्ति गंतव्य है।",
            es: "El conocimiento es el camino hacia lo Divino, pero la devoción es el destino.",
            fr: "La connaissance est le chemin vers le Divin, mais la dévotion est la destination.",
            de: "Wissen ist der Weg zum Göttlichen, aber Hingabe ist das Ziel.",
            pt: "O conhecimento é o caminho para o Divino, mas a devoção é o destino.",
            ja: "知識は神への道であるが、献身こそが目的地である。"
        }
    },
    {
        id: "phil_in_0029",
        author: "Basavanna",
        era: "12th Century India",
        tradition: "Lingayatism",
        category: "Work",
        region: "India",
        translations: {
            en: "Work is Heaven.",
            hi: "कयकावे कैलासा (कायकावे कैलासा)।",
            es: "El trabajo es el cielo.",
            fr: "Le travail est le paradis.",
            de: "Arbeit ist der Himmel.",
            pt: "O trabalho é o paraíso.",
            ja: "労働こそが天国である。"
        }
    },
    {
        id: "phil_in_0030",
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
            ja: "すべての生（せい）はヨガである。"
        }
    },
    {
        id: "phil_in_0031",
        author: "Ramakrishna Paramahamsa",
        era: "19th Century India",
        tradition: "Bhakti",
        category: "Unity",
        region: "India",
        translations: {
            en: "As many faiths, so many paths.",
            hi: "यतो मत ततो पथ (जितने मत, उतने पथ)।",
            es: "Tantas fes, tantos caminos.",
            fr: "Autant de fois, autant de chemins.",
            de: "So viele Glaubensrichtungen, so viele Wege.",
            pt: "Tantas crenças, tantos caminhos.",
            ja: "信仰の数だけ、道がある。"
        }
    },
    {
        id: "phil_in_0032",
        author: "Jiddu Krishnamurti",
        era: "20th Century India",
        tradition: "Modern Thought",
        category: "Learning",
        region: "India",
        translations: {
            en: "There is no end to education. It is not that you read a book then pass an examination.",
            hi: "शिक्षा का कोई अंत नहीं है। ऐसा नहीं है कि आपने किताब पढ़ी और परीक्षा पास कर ली।",
            es: "No hay fin para la educación. No es que leas un libro y luego pases un examen.",
            fr: "Il n'y a pas de fin à l'éducation. Ce n'est pas parce que vous lisez un livre que vous réussissez un examen.",
            de: "Bildung hat kein Ende. Es ist nicht so, dass man ein Buch liest und dann eine Prüfung besteht.",
            pt: "Não há fim para a educação. Não é como ler um livro e passar em um exame.",
            ja: "教育に終わりはない。本を読み、試験に合格すれば終わりというものではない。"
        }
    },
    {
        id: "phil_in_0033",
        author: "Chanakya",
        era: "4th Century BC India",
        tradition: "Arthashastra",
        category: "Planning",
        region: "India",
        translations: {
            en: "A man is great by deeds, not by birth.",
            hi: "मनुष्य कर्म से महान होता है, जन्म से नहीं।",
            es: "Un hombre es grande por sus actos, no por su nacimiento.",
            fr: "Un homme est grand par ses actes, non par sa naissance.",
            de: "Ein Mensch ist durch Taten groß, nicht durch Geburt.",
            pt: "Um homem é grande pelas suas obras, não pelo seu nascimento.",
            ja: "人はその行いによって偉大になるのであり、生まれによってではない。"
        }
    },
    {
        id: "phil_in_0034",
        author: "Gautama Buddha",
        era: "Ancient India",
        tradition: "Buddhism",
        category: "Self-Reliance",
        region: "India",
        translations: {
            en: "Be a lamp unto yourself.",
            hi: "अप्प दीपो भव (अपना दीपक स्वयं बनें)।",
            es: "Sé una lámpara para ti mismo.",
            fr: "Soyez votre propre lampe.",
            de: "Sei dir selbst ein Licht.",
            pt: "Seja uma lâmpada para si mesmo.",
            ja: "自らを灯明（ともしび）とせよ。"
        }
    },
    {
        id: "phil_in_0035",
        author: "Ramana Maharshi",
        era: "20th Century India",
        tradition: "Advaita",
        category: "Identity",
        region: "India",
        translations: {
            en: "The question 'Who am I?' is the ultimate inquiry.",
            hi: "सवाल 'मैं कौन हूँ?' अंतिम खोज है।",
            es: "La pregunta '¿Quién soy yo?' es la indagación definitiva.",
            fr: "La question 'Qui suis-je ?' est l'ultime quête.",
            de: "Die Frage 'Wer bin ich?' ist die höchste Untersuchung.",
            pt: "A pergunta 'Quem sou eu?' é a busca definitiva.",
            ja: "「私は誰か？」という問いこそが、究極の探究である。"
        }
    },
    {
        id: "phil_in_0036",
        author: "Swami Vivekananda",
        era: "19th Century India",
        tradition: "Modern Vedanta",
        category: "Responsibility",
        region: "India",
        translations: {
            en: "You are the creator of your own destiny.",
            hi: "तुम अपने भाग्य के विधाता स्वयं हो।",
            es: "Eres el creador de tu propio destino.",
            fr: "Vous êtes le créateur de votre propre destin.",
            de: "Du bist der Schöpfer deines eigenen Schicksals.",
            pt: "Você é o criador do seu próprio destino.",
            ja: "あなたは自分自身の運命の創造者である。"
        }
    },
    {
        id: "phil_in_0037",
        author: "Adi Shankaracharya",
        era: "8th Century India",
        tradition: "Advaita Vedanta",
        category: "Perception",
        region: "India",
        translations: {
            en: "The Atman is the witness, luminous and beyond all attributes.",
            hi: "आत्मा साक्षी है, प्रकाशमान और सभी गुणों से परे है।",
            es: "El Atman es el testigo, luminoso y más allá de todos los atributos.",
            fr: "L'Atman est le témoin, lumineux et au-delà de tous les attributs.",
            de: "Das Atman ist der Zeuge, leuchtend und jenseits aller Attribute.",
            pt: "O Atman é a testemunha, luminoso e além de todos os atributos.",
            ja: "アートマン（自己）は証人であり、光り輝き、あらゆる属性を超えている。"
        }
    },
    {
        id: "phil_in_0038",
        author: "Chanakya",
        era: "4th Century BC India",
        tradition: "Arthashastra",
        category: "Humility",
        region: "India",
        translations: {
            en: "As a tree laden with fruit bows down, so does a wise man.",
            hi: "जैसे फलों से लदा हुआ पेड़ झुक जाता है, वैसे ही बुद्धिमान व्यक्ति भी झुकता है।",
            es: "Como un árbol cargado de fruta se inclina, así lo hace un hombre sabio.",
            fr: "Comme un arbre chargé de fruits s'incline, ainsi fait l'homme sage.",
            de: "Wie ein mit Früchten beladener Baum sich beugt, so tut es auch ein weiser Mann.",
            pt: "Como uma árvore carregada de frutos se curva, o mesmo faz um homem sábio.",
            ja: "実のなる木が頭を垂れるように、賢者もまた謙虚である。"
        }
    },
    {
        id: "phil_in_0039",
        author: "Rabindranath Tagore",
        era: "20th Century India",
        tradition: "Poetic Wisdom",
        category: "Beauty",
        region: "India",
        translations: {
            en: "Clouds come floating into my life, no longer to carry rain, but to add color to my sunset sky.",
            hi: "बादल मेरे जीवन में तैरते हुए आते हैं, अब बारिश लाने के लिए नहीं, बल्कि मेरे सूर्यास्त के आकाश में रंग भरने के लिए।",
            es: "Las nubes flotan en mi vida, ya no para traer lluvia, sino para dar color a mi cielo crepuscular.",
            fr: "Des nuages flottent dans ma vie, non plus pour porter la pluie, mais pour colorer mon ciel de couchant.",
            de: "Wolken schweben in mein Leben, nicht mehr um Regen zu bringen, sondern um meinem Abendhimmel Farbe zu verleihen.",
            pt: "Nuvens flutuam em minha vida, não mais para trazer chuva, mas para colorir o meu céu de pôr do sol.",
            ja: "雲が私の人生に漂い込んでくる。もはや雨を運ぶためではなく、夕焼け空に彩りを添えるために。"
        }
    },
    {
        id: "phil_in_0040",
        author: "Swami Vivekananda",
        era: "19th Century India",
        tradition: "Modern Vedanta",
        category: "Focus",
        region: "India",
        translations: {
            en: "Take up one idea. Make that one idea your life; dream of it.",
            hi: "एक विचार लें। उस विचार को अपना जीवन बना लें; उसके सपने देखें।",
            es: "Toma una idea. Haz de esa idea tu vida; sueña con ella.",
            fr: "Prenez une idée. Faites de cette idée votre vie ; rêvez d'elle.",
            de: "Nimm dir eine Idee vor. Mach diese Idee zu deinem Leben; träume davon.",
            pt: "Pegue uma ideia. Faça dessa ideia a sua vida; sonhe com ela.",
            ja: "一つの考えを持て。その考えをあなたの人生にせよ。そのことを夢に見よ。"
        }
    },
    // Adding more unique IDs for completeness...
    {
        id: "phil_in_0041",
        author: "Guru Nanak",
        era: "15th Century India",
        tradition: "Sikhism",
        category: "Divinity",
        region: "India",
        translations: {
            en: "The One God is present in all. Wherever I look, I see the Lord.",
            hi: "एक नूर ते सब जग उपज्या, कुदरत के सब बंदे।",
            es: "El Único Dios está presente en todos. Dondequiera que mire, veo al Señor.",
            fr: "Le Dieu unique est présent en tous. Partout où je regarde, je vois le Seigneur.",
            de: "Der eine Gott ist in allen gegenwärtig. Wohin ich auch blicke, sehe ich den Herrn.",
            pt: "O Deus Único está presente em todos. Para onde quer que eu olhe, vejo o Senhor.",
            ja: "唯一の神はすべての中に宿る。どこを見ても、主の姿が見える。"
        }
    },
    {
        id: "phil_in_0042",
        author: "Adi Shankaracharya",
        era: "8th Century India",
        tradition: "Advaita Vedanta",
        category: "Bliss",
        region: "India",
        translations: {
            en: "I am Existence-Consciousness-Bliss.",
            hi: "अहं सच्चिदानंद स्वरूपो (मैं सच्चिदानंद हूँ)।",
            es: "Yo soy Existencia-Conciencia-Dicha.",
            fr: "Je suis Existence-Conscience-Félicité.",
            de: "Ich bin Sein-Bewusstsein-Glückseligkeit.",
            pt: "Eu sou Existência-Consciência-Bem-aventurança.",
            ja: "私は「実在・意識・至福」である。"
        }
    },
    {
        id: "phil_in_0043",
        author: "Chanakya",
        era: "4th Century BC India",
        tradition: "Arthashastra",
        category: "Future",
        region: "India",
        translations: {
            en: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
            hi: "अतीत में न रहें, भविष्य के सपने न देखें, वर्तमान क्षण पर मन केंद्रित करें।",
            es: "No te detengas en el pasado, no sueñes con el futuro, concentra la mente en el momento presente.",
            fr: "Ne restez pas dans le passé, ne rêvez pas de l'avenir, concentrez votre esprit sur le moment présent.",
            de: "Verweile nicht in der Vergangenheit, träume nicht von der Zukunft, konzentriere den Geist auf den gegenwärtigen Moment.",
            pt: "Não viva no passado, não sonhe com o futuro, concentre a mente no momento presente.",
            ja: "過去に執着せず、未来を夢見ず、今この瞬間に心を集中させよ。"
        }
    },
    {
        id: "phil_in_0044",
        author: "Gautama Buddha",
        era: "Ancient India",
        tradition: "Buddhism",
        category: "Forgiveness",
        region: "India",
        translations: {
            en: "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
            hi: "क्रोध को थामे रखना किसी और पर फेंकने के इरादे से गर्म कोयले को पकड़ने जैसा है; जलते आप ही हैं।",
            es: "Aferrarse a la ira es como agarrar un carbón caliente con la intención de tirárselo a otra persona; tú eres el que se quema.",
            fr: "Garder sa colère, c'est comme saisir un charbon ardent avec l'intention de le jeter sur quelqu'un d'autre ; c'est vous qui vous brûlez.",
            de: "An Wut festzuhalten ist wie eine heiße Kohle in der Hand zu halten, um sie nach jemand anderem zu werfen; du bist derjenige, der sich verbrennt.",
            pt: "Guardar raiva é como segurar uma brasa quente com a intenção de atirá-la em outra pessoa; você é quem se queima.",
            ja: "怒りを持ち続けることは、誰かに投げつけようとして熱い炭を握りしめるようなものだ。火傷をするのは自分自身である。"
        }
    },
    {
        id: "phil_in_0045",
        author: "Kabir",
        era: "15th Century India",
        tradition: "Bhakti Movement",
        category: "Love",
        region: "India",
        translations: {
            en: "The path of love is narrow; two cannot walk on it together.",
            hi: "जब मैं था तब हरि नहीं, अब हरि हैं मैं नाहिं। प्रेम गली अति सांकरी, जामें दो न समाहिं।।",
            es: "El camino del amor es estrecho; dos no pueden caminar por él juntos.",
            fr: "Le chemin de l'amour est étroit ; deux ne peuvent y marcher ensemble.",
            de: "Der Weg der Liebe ist schmal; zwei können nicht zusammen darauf gehen.",
            pt: "O caminho do amor é estreito; dois não podem caminhar juntos por ele.",
            ja: "愛の道は狭い。二人が共に歩むことはできない。"
        }
    },
    {
        id: "phil_in_0046",
        author: "Swami Vivekananda",
        era: "19th Century India",
        tradition: "Modern Vedanta",
        category: "Believe",
        region: "India",
        translations: {
            en: "You cannot believe in God until you believe in yourself.",
            hi: "आप तब तक भगवान पर विश्वास नहीं कर सकते जब तक आप खुद पर विश्वास नहीं करते।",
            es: "No puedes creer en Dios hasta que creas en ti mismo.",
            fr: "Vous ne pouvez pas croire en Dieu tant que vous ne croyez pas en vous-même.",
            de: "Du kannst nicht an Gott glauben, bevor du nicht an dich selbst glaubst.",
            pt: "Você não pode acreditar em Deus até acreditar em si mesmo.",
            ja: "自分自身を信じるまでは、神を信じることはできない。"
        }
    },
    {
        id: "phil_in_0047",
        author: "Rabindranath Tagore",
        era: "20th Century India",
        tradition: "Poetic Wisdom",
        category: "Learning",
        region: "India",
        translations: {
            en: "A mind all logic is like a knife all blade. It makes the hand bleed that uses it.",
            hi: "तर्क से भरा मन उस चाकू की तरह है जिसमें केवल ब्लेड हो। यह उस हाथ को घायल कर देता है जो इसका उपयोग करता है।",
            es: "Una mente llena de lógica es como un cuchillo que solo tiene hoja. Hace sangrar la mano que lo usa.",
            fr: "Un esprit tout logique est comme un couteau tout lame. Il fait saigner la main qui s'en sert.",
            de: "Ein Geist voller Logik ist wie ein Messer, das nur aus einer Klinge besteht. Es lässt die Hand bluten, die es benutzt.",
            pt: "Uma mente cheia de lógica é como uma faca que é só lâmina. Faz sangrar a mão que a usa.",
            ja: "論理だけの心は、刃だけのナイフのようなものだ。それを使う者の手を傷つける。"
        }
    },
    {
        id: "phil_in_0048",
        author: "Chanakya",
        era: "4th Century BC India",
        tradition: "Arthashastra",
        category: "Friendship",
        region: "India",
        translations: {
            en: "Never make friends with people who are above or below you in status.",
            hi: "उन लोगों से कभी दोस्ती न करें जो ओहदे में आपसे ऊपर या नीचे हों।",
            es: "Nunca hagas amigos con personas que estén por encima o por debajo de ti en estatus.",
            fr: "Ne vous liez jamais d'amitié avec des personnes dont le statut est supérieur ou inférieur au vôtre.",
            de: "Schließe niemals Freundschaft mit Menschen, die im Status über oder unter dir stehen.",
            pt: "Nunca faça amizade com pessoas que estão acima ou abaixo de você em status.",
            ja: "自分より地位が高い、あるいは低い人間と友になってはならない。"
        }
    },
    {
        id: "phil_in_0049",
        author: "Gautama Buddha",
        era: "Ancient India",
        tradition: "Buddhism",
        category: "Health",
        region: "India",
        translations: {
            en: "Every human being is the author of his own health or disease.",
            hi: "प्रत्येक मनुष्य अपने स्वास्थ्य या रोग का लेखक स्वयं है।",
            es: "Cada ser humano es el autor de su propia salud o enfermedad.",
            fr: "Chaque être humain est l'auteur de sa propre santé ou de sa propre maladie.",
            de: "Jeder Mensch ist der Urheber seiner eigenen Gesundheit oder Krankheit.",
            pt: "Cada ser humano é o autor de sua própria saúde ou doença.",
            ja: "すべての人間は、自分自身の健康あるいは病気の作者である。"
        }
    },
    {
        id: "phil_in_0050",
        author: "Mahavira",
        era: "6th Century BC India",
        tradition: "Jainism",
        category: "Equanimity",
        region: "India",
        translations: {
            en: "All breathing, existing, living, sentient creatures should not be slain, nor treated with violence.",
            hi: "सभी सांस लेने वाले, जीवित, संवेदनशील प्राणियों को न तो मारना चाहिए, न ही उनके साथ हिंसा करनी चाहिए।",
            es: "Todas las criaturas que respiran, existen, viven y sienten no deben ser asesinadas ni tratadas con violencia.",
            fr: "Toutes les créatures qui respirent, existent, vivent et sentent ne doivent pas être tuées, ni traitées avec violence.",
            de: "Alle atmenden, existierenden, lebenden, fühlenden Wesen sollten weder getötet noch mit Gewalt behandelt werden.",
            pt: "Todas as criaturas que respiram, existem, vivem e sentem não devem ser mortas, nem tratadas com violência.",
            ja: "息をし、存在し、生き、感情を持つすべての生き物を、殺してはならず、暴力で扱ってはならない。"
        }
    },
    {
        id: "phil_in_0051",
        author: "Sant Ravidas",
        era: "15th Century India",
        tradition: "Bhakti Movement",
        category: "Purity",
        region: "India",
        translations: {
            en: "If your mind is pure, you will find the Divine in a simple bowl of water.",
            hi: "मन चंगा तो कठौती में गंगा।",
            es: "Si tu mente es pura, encontrarás lo Divino en un simple cuenco de agua.",
            fr: "Si votre esprit est pur, vous trouverez le Divin dans un simple bol d'eau.",
            de: "Wenn dein Geist rein ist, wirst du das Göttliche in einer einfachen Schale Wasser finden.",
            pt: "Se sua mente for pura, você encontrará o Divino em uma simples tigela de água.",
            ja: "心が清らかであれば、鉢の中の水の中にも神性を見出すだろう。"
        }
    },
    {
        id: "phil_in_0052",
        author: "Mirabai",
        era: "16th Century India",
        tradition: "Bhakti Movement",
        category: "Love",
        region: "India",
        translations: {
            en: "I have found the priceless jewel of the holy name.",
            hi: "पायो जी मैंने राम रतन धन पायो।",
            es: "He encontrado la joya inestimable del nombre sagrado.",
            fr: "J'ai trouvé le joyau inestimable du saint nom.",
            de: "Ich habe das unschätzbare Juwel des heiligen Namens gefunden.",
            pt: "Encontrei a joia inestimável do nome sagrado.",
            ja: "私は聖なる名という、計り知れない宝を見つけた。"
        }
    },
    {
        id: "phil_in_0053",
        author: "Basavanna",
        era: "12th Century India",
        tradition: "Lingayatism",
        category: "Compassion",
        region: "India",
        translations: {
            en: "Kindness is the root of all religions. Without it, faith is hollow.",
            hi: "दया ही धर्म का मूल है, दया के बिना धर्म व्यर्थ है।",
            es: "La bondad es la raíz de todas las religiones. Sin ella, la fe es hueca.",
            fr: "La bonté est la racine de toutes les religions. Sans elle, la foi est creuse.",
            de: "Freundlichkeit ist die Wurzel aller Religionen. Ohne sie ist der Glaube hohl.",
            pt: "A bondade é a raiz de todas as religiões. Sem ela, a fé é vazia.",
            ja: "慈しみこそがあらゆる宗教の根源である。それなくして信仰は空虚である。"
        }
    },
    {
        id: "phil_in_0054",
        author: "Tulsidas",
        era: "16th Century India",
        tradition: "Bhakti Movement",
        category: "Conduct",
        region: "India",
        translations: {
            en: "There is no virtue equal to doing good for others.",
            hi: "परहित सरिस धरम नहिं भाई।",
            es: "No hay virtud igual a hacer el bien a los demás.",
            fr: "Il n'y a pas de vertu égale à faire du bien aux autres.",
            de: "Es gibt keine Tugend, die so groß ist, wie anderen Gutes zu tun.",
            pt: "Não há virtude igual a fazer o bem aos outros.",
            ja: "他者のために善をなすことに勝る徳はない。"
        }
    },
    {
        id: "phil_in_0055",
        author: "Vyasa",
        era: "Ancient India",
        tradition: "Epic Wisdom",
        category: "Ethics",
        region: "India",
        translations: {
            en: "Helping others is the highest merit; hurting others is the greatest sin.",
            hi: "परोपकारः पुण्याय पापाय परपीडनम्।",
            es: "Ayudar a los demás es el mayor mérito; herir a otros es el mayor pecado.",
            fr: "Aider les autres est le plus grand mérite ; blesser les autres est le plus grand péché.",
            de: "Anderen zu helfen ist das höchste Verdienst; anderen zu schaden ist die größte Sünde.",
            pt: "Ajudar os outros é o maior mérito; ferir os outros é o maior pecado.",
            ja: "他者を助けることは最高の功徳であり、他者を傷つけることは最大の罪である。"
        }
    },
    {
        id: "phil_in_0056",
        author: "Patanjali",
        era: "Ancient India",
        tradition: "Yoga Sutras",
        category: "Discipline",
        region: "India",
        translations: {
            en: "Steadfastness in non-violence brings an end to all enmity.",
            hi: "अहिंसाप्रतिष्ठायां तत्सन्निधौ वैरत्यागः।",
            es: "La constancia en la no violencia pone fin a toda enemistad.",
            fr: "La fermeté dans la non-violence met fin à toute inimitié.",
            de: "Beständigkeit in der Gewaltlosigkeit beendet jede Feindseligkeit.",
            pt: "A firmeza na não violência põe fim a toda inimizade.",
            ja: "非暴力に徹する者のそばでは、あらゆる敵意が消え去る。"
        }
    },
    {
        id: "phil_in_0057",
        author: "Tiruvalluvar",
        era: "Ancient India",
        tradition: "Tamil Wisdom",
        category: "Learning",
        region: "India",
        translations: {
            en: "Learning is the only true wealth; all other riches decay.",
            hi: "शिक्षा ही वास्तविक धन है, बाकी सब नष्ट हो जाता है।",
            es: "El aprendizaje es la única riqueza verdadera; todas las demás riquezas decaen.",
            fr: "L'apprentissage est la seule vraie richesse ; toutes les autres richesses se dégradent.",
            de: "Lernen ist der einzige wahre Reichtum; alle anderen Reichtümer verfallen.",
            pt: "O aprendizado é a única riqueza verdadeira; todas as outras riquezas decaem.",
            ja: "学びこそが唯一の真の富である。他のあらゆる富は朽ち果てる。"
        }
    },
    {
        id: "phil_in_0058",
        author: "Charaka",
        era: "Ancient India",
        tradition: "Ayurveda",
        category: "Health",
        region: "India",
        translations: {
            en: "A physician who cannot enter the heart of a patient with the lamp of knowledge cannot treat diseases.",
            hi: "एक डॉक्टर जो ज्ञान के दीपक के साथ रोगी के हृदय में प्रवेश नहीं कर सकता, वह रोगों का इलाज नहीं कर सकता।",
            es: "Un médico que no puede entrar en el corazón de un paciente con la lámpara del conocimiento no puede tratar enfermedades.",
            fr: "Un médecin qui ne peut entrer dans le cœur d'un patient avec la lampe de la connaissance ne peut traiter les maladies.",
            de: "Ein Arzt, der nicht mit der Lampe des Wissens in das Herz eines Patienten eindringen kann, kann Krankheiten nicht behandeln.",
            pt: "Um médico que não pode entrar no coração de um paciente com a lâmpada do conhecimento não pode tratar doenças.",
            ja: "知識の灯火を持って患者の心に入り込むことができない医師は、病を癒やすことはできない。"
        }
    },
    {
        id: "phil_in_0059",
        author: "Aryabhata",
        era: "5th Century India",
        tradition: "Indian Science",
        category: "Truth",
        region: "India",
        translations: {
            en: "The truth must be sought with the help of reason and logic.",
            hi: "सत्य की खोज तर्क और विवेक की सहायता से की जानी चाहिए।",
            es: "La verdad debe buscarse con la ayuda de la razón y la lógica.",
            fr: "La vérité doit être recherchée à l'aide de la raison et de la logique.",
            de: "Die Wahrheit muss mit Hilfe von Vernunft und Logik gesucht werden.",
            pt: "A verdade deve ser buscada com a ajuda da razão e da lógica.",
            ja: "真理は理性と論理の助けを借りて探究されなければならない。"
        }
    },
    {
        id: "phil_in_0060",
        author: "Bhaskaracharya",
        era: "12th Century India",
        tradition: "Indian Mathematics",
        category: "Infinite",
        region: "India",
        translations: {
            en: "In this quantity consisting of that which has cipher for its divisor, there is no alteration.",
            hi: "शून्य जिसका भाजक है, उस राशि में कोई परिवर्तन नहीं होता (अनंत)।",
            es: "En esta cantidad que consiste en aquello que tiene la cifra por divisor, no hay alteración.",
            fr: "Dans cette quantité constituée de ce qui a pour diviseur le zéro, il n'y a aucune altération.",
            de: "In dieser Menge, die aus dem besteht, was die Null als Divisor hat, gibt es keine Änderung.",
            pt: "Nesta quantidade que consiste naquilo que tem o zero por divisor, não há alteração.",
            ja: "零を除数とするこの量は、いかなる変化も受けない（無限である）。"
        }
    },
    {
        id: "phil_in_0061",
        author: "Dayananda Saraswati",
        era: "19th Century India",
        tradition: "Arya Samaj",
        category: "Action",
        region: "India",
        translations: {
            en: "He who is active is the man of the world.",
            hi: "जो सक्रिय है, वही जगत का पुरुष है।",
            es: "El que es activo es el hombre del mundo.",
            fr: "Celui qui est actif est l'homme du monde.",
            de: "Wer aktiv ist, ist der Mann der Welt.",
            pt: "Aquele que é ativo é o homem do mundo.",
            ja: "活動的な者こそが、この世の人である。"
        }
    },
    {
        id: "phil_in_0062",
        author: "Ramakrishna Paramahamsa",
        era: "19th Century India",
        tradition: "Bhakti",
        category: "God",
        region: "India",
        translations: {
            en: "Truth is one; only Its names are different.",
            hi: "सत्य एक है; केवल इसके नाम अलग-अलग हैं।",
            es: "La verdad es una; solo sus nombres son diferentes.",
            fr: "La vérité est une ; seuls ses noms sont différents.",
            de: "Die Wahrheit ist eins; nur ihre Namen sind verschieden.",
            pt: "A verdade é uma; apenas seus nomes são diferentes.",
            ja: "真理は一つである。ただ、その名が異なっているだけだ。"
        }
    },
    {
        id: "phil_in_0063",
        author: "Sri Aurobindo",
        era: "20th Century India",
        tradition: "Integral Yoga",
        category: "Supermind",
        region: "India",
        translations: {
            en: "The spirit shall look out through Matter's gaze.",
            hi: "आत्मा पदार्थ की दृष्टि से देखेगी।",
            es: "El espíritu mirará a través de la mirada de la Materia.",
            fr: "L'esprit regardera à travers le regard de la Matière.",
            de: "Der Geist soll durch den Blick der Materie hinausschauen.",
            pt: "O espírito olhará através do olhar da Matéria.",
            ja: "霊は物質のまなざしを通して外を眺めるであろう。"
        }
    },
    {
        id: "phil_in_0064",
        author: "Rabindranath Tagore",
        era: "20th Century India",
        tradition: "Humanism",
        category: "Freedom",
        region: "India",
        translations: {
            en: "Where the mind is without fear and the head is held high.",
            hi: "जहाँ मन भयमुक्त हो और सिर ऊँचा हो।",
            es: "Donde la mente no tiene miedo y la cabeza se mantiene alta.",
            fr: "Où l'esprit est sans crainte et la tête haute.",
            de: "Wo der Geist ohne Furcht ist und das Haupt hochgehalten wird.",
            pt: "Onde a mente não tem medo e a cabeça se mantém erguida.",
            ja: "心が恐れを知らず、頭が高く掲げられる場所。"
        }
    },
    {
        id: "phil_in_0065",
        author: "Sarvepalli Radhakrishnan",
        era: "20th Century India",
        tradition: "Advaita Vedanta",
        category: "Knowledge",
        region: "India",
        translations: {
            en: "Knowledge gives us power, but character gives us respect.",
            hi: "ज्ञान हमें शक्ति देता है, लेकिन चरित्र हमें सम्मान देता है।",
            es: "El conocimiento nos da poder, pero el carácter nos da respeto.",
            fr: "La connaissance nous donne le pouvoir, mais le caractère nous donne le respect.",
            de: "Wissen gibt uns Macht, aber Charakter gibt uns Respekt.",
            pt: "O conhecimento nos dá poder, mas o caráter nos dá respeito.",
            ja: "知識は力をもたらすが、品格は尊敬をもたらす。"
        }
    },
    {
        id: "phil_in_0066",
        author: "Jiddu Krishnamurti",
        era: "20th Century India",
        tradition: "Non-dualism",
        category: "Observation",
        region: "India",
        translations: {
            en: "The observer is the observed.",
            hi: "द्रष्टा ही दृश्य है।",
            es: "El observador es lo observado.",
            fr: "L'observateur est l'observé.",
            de: "Der Beobachter ist das Beobachtete.",
            pt: "O observador é o observado.",
            ja: "観照者は、観照されるものそのものである。"
        }
    },
    {
        id: "phil_in_0067",
        author: "Ramana Maharshi",
        era: "20th Century India",
        tradition: "Advaita",
        category: "Self",
        region: "India",
        translations: {
            en: "There is no greater mystery than this, that we keep seeking reality though in fact we are reality.",
            hi: "इससे बड़ा कोई रहस्य नहीं है कि हम वास्तविकता की खोज करते रहते हैं जबकि वास्तव में हम स्वयं वास्तविकता हैं।",
            es: "No hay mayor misterio que este, que sigamos buscando la realidad aunque de hecho somos la realidad.",
            fr: "Il n'y a pas de plus grand mystère que celui-ci : que nous continuions à chercher la réalité alors qu'en fait, nous sommes la réalité.",
            de: "Es gibt kein größeres Geheimnis als dieses, dass wir weiterhin nach der Realität suchen, obwohl wir in Wirklichkeit die Realität sind.",
            pt: "Não há mistério maior do que este: que continuemos buscando a realidade, embora, de fato, sejamos a realidade.",
            ja: "これ以上の謎はない。我々は自分自身が実在であるにもかかわらず、実在を探し続けている。"
        }
    },
    {
        id: "phil_in_0068",
        author: "Lalleshwari",
        era: "14th Century India",
        tradition: "Kashmiri Shaivism",
        category: "Soul",
        region: "India",
        translations: {
            en: "The path of the soul is a journey inward, not outward.",
            hi: "आत्मा का मार्ग भीतर की यात्रा है, बाहर की नहीं।",
            es: "El camino del alma es un viaje hacia adentro, no hacia afuera.",
            fr: "Le chemin de l'âme est un voyage intérieur, pas extérieur.",
            de: "Der Weg der Seele ist eine Reise nach innen, nicht nach außen.",
            pt: "O caminho da alma é uma jornada interior, não exterior.",
            ja: "魂の道とは内なる旅であり、外への旅ではない。"
        }
    },
    {
        id: "phil_in_0069",
        author: "Akka Mahadevi",
        era: "12th Century India",
        tradition: "Lingayatism",
        category: "Devotion",
        region: "India",
        translations: {
            en: "The whole world is the Divine's courtyard.",
            hi: "सारा जगत ईश्वर का आंगन है।",
            es: "Todo el mundo es el patio de lo Divino.",
            fr: "Le monde entier est la cour du Divin.",
            de: "Die ganze Welt ist der Vorhof des Göttlichen.",
            pt: "O mundo inteiro é o pátio do Divino.",
            ja: "全世界は神の庭である。"
        }
    },
    {
        id: "phil_in_0070",
        author: "Nizamuddin Auliya",
        era: "13th Century India",
        tradition: "Sufism",
        category: "Love",
        region: "India",
        translations: {
            en: "The highest form of devotion is to comfort the broken hearts of the weary.",
            hi: "भक्ति का उच्चतम रूप थके हुए लोगों के टूटे हुए दिलों को सांत्वना देना है।",
            es: "La forma más elevada de devoción es consolar los corazones rotos de los cansados.",
            fr: "La forme de dévotion la plus élevée est de réconforter les cœurs brisés de ceux qui sont las.",
            de: "Die höchste Form der Hingabe ist es, die gebrochenen Herzen der Müden zu trösten.",
            pt: "A forma mais elevada de devoção é confortar os corações partidos dos cansados.",
            ja: "最高の献身とは、疲れ果てた者の傷ついた心を慰めることである。"
        }
    },
    {
        id: "phil_in_0071",
        author: "Amir Khusro",
        era: "13th Century India",
        tradition: "Sufism",
        category: "Unity",
        region: "India",
        translations: {
            en: "I am the soul, and you are the body; we are one spirit in two forms.",
            hi: "मैं रूह हूँ और तुम जिस्म हो; हम दो रूपों में एक ही आत्मा हैं।",
            es: "Yo soy el alma y tú eres el cuerpo; somos un solo espíritu en dos formas.",
            fr: "Je suis l'âme et tu es le corps ; nous sommes un seul esprit sous deux formes.",
            de: "Ich bin die Seele und du bist der Körper; wir sind ein Geist in zwei Formen.",
            pt: "Eu sou a alma e você é o corpo; somos um só espírito em duas formas.",
            ja: "私は魂であり、あなたは肉体である。我々は二つの姿をした一つの霊である。"
        }
    },
    {
        id: "phil_in_0072",
        author: "Madhvacharya",
        era: "13th Century India",
        tradition: "Dvaita Vedanta",
        category: "Service",
        region: "India",
        translations: {
            en: "Service to humanity is the highest form of worship.",
            hi: "मानवता की सेवा ही पूजा का उच्चतम रूप है।",
            es: "El servicio a la humanidad es la forma más elevada de adoración.",
            fr: "Le service à l'humanité est la forme la plus élevée d'adoration.",
            de: "Dienst an der Menschheit ist die höchste Form der Verehrung.",
            pt: "O serviço à humanidade é a forma mais elevada de adoração.",
            ja: "人類への奉仕は、最高形式の礼拝である。"
        }
    },
    {
        id: "phil_in_0073",
        author: "Ramanuja",
        era: "11th Century India",
        tradition: "Vishishtadvaita",
        category: "Grace",
        region: "India",
        translations: {
            en: "The Divine's grace is open to all, regardless of status.",
            hi: "ईश्वर की कृपा सभी के लिए खुली है, चाहे उनकी स्थिति कुछ भी हो।",
            es: "La gracia de lo Divino está abierta a todos, independientemente de su estatus.",
            fr: "La grâce du Divin est ouverte à tous, quel que soit leur statut.",
            de: "Die göttliche Gnade steht allen offen, unabhängig vom Status.",
            pt: "A graça divina está aberta a todos, independentemente do status.",
            ja: "神の恩寵は、地位にかかわらずすべての人に開かれている。"
        }
    },
    {
        id: "phil_in_0074",
        author: "Sushruta",
        era: "Ancient India",
        tradition: "Ayurveda",
        category: "Healing",
        region: "India",
        translations: {
            en: "An expert surgeon should possess a steady hand and a keen eye.",
            hi: "एक विशेषज्ञ सर्जन के पास स्थिर हाथ और तीखी नज़र होनी चाहिए।",
            es: "Un cirujano experto debe poseer una mano firme y un ojo agudo.",
            fr: "Un chirurgien expert doit posséder une main sûre et un œil vif.",
            de: "Ein erfahrener Chirurg sollte eine ruhige Hand und ein scharfes Auge besitzen.",
            pt: "Um cirurgião especialista deve possuir mão firme e olhar agudo.",
            ja: "熟練した外科医は、安定した手と鋭い眼識を備えていなければならない。"
        }
    },
    {
        id: "phil_in_0075",
        author: "Valmiki",
        era: "Ancient India",
        tradition: "Epic Wisdom",
        category: "Virtue",
        region: "India",
        translations: {
            en: "Character is the crown of a human being.",
            hi: "चरित्र ही मनुष्य का मुकुट है।",
            es: "El carácter es la corona de un ser humano.",
            fr: "Le caractère est la couronne d'un être humain.",
            de: "Charakter ist die Krone eines Menschen.",
            pt: "O caráter é a coroa de um ser humano.",
            ja: "品性こそは人間の冠である。"
        }
    },
    {
        id: "phil_in_0076",
        author: "Mahatma Gandhi",
        era: "20th Century India",
        tradition: "Gandhian Philosophy",
        category: "Truth",
        region: "India",
        translations: {
            en: "Truth is God, and God is Truth.",
            hi: "सत्य ही ईश्वर है, और ईश्वर ही सत्य है।",
            es: "La verdad es Dios, y Dios es la verdad.",
            fr: "La vérité est Dieu, et Dieu est la vérité.",
            de: "Wahrheit ist Gott, und Gott ist Wahrheit.",
            pt: "A verdade é Deus, e Deus é a verdade.",
            ja: "真理は神であり、神は真理である。"
        }
    },
    {
        id: "phil_in_0077",
        author: "B. R. Ambedkar",
        era: "20th Century India",
        tradition: "Social Philosophy",
        category: "Liberty",
        region: "India",
        translations: {
            en: "I measure the progress of a community by the degree of progress which women have achieved.",
            hi: "मैं किसी समुदाय की प्रगति को उस प्रगति की डिग्री से मापता हूँ जो महिलाओं ने हासिल की है।",
            es: "Mido el progreso de una comunidad por el grado de progreso que las mujeres han alcanzado.",
            fr: "Je mesure le progrès d'une communauté au degré de progrès que les femmes ont réalisé.",
            de: "Ich messe den Fortschritt einer Gemeinschaft an dem Grad des Fortschritts, den die Frauen erreicht haben.",
            pt: "Eu meço o progresso de uma comunidade pelo grau de progresso que as mulheres alcançaram.",
            ja: "私は、女性が達成した進歩の度合いによって、その共同体の進歩を測る。"
        }
    },
    {
        id: "phil_in_0078",
        author: "Guru Gobind Singh",
        era: "17th Century India",
        tradition: "Sikhism",
        category: "Valor",
        region: "India",
        translations: {
            en: "Recognize the whole human race as one.",
            hi: "मानस की जात सबै एकै पहचानबो।",
            es: "Reconoce a toda la raza humana como una sola.",
            fr: "Reconnaissez toute la race humaine comme une seule.",
            de: "Erkenne die gesamte Menschheit als eins an.",
            pt: "Reconheça toda a raça humana como uma só.",
            ja: "全人類を一つのものとして認めよ。"
        }
    },
    {
        id: "phil_in_0079",
        author: "Bulleh Shah",
        era: "18th Century India",
        tradition: "Sufism",
        category: "Love",
        region: "India",
        translations: {
            en: "Not a believer in the mosque, nor a non-believer in the temple; I am what I am.",
            hi: "ना मैं मोमिन विच मसीतां, ना मैं विच कुफर की रीत... बुल्ला की जाणा मैं कौण।",
            es: "Ni creyente en la mezquita, ni no creyente en el templo; soy lo que soy.",
            fr: "Ni croyant à la mosquée, ni non-croyant au temple ; je suis ce que je suis.",
            de: "Weder Gläubiger in der Moschee noch Ungläubiger im Tempel; ich bin, was ich bin.",
            pt: "Nem crente na mesquita, nem descrente no templo; eu sou o que sou.",
            ja: "モスクの信者でもなく、寺院の不信心者でもない。私は私である。"
        }
    },
    {
        id: "phil_in_0080",
        author: "Jnaneshwar",
        era: "13th Century India",
        tradition: "Bhakti Movement",
        category: "Devotion",
        region: "India",
        translations: {
            en: "The whole universe is my home.",
            hi: "हे विश्वचि माझे घर (यह संपूर्ण विश्व ही मेरा घर है)।",
            es: "Todo el universo es mi hogar.",
            fr: "L'univers entier est ma maison.",
            de: "Das ganze Universum ist mein Zuhause.",
            pt: "Todo o universo é o meu lar.",
            ja: "全宇宙こそが私の家である。"
        }
    },
    {
        id: "phil_in_0081",
        author: "Tukaram",
        era: "17th Century India",
        tradition: "Bhakti Movement",
        category: "Kindness",
        region: "India",
        translations: {
            en: "He who calls his own those who are suffering and tormented is a saint.",
            hi: "जे का रंजले गांजले, त्यासी म्हणे जो आपुले, तोचि साधु ओळखावा।",
            es: "Aquel que llama suyos a los que sufren y están atormentados es un santo.",
            fr: "Celui qui appelle siens ceux qui souffrent et sont tourmentés est un saint.",
            de: "Wer diejenigen die seinen nennt, die leiden und gequält werden, ist ein Heiliger.",
            pt: "Aquele que chama de seus os que sofrem e estão atormentados é um santo.",
            ja: "苦しみ、苛まれている人々を自分の身内と呼ぶ者こそが、聖者である。"
        }
    },
    {
        id: "phil_in_0082",
        author: "Namdev",
        era: "14th Century India",
        tradition: "Bhakti Movement",
        category: "Unity",
        region: "India",
        translations: {
            en: "One God is hidden in every heart.",
            hi: "सबै घट रामु बोलै रामा बोलै।",
            es: "Un solo Dios está escondido en cada corazón.",
            fr: "Un seul Dieu est caché dans chaque cœur.",
            de: "Ein Gott ist in jedem Herzen verborgen.",
            pt: "Um só Deus está escondido em cada coração.",
            ja: "唯一の神が、あらゆる心の中に隠されている。"
        }
    },
    {
        id: "phil_in_0083",
        author: "Guru Arjan Dev",
        era: "16th Century India",
        tradition: "Sikhism",
        category: "Service",
        region: "India",
        translations: {
            en: "No one is my enemy, and no one is a stranger. I get along with everyone.",
            hi: "ना को बैरी नाही बिगाना सगल संगि हम कउ बनि आई।",
            es: "Nadie es mi enemigo y nadie es un extraño. Me llevo bien con todos.",
            fr: "Personne n'est mon ennemi et personne n'est un étranger. Je m'entends avec tout le monde.",
            de: "Niemand ist mein Feind, und niemand ist ein Fremder. Ich komme mit jedem aus.",
            pt: "Ninguém é meu inimigo e ninguém é um estranho. Eu me dou bem com todos.",
            ja: "誰も敵ではなく、誰も見知らぬ人ではない。私はすべての人とうまくやっていく。"
        }
    },
    {
        id: "phil_in_0084",
        author: "Baba Farid",
        era: "12th Century India",
        tradition: "Sufism",
        category: "Patience",
        region: "India",
        translations: {
            en: "Do not speak a harsh word to anyone; the true Lord dwells in every heart.",
            hi: "इकु फिका न गालाइ सभना मै सचा धणी।",
            es: "No digas palabras duras a nadie; el verdadero Señor habita en cada corazón.",
            fr: "Ne dis pas de parole dure à personne ; le vrai Seigneur habite dans chaque cœur.",
            de: "Sprich zu niemandem ein hartes Wort; der wahre Herr wohnt in jedem Herzen.",
            pt: "Não diga palavras duras a ninguém; o verdadeiro Senhor habita em cada coração.",
            ja: "誰に対しても激しい言葉を吐いてはならない。真なる主はあらゆる心の中に住まわれている。"
        }
    },
    {
        id: "phil_in_0085",
        author: "Bhadra Bahu",
        era: "4th Century BC India",
        tradition: "Jainism",
        category: "Detachment",
        region: "India",
        translations: {
            en: "Liberation is attained by those who are free from all attachments.",
            hi: "मुक्ति उन्हें प्राप्त होती है जो सभी आसक्तियों से मुक्त हैं।",
            es: "La liberación la alcanzan aquellos que están libres de todos los apegos.",
            fr: "La libération est atteinte par ceux qui sont libres de tout attachement.",
            de: "Befreiung wird von denen erlangt, die frei von allen Bindungen sind.",
            pt: "A libertação é alcançada por aqueles que estão livres de todos os apegos.",
            ja: "あらゆる執着から自由な者こそが、解脱を得る。"
        }
    },
    {
        id: "phil_in_0086",
        author: "Hemachandra",
        era: "12th Century India",
        tradition: "Jainism",
        category: "Knowledge",
        region: "India",
        translations: {
            en: "Knowledge is the eye of the soul.",
            hi: "ज्ञान आत्मा की आंख है।",
            es: "El conocimiento es el ojo del alma.",
            fr: "La connaissance est l'œil de l'âme.",
            de: "Wissen ist das Auge der Seele.",
            pt: "O conhecimento é o olho da alma.",
            ja: "知識は魂の眼である。"
        }
    },
    {
        id: "phil_in_0087",
        author: "Adi Shankaracharya",
        era: "8th Century India",
        tradition: "Advaita Vedanta",
        category: "Reality",
        region: "India",
        translations: {
            en: "The world is real for the ignorant, but merely a shadow for the wise.",
            hi: "अज्ञानियों के लिए जगत सत्य है, पर ज्ञानियों के लिए केवल एक छाया।",
            es: "El mundo es real para el ignorante, pero simplemente una sombra para el sabio.",
            fr: "Le monde est réel pour l'ignorant, mais seulement une ombre pour le sage.",
            de: "Die Welt ist für den Unwissenden real, aber für den Weisen nur ein Schatten.",
            pt: "O mundo é real para o ignorante, mas meramente uma sombra para o sábio.",
            ja: "無知な者にとって世界は実在だが、賢者にとっては単なる影にすぎない。"
        }
    },
    {
        id: "phil_in_0088",
        author: "Chanakya",
        era: "4th Century BC India",
        tradition: "Ethics",
        category: "Speech",
        region: "India",
        translations: {
            en: "One whose speech is sweet has everything.",
            hi: "जिसकी वाणी मधुर है, उसके पास सब कुछ है।",
            es: "Aquel cuya habla es dulce lo tiene todo.",
            fr: "Celui dont la parole est douce a tout.",
            de: "Wer eine süße Sprache hat, hat alles.",
            pt: "Aquele cuja fala é doce tem tudo.",
            ja: "言葉の穏やかな者は、すべてを手にしている。"
        }
    },
    {
        id: "phil_in_0089",
        author: "Swami Vivekananda",
        era: "19th Century India",
        tradition: "Modern Vedanta",
        category: "Fearlessness",
        region: "India",
        translations: {
            en: "The world is the great gymnasium where we come to make ourselves strong.",
            hi: "यह दुनिया वह महान व्यायामशाला है जहाँ हम खुद को मजबूत बनाने आते हैं।",
            es: "El mundo es el gran gimnasio donde venimos a hacernos fuertes.",
            fr: "Le monde est le grand gymnase où nous venons pour nous rendre forts.",
            de: "Die Welt ist die große Turnhalle, in die wir kommen, um uns stark zu machen.",
            pt: "O mundo é o grande ginásio onde viemos para nos tornar fortes.",
            ja: "世界は、我々が自分自身を強くするためにやってくる巨大な体育館である。"
        }
    },
    {
        id: "phil_in_0090",
        author: "Mahatma Gandhi",
        era: "20th Century India",
        tradition: "Non-violence",
        category: "Power",
        region: "India",
        translations: {
            en: "Non-violence is the greatest force at the disposal of mankind.",
            hi: "अहिंसा मानव जाति के पास उपलब्ध सबसे बड़ी शक्ति है।",
            es: "La no violencia es la fuerza más grande a disposición de la humanidad.",
            fr: "La non-violence est la plus grande force à la disposition de l'humanité.",
            de: "Gewaltlosigkeit ist die größte Kraft, die der Menschheit zur Verfügung steht.",
            pt: "A não violência é a maior força à disposição da humanidade.",
            ja: "非暴力は、人類が持ちうる最強の力である。"
        }
    },
    {
        id: "phil_in_0091",
        author: "Sri Aurobindo",
        era: "20th Century India",
        tradition: "Evolution",
        category: "Consciousness",
        region: "India",
        translations: {
            en: "All life is Yoga.",
            hi: "सम्पूर्ण जीवन ही योग है।",
            es: "Toda la vida es Yoga.",
            fr: "Toute la vie est Yoga.",
            de: "Alles Leben ist Yoga.",
            pt: "Toda a vida é Yoga.",
            ja: "すべての生こそがヨガである。"
        }
    },
    {
        id: "phil_in_0092",
        author: "Rabindranath Tagore",
        era: "20th Century India",
        tradition: "Wisdom",
        category: "Service",
        region: "India",
        translations: {
            en: "I slept and dreamt that life was joy. I awoke and saw that life was service. I acted and behold, service was joy.",
            hi: "मैं सोया और सपना देखा कि जीवन आनंद था। मैं जागा और देखा कि जीवन सेवा थी। मैंने कर्म किया और पाया, सेवा ही आनंद थी।",
            es: "Dormí y soñé que la vida era alegría. Desperté y vi que la vida era servicio. Actué y he aquí, el servicio era alegría.",
            fr: "J'ai dormi et rêvé que la vie était joie. Je me suis réveillé et j'ai vu que la vie était service. J'ai agi et voilà, le service était joie.",
            de: "Ich schlief und träumte, das Leben sei Freude. Ich erwachte und sah, dass das Leben Dienst war. Ich handelte und siehe da, Dienst war Freude.",
            pt: "Dormi e sonhei que a vida era alegria. Acordei e vi que a vida era serviço. Agi e, vejam só, o serviço era alegria.",
            ja: "私は眠り、人生は喜びだと夢見た。私は目覚め、人生は奉仕だと知った。私は行動し、見よ、奉仕こそが喜びであった。"
        }
    },
    {
        id: "phil_in_0093",
        author: "B. R. Ambedkar",
        era: "20th Century India",
        tradition: "Equality",
        category: "Society",
        region: "India",
        translations: {
            en: "Cultivation of mind should be the ultimate aim of human existence.",
            hi: "मन की खेती (विकास) मानव अस्तित्व का अंतिम लक्ष्य होना चाहिए।",
            es: "El cultivo de la mente debe ser el objetivo final de la existencia humana.",
            fr: "La culture de l'esprit devrait être le but ultime de l'existence humaine.",
            de: "Die Kultivierung des Geistes sollte das ultimative Ziel der menschlichen Existenz sein.",
            pt: "O cultivo da mente deve ser o objetivo final da existência humana.",
            ja: "心の修養こそが、人間存在の究極の目的であるべきだ。"
        }
    },
    {
        id: "phil_in_0094",
        author: "Raja Ram Mohan Roy",
        era: "19th Century India",
        tradition: "Modern Thought",
        category: "Reform",
        region: "India",
        translations: {
            en: "Universal religion is the truth found in all faiths.",
            hi: "सार्वभौमिक धर्म वह सत्य है जो सभी विश्वासों में पाया जाता है।",
            es: "La religión universal es la verdad que se encuentra en todas las fes.",
            fr: "La religion universelle est la vérité que l'on trouve dans toutes les religions.",
            de: "Universelle Religion ist die Wahrheit, die in allen Glaubensrichtungen zu finden ist.",
            pt: "A religião universal é a verdade encontrada em todas as fés.",
            ja: "普遍的宗教とは、あらゆる信仰の中に見出される真理のことである。"
        }
    },
    {
        id: "phil_in_0095",
        author: "Bhagat Singh",
        era: "20th Century India",
        tradition: "Revolutionary Thought",
        category: "Ideas",
        region: "India",
        translations: {
            en: "They may kill me, but they cannot kill my ideas. They can crush my body, but they will not be able to crush my spirit.",
            hi: "वे मुझे मार सकते हैं, लेकिन वे मेरे विचारों को नहीं मार सकते। वे मेरे शरीर को कुचल सकते हैं, लेकिन वे मेरी आत्मा को नहीं कुचल पाएंगे।",
            es: "Pueden matarme, pero no pueden matar mis ideas. Pueden aplastar mi cuerpo, pero no podrán aplastar mi espíritu.",
            fr: "Ils peuvent me tuer, mais ils ne peuvent pas tuer mes idées. Ils peuvent écraser mon corps, mais ils ne pourront pas écraser mon esprit.",
            de: "Sie können mich töten, aber sie können meine Ideen nicht töten. Sie können meinen Körper zermalmen, aber sie werden meinen Geist nicht zermalmen können.",
            pt: "Eles podem me matar, mas não podem matar minhas ideias. Eles podem esmagar meu corpo, mas não serão capazes de esmagar meu espírito.",
            ja: "彼らは私を殺すことはできても、私の思想を殺すことはできない。私の肉体を粉砕することはできても、私の精神を粉砕することはできない。"
        }
    },
    {
        id: "phil_in_0096",
        author: "Gautama Buddha",
        era: "Ancient India",
        tradition: "Buddhism",
        category: "Victory",
        region: "India",
        translations: {
            en: "Victory breeds hatred, for the conquered is unhappy.",
            hi: "विजय घृणा को जन्म देती है, क्योंकि पराजित दुखी होता है।",
            es: "La victoria engendra odio, pues el vencido es infeliz.",
            fr: "La victoire engendre la haine, car le vaincu est malheureux.",
            de: "Sieg erzeugt Hass, denn der Besiegte ist unglücklich.",
            pt: "A vitória gera ódio, pois o vencido é infeliz.",
            ja: "勝利は怨みを招く。敗れた者は苦しむからである。"
        }
    },
    {
        id: "phil_in_0097",
        author: "Mahavira",
        era: "6th Century BC India",
        tradition: "Jainism",
        category: "Soul",
        region: "India",
        translations: {
            en: "The soul comes alone and goes alone, no one accompanies it, with the exception of its virtues and vices.",
            hi: "आत्मा अकेली आती है और अकेली जाती है, उसके गुणों और दोषों के अलावा कोई उसके साथ नहीं जाता।",
            es: "El alma viene sola y se va sola, nadie la acompaña, a excepción de sus virtudes y vicios.",
            fr: "L'âme vient seule et repart seule, personne ne l'accompagne, à l'exception de ses vertus et de ses vices.",
            de: "Die Seele kommt allein und geht allein, niemand begleitet sie, mit Ausnahme ihrer Tugenden und Laster.",
            pt: "A alma vem sozinha e vai sozinha, ninguém a acompanha, com exceção de suas virtudes e vícios.",
            ja: "魂は独り来たりて独り去る。徳と不徳を除いて、誰もそれに付き添うことはない。"
        }
    },
    {
        id: "phil_in_0098",
        author: "Kabir",
        era: "15th Century India",
        tradition: "Bhakti Movement",
        category: "Inwardness",
        region: "India",
        translations: {
            en: "The musk is within the deer, but it seeks it in the forest.",
            hi: "कस्तूरी कुंडल बसै, मृग ढूंढे बन माहीं।",
            es: "El almizcle está dentro del ciervo, pero este lo busca en el bosque.",
            fr: "Le musc est dans le cerf, mais celui-ci le cherche dans la forêt.",
            de: "Der Moschus ist im Hirsch, aber er sucht ihn im Wald.",
            pt: "O almíscar está dentro do cervo, mas ele o procura na floresta.",
            ja: "麝香（じゃこう）は鹿の体内にあるのに、鹿はそれを森の中で探し回る。"
        }
    },
    {
        id: "phil_in_0099",
        author: "Guru Nanak",
        era: "15th Century India",
        tradition: "Sikhism",
        category: "Truth",
        region: "India",
        translations: {
            en: "Truth is higher than everything, but higher still is truthful living.",
            hi: "सचुहु ओरै सभु को उपरि सचु आचारु।",
            es: "La verdad es más alta que todo, pero más alta aún es la vida veraz.",
            fr: "La vérité est supérieure à tout, mais plus élevée encore est la vie véridique.",
            de: "Wahrheit ist höher als alles andere, aber noch höher ist wahrhaftiges Leben.",
            pt: "A verdade é mais alta do que tudo, mas ainda mais alta é a vida verdadeira.",
            ja: "真理は何よりも尊いが、真理に則った生き方はさらに尊い。"
        }
    },
    {
        id: "phil_in_0100",
        author: "Swami Vivekananda",
        era: "19th Century India",
        tradition: "Modern Vedanta",
        category: "Potential",
        region: "India",
        translations: {
            en: "Education is the manifestation of the perfection already in man.",
            hi: "शिक्षा मनुष्य के भीतर पहले से मौजूद पूर्णता की अभिव्यक्ति है।",
            es: "La educación es la manifestación de la perfección que ya está en el hombre.",
            fr: "L'éducation est la manifestation de la perfection déjà présente en l'homme.",
            de: "Bildung ist die Manifestation der bereits im Menschen vorhandenen Vollkommenheit.",
            pt: "A educação é a manifestação da perfeição já existente no homem.",
            ja: "教育とは、人間の中にすでに備わっている完璧さを現し出すことである。"
        }
    },
    {
        id: "phil_in_0101",
        author: "Vinoba Bhave",
        era: "20th Century India",
        tradition: "Sarvodaya",
        category: "Love",
        region: "India",
        translations: {
            en: "All life is one.",
            hi: "सम्पूर्ण जीवन एक है।",
            es: "Toda la vida es una.",
            fr: "Toute la vie est une.",
            de: "Alles Leben ist eins.",
            pt: "Toda a vida é uma.",
            ja: "すべての生は一つである。"
        }
    },
    {
        id: "phil_in_0102",
        author: "Chanakya",
        era: "4th Century BC India",
        tradition: "Arthashastra",
        category: "Action",
        region: "India",
        translations: {
            en: "A man is great by deeds, not by birth.",
            hi: "मनुष्य अपने कर्मों से महान होता है, जन्म से नहीं।",
            es: "Un hombre es grande por sus hechos, no por su nacimiento.",
            fr: "Un homme est grand par ses actes, non par sa naissance.",
            de: "Ein Mensch ist groß durch seine Taten, nicht durch seine Geburt.",
            pt: "Um homem é grande por seus atos, não por seu nascimento.",
            ja: "人はその行いによって偉大になるのであり、生まれによってではない。"
        }
    },
    {
        id: "phil_in_0103",
        author: "Gautama Buddha",
        era: "Ancient India",
        tradition: "Buddhism",
        category: "Peace",
        region: "India",
        translations: {
            en: "Peace comes from within. Do not seek it without.",
            hi: "शांति भीतर से आती है। इसे बाहर मत खोजो।",
            es: "La paz viene del interior. No la busques fuera.",
            fr: "La paix vient de l'intérieur. Ne la cherchez pas au dehors.",
            de: "Frieden kommt von innen. Suche ihn nicht im Außen.",
            pt: "A paz vem de dentro. Não a procure fora.",
            ja: "平和は内側からやってくる。外側に求めてはならない。"
        }
    },
    {
        id: "phil_in_0104",
        author: "Mahavira",
        era: "6th Century BC India",
        tradition: "Jainism",
        category: "Forgiveness",
        region: "India",
        translations: {
            en: "I forgive all living beings; let all living beings forgive me.",
            hi: "खामेमि सव्वजीवे सव्वे जीवा खमंतु मे।",
            es: "Perdono a todos los seres vivos; que todos los seres vivos me perdonen.",
            fr: "Je pardonne à tous les êtres vivants ; que tous les êtres vivants me pardonnent.",
            de: "Ich vergebe allen Lebewesen; mögen alle Lebewesen mir vergeben.",
            pt: "Eu perdoo todos os seres vivos; que todos os seres vivos me perdoem.",
            ja: "私はすべての生きとし生けるものを許す。すべての生きとし生けるものが私を許してくれるように。"
        }
    },
    {
        id: "phil_in_0105",
        author: "Swami Vivekananda",
        era: "19th Century India",
        tradition: "Modern Vedanta",
        category: "Liberty",
        region: "India",
        translations: {
            en: "Liberty of thought and action is the only condition of life, of growth and well-being.",
            hi: "विचार और कार्य की स्वतंत्रता ही जीवन, विकास और कल्याण की एकमात्र शर्त है।",
            es: "La libertad de pensamiento y acción es la única condición de vida, de crecimiento y de bienestar.",
            fr: "La liberté de pensée et d'action est la seule condition de vie, de croissance et de bien-être.",
            de: "Freiheit des Denkens und Handelns ist die einzige Bedingung für das Leben, für Wachstum und Wohlbefinden.",
            pt: "A liberdade de pensamento e ação é a única condição de vida, de crescimento e de bem-estar.",
            ja: "思考と行動の自由こそが、生と成長と幸福のための唯一の条件である。"
        }
    },
    {
        id: "phil_in_0106",
        author: "Sri Aurobindo",
        era: "20th Century India",
        tradition: "Integral Yoga",
        category: "Knowledge",
        region: "India",
        translations: {
            en: "True knowledge is not attained by thinking. It is what you are; it is what you become.",
            hi: "सच्चा ज्ञान सोचने से प्राप्त नहीं होता। यह वह है जो आप हैं; यह वह है जो आप बनते हैं।",
            es: "El verdadero conocimiento no se alcanza pensando. Es lo que eres; es lo que llegas a ser.",
            fr: "La vraie connaissance ne s'obtient pas en pensant. C'est ce que vous êtes ; c'est ce que vous devenez.",
            de: "Wahres Wissen wird nicht durch Denken erlangt. Es ist das, was du bist; es ist das, was du wirst.",
            pt: "O verdadeiro conhecimento não é alcançado pelo pensamento. É o que você é; é o que você se torna.",
            ja: "真の知識は思考によって得られるものではない。それはあなた自身であり、あなたが成るものである。"
        }
    },
    {
        id: "phil_in_0107",
        author: "Rabindranath Tagore",
        era: "20th Century India",
        tradition: "Humanism",
        category: "Happiness",
        region: "India",
        translations: {
            en: "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",
            hi: "बादल मेरे जीवन में तैरते हुए आते हैं, अब बारिश लाने या तूफान लाने के लिए नहीं, बल्कि मेरे सूर्यास्त के आकाश में रंग भरने के लिए।",
            es: "Las nubes vienen flotando a mi vida, ya no para traer lluvia o anunciar tormenta, sino para añadir color al cielo de mi atardecer.",
            fr: "Des nuages viennent flotter dans ma vie, non plus pour porter la pluie ou annoncer la tempête, mais pour ajouter de la couleur à mon ciel de couchant.",
            de: "Wolken schweben in mein Leben, nicht mehr um Regen zu bringen oder einen Sturm einzuleiten, sondern um meinem Abendhimmel Farbe zu verleihen.",
            pt: "Nuvens vêm flutuando em minha vida, não mais para trazer chuva ou inaugurar tempestade, mas para adicionar cor ao meu céu de pôr do sol.",
            ja: "雲が私の人生に浮かんでくる。もはや雨を降らせたり嵐を呼んだりするためではなく、私の夕映えの空に彩りを添えるために。"
        }
    },
    {
        id: "phil_in_0108",
        author: "Sarvepalli Radhakrishnan",
        era: "20th Century India",
        tradition: "Advaita Vedanta",
        category: "Wisdom",
        region: "India",
        translations: {
            en: "The end of man is not to know the existence of God, but to reach the spirit of God.",
            hi: "मनुष्य का अंतिम लक्ष्य ईश्वर के अस्तित्व को जानना नहीं, बल्कि ईश्वर की आत्मा तक पहुँचना है।",
            es: "El fin del hombre no es conocer la existencia de Dios, sino alcanzar el espíritu de Dios.",
            fr: "La fin de l'homme n'est pas de connaître l'existence de Dieu, mais d'atteindre l'esprit de Dieu.",
            de: "Das Ziel des Menschen ist nicht, die Existenz Gottes zu erkennen, sondern den Geist Gottes zu erreichen.",
            pt: "O fim do homem não é conhecer a existência de Deus, mas alcançar o espírito de Deus.",
            ja: "人間の目的は、神の実在を知ることではなく、神の霊に到達することである。"
        }
    },
    {
        id: "phil_in_0109",
        author: "Jiddu Krishnamurti",
        era: "20th Century India",
        tradition: "Non-dualism",
        category: "Love",
        region: "India",
        translations: {
            en: "Where there is love, there is no self.",
            hi: "जहाँ प्रेम है, वहाँ स्व (अहंकार) नहीं है।",
            es: "Donde hay amor, no hay ego.",
            fr: "Là où il y a de l'amour, il n'y a pas de moi.",
            de: "Wo Liebe ist, gibt es kein Selbst.",
            pt: "Onde há amor, não há eu.",
            ja: "愛があるところ、自己はない。"
        }
    },
    {
        id: "phil_in_0110",
        author: "Ramana Maharshi",
        era: "20th Century India",
        tradition: "Advaita",
        category: "Mind",
        region: "India",
        translations: {
            en: "The mind is only a bundle of thoughts.",
            hi: "मन केवल विचारों का एक पुलिंदा है।",
            es: "La mente es solo un manojo de pensamientos.",
            fr: "L'esprit n'est qu'un faisceau de pensées.",
            de: "Der Geist ist nur ein Bündel von Gedanken.",
            pt: "A mente é apenas um feixe de pensamentos.",
            ja: "心とは、思考の束にすぎない。"
        }
    },
    {
        id: "phil_in_0111",
        author: "Adi Shankaracharya",
        era: "8th Century India",
        tradition: "Advaita Vedanta",
        category: "Ignorance",
        region: "India",
        translations: {
            en: "Like the appearance of silver in mother-of-pearl, the world seems real until the Self is known.",
            hi: "जैसे सीप में चांदी का आभास होता है, वैसे ही आत्मा को जानने तक जगत सत्य प्रतीत होता है।",
            es: "Como la aparición de plata en el nácar, el mundo parece real hasta que se conoce al Ser.",
            fr: "Comme l'apparition de l'argent dans la nacre, le monde semble réel jusqu'à ce que le Soi soit connu.",
            de: "Wie das Erscheinen von Silber in Perlmutt erscheint die Welt real, bis das Selbst erkannt wird.",
            pt: "Como o aparecimento de prata na madrepérola, o mundo parece real até que o Eu seja conhecido.",
            ja: "真珠層に銀が現れるかのように、自己を知るまでは、世界は実在であるかのように見える。"
        }
    },
    {
        id: "phil_in_0112",
        author: "Chanakya",
        era: "4th Century BC India",
        tradition: "Political Wisdom",
        category: "Success",
        region: "India",
        translations: {
            en: "Before you start some work, always ask yourself three questions: Why am I doing it, what results might be, and will I be successful.",
            hi: "कोई भी काम शुरू करने से पहले खुद से तीन सवाल पूछें: मैं यह क्यों कर रहा हूँ, इसके क्या परिणाम हो सकते हैं और क्या मैं सफल होऊंगा।",
            es: "Antes de comenzar algún trabajo, siempre hazte tres preguntas: Por qué lo estoy haciendo, cuáles podrían ser los resultados y si tendré éxito.",
            fr: "Avant de commencer un travail, posez-vous toujours trois questions : Pourquoi est-ce que je le fais, quels pourraient être les résultats, et est-ce que je réussirai.",
            de: "Bevor du eine Arbeit beginnst, stelle dir immer drei Fragen: Warum tue ich das, was könnten die Ergebnisse sein und werde ich erfolgreich sein.",
            pt: "Antes de começar algum trabalho, sempre se faça três perguntas: Por que estou fazendo isso, quais podem ser os resultados e se terei sucesso.",
            ja: "仕事を始める前に、常に自分自身に三つの問いを発せよ。なぜこれを行うのか、結果はどうなるのか、そして成功するだろうか。"
        }
    },
    {
        id: "phil_in_0113",
        author: "Gautama Buddha",
        era: "Ancient India",
        tradition: "Buddhism",
        category: "Compassion",
        region: "India",
        translations: {
            en: "Radiate boundless love towards the entire world.",
            hi: "संपूर्ण विश्व के प्रति असीम प्रेम प्रसारित करें।",
            es: "Irradia amor ilimitado hacia el mundo entero.",
            fr: "Rayonnez d'un amour sans bornes envers le monde entier.",
            de: "Strahle grenzenlose Liebe auf die ganze Welt aus.",
            pt: "Irradie amor ilimitado para o mundo inteiro.",
            ja: "全世界に向けて、限りない慈しみを広げよ。"
        }
    },
    {
        id: "phil_in_0114",
        author: "Mahavira",
        era: "6th Century BC India",
        tradition: "Jainism",
        category: "Non-possession",
        region: "India",
        translations: {
            en: "Possession is a bondage; it is the cause of misery.",
            hi: "परिग्रह (संग्रह) एक बंधन है; यह दुख का कारण है।",
            es: "La posesión es una esclavitud; es la causa de la miseria.",
            fr: "La possession est un attachement ; c'est la cause de la misère.",
            de: "Besitz ist eine Bindung; er ist die Ursache des Elends.",
            pt: "A posse é um aprisionamento; é a causa da miséria.",
            ja: "所有は束縛であり、苦しみの原因である。"
        }
    },
    {
        id: "phil_in_0115",
        author: "Kabir",
        era: "15th Century India",
        tradition: "Bhakti Movement",
        category: "Simplicity",
        region: "India",
        translations: {
            en: "Do not go to the garden of flowers! My friend, go not there. In your body is the garden of flowers.",
            hi: "फूलों के बाग में मत जाओ! मेरे मित्र, वहाँ मत जाओ। तुम्हारे शरीर में ही फूलों का बाग है।",
            es: "¡No vayas al jardín de flores! Mi amigo, no vayas allí. En tu cuerpo está el jardín de flores.",
            fr: "N'allez pas au jardin des fleurs ! Mon ami, n'y allez pas. Dans votre corps se trouve le jardin des fleurs.",
            de: "Geh nicht in den Blumengarten! Mein Freund, geh nicht dorthin. In deinem Körper ist der Blumengarten.",
            pt: "Não vá ao jardim de flores! Meu amigo, não vá lá. No seu corpo está o jardim de flores.",
            ja: "花園へ行ってはならない。友よ、行くな。あなたの体の中にこそ花園があるのだ。"
        }
    },
    {
        id: "phil_in_0116",
        author: "Guru Nanak",
        era: "15th Century India",
        tradition: "Sikhism",
        category: "Honesty",
        region: "India",
        translations: {
            en: "Truth is the root of all virtues.",
            hi: "सत्य ही सभी सद्गुणों की जड़ है।",
            es: "La verdad es la raíz de todas las virtudes.",
            fr: "La vérité est la racine de toutes les vertus.",
            de: "Wahrheit ist die Wurzel aller Tugenden.",
            pt: "A verdade é a raiz de todas as virtudes.",
            ja: "真理こそがあらゆる徳の根源である。"
        }
    },
    {
        id: "phil_in_0117",
        author: "Swami Vivekananda",
        era: "19th Century India",
        tradition: "Modern Vedanta",
        category: "Duty",
        region: "India",
        translations: {
            en: "Every duty is holy, and devotion to duty is the highest form of worship.",
            hi: "प्रत्येक कर्तव्य पवित्र है, और कर्तव्य के प्रति समर्पण ही पूजा का उच्चतम रूप है।",
            es: "Cada deber es sagrado, y la devoción al deber es la forma más elevada de adoración.",
            fr: "Chaque devoir est sacré, et la dévotion au devoir est la forme d'adoration la plus élevée.",
            de: "Jede Pflicht ist heilig, und die Hingabe an die Pflicht ist die höchste Form der Verehrung.",
            pt: "Todo dever é sagrado, e a devoção ao dever é a forma mais elevada de adoração.",
            ja: "あらゆる義務は聖なるものであり、義務への献身こそが最高形式の礼拝である。"
        }
    },
    {
        id: "phil_in_0118",
        author: "Sri Aurobindo",
        era: "20th Century India",
        tradition: "Integral Yoga",
        category: "Silence",
        region: "India",
        translations: {
            en: "The greatest powers are often the most silent.",
            hi: "सबसे बड़ी शक्तियां अक्सर सबसे मौन होती हैं।",
            es: "Los poderes más grandes son a menudo los más silenciosos.",
            fr: "Les plus grandes puissances sont souvent les plus silencieuses.",
            de: "Die größten Kräfte sind oft die stillsten.",
            pt: "Os maiores poderes são frequentemente os mais silenciosos.",
            ja: "偉大なる力は、しばしば沈黙の中に宿る。"
        }
    },
    {
        id: "phil_in_0119",
        author: "Rabindranath Tagore",
        era: "20th Century India",
        tradition: "Humanism",
        category: "Unity",
        region: "India",
        translations: {
            en: "Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.",
            hi: "तुमने मुझे अंतहीन बना दिया है, यह तुम्हारी खुशी है। इस कमजोर बर्तन को तुम बार-बार खाली करते हो, और इसे फिर से नए जीवन से भर देते हो।",
            es: "Me has hecho infinito, tal es tu placer. Este frágil vaso lo vacías una y otra vez, y lo llenas siempre con vida fresca.",
            fr: "Tu m'as fait sans fin, tel est ton plaisir. Ce frêle vaisseau, tu le vides encore et encore, et tu le remplis toujours d'une vie nouvelle.",
            de: "Du hast mich endlos gemacht, so ist es dein Vergnügen. Dieses zerbrechliche Gefäß leerst du immer wieder und füllst es stets mit frischem Leben.",
            pt: "Tu me fizeste infinito, tal é o teu prazer. Este vaso frágil tu esvazas repetidamente e o enches sempre com vida nova.",
            ja: "あなたのお望みのままに、あなたは私を無窮の存在となさった。この脆い器をあなたは何度も空にし、常に新鮮な命で満たしてくださる。"
        }
    },
    {
        id: "phil_in_0120",
        author: "Sarvepalli Radhakrishnan",
        era: "20th Century India",
        tradition: "Philosophy",
        category: "Religion",
        region: "India",
        translations: {
            en: "Religion is not a creed or a code but an insight into reality.",
            hi: "धर्म कोई मत या संहिता नहीं बल्कि वास्तविकता में एक अंतर्दृष्टि है।",
            es: "La religión no es un credo o un código sino una visión de la realidad.",
            fr: "La religion n'est pas un credo ou un code, mais un aperçu de la réalité.",
            de: "Religion ist kein Glaubensbekenntnis oder ein Kodex, sondern ein Einblick in die Realität.",
            pt: "Religião não é um credo ou um código, mas uma visão da realidade.",
            ja: "宗教とは信条や規律ではなく、実在への洞察である。"
        }
    },
    {
        id: "phil_in_0121",
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
    },
    {
        id: "phil_in_0122",
        author: "Ramana Maharshi",
        era: "20th Century India",
        tradition: "Advaita",
        category: "Silence",
        region: "India",
        translations: {
            en: "Silence is the most potent form of work.",
            hi: "मौन कर्म का सबसे शक्तिशाली रूप है।",
            es: "El silencio es la forma más potente de trabajo.",
            fr: "Le silence est la forme de travail la plus puissante.",
            de: "Stille ist die wirkungsvollste Form der Arbeit.",
            pt: "O silêncio é a forma mais potente de trabalho.",
            ja: "沈黙こそが、最も強力な活動の形態である。"
        }
    },
    {
        id: "phil_in_0123",
        author: "Vinoba Bhave",
        era: "20th Century India",
        tradition: "Bhoodan",
        category: "Service",
        region: "India",
        translations: {
            en: "Service of the neighbor is service of God.",
            hi: "पड़ोसी की सेवा ही ईश्वर की सेवा है।",
            es: "El servicio al prójimo es el servicio a Dios.",
            fr: "Le service du prochain est le service de Dieu.",
            de: "Dienst am Nächsten ist Dienst an Gott.",
            pt: "O serviço ao próximo é o serviço a Deus.",
            ja: "隣人への奉仕は、神への奉仕である。"
        }
    },
    {
        id: "phil_in_0124",
        author: "Chanakya",
        era: "4th Century BC India",
        tradition: "Arthashastra",
        category: "Knowledge",
        region: "India",
        translations: {
            en: "The scent of flowers spreads only in the direction of the wind. But the goodness of a person spreads in all directions.",
            hi: "फूलों की सुगंध केवल हवा की दिशा में फैलती है। लेकिन एक व्यक्ति की अच्छाई सभी दिशाओं में फैलती है।",
            es: "El aroma de las flores se propaga solo en la dirección del viento. Pero la bondad de una persona se propaga en todas las direcciones.",
            fr: "Le parfum des fleurs ne se répand que dans la direction du vent. Mais la bonté d'une personne se répand dans toutes les directions.",
            de: "Der Duft von Blumen verbreitet sich nur in Windrichtung. Aber die Güte eines Menschen verbreitet sich in alle Richtungen.",
            pt: "O perfume das flores espalha-se apenas na direção do vento. Mas a bondade de uma pessoa espalha-se em todas as direções.",
            ja: "花の香りは風の吹く方向にしか流れない。しかし、人の善行はあらゆる方向に広がる。"
        }
    },
    {
        id: "phil_in_0125",
        author: "Gautama Buddha",
        era: "Ancient India",
        tradition: "Buddhism",
        category: "Love",
        region: "India",
        translations: {
            en: "Hatred does not cease by hatred, but only by love; this is the eternal rule.",
            hi: "नहि वेरेन वेरानि सम्मन्तीध कुदाचनं। अवेरेन च सम्मन्ति एस धम्मो सनन्तनो।।",
            es: "El odio no cesa con el odio, sino solo con el amor; esta es la regla eterna.",
            fr: "La haine ne cesse pas par la haine, mais seulement par l'amour ; c'est la règle éternelle.",
            de: "Hass hört nicht durch Hass auf, sondern nur durch Liebe; das ist die ewige Regel.",
            pt: "O ódio não cessa pelo ódio, mas apenas pelo amor; esta é a regra eterna.",
            ja: "怨みは怨みによって止むことはない。怨みを捨ててこそ止む。これは永遠の真理である。"
        }
    },
    {
        id: "phil_in_0126",
        author: "Mahavira",
        era: "6th Century BC India",
        tradition: "Jainism",
        category: "Respect",
        region: "India",
        translations: {
            en: "Respect for all living beings is the non-violence of the mind.",
            hi: "सभी जीवित प्राणियों के प्रति सम्मान मन की अहिंसा है।",
            es: "El respeto por todos los seres vivos es la no violencia de la mente.",
            fr: "Le respect de tous les êtres vivants est la non-violence de l'esprit.",
            de: "Respekt vor allen Lebewesen ist die Gewaltlosigkeit des Geistes.",
            pt: "O respeito por todos os seres vivos é a não violência da mente.",
            ja: "すべての生きとし生けるものへの敬意は、心の非暴力である。"
        }
    },
    {
        id: "phil_in_0127",
        author: "Chanakya",
        era: "4th Century BC India",
        tradition: "Political Wisdom",
        category: "Company",
        region: "India",
        translations: {
            en: "He who is overly attached to his family members experiences fear and sorrow, for the root of all grief is attachment. Thus one should discard attachment to be happy.",
            hi: "जो व्यक्ति अपने परिवार के सदस्यों से अत्यधिक जुड़ा होता है, वह भय और शोक का अनुभव करता है, क्योंकि सभी दुखों की जड़ मोह है। अतः सुखी रहने के लिए मोह का त्याग करना चाहिए।",
            es: "Aquel que está excesivamente apegado a los miembros de su familia experimenta miedo y dolor, pues la raíz de toda pena es el apego. Por lo tanto, uno debe descartar el apego para ser feliz.",
            fr: "Celui qui est trop attaché aux membres de sa famille éprouve de la peur et du chagrin, car la racine de toute peine est l'attachement. On devrait donc abandonner l'attachement pour être heureux.",
            de: "Wer zu sehr an seinen Familienmitgliedern hängt, erfährt Angst und Kummer, denn die Wurzel allen Grams ist die Bindung. Daher sollte man die Bindung ablegen, um glücklich zu sein.",
            pt: "Aquele que é excessivamente apegado aos membros de sua família experimenta medo e tristeza, pois a raiz de todo sofrimento é o apego. Assim, deve-se descartar o apego para ser feliz.",
            ja: "家族に過度にしがみつく者は、恐れと悲しみを味わう。あらゆる嘆きの根源は執着だからだ。ゆえに、幸福であるためには執着を捨てなければならない。"
        }
    },
    {
        id: "phil_in_0128",
        author: "Gautama Buddha",
        era: "Ancient India",
        tradition: "Buddhism",
        category: "Anger",
        region: "India",
        translations: {
            en: "You will not be punished for your anger, you will be punished by your anger.",
            hi: "तुम्हें अपने क्रोध के लिए दंड नहीं दिया जाएगा, तुम्हें अपने क्रोध द्वारा दंडित किया जाएगा।",
            es: "No serás castigado por tu ira, serás castigado por tu ira.",
            fr: "Tu ne seras pas puni pour ta colère, tu seras puni par ta colère.",
            de: "Du wirst nicht für deinen Zorn bestraft, du wirst durch deinen Zorn bestraft.",
            pt: "Você não será punido pela sua raiva, você será punido pela sua raiva.",
            ja: "あなたは自らの怒りのゆえに罰せられることはない。あなたは自らの怒りによって罰せられるのだ。"
        }
    },
    {
        id: "phil_in_0129",
        author: "Kabir",
        era: "15th Century India",
        tradition: "Bhakti Movement",
        category: "Truth",
        region: "India",
        translations: {
            en: "Slowly, slowly, O mind; everything in its own time happens.",
            hi: "धीरे धीरे रे मना, धीरे सब कुछ होय। माली सींचे सौ घड़ा, ऋतु आए फल होय।।",
            es: "Lentamente, lentamente, oh mente; todo sucede a su debido tiempo.",
            fr: "Lentement, doucement, ô esprit ; chaque chose arrive en son temps.",
            de: "Langsam, langsam, o Geist; alles geschieht zu seiner Zeit.",
            pt: "Lentamente, lentamente, ó mente; tudo acontece a seu tempo.",
            ja: "ゆっくり、ゆっくりと、心よ。すべてはそれ自体の時に起こるものである。"
        }
    },
    {
        id: "phil_in_0130",
        author: "Guru Nanak",
        era: "15th Century India",
        tradition: "Sikhism",
        category: "Equality",
        region: "India",
        translations: {
            en: "The world is on fire, O Lord, save it by Thy Grace.",
            hi: "जगतु जलंदा रखि लै आपणी किरपा धारि।",
            es: "El mundo está en llamas, oh Señor, sálvalo por Tu Gracia.",
            fr: "Le monde est en feu, ô Seigneur, sauve-le par Ta Grâce.",
            de: "Die Welt steht in Flammen, o Herr, rette sie durch Deine Gnade.",
            pt: "O mundo está em chamas, ó Senhor, salva-o por Tua Graça.",
            ja: "世界は燃えています、主よ。あなたの恩寵によって救ってください。"
        }
    },
    {
        id: "phil_in_0131",
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
        id: "phil_in_0132",
        author: "Sri Aurobindo",
        era: "20th Century India",
        tradition: "Integral Yoga",
        category: "Perfection",
        region: "India",
        translations: {
            en: "All can be done if the God-touch is there.",
            hi: "यदि ईश्वर का स्पर्श हो तो सब कुछ किया जा सकता है।",
            es: "Todo se puede hacer si el toque divino está presente.",
            fr: "Tout peut être fait si le contact divin est là.",
            de: "Alles kann getan werden, wenn die Berührung Gottes da ist.",
            pt: "Tudo pode ser feito se o toque divino estiver presente.",
            ja: "神の触れがあれば、すべてが可能となる。"
        }
    },
    {
        id: "phil_in_0133",
        author: "Rabindranath Tagore",
        era: "20th Century India",
        tradition: "Wisdom",
        category: "Life",
        region: "India",
        translations: {
            en: "Let your life lightly dance on the edges of Time like dew on the tip of a leaf.",
            hi: "अपने जीवन को समय के किनारों पर हल्के से नाचने दो, जैसे पत्ते की नोक पर ओस की बूंद।",
            es: "Deja que tu vida dance ligeramente en los bordes del Tiempo como el rocío en la punta de una hoja.",
            fr: "Laisse ta vie danser légèrement sur les bords du Temps comme la rosée à la pointe d'une feuille.",
            de: "Lass dein Leben leicht auf den Rändern der Zeit tanzen wie der Tau an der Spitze eines Blattes.",
            pt: "Deixe sua vida dançar levemente nas bordas do Tempo como o orvalho na ponta de uma folha.",
            ja: "木の葉の先の露のように、あなたの人生を時の縁（ふち）で軽やかに舞わせなさい。"
        }
    },
    {
        id: "phil_in_0134",
        author: "Sarvepalli Radhakrishnan",
        era: "20th Century India",
        tradition: "Philosophy",
        category: "Learning",
        region: "India",
        translations: {
            en: "A life of joy and happiness is possible only on the basis of knowledge and science.",
            hi: "आनन्द और खुशी का जीवन केवल ज्ञान और विज्ञान के आधार पर ही संभव है।",
            es: "Una vida de alegría y felicidad es posible solo sobre la base del conocimiento y la ciencia.",
            fr: "Une vie de joie et de bonheur n'est possible que sur la base de la connaissance et de la science.",
            de: "Ein Leben voller Freude und Glück ist nur auf der Grundlage von Wissen und Wissenschaft möglich.",
            pt: "Uma vida de alegria e felicidade só é possível com base no conhecimento e na ciência.",
            ja: "喜びと幸福に満ちた人生は、知識と科学ের基礎の上にのみ可能となる。"
        }
    },
    {
        id: "phil_in_0135",
        author: "Jiddu Krishnamurti",
        era: "20th Century India",
        tradition: "Modern Thought",
        category: "Meditation",
        region: "India",
        translations: {
            en: "Meditation is the ending of thought.",
            hi: "ध्यान विचारों का अंत है।",
            es: "La meditación es el fin del pensamiento.",
            fr: "La méditation est la fin de la pensée.",
            de: "Meditation ist das Ende des Denkens.",
            pt: "Meditação é o fim do pensamento.",
            ja: "瞑想とは、思考の終焉である。"
        }
    },
    {
        id: "phil_in_0136",
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
        id: "phil_in_0137",
        author: "Sant Tukaram",
        era: "17th Century India",
        tradition: "Bhakti Movement",
        category: "Devotion",
        region: "India",
        translations: {
            en: "God is found through love, not through pride.",
            hi: "ईश्वर प्रेम से प्राप्त होते हैं, अहंकार से नहीं।",
            es: "Dios se encuentra a través del amor, no a través del orgullo.",
            fr: "Dieu se trouve par l'amour, non par l'orgueil.",
            de: "Gott wird durch Liebe gefunden, nicht durch Stolz.",
            pt: "Deus é encontrado através do amor, não através do orgulho.",
            ja: "神は愛によって見出されるのであり、高慢によってではない。"
        }
    },
    {
        id: "phil_in_0138",
        author: "Basavanna",
        era: "12th Century India",
        tradition: "Lingayatism",
        category: "Work",
        region: "India",
        translations: {
            en: "Work is worship.",
            hi: "कायक्वे कैलास (कार्य ही स्वर्ग है)।",
            es: "El trabajo es adoración.",
            fr: "Le travail est une adoration.",
            de: "Arbeit ist Gottesdienst.",
            pt: "Trabalho é adoração.",
            ja: "労働こそが礼拝である。"
        }
    },
    {
        id: "phil_in_0139",
        author: "Adi Shankaracharya",
        era: "8th Century India",
        tradition: "Advaita Vedanta",
        category: "Non-duality",
        region: "India",
        translations: {
            en: "The Self is one, and it is the only reality.",
            hi: "आत्मा एक है, और यही एकमात्र वास्तविकता है।",
            es: "El Ser es uno, y es la única realidad.",
            fr: "Le Soi est un, et c'est la seule réalité.",
            de: "Das Selbst ist eins, und es ist die einzige Realität.",
            pt: "O Eu é um, e é a única realidade.",
            ja: "自己（アートマン）は一つであり、それこそが唯一の真実である。"
        }
    },
    {
        id: "phil_in_0140",
        author: "Gautama Buddha",
        era: "Ancient India",
        tradition: "Buddhism",
        category: "Greed",
        region: "India",
        translations: {
            en: "He who has no attachment can have no fear.",
            hi: "जिसके पास कोई लगाव नहीं है, उसे कोई डर नहीं हो सकता।",
            es: "Aquel que no tiene apego no puede tener miedo.",
            fr: "Celui qui n'a pas d'attachement ne peut avoir de peur.",
            de: "Wer keine Bindung hat, kann keine Angst haben.",
            pt: "Aquele que não tem apego não pode ter medo.",
            ja: "執着のない者に、恐れはない。"
        }
    },
    {
        id: "phil_in_0141",
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
        id: "phil_in_0142",
        author: "Chanakya",
        era: "4th Century BC India",
        tradition: "Political Wisdom",
        category: "Learning",
        region: "India",
        translations: {
            en: "The biggest guru-mantra is: never share your secrets with anybody. It will destroy you.",
            hi: "सबसे बड़ा गुरु-मंत्र है: अपने रहस्य कभी किसी को न बताएं। यह आपको नष्ट कर देगा।",
            es: "El mayor guru-mantra es: nunca compartas tus secretos con nadie. Te destruirá.",
            fr: "Le plus grand gourou-mantra est : ne partage jamais tes secrets avec personne. Cela te détruira.",
            de: "Das größte Guru-Mantra ist: Teile niemals deine Geheimnisse mit jemandem. Es wird dich zerstören.",
            pt: "O maior mantra do guru é: nunca compartilhe seus segredos com ninguém. Isso o destruirá.",
            ja: "最大の秘訣（グールー・マントラ）を教えよう。自分の秘密を誰にも明かしてはならない。それはあなたを滅ぼすだろう。"
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
        author: "Guru Gobind Singh",
        era: "17th Century India",
        tradition: "Sikhism",
        category: "Courage",
        region: "India",
        translations: {
            en: "When all other means have failed, it is righteous to draw the sword.",
            hi: "चु कार अज हमह हीलते दर गुज़शत, हलाल अस्त बुरदन ब शमशीर दस्त।",
            es: "Cuando todos los demás medios han fallado, es justo desenvainar la espada.",
            fr: "Quand tous les autres moyens ont échoué, il est juste de tirer l'épée.",
            de: "Wenn alle anderen Mittel versagt haben, ist es gerechtfertig, das Schwert zu ziehen.",
            pt: "Quando todos os outros meios falharam, é justo desembainhar a espada.",
            ja: "他のあらゆる手段が尽きたとき、剣を抜くことは正義である。"
        }
    },
    {
        id: "phil_in_0145",
        author: "Nizamuddin Auliya",
        era: "13th Century India",
        tradition: "Sufism",
        category: "Love",
        region: "India",
        translations: {
            en: "Love for God means love for His creatures.",
            hi: "ईश्वर के प्रति प्रेम का अर्थ है उनके प्राणियों के प्रति प्रेम।",
            es: "El amor por Dios significa el amor por Sus criaturas.",
            fr: "L'amour pour Dieu signifie l'amour pour Ses créatures.",
            de: "Liebe zu Gott bedeutet Liebe zu Seinen Geschöpfen.",
            pt: "O amor por Deus significa amor por Suas criaturas.",
            ja: "神への愛とは、神の被造物への愛を意味する。"
        }
    },
    {
        id: "phil_in_0146",
        author: "Adi Shankaracharya",
        era: "8th Century India",
        tradition: "Advaita Vedanta",
        category: "Nature of Self",
        region: "India",
        translations: {
            en: "Like a lamp in a windless place, the mind should be steady in the Self.",
            hi: "वायुहीन स्थान में दीपक की तरह, मन को आत्मा में स्थिर होना चाहिए।",
            es: "Como una lámpara en un lugar sin viento, la mente debe estar firme en el Ser.",
            fr: "Comme une lampe dans un lieu sans vent, l'esprit devrait être stable dans le Soi.",
            de: "Wie eine Lampe an einem windstillen Ort sollte der Geist im Selbst beständig sein.",
            pt: "Como uma lâmpada em um lugar sem vento, a mente deve estar firme no Eu.",
            ja: "風のない場所にある灯火のように、心は自己の中に安定しているべきだ。"
        }
    },
    {
        id: "phil_in_0147",
        author: "Gautama Buddha",
        era: "Ancient India",
        tradition: "Buddhism",
        category: "Speech",
        region: "India",
        translations: {
            en: "Better than a thousand hollow words, is one word that brings peace.",
            hi: "हजारों खोखले शब्दों से बेहतर वह एक शब्द है जो शांति लाता है।",
            es: "Mejor que mil palabras huecas, es una palabra que trae paz.",
            fr: "Mieux que mille mots creux, un seul mot qui apporte la paix.",
            de: "Besser als tausend hohle Worte ist ein Wort, das Frieden bringt.",
            pt: "Melhor do que mil palavras vazias, é uma palavra que traz paz.",
            ja: "千の虚しい言葉よりも、平和をもたらす一言の方が優れている。"
        }
    },
    {
        id: "phil_in_0148",
        author: "Mahavira",
        era: "6th Century BC India",
        tradition: "Jainism",
        category: "Soul",
        region: "India",
        translations: {
            en: "There is no separate existence of the soul. All souls are identical.",
            hi: "आत्मा का कोई अलग अस्तित्व नहीं है। सभी आत्माएं एक समान हैं।",
            es: "No hay existencia separada del alma. Todas las almas son idénticas.",
            fr: "Il n'y a pas d'existence séparée de l'âme. Toutes les âmes sont identiques.",
            de: "Es gibt keine getrennte Existenz der Seele. Alle Seelen sind identisch.",
            pt: "Não há existência separada da alma. Todas las almas son idênticas.",
            ja: "魂の別々の存在などない。すべての魂は同一である。"
        }
    },
    {
        id: "phil_in_0149",
        author: "Swami Vivekananda",
        era: "19th Century India",
        tradition: "Modern Vedanta",
        category: "Strength",
        region: "India",
        translations: {
            en: "Be free; hope for nothing from anyone.",
            hi: "स्वतंत्र रहो; किसी से किसी चीज़ की आशा मत करो।",
            es: "Sé libre; no esperes nada de nadie.",
            fr: "Soyez libre ; n'espérez rien de personne.",
            de: "Sei frei; erwarte nichts von niemandem.",
            pt: "Seja livre; não espere nada de ninguém.",
            ja: "自由であれ。誰からも何も期待するな。"
        }
    },
    {
        id: "phil_in_0150",
        author: "Lalleshwari",
        era: "14th Century India",
        tradition: "Kashmiri Shaivism",
        category: "Presence",
        region: "India",
        translations: {
            en: "God is everywhere; do not seek Him here or there.",
            hi: "ईश्वर हर जगह है; उसे यहाँ या वहाँ मत खोजो।",
            es: "Dios está en todas partes; no lo busques aquí o allá.",
            fr: "Dieu est partout ; ne le cherche pas ici ou là.",
            de: "Gott ist überall; suche Ihn nicht hier oder dort.",
            pt: "Deus está em toda parte; não O procure aqui ou acolá.",
            ja: "神はどこにでもおられる。ここやあそこに神を探し回ってはならない。"
        }
    }
];

/**
 * Normalizes text for robust deduplication.
 */
function normalizeQuoteText(text) {
    return String(text || "")
        .toLowerCase()
        .replace(/[“”]/g, '"')
        .replace(/[‘’]/g, "'")
        .replace(/\s+/g, " ")
        .trim();
}

/**
 * Filters out duplicate IDs and normalized text contents.
 */
function dedupeQuotes(quotes) {
    const seenIds = new Set();
    const seenText = new Set();
    const isDev = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname.includes('ais-dev'));

    return quotes.filter(q => {
        const id = String(q.id || "").trim();
        const text = normalizeQuoteText(q.translations?.en || "");

        if (!id || !text) return false;
        
        if (seenIds.has(id)) {
            if (isDev) console.warn(`Duplicate Quote ID detected: ${id}`);
            return false;
        }
        
        if (seenText.has(text)) {
            if (isDev) console.warn(`Duplicate Quote Text detected: "${text.substring(0, 50)}..."`);
            return false;
        }

        seenIds.add(id);
        seenText.add(text);
        return true;
    });
}

/**
 * Optimized engine for high-performance retrieval and language auto-fallback.
 */
function buildwisdomEngine(raw) {
    const cleanQuotes = dedupeQuotes(raw);
    const languages = ['en', 'hi', 'es', 'fr', 'de', 'pt', 'ja'];
    const library = {};

    languages.forEach(lang => {
        library[lang] = cleanQuotes.map(q => ({
            text: q.translations[lang] || q.translations['en'] || "Wisdom is timeless.",
            author: q.author,
            era: q.era || "Universal",
            tradition: q.tradition || "Thought",
            region: q.region || "Global",
            category: q.category || "General"
        }));
    });

    return library;
}

const QUOTES_LIBRARY = buildwisdomEngine(RAW_PHILOSOPHER_QUOTES);

if (typeof window !== 'undefined') {
    window.QUOTES_LIBRARY = QUOTES_LIBRARY;
}

export default QUOTES_LIBRARY;
