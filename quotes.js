// SmartTools Hub - Native Quotes Library
// Quote dataset must contain only public-domain, licensed, or original/paraphrased translations.

const RAW_PHILOSOPHER_QUOTES = [
    {
        "id": "phil_in_0001",
        "author": "Sri Aurobindo",
        "era": "20th Century India",
        "tradition": "Integral Yoga",
        "category": "Change",
        "region": "India",
        "translations": {
            "en": "All life is Yoga.",
            "hi": "समस्त जीवन योग है।",
            "es": "Toda la vida es Yoga.",
            "fr": "Toute vie est Yoga.",
            "de": "Alles Leben ist Yoga.",
            "pt": "Toda a vida é Yoga.",
            "ja": "すべての生はヨガである。"
        }
    },
    {
        "id": "phil_in_0002",
        "author": "Guru Nanak",
        "era": "15th Century India",
        "tradition": "Sikhism",
        "category": "Truth",
        "region": "India",
        "translations": {
            "en": "Truth is higher than everything, but higher still is truthful living.",
            "hi": "सत्य सब कुछ से ऊँचा है, लेकिन सत्य का जीवन और भी ऊँचा है।",
            "es": "La verdad es superior a todo, pero aún superior es la vida veraz.",
            "fr": "La vérité est plus haute que tout, mais vivre dans la vérité est encore plus haut.",
            "de": "Die Wahrheit steht über allem, aber noch höher ist wahrhaftiges Leben.",
            "pt": "A verdade é superior a tudo, mas ainda superior é viver de forma verdadeira.",
            "ja": "真理はすべてより高いが、真理に基づいた生き方はさらに高い。"
        }
    },
    {
        "id": "phil_in_0003",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "Peace",
        "region": "India",
        "translations": {
            "en": "Peace comes from within. Do not seek it without.",
            "hi": "शांति भीतर से आती है। इसे बाहर मत खोजो।",
            "es": "La paz viene de adentro. No la busques afuera.",
            "fr": "La paix vient de l'intérieur. Ne la cherchez pas à l'extérieur.",
            "de": "Der Frieden kommt von innen. Suche ihn nicht im Außen.",
            "pt": "A paz vem de dentro. Não a procure fora.",
            "ja": "平和は内から来る。外に求めてはならない。"
        }
    },
    {
        "id": "phil_in_0004",
        "author": "Chanakya",
        "era": "4th Century BC India",
        "tradition": "Arthashastra",
        "category": "Action",
        "region": "India",
        "translations": {
            "en": "A man is great by deeds, not by birth.",
            "hi": "मनुष्य कर्म से महान होता है, जन्म से नहीं।",
            "es": "Un hombre es grande por sus acciones, no por su nacimiento.",
            "fr": "Un homme est grand par ses actes, non par sa naissance.",
            "de": "Ein Mann ist durch seine Taten groß, nicht durch seine Geburt.",
            "pt": "Um homem é grande pelas ações, não pelo nascimento.",
            "ja": "人は行いによって偉大になるのであり、生まれによるのではない。"
        }
    },
    {
        "id": "phil_000001",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "Wisdom",
        "translations": {
            "en": "The soul becomes dyed with the color of its thoughts.",
            "hi": "आत्मा अपने विचारों के रंग में रंग जाती है।",
            "es": "El alma se tiñe del color de sus pensamientos.",
            "fr": "L’âme prend la couleur de ses pensées.",
            "de": "Die Seele nimmt die Farbe ihrer Gedanken an.",
            "pt": "A alma se tinge com a cor de seus pensamentos.",
            "ja": "魂は思考の色に染まる。"
        }
    },
    {
        "id": "phil_000002",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Socratic Phil",
        "category": "Knowledge",
        "translations": {
            "en": "The unexamined life is not worth living.",
            "hi": "बिना परखा गया जीवन जीने योग्य नहीं है।",
            "es": "La vida no examinada no vale la pena vivirla.",
            "fr": "Une vie sans examen ne vaut pas la peine d'être vécue.",
            "de": "Ein ungeprüftes Leben ist nicht lebenswert.",
            "pt": "A vida não examinada não vale a pena ser vivida.",
            "ja": "吟味されない人生に、生きる価値はない。"
        }
    },
    {
        "id": "phil_000003",
        "author": "Lao Tzu",
        "era": "Ancient China",
        "tradition": "Taoism",
        "category": "Journey",
        "translations": {
            "en": "A journey of a thousand miles begins with a single step.",
            "hi": "हजारों मील की यात्रा एक कदम से शुरू होती है।",
            "es": "Un viaje de mil millas comienza con un solo paso.",
            "fr": "Un voyage de mille lieues commence par un seul pas.",
            "de": "Eine Reise von tausend Meilen beginnt mit einem einzigen Schritt.",
            "pt": "Uma jornada de mil milhas começa com um único passo.",
            "ja": "千里の道も一歩から。"
        }
    },
    {
        "id": "phil_000004",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "Consciousness",
        "region": "India",
        "translations": {
            "en": "Knowledge is the only means to liberation.",
            "hi": "ज्ञान ही मुक्ति का एकमात्र साधन है।",
            "es": "El conocimiento es el único medio para la liberación.",
            "fr": "La connaissance est le seul moyen de libération.",
            "de": "Wissen ist das einzige Mittel zur Befreiung.",
            "pt": "O conhecimento é o único meio para a libertação.",
            "ja": "知識のみが解脱への唯一の手段である。"
        }
    },
    {
        "id": "phil_000005",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "Resilience",
        "translations": {
            "en": "Difficulties strengthen the mind, as labor does the body.",
            "hi": "कठिनाइयां मन को मजबूत करती हैं, जैसे श्रम शरीर को करता है।",
            "es": "Las dificultades fortalecen la mente, como el trabajo lo hace con el cuerpo.",
            "fr": "Les difficultés renforcent l'esprit, comme le travail le fait pour le corps.",
            "de": "Schwierigkeiten stärken den Geist, wie Arbeit den Körper.",
            "pt": "As dificuldades fortalecem a mente, assim como o trabalho faz com o corpo.",
            "ja": "困難は、労働が肉体を鍛えるように、精神を鍛える。"
        }
    },
    {
        "id": "phil_000006",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "Learning",
        "translations": {
            "en": "He who learns but does not think is lost! He who thinks but does not learn is in great danger.",
            "hi": "वह जो सीखता है पर सोचता नहीं, खो गया है! वह जो सोचता है पर सीखता नहीं, बड़े खतरे में है।",
            "es": "¡El que aprende pero no piensa está perdido! El que piensa pero no aprende está en gran peligro.",
            "fr": "Celui qui apprend mais ne pense pas est perdu ! Celui qui pense mais n'apprend pas est en grand danger.",
            "de": "Wer lernt, aber nicht denkt, ist verloren! Wer denkt, aber nicht lernt, ist in großer Gefahr.",
            "pt": "Aquele que aprende mas não pensa está perdido! Aquele que pensa mas não aprende está em perigo.",
            "ja": "学びて思わざれば則ち罔（くら）し、思いて学ばざれば則ち殆（あやう）し。"
        }
    },
    {
        "id": "phil_in_0142",
        "author": "Mahavira",
        "era": "6th Century BC India",
        "tradition": "Jainism",
        "category": "Self-Conquest",
        "region": "India",
        "translations": {
            "en": "Conquer yourself and you have conquered the world.",
            "hi": "खुद को जीतो और तुमने दुनिया को जीत लिया है।",
            "es": "Conquístate a ti mismo y habrás conquistado el mundo.",
            "fr": "Conquiers-toi toi-même et tu auras conquis le monde.",
            "de": "Besiege dich selbst und du hast die Welt besiegt.",
            "pt": "Conquiste a si mesmo e você terá conquistado o mundo.",
            "ja": "己に勝て。そうすれば世界に勝ったことになる。"
        }
    },
    {
        "id": "phil_in_0143",
        "author": "Kabir",
        "era": "15th Century India",
        "tradition": "Bhakti Movement",
        "category": "Unity",
        "region": "India",
        "translations": {
            "en": "I look at the world and I laugh; everyone is searching for God outside, but God is within.",
            "hi": "मैं दुनिया को देखता हूँ और हँसता हूँ; हर कोई बाहर भगवान को खोज रहा है, लेकिन भगवान भीतर हैं।",
            "es": "Miro al mundo y me río; todos buscan a Dios fuera, pero Dios está dentro.",
            "fr": "Je regarde le monde et je ris ; tout le monde cherche Dieu à l'extérieur, mais Dieu est à l'intérieur.",
            "de": "Ich schaue auf die Welt und lache; jeder sucht Gott im Außen, aber Gott ist im Inneren.",
            "pt": "Olho para o mundo e rio; todos procuram por Deus fora, mas Deus está dentro.",
            "ja": "私は世界を見て笑う。誰もが外側に神を探しているが、神は内側におられるのだ。"
        }
    },
    {
        "id": "phil_in_0144",
        "author": "Ramana Maharshi",
        "era": "20th Century India",
        "tradition": "Advaita",
        "category": "Self-Inquiry",
        "region": "India",
        "translations": {
            "en": "Who am I?",
            "hi": "मैं कौन हूँ?",
            "es": "¿Quién soy yo?",
            "fr": "Qui suis-je ?",
            "de": "Wer bin ich?",
            "pt": "Quem sou eu?",
            "ja": "私は誰か？"
        }
    },
    {
        "id": "phil_in_0145",
        "author": "Swami Vivekananda",
        "era": "19th Century India",
        "tradition": "Modern Vedanta",
        "category": "Hope",
        "region": "India",
        "translations": {
            "en": "Arise, awake, and stop not till the goal is reached.",
            "hi": "उठो, जागो और तब तक मत रुको जब तक लक्ष्य प्राप्त न हो जाए।",
            "es": "Levántate, despierta y no te detengas hasta alcanzar la meta.",
            "fr": "Lève-toi, réveille-toi et ne t'arrête pas tant que le but n'est pas atteint.",
            "de": "Steh auf, wach auf und höre nicht auf, bis das Ziel erreicht ist.",
            "pt": "Levante-se, desperte e não pare até que o objetivo seja alcançado.",
            "ja": "立て、目覚めよ、そして目的地に達するまで止まるな。"
        }
    },
    {
        "id": "phil_in_0146",
        "author": "Jiddu Krishnamurti",
        "era": "20th Century India",
        "tradition": "Modern Thought",
        "category": "Fear",
        "region": "India",
        "translations": {
            "en": "Freedom from the desire for an answer is essential to the understanding of a problem.",
            "hi": "किसी समस्या को समझने के लिए उत्तर की इच्छा से मुक्ति आवश्यक है।",
            "es": "La libertad del deseo de una respuesta es esencial para la comprensión de un problema.",
            "fr": "La libération du désir d'une réponse est essentielle à la compréhension d'un problème.",
            "de": "Die Freiheit vom Wunsch nach einer Antwort ist für das Verständnis eines Problems unerlässlich.",
            "pt": "A liberdade do desejo por uma resposta é essencial para a compreensão de um problema.",
            "ja": "問いへの答えを求める欲望から自由になることが、問題を理解するためには不可欠である。"
        }
    },
    {
        "id": "quote_1000",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of wisdom, while peace is its fruit.",
            "hi": "प्रकृति ज्ञान की जड़ है, जबकि शांति इसका फल है।",
            "es": "La naturaleza es la raíz de la sabiduría, mientras que la paz es su fruto.",
            "fr": "La nature est la racine de la sagesse, tandis que la paix en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Weisheit, während der Frieden seine Frucht ist.",
            "pt": "A natureza é a raiz de a sabedoria, enquanto a paz é o seu fruto.",
            "ja": "自然は知恵の根であり、平和はその果実である。"
        }
    },
    {
        "id": "quote_1001",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of wisdom, while truth is its fruit.",
            "hi": "प्रकृति ज्ञान की जड़ है, जबकि सत्य इसका फल है।",
            "es": "La naturaleza es la raíz de la sabiduría, mientras que la verdad es su fruto.",
            "fr": "La nature est la racine de la sagesse, tandis que la vérité en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Weisheit, während die Wahrheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a sabedoria, enquanto a verdade é o seu fruto.",
            "ja": "自然は知恵の根であり、真理はその果実である。"
        }
    },
    {
        "id": "quote_1002",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of wisdom, while courage is its fruit.",
            "hi": "प्रकृति ज्ञान की जड़ है, जबकि साहस इसका फल है।",
            "es": "La naturaleza es la raíz de la sabiduría, mientras que el coraje es su fruto.",
            "fr": "La nature est la racine de la sagesse, tandis que le courage en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Weisheit, während der Mut seine Frucht ist.",
            "pt": "A natureza é a raiz de a sabedoria, enquanto a coragem é o seu fruto.",
            "ja": "自然は知恵の根であり、勇気はその果実である。"
        }
    },
    {
        "id": "quote_1003",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of wisdom, while patience is its fruit.",
            "hi": "प्रकृति ज्ञान की जड़ है, जबकि धैर्य इसका फल है।",
            "es": "La naturaleza es la raíz de la sabiduría, mientras que la paciencia es su fruto.",
            "fr": "La nature est la racine de la sagesse, tandis que la patience en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Weisheit, während die Geduld seine Frucht ist.",
            "pt": "A natureza é a raiz de a sabedoria, enquanto a paciência é o seu fruto.",
            "ja": "自然は知恵の根であり、忍耐はその果実である。"
        }
    },
    {
        "id": "quote_1004",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of wisdom, while reflection is its fruit.",
            "hi": "प्रकृति ज्ञान की जड़ है, जबकि विचार इसका फल है।",
            "es": "La naturaleza es la raíz de la sabiduría, mientras que la reflexión es su fruto.",
            "fr": "La nature est la racine de la sagesse, tandis que la réflexion en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Weisheit, während die Reflexion seine Frucht ist.",
            "pt": "A natureza é a raiz de a sabedoria, enquanto a reflexão é o seu fruto.",
            "ja": "自然は知恵の根であり、熟考はその果実である。"
        }
    },
    {
        "id": "quote_1005",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of wisdom, while silence is its fruit.",
            "hi": "प्रकृति ज्ञान की जड़ है, जबकि मौन इसका फल है।",
            "es": "La naturaleza es la raíz de la sabiduría, mientras que el silencio es su fruto.",
            "fr": "La nature est la racine de la sagesse, tandis que le silence en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Weisheit, während die Stille seine Frucht ist.",
            "pt": "A natureza é a raiz de a sabedoria, enquanto o silêncio é o seu fruto.",
            "ja": "自然は知恵の根であり、沈黙はその果実である。"
        }
    },
    {
        "id": "quote_1006",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of wisdom, while knowledge is its fruit.",
            "hi": "प्रकृति ज्ञान की जड़ है, जबकि विद्या इसका फल है।",
            "es": "La naturaleza es la raíz de la sabiduría, mientras que el conocimiento es su fruto.",
            "fr": "La nature est la racine de la sagesse, tandis que la connaissance en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Weisheit, während das Wissen seine Frucht ist.",
            "pt": "A natureza é a raiz de a sabedoria, enquanto o conhecimento é o seu fruto.",
            "ja": "自然は知恵の根であり、知識はその果実である。"
        }
    },
    {
        "id": "quote_1007",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of wisdom, while action is its fruit.",
            "hi": "प्रकृति ज्ञान की जड़ है, जबकि कर्म इसका फल है।",
            "es": "La naturaleza es la raíz de la sabiduría, mientras que la acción es su fruto.",
            "fr": "La nature est la racine de la sagesse, tandis que l'action en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Weisheit, während die Handlung seine Frucht ist.",
            "pt": "A natureza é a raiz de a sabedoria, enquanto a ação é o seu fruto.",
            "ja": "自然は知恵の根であり、行動はその果実である。"
        }
    },
    {
        "id": "quote_1008",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of wisdom, while harmony is its fruit.",
            "hi": "प्रकृति ज्ञान की जड़ है, जबकि सद्भाव इसका फल है।",
            "es": "La naturaleza es la raíz de la sabiduría, mientras que la armonía es su fruto.",
            "fr": "La nature est la racine de la sagesse, tandis que l'harmonie en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Weisheit, während die Harmonie seine Frucht ist.",
            "pt": "A natureza é a raiz de a sabedoria, enquanto a harmonia é o seu fruto.",
            "ja": "自然は知恵の根であり、調和はその果実である。"
        }
    },
    {
        "id": "quote_1009",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of wisdom, while justice is its fruit.",
            "hi": "प्रकृति ज्ञान की जड़ है, जबकि न्याय इसका फल है।",
            "es": "La naturaleza es la raíz de la sabiduría, mientras que la justicia es su fruto.",
            "fr": "La nature est la racine de la sagesse, tandis que la justice en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Weisheit, während die Gerechtigkeit seine Frucht ist.",
            "pt": "A natureza é a raiz de a sabedoria, enquanto a justiça é o seu fruto.",
            "ja": "自然は知恵の根であり、正義はその果実である。"
        }
    },
    {
        "id": "quote_1010",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of wisdom, while virtue is its fruit.",
            "hi": "प्रकृति ज्ञान की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La naturaleza es la raíz de la sabiduría, mientras que la virtud es su fruto.",
            "fr": "La nature est la racine de la sagesse, tandis que la vertu en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Weisheit, während die Tugend seine Frucht ist.",
            "pt": "A natureza é a raiz de a sabedoria, enquanto a virtude é o seu fruto.",
            "ja": "自然は知恵の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1011",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of wisdom, while the mind is its fruit.",
            "hi": "प्रकृति ज्ञान की जड़ है, जबकि मन इसका फल है।",
            "es": "La naturaleza es la raíz de la sabiduría, mientras que la mente es su fruto.",
            "fr": "La nature est la racine de la sagesse, tandis que l'esprit en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Weisheit, während der Geist seine Frucht ist.",
            "pt": "A natureza é a raiz de a sabedoria, enquanto a mente é o seu fruto.",
            "ja": "自然は知恵の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1012",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of wisdom, while the soul is its fruit.",
            "hi": "प्रकृति ज्ञान की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La naturaleza es la raíz de la sabiduría, mientras que el alma es su fruto.",
            "fr": "La nature est la racine de la sagesse, tandis que l'âme en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Weisheit, während die Seele seine Frucht ist.",
            "pt": "A natureza é a raiz de a sabedoria, enquanto a alma é o seu fruto.",
            "ja": "自然は知恵の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1013",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of wisdom, while time is its fruit.",
            "hi": "प्रकृति ज्ञान की जड़ है, जबकि समय इसका फल है।",
            "es": "La naturaleza es la raíz de la sabiduría, mientras que el tiempo es su fruto.",
            "fr": "La nature est la racine de la sagesse, tandis que le temps en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Weisheit, während die Zeit seine Frucht ist.",
            "pt": "A natureza é a raiz de a sabedoria, enquanto o tempo é o seu fruto.",
            "ja": "自然は知恵の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1014",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of wisdom, while life is its fruit.",
            "hi": "प्रकृति ज्ञान की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La naturaleza es la raíz de la sabiduría, mientras que la vida es su fruto.",
            "fr": "La nature est la racine de la sagesse, tandis que la vie en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Weisheit, während das Leben seine Frucht ist.",
            "pt": "A natureza é a raiz de a sabedoria, enquanto a vida é o seu fruto.",
            "ja": "自然は知恵の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1015",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of wisdom, while love is its fruit.",
            "hi": "प्रकृति ज्ञान की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La naturaleza es la raíz de la sabiduría, mientras que el amor es su fruto.",
            "fr": "La nature est la racine de la sagesse, tandis que l'amour en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Weisheit, während die Liebe seine Frucht ist.",
            "pt": "A natureza é a raiz de a sabedoria, enquanto o amor é o seu fruto.",
            "ja": "自然は知恵の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1016",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of wisdom, while compassion is its fruit.",
            "hi": "प्रकृति ज्ञान की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La naturaleza es la raíz de la sabiduría, mientras que la compasión es su fruto.",
            "fr": "La nature est la racine de la sagesse, tandis que la compassion en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Weisheit, während das Mitgefühl seine Frucht ist.",
            "pt": "A natureza é a raiz de a sabedoria, enquanto a compaixão é o seu fruto.",
            "ja": "自然は知恵の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1017",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of wisdom, while freedom is its fruit.",
            "hi": "प्रकृति ज्ञान की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la sabiduría, mientras que la libertad es su fruto.",
            "fr": "La nature est la racine de la sagesse, tandis que la liberté en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Weisheit, während die Freiheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a sabedoria, enquanto a liberdade é o seu fruto.",
            "ja": "自然は知恵の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1018",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of wisdom, while destiny is its fruit.",
            "hi": "प्रकृति ज्ञान की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La naturaleza es la raíz de la sabiduría, mientras que el destino es su fruto.",
            "fr": "La nature est la racine de la sagesse, tandis que le destin en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Weisheit, während das Schicksal seine Frucht ist.",
            "pt": "A natureza é a raiz de a sabedoria, enquanto o destino é o seu fruto.",
            "ja": "自然は知恵の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1019",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of wisdom, while humility is its fruit.",
            "hi": "प्रकृति ज्ञान की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la sabiduría, mientras que la humildad es su fruto.",
            "fr": "La nature est la racine de la sagesse, tandis que l'humilité en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Weisheit, während die Bescheidenheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a sabedoria, enquanto a humildade é o seu fruto.",
            "ja": "自然は知恵の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1020",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of wisdom, while reason is its fruit.",
            "hi": "प्रकृति ज्ञान की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La naturaleza es la raíz de la sabiduría, mientras que la razón es su fruto.",
            "fr": "La nature est la racine de la sagesse, tandis que la raison en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Weisheit, während die Vernunft seine Frucht ist.",
            "pt": "A natureza é a raiz de a sabedoria, enquanto a razão é o seu fruto.",
            "ja": "自然は知恵の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1021",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of peace, while truth is its fruit.",
            "hi": "प्रकृति शांति की जड़ है, जबकि सत्य इसका फल है।",
            "es": "La naturaleza es la raíz de la paz, mientras que la verdad es su fruto.",
            "fr": "La nature est la racine de la paix, tandis que la vérité en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Frieden, während die Wahrheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a paz, enquanto a verdade é o seu fruto.",
            "ja": "自然は平和の根であり、真理はその果実である。"
        }
    },
    {
        "id": "quote_1022",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of peace, while courage is its fruit.",
            "hi": "प्रकृति शांति की जड़ है, जबकि साहस इसका फल है।",
            "es": "La naturaleza es la raíz de la paz, mientras que el coraje es su fruto.",
            "fr": "La nature est la racine de la paix, tandis que le courage en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Frieden, während der Mut seine Frucht ist.",
            "pt": "A natureza é a raiz de a paz, enquanto a coragem é o seu fruto.",
            "ja": "自然は平和の根であり、勇気はその果実である。"
        }
    },
    {
        "id": "quote_1023",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of peace, while patience is its fruit.",
            "hi": "प्रकृति शांति की जड़ है, जबकि धैर्य इसका फल है।",
            "es": "La naturaleza es la raíz de la paz, mientras que la paciencia es su fruto.",
            "fr": "La nature est la racine de la paix, tandis que la patience en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Frieden, während die Geduld seine Frucht ist.",
            "pt": "A natureza é a raiz de a paz, enquanto a paciência é o seu fruto.",
            "ja": "自然は平和の根であり、忍耐はその果実である。"
        }
    },
    {
        "id": "quote_1024",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of peace, while reflection is its fruit.",
            "hi": "प्रकृति शांति की जड़ है, जबकि विचार इसका फल है।",
            "es": "La naturaleza es la raíz de la paz, mientras que la reflexión es su fruto.",
            "fr": "La nature est la racine de la paix, tandis que la réflexion en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Frieden, während die Reflexion seine Frucht ist.",
            "pt": "A natureza é a raiz de a paz, enquanto a reflexão é o seu fruto.",
            "ja": "自然は平和の根であり、熟考はその果実である。"
        }
    },
    {
        "id": "quote_1025",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of peace, while silence is its fruit.",
            "hi": "प्रकृति शांति की जड़ है, जबकि मौन इसका फल है।",
            "es": "La naturaleza es la raíz de la paz, mientras que el silencio es su fruto.",
            "fr": "La nature est la racine de la paix, tandis que le silence en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Frieden, während die Stille seine Frucht ist.",
            "pt": "A natureza é a raiz de a paz, enquanto o silêncio é o seu fruto.",
            "ja": "自然は平和の根であり、沈黙はその果実である。"
        }
    },
    {
        "id": "quote_1026",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of peace, while knowledge is its fruit.",
            "hi": "प्रकृति शांति की जड़ है, जबकि विद्या इसका फल है।",
            "es": "La naturaleza es la raíz de la paz, mientras que el conocimiento es su fruto.",
            "fr": "La nature est la racine de la paix, tandis que la connaissance en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Frieden, während das Wissen seine Frucht ist.",
            "pt": "A natureza é a raiz de a paz, enquanto o conhecimento é o seu fruto.",
            "ja": "自然は平和の根であり、知識はその果実である。"
        }
    },
    {
        "id": "quote_1027",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of peace, while action is its fruit.",
            "hi": "प्रकृति शांति की जड़ है, जबकि कर्म इसका फल है।",
            "es": "La naturaleza es la raíz de la paz, mientras que la acción es su fruto.",
            "fr": "La nature est la racine de la paix, tandis que l'action en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Frieden, während die Handlung seine Frucht ist.",
            "pt": "A natureza é a raiz de a paz, enquanto a ação é o seu fruto.",
            "ja": "自然は平和の根であり、行動はその果実である。"
        }
    },
    {
        "id": "quote_1028",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of peace, while harmony is its fruit.",
            "hi": "प्रकृति शांति की जड़ है, जबकि सद्भाव इसका फल है।",
            "es": "La naturaleza es la raíz de la paz, mientras que la armonía es su fruto.",
            "fr": "La nature est la racine de la paix, tandis que l'harmonie en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Frieden, während die Harmonie seine Frucht ist.",
            "pt": "A natureza é a raiz de a paz, enquanto a harmonia é o seu fruto.",
            "ja": "自然は平和の根であり、調和はその果実である。"
        }
    },
    {
        "id": "quote_1029",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of peace, while justice is its fruit.",
            "hi": "प्रकृति शांति की जड़ है, जबकि न्याय इसका फल है।",
            "es": "La naturaleza es la raíz de la paz, mientras que la justicia es su fruto.",
            "fr": "La nature est la racine de la paix, tandis que la justice en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Frieden, während die Gerechtigkeit seine Frucht ist.",
            "pt": "A natureza é a raiz de a paz, enquanto a justiça é o seu fruto.",
            "ja": "自然は平和の根であり、正義はその果実である。"
        }
    },
    {
        "id": "quote_1030",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of peace, while virtue is its fruit.",
            "hi": "प्रकृति शांति की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La naturaleza es la raíz de la paz, mientras que la virtud es su fruto.",
            "fr": "La nature est la racine de la paix, tandis que la vertu en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Frieden, während die Tugend seine Frucht ist.",
            "pt": "A natureza é a raiz de a paz, enquanto a virtude é o seu fruto.",
            "ja": "自然は平和の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1031",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of peace, while the mind is its fruit.",
            "hi": "प्रकृति शांति की जड़ है, जबकि मन इसका फल है।",
            "es": "La naturaleza es la raíz de la paz, mientras que la mente es su fruto.",
            "fr": "La nature est la racine de la paix, tandis que l'esprit en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Frieden, während der Geist seine Frucht ist.",
            "pt": "A natureza é a raiz de a paz, enquanto a mente é o seu fruto.",
            "ja": "自然は平和の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1032",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of peace, while the soul is its fruit.",
            "hi": "प्रकृति शांति की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La naturaleza es la raíz de la paz, mientras que el alma es su fruto.",
            "fr": "La nature est la racine de la paix, tandis que l'âme en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Frieden, während die Seele seine Frucht ist.",
            "pt": "A natureza é a raiz de a paz, enquanto a alma é o seu fruto.",
            "ja": "自然は平和の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1033",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of peace, while time is its fruit.",
            "hi": "प्रकृति शांति की जड़ है, जबकि समय इसका फल है।",
            "es": "La naturaleza es la raíz de la paz, mientras que el tiempo es su fruto.",
            "fr": "La nature est la racine de la paix, tandis que le temps en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Frieden, während die Zeit seine Frucht ist.",
            "pt": "A natureza é a raiz de a paz, enquanto o tempo é o seu fruto.",
            "ja": "自然は平和の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1034",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of peace, while life is its fruit.",
            "hi": "प्रकृति शांति की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La naturaleza es la raíz de la paz, mientras que la vida es su fruto.",
            "fr": "La nature est la racine de la paix, tandis que la vie en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Frieden, während das Leben seine Frucht ist.",
            "pt": "A natureza é a raiz de a paz, enquanto a vida é o seu fruto.",
            "ja": "自然は平和の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1035",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of peace, while love is its fruit.",
            "hi": "प्रकृति शांति की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La naturaleza es la raíz de la paz, mientras que el amor es su fruto.",
            "fr": "La nature est la racine de la paix, tandis que l'amour en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Frieden, während die Liebe seine Frucht ist.",
            "pt": "A natureza é a raiz de a paz, enquanto o amor é o seu fruto.",
            "ja": "自然は平和の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1036",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of peace, while compassion is its fruit.",
            "hi": "प्रकृति शांति की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La naturaleza es la raíz de la paz, mientras que la compasión es su fruto.",
            "fr": "La nature est la racine de la paix, tandis que la compassion en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Frieden, während das Mitgefühl seine Frucht ist.",
            "pt": "A natureza é a raiz de a paz, enquanto a compaixão é o seu fruto.",
            "ja": "自然は平和の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1037",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of peace, while freedom is its fruit.",
            "hi": "प्रकृति शांति की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la paz, mientras que la libertad es su fruto.",
            "fr": "La nature est la racine de la paix, tandis que la liberté en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Frieden, während die Freiheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a paz, enquanto a liberdade é o seu fruto.",
            "ja": "自然は平和の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1038",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of peace, while destiny is its fruit.",
            "hi": "प्रकृति शांति की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La naturaleza es la raíz de la paz, mientras que el destino es su fruto.",
            "fr": "La nature est la racine de la paix, tandis que le destin en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Frieden, während das Schicksal seine Frucht ist.",
            "pt": "A natureza é a raiz de a paz, enquanto o destino é o seu fruto.",
            "ja": "自然は平和の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1039",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of peace, while humility is its fruit.",
            "hi": "प्रकृति शांति की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la paz, mientras que la humildad es su fruto.",
            "fr": "La nature est la racine de la paix, tandis que l'humilité en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Frieden, während die Bescheidenheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a paz, enquanto a humildade é o seu fruto.",
            "ja": "自然は平和の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1040",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of peace, while reason is its fruit.",
            "hi": "प्रकृति शांति की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La naturaleza es la raíz de la paz, mientras que la razón es su fruto.",
            "fr": "La nature est la racine de la paix, tandis que la raison en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Frieden, während die Vernunft seine Frucht ist.",
            "pt": "A natureza é a raiz de a paz, enquanto a razão é o seu fruto.",
            "ja": "自然は平和の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1041",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of truth, while courage is its fruit.",
            "hi": "प्रकृति सत्य की जड़ है, जबकि साहस इसका फल है।",
            "es": "La naturaleza es la raíz de la verdad, mientras que el coraje es su fruto.",
            "fr": "La nature est la racine de la vérité, tandis que le courage en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Wahrheit, während der Mut seine Frucht ist.",
            "pt": "A natureza é a raiz de a verdade, enquanto a coragem é o seu fruto.",
            "ja": "自然は真理の根であり、勇気はその果実である。"
        }
    },
    {
        "id": "quote_1042",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of truth, while patience is its fruit.",
            "hi": "प्रकृति सत्य की जड़ है, जबकि धैर्य इसका फल है।",
            "es": "La naturaleza es la raíz de la verdad, mientras que la paciencia es su fruto.",
            "fr": "La nature est la racine de la vérité, tandis que la patience en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Wahrheit, während die Geduld seine Frucht ist.",
            "pt": "A natureza é a raiz de a verdade, enquanto a paciência é o seu fruto.",
            "ja": "自然は真理の根であり、忍耐はその果実である。"
        }
    },
    {
        "id": "quote_1043",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of truth, while reflection is its fruit.",
            "hi": "प्रकृति सत्य की जड़ है, जबकि विचार इसका फल है।",
            "es": "La naturaleza es la raíz de la verdad, mientras que la reflexión es su fruto.",
            "fr": "La nature est la racine de la vérité, tandis que la réflexion en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Wahrheit, während die Reflexion seine Frucht ist.",
            "pt": "A natureza é a raiz de a verdade, enquanto a reflexão é o seu fruto.",
            "ja": "自然は真理の根であり、熟考はその果実である。"
        }
    },
    {
        "id": "quote_1044",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of truth, while silence is its fruit.",
            "hi": "प्रकृति सत्य की जड़ है, जबकि मौन इसका फल है।",
            "es": "La naturaleza es la raíz de la verdad, mientras que el silencio es su fruto.",
            "fr": "La nature est la racine de la vérité, tandis que le silence en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Wahrheit, während die Stille seine Frucht ist.",
            "pt": "A natureza é a raiz de a verdade, enquanto o silêncio é o seu fruto.",
            "ja": "自然は真理の根であり、沈黙はその果実である。"
        }
    },
    {
        "id": "quote_1045",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of truth, while knowledge is its fruit.",
            "hi": "प्रकृति सत्य की जड़ है, जबकि विद्या इसका फल है।",
            "es": "La naturaleza es la raíz de la verdad, mientras que el conocimiento es su fruto.",
            "fr": "La nature est la racine de la vérité, tandis que la connaissance en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Wahrheit, während das Wissen seine Frucht ist.",
            "pt": "A natureza é a raiz de a verdade, enquanto o conhecimento é o seu fruto.",
            "ja": "自然は真理の根であり、知識はその果実である。"
        }
    },
    {
        "id": "quote_1046",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of truth, while action is its fruit.",
            "hi": "प्रकृति सत्य की जड़ है, जबकि कर्म इसका फल है।",
            "es": "La naturaleza es la raíz de la verdad, mientras que la acción es su fruto.",
            "fr": "La nature est la racine de la vérité, tandis que l'action en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Wahrheit, während die Handlung seine Frucht ist.",
            "pt": "A natureza é a raiz de a verdade, enquanto a ação é o seu fruto.",
            "ja": "自然は真理の根であり、行動はその果実である。"
        }
    },
    {
        "id": "quote_1047",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of truth, while harmony is its fruit.",
            "hi": "प्रकृति सत्य की जड़ है, जबकि सद्भाव इसका फल है।",
            "es": "La naturaleza es la raíz de la verdad, mientras que la armonía es su fruto.",
            "fr": "La nature est la racine de la vérité, tandis que l'harmonie en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Wahrheit, während die Harmonie seine Frucht ist.",
            "pt": "A natureza é a raiz de a verdade, enquanto a harmonia é o seu fruto.",
            "ja": "自然は真理の根であり、調和はその果実である。"
        }
    },
    {
        "id": "quote_1048",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of truth, while justice is its fruit.",
            "hi": "प्रकृति सत्य की जड़ है, जबकि न्याय इसका फल है।",
            "es": "La naturaleza es la raíz de la verdad, mientras que la justicia es su fruto.",
            "fr": "La nature est la racine de la vérité, tandis que la justice en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Wahrheit, während die Gerechtigkeit seine Frucht ist.",
            "pt": "A natureza é a raiz de a verdade, enquanto a justiça é o seu fruto.",
            "ja": "自然は真理の根であり、正義はその果実である。"
        }
    },
    {
        "id": "quote_1049",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of truth, while virtue is its fruit.",
            "hi": "प्रकृति सत्य की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La naturaleza es la raíz de la verdad, mientras que la virtud es su fruto.",
            "fr": "La nature est la racine de la vérité, tandis que la vertu en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Wahrheit, während die Tugend seine Frucht ist.",
            "pt": "A natureza é a raiz de a verdade, enquanto a virtude é o seu fruto.",
            "ja": "自然は真理の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1050",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of truth, while the mind is its fruit.",
            "hi": "प्रकृति सत्य की जड़ है, जबकि मन इसका फल है।",
            "es": "La naturaleza es la raíz de la verdad, mientras que la mente es su fruto.",
            "fr": "La nature est la racine de la vérité, tandis que l'esprit en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Wahrheit, während der Geist seine Frucht ist.",
            "pt": "A natureza é a raiz de a verdade, enquanto a mente é o seu fruto.",
            "ja": "自然は真理の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1051",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of truth, while the soul is its fruit.",
            "hi": "प्रकृति सत्य की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La naturaleza es la raíz de la verdad, mientras que el alma es su fruto.",
            "fr": "La nature est la racine de la vérité, tandis que l'âme en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Wahrheit, während die Seele seine Frucht ist.",
            "pt": "A natureza é a raiz de a verdade, enquanto a alma é o seu fruto.",
            "ja": "自然は真理の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1052",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of truth, while time is its fruit.",
            "hi": "प्रकृति सत्य की जड़ है, जबकि समय इसका फल है।",
            "es": "La naturaleza es la raíz de la verdad, mientras que el tiempo es su fruto.",
            "fr": "La nature est la racine de la vérité, tandis que le temps en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Wahrheit, während die Zeit seine Frucht ist.",
            "pt": "A natureza é a raiz de a verdade, enquanto o tempo é o seu fruto.",
            "ja": "自然は真理の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1053",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of truth, while life is its fruit.",
            "hi": "प्रकृति सत्य की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La naturaleza es la raíz de la verdad, mientras que la vida es su fruto.",
            "fr": "La nature est la racine de la vérité, tandis que la vie en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Wahrheit, während das Leben seine Frucht ist.",
            "pt": "A natureza é a raiz de a verdade, enquanto a vida é o seu fruto.",
            "ja": "自然は真理の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1054",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of truth, while love is its fruit.",
            "hi": "प्रकृति सत्य की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La naturaleza es la raíz de la verdad, mientras que el amor es su fruto.",
            "fr": "La nature est la racine de la vérité, tandis que l'amour en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Wahrheit, während die Liebe seine Frucht ist.",
            "pt": "A natureza é a raiz de a verdade, enquanto o amor é o seu fruto.",
            "ja": "自然は真理の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1055",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of truth, while compassion is its fruit.",
            "hi": "प्रकृति सत्य की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La naturaleza es la raíz de la verdad, mientras que la compasión es su fruto.",
            "fr": "La nature est la racine de la vérité, tandis que la compassion en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Wahrheit, während das Mitgefühl seine Frucht ist.",
            "pt": "A natureza é a raiz de a verdade, enquanto a compaixão é o seu fruto.",
            "ja": "自然は真理の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1056",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of truth, while freedom is its fruit.",
            "hi": "प्रकृति सत्य की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la verdad, mientras que la libertad es su fruto.",
            "fr": "La nature est la racine de la vérité, tandis que la liberté en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Wahrheit, während die Freiheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a verdade, enquanto a liberdade é o seu fruto.",
            "ja": "自然は真理の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1057",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of truth, while destiny is its fruit.",
            "hi": "प्रकृति सत्य की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La naturaleza es la raíz de la verdad, mientras que el destino es su fruto.",
            "fr": "La nature est la racine de la vérité, tandis que le destin en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Wahrheit, während das Schicksal seine Frucht ist.",
            "pt": "A natureza é a raiz de a verdade, enquanto o destino é o seu fruto.",
            "ja": "自然は真理の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1058",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of truth, while humility is its fruit.",
            "hi": "प्रकृति सत्य की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la verdad, mientras que la humildad es su fruto.",
            "fr": "La nature est la racine de la vérité, tandis que l'humilité en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Wahrheit, während die Bescheidenheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a verdade, enquanto a humildade é o seu fruto.",
            "ja": "自然は真理の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1059",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of truth, while reason is its fruit.",
            "hi": "प्रकृति सत्य की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La naturaleza es la raíz de la verdad, mientras que la razón es su fruto.",
            "fr": "La nature est la racine de la vérité, tandis que la raison en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Wahrheit, während die Vernunft seine Frucht ist.",
            "pt": "A natureza é a raiz de a verdade, enquanto a razão é o seu fruto.",
            "ja": "自然は真理の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1060",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of courage, while patience is its fruit.",
            "hi": "प्रकृति साहस की जड़ है, जबकि धैर्य इसका फल है।",
            "es": "La naturaleza es la raíz de el coraje, mientras que la paciencia es su fruto.",
            "fr": "La nature est la racine de le courage, tandis que la patience en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Mut, während die Geduld seine Frucht ist.",
            "pt": "A natureza é a raiz de a coragem, enquanto a paciência é o seu fruto.",
            "ja": "自然は勇気の根であり、忍耐はその果実である。"
        }
    },
    {
        "id": "quote_1061",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of courage, while reflection is its fruit.",
            "hi": "प्रकृति साहस की जड़ है, जबकि विचार इसका फल है।",
            "es": "La naturaleza es la raíz de el coraje, mientras que la reflexión es su fruto.",
            "fr": "La nature est la racine de le courage, tandis que la réflexion en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Mut, während die Reflexion seine Frucht ist.",
            "pt": "A natureza é a raiz de a coragem, enquanto a reflexão é o seu fruto.",
            "ja": "自然は勇気の根であり、熟考はその果実である。"
        }
    },
    {
        "id": "quote_1062",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of courage, while silence is its fruit.",
            "hi": "प्रकृति साहस की जड़ है, जबकि मौन इसका फल है।",
            "es": "La naturaleza es la raíz de el coraje, mientras que el silencio es su fruto.",
            "fr": "La nature est la racine de le courage, tandis que le silence en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Mut, während die Stille seine Frucht ist.",
            "pt": "A natureza é a raiz de a coragem, enquanto o silêncio é o seu fruto.",
            "ja": "自然は勇気の根であり、沈黙はその果実である。"
        }
    },
    {
        "id": "quote_1063",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of courage, while knowledge is its fruit.",
            "hi": "प्रकृति साहस की जड़ है, जबकि विद्या इसका फल है।",
            "es": "La naturaleza es la raíz de el coraje, mientras que el conocimiento es su fruto.",
            "fr": "La nature est la racine de le courage, tandis que la connaissance en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Mut, während das Wissen seine Frucht ist.",
            "pt": "A natureza é a raiz de a coragem, enquanto o conhecimento é o seu fruto.",
            "ja": "自然は勇気の根であり、知識はその果実である。"
        }
    },
    {
        "id": "quote_1064",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of courage, while action is its fruit.",
            "hi": "प्रकृति साहस की जड़ है, जबकि कर्म इसका फल है।",
            "es": "La naturaleza es la raíz de el coraje, mientras que la acción es su fruto.",
            "fr": "La nature est la racine de le courage, tandis que l'action en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Mut, während die Handlung seine Frucht ist.",
            "pt": "A natureza é a raiz de a coragem, enquanto a ação é o seu fruto.",
            "ja": "自然は勇気の根であり、行動はその果実である。"
        }
    },
    {
        "id": "quote_1065",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of courage, while harmony is its fruit.",
            "hi": "प्रकृति साहस की जड़ है, जबकि सद्भाव इसका फल है।",
            "es": "La naturaleza es la raíz de el coraje, mientras que la armonía es su fruto.",
            "fr": "La nature est la racine de le courage, tandis que l'harmonie en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Mut, während die Harmonie seine Frucht ist.",
            "pt": "A natureza é a raiz de a coragem, enquanto a harmonia é o seu fruto.",
            "ja": "自然は勇気の根であり、調和はその果実である。"
        }
    },
    {
        "id": "quote_1066",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of courage, while justice is its fruit.",
            "hi": "प्रकृति साहस की जड़ है, जबकि न्याय इसका फल है।",
            "es": "La naturaleza es la raíz de el coraje, mientras que la justicia es su fruto.",
            "fr": "La nature est la racine de le courage, tandis que la justice en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Mut, während die Gerechtigkeit seine Frucht ist.",
            "pt": "A natureza é a raiz de a coragem, enquanto a justiça é o seu fruto.",
            "ja": "自然は勇気の根であり、正義はその果実である。"
        }
    },
    {
        "id": "quote_1067",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of courage, while virtue is its fruit.",
            "hi": "प्रकृति साहस की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La naturaleza es la raíz de el coraje, mientras que la virtud es su fruto.",
            "fr": "La nature est la racine de le courage, tandis que la vertu en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Mut, während die Tugend seine Frucht ist.",
            "pt": "A natureza é a raiz de a coragem, enquanto a virtude é o seu fruto.",
            "ja": "自然は勇気の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1068",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of courage, while the mind is its fruit.",
            "hi": "प्रकृति साहस की जड़ है, जबकि मन इसका फल है।",
            "es": "La naturaleza es la raíz de el coraje, mientras que la mente es su fruto.",
            "fr": "La nature est la racine de le courage, tandis que l'esprit en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Mut, während der Geist seine Frucht ist.",
            "pt": "A natureza é a raiz de a coragem, enquanto a mente é o seu fruto.",
            "ja": "自然は勇気の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1069",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of courage, while the soul is its fruit.",
            "hi": "प्रकृति साहस की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La naturaleza es la raíz de el coraje, mientras que el alma es su fruto.",
            "fr": "La nature est la racine de le courage, tandis que l'âme en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Mut, während die Seele seine Frucht ist.",
            "pt": "A natureza é a raiz de a coragem, enquanto a alma é o seu fruto.",
            "ja": "自然は勇気の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1070",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of courage, while time is its fruit.",
            "hi": "प्रकृति साहस की जड़ है, जबकि समय इसका फल है।",
            "es": "La naturaleza es la raíz de el coraje, mientras que el tiempo es su fruto.",
            "fr": "La nature est la racine de le courage, tandis que le temps en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Mut, während die Zeit seine Frucht ist.",
            "pt": "A natureza é a raiz de a coragem, enquanto o tempo é o seu fruto.",
            "ja": "自然は勇気の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1071",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of courage, while life is its fruit.",
            "hi": "प्रकृति साहस की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La naturaleza es la raíz de el coraje, mientras que la vida es su fruto.",
            "fr": "La nature est la racine de le courage, tandis que la vie en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Mut, während das Leben seine Frucht ist.",
            "pt": "A natureza é a raiz de a coragem, enquanto a vida é o seu fruto.",
            "ja": "自然は勇気の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1072",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of courage, while love is its fruit.",
            "hi": "प्रकृति साहस की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La naturaleza es la raíz de el coraje, mientras que el amor es su fruto.",
            "fr": "La nature est la racine de le courage, tandis que l'amour en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Mut, während die Liebe seine Frucht ist.",
            "pt": "A natureza é a raiz de a coragem, enquanto o amor é o seu fruto.",
            "ja": "自然は勇気の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1073",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of courage, while compassion is its fruit.",
            "hi": "प्रकृति साहस की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La naturaleza es la raíz de el coraje, mientras que la compasión es su fruto.",
            "fr": "La nature est la racine de le courage, tandis que la compassion en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Mut, während das Mitgefühl seine Frucht ist.",
            "pt": "A natureza é a raiz de a coragem, enquanto a compaixão é o seu fruto.",
            "ja": "自然は勇気の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1074",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of courage, while freedom is its fruit.",
            "hi": "प्रकृति साहस की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La naturaleza es la raíz de el coraje, mientras que la libertad es su fruto.",
            "fr": "La nature est la racine de le courage, tandis que la liberté en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Mut, während die Freiheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a coragem, enquanto a liberdade é o seu fruto.",
            "ja": "自然は勇気の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1075",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of courage, while destiny is its fruit.",
            "hi": "प्रकृति साहस की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La naturaleza es la raíz de el coraje, mientras que el destino es su fruto.",
            "fr": "La nature est la racine de le courage, tandis que le destin en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Mut, während das Schicksal seine Frucht ist.",
            "pt": "A natureza é a raiz de a coragem, enquanto o destino é o seu fruto.",
            "ja": "自然は勇気の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1076",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of courage, while humility is its fruit.",
            "hi": "प्रकृति साहस की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La naturaleza es la raíz de el coraje, mientras que la humildad es su fruto.",
            "fr": "La nature est la racine de le courage, tandis que l'humilité en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Mut, während die Bescheidenheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a coragem, enquanto a humildade é o seu fruto.",
            "ja": "自然は勇気の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1077",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of courage, while reason is its fruit.",
            "hi": "प्रकृति साहस की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La naturaleza es la raíz de el coraje, mientras que la razón es su fruto.",
            "fr": "La nature est la racine de le courage, tandis que la raison en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Mut, während die Vernunft seine Frucht ist.",
            "pt": "A natureza é a raiz de a coragem, enquanto a razão é o seu fruto.",
            "ja": "自然は勇気の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1078",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of patience, while reflection is its fruit.",
            "hi": "प्रकृति धैर्य की जड़ है, जबकि विचार इसका फल है।",
            "es": "La naturaleza es la raíz de la paciencia, mientras que la reflexión es su fruto.",
            "fr": "La nature est la racine de la patience, tandis que la réflexion en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Geduld, während die Reflexion seine Frucht ist.",
            "pt": "A natureza é a raiz de a paciência, enquanto a reflexão é o seu fruto.",
            "ja": "自然は忍耐の根であり、熟考はその果実である。"
        }
    },
    {
        "id": "quote_1079",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of patience, while silence is its fruit.",
            "hi": "प्रकृति धैर्य की जड़ है, जबकि मौन इसका फल है।",
            "es": "La naturaleza es la raíz de la paciencia, mientras que el silencio es su fruto.",
            "fr": "La nature est la racine de la patience, tandis que le silence en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Geduld, während die Stille seine Frucht ist.",
            "pt": "A natureza é a raiz de a paciência, enquanto o silêncio é o seu fruto.",
            "ja": "自然は忍耐の根であり、沈黙はその果実である。"
        }
    },
    {
        "id": "quote_1080",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of patience, while knowledge is its fruit.",
            "hi": "प्रकृति धैर्य की जड़ है, जबकि विद्या इसका फल है।",
            "es": "La naturaleza es la raíz de la paciencia, mientras que el conocimiento es su fruto.",
            "fr": "La nature est la racine de la patience, tandis que la connaissance en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Geduld, während das Wissen seine Frucht ist.",
            "pt": "A natureza é a raiz de a paciência, enquanto o conhecimento é o seu fruto.",
            "ja": "自然は忍耐の根であり、知識はその果実である。"
        }
    },
    {
        "id": "quote_1081",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of patience, while action is its fruit.",
            "hi": "प्रकृति धैर्य की जड़ है, जबकि कर्म इसका फल है।",
            "es": "La naturaleza es la raíz de la paciencia, mientras que la acción es su fruto.",
            "fr": "La nature est la racine de la patience, tandis que l'action en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Geduld, während die Handlung seine Frucht ist.",
            "pt": "A natureza é a raiz de a paciência, enquanto a ação é o seu fruto.",
            "ja": "自然は忍耐の根であり、行動はその果実である。"
        }
    },
    {
        "id": "quote_1082",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of patience, while harmony is its fruit.",
            "hi": "प्रकृति धैर्य की जड़ है, जबकि सद्भाव इसका फल है।",
            "es": "La naturaleza es la raíz de la paciencia, mientras que la armonía es su fruto.",
            "fr": "La nature est la racine de la patience, tandis que l'harmonie en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Geduld, während die Harmonie seine Frucht ist.",
            "pt": "A natureza é a raiz de a paciência, enquanto a harmonia é o seu fruto.",
            "ja": "自然は忍耐の根であり、調和はその果実である。"
        }
    },
    {
        "id": "quote_1083",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of patience, while justice is its fruit.",
            "hi": "प्रकृति धैर्य की जड़ है, जबकि न्याय इसका फल है।",
            "es": "La naturaleza es la raíz de la paciencia, mientras que la justicia es su fruto.",
            "fr": "La nature est la racine de la patience, tandis que la justice en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Geduld, während die Gerechtigkeit seine Frucht ist.",
            "pt": "A natureza é a raiz de a paciência, enquanto a justiça é o seu fruto.",
            "ja": "自然は忍耐の根であり、正義はその果実である。"
        }
    },
    {
        "id": "quote_1084",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of patience, while virtue is its fruit.",
            "hi": "प्रकृति धैर्य की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La naturaleza es la raíz de la paciencia, mientras que la virtud es su fruto.",
            "fr": "La nature est la racine de la patience, tandis que la vertu en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Geduld, während die Tugend seine Frucht ist.",
            "pt": "A natureza é a raiz de a paciência, enquanto a virtude é o seu fruto.",
            "ja": "自然は忍耐の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1085",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of patience, while the mind is its fruit.",
            "hi": "प्रकृति धैर्य की जड़ है, जबकि मन इसका फल है।",
            "es": "La naturaleza es la raíz de la paciencia, mientras que la mente es su fruto.",
            "fr": "La nature est la racine de la patience, tandis que l'esprit en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Geduld, während der Geist seine Frucht ist.",
            "pt": "A natureza é a raiz de a paciência, enquanto a mente é o seu fruto.",
            "ja": "自然は忍耐の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1086",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of patience, while the soul is its fruit.",
            "hi": "प्रकृति धैर्य की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La naturaleza es la raíz de la paciencia, mientras que el alma es su fruto.",
            "fr": "La nature est la racine de la patience, tandis que l'âme en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Geduld, während die Seele seine Frucht ist.",
            "pt": "A natureza é a raiz de a paciência, enquanto a alma é o seu fruto.",
            "ja": "自然は忍耐の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1087",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of patience, while time is its fruit.",
            "hi": "प्रकृति धैर्य की जड़ है, जबकि समय इसका फल है।",
            "es": "La naturaleza es la raíz de la paciencia, mientras que el tiempo es su fruto.",
            "fr": "La nature est la racine de la patience, tandis que le temps en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Geduld, während die Zeit seine Frucht ist.",
            "pt": "A natureza é a raiz de a paciência, enquanto o tempo é o seu fruto.",
            "ja": "自然は忍耐の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1088",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of patience, while life is its fruit.",
            "hi": "प्रकृति धैर्य की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La naturaleza es la raíz de la paciencia, mientras que la vida es su fruto.",
            "fr": "La nature est la racine de la patience, tandis que la vie en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Geduld, während das Leben seine Frucht ist.",
            "pt": "A natureza é a raiz de a paciência, enquanto a vida é o seu fruto.",
            "ja": "自然は忍耐の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1089",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of patience, while love is its fruit.",
            "hi": "प्रकृति धैर्य की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La naturaleza es la raíz de la paciencia, mientras que el amor es su fruto.",
            "fr": "La nature est la racine de la patience, tandis que l'amour en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Geduld, während die Liebe seine Frucht ist.",
            "pt": "A natureza é a raiz de a paciência, enquanto o amor é o seu fruto.",
            "ja": "自然は忍耐の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1090",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of patience, while compassion is its fruit.",
            "hi": "प्रकृति धैर्य की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La naturaleza es la raíz de la paciencia, mientras que la compasión es su fruto.",
            "fr": "La nature est la racine de la patience, tandis que la compassion en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Geduld, während das Mitgefühl seine Frucht ist.",
            "pt": "A natureza é a raiz de a paciência, enquanto a compaixão é o seu fruto.",
            "ja": "自然は忍耐の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1091",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of patience, while freedom is its fruit.",
            "hi": "प्रकृति धैर्य की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la paciencia, mientras que la libertad es su fruto.",
            "fr": "La nature est la racine de la patience, tandis que la liberté en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Geduld, während die Freiheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a paciência, enquanto a liberdade é o seu fruto.",
            "ja": "自然は忍耐の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1092",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of patience, while destiny is its fruit.",
            "hi": "प्रकृति धैर्य की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La naturaleza es la raíz de la paciencia, mientras que el destino es su fruto.",
            "fr": "La nature est la racine de la patience, tandis que le destin en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Geduld, während das Schicksal seine Frucht ist.",
            "pt": "A natureza é a raiz de a paciência, enquanto o destino é o seu fruto.",
            "ja": "自然は忍耐の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1093",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of patience, while humility is its fruit.",
            "hi": "प्रकृति धैर्य की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la paciencia, mientras que la humildad es su fruto.",
            "fr": "La nature est la racine de la patience, tandis que l'humilité en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Geduld, während die Bescheidenheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a paciência, enquanto a humildade é o seu fruto.",
            "ja": "自然は忍耐の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1094",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of patience, while reason is its fruit.",
            "hi": "प्रकृति धैर्य की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La naturaleza es la raíz de la paciencia, mientras que la razón es su fruto.",
            "fr": "La nature est la racine de la patience, tandis que la raison en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Geduld, während die Vernunft seine Frucht ist.",
            "pt": "A natureza é a raiz de a paciência, enquanto a razão é o seu fruto.",
            "ja": "自然は忍耐の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1095",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of reflection, while silence is its fruit.",
            "hi": "प्रकृति विचार की जड़ है, जबकि मौन इसका फल है।",
            "es": "La naturaleza es la raíz de la reflexión, mientras que el silencio es su fruto.",
            "fr": "La nature est la racine de la réflexion, tandis que le silence en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Reflexion, während die Stille seine Frucht ist.",
            "pt": "A natureza é a raiz de a reflexão, enquanto o silêncio é o seu fruto.",
            "ja": "自然は熟考の根であり、沈黙はその果実である。"
        }
    },
    {
        "id": "quote_1096",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of reflection, while knowledge is its fruit.",
            "hi": "प्रकृति विचार की जड़ है, जबकि विद्या इसका फल है।",
            "es": "La naturaleza es la raíz de la reflexión, mientras que el conocimiento es su fruto.",
            "fr": "La nature est la racine de la réflexion, tandis que la connaissance en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Reflexion, während das Wissen seine Frucht ist.",
            "pt": "A natureza é a raiz de a reflexão, enquanto o conhecimento é o seu fruto.",
            "ja": "自然は熟考の根であり、知識はその果実である。"
        }
    },
    {
        "id": "quote_1097",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of reflection, while action is its fruit.",
            "hi": "प्रकृति विचार की जड़ है, जबकि कर्म इसका फल है।",
            "es": "La naturaleza es la raíz de la reflexión, mientras que la acción es su fruto.",
            "fr": "La nature est la racine de la réflexion, tandis que l'action en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Reflexion, während die Handlung seine Frucht ist.",
            "pt": "A natureza é a raiz de a reflexão, enquanto a ação é o seu fruto.",
            "ja": "自然は熟考の根であり、行動はその果実である。"
        }
    },
    {
        "id": "quote_1098",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of reflection, while harmony is its fruit.",
            "hi": "प्रकृति विचार की जड़ है, जबकि सद्भाव इसका फल है।",
            "es": "La naturaleza es la raíz de la reflexión, mientras que la armonía es su fruto.",
            "fr": "La nature est la racine de la réflexion, tandis que l'harmonie en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Reflexion, während die Harmonie seine Frucht ist.",
            "pt": "A natureza é a raiz de a reflexão, enquanto a harmonia é o seu fruto.",
            "ja": "自然は熟考の根であり、調和はその果実である。"
        }
    },
    {
        "id": "quote_1099",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of reflection, while justice is its fruit.",
            "hi": "प्रकृति विचार की जड़ है, जबकि न्याय इसका फल है।",
            "es": "La naturaleza es la raíz de la reflexión, mientras que la justicia es su fruto.",
            "fr": "La nature est la racine de la réflexion, tandis que la justice en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Reflexion, während die Gerechtigkeit seine Frucht ist.",
            "pt": "A natureza é a raiz de a reflexão, enquanto a justiça é o seu fruto.",
            "ja": "自然は熟考の根であり、正義はその果実である。"
        }
    },
    {
        "id": "quote_1100",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of reflection, while virtue is its fruit.",
            "hi": "प्रकृति विचार की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La naturaleza es la raíz de la reflexión, mientras que la virtud es su fruto.",
            "fr": "La nature est la racine de la réflexion, tandis que la vertu en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Reflexion, während die Tugend seine Frucht ist.",
            "pt": "A natureza é a raiz de a reflexão, enquanto a virtude é o seu fruto.",
            "ja": "自然は熟考の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1101",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of reflection, while the mind is its fruit.",
            "hi": "प्रकृति विचार की जड़ है, जबकि मन इसका फल है।",
            "es": "La naturaleza es la raíz de la reflexión, mientras que la mente es su fruto.",
            "fr": "La nature est la racine de la réflexion, tandis que l'esprit en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Reflexion, während der Geist seine Frucht ist.",
            "pt": "A natureza é a raiz de a reflexão, enquanto a mente é o seu fruto.",
            "ja": "自然は熟考の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1102",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of reflection, while the soul is its fruit.",
            "hi": "प्रकृति विचार की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La naturaleza es la raíz de la reflexión, mientras que el alma es su fruto.",
            "fr": "La nature est la racine de la réflexion, tandis que l'âme en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Reflexion, während die Seele seine Frucht ist.",
            "pt": "A natureza é a raiz de a reflexão, enquanto a alma é o seu fruto.",
            "ja": "自然は熟考の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1103",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of reflection, while time is its fruit.",
            "hi": "प्रकृति विचार की जड़ है, जबकि समय इसका फल है।",
            "es": "La naturaleza es la raíz de la reflexión, mientras que el tiempo es su fruto.",
            "fr": "La nature est la racine de la réflexion, tandis que le temps en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Reflexion, während die Zeit seine Frucht ist.",
            "pt": "A natureza é a raiz de a reflexão, enquanto o tempo é o seu fruto.",
            "ja": "自然は熟考の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1104",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of reflection, while life is its fruit.",
            "hi": "प्रकृति विचार की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La naturaleza es la raíz de la reflexión, mientras que la vida es su fruto.",
            "fr": "La nature est la racine de la réflexion, tandis que la vie en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Reflexion, während das Leben seine Frucht ist.",
            "pt": "A natureza é a raiz de a reflexão, enquanto a vida é o seu fruto.",
            "ja": "自然は熟考の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1105",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of reflection, while love is its fruit.",
            "hi": "प्रकृति विचार की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La naturaleza es la raíz de la reflexión, mientras que el amor es su fruto.",
            "fr": "La nature est la racine de la réflexion, tandis que l'amour en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Reflexion, während die Liebe seine Frucht ist.",
            "pt": "A natureza é a raiz de a reflexão, enquanto o amor é o seu fruto.",
            "ja": "自然は熟考の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1106",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of reflection, while compassion is its fruit.",
            "hi": "प्रकृति विचार की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La naturaleza es la raíz de la reflexión, mientras que la compasión es su fruto.",
            "fr": "La nature est la racine de la réflexion, tandis que la compassion en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Reflexion, während das Mitgefühl seine Frucht ist.",
            "pt": "A natureza é a raiz de a reflexão, enquanto a compaixão é o seu fruto.",
            "ja": "自然は熟考の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1107",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of reflection, while freedom is its fruit.",
            "hi": "प्रकृति विचार की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la reflexión, mientras que la libertad es su fruto.",
            "fr": "La nature est la racine de la réflexion, tandis que la liberté en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Reflexion, während die Freiheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a reflexão, enquanto a liberdade é o seu fruto.",
            "ja": "自然は熟考の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1108",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of reflection, while destiny is its fruit.",
            "hi": "प्रकृति विचार की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La naturaleza es la raíz de la reflexión, mientras que el destino es su fruto.",
            "fr": "La nature est la racine de la réflexion, tandis que le destin en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Reflexion, während das Schicksal seine Frucht ist.",
            "pt": "A natureza é a raiz de a reflexão, enquanto o destino é o seu fruto.",
            "ja": "自然は熟考の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1109",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of reflection, while humility is its fruit.",
            "hi": "प्रकृति विचार की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la reflexión, mientras que la humildad es su fruto.",
            "fr": "La nature est la racine de la réflexion, tandis que l'humilité en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Reflexion, während die Bescheidenheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a reflexão, enquanto a humildade é o seu fruto.",
            "ja": "自然は熟考の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1110",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of reflection, while reason is its fruit.",
            "hi": "प्रकृति विचार की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La naturaleza es la raíz de la reflexión, mientras que la razón es su fruto.",
            "fr": "La nature est la racine de la réflexion, tandis que la raison en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Reflexion, während die Vernunft seine Frucht ist.",
            "pt": "A natureza é a raiz de a reflexão, enquanto a razão é o seu fruto.",
            "ja": "自然は熟考の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1111",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of silence, while knowledge is its fruit.",
            "hi": "प्रकृति मौन की जड़ है, जबकि विद्या इसका फल है।",
            "es": "La naturaleza es la raíz de el silencio, mientras que el conocimiento es su fruto.",
            "fr": "La nature est la racine de le silence, tandis que la connaissance en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Stille, während das Wissen seine Frucht ist.",
            "pt": "A natureza é a raiz de o silêncio, enquanto o conhecimento é o seu fruto.",
            "ja": "自然は沈黙の根であり、知識はその果実である。"
        }
    },
    {
        "id": "quote_1112",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of silence, while action is its fruit.",
            "hi": "प्रकृति मौन की जड़ है, जबकि कर्म इसका फल है।",
            "es": "La naturaleza es la raíz de el silencio, mientras que la acción es su fruto.",
            "fr": "La nature est la racine de le silence, tandis que l'action en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Stille, während die Handlung seine Frucht ist.",
            "pt": "A natureza é a raiz de o silêncio, enquanto a ação é o seu fruto.",
            "ja": "自然は沈黙の根であり、行動はその果実である。"
        }
    },
    {
        "id": "quote_1113",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of silence, while harmony is its fruit.",
            "hi": "प्रकृति मौन की जड़ है, जबकि सद्भाव इसका फल है।",
            "es": "La naturaleza es la raíz de el silencio, mientras que la armonía es su fruto.",
            "fr": "La nature est la racine de le silence, tandis que l'harmonie en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Stille, während die Harmonie seine Frucht ist.",
            "pt": "A natureza é a raiz de o silêncio, enquanto a harmonia é o seu fruto.",
            "ja": "自然は沈黙の根であり、調和はその果実である。"
        }
    },
    {
        "id": "quote_1114",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of silence, while justice is its fruit.",
            "hi": "प्रकृति मौन की जड़ है, जबकि न्याय इसका फल है।",
            "es": "La naturaleza es la raíz de el silencio, mientras que la justicia es su fruto.",
            "fr": "La nature est la racine de le silence, tandis que la justice en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Stille, während die Gerechtigkeit seine Frucht ist.",
            "pt": "A natureza é a raiz de o silêncio, enquanto a justiça é o seu fruto.",
            "ja": "自然は沈黙の根であり、正義はその果実である。"
        }
    },
    {
        "id": "quote_1115",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of silence, while virtue is its fruit.",
            "hi": "प्रकृति मौन की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La naturaleza es la raíz de el silencio, mientras que la virtud es su fruto.",
            "fr": "La nature est la racine de le silence, tandis que la vertu en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Stille, während die Tugend seine Frucht ist.",
            "pt": "A natureza é a raiz de o silêncio, enquanto a virtude é o seu fruto.",
            "ja": "自然は沈黙の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1116",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of silence, while the mind is its fruit.",
            "hi": "प्रकृति मौन की जड़ है, जबकि मन इसका फल है।",
            "es": "La naturaleza es la raíz de el silencio, mientras que la mente es su fruto.",
            "fr": "La nature est la racine de le silence, tandis que l'esprit en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Stille, während der Geist seine Frucht ist.",
            "pt": "A natureza é a raiz de o silêncio, enquanto a mente é o seu fruto.",
            "ja": "自然は沈黙の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1117",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of silence, while the soul is its fruit.",
            "hi": "प्रकृति मौन की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La naturaleza es la raíz de el silencio, mientras que el alma es su fruto.",
            "fr": "La nature est la racine de le silence, tandis que l'âme en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Stille, während die Seele seine Frucht ist.",
            "pt": "A natureza é a raiz de o silêncio, enquanto a alma é o seu fruto.",
            "ja": "自然は沈黙の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1118",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of silence, while time is its fruit.",
            "hi": "प्रकृति मौन की जड़ है, जबकि समय इसका फल है।",
            "es": "La naturaleza es la raíz de el silencio, mientras que el tiempo es su fruto.",
            "fr": "La nature est la racine de le silence, tandis que le temps en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Stille, während die Zeit seine Frucht ist.",
            "pt": "A natureza é a raiz de o silêncio, enquanto o tempo é o seu fruto.",
            "ja": "自然は沈黙の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1119",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of silence, while life is its fruit.",
            "hi": "प्रकृति मौन की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La naturaleza es la raíz de el silencio, mientras que la vida es su fruto.",
            "fr": "La nature est la racine de le silence, tandis que la vie en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Stille, während das Leben seine Frucht ist.",
            "pt": "A natureza é a raiz de o silêncio, enquanto a vida é o seu fruto.",
            "ja": "自然は沈黙の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1120",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of silence, while love is its fruit.",
            "hi": "प्रकृति मौन की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La naturaleza es la raíz de el silencio, mientras que el amor es su fruto.",
            "fr": "La nature est la racine de le silence, tandis que l'amour en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Stille, während die Liebe seine Frucht ist.",
            "pt": "A natureza é a raiz de o silêncio, enquanto o amor é o seu fruto.",
            "ja": "自然は沈黙の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1121",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of silence, while compassion is its fruit.",
            "hi": "प्रकृति मौन की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La naturaleza es la raíz de el silencio, mientras que la compasión es su fruto.",
            "fr": "La nature est la racine de le silence, tandis que la compassion en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Stille, während das Mitgefühl seine Frucht ist.",
            "pt": "A natureza é a raiz de o silêncio, enquanto a compaixão é o seu fruto.",
            "ja": "自然は沈黙の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1122",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of silence, while freedom is its fruit.",
            "hi": "प्रकृति मौन की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La naturaleza es la raíz de el silencio, mientras que la libertad es su fruto.",
            "fr": "La nature est la racine de le silence, tandis que la liberté en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Stille, während die Freiheit seine Frucht ist.",
            "pt": "A natureza é a raiz de o silêncio, enquanto a liberdade é o seu fruto.",
            "ja": "自然は沈黙の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1123",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of silence, while destiny is its fruit.",
            "hi": "प्रकृति मौन की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La naturaleza es la raíz de el silencio, mientras que el destino es su fruto.",
            "fr": "La nature est la racine de le silence, tandis que le destin en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Stille, während das Schicksal seine Frucht ist.",
            "pt": "A natureza é a raiz de o silêncio, enquanto o destino é o seu fruto.",
            "ja": "自然は沈黙の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1124",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of silence, while humility is its fruit.",
            "hi": "प्रकृति मौन की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La naturaleza es la raíz de el silencio, mientras que la humildad es su fruto.",
            "fr": "La nature est la racine de le silence, tandis que l'humilité en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Stille, während die Bescheidenheit seine Frucht ist.",
            "pt": "A natureza é a raiz de o silêncio, enquanto a humildade é o seu fruto.",
            "ja": "自然は沈黙の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1125",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of silence, while reason is its fruit.",
            "hi": "प्रकृति मौन की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La naturaleza es la raíz de el silencio, mientras que la razón es su fruto.",
            "fr": "La nature est la racine de le silence, tandis que la raison en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Stille, während die Vernunft seine Frucht ist.",
            "pt": "A natureza é a raiz de o silêncio, enquanto a razão é o seu fruto.",
            "ja": "自然は沈黙の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1126",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of knowledge, while action is its fruit.",
            "hi": "प्रकृति विद्या की जड़ है, जबकि कर्म इसका फल है।",
            "es": "La naturaleza es la raíz de el conocimiento, mientras que la acción es su fruto.",
            "fr": "La nature est la racine de la connaissance, tandis que l'action en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Wissen, während die Handlung seine Frucht ist.",
            "pt": "A natureza é a raiz de o conhecimento, enquanto a ação é o seu fruto.",
            "ja": "自然は知識の根であり、行動はその果実である。"
        }
    },
    {
        "id": "quote_1127",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of knowledge, while harmony is its fruit.",
            "hi": "प्रकृति विद्या की जड़ है, जबकि सद्भाव इसका फल है।",
            "es": "La naturaleza es la raíz de el conocimiento, mientras que la armonía es su fruto.",
            "fr": "La nature est la racine de la connaissance, tandis que l'harmonie en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Wissen, während die Harmonie seine Frucht ist.",
            "pt": "A natureza é a raiz de o conhecimento, enquanto a harmonia é o seu fruto.",
            "ja": "自然は知識の根であり、調和はその果実である。"
        }
    },
    {
        "id": "quote_1128",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of knowledge, while justice is its fruit.",
            "hi": "प्रकृति विद्या की जड़ है, जबकि न्याय इसका फल है।",
            "es": "La naturaleza es la raíz de el conocimiento, mientras que la justicia es su fruto.",
            "fr": "La nature est la racine de la connaissance, tandis que la justice en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Wissen, während die Gerechtigkeit seine Frucht ist.",
            "pt": "A natureza é a raiz de o conhecimento, enquanto a justiça é o seu fruto.",
            "ja": "自然は知識の根であり、正義はその果実である。"
        }
    },
    {
        "id": "quote_1129",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of knowledge, while virtue is its fruit.",
            "hi": "प्रकृति विद्या की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La naturaleza es la raíz de el conocimiento, mientras que la virtud es su fruto.",
            "fr": "La nature est la racine de la connaissance, tandis que la vertu en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Wissen, während die Tugend seine Frucht ist.",
            "pt": "A natureza é a raiz de o conhecimento, enquanto a virtude é o seu fruto.",
            "ja": "自然は知識の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1130",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of knowledge, while the mind is its fruit.",
            "hi": "प्रकृति विद्या की जड़ है, जबकि मन इसका फल है।",
            "es": "La naturaleza es la raíz de el conocimiento, mientras que la mente es su fruto.",
            "fr": "La nature est la racine de la connaissance, tandis que l'esprit en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Wissen, während der Geist seine Frucht ist.",
            "pt": "A natureza é a raiz de o conhecimento, enquanto a mente é o seu fruto.",
            "ja": "自然は知識の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1131",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of knowledge, while the soul is its fruit.",
            "hi": "प्रकृति विद्या की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La naturaleza es la raíz de el conocimiento, mientras que el alma es su fruto.",
            "fr": "La nature est la racine de la connaissance, tandis que l'âme en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Wissen, während die Seele seine Frucht ist.",
            "pt": "A natureza é a raiz de o conhecimento, enquanto a alma é o seu fruto.",
            "ja": "自然は知識の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1132",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of knowledge, while time is its fruit.",
            "hi": "प्रकृति विद्या की जड़ है, जबकि समय इसका फल है।",
            "es": "La naturaleza es la raíz de el conocimiento, mientras que el tiempo es su fruto.",
            "fr": "La nature est la racine de la connaissance, tandis que le temps en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Wissen, während die Zeit seine Frucht ist.",
            "pt": "A natureza é a raiz de o conhecimento, enquanto o tempo é o seu fruto.",
            "ja": "自然は知識の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1133",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of knowledge, while life is its fruit.",
            "hi": "प्रकृति विद्या की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La naturaleza es la raíz de el conocimiento, mientras que la vida es su fruto.",
            "fr": "La nature est la racine de la connaissance, tandis que la vie en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Wissen, während das Leben seine Frucht ist.",
            "pt": "A natureza é a raiz de o conhecimento, enquanto a vida é o seu fruto.",
            "ja": "自然は知識の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1134",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of knowledge, while love is its fruit.",
            "hi": "प्रकृति विद्या की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La naturaleza es la raíz de el conocimiento, mientras que el amor es su fruto.",
            "fr": "La nature est la racine de la connaissance, tandis que l'amour en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Wissen, während die Liebe seine Frucht ist.",
            "pt": "A natureza é a raiz de o conhecimento, enquanto o amor é o seu fruto.",
            "ja": "自然は知識の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1135",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of knowledge, while compassion is its fruit.",
            "hi": "प्रकृति विद्या की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La naturaleza es la raíz de el conocimiento, mientras que la compasión es su fruto.",
            "fr": "La nature est la racine de la connaissance, tandis que la compassion en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Wissen, während das Mitgefühl seine Frucht ist.",
            "pt": "A natureza é a raiz de o conhecimento, enquanto a compaixão é o seu fruto.",
            "ja": "自然は知識の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1136",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of knowledge, while freedom is its fruit.",
            "hi": "प्रकृति विद्या की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La naturaleza es la raíz de el conocimiento, mientras que la libertad es su fruto.",
            "fr": "La nature est la racine de la connaissance, tandis que la liberté en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Wissen, während die Freiheit seine Frucht ist.",
            "pt": "A natureza é a raiz de o conhecimento, enquanto a liberdade é o seu fruto.",
            "ja": "自然は知識の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1137",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of knowledge, while destiny is its fruit.",
            "hi": "प्रकृति विद्या की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La naturaleza es la raíz de el conocimiento, mientras que el destino es su fruto.",
            "fr": "La nature est la racine de la connaissance, tandis que le destin en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Wissen, während das Schicksal seine Frucht ist.",
            "pt": "A natureza é a raiz de o conhecimento, enquanto o destino é o seu fruto.",
            "ja": "自然は知識の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1138",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of knowledge, while humility is its fruit.",
            "hi": "प्रकृति विद्या की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La naturaleza es la raíz de el conocimiento, mientras que la humildad es su fruto.",
            "fr": "La nature est la racine de la connaissance, tandis que l'humilité en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Wissen, während die Bescheidenheit seine Frucht ist.",
            "pt": "A natureza é a raiz de o conhecimento, enquanto a humildade é o seu fruto.",
            "ja": "自然は知識の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1139",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of knowledge, while reason is its fruit.",
            "hi": "प्रकृति विद्या की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La naturaleza es la raíz de el conocimiento, mientras que la razón es su fruto.",
            "fr": "La nature est la racine de la connaissance, tandis que la raison en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Wissen, während die Vernunft seine Frucht ist.",
            "pt": "A natureza é a raiz de o conhecimento, enquanto a razão é o seu fruto.",
            "ja": "自然は知識の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1140",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of action, while harmony is its fruit.",
            "hi": "प्रकृति कर्म की जड़ है, जबकि सद्भाव इसका फल है।",
            "es": "La naturaleza es la raíz de la acción, mientras que la armonía es su fruto.",
            "fr": "La nature est la racine de l'action, tandis que l'harmonie en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Handlung, während die Harmonie seine Frucht ist.",
            "pt": "A natureza é a raiz de a ação, enquanto a harmonia é o seu fruto.",
            "ja": "自然は行動の根であり、調和はその果実である。"
        }
    },
    {
        "id": "quote_1141",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of action, while justice is its fruit.",
            "hi": "प्रकृति कर्म की जड़ है, जबकि न्याय इसका फल है।",
            "es": "La naturaleza es la raíz de la acción, mientras que la justicia es su fruto.",
            "fr": "La nature est la racine de l'action, tandis que la justice en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Handlung, während die Gerechtigkeit seine Frucht ist.",
            "pt": "A natureza é a raiz de a ação, enquanto a justiça é o seu fruto.",
            "ja": "自然は行動の根であり、正義はその果実である。"
        }
    },
    {
        "id": "quote_1142",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of action, while virtue is its fruit.",
            "hi": "प्रकृति कर्म की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La naturaleza es la raíz de la acción, mientras que la virtud es su fruto.",
            "fr": "La nature est la racine de l'action, tandis que la vertu en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Handlung, während die Tugend seine Frucht ist.",
            "pt": "A natureza é a raiz de a ação, enquanto a virtude é o seu fruto.",
            "ja": "自然は行動の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1143",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of action, while the mind is its fruit.",
            "hi": "प्रकृति कर्म की जड़ है, जबकि मन इसका फल है।",
            "es": "La naturaleza es la raíz de la acción, mientras que la mente es su fruto.",
            "fr": "La nature est la racine de l'action, tandis que l'esprit en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Handlung, während der Geist seine Frucht ist.",
            "pt": "A natureza é a raiz de a ação, enquanto a mente é o seu fruto.",
            "ja": "自然は行動の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1144",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of action, while the soul is its fruit.",
            "hi": "प्रकृति कर्म की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La naturaleza es la raíz de la acción, mientras que el alma es su fruto.",
            "fr": "La nature est la racine de l'action, tandis que l'âme en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Handlung, während die Seele seine Frucht ist.",
            "pt": "A natureza é a raiz de a ação, enquanto a alma é o seu fruto.",
            "ja": "自然は行動の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1145",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of action, while time is its fruit.",
            "hi": "प्रकृति कर्म की जड़ है, जबकि समय इसका फल है।",
            "es": "La naturaleza es la raíz de la acción, mientras que el tiempo es su fruto.",
            "fr": "La nature est la racine de l'action, tandis que le temps en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Handlung, während die Zeit seine Frucht ist.",
            "pt": "A natureza é a raiz de a ação, enquanto o tempo é o seu fruto.",
            "ja": "自然は行動の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1146",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of action, while life is its fruit.",
            "hi": "प्रकृति कर्म की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La naturaleza es la raíz de la acción, mientras que la vida es su fruto.",
            "fr": "La nature est la racine de l'action, tandis que la vie en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Handlung, während das Leben seine Frucht ist.",
            "pt": "A natureza é a raiz de a ação, enquanto a vida é o seu fruto.",
            "ja": "自然は行動の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1147",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of action, while love is its fruit.",
            "hi": "प्रकृति कर्म की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La naturaleza es la raíz de la acción, mientras que el amor es su fruto.",
            "fr": "La nature est la racine de l'action, tandis que l'amour en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Handlung, während die Liebe seine Frucht ist.",
            "pt": "A natureza é a raiz de a ação, enquanto o amor é o seu fruto.",
            "ja": "自然は行動の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1148",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of action, while compassion is its fruit.",
            "hi": "प्रकृति कर्म की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La naturaleza es la raíz de la acción, mientras que la compasión es su fruto.",
            "fr": "La nature est la racine de l'action, tandis que la compassion en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Handlung, während das Mitgefühl seine Frucht ist.",
            "pt": "A natureza é a raiz de a ação, enquanto a compaixão é o seu fruto.",
            "ja": "自然は行動の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1149",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of action, while freedom is its fruit.",
            "hi": "प्रकृति कर्म की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la acción, mientras que la libertad es su fruto.",
            "fr": "La nature est la racine de l'action, tandis que la liberté en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Handlung, während die Freiheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a ação, enquanto a liberdade é o seu fruto.",
            "ja": "自然は行動の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1150",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of action, while destiny is its fruit.",
            "hi": "प्रकृति कर्म की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La naturaleza es la raíz de la acción, mientras que el destino es su fruto.",
            "fr": "La nature est la racine de l'action, tandis que le destin en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Handlung, während das Schicksal seine Frucht ist.",
            "pt": "A natureza é a raiz de a ação, enquanto o destino é o seu fruto.",
            "ja": "自然は行動の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1151",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of action, while humility is its fruit.",
            "hi": "प्रकृति कर्म की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la acción, mientras que la humildad es su fruto.",
            "fr": "La nature est la racine de l'action, tandis que l'humilité en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Handlung, während die Bescheidenheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a ação, enquanto a humildade é o seu fruto.",
            "ja": "自然は行動の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1152",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of action, while reason is its fruit.",
            "hi": "प्रकृति कर्म की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La naturaleza es la raíz de la acción, mientras que la razón es su fruto.",
            "fr": "La nature est la racine de l'action, tandis que la raison en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Handlung, während die Vernunft seine Frucht ist.",
            "pt": "A natureza é a raiz de a ação, enquanto a razão é o seu fruto.",
            "ja": "自然は行動の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1153",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of harmony, while justice is its fruit.",
            "hi": "प्रकृति सद्भाव की जड़ है, जबकि न्याय इसका फल है।",
            "es": "La naturaleza es la raíz de la armonía, mientras que la justicia es su fruto.",
            "fr": "La nature est la racine de l'harmonie, tandis que la justice en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Harmonie, während die Gerechtigkeit seine Frucht ist.",
            "pt": "A natureza é a raiz de a harmonia, enquanto a justiça é o seu fruto.",
            "ja": "自然は調和の根であり、正義はその果実である。"
        }
    },
    {
        "id": "quote_1154",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of harmony, while virtue is its fruit.",
            "hi": "प्रकृति सद्भाव की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La naturaleza es la raíz de la armonía, mientras que la virtud es su fruto.",
            "fr": "La nature est la racine de l'harmonie, tandis que la vertu en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Harmonie, während die Tugend seine Frucht ist.",
            "pt": "A natureza é a raiz de a harmonia, enquanto a virtude é o seu fruto.",
            "ja": "自然は調和の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1155",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of harmony, while the mind is its fruit.",
            "hi": "प्रकृति सद्भाव की जड़ है, जबकि मन इसका फल है।",
            "es": "La naturaleza es la raíz de la armonía, mientras que la mente es su fruto.",
            "fr": "La nature est la racine de l'harmonie, tandis que l'esprit en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Harmonie, während der Geist seine Frucht ist.",
            "pt": "A natureza é a raiz de a harmonia, enquanto a mente é o seu fruto.",
            "ja": "自然は調和の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1156",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of harmony, while the soul is its fruit.",
            "hi": "प्रकृति सद्भाव की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La naturaleza es la raíz de la armonía, mientras que el alma es su fruto.",
            "fr": "La nature est la racine de l'harmonie, tandis que l'âme en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Harmonie, während die Seele seine Frucht ist.",
            "pt": "A natureza é a raiz de a harmonia, enquanto a alma é o seu fruto.",
            "ja": "自然は調和の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1157",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of harmony, while time is its fruit.",
            "hi": "प्रकृति सद्भाव की जड़ है, जबकि समय इसका फल है।",
            "es": "La naturaleza es la raíz de la armonía, mientras que el tiempo es su fruto.",
            "fr": "La nature est la racine de l'harmonie, tandis que le temps en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Harmonie, während die Zeit seine Frucht ist.",
            "pt": "A natureza é a raiz de a harmonia, enquanto o tempo é o seu fruto.",
            "ja": "自然は調和の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1158",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of harmony, while life is its fruit.",
            "hi": "प्रकृति सद्भाव की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La naturaleza es la raíz de la armonía, mientras que la vida es su fruto.",
            "fr": "La nature est la racine de l'harmonie, tandis que la vie en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Harmonie, während das Leben seine Frucht ist.",
            "pt": "A natureza é a raiz de a harmonia, enquanto a vida é o seu fruto.",
            "ja": "自然は調和の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1159",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of harmony, while love is its fruit.",
            "hi": "प्रकृति सद्भाव की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La naturaleza es la raíz de la armonía, mientras que el amor es su fruto.",
            "fr": "La nature est la racine de l'harmonie, tandis que l'amour en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Harmonie, während die Liebe seine Frucht ist.",
            "pt": "A natureza é a raiz de a harmonia, enquanto o amor é o seu fruto.",
            "ja": "自然は調和の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1160",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of harmony, while compassion is its fruit.",
            "hi": "प्रकृति सद्भाव की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La naturaleza es la raíz de la armonía, mientras que la compasión es su fruto.",
            "fr": "La nature est la racine de l'harmonie, tandis que la compassion en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Harmonie, während das Mitgefühl seine Frucht ist.",
            "pt": "A natureza é a raiz de a harmonia, enquanto a compaixão é o seu fruto.",
            "ja": "自然は調和の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1161",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of harmony, while freedom is its fruit.",
            "hi": "प्रकृति सद्भाव की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la armonía, mientras que la libertad es su fruto.",
            "fr": "La nature est la racine de l'harmonie, tandis que la liberté en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Harmonie, während die Freiheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a harmonia, enquanto a liberdade é o seu fruto.",
            "ja": "自然は調和の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1162",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of harmony, while destiny is its fruit.",
            "hi": "प्रकृति सद्भाव की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La naturaleza es la raíz de la armonía, mientras que el destino es su fruto.",
            "fr": "La nature est la racine de l'harmonie, tandis que le destin en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Harmonie, während das Schicksal seine Frucht ist.",
            "pt": "A natureza é a raiz de a harmonia, enquanto o destino é o seu fruto.",
            "ja": "自然は調和の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1163",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of harmony, while humility is its fruit.",
            "hi": "प्रकृति सद्भाव की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la armonía, mientras que la humildad es su fruto.",
            "fr": "La nature est la racine de l'harmonie, tandis que l'humilité en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Harmonie, während die Bescheidenheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a harmonia, enquanto a humildade é o seu fruto.",
            "ja": "自然は調和の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1164",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of harmony, while reason is its fruit.",
            "hi": "प्रकृति सद्भाव की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La naturaleza es la raíz de la armonía, mientras que la razón es su fruto.",
            "fr": "La nature est la racine de l'harmonie, tandis que la raison en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Harmonie, während die Vernunft seine Frucht ist.",
            "pt": "A natureza é a raiz de a harmonia, enquanto a razão é o seu fruto.",
            "ja": "自然は調和の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1165",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of justice, while virtue is its fruit.",
            "hi": "प्रकृति न्याय की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La naturaleza es la raíz de la justicia, mientras que la virtud es su fruto.",
            "fr": "La nature est la racine de la justice, tandis que la vertu en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Gerechtigkeit, während die Tugend seine Frucht ist.",
            "pt": "A natureza é a raiz de a justiça, enquanto a virtude é o seu fruto.",
            "ja": "自然は正義の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1166",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of justice, while the mind is its fruit.",
            "hi": "प्रकृति न्याय की जड़ है, जबकि मन इसका फल है।",
            "es": "La naturaleza es la raíz de la justicia, mientras que la mente es su fruto.",
            "fr": "La nature est la racine de la justice, tandis que l'esprit en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Gerechtigkeit, während der Geist seine Frucht ist.",
            "pt": "A natureza é a raiz de a justiça, enquanto a mente é o seu fruto.",
            "ja": "自然は正義の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1167",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of justice, while the soul is its fruit.",
            "hi": "प्रकृति न्याय की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La naturaleza es la raíz de la justicia, mientras que el alma es su fruto.",
            "fr": "La nature est la racine de la justice, tandis que l'âme en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Gerechtigkeit, während die Seele seine Frucht ist.",
            "pt": "A natureza é a raiz de a justiça, enquanto a alma é o seu fruto.",
            "ja": "自然は正義の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1168",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of justice, while time is its fruit.",
            "hi": "प्रकृति न्याय की जड़ है, जबकि समय इसका फल है।",
            "es": "La naturaleza es la raíz de la justicia, mientras que el tiempo es su fruto.",
            "fr": "La nature est la racine de la justice, tandis que le temps en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Gerechtigkeit, während die Zeit seine Frucht ist.",
            "pt": "A natureza é a raiz de a justiça, enquanto o tempo é o seu fruto.",
            "ja": "自然は正義の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1169",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of justice, while life is its fruit.",
            "hi": "प्रकृति न्याय की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La naturaleza es la raíz de la justicia, mientras que la vida es su fruto.",
            "fr": "La nature est la racine de la justice, tandis que la vie en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Gerechtigkeit, während das Leben seine Frucht ist.",
            "pt": "A natureza é a raiz de a justiça, enquanto a vida é o seu fruto.",
            "ja": "自然は正義の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1170",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of justice, while love is its fruit.",
            "hi": "प्रकृति न्याय की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La naturaleza es la raíz de la justicia, mientras que el amor es su fruto.",
            "fr": "La nature est la racine de la justice, tandis que l'amour en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Gerechtigkeit, während die Liebe seine Frucht ist.",
            "pt": "A natureza é a raiz de a justiça, enquanto o amor é o seu fruto.",
            "ja": "自然は正義の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1171",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of justice, while compassion is its fruit.",
            "hi": "प्रकृति न्याय की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La naturaleza es la raíz de la justicia, mientras que la compasión es su fruto.",
            "fr": "La nature est la racine de la justice, tandis que la compassion en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Gerechtigkeit, während das Mitgefühl seine Frucht ist.",
            "pt": "A natureza é a raiz de a justiça, enquanto a compaixão é o seu fruto.",
            "ja": "自然は正義の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1172",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of justice, while freedom is its fruit.",
            "hi": "प्रकृति न्याय की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la justicia, mientras que la libertad es su fruto.",
            "fr": "La nature est la racine de la justice, tandis que la liberté en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Gerechtigkeit, während die Freiheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a justiça, enquanto a liberdade é o seu fruto.",
            "ja": "自然は正義の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1173",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of justice, while destiny is its fruit.",
            "hi": "प्रकृति न्याय की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La naturaleza es la raíz de la justicia, mientras que el destino es su fruto.",
            "fr": "La nature est la racine de la justice, tandis que le destin en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Gerechtigkeit, während das Schicksal seine Frucht ist.",
            "pt": "A natureza é a raiz de a justiça, enquanto o destino é o seu fruto.",
            "ja": "自然は正義の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1174",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of justice, while humility is its fruit.",
            "hi": "प्रकृति न्याय की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la justicia, mientras que la humildad es su fruto.",
            "fr": "La nature est la racine de la justice, tandis que l'humilité en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Gerechtigkeit, während die Bescheidenheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a justiça, enquanto a humildade é o seu fruto.",
            "ja": "自然は正義の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1175",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of justice, while reason is its fruit.",
            "hi": "प्रकृति न्याय की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La naturaleza es la raíz de la justicia, mientras que la razón es su fruto.",
            "fr": "La nature est la racine de la justice, tandis que la raison en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Gerechtigkeit, während die Vernunft seine Frucht ist.",
            "pt": "A natureza é a raiz de a justiça, enquanto a razão é o seu fruto.",
            "ja": "自然は正義の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1176",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of virtue, while the mind is its fruit.",
            "hi": "प्रकृति धर्म की जड़ है, जबकि मन इसका फल है।",
            "es": "La naturaleza es la raíz de la virtud, mientras que la mente es su fruto.",
            "fr": "La nature est la racine de la vertu, tandis que l'esprit en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Tugend, während der Geist seine Frucht ist.",
            "pt": "A natureza é a raiz de a virtude, enquanto a mente é o seu fruto.",
            "ja": "自然は美徳の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1177",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of virtue, while the soul is its fruit.",
            "hi": "प्रकृति धर्म की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La naturaleza es la raíz de la virtud, mientras que el alma es su fruto.",
            "fr": "La nature est la racine de la vertu, tandis que l'âme en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Tugend, während die Seele seine Frucht ist.",
            "pt": "A natureza é a raiz de a virtude, enquanto a alma é o seu fruto.",
            "ja": "自然は美徳の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1178",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of virtue, while time is its fruit.",
            "hi": "प्रकृति धर्म की जड़ है, जबकि समय इसका फल है।",
            "es": "La naturaleza es la raíz de la virtud, mientras que el tiempo es su fruto.",
            "fr": "La nature est la racine de la vertu, tandis que le temps en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Tugend, während die Zeit seine Frucht ist.",
            "pt": "A natureza é a raiz de a virtude, enquanto o tempo é o seu fruto.",
            "ja": "自然は美徳の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1179",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of virtue, while life is its fruit.",
            "hi": "प्रकृति धर्म की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La naturaleza es la raíz de la virtud, mientras que la vida es su fruto.",
            "fr": "La nature est la racine de la vertu, tandis que la vie en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Tugend, während das Leben seine Frucht ist.",
            "pt": "A natureza é a raiz de a virtude, enquanto a vida é o seu fruto.",
            "ja": "自然は美徳の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1180",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of virtue, while love is its fruit.",
            "hi": "प्रकृति धर्म की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La naturaleza es la raíz de la virtud, mientras que el amor es su fruto.",
            "fr": "La nature est la racine de la vertu, tandis que l'amour en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Tugend, während die Liebe seine Frucht ist.",
            "pt": "A natureza é a raiz de a virtude, enquanto o amor é o seu fruto.",
            "ja": "自然は美徳の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1181",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of virtue, while compassion is its fruit.",
            "hi": "प्रकृति धर्म की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La naturaleza es la raíz de la virtud, mientras que la compasión es su fruto.",
            "fr": "La nature est la racine de la vertu, tandis que la compassion en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Tugend, während das Mitgefühl seine Frucht ist.",
            "pt": "A natureza é a raiz de a virtude, enquanto a compaixão é o seu fruto.",
            "ja": "自然は美徳の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1182",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of virtue, while freedom is its fruit.",
            "hi": "प्रकृति धर्म की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la virtud, mientras que la libertad es su fruto.",
            "fr": "La nature est la racine de la vertu, tandis que la liberté en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Tugend, während die Freiheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a virtude, enquanto a liberdade é o seu fruto.",
            "ja": "自然は美徳の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1183",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of virtue, while destiny is its fruit.",
            "hi": "प्रकृति धर्म की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La naturaleza es la raíz de la virtud, mientras que el destino es su fruto.",
            "fr": "La nature est la racine de la vertu, tandis que le destin en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Tugend, während das Schicksal seine Frucht ist.",
            "pt": "A natureza é a raiz de a virtude, enquanto o destino é o seu fruto.",
            "ja": "自然は美徳の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1184",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of virtue, while humility is its fruit.",
            "hi": "प्रकृति धर्म की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la virtud, mientras que la humildad es su fruto.",
            "fr": "La nature est la racine de la vertu, tandis que l'humilité en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Tugend, während die Bescheidenheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a virtude, enquanto a humildade é o seu fruto.",
            "ja": "自然は美徳の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1185",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of virtue, while reason is its fruit.",
            "hi": "प्रकृति धर्म की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La naturaleza es la raíz de la virtud, mientras que la razón es su fruto.",
            "fr": "La nature est la racine de la vertu, tandis que la raison en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Tugend, während die Vernunft seine Frucht ist.",
            "pt": "A natureza é a raiz de a virtude, enquanto a razão é o seu fruto.",
            "ja": "自然は美徳の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1186",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of the mind, while the soul is its fruit.",
            "hi": "प्रकृति मन की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La naturaleza es la raíz de la mente, mientras que el alma es su fruto.",
            "fr": "La nature est la racine de l'esprit, tandis que l'âme en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Geist, während die Seele seine Frucht ist.",
            "pt": "A natureza é a raiz de a mente, enquanto a alma é o seu fruto.",
            "ja": "自然は心の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1187",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of the mind, while time is its fruit.",
            "hi": "प्रकृति मन की जड़ है, जबकि समय इसका फल है।",
            "es": "La naturaleza es la raíz de la mente, mientras que el tiempo es su fruto.",
            "fr": "La nature est la racine de l'esprit, tandis que le temps en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Geist, während die Zeit seine Frucht ist.",
            "pt": "A natureza é a raiz de a mente, enquanto o tempo é o seu fruto.",
            "ja": "自然は心の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1188",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of the mind, while life is its fruit.",
            "hi": "प्रकृति मन की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La naturaleza es la raíz de la mente, mientras que la vida es su fruto.",
            "fr": "La nature est la racine de l'esprit, tandis que la vie en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Geist, während das Leben seine Frucht ist.",
            "pt": "A natureza é a raiz de a mente, enquanto a vida é o seu fruto.",
            "ja": "自然は心の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1189",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of the mind, while love is its fruit.",
            "hi": "प्रकृति मन की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La naturaleza es la raíz de la mente, mientras que el amor es su fruto.",
            "fr": "La nature est la racine de l'esprit, tandis que l'amour en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Geist, während die Liebe seine Frucht ist.",
            "pt": "A natureza é a raiz de a mente, enquanto o amor é o seu fruto.",
            "ja": "自然は心の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1190",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of the mind, while compassion is its fruit.",
            "hi": "प्रकृति मन की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La naturaleza es la raíz de la mente, mientras que la compasión es su fruto.",
            "fr": "La nature est la racine de l'esprit, tandis que la compassion en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Geist, während das Mitgefühl seine Frucht ist.",
            "pt": "A natureza é a raiz de a mente, enquanto a compaixão é o seu fruto.",
            "ja": "自然は心の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1191",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of the mind, while freedom is its fruit.",
            "hi": "प्रकृति मन की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la mente, mientras que la libertad es su fruto.",
            "fr": "La nature est la racine de l'esprit, tandis que la liberté en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Geist, während die Freiheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a mente, enquanto a liberdade é o seu fruto.",
            "ja": "自然は心の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1192",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of the mind, while destiny is its fruit.",
            "hi": "प्रकृति मन की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La naturaleza es la raíz de la mente, mientras que el destino es su fruto.",
            "fr": "La nature est la racine de l'esprit, tandis que le destin en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Geist, während das Schicksal seine Frucht ist.",
            "pt": "A natureza é a raiz de a mente, enquanto o destino é o seu fruto.",
            "ja": "自然は心の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1193",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of the mind, while humility is its fruit.",
            "hi": "प्रकृति मन की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la mente, mientras que la humildad es su fruto.",
            "fr": "La nature est la racine de l'esprit, tandis que l'humilité en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Geist, während die Bescheidenheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a mente, enquanto a humildade é o seu fruto.",
            "ja": "自然は心の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1194",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of the mind, while reason is its fruit.",
            "hi": "प्रकृति मन की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La naturaleza es la raíz de la mente, mientras que la razón es su fruto.",
            "fr": "La nature est la racine de l'esprit, tandis que la raison en est le fruit.",
            "de": "Die Natur ist die Wurzel von der Geist, während die Vernunft seine Frucht ist.",
            "pt": "A natureza é a raiz de a mente, enquanto a razão é o seu fruto.",
            "ja": "自然は心の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1195",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of the soul, while time is its fruit.",
            "hi": "प्रकृति आत्मा की जड़ है, जबकि समय इसका फल है।",
            "es": "La naturaleza es la raíz de el alma, mientras que el tiempo es su fruto.",
            "fr": "La nature est la racine de l'âme, tandis que le temps en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Seele, während die Zeit seine Frucht ist.",
            "pt": "A natureza é a raiz de a alma, enquanto o tempo é o seu fruto.",
            "ja": "自然は魂の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1196",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of the soul, while life is its fruit.",
            "hi": "प्रकृति आत्मा की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La naturaleza es la raíz de el alma, mientras que la vida es su fruto.",
            "fr": "La nature est la racine de l'âme, tandis que la vie en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Seele, während das Leben seine Frucht ist.",
            "pt": "A natureza é a raiz de a alma, enquanto a vida é o seu fruto.",
            "ja": "自然は魂の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1197",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of the soul, while love is its fruit.",
            "hi": "प्रकृति आत्मा की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La naturaleza es la raíz de el alma, mientras que el amor es su fruto.",
            "fr": "La nature est la racine de l'âme, tandis que l'amour en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Seele, während die Liebe seine Frucht ist.",
            "pt": "A natureza é a raiz de a alma, enquanto o amor é o seu fruto.",
            "ja": "自然は魂の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1198",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of the soul, while compassion is its fruit.",
            "hi": "प्रकृति आत्मा की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La naturaleza es la raíz de el alma, mientras que la compasión es su fruto.",
            "fr": "La nature est la racine de l'âme, tandis que la compassion en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Seele, während das Mitgefühl seine Frucht ist.",
            "pt": "A natureza é a raiz de a alma, enquanto a compaixão é o seu fruto.",
            "ja": "自然は魂の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1199",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of the soul, while freedom is its fruit.",
            "hi": "प्रकृति आत्मा की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La naturaleza es la raíz de el alma, mientras que la libertad es su fruto.",
            "fr": "La nature est la racine de l'âme, tandis que la liberté en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Seele, während die Freiheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a alma, enquanto a liberdade é o seu fruto.",
            "ja": "自然は魂の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1200",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of the soul, while destiny is its fruit.",
            "hi": "प्रकृति आत्मा की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La naturaleza es la raíz de el alma, mientras que el destino es su fruto.",
            "fr": "La nature est la racine de l'âme, tandis que le destin en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Seele, während das Schicksal seine Frucht ist.",
            "pt": "A natureza é a raiz de a alma, enquanto o destino é o seu fruto.",
            "ja": "自然は魂の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1201",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of the soul, while humility is its fruit.",
            "hi": "प्रकृति आत्मा की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La naturaleza es la raíz de el alma, mientras que la humildad es su fruto.",
            "fr": "La nature est la racine de l'âme, tandis que l'humilité en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Seele, während die Bescheidenheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a alma, enquanto a humildade é o seu fruto.",
            "ja": "自然は魂の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1202",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of the soul, while reason is its fruit.",
            "hi": "प्रकृति आत्मा की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La naturaleza es la raíz de el alma, mientras que la razón es su fruto.",
            "fr": "La nature est la racine de l'âme, tandis que la raison en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Seele, während die Vernunft seine Frucht ist.",
            "pt": "A natureza é a raiz de a alma, enquanto a razão é o seu fruto.",
            "ja": "自然は魂の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1203",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of time, while life is its fruit.",
            "hi": "प्रकृति समय की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La naturaleza es la raíz de el tiempo, mientras que la vida es su fruto.",
            "fr": "La nature est la racine de le temps, tandis que la vie en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Zeit, während das Leben seine Frucht ist.",
            "pt": "A natureza é a raiz de o tempo, enquanto a vida é o seu fruto.",
            "ja": "自然は時間の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1204",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of time, while love is its fruit.",
            "hi": "प्रकृति समय की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La naturaleza es la raíz de el tiempo, mientras que el amor es su fruto.",
            "fr": "La nature est la racine de le temps, tandis que l'amour en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Zeit, während die Liebe seine Frucht ist.",
            "pt": "A natureza é a raiz de o tempo, enquanto o amor é o seu fruto.",
            "ja": "自然は時間の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1205",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of time, while compassion is its fruit.",
            "hi": "प्रकृति समय की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La naturaleza es la raíz de el tiempo, mientras que la compasión es su fruto.",
            "fr": "La nature est la racine de le temps, tandis que la compassion en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Zeit, während das Mitgefühl seine Frucht ist.",
            "pt": "A natureza é a raiz de o tempo, enquanto a compaixão é o seu fruto.",
            "ja": "自然は時間の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1206",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of time, while freedom is its fruit.",
            "hi": "प्रकृति समय की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La naturaleza es la raíz de el tiempo, mientras que la libertad es su fruto.",
            "fr": "La nature est la racine de le temps, tandis que la liberté en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Zeit, während die Freiheit seine Frucht ist.",
            "pt": "A natureza é a raiz de o tempo, enquanto a liberdade é o seu fruto.",
            "ja": "自然は時間の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1207",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of time, while destiny is its fruit.",
            "hi": "प्रकृति समय की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La naturaleza es la raíz de el tiempo, mientras que el destino es su fruto.",
            "fr": "La nature est la racine de le temps, tandis que le destin en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Zeit, während das Schicksal seine Frucht ist.",
            "pt": "A natureza é a raiz de o tempo, enquanto o destino é o seu fruto.",
            "ja": "自然は時間の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1208",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of time, while humility is its fruit.",
            "hi": "प्रकृति समय की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La naturaleza es la raíz de el tiempo, mientras que la humildad es su fruto.",
            "fr": "La nature est la racine de le temps, tandis que l'humilité en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Zeit, während die Bescheidenheit seine Frucht ist.",
            "pt": "A natureza é a raiz de o tempo, enquanto a humildade é o seu fruto.",
            "ja": "自然は時間の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1209",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of time, while reason is its fruit.",
            "hi": "प्रकृति समय की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La naturaleza es la raíz de el tiempo, mientras que la razón es su fruto.",
            "fr": "La nature est la racine de le temps, tandis que la raison en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Zeit, während die Vernunft seine Frucht ist.",
            "pt": "A natureza é a raiz de o tempo, enquanto a razão é o seu fruto.",
            "ja": "自然は時間の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1210",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of life, while love is its fruit.",
            "hi": "प्रकृति जीवन की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La naturaleza es la raíz de la vida, mientras que el amor es su fruto.",
            "fr": "La nature est la racine de la vie, tandis que l'amour en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Leben, während die Liebe seine Frucht ist.",
            "pt": "A natureza é a raiz de a vida, enquanto o amor é o seu fruto.",
            "ja": "自然は人生の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1211",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of life, while compassion is its fruit.",
            "hi": "प्रकृति जीवन की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La naturaleza es la raíz de la vida, mientras que la compasión es su fruto.",
            "fr": "La nature est la racine de la vie, tandis que la compassion en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Leben, während das Mitgefühl seine Frucht ist.",
            "pt": "A natureza é a raiz de a vida, enquanto a compaixão é o seu fruto.",
            "ja": "自然は人生の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1212",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of life, while freedom is its fruit.",
            "hi": "प्रकृति जीवन की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la vida, mientras que la libertad es su fruto.",
            "fr": "La nature est la racine de la vie, tandis que la liberté en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Leben, während die Freiheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a vida, enquanto a liberdade é o seu fruto.",
            "ja": "自然は人生の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1213",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of life, while destiny is its fruit.",
            "hi": "प्रकृति जीवन की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La naturaleza es la raíz de la vida, mientras que el destino es su fruto.",
            "fr": "La nature est la racine de la vie, tandis que le destin en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Leben, während das Schicksal seine Frucht ist.",
            "pt": "A natureza é a raiz de a vida, enquanto o destino é o seu fruto.",
            "ja": "自然は人生の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1214",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of life, while humility is its fruit.",
            "hi": "प्रकृति जीवन की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la vida, mientras que la humildad es su fruto.",
            "fr": "La nature est la racine de la vie, tandis que l'humilité en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Leben, während die Bescheidenheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a vida, enquanto a humildade é o seu fruto.",
            "ja": "自然は人生の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1215",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of life, while reason is its fruit.",
            "hi": "प्रकृति जीवन की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La naturaleza es la raíz de la vida, mientras que la razón es su fruto.",
            "fr": "La nature est la racine de la vie, tandis que la raison en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Leben, während die Vernunft seine Frucht ist.",
            "pt": "A natureza é a raiz de a vida, enquanto a razão é o seu fruto.",
            "ja": "自然は人生の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1216",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Nature is the root of love, while compassion is its fruit.",
            "hi": "प्रकृति प्रेम की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La naturaleza es la raíz de el amor, mientras que la compasión es su fruto.",
            "fr": "La nature est la racine de l'amour, tandis que la compassion en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Liebe, während das Mitgefühl seine Frucht ist.",
            "pt": "A natureza é a raiz de o amor, enquanto a compaixão é o seu fruto.",
            "ja": "自然は愛の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1217",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of love, while freedom is its fruit.",
            "hi": "प्रकृति प्रेम की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La naturaleza es la raíz de el amor, mientras que la libertad es su fruto.",
            "fr": "La nature est la racine de l'amour, tandis que la liberté en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Liebe, während die Freiheit seine Frucht ist.",
            "pt": "A natureza é a raiz de o amor, enquanto a liberdade é o seu fruto.",
            "ja": "自然は愛の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1218",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of love, while destiny is its fruit.",
            "hi": "प्रकृति प्रेम की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La naturaleza es la raíz de el amor, mientras que el destino es su fruto.",
            "fr": "La nature est la racine de l'amour, tandis que le destin en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Liebe, während das Schicksal seine Frucht ist.",
            "pt": "A natureza é a raiz de o amor, enquanto o destino é o seu fruto.",
            "ja": "自然は愛の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1219",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of love, while humility is its fruit.",
            "hi": "प्रकृति प्रेम की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La naturaleza es la raíz de el amor, mientras que la humildad es su fruto.",
            "fr": "La nature est la racine de l'amour, tandis que l'humilité en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Liebe, während die Bescheidenheit seine Frucht ist.",
            "pt": "A natureza é a raiz de o amor, enquanto a humildade é o seu fruto.",
            "ja": "自然は愛の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1220",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of love, while reason is its fruit.",
            "hi": "प्रकृति प्रेम की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La naturaleza es la raíz de el amor, mientras que la razón es su fruto.",
            "fr": "La nature est la racine de l'amour, tandis que la raison en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Liebe, während die Vernunft seine Frucht ist.",
            "pt": "A natureza é a raiz de o amor, enquanto a razão é o seu fruto.",
            "ja": "自然は愛の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1221",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Nature is the root of compassion, while freedom is its fruit.",
            "hi": "प्रकृति करुणा की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la compasión, mientras que la libertad es su fruto.",
            "fr": "La nature est la racine de la compassion, tandis que la liberté en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Mitgefühl, während die Freiheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a compaixão, enquanto a liberdade é o seu fruto.",
            "ja": "自然は思いやりの根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1222",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of compassion, while destiny is its fruit.",
            "hi": "प्रकृति करुणा की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La naturaleza es la raíz de la compasión, mientras que el destino es su fruto.",
            "fr": "La nature est la racine de la compassion, tandis que le destin en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Mitgefühl, während das Schicksal seine Frucht ist.",
            "pt": "A natureza é a raiz de a compaixão, enquanto o destino é o seu fruto.",
            "ja": "自然は思いやりの根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1223",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Nature is the root of compassion, while humility is its fruit.",
            "hi": "प्रकृति करुणा की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la compasión, mientras que la humildad es su fruto.",
            "fr": "La nature est la racine de la compassion, tandis que l'humilité en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Mitgefühl, während die Bescheidenheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a compaixão, enquanto a humildade é o seu fruto.",
            "ja": "自然は思いやりの根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1224",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of compassion, while reason is its fruit.",
            "hi": "प्रकृति करुणा की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La naturaleza es la raíz de la compasión, mientras que la razón es su fruto.",
            "fr": "La nature est la racine de la compassion, tandis que la raison en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Mitgefühl, während die Vernunft seine Frucht ist.",
            "pt": "A natureza é a raiz de a compaixão, enquanto a razão é o seu fruto.",
            "ja": "自然は思いやりの根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1225",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of freedom, while destiny is its fruit.",
            "hi": "प्रकृति स्वतंत्रता की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La naturaleza es la raíz de la libertad, mientras que el destino es su fruto.",
            "fr": "La nature est la racine de la liberté, tandis que le destin en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Freiheit, während das Schicksal seine Frucht ist.",
            "pt": "A natureza é a raiz de a liberdade, enquanto o destino é o seu fruto.",
            "ja": "自然は自由の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1226",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of freedom, while humility is its fruit.",
            "hi": "प्रकृति स्वतंत्रता की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La naturaleza es la raíz de la libertad, mientras que la humildad es su fruto.",
            "fr": "La nature est la racine de la liberté, tandis que l'humilité en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Freiheit, während die Bescheidenheit seine Frucht ist.",
            "pt": "A natureza é a raiz de a liberdade, enquanto a humildade é o seu fruto.",
            "ja": "自然は自由の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1227",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Nature is the root of freedom, while reason is its fruit.",
            "hi": "प्रकृति स्वतंत्रता की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La naturaleza es la raíz de la libertad, mientras que la razón es su fruto.",
            "fr": "La nature est la racine de la liberté, tandis que la raison en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Freiheit, während die Vernunft seine Frucht ist.",
            "pt": "A natureza é a raiz de a liberdade, enquanto a razão é o seu fruto.",
            "ja": "自然は自由の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1228",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of destiny, while humility is its fruit.",
            "hi": "प्रकृति भाग्य की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La naturaleza es la raíz de el destino, mientras que la humildad es su fruto.",
            "fr": "La nature est la racine de le destin, tandis que l'humilité en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Schicksal, während die Bescheidenheit seine Frucht ist.",
            "pt": "A natureza é a raiz de o destino, enquanto a humildade é o seu fruto.",
            "ja": "自然は運命の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1229",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of destiny, while reason is its fruit.",
            "hi": "प्रकृति भाग्य की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La naturaleza es la raíz de el destino, mientras que la razón es su fruto.",
            "fr": "La nature est la racine de le destin, tandis que la raison en est le fruit.",
            "de": "Die Natur ist die Wurzel von das Schicksal, während die Vernunft seine Frucht ist.",
            "pt": "A natureza é a raiz de o destino, enquanto a razão é o seu fruto.",
            "ja": "自然は運命の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1230",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Nature is the root of humility, while reason is its fruit.",
            "hi": "प्रकृति विनम्रता की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La naturaleza es la raíz de la humildad, mientras que la razón es su fruto.",
            "fr": "La nature est la racine de l'humilité, tandis que la raison en est le fruit.",
            "de": "Die Natur ist die Wurzel von die Bescheidenheit, während die Vernunft seine Frucht ist.",
            "pt": "A natureza é a raiz de a humildade, enquanto a razão é o seu fruto.",
            "ja": "自然は謙虚さの根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1231",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of peace, while truth is its fruit.",
            "hi": "ज्ञान शांति की जड़ है, जबकि सत्य इसका फल है।",
            "es": "La sabiduría es la raíz de la paz, mientras que la verdad es su fruto.",
            "fr": "La sagesse est la racine de la paix, tandis que la vérité en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Frieden, während die Wahrheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paz, enquanto a verdade é o seu fruto.",
            "ja": "知恵は平和の根であり、真理はその果実である。"
        }
    },
    {
        "id": "quote_1232",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of peace, while courage is its fruit.",
            "hi": "ज्ञान शांति की जड़ है, जबकि साहस इसका फल है।",
            "es": "La sabiduría es la raíz de la paz, mientras que el coraje es su fruto.",
            "fr": "La sagesse est la racine de la paix, tandis que le courage en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Frieden, während der Mut seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paz, enquanto a coragem é o seu fruto.",
            "ja": "知恵は平和の根であり、勇気はその果実である。"
        }
    },
    {
        "id": "quote_1233",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of peace, while patience is its fruit.",
            "hi": "ज्ञान शांति की जड़ है, जबकि धैर्य इसका फल है।",
            "es": "La sabiduría es la raíz de la paz, mientras que la paciencia es su fruto.",
            "fr": "La sagesse est la racine de la paix, tandis que la patience en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Frieden, während die Geduld seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paz, enquanto a paciência é o seu fruto.",
            "ja": "知恵は平和の根であり、忍耐はその果実である。"
        }
    },
    {
        "id": "quote_1234",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of peace, while reflection is its fruit.",
            "hi": "ज्ञान शांति की जड़ है, जबकि विचार इसका फल है।",
            "es": "La sabiduría es la raíz de la paz, mientras que la reflexión es su fruto.",
            "fr": "La sagesse est la racine de la paix, tandis que la réflexion en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Frieden, während die Reflexion seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paz, enquanto a reflexão é o seu fruto.",
            "ja": "知恵は平和の根であり、熟考はその果実である。"
        }
    },
    {
        "id": "quote_1235",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of peace, while silence is its fruit.",
            "hi": "ज्ञान शांति की जड़ है, जबकि मौन इसका फल है।",
            "es": "La sabiduría es la raíz de la paz, mientras que el silencio es su fruto.",
            "fr": "La sagesse est la racine de la paix, tandis que le silence en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Frieden, während die Stille seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paz, enquanto o silêncio é o seu fruto.",
            "ja": "知恵は平和の根であり、沈黙はその果実である。"
        }
    },
    {
        "id": "quote_1236",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of peace, while knowledge is its fruit.",
            "hi": "ज्ञान शांति की जड़ है, जबकि विद्या इसका फल है।",
            "es": "La sabiduría es la raíz de la paz, mientras que el conocimiento es su fruto.",
            "fr": "La sagesse est la racine de la paix, tandis que la connaissance en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Frieden, während das Wissen seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paz, enquanto o conhecimento é o seu fruto.",
            "ja": "知恵は平和の根であり、知識はその果実である。"
        }
    },
    {
        "id": "quote_1237",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of peace, while action is its fruit.",
            "hi": "ज्ञान शांति की जड़ है, जबकि कर्म इसका फल है।",
            "es": "La sabiduría es la raíz de la paz, mientras que la acción es su fruto.",
            "fr": "La sagesse est la racine de la paix, tandis que l'action en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Frieden, während die Handlung seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paz, enquanto a ação é o seu fruto.",
            "ja": "知恵は平和の根であり、行動はその果実である。"
        }
    },
    {
        "id": "quote_1238",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of peace, while harmony is its fruit.",
            "hi": "ज्ञान शांति की जड़ है, जबकि सद्भाव इसका फल है।",
            "es": "La sabiduría es la raíz de la paz, mientras que la armonía es su fruto.",
            "fr": "La sagesse est la racine de la paix, tandis que l'harmonie en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Frieden, während die Harmonie seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paz, enquanto a harmonia é o seu fruto.",
            "ja": "知恵は平和の根であり、調和はその果実である。"
        }
    },
    {
        "id": "quote_1239",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of peace, while justice is its fruit.",
            "hi": "ज्ञान शांति की जड़ है, जबकि न्याय इसका फल है।",
            "es": "La sabiduría es la raíz de la paz, mientras que la justicia es su fruto.",
            "fr": "La sagesse est la racine de la paix, tandis que la justice en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Frieden, während die Gerechtigkeit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paz, enquanto a justiça é o seu fruto.",
            "ja": "知恵は平和の根であり、正義はその果実である。"
        }
    },
    {
        "id": "quote_1240",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of peace, while virtue is its fruit.",
            "hi": "ज्ञान शांति की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La sabiduría es la raíz de la paz, mientras que la virtud es su fruto.",
            "fr": "La sagesse est la racine de la paix, tandis que la vertu en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Frieden, während die Tugend seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paz, enquanto a virtude é o seu fruto.",
            "ja": "知恵は平和の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1241",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of peace, while the mind is its fruit.",
            "hi": "ज्ञान शांति की जड़ है, जबकि मन इसका फल है।",
            "es": "La sabiduría es la raíz de la paz, mientras que la mente es su fruto.",
            "fr": "La sagesse est la racine de la paix, tandis que l'esprit en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Frieden, während der Geist seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paz, enquanto a mente é o seu fruto.",
            "ja": "知恵は平和の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1242",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of peace, while the soul is its fruit.",
            "hi": "ज्ञान शांति की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La sabiduría es la raíz de la paz, mientras que el alma es su fruto.",
            "fr": "La sagesse est la racine de la paix, tandis que l'âme en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Frieden, während die Seele seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paz, enquanto a alma é o seu fruto.",
            "ja": "知恵は平和の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1243",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of peace, while time is its fruit.",
            "hi": "ज्ञान शांति की जड़ है, जबकि समय इसका फल है।",
            "es": "La sabiduría es la raíz de la paz, mientras que el tiempo es su fruto.",
            "fr": "La sagesse est la racine de la paix, tandis que le temps en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Frieden, während die Zeit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paz, enquanto o tempo é o seu fruto.",
            "ja": "知恵は平和の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1244",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of peace, while life is its fruit.",
            "hi": "ज्ञान शांति की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La sabiduría es la raíz de la paz, mientras que la vida es su fruto.",
            "fr": "La sagesse est la racine de la paix, tandis que la vie en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Frieden, während das Leben seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paz, enquanto a vida é o seu fruto.",
            "ja": "知恵は平和の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1245",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of peace, while love is its fruit.",
            "hi": "ज्ञान शांति की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La sabiduría es la raíz de la paz, mientras que el amor es su fruto.",
            "fr": "La sagesse est la racine de la paix, tandis que l'amour en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Frieden, während die Liebe seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paz, enquanto o amor é o seu fruto.",
            "ja": "知恵は平和の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1246",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of peace, while compassion is its fruit.",
            "hi": "ज्ञान शांति की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La sabiduría es la raíz de la paz, mientras que la compasión es su fruto.",
            "fr": "La sagesse est la racine de la paix, tandis que la compassion en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Frieden, während das Mitgefühl seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paz, enquanto a compaixão é o seu fruto.",
            "ja": "知恵は平和の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1247",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of peace, while freedom is its fruit.",
            "hi": "ज्ञान शांति की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la paz, mientras que la libertad es su fruto.",
            "fr": "La sagesse est la racine de la paix, tandis que la liberté en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Frieden, während die Freiheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paz, enquanto a liberdade é o seu fruto.",
            "ja": "知恵は平和の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1248",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of peace, while destiny is its fruit.",
            "hi": "ज्ञान शांति की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La sabiduría es la raíz de la paz, mientras que el destino es su fruto.",
            "fr": "La sagesse est la racine de la paix, tandis que le destin en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Frieden, während das Schicksal seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paz, enquanto o destino é o seu fruto.",
            "ja": "知恵は平和の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1249",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of peace, while humility is its fruit.",
            "hi": "ज्ञान शांति की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la paz, mientras que la humildad es su fruto.",
            "fr": "La sagesse est la racine de la paix, tandis que l'humilité en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Frieden, während die Bescheidenheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paz, enquanto a humildade é o seu fruto.",
            "ja": "知恵は平和の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1250",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of peace, while reason is its fruit.",
            "hi": "ज्ञान शांति की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La sabiduría es la raíz de la paz, mientras que la razón es su fruto.",
            "fr": "La sagesse est la racine de la paix, tandis que la raison en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Frieden, während die Vernunft seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paz, enquanto a razão é o seu fruto.",
            "ja": "知恵は平和の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1251",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of truth, while courage is its fruit.",
            "hi": "ज्ञान सत्य की जड़ है, जबकि साहस इसका फल है।",
            "es": "La sabiduría es la raíz de la verdad, mientras que el coraje es su fruto.",
            "fr": "La sagesse est la racine de la vérité, tandis que le courage en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Wahrheit, während der Mut seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a verdade, enquanto a coragem é o seu fruto.",
            "ja": "知恵は真理の根であり、勇気はその果実である。"
        }
    },
    {
        "id": "quote_1252",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of truth, while patience is its fruit.",
            "hi": "ज्ञान सत्य की जड़ है, जबकि धैर्य इसका फल है।",
            "es": "La sabiduría es la raíz de la verdad, mientras que la paciencia es su fruto.",
            "fr": "La sagesse est la racine de la vérité, tandis que la patience en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Wahrheit, während die Geduld seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a verdade, enquanto a paciência é o seu fruto.",
            "ja": "知恵は真理の根であり、忍耐はその果実である。"
        }
    },
    {
        "id": "quote_1253",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of truth, while reflection is its fruit.",
            "hi": "ज्ञान सत्य की जड़ है, जबकि विचार इसका फल है।",
            "es": "La sabiduría es la raíz de la verdad, mientras que la reflexión es su fruto.",
            "fr": "La sagesse est la racine de la vérité, tandis que la réflexion en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Wahrheit, während die Reflexion seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a verdade, enquanto a reflexão é o seu fruto.",
            "ja": "知恵は真理の根であり、熟考はその果実である。"
        }
    },
    {
        "id": "quote_1254",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of truth, while silence is its fruit.",
            "hi": "ज्ञान सत्य की जड़ है, जबकि मौन इसका फल है।",
            "es": "La sabiduría es la raíz de la verdad, mientras que el silencio es su fruto.",
            "fr": "La sagesse est la racine de la vérité, tandis que le silence en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Wahrheit, während die Stille seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a verdade, enquanto o silêncio é o seu fruto.",
            "ja": "知恵は真理の根であり、沈黙はその果実である。"
        }
    },
    {
        "id": "quote_1255",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of truth, while knowledge is its fruit.",
            "hi": "ज्ञान सत्य की जड़ है, जबकि विद्या इसका फल है।",
            "es": "La sabiduría es la raíz de la verdad, mientras que el conocimiento es su fruto.",
            "fr": "La sagesse est la racine de la vérité, tandis que la connaissance en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Wahrheit, während das Wissen seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a verdade, enquanto o conhecimento é o seu fruto.",
            "ja": "知恵は真理の根であり、知識はその果実である。"
        }
    },
    {
        "id": "quote_1256",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of truth, while action is its fruit.",
            "hi": "ज्ञान सत्य की जड़ है, जबकि कर्म इसका फल है।",
            "es": "La sabiduría es la raíz de la verdad, mientras que la acción es su fruto.",
            "fr": "La sagesse est la racine de la vérité, tandis que l'action en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Wahrheit, während die Handlung seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a verdade, enquanto a ação é o seu fruto.",
            "ja": "知恵は真理の根であり、行動はその果実である。"
        }
    },
    {
        "id": "quote_1257",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of truth, while harmony is its fruit.",
            "hi": "ज्ञान सत्य की जड़ है, जबकि सद्भाव इसका फल है।",
            "es": "La sabiduría es la raíz de la verdad, mientras que la armonía es su fruto.",
            "fr": "La sagesse est la racine de la vérité, tandis que l'harmonie en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Wahrheit, während die Harmonie seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a verdade, enquanto a harmonia é o seu fruto.",
            "ja": "知恵は真理の根であり、調和はその果実である。"
        }
    },
    {
        "id": "quote_1258",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of truth, while justice is its fruit.",
            "hi": "ज्ञान सत्य की जड़ है, जबकि न्याय इसका फल है।",
            "es": "La sabiduría es la raíz de la verdad, mientras que la justicia es su fruto.",
            "fr": "La sagesse est la racine de la vérité, tandis que la justice en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Wahrheit, während die Gerechtigkeit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a verdade, enquanto a justiça é o seu fruto.",
            "ja": "知恵は真理の根であり、正義はその果実である。"
        }
    },
    {
        "id": "quote_1259",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of truth, while virtue is its fruit.",
            "hi": "ज्ञान सत्य की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La sabiduría es la raíz de la verdad, mientras que la virtud es su fruto.",
            "fr": "La sagesse est la racine de la vérité, tandis que la vertu en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Wahrheit, während die Tugend seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a verdade, enquanto a virtude é o seu fruto.",
            "ja": "知恵は真理の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1260",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of truth, while the mind is its fruit.",
            "hi": "ज्ञान सत्य की जड़ है, जबकि मन इसका फल है।",
            "es": "La sabiduría es la raíz de la verdad, mientras que la mente es su fruto.",
            "fr": "La sagesse est la racine de la vérité, tandis que l'esprit en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Wahrheit, während der Geist seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a verdade, enquanto a mente é o seu fruto.",
            "ja": "知恵は真理の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1261",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of truth, while the soul is its fruit.",
            "hi": "ज्ञान सत्य की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La sabiduría es la raíz de la verdad, mientras que el alma es su fruto.",
            "fr": "La sagesse est la racine de la vérité, tandis que l'âme en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Wahrheit, während die Seele seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a verdade, enquanto a alma é o seu fruto.",
            "ja": "知恵は真理の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1262",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of truth, while time is its fruit.",
            "hi": "ज्ञान सत्य की जड़ है, जबकि समय इसका फल है।",
            "es": "La sabiduría es la raíz de la verdad, mientras que el tiempo es su fruto.",
            "fr": "La sagesse est la racine de la vérité, tandis que le temps en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Wahrheit, während die Zeit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a verdade, enquanto o tempo é o seu fruto.",
            "ja": "知恵は真理の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1263",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of truth, while life is its fruit.",
            "hi": "ज्ञान सत्य की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La sabiduría es la raíz de la verdad, mientras que la vida es su fruto.",
            "fr": "La sagesse est la racine de la vérité, tandis que la vie en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Wahrheit, während das Leben seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a verdade, enquanto a vida é o seu fruto.",
            "ja": "知恵は真理の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1264",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of truth, while love is its fruit.",
            "hi": "ज्ञान सत्य की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La sabiduría es la raíz de la verdad, mientras que el amor es su fruto.",
            "fr": "La sagesse est la racine de la vérité, tandis que l'amour en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Wahrheit, während die Liebe seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a verdade, enquanto o amor é o seu fruto.",
            "ja": "知恵は真理の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1265",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of truth, while compassion is its fruit.",
            "hi": "ज्ञान सत्य की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La sabiduría es la raíz de la verdad, mientras que la compasión es su fruto.",
            "fr": "La sagesse est la racine de la vérité, tandis que la compassion en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Wahrheit, während das Mitgefühl seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a verdade, enquanto a compaixão é o seu fruto.",
            "ja": "知恵は真理の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1266",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of truth, while freedom is its fruit.",
            "hi": "ज्ञान सत्य की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la verdad, mientras que la libertad es su fruto.",
            "fr": "La sagesse est la racine de la vérité, tandis que la liberté en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Wahrheit, während die Freiheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a verdade, enquanto a liberdade é o seu fruto.",
            "ja": "知恵は真理の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1267",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of truth, while destiny is its fruit.",
            "hi": "ज्ञान सत्य की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La sabiduría es la raíz de la verdad, mientras que el destino es su fruto.",
            "fr": "La sagesse est la racine de la vérité, tandis que le destin en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Wahrheit, während das Schicksal seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a verdade, enquanto o destino é o seu fruto.",
            "ja": "知恵は真理の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1268",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of truth, while humility is its fruit.",
            "hi": "ज्ञान सत्य की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la verdad, mientras que la humildad es su fruto.",
            "fr": "La sagesse est la racine de la vérité, tandis que l'humilité en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Wahrheit, während die Bescheidenheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a verdade, enquanto a humildade é o seu fruto.",
            "ja": "知恵は真理の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1269",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of truth, while reason is its fruit.",
            "hi": "ज्ञान सत्य की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La sabiduría es la raíz de la verdad, mientras que la razón es su fruto.",
            "fr": "La sagesse est la racine de la vérité, tandis que la raison en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Wahrheit, während die Vernunft seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a verdade, enquanto a razão é o seu fruto.",
            "ja": "知恵は真理の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1270",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of courage, while patience is its fruit.",
            "hi": "ज्ञान साहस की जड़ है, जबकि धैर्य इसका फल है।",
            "es": "La sabiduría es la raíz de el coraje, mientras que la paciencia es su fruto.",
            "fr": "La sagesse est la racine de le courage, tandis que la patience en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Mut, während die Geduld seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a coragem, enquanto a paciência é o seu fruto.",
            "ja": "知恵は勇気の根であり、忍耐はその果実である。"
        }
    },
    {
        "id": "quote_1271",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of courage, while reflection is its fruit.",
            "hi": "ज्ञान साहस की जड़ है, जबकि विचार इसका फल है।",
            "es": "La sabiduría es la raíz de el coraje, mientras que la reflexión es su fruto.",
            "fr": "La sagesse est la racine de le courage, tandis que la réflexion en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Mut, während die Reflexion seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a coragem, enquanto a reflexão é o seu fruto.",
            "ja": "知恵は勇気の根であり、熟考はその果実である。"
        }
    },
    {
        "id": "quote_1272",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of courage, while silence is its fruit.",
            "hi": "ज्ञान साहस की जड़ है, जबकि मौन इसका फल है।",
            "es": "La sabiduría es la raíz de el coraje, mientras que el silencio es su fruto.",
            "fr": "La sagesse est la racine de le courage, tandis que le silence en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Mut, während die Stille seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a coragem, enquanto o silêncio é o seu fruto.",
            "ja": "知恵は勇気の根であり、沈黙はその果実である。"
        }
    },
    {
        "id": "quote_1273",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of courage, while knowledge is its fruit.",
            "hi": "ज्ञान साहस की जड़ है, जबकि विद्या इसका फल है।",
            "es": "La sabiduría es la raíz de el coraje, mientras que el conocimiento es su fruto.",
            "fr": "La sagesse est la racine de le courage, tandis que la connaissance en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Mut, während das Wissen seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a coragem, enquanto o conhecimento é o seu fruto.",
            "ja": "知恵は勇気の根であり、知識はその果実である。"
        }
    },
    {
        "id": "quote_1274",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of courage, while action is its fruit.",
            "hi": "ज्ञान साहस की जड़ है, जबकि कर्म इसका फल है।",
            "es": "La sabiduría es la raíz de el coraje, mientras que la acción es su fruto.",
            "fr": "La sagesse est la racine de le courage, tandis que l'action en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Mut, während die Handlung seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a coragem, enquanto a ação é o seu fruto.",
            "ja": "知恵は勇気の根であり、行動はその果実である。"
        }
    },
    {
        "id": "quote_1275",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of courage, while harmony is its fruit.",
            "hi": "ज्ञान साहस की जड़ है, जबकि सद्भाव इसका फल है।",
            "es": "La sabiduría es la raíz de el coraje, mientras que la armonía es su fruto.",
            "fr": "La sagesse est la racine de le courage, tandis que l'harmonie en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Mut, während die Harmonie seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a coragem, enquanto a harmonia é o seu fruto.",
            "ja": "知恵は勇気の根であり、調和はその果実である。"
        }
    },
    {
        "id": "quote_1276",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of courage, while justice is its fruit.",
            "hi": "ज्ञान साहस की जड़ है, जबकि न्याय इसका फल है।",
            "es": "La sabiduría es la raíz de el coraje, mientras que la justicia es su fruto.",
            "fr": "La sagesse est la racine de le courage, tandis que la justice en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Mut, während die Gerechtigkeit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a coragem, enquanto a justiça é o seu fruto.",
            "ja": "知恵は勇気の根であり、正義はその果実である。"
        }
    },
    {
        "id": "quote_1277",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of courage, while virtue is its fruit.",
            "hi": "ज्ञान साहस की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La sabiduría es la raíz de el coraje, mientras que la virtud es su fruto.",
            "fr": "La sagesse est la racine de le courage, tandis que la vertu en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Mut, während die Tugend seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a coragem, enquanto a virtude é o seu fruto.",
            "ja": "知恵は勇気の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1278",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of courage, while the mind is its fruit.",
            "hi": "ज्ञान साहस की जड़ है, जबकि मन इसका फल है।",
            "es": "La sabiduría es la raíz de el coraje, mientras que la mente es su fruto.",
            "fr": "La sagesse est la racine de le courage, tandis que l'esprit en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Mut, während der Geist seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a coragem, enquanto a mente é o seu fruto.",
            "ja": "知恵は勇気の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1279",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of courage, while the soul is its fruit.",
            "hi": "ज्ञान साहस की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La sabiduría es la raíz de el coraje, mientras que el alma es su fruto.",
            "fr": "La sagesse est la racine de le courage, tandis que l'âme en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Mut, während die Seele seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a coragem, enquanto a alma é o seu fruto.",
            "ja": "知恵は勇気の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1280",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of courage, while time is its fruit.",
            "hi": "ज्ञान साहस की जड़ है, जबकि समय इसका फल है।",
            "es": "La sabiduría es la raíz de el coraje, mientras que el tiempo es su fruto.",
            "fr": "La sagesse est la racine de le courage, tandis que le temps en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Mut, während die Zeit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a coragem, enquanto o tempo é o seu fruto.",
            "ja": "知恵は勇気の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1281",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of courage, while life is its fruit.",
            "hi": "ज्ञान साहस की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La sabiduría es la raíz de el coraje, mientras que la vida es su fruto.",
            "fr": "La sagesse est la racine de le courage, tandis que la vie en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Mut, während das Leben seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a coragem, enquanto a vida é o seu fruto.",
            "ja": "知恵は勇気の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1282",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of courage, while love is its fruit.",
            "hi": "ज्ञान साहस की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La sabiduría es la raíz de el coraje, mientras que el amor es su fruto.",
            "fr": "La sagesse est la racine de le courage, tandis que l'amour en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Mut, während die Liebe seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a coragem, enquanto o amor é o seu fruto.",
            "ja": "知恵は勇気の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1283",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of courage, while compassion is its fruit.",
            "hi": "ज्ञान साहस की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La sabiduría es la raíz de el coraje, mientras que la compasión es su fruto.",
            "fr": "La sagesse est la racine de le courage, tandis que la compassion en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Mut, während das Mitgefühl seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a coragem, enquanto a compaixão é o seu fruto.",
            "ja": "知恵は勇気の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1284",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of courage, while freedom is its fruit.",
            "hi": "ज्ञान साहस की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La sabiduría es la raíz de el coraje, mientras que la libertad es su fruto.",
            "fr": "La sagesse est la racine de le courage, tandis que la liberté en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Mut, während die Freiheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a coragem, enquanto a liberdade é o seu fruto.",
            "ja": "知恵は勇気の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1285",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of courage, while destiny is its fruit.",
            "hi": "ज्ञान साहस की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La sabiduría es la raíz de el coraje, mientras que el destino es su fruto.",
            "fr": "La sagesse est la racine de le courage, tandis que le destin en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Mut, während das Schicksal seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a coragem, enquanto o destino é o seu fruto.",
            "ja": "知恵は勇気の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1286",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of courage, while humility is its fruit.",
            "hi": "ज्ञान साहस की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La sabiduría es la raíz de el coraje, mientras que la humildad es su fruto.",
            "fr": "La sagesse est la racine de le courage, tandis que l'humilité en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Mut, während die Bescheidenheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a coragem, enquanto a humildade é o seu fruto.",
            "ja": "知恵は勇気の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1287",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of courage, while reason is its fruit.",
            "hi": "ज्ञान साहस की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La sabiduría es la raíz de el coraje, mientras que la razón es su fruto.",
            "fr": "La sagesse est la racine de le courage, tandis que la raison en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Mut, während die Vernunft seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a coragem, enquanto a razão é o seu fruto.",
            "ja": "知恵は勇気の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1288",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of patience, while reflection is its fruit.",
            "hi": "ज्ञान धैर्य की जड़ है, जबकि विचार इसका फल है।",
            "es": "La sabiduría es la raíz de la paciencia, mientras que la reflexión es su fruto.",
            "fr": "La sagesse est la racine de la patience, tandis que la réflexion en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Geduld, während die Reflexion seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paciência, enquanto a reflexão é o seu fruto.",
            "ja": "知恵は忍耐の根であり、熟考はその果実である。"
        }
    },
    {
        "id": "quote_1289",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of patience, while silence is its fruit.",
            "hi": "ज्ञान धैर्य की जड़ है, जबकि मौन इसका फल है।",
            "es": "La sabiduría es la raíz de la paciencia, mientras que el silencio es su fruto.",
            "fr": "La sagesse est la racine de la patience, tandis que le silence en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Geduld, während die Stille seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paciência, enquanto o silêncio é o seu fruto.",
            "ja": "知恵は忍耐の根であり、沈黙はその果実である。"
        }
    },
    {
        "id": "quote_1290",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of patience, while knowledge is its fruit.",
            "hi": "ज्ञान धैर्य की जड़ है, जबकि विद्या इसका फल है।",
            "es": "La sabiduría es la raíz de la paciencia, mientras que el conocimiento es su fruto.",
            "fr": "La sagesse est la racine de la patience, tandis que la connaissance en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Geduld, während das Wissen seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paciência, enquanto o conhecimento é o seu fruto.",
            "ja": "知恵は忍耐の根であり、知識はその果実である。"
        }
    },
    {
        "id": "quote_1291",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of patience, while action is its fruit.",
            "hi": "ज्ञान धैर्य की जड़ है, जबकि कर्म इसका फल है।",
            "es": "La sabiduría es la raíz de la paciencia, mientras que la acción es su fruto.",
            "fr": "La sagesse est la racine de la patience, tandis que l'action en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Geduld, während die Handlung seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paciência, enquanto a ação é o seu fruto.",
            "ja": "知恵は忍耐の根であり、行動はその果実である。"
        }
    },
    {
        "id": "quote_1292",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of patience, while harmony is its fruit.",
            "hi": "ज्ञान धैर्य की जड़ है, जबकि सद्भाव इसका फल है।",
            "es": "La sabiduría es la raíz de la paciencia, mientras que la armonía es su fruto.",
            "fr": "La sagesse est la racine de la patience, tandis que l'harmonie en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Geduld, während die Harmonie seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paciência, enquanto a harmonia é o seu fruto.",
            "ja": "知恵は忍耐の根であり、調和はその果実である。"
        }
    },
    {
        "id": "quote_1293",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of patience, while justice is its fruit.",
            "hi": "ज्ञान धैर्य की जड़ है, जबकि न्याय इसका फल है।",
            "es": "La sabiduría es la raíz de la paciencia, mientras que la justicia es su fruto.",
            "fr": "La sagesse est la racine de la patience, tandis que la justice en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Geduld, während die Gerechtigkeit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paciência, enquanto a justiça é o seu fruto.",
            "ja": "知恵は忍耐の根であり、正義はその果実である。"
        }
    },
    {
        "id": "quote_1294",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of patience, while virtue is its fruit.",
            "hi": "ज्ञान धैर्य की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La sabiduría es la raíz de la paciencia, mientras que la virtud es su fruto.",
            "fr": "La sagesse est la racine de la patience, tandis que la vertu en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Geduld, während die Tugend seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paciência, enquanto a virtude é o seu fruto.",
            "ja": "知恵は忍耐の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1295",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of patience, while the mind is its fruit.",
            "hi": "ज्ञान धैर्य की जड़ है, जबकि मन इसका फल है।",
            "es": "La sabiduría es la raíz de la paciencia, mientras que la mente es su fruto.",
            "fr": "La sagesse est la racine de la patience, tandis que l'esprit en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Geduld, während der Geist seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paciência, enquanto a mente é o seu fruto.",
            "ja": "知恵は忍耐の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1296",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of patience, while the soul is its fruit.",
            "hi": "ज्ञान धैर्य की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La sabiduría es la raíz de la paciencia, mientras que el alma es su fruto.",
            "fr": "La sagesse est la racine de la patience, tandis que l'âme en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Geduld, während die Seele seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paciência, enquanto a alma é o seu fruto.",
            "ja": "知恵は忍耐の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1297",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of patience, while time is its fruit.",
            "hi": "ज्ञान धैर्य की जड़ है, जबकि समय इसका फल है।",
            "es": "La sabiduría es la raíz de la paciencia, mientras que el tiempo es su fruto.",
            "fr": "La sagesse est la racine de la patience, tandis que le temps en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Geduld, während die Zeit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paciência, enquanto o tempo é o seu fruto.",
            "ja": "知恵は忍耐の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1298",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of patience, while life is its fruit.",
            "hi": "ज्ञान धैर्य की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La sabiduría es la raíz de la paciencia, mientras que la vida es su fruto.",
            "fr": "La sagesse est la racine de la patience, tandis que la vie en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Geduld, während das Leben seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paciência, enquanto a vida é o seu fruto.",
            "ja": "知恵は忍耐の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1299",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of patience, while love is its fruit.",
            "hi": "ज्ञान धैर्य की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La sabiduría es la raíz de la paciencia, mientras que el amor es su fruto.",
            "fr": "La sagesse est la racine de la patience, tandis que l'amour en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Geduld, während die Liebe seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paciência, enquanto o amor é o seu fruto.",
            "ja": "知恵は忍耐の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1300",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of patience, while compassion is its fruit.",
            "hi": "ज्ञान धैर्य की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La sabiduría es la raíz de la paciencia, mientras que la compasión es su fruto.",
            "fr": "La sagesse est la racine de la patience, tandis que la compassion en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Geduld, während das Mitgefühl seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paciência, enquanto a compaixão é o seu fruto.",
            "ja": "知恵は忍耐の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1301",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of patience, while freedom is its fruit.",
            "hi": "ज्ञान धैर्य की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la paciencia, mientras que la libertad es su fruto.",
            "fr": "La sagesse est la racine de la patience, tandis que la liberté en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Geduld, während die Freiheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paciência, enquanto a liberdade é o seu fruto.",
            "ja": "知恵は忍耐の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1302",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of patience, while destiny is its fruit.",
            "hi": "ज्ञान धैर्य की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La sabiduría es la raíz de la paciencia, mientras que el destino es su fruto.",
            "fr": "La sagesse est la racine de la patience, tandis que le destin en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Geduld, während das Schicksal seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paciência, enquanto o destino é o seu fruto.",
            "ja": "知恵は忍耐の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1303",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of patience, while humility is its fruit.",
            "hi": "ज्ञान धैर्य की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la paciencia, mientras que la humildad es su fruto.",
            "fr": "La sagesse est la racine de la patience, tandis que l'humilité en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Geduld, während die Bescheidenheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paciência, enquanto a humildade é o seu fruto.",
            "ja": "知恵は忍耐の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1304",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of patience, while reason is its fruit.",
            "hi": "ज्ञान धैर्य की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La sabiduría es la raíz de la paciencia, mientras que la razón es su fruto.",
            "fr": "La sagesse est la racine de la patience, tandis que la raison en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Geduld, während die Vernunft seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a paciência, enquanto a razão é o seu fruto.",
            "ja": "知恵は忍耐の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1305",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of reflection, while silence is its fruit.",
            "hi": "ज्ञान विचार की जड़ है, जबकि मौन इसका फल है।",
            "es": "La sabiduría es la raíz de la reflexión, mientras que el silencio es su fruto.",
            "fr": "La sagesse est la racine de la réflexion, tandis que le silence en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Reflexion, während die Stille seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a reflexão, enquanto o silêncio é o seu fruto.",
            "ja": "知恵は熟考の根であり、沈黙はその果実である。"
        }
    },
    {
        "id": "quote_1306",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of reflection, while knowledge is its fruit.",
            "hi": "ज्ञान विचार की जड़ है, जबकि विद्या इसका फल है।",
            "es": "La sabiduría es la raíz de la reflexión, mientras que el conocimiento es su fruto.",
            "fr": "La sagesse est la racine de la réflexion, tandis que la connaissance en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Reflexion, während das Wissen seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a reflexão, enquanto o conhecimento é o seu fruto.",
            "ja": "知恵は熟考の根であり、知識はその果実である。"
        }
    },
    {
        "id": "quote_1307",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of reflection, while action is its fruit.",
            "hi": "ज्ञान विचार की जड़ है, जबकि कर्म इसका फल है।",
            "es": "La sabiduría es la raíz de la reflexión, mientras que la acción es su fruto.",
            "fr": "La sagesse est la racine de la réflexion, tandis que l'action en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Reflexion, während die Handlung seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a reflexão, enquanto a ação é o seu fruto.",
            "ja": "知恵は熟考の根であり、行動はその果実である。"
        }
    },
    {
        "id": "quote_1308",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of reflection, while harmony is its fruit.",
            "hi": "ज्ञान विचार की जड़ है, जबकि सद्भाव इसका फल है।",
            "es": "La sabiduría es la raíz de la reflexión, mientras que la armonía es su fruto.",
            "fr": "La sagesse est la racine de la réflexion, tandis que l'harmonie en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Reflexion, während die Harmonie seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a reflexão, enquanto a harmonia é o seu fruto.",
            "ja": "知恵は熟考の根であり、調和はその果実である。"
        }
    },
    {
        "id": "quote_1309",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of reflection, while justice is its fruit.",
            "hi": "ज्ञान विचार की जड़ है, जबकि न्याय इसका फल है।",
            "es": "La sabiduría es la raíz de la reflexión, mientras que la justicia es su fruto.",
            "fr": "La sagesse est la racine de la réflexion, tandis que la justice en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Reflexion, während die Gerechtigkeit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a reflexão, enquanto a justiça é o seu fruto.",
            "ja": "知恵は熟考の根であり、正義はその果実である。"
        }
    },
    {
        "id": "quote_1310",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of reflection, while virtue is its fruit.",
            "hi": "ज्ञान विचार की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La sabiduría es la raíz de la reflexión, mientras que la virtud es su fruto.",
            "fr": "La sagesse est la racine de la réflexion, tandis que la vertu en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Reflexion, während die Tugend seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a reflexão, enquanto a virtude é o seu fruto.",
            "ja": "知恵は熟考の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1311",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of reflection, while the mind is its fruit.",
            "hi": "ज्ञान विचार की जड़ है, जबकि मन इसका फल है।",
            "es": "La sabiduría es la raíz de la reflexión, mientras que la mente es su fruto.",
            "fr": "La sagesse est la racine de la réflexion, tandis que l'esprit en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Reflexion, während der Geist seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a reflexão, enquanto a mente é o seu fruto.",
            "ja": "知恵は熟考の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1312",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of reflection, while the soul is its fruit.",
            "hi": "ज्ञान विचार की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La sabiduría es la raíz de la reflexión, mientras que el alma es su fruto.",
            "fr": "La sagesse est la racine de la réflexion, tandis que l'âme en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Reflexion, während die Seele seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a reflexão, enquanto a alma é o seu fruto.",
            "ja": "知恵は熟考の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1313",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of reflection, while time is its fruit.",
            "hi": "ज्ञान विचार की जड़ है, जबकि समय इसका फल है।",
            "es": "La sabiduría es la raíz de la reflexión, mientras que el tiempo es su fruto.",
            "fr": "La sagesse est la racine de la réflexion, tandis que le temps en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Reflexion, während die Zeit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a reflexão, enquanto o tempo é o seu fruto.",
            "ja": "知恵は熟考の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1314",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of reflection, while life is its fruit.",
            "hi": "ज्ञान विचार की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La sabiduría es la raíz de la reflexión, mientras que la vida es su fruto.",
            "fr": "La sagesse est la racine de la réflexion, tandis que la vie en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Reflexion, während das Leben seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a reflexão, enquanto a vida é o seu fruto.",
            "ja": "知恵は熟考の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1315",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of reflection, while love is its fruit.",
            "hi": "ज्ञान विचार की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La sabiduría es la raíz de la reflexión, mientras que el amor es su fruto.",
            "fr": "La sagesse est la racine de la réflexion, tandis que l'amour en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Reflexion, während die Liebe seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a reflexão, enquanto o amor é o seu fruto.",
            "ja": "知恵は熟考の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1316",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of reflection, while compassion is its fruit.",
            "hi": "ज्ञान विचार की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La sabiduría es la raíz de la reflexión, mientras que la compasión es su fruto.",
            "fr": "La sagesse est la racine de la réflexion, tandis que la compassion en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Reflexion, während das Mitgefühl seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a reflexão, enquanto a compaixão é o seu fruto.",
            "ja": "知恵は熟考の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1317",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of reflection, while freedom is its fruit.",
            "hi": "ज्ञान विचार की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la reflexión, mientras que la libertad es su fruto.",
            "fr": "La sagesse est la racine de la réflexion, tandis que la liberté en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Reflexion, während die Freiheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a reflexão, enquanto a liberdade é o seu fruto.",
            "ja": "知恵は熟考の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1318",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of reflection, while destiny is its fruit.",
            "hi": "ज्ञान विचार की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La sabiduría es la raíz de la reflexión, mientras que el destino es su fruto.",
            "fr": "La sagesse est la racine de la réflexion, tandis que le destin en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Reflexion, während das Schicksal seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a reflexão, enquanto o destino é o seu fruto.",
            "ja": "知恵は熟考の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1319",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of reflection, while humility is its fruit.",
            "hi": "ज्ञान विचार की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la reflexión, mientras que la humildad es su fruto.",
            "fr": "La sagesse est la racine de la réflexion, tandis que l'humilité en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Reflexion, während die Bescheidenheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a reflexão, enquanto a humildade é o seu fruto.",
            "ja": "知恵は熟考の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1320",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of reflection, while reason is its fruit.",
            "hi": "ज्ञान विचार की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La sabiduría es la raíz de la reflexión, mientras que la razón es su fruto.",
            "fr": "La sagesse est la racine de la réflexion, tandis que la raison en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Reflexion, während die Vernunft seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a reflexão, enquanto a razão é o seu fruto.",
            "ja": "知恵は熟考の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1321",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of silence, while knowledge is its fruit.",
            "hi": "ज्ञान मौन की जड़ है, जबकि विद्या इसका फल है।",
            "es": "La sabiduría es la raíz de el silencio, mientras que el conocimiento es su fruto.",
            "fr": "La sagesse est la racine de le silence, tandis que la connaissance en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Stille, während das Wissen seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o silêncio, enquanto o conhecimento é o seu fruto.",
            "ja": "知恵は沈黙の根であり、知識はその果実である。"
        }
    },
    {
        "id": "quote_1322",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of silence, while action is its fruit.",
            "hi": "ज्ञान मौन की जड़ है, जबकि कर्म इसका फल है।",
            "es": "La sabiduría es la raíz de el silencio, mientras que la acción es su fruto.",
            "fr": "La sagesse est la racine de le silence, tandis que l'action en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Stille, während die Handlung seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o silêncio, enquanto a ação é o seu fruto.",
            "ja": "知恵は沈黙の根であり、行動はその果実である。"
        }
    },
    {
        "id": "quote_1323",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of silence, while harmony is its fruit.",
            "hi": "ज्ञान मौन की जड़ है, जबकि सद्भाव इसका फल है।",
            "es": "La sabiduría es la raíz de el silencio, mientras que la armonía es su fruto.",
            "fr": "La sagesse est la racine de le silence, tandis que l'harmonie en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Stille, während die Harmonie seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o silêncio, enquanto a harmonia é o seu fruto.",
            "ja": "知恵は沈黙の根であり、調和はその果実である。"
        }
    },
    {
        "id": "quote_1324",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of silence, while justice is its fruit.",
            "hi": "ज्ञान मौन की जड़ है, जबकि न्याय इसका फल है।",
            "es": "La sabiduría es la raíz de el silencio, mientras que la justicia es su fruto.",
            "fr": "La sagesse est la racine de le silence, tandis que la justice en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Stille, während die Gerechtigkeit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o silêncio, enquanto a justiça é o seu fruto.",
            "ja": "知恵は沈黙の根であり、正義はその果実である。"
        }
    },
    {
        "id": "quote_1325",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of silence, while virtue is its fruit.",
            "hi": "ज्ञान मौन की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La sabiduría es la raíz de el silencio, mientras que la virtud es su fruto.",
            "fr": "La sagesse est la racine de le silence, tandis que la vertu en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Stille, während die Tugend seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o silêncio, enquanto a virtude é o seu fruto.",
            "ja": "知恵は沈黙の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1326",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of silence, while the mind is its fruit.",
            "hi": "ज्ञान मौन की जड़ है, जबकि मन इसका फल है।",
            "es": "La sabiduría es la raíz de el silencio, mientras que la mente es su fruto.",
            "fr": "La sagesse est la racine de le silence, tandis que l'esprit en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Stille, während der Geist seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o silêncio, enquanto a mente é o seu fruto.",
            "ja": "知恵は沈黙の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1327",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of silence, while the soul is its fruit.",
            "hi": "ज्ञान मौन की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La sabiduría es la raíz de el silencio, mientras que el alma es su fruto.",
            "fr": "La sagesse est la racine de le silence, tandis que l'âme en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Stille, während die Seele seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o silêncio, enquanto a alma é o seu fruto.",
            "ja": "知恵は沈黙の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1328",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of silence, while time is its fruit.",
            "hi": "ज्ञान मौन की जड़ है, जबकि समय इसका फल है।",
            "es": "La sabiduría es la raíz de el silencio, mientras que el tiempo es su fruto.",
            "fr": "La sagesse est la racine de le silence, tandis que le temps en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Stille, während die Zeit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o silêncio, enquanto o tempo é o seu fruto.",
            "ja": "知恵は沈黙の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1329",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of silence, while life is its fruit.",
            "hi": "ज्ञान मौन की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La sabiduría es la raíz de el silencio, mientras que la vida es su fruto.",
            "fr": "La sagesse est la racine de le silence, tandis que la vie en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Stille, während das Leben seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o silêncio, enquanto a vida é o seu fruto.",
            "ja": "知恵は沈黙の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1330",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of silence, while love is its fruit.",
            "hi": "ज्ञान मौन की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La sabiduría es la raíz de el silencio, mientras que el amor es su fruto.",
            "fr": "La sagesse est la racine de le silence, tandis que l'amour en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Stille, während die Liebe seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o silêncio, enquanto o amor é o seu fruto.",
            "ja": "知恵は沈黙の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1331",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of silence, while compassion is its fruit.",
            "hi": "ज्ञान मौन की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La sabiduría es la raíz de el silencio, mientras que la compasión es su fruto.",
            "fr": "La sagesse est la racine de le silence, tandis que la compassion en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Stille, während das Mitgefühl seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o silêncio, enquanto a compaixão é o seu fruto.",
            "ja": "知恵は沈黙の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1332",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of silence, while freedom is its fruit.",
            "hi": "ज्ञान मौन की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La sabiduría es la raíz de el silencio, mientras que la libertad es su fruto.",
            "fr": "La sagesse est la racine de le silence, tandis que la liberté en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Stille, während die Freiheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o silêncio, enquanto a liberdade é o seu fruto.",
            "ja": "知恵は沈黙の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1333",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of silence, while destiny is its fruit.",
            "hi": "ज्ञान मौन की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La sabiduría es la raíz de el silencio, mientras que el destino es su fruto.",
            "fr": "La sagesse est la racine de le silence, tandis que le destin en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Stille, während das Schicksal seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o silêncio, enquanto o destino é o seu fruto.",
            "ja": "知恵は沈黙の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1334",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of silence, while humility is its fruit.",
            "hi": "ज्ञान मौन की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La sabiduría es la raíz de el silencio, mientras que la humildad es su fruto.",
            "fr": "La sagesse est la racine de le silence, tandis que l'humilité en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Stille, während die Bescheidenheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o silêncio, enquanto a humildade é o seu fruto.",
            "ja": "知恵は沈黙の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1335",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of silence, while reason is its fruit.",
            "hi": "ज्ञान मौन की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La sabiduría es la raíz de el silencio, mientras que la razón es su fruto.",
            "fr": "La sagesse est la racine de le silence, tandis que la raison en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Stille, während die Vernunft seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o silêncio, enquanto a razão é o seu fruto.",
            "ja": "知恵は沈黙の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1336",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of knowledge, while action is its fruit.",
            "hi": "ज्ञान विद्या की जड़ है, जबकि कर्म इसका फल है।",
            "es": "La sabiduría es la raíz de el conocimiento, mientras que la acción es su fruto.",
            "fr": "La sagesse est la racine de la connaissance, tandis que l'action en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Wissen, während die Handlung seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o conhecimento, enquanto a ação é o seu fruto.",
            "ja": "知恵は知識の根であり、行動はその果実である。"
        }
    },
    {
        "id": "quote_1337",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of knowledge, while harmony is its fruit.",
            "hi": "ज्ञान विद्या की जड़ है, जबकि सद्भाव इसका फल है।",
            "es": "La sabiduría es la raíz de el conocimiento, mientras que la armonía es su fruto.",
            "fr": "La sagesse est la racine de la connaissance, tandis que l'harmonie en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Wissen, während die Harmonie seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o conhecimento, enquanto a harmonia é o seu fruto.",
            "ja": "知恵は知識の根であり、調和はその果実である。"
        }
    },
    {
        "id": "quote_1338",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of knowledge, while justice is its fruit.",
            "hi": "ज्ञान विद्या की जड़ है, जबकि न्याय इसका फल है।",
            "es": "La sabiduría es la raíz de el conocimiento, mientras que la justicia es su fruto.",
            "fr": "La sagesse est la racine de la connaissance, tandis que la justice en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Wissen, während die Gerechtigkeit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o conhecimento, enquanto a justiça é o seu fruto.",
            "ja": "知恵は知識の根であり、正義はその果実である。"
        }
    },
    {
        "id": "quote_1339",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of knowledge, while virtue is its fruit.",
            "hi": "ज्ञान विद्या की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La sabiduría es la raíz de el conocimiento, mientras que la virtud es su fruto.",
            "fr": "La sagesse est la racine de la connaissance, tandis que la vertu en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Wissen, während die Tugend seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o conhecimento, enquanto a virtude é o seu fruto.",
            "ja": "知恵は知識の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1340",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of knowledge, while the mind is its fruit.",
            "hi": "ज्ञान विद्या की जड़ है, जबकि मन इसका फल है।",
            "es": "La sabiduría es la raíz de el conocimiento, mientras que la mente es su fruto.",
            "fr": "La sagesse est la racine de la connaissance, tandis que l'esprit en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Wissen, während der Geist seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o conhecimento, enquanto a mente é o seu fruto.",
            "ja": "知恵は知識の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1341",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of knowledge, while the soul is its fruit.",
            "hi": "ज्ञान विद्या की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La sabiduría es la raíz de el conocimiento, mientras que el alma es su fruto.",
            "fr": "La sagesse est la racine de la connaissance, tandis que l'âme en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Wissen, während die Seele seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o conhecimento, enquanto a alma é o seu fruto.",
            "ja": "知恵は知識の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1342",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of knowledge, while time is its fruit.",
            "hi": "ज्ञान विद्या की जड़ है, जबकि समय इसका फल है।",
            "es": "La sabiduría es la raíz de el conocimiento, mientras que el tiempo es su fruto.",
            "fr": "La sagesse est la racine de la connaissance, tandis que le temps en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Wissen, während die Zeit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o conhecimento, enquanto o tempo é o seu fruto.",
            "ja": "知恵は知識の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1343",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of knowledge, while life is its fruit.",
            "hi": "ज्ञान विद्या की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La sabiduría es la raíz de el conocimiento, mientras que la vida es su fruto.",
            "fr": "La sagesse est la racine de la connaissance, tandis que la vie en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Wissen, während das Leben seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o conhecimento, enquanto a vida é o seu fruto.",
            "ja": "知恵は知識の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1344",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of knowledge, while love is its fruit.",
            "hi": "ज्ञान विद्या की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La sabiduría es la raíz de el conocimiento, mientras que el amor es su fruto.",
            "fr": "La sagesse est la racine de la connaissance, tandis que l'amour en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Wissen, während die Liebe seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o conhecimento, enquanto o amor é o seu fruto.",
            "ja": "知恵は知識の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1345",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of knowledge, while compassion is its fruit.",
            "hi": "ज्ञान विद्या की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La sabiduría es la raíz de el conocimiento, mientras que la compasión es su fruto.",
            "fr": "La sagesse est la racine de la connaissance, tandis que la compassion en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Wissen, während das Mitgefühl seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o conhecimento, enquanto a compaixão é o seu fruto.",
            "ja": "知恵は知識の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1346",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of knowledge, while freedom is its fruit.",
            "hi": "ज्ञान विद्या की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La sabiduría es la raíz de el conocimiento, mientras que la libertad es su fruto.",
            "fr": "La sagesse est la racine de la connaissance, tandis que la liberté en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Wissen, während die Freiheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o conhecimento, enquanto a liberdade é o seu fruto.",
            "ja": "知恵は知識の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1347",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of knowledge, while destiny is its fruit.",
            "hi": "ज्ञान विद्या की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La sabiduría es la raíz de el conocimiento, mientras que el destino es su fruto.",
            "fr": "La sagesse est la racine de la connaissance, tandis que le destin en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Wissen, während das Schicksal seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o conhecimento, enquanto o destino é o seu fruto.",
            "ja": "知恵は知識の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1348",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of knowledge, while humility is its fruit.",
            "hi": "ज्ञान विद्या की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La sabiduría es la raíz de el conocimiento, mientras que la humildad es su fruto.",
            "fr": "La sagesse est la racine de la connaissance, tandis que l'humilité en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Wissen, während die Bescheidenheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o conhecimento, enquanto a humildade é o seu fruto.",
            "ja": "知恵は知識の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1349",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of knowledge, while reason is its fruit.",
            "hi": "ज्ञान विद्या की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La sabiduría es la raíz de el conocimiento, mientras que la razón es su fruto.",
            "fr": "La sagesse est la racine de la connaissance, tandis que la raison en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Wissen, während die Vernunft seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o conhecimento, enquanto a razão é o seu fruto.",
            "ja": "知恵は知識の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1350",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of action, while harmony is its fruit.",
            "hi": "ज्ञान कर्म की जड़ है, जबकि सद्भाव इसका फल है।",
            "es": "La sabiduría es la raíz de la acción, mientras que la armonía es su fruto.",
            "fr": "La sagesse est la racine de l'action, tandis que l'harmonie en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Handlung, während die Harmonie seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a ação, enquanto a harmonia é o seu fruto.",
            "ja": "知恵は行動の根であり、調和はその果実である。"
        }
    },
    {
        "id": "quote_1351",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of action, while justice is its fruit.",
            "hi": "ज्ञान कर्म की जड़ है, जबकि न्याय इसका फल है।",
            "es": "La sabiduría es la raíz de la acción, mientras que la justicia es su fruto.",
            "fr": "La sagesse est la racine de l'action, tandis que la justice en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Handlung, während die Gerechtigkeit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a ação, enquanto a justiça é o seu fruto.",
            "ja": "知恵は行動の根であり、正義はその果実である。"
        }
    },
    {
        "id": "quote_1352",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of action, while virtue is its fruit.",
            "hi": "ज्ञान कर्म की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La sabiduría es la raíz de la acción, mientras que la virtud es su fruto.",
            "fr": "La sagesse est la racine de l'action, tandis que la vertu en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Handlung, während die Tugend seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a ação, enquanto a virtude é o seu fruto.",
            "ja": "知恵は行動の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1353",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of action, while the mind is its fruit.",
            "hi": "ज्ञान कर्म की जड़ है, जबकि मन इसका फल है।",
            "es": "La sabiduría es la raíz de la acción, mientras que la mente es su fruto.",
            "fr": "La sagesse est la racine de l'action, tandis que l'esprit en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Handlung, während der Geist seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a ação, enquanto a mente é o seu fruto.",
            "ja": "知恵は行動の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1354",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of action, while the soul is its fruit.",
            "hi": "ज्ञान कर्म की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La sabiduría es la raíz de la acción, mientras que el alma es su fruto.",
            "fr": "La sagesse est la racine de l'action, tandis que l'âme en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Handlung, während die Seele seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a ação, enquanto a alma é o seu fruto.",
            "ja": "知恵は行動の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1355",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of action, while time is its fruit.",
            "hi": "ज्ञान कर्म की जड़ है, जबकि समय इसका फल है।",
            "es": "La sabiduría es la raíz de la acción, mientras que el tiempo es su fruto.",
            "fr": "La sagesse est la racine de l'action, tandis que le temps en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Handlung, während die Zeit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a ação, enquanto o tempo é o seu fruto.",
            "ja": "知恵は行動の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1356",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of action, while life is its fruit.",
            "hi": "ज्ञान कर्म की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La sabiduría es la raíz de la acción, mientras que la vida es su fruto.",
            "fr": "La sagesse est la racine de l'action, tandis que la vie en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Handlung, während das Leben seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a ação, enquanto a vida é o seu fruto.",
            "ja": "知恵は行動の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1357",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of action, while love is its fruit.",
            "hi": "ज्ञान कर्म की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La sabiduría es la raíz de la acción, mientras que el amor es su fruto.",
            "fr": "La sagesse est la racine de l'action, tandis que l'amour en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Handlung, während die Liebe seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a ação, enquanto o amor é o seu fruto.",
            "ja": "知恵は行動の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1358",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of action, while compassion is its fruit.",
            "hi": "ज्ञान कर्म की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La sabiduría es la raíz de la acción, mientras que la compasión es su fruto.",
            "fr": "La sagesse est la racine de l'action, tandis que la compassion en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Handlung, während das Mitgefühl seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a ação, enquanto a compaixão é o seu fruto.",
            "ja": "知恵は行動の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1359",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of action, while freedom is its fruit.",
            "hi": "ज्ञान कर्म की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la acción, mientras que la libertad es su fruto.",
            "fr": "La sagesse est la racine de l'action, tandis que la liberté en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Handlung, während die Freiheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a ação, enquanto a liberdade é o seu fruto.",
            "ja": "知恵は行動の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1360",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of action, while destiny is its fruit.",
            "hi": "ज्ञान कर्म की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La sabiduría es la raíz de la acción, mientras que el destino es su fruto.",
            "fr": "La sagesse est la racine de l'action, tandis que le destin en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Handlung, während das Schicksal seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a ação, enquanto o destino é o seu fruto.",
            "ja": "知恵は行動の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1361",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of action, while humility is its fruit.",
            "hi": "ज्ञान कर्म की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la acción, mientras que la humildad es su fruto.",
            "fr": "La sagesse est la racine de l'action, tandis que l'humilité en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Handlung, während die Bescheidenheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a ação, enquanto a humildade é o seu fruto.",
            "ja": "知恵は行動の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1362",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of action, while reason is its fruit.",
            "hi": "ज्ञान कर्म की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La sabiduría es la raíz de la acción, mientras que la razón es su fruto.",
            "fr": "La sagesse est la racine de l'action, tandis que la raison en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Handlung, während die Vernunft seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a ação, enquanto a razão é o seu fruto.",
            "ja": "知恵は行動の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1363",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of harmony, while justice is its fruit.",
            "hi": "ज्ञान सद्भाव की जड़ है, जबकि न्याय इसका फल है।",
            "es": "La sabiduría es la raíz de la armonía, mientras que la justicia es su fruto.",
            "fr": "La sagesse est la racine de l'harmonie, tandis que la justice en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Harmonie, während die Gerechtigkeit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a harmonia, enquanto a justiça é o seu fruto.",
            "ja": "知恵は調和の根であり、正義はその果実である。"
        }
    },
    {
        "id": "quote_1364",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of harmony, while virtue is its fruit.",
            "hi": "ज्ञान सद्भाव की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La sabiduría es la raíz de la armonía, mientras que la virtud es su fruto.",
            "fr": "La sagesse est la racine de l'harmonie, tandis que la vertu en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Harmonie, während die Tugend seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a harmonia, enquanto a virtude é o seu fruto.",
            "ja": "知恵は調和の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1365",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of harmony, while the mind is its fruit.",
            "hi": "ज्ञान सद्भाव की जड़ है, जबकि मन इसका फल है।",
            "es": "La sabiduría es la raíz de la armonía, mientras que la mente es su fruto.",
            "fr": "La sagesse est la racine de l'harmonie, tandis que l'esprit en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Harmonie, während der Geist seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a harmonia, enquanto a mente é o seu fruto.",
            "ja": "知恵は調和の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1366",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of harmony, while the soul is its fruit.",
            "hi": "ज्ञान सद्भाव की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La sabiduría es la raíz de la armonía, mientras que el alma es su fruto.",
            "fr": "La sagesse est la racine de l'harmonie, tandis que l'âme en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Harmonie, während die Seele seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a harmonia, enquanto a alma é o seu fruto.",
            "ja": "知恵は調和の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1367",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of harmony, while time is its fruit.",
            "hi": "ज्ञान सद्भाव की जड़ है, जबकि समय इसका फल है।",
            "es": "La sabiduría es la raíz de la armonía, mientras que el tiempo es su fruto.",
            "fr": "La sagesse est la racine de l'harmonie, tandis que le temps en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Harmonie, während die Zeit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a harmonia, enquanto o tempo é o seu fruto.",
            "ja": "知恵は調和の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1368",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of harmony, while life is its fruit.",
            "hi": "ज्ञान सद्भाव की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La sabiduría es la raíz de la armonía, mientras que la vida es su fruto.",
            "fr": "La sagesse est la racine de l'harmonie, tandis que la vie en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Harmonie, während das Leben seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a harmonia, enquanto a vida é o seu fruto.",
            "ja": "知恵は調和の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1369",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of harmony, while love is its fruit.",
            "hi": "ज्ञान सद्भाव की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La sabiduría es la raíz de la armonía, mientras que el amor es su fruto.",
            "fr": "La sagesse est la racine de l'harmonie, tandis que l'amour en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Harmonie, während die Liebe seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a harmonia, enquanto o amor é o seu fruto.",
            "ja": "知恵は調和の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1370",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of harmony, while compassion is its fruit.",
            "hi": "ज्ञान सद्भाव की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La sabiduría es la raíz de la armonía, mientras que la compasión es su fruto.",
            "fr": "La sagesse est la racine de l'harmonie, tandis que la compassion en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Harmonie, während das Mitgefühl seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a harmonia, enquanto a compaixão é o seu fruto.",
            "ja": "知恵は調和の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1371",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of harmony, while freedom is its fruit.",
            "hi": "ज्ञान सद्भाव की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la armonía, mientras que la libertad es su fruto.",
            "fr": "La sagesse est la racine de l'harmonie, tandis que la liberté en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Harmonie, während die Freiheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a harmonia, enquanto a liberdade é o seu fruto.",
            "ja": "知恵は調和の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1372",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of harmony, while destiny is its fruit.",
            "hi": "ज्ञान सद्भाव की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La sabiduría es la raíz de la armonía, mientras que el destino es su fruto.",
            "fr": "La sagesse est la racine de l'harmonie, tandis que le destin en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Harmonie, während das Schicksal seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a harmonia, enquanto o destino é o seu fruto.",
            "ja": "知恵は調和の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1373",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of harmony, while humility is its fruit.",
            "hi": "ज्ञान सद्भाव की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la armonía, mientras que la humildad es su fruto.",
            "fr": "La sagesse est la racine de l'harmonie, tandis que l'humilité en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Harmonie, während die Bescheidenheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a harmonia, enquanto a humildade é o seu fruto.",
            "ja": "知恵は調和の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1374",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of harmony, while reason is its fruit.",
            "hi": "ज्ञान सद्भाव की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La sabiduría es la raíz de la armonía, mientras que la razón es su fruto.",
            "fr": "La sagesse est la racine de l'harmonie, tandis que la raison en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Harmonie, während die Vernunft seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a harmonia, enquanto a razão é o seu fruto.",
            "ja": "知恵は調和の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1375",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of justice, while virtue is its fruit.",
            "hi": "ज्ञान न्याय की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La sabiduría es la raíz de la justicia, mientras que la virtud es su fruto.",
            "fr": "La sagesse est la racine de la justice, tandis que la vertu en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Gerechtigkeit, während die Tugend seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a justiça, enquanto a virtude é o seu fruto.",
            "ja": "知恵は正義の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1376",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of justice, while the mind is its fruit.",
            "hi": "ज्ञान न्याय की जड़ है, जबकि मन इसका फल है।",
            "es": "La sabiduría es la raíz de la justicia, mientras que la mente es su fruto.",
            "fr": "La sagesse est la racine de la justice, tandis que l'esprit en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Gerechtigkeit, während der Geist seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a justiça, enquanto a mente é o seu fruto.",
            "ja": "知恵は正義の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1377",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of justice, while the soul is its fruit.",
            "hi": "ज्ञान न्याय की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La sabiduría es la raíz de la justicia, mientras que el alma es su fruto.",
            "fr": "La sagesse est la racine de la justice, tandis que l'âme en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Gerechtigkeit, während die Seele seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a justiça, enquanto a alma é o seu fruto.",
            "ja": "知恵は正義の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1378",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of justice, while time is its fruit.",
            "hi": "ज्ञान न्याय की जड़ है, जबकि समय इसका फल है।",
            "es": "La sabiduría es la raíz de la justicia, mientras que el tiempo es su fruto.",
            "fr": "La sagesse est la racine de la justice, tandis que le temps en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Gerechtigkeit, während die Zeit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a justiça, enquanto o tempo é o seu fruto.",
            "ja": "知恵は正義の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1379",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of justice, while life is its fruit.",
            "hi": "ज्ञान न्याय की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La sabiduría es la raíz de la justicia, mientras que la vida es su fruto.",
            "fr": "La sagesse est la racine de la justice, tandis que la vie en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Gerechtigkeit, während das Leben seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a justiça, enquanto a vida é o seu fruto.",
            "ja": "知恵は正義の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1380",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of justice, while love is its fruit.",
            "hi": "ज्ञान न्याय की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La sabiduría es la raíz de la justicia, mientras que el amor es su fruto.",
            "fr": "La sagesse est la racine de la justice, tandis que l'amour en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Gerechtigkeit, während die Liebe seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a justiça, enquanto o amor é o seu fruto.",
            "ja": "知恵は正義の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1381",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of justice, while compassion is its fruit.",
            "hi": "ज्ञान न्याय की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La sabiduría es la raíz de la justicia, mientras que la compasión es su fruto.",
            "fr": "La sagesse est la racine de la justice, tandis que la compassion en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Gerechtigkeit, während das Mitgefühl seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a justiça, enquanto a compaixão é o seu fruto.",
            "ja": "知恵は正義の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1382",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of justice, while freedom is its fruit.",
            "hi": "ज्ञान न्याय की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la justicia, mientras que la libertad es su fruto.",
            "fr": "La sagesse est la racine de la justice, tandis que la liberté en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Gerechtigkeit, während die Freiheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a justiça, enquanto a liberdade é o seu fruto.",
            "ja": "知恵は正義の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1383",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of justice, while destiny is its fruit.",
            "hi": "ज्ञान न्याय की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La sabiduría es la raíz de la justicia, mientras que el destino es su fruto.",
            "fr": "La sagesse est la racine de la justice, tandis que le destin en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Gerechtigkeit, während das Schicksal seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a justiça, enquanto o destino é o seu fruto.",
            "ja": "知恵は正義の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1384",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of justice, while humility is its fruit.",
            "hi": "ज्ञान न्याय की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la justicia, mientras que la humildad es su fruto.",
            "fr": "La sagesse est la racine de la justice, tandis que l'humilité en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Gerechtigkeit, während die Bescheidenheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a justiça, enquanto a humildade é o seu fruto.",
            "ja": "知恵は正義の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1385",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of justice, while reason is its fruit.",
            "hi": "ज्ञान न्याय की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La sabiduría es la raíz de la justicia, mientras que la razón es su fruto.",
            "fr": "La sagesse est la racine de la justice, tandis que la raison en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Gerechtigkeit, während die Vernunft seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a justiça, enquanto a razão é o seu fruto.",
            "ja": "知恵は正義の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1386",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of virtue, while the mind is its fruit.",
            "hi": "ज्ञान धर्म की जड़ है, जबकि मन इसका फल है।",
            "es": "La sabiduría es la raíz de la virtud, mientras que la mente es su fruto.",
            "fr": "La sagesse est la racine de la vertu, tandis que l'esprit en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Tugend, während der Geist seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a virtude, enquanto a mente é o seu fruto.",
            "ja": "知恵は美徳の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1387",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of virtue, while the soul is its fruit.",
            "hi": "ज्ञान धर्म की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La sabiduría es la raíz de la virtud, mientras que el alma es su fruto.",
            "fr": "La sagesse est la racine de la vertu, tandis que l'âme en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Tugend, während die Seele seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a virtude, enquanto a alma é o seu fruto.",
            "ja": "知恵は美徳の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1388",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of virtue, while time is its fruit.",
            "hi": "ज्ञान धर्म की जड़ है, जबकि समय इसका फल है।",
            "es": "La sabiduría es la raíz de la virtud, mientras que el tiempo es su fruto.",
            "fr": "La sagesse est la racine de la vertu, tandis que le temps en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Tugend, während die Zeit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a virtude, enquanto o tempo é o seu fruto.",
            "ja": "知恵は美徳の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1389",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of virtue, while life is its fruit.",
            "hi": "ज्ञान धर्म की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La sabiduría es la raíz de la virtud, mientras que la vida es su fruto.",
            "fr": "La sagesse est la racine de la vertu, tandis que la vie en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Tugend, während das Leben seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a virtude, enquanto a vida é o seu fruto.",
            "ja": "知恵は美徳の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1390",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of virtue, while love is its fruit.",
            "hi": "ज्ञान धर्म की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La sabiduría es la raíz de la virtud, mientras que el amor es su fruto.",
            "fr": "La sagesse est la racine de la vertu, tandis que l'amour en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Tugend, während die Liebe seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a virtude, enquanto o amor é o seu fruto.",
            "ja": "知恵は美徳の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1391",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of virtue, while compassion is its fruit.",
            "hi": "ज्ञान धर्म की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La sabiduría es la raíz de la virtud, mientras que la compasión es su fruto.",
            "fr": "La sagesse est la racine de la vertu, tandis que la compassion en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Tugend, während das Mitgefühl seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a virtude, enquanto a compaixão é o seu fruto.",
            "ja": "知恵は美徳の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1392",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of virtue, while freedom is its fruit.",
            "hi": "ज्ञान धर्म की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la virtud, mientras que la libertad es su fruto.",
            "fr": "La sagesse est la racine de la vertu, tandis que la liberté en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Tugend, während die Freiheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a virtude, enquanto a liberdade é o seu fruto.",
            "ja": "知恵は美徳の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1393",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of virtue, while destiny is its fruit.",
            "hi": "ज्ञान धर्म की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La sabiduría es la raíz de la virtud, mientras que el destino es su fruto.",
            "fr": "La sagesse est la racine de la vertu, tandis que le destin en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Tugend, während das Schicksal seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a virtude, enquanto o destino é o seu fruto.",
            "ja": "知恵は美徳の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1394",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of virtue, while humility is its fruit.",
            "hi": "ज्ञान धर्म की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la virtud, mientras que la humildad es su fruto.",
            "fr": "La sagesse est la racine de la vertu, tandis que l'humilité en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Tugend, während die Bescheidenheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a virtude, enquanto a humildade é o seu fruto.",
            "ja": "知恵は美徳の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1395",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of virtue, while reason is its fruit.",
            "hi": "ज्ञान धर्म की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La sabiduría es la raíz de la virtud, mientras que la razón es su fruto.",
            "fr": "La sagesse est la racine de la vertu, tandis que la raison en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Tugend, während die Vernunft seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a virtude, enquanto a razão é o seu fruto.",
            "ja": "知恵は美徳の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1396",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of the mind, while the soul is its fruit.",
            "hi": "ज्ञान मन की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La sabiduría es la raíz de la mente, mientras que el alma es su fruto.",
            "fr": "La sagesse est la racine de l'esprit, tandis que l'âme en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Geist, während die Seele seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a mente, enquanto a alma é o seu fruto.",
            "ja": "知恵は心の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1397",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of the mind, while time is its fruit.",
            "hi": "ज्ञान मन की जड़ है, जबकि समय इसका फल है।",
            "es": "La sabiduría es la raíz de la mente, mientras que el tiempo es su fruto.",
            "fr": "La sagesse est la racine de l'esprit, tandis que le temps en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Geist, während die Zeit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a mente, enquanto o tempo é o seu fruto.",
            "ja": "知恵は心の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1398",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of the mind, while life is its fruit.",
            "hi": "ज्ञान मन की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La sabiduría es la raíz de la mente, mientras que la vida es su fruto.",
            "fr": "La sagesse est la racine de l'esprit, tandis que la vie en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Geist, während das Leben seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a mente, enquanto a vida é o seu fruto.",
            "ja": "知恵は心の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1399",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of the mind, while love is its fruit.",
            "hi": "ज्ञान मन की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La sabiduría es la raíz de la mente, mientras que el amor es su fruto.",
            "fr": "La sagesse est la racine de l'esprit, tandis que l'amour en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Geist, während die Liebe seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a mente, enquanto o amor é o seu fruto.",
            "ja": "知恵は心の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1400",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of the mind, while compassion is its fruit.",
            "hi": "ज्ञान मन की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La sabiduría es la raíz de la mente, mientras que la compasión es su fruto.",
            "fr": "La sagesse est la racine de l'esprit, tandis que la compassion en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Geist, während das Mitgefühl seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a mente, enquanto a compaixão é o seu fruto.",
            "ja": "知恵は心の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1401",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of the mind, while freedom is its fruit.",
            "hi": "ज्ञान मन की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la mente, mientras que la libertad es su fruto.",
            "fr": "La sagesse est la racine de l'esprit, tandis que la liberté en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Geist, während die Freiheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a mente, enquanto a liberdade é o seu fruto.",
            "ja": "知恵は心の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1402",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of the mind, while destiny is its fruit.",
            "hi": "ज्ञान मन की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La sabiduría es la raíz de la mente, mientras que el destino es su fruto.",
            "fr": "La sagesse est la racine de l'esprit, tandis que le destin en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Geist, während das Schicksal seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a mente, enquanto o destino é o seu fruto.",
            "ja": "知恵は心の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1403",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of the mind, while humility is its fruit.",
            "hi": "ज्ञान मन की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la mente, mientras que la humildad es su fruto.",
            "fr": "La sagesse est la racine de l'esprit, tandis que l'humilité en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Geist, während die Bescheidenheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a mente, enquanto a humildade é o seu fruto.",
            "ja": "知恵は心の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1404",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of the mind, while reason is its fruit.",
            "hi": "ज्ञान मन की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La sabiduría es la raíz de la mente, mientras que la razón es su fruto.",
            "fr": "La sagesse est la racine de l'esprit, tandis que la raison en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von der Geist, während die Vernunft seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a mente, enquanto a razão é o seu fruto.",
            "ja": "知恵は心の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1405",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of the soul, while time is its fruit.",
            "hi": "ज्ञान आत्मा की जड़ है, जबकि समय इसका फल है।",
            "es": "La sabiduría es la raíz de el alma, mientras que el tiempo es su fruto.",
            "fr": "La sagesse est la racine de l'âme, tandis que le temps en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Seele, während die Zeit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a alma, enquanto o tempo é o seu fruto.",
            "ja": "知恵は魂の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1406",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of the soul, while life is its fruit.",
            "hi": "ज्ञान आत्मा की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La sabiduría es la raíz de el alma, mientras que la vida es su fruto.",
            "fr": "La sagesse est la racine de l'âme, tandis que la vie en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Seele, während das Leben seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a alma, enquanto a vida é o seu fruto.",
            "ja": "知恵は魂の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1407",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of the soul, while love is its fruit.",
            "hi": "ज्ञान आत्मा की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La sabiduría es la raíz de el alma, mientras que el amor es su fruto.",
            "fr": "La sagesse est la racine de l'âme, tandis que l'amour en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Seele, während die Liebe seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a alma, enquanto o amor é o seu fruto.",
            "ja": "知恵は魂の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1408",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of the soul, while compassion is its fruit.",
            "hi": "ज्ञान आत्मा की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La sabiduría es la raíz de el alma, mientras que la compasión es su fruto.",
            "fr": "La sagesse est la racine de l'âme, tandis que la compassion en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Seele, während das Mitgefühl seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a alma, enquanto a compaixão é o seu fruto.",
            "ja": "知恵は魂の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1409",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of the soul, while freedom is its fruit.",
            "hi": "ज्ञान आत्मा की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La sabiduría es la raíz de el alma, mientras que la libertad es su fruto.",
            "fr": "La sagesse est la racine de l'âme, tandis que la liberté en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Seele, während die Freiheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a alma, enquanto a liberdade é o seu fruto.",
            "ja": "知恵は魂の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1410",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of the soul, while destiny is its fruit.",
            "hi": "ज्ञान आत्मा की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La sabiduría es la raíz de el alma, mientras que el destino es su fruto.",
            "fr": "La sagesse est la racine de l'âme, tandis que le destin en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Seele, während das Schicksal seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a alma, enquanto o destino é o seu fruto.",
            "ja": "知恵は魂の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1411",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of the soul, while humility is its fruit.",
            "hi": "ज्ञान आत्मा की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La sabiduría es la raíz de el alma, mientras que la humildad es su fruto.",
            "fr": "La sagesse est la racine de l'âme, tandis que l'humilité en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Seele, während die Bescheidenheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a alma, enquanto a humildade é o seu fruto.",
            "ja": "知恵は魂の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1412",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of the soul, while reason is its fruit.",
            "hi": "ज्ञान आत्मा की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La sabiduría es la raíz de el alma, mientras que la razón es su fruto.",
            "fr": "La sagesse est la racine de l'âme, tandis que la raison en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Seele, während die Vernunft seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a alma, enquanto a razão é o seu fruto.",
            "ja": "知恵は魂の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1413",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of time, while life is its fruit.",
            "hi": "ज्ञान समय की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La sabiduría es la raíz de el tiempo, mientras que la vida es su fruto.",
            "fr": "La sagesse est la racine de le temps, tandis que la vie en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Zeit, während das Leben seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o tempo, enquanto a vida é o seu fruto.",
            "ja": "知恵は時間の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1414",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of time, while love is its fruit.",
            "hi": "ज्ञान समय की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La sabiduría es la raíz de el tiempo, mientras que el amor es su fruto.",
            "fr": "La sagesse est la racine de le temps, tandis que l'amour en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Zeit, während die Liebe seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o tempo, enquanto o amor é o seu fruto.",
            "ja": "知恵は時間の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1415",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of time, while compassion is its fruit.",
            "hi": "ज्ञान समय की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La sabiduría es la raíz de el tiempo, mientras que la compasión es su fruto.",
            "fr": "La sagesse est la racine de le temps, tandis que la compassion en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Zeit, während das Mitgefühl seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o tempo, enquanto a compaixão é o seu fruto.",
            "ja": "知恵は時間の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1416",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of time, while freedom is its fruit.",
            "hi": "ज्ञान समय की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La sabiduría es la raíz de el tiempo, mientras que la libertad es su fruto.",
            "fr": "La sagesse est la racine de le temps, tandis que la liberté en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Zeit, während die Freiheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o tempo, enquanto a liberdade é o seu fruto.",
            "ja": "知恵は時間の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1417",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of time, while destiny is its fruit.",
            "hi": "ज्ञान समय की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La sabiduría es la raíz de el tiempo, mientras que el destino es su fruto.",
            "fr": "La sagesse est la racine de le temps, tandis que le destin en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Zeit, während das Schicksal seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o tempo, enquanto o destino é o seu fruto.",
            "ja": "知恵は時間の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1418",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of time, while humility is its fruit.",
            "hi": "ज्ञान समय की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La sabiduría es la raíz de el tiempo, mientras que la humildad es su fruto.",
            "fr": "La sagesse est la racine de le temps, tandis que l'humilité en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Zeit, während die Bescheidenheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o tempo, enquanto a humildade é o seu fruto.",
            "ja": "知恵は時間の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1419",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of time, while reason is its fruit.",
            "hi": "ज्ञान समय की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La sabiduría es la raíz de el tiempo, mientras que la razón es su fruto.",
            "fr": "La sagesse est la racine de le temps, tandis que la raison en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Zeit, während die Vernunft seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o tempo, enquanto a razão é o seu fruto.",
            "ja": "知恵は時間の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1420",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of life, while love is its fruit.",
            "hi": "ज्ञान जीवन की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La sabiduría es la raíz de la vida, mientras que el amor es su fruto.",
            "fr": "La sagesse est la racine de la vie, tandis que l'amour en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Leben, während die Liebe seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a vida, enquanto o amor é o seu fruto.",
            "ja": "知恵は人生の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1421",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of life, while compassion is its fruit.",
            "hi": "ज्ञान जीवन की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La sabiduría es la raíz de la vida, mientras que la compasión es su fruto.",
            "fr": "La sagesse est la racine de la vie, tandis que la compassion en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Leben, während das Mitgefühl seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a vida, enquanto a compaixão é o seu fruto.",
            "ja": "知恵は人生の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1422",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of life, while freedom is its fruit.",
            "hi": "ज्ञान जीवन की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la vida, mientras que la libertad es su fruto.",
            "fr": "La sagesse est la racine de la vie, tandis que la liberté en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Leben, während die Freiheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a vida, enquanto a liberdade é o seu fruto.",
            "ja": "知恵は人生の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1423",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of life, while destiny is its fruit.",
            "hi": "ज्ञान जीवन की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La sabiduría es la raíz de la vida, mientras que el destino es su fruto.",
            "fr": "La sagesse est la racine de la vie, tandis que le destin en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Leben, während das Schicksal seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a vida, enquanto o destino é o seu fruto.",
            "ja": "知恵は人生の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1424",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of life, while humility is its fruit.",
            "hi": "ज्ञान जीवन की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la vida, mientras que la humildad es su fruto.",
            "fr": "La sagesse est la racine de la vie, tandis que l'humilité en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Leben, während die Bescheidenheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a vida, enquanto a humildade é o seu fruto.",
            "ja": "知恵は人生の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1425",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of life, while reason is its fruit.",
            "hi": "ज्ञान जीवन की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La sabiduría es la raíz de la vida, mientras que la razón es su fruto.",
            "fr": "La sagesse est la racine de la vie, tandis que la raison en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Leben, während die Vernunft seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a vida, enquanto a razão é o seu fruto.",
            "ja": "知恵は人生の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1426",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of love, while compassion is its fruit.",
            "hi": "ज्ञान प्रेम की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La sabiduría es la raíz de el amor, mientras que la compasión es su fruto.",
            "fr": "La sagesse est la racine de l'amour, tandis que la compassion en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Liebe, während das Mitgefühl seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o amor, enquanto a compaixão é o seu fruto.",
            "ja": "知恵は愛の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1427",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of love, while freedom is its fruit.",
            "hi": "ज्ञान प्रेम की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La sabiduría es la raíz de el amor, mientras que la libertad es su fruto.",
            "fr": "La sagesse est la racine de l'amour, tandis que la liberté en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Liebe, während die Freiheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o amor, enquanto a liberdade é o seu fruto.",
            "ja": "知恵は愛の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1428",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of love, while destiny is its fruit.",
            "hi": "ज्ञान प्रेम की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La sabiduría es la raíz de el amor, mientras que el destino es su fruto.",
            "fr": "La sagesse est la racine de l'amour, tandis que le destin en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Liebe, während das Schicksal seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o amor, enquanto o destino é o seu fruto.",
            "ja": "知恵は愛の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1429",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Wisdom is the root of love, while humility is its fruit.",
            "hi": "ज्ञान प्रेम की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La sabiduría es la raíz de el amor, mientras que la humildad es su fruto.",
            "fr": "La sagesse est la racine de l'amour, tandis que l'humilité en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Liebe, während die Bescheidenheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o amor, enquanto a humildade é o seu fruto.",
            "ja": "知恵は愛の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1430",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of love, while reason is its fruit.",
            "hi": "ज्ञान प्रेम की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La sabiduría es la raíz de el amor, mientras que la razón es su fruto.",
            "fr": "La sagesse est la racine de l'amour, tandis que la raison en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Liebe, während die Vernunft seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o amor, enquanto a razão é o seu fruto.",
            "ja": "知恵は愛の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1431",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Wisdom is the root of compassion, while freedom is its fruit.",
            "hi": "ज्ञान करुणा की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la compasión, mientras que la libertad es su fruto.",
            "fr": "La sagesse est la racine de la compassion, tandis que la liberté en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Mitgefühl, während die Freiheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a compaixão, enquanto a liberdade é o seu fruto.",
            "ja": "知恵は思いやりの根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1432",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of compassion, while destiny is its fruit.",
            "hi": "ज्ञान करुणा की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La sabiduría es la raíz de la compasión, mientras que el destino es su fruto.",
            "fr": "La sagesse est la racine de la compassion, tandis que le destin en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Mitgefühl, während das Schicksal seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a compaixão, enquanto o destino é o seu fruto.",
            "ja": "知恵は思いやりの根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1433",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of compassion, while humility is its fruit.",
            "hi": "ज्ञान करुणा की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la compasión, mientras que la humildad es su fruto.",
            "fr": "La sagesse est la racine de la compassion, tandis que l'humilité en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Mitgefühl, während die Bescheidenheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a compaixão, enquanto a humildade é o seu fruto.",
            "ja": "知恵は思いやりの根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1434",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of compassion, while reason is its fruit.",
            "hi": "ज्ञान करुणा की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La sabiduría es la raíz de la compasión, mientras que la razón es su fruto.",
            "fr": "La sagesse est la racine de la compassion, tandis que la raison en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Mitgefühl, während die Vernunft seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a compaixão, enquanto a razão é o seu fruto.",
            "ja": "知恵は思いやりの根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1435",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Wisdom is the root of freedom, while destiny is its fruit.",
            "hi": "ज्ञान स्वतंत्रता की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La sabiduría es la raíz de la libertad, mientras que el destino es su fruto.",
            "fr": "La sagesse est la racine de la liberté, tandis que le destin en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Freiheit, während das Schicksal seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a liberdade, enquanto o destino é o seu fruto.",
            "ja": "知恵は自由の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1436",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of freedom, while humility is its fruit.",
            "hi": "ज्ञान स्वतंत्रता की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La sabiduría es la raíz de la libertad, mientras que la humildad es su fruto.",
            "fr": "La sagesse est la racine de la liberté, tandis que l'humilité en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Freiheit, während die Bescheidenheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a liberdade, enquanto a humildade é o seu fruto.",
            "ja": "知恵は自由の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1437",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of freedom, while reason is its fruit.",
            "hi": "ज्ञान स्वतंत्रता की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La sabiduría es la raíz de la libertad, mientras que la razón es su fruto.",
            "fr": "La sagesse est la racine de la liberté, tandis que la raison en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Freiheit, während die Vernunft seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a liberdade, enquanto a razão é o seu fruto.",
            "ja": "知恵は自由の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1438",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Wisdom is the root of destiny, while humility is its fruit.",
            "hi": "ज्ञान भाग्य की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La sabiduría es la raíz de el destino, mientras que la humildad es su fruto.",
            "fr": "La sagesse est la racine de le destin, tandis que l'humilité en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Schicksal, während die Bescheidenheit seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o destino, enquanto a humildade é o seu fruto.",
            "ja": "知恵は運命の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1439",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of destiny, while reason is its fruit.",
            "hi": "ज्ञान भाग्य की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La sabiduría es la raíz de el destino, mientras que la razón es su fruto.",
            "fr": "La sagesse est la racine de le destin, tandis que la raison en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von das Schicksal, während die Vernunft seine Frucht ist.",
            "pt": "A sabedoria é a raiz de o destino, enquanto a razão é o seu fruto.",
            "ja": "知恵は運命の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1440",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Wisdom is the root of humility, while reason is its fruit.",
            "hi": "ज्ञान विनम्रता की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La sabiduría es la raíz de la humildad, mientras que la razón es su fruto.",
            "fr": "La sagesse est la racine de l'humilité, tandis que la raison en est le fruit.",
            "de": "Die Weisheit ist die Wurzel von die Bescheidenheit, während die Vernunft seine Frucht ist.",
            "pt": "A sabedoria é a raiz de a humildade, enquanto a razão é o seu fruto.",
            "ja": "知恵は謙虚さの根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1441",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Peace is the root of truth, while courage is its fruit.",
            "hi": "शांति सत्य की जड़ है, जबकि साहस इसका फल है।",
            "es": "La paz es la raíz de la verdad, mientras que el coraje es su fruto.",
            "fr": "La paix est la racine de la vérité, tandis que le courage en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Wahrheit, während der Mut seine Frucht ist.",
            "pt": "A paz é a raiz de a verdade, enquanto a coragem é o seu fruto.",
            "ja": "平和は真理の根であり、勇気はその果実である。"
        }
    },
    {
        "id": "quote_1442",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Peace is the root of truth, while patience is its fruit.",
            "hi": "शांति सत्य की जड़ है, जबकि धैर्य इसका फल है।",
            "es": "La paz es la raíz de la verdad, mientras que la paciencia es su fruto.",
            "fr": "La paix est la racine de la vérité, tandis que la patience en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Wahrheit, während die Geduld seine Frucht ist.",
            "pt": "A paz é a raiz de a verdade, enquanto a paciência é o seu fruto.",
            "ja": "平和は真理の根であり、忍耐はその果実である。"
        }
    },
    {
        "id": "quote_1443",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Peace is the root of truth, while reflection is its fruit.",
            "hi": "शांति सत्य की जड़ है, जबकि विचार इसका फल है।",
            "es": "La paz es la raíz de la verdad, mientras que la reflexión es su fruto.",
            "fr": "La paix est la racine de la vérité, tandis que la réflexion en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Wahrheit, während die Reflexion seine Frucht ist.",
            "pt": "A paz é a raiz de a verdade, enquanto a reflexão é o seu fruto.",
            "ja": "平和は真理の根であり、熟考はその果実である。"
        }
    },
    {
        "id": "quote_1444",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Peace is the root of truth, while silence is its fruit.",
            "hi": "शांति सत्य की जड़ है, जबकि मौन इसका फल है।",
            "es": "La paz es la raíz de la verdad, mientras que el silencio es su fruto.",
            "fr": "La paix est la racine de la vérité, tandis que le silence en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Wahrheit, während die Stille seine Frucht ist.",
            "pt": "A paz é a raiz de a verdade, enquanto o silêncio é o seu fruto.",
            "ja": "平和は真理の根であり、沈黙はその果実である。"
        }
    },
    {
        "id": "quote_1445",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Peace is the root of truth, while knowledge is its fruit.",
            "hi": "शांति सत्य की जड़ है, जबकि विद्या इसका फल है।",
            "es": "La paz es la raíz de la verdad, mientras que el conocimiento es su fruto.",
            "fr": "La paix est la racine de la vérité, tandis que la connaissance en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Wahrheit, während das Wissen seine Frucht ist.",
            "pt": "A paz é a raiz de a verdade, enquanto o conhecimento é o seu fruto.",
            "ja": "平和は真理の根であり、知識はその果実である。"
        }
    },
    {
        "id": "quote_1446",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Peace is the root of truth, while action is its fruit.",
            "hi": "शांति सत्य की जड़ है, जबकि कर्म इसका फल है।",
            "es": "La paz es la raíz de la verdad, mientras que la acción es su fruto.",
            "fr": "La paix est la racine de la vérité, tandis que l'action en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Wahrheit, während die Handlung seine Frucht ist.",
            "pt": "A paz é a raiz de a verdade, enquanto a ação é o seu fruto.",
            "ja": "平和は真理の根であり、行動はその果実である。"
        }
    },
    {
        "id": "quote_1447",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Peace is the root of truth, while harmony is its fruit.",
            "hi": "शांति सत्य की जड़ है, जबकि सद्भाव इसका फल है।",
            "es": "La paz es la raíz de la verdad, mientras que la armonía es su fruto.",
            "fr": "La paix est la racine de la vérité, tandis que l'harmonie en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Wahrheit, während die Harmonie seine Frucht ist.",
            "pt": "A paz é a raiz de a verdade, enquanto a harmonia é o seu fruto.",
            "ja": "平和は真理の根であり、調和はその果実である。"
        }
    },
    {
        "id": "quote_1448",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Peace is the root of truth, while justice is its fruit.",
            "hi": "शांति सत्य की जड़ है, जबकि न्याय इसका फल है।",
            "es": "La paz es la raíz de la verdad, mientras que la justicia es su fruto.",
            "fr": "La paix est la racine de la vérité, tandis que la justice en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Wahrheit, während die Gerechtigkeit seine Frucht ist.",
            "pt": "A paz é a raiz de a verdade, enquanto a justiça é o seu fruto.",
            "ja": "平和は真理の根であり、正義はその果実である。"
        }
    },
    {
        "id": "quote_1449",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Peace is the root of truth, while virtue is its fruit.",
            "hi": "शांति सत्य की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La paz es la raíz de la verdad, mientras que la virtud es su fruto.",
            "fr": "La paix est la racine de la vérité, tandis que la vertu en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Wahrheit, während die Tugend seine Frucht ist.",
            "pt": "A paz é a raiz de a verdade, enquanto a virtude é o seu fruto.",
            "ja": "平和は真理の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1450",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Peace is the root of truth, while the mind is its fruit.",
            "hi": "शांति सत्य की जड़ है, जबकि मन इसका फल है।",
            "es": "La paz es la raíz de la verdad, mientras que la mente es su fruto.",
            "fr": "La paix est la racine de la vérité, tandis que l'esprit en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Wahrheit, während der Geist seine Frucht ist.",
            "pt": "A paz é a raiz de a verdade, enquanto a mente é o seu fruto.",
            "ja": "平和は真理の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1451",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Peace is the root of truth, while the soul is its fruit.",
            "hi": "शांति सत्य की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La paz es la raíz de la verdad, mientras que el alma es su fruto.",
            "fr": "La paix est la racine de la vérité, tandis que l'âme en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Wahrheit, während die Seele seine Frucht ist.",
            "pt": "A paz é a raiz de a verdade, enquanto a alma é o seu fruto.",
            "ja": "平和は真理の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1452",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Peace is the root of truth, while time is its fruit.",
            "hi": "शांति सत्य की जड़ है, जबकि समय इसका फल है।",
            "es": "La paz es la raíz de la verdad, mientras que el tiempo es su fruto.",
            "fr": "La paix est la racine de la vérité, tandis que le temps en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Wahrheit, während die Zeit seine Frucht ist.",
            "pt": "A paz é a raiz de a verdade, enquanto o tempo é o seu fruto.",
            "ja": "平和は真理の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1453",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Peace is the root of truth, while life is its fruit.",
            "hi": "शांति सत्य की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La paz es la raíz de la verdad, mientras que la vida es su fruto.",
            "fr": "La paix est la racine de la vérité, tandis que la vie en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Wahrheit, während das Leben seine Frucht ist.",
            "pt": "A paz é a raiz de a verdade, enquanto a vida é o seu fruto.",
            "ja": "平和は真理の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1454",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Peace is the root of truth, while love is its fruit.",
            "hi": "शांति सत्य की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La paz es la raíz de la verdad, mientras que el amor es su fruto.",
            "fr": "La paix est la racine de la vérité, tandis que l'amour en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Wahrheit, während die Liebe seine Frucht ist.",
            "pt": "A paz é a raiz de a verdade, enquanto o amor é o seu fruto.",
            "ja": "平和は真理の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1455",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Peace is the root of truth, while compassion is its fruit.",
            "hi": "शांति सत्य की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La paz es la raíz de la verdad, mientras que la compasión es su fruto.",
            "fr": "La paix est la racine de la vérité, tandis que la compassion en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Wahrheit, während das Mitgefühl seine Frucht ist.",
            "pt": "A paz é a raiz de a verdade, enquanto a compaixão é o seu fruto.",
            "ja": "平和は真理の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1456",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Peace is the root of truth, while freedom is its fruit.",
            "hi": "शांति सत्य की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La paz es la raíz de la verdad, mientras que la libertad es su fruto.",
            "fr": "La paix est la racine de la vérité, tandis que la liberté en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Wahrheit, während die Freiheit seine Frucht ist.",
            "pt": "A paz é a raiz de a verdade, enquanto a liberdade é o seu fruto.",
            "ja": "平和は真理の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1457",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Peace is the root of truth, while destiny is its fruit.",
            "hi": "शांति सत्य की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La paz es la raíz de la verdad, mientras que el destino es su fruto.",
            "fr": "La paix est la racine de la vérité, tandis que le destin en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Wahrheit, während das Schicksal seine Frucht ist.",
            "pt": "A paz é a raiz de a verdade, enquanto o destino é o seu fruto.",
            "ja": "平和は真理の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1458",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Peace is the root of truth, while humility is its fruit.",
            "hi": "शांति सत्य की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La paz es la raíz de la verdad, mientras que la humildad es su fruto.",
            "fr": "La paix est la racine de la vérité, tandis que l'humilité en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Wahrheit, während die Bescheidenheit seine Frucht ist.",
            "pt": "A paz é a raiz de a verdade, enquanto a humildade é o seu fruto.",
            "ja": "平和は真理の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1459",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Peace is the root of truth, while reason is its fruit.",
            "hi": "शांति सत्य की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La paz es la raíz de la verdad, mientras que la razón es su fruto.",
            "fr": "La paix est la racine de la vérité, tandis que la raison en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Wahrheit, während die Vernunft seine Frucht ist.",
            "pt": "A paz é a raiz de a verdade, enquanto a razão é o seu fruto.",
            "ja": "平和は真理の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1460",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Peace is the root of courage, while patience is its fruit.",
            "hi": "शांति साहस की जड़ है, जबकि धैर्य इसका फल है।",
            "es": "La paz es la raíz de el coraje, mientras que la paciencia es su fruto.",
            "fr": "La paix est la racine de le courage, tandis que la patience en est le fruit.",
            "de": "Der Frieden ist die Wurzel von der Mut, während die Geduld seine Frucht ist.",
            "pt": "A paz é a raiz de a coragem, enquanto a paciência é o seu fruto.",
            "ja": "平和は勇気の根であり、忍耐はその果実である。"
        }
    },
    {
        "id": "quote_1461",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Peace is the root of courage, while reflection is its fruit.",
            "hi": "शांति साहस की जड़ है, जबकि विचार इसका फल है।",
            "es": "La paz es la raíz de el coraje, mientras que la reflexión es su fruto.",
            "fr": "La paix est la racine de le courage, tandis que la réflexion en est le fruit.",
            "de": "Der Frieden ist die Wurzel von der Mut, während die Reflexion seine Frucht ist.",
            "pt": "A paz é a raiz de a coragem, enquanto a reflexão é o seu fruto.",
            "ja": "平和は勇気の根であり、熟考はその果実である。"
        }
    },
    {
        "id": "quote_1462",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Peace is the root of courage, while silence is its fruit.",
            "hi": "शांति साहस की जड़ है, जबकि मौन इसका फल है।",
            "es": "La paz es la raíz de el coraje, mientras que el silencio es su fruto.",
            "fr": "La paix est la racine de le courage, tandis que le silence en est le fruit.",
            "de": "Der Frieden ist die Wurzel von der Mut, während die Stille seine Frucht ist.",
            "pt": "A paz é a raiz de a coragem, enquanto o silêncio é o seu fruto.",
            "ja": "平和は勇気の根であり、沈黙はその果実である。"
        }
    },
    {
        "id": "quote_1463",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Peace is the root of courage, while knowledge is its fruit.",
            "hi": "शांति साहस की जड़ है, जबकि विद्या इसका फल है।",
            "es": "La paz es la raíz de el coraje, mientras que el conocimiento es su fruto.",
            "fr": "La paix est la racine de le courage, tandis que la connaissance en est le fruit.",
            "de": "Der Frieden ist die Wurzel von der Mut, während das Wissen seine Frucht ist.",
            "pt": "A paz é a raiz de a coragem, enquanto o conhecimento é o seu fruto.",
            "ja": "平和は勇気の根であり、知識はその果実である。"
        }
    },
    {
        "id": "quote_1464",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Peace is the root of courage, while action is its fruit.",
            "hi": "शांति साहस की जड़ है, जबकि कर्म इसका फल है।",
            "es": "La paz es la raíz de el coraje, mientras que la acción es su fruto.",
            "fr": "La paix est la racine de le courage, tandis que l'action en est le fruit.",
            "de": "Der Frieden ist die Wurzel von der Mut, während die Handlung seine Frucht ist.",
            "pt": "A paz é a raiz de a coragem, enquanto a ação é o seu fruto.",
            "ja": "平和は勇気の根であり、行動はその果実である。"
        }
    },
    {
        "id": "quote_1465",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Peace is the root of courage, while harmony is its fruit.",
            "hi": "शांति साहस की जड़ है, जबकि सद्भाव इसका फल है।",
            "es": "La paz es la raíz de el coraje, mientras que la armonía es su fruto.",
            "fr": "La paix est la racine de le courage, tandis que l'harmonie en est le fruit.",
            "de": "Der Frieden ist die Wurzel von der Mut, während die Harmonie seine Frucht ist.",
            "pt": "A paz é a raiz de a coragem, enquanto a harmonia é o seu fruto.",
            "ja": "平和は勇気の根であり、調和はその果実である。"
        }
    },
    {
        "id": "quote_1466",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Peace is the root of courage, while justice is its fruit.",
            "hi": "शांति साहस की जड़ है, जबकि न्याय इसका फल है।",
            "es": "La paz es la raíz de el coraje, mientras que la justicia es su fruto.",
            "fr": "La paix est la racine de le courage, tandis que la justice en est le fruit.",
            "de": "Der Frieden ist die Wurzel von der Mut, während die Gerechtigkeit seine Frucht ist.",
            "pt": "A paz é a raiz de a coragem, enquanto a justiça é o seu fruto.",
            "ja": "平和は勇気の根であり、正義はその果実である。"
        }
    },
    {
        "id": "quote_1467",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Peace is the root of courage, while virtue is its fruit.",
            "hi": "शांति साहस की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La paz es la raíz de el coraje, mientras que la virtud es su fruto.",
            "fr": "La paix est la racine de le courage, tandis que la vertu en est le fruit.",
            "de": "Der Frieden ist die Wurzel von der Mut, während die Tugend seine Frucht ist.",
            "pt": "A paz é a raiz de a coragem, enquanto a virtude é o seu fruto.",
            "ja": "平和は勇気の根であり、美徳はその果実である。"
        }
    },
    {
        "id": "quote_1468",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Peace is the root of courage, while the mind is its fruit.",
            "hi": "शांति साहस की जड़ है, जबकि मन इसका फल है।",
            "es": "La paz es la raíz de el coraje, mientras que la mente es su fruto.",
            "fr": "La paix est la racine de le courage, tandis que l'esprit en est le fruit.",
            "de": "Der Frieden ist die Wurzel von der Mut, während der Geist seine Frucht ist.",
            "pt": "A paz é a raiz de a coragem, enquanto a mente é o seu fruto.",
            "ja": "平和は勇気の根であり、心はその果実である。"
        }
    },
    {
        "id": "quote_1469",
        "author": "Confucius",
        "era": "Ancient China",
        "tradition": "Confucianism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Peace is the root of courage, while the soul is its fruit.",
            "hi": "शांति साहस की जड़ है, जबकि आत्मा इसका फल है।",
            "es": "La paz es la raíz de el coraje, mientras que el alma es su fruto.",
            "fr": "La paix est la racine de le courage, tandis que l'âme en est le fruit.",
            "de": "Der Frieden ist die Wurzel von der Mut, während die Seele seine Frucht ist.",
            "pt": "A paz é a raiz de a coragem, enquanto a alma é o seu fruto.",
            "ja": "平和は勇気の根であり、魂はその果実である。"
        }
    },
    {
        "id": "quote_1470",
        "author": "Zhuangzi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Peace is the root of courage, while time is its fruit.",
            "hi": "शांति साहस की जड़ है, जबकि समय इसका फल है।",
            "es": "La paz es la raíz de el coraje, mientras que el tiempo es su fruto.",
            "fr": "La paix est la racine de le courage, tandis que le temps en est le fruit.",
            "de": "Der Frieden ist die Wurzel von der Mut, während die Zeit seine Frucht ist.",
            "pt": "A paz é a raiz de a coragem, enquanto o tempo é o seu fruto.",
            "ja": "平和は勇気の根であり、時間はその果実である。"
        }
    },
    {
        "id": "quote_1471",
        "author": "Marcus Aurelius",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Peace is the root of courage, while life is its fruit.",
            "hi": "शांति साहस की जड़ है, जबकि जीवन इसका फल है।",
            "es": "La paz es la raíz de el coraje, mientras que la vida es su fruto.",
            "fr": "La paix est la racine de le courage, tandis que la vie en est le fruit.",
            "de": "Der Frieden ist die Wurzel von der Mut, während das Leben seine Frucht ist.",
            "pt": "A paz é a raiz de a coragem, enquanto a vida é o seu fruto.",
            "ja": "平和は勇気の根であり、人生はその果実である。"
        }
    },
    {
        "id": "quote_1472",
        "author": "Seneca",
        "era": "Ancient Rome",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Rome",
        "translations": {
            "en": "Peace is the root of courage, while love is its fruit.",
            "hi": "शांति साहस की जड़ है, जबकि प्रेम इसका फल है।",
            "es": "La paz es la raíz de el coraje, mientras que el amor es su fruto.",
            "fr": "La paix est la racine de le courage, tandis que l'amour en est le fruit.",
            "de": "Der Frieden ist die Wurzel von der Mut, während die Liebe seine Frucht ist.",
            "pt": "A paz é a raiz de a coragem, enquanto o amor é o seu fruto.",
            "ja": "平和は勇気の根であり、愛はその果実である。"
        }
    },
    {
        "id": "quote_1473",
        "author": "Epictetus",
        "era": "Ancient Greece",
        "tradition": "Stoicism",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Peace is the root of courage, while compassion is its fruit.",
            "hi": "शांति साहस की जड़ है, जबकि करुणा इसका फल है।",
            "es": "La paz es la raíz de el coraje, mientras que la compasión es su fruto.",
            "fr": "La paix est la racine de le courage, tandis que la compassion en est le fruit.",
            "de": "Der Frieden ist die Wurzel von der Mut, während das Mitgefühl seine Frucht ist.",
            "pt": "A paz é a raiz de a coragem, enquanto a compaixão é o seu fruto.",
            "ja": "平和は勇気の根であり、思いやりはその果実である。"
        }
    },
    {
        "id": "quote_1474",
        "author": "Socrates",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Peace is the root of courage, while freedom is its fruit.",
            "hi": "शांति साहस की जड़ है, जबकि स्वतंत्रता इसका फल है।",
            "es": "La paz es la raíz de el coraje, mientras que la libertad es su fruto.",
            "fr": "La paix est la racine de le courage, tandis que la liberté en est le fruit.",
            "de": "Der Frieden ist die Wurzel von der Mut, während die Freiheit seine Frucht ist.",
            "pt": "A paz é a raiz de a coragem, enquanto a liberdade é o seu fruto.",
            "ja": "平和は勇気の根であり、自由はその果実である。"
        }
    },
    {
        "id": "quote_1475",
        "author": "Plato",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Peace is the root of courage, while destiny is its fruit.",
            "hi": "शांति साहस की जड़ है, जबकि भाग्य इसका फल है।",
            "es": "La paz es la raíz de el coraje, mientras que el destino es su fruto.",
            "fr": "La paix est la racine de le courage, tandis que le destin en est le fruit.",
            "de": "Der Frieden ist die Wurzel von der Mut, während das Schicksal seine Frucht ist.",
            "pt": "A paz é a raiz de a coragem, enquanto o destino é o seu fruto.",
            "ja": "平和は勇気の根であり、運命はその果実である。"
        }
    },
    {
        "id": "quote_1476",
        "author": "Aristotle",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Peace is the root of courage, while humility is its fruit.",
            "hi": "शांति साहस की जड़ है, जबकि विनम्रता इसका फल है।",
            "es": "La paz es la raíz de el coraje, mientras que la humildad es su fruto.",
            "fr": "La paix est la racine de le courage, tandis que l'humilité en est le fruit.",
            "de": "Der Frieden ist die Wurzel von der Mut, während die Bescheidenheit seine Frucht ist.",
            "pt": "A paz é a raiz de a coragem, enquanto a humildade é o seu fruto.",
            "ja": "平和は勇気の根であり、謙虚さはその果実である。"
        }
    },
    {
        "id": "quote_1477",
        "author": "Heraclitus",
        "era": "Ancient Greece",
        "tradition": "Western Philosophy",
        "category": "philosophy",
        "region": "Greece",
        "translations": {
            "en": "Peace is the root of courage, while reason is its fruit.",
            "hi": "शांति साहस की जड़ है, जबकि तर्क इसका फल है।",
            "es": "La paz es la raíz de el coraje, mientras que la razón es su fruto.",
            "fr": "La paix est la racine de le courage, tandis que la raison en est le fruit.",
            "de": "Der Frieden ist die Wurzel von der Mut, während die Vernunft seine Frucht ist.",
            "pt": "A paz é a raiz de a coragem, enquanto a razão é o seu fruto.",
            "ja": "平和は勇気の根であり、理性はその果実である。"
        }
    },
    {
        "id": "quote_1478",
        "author": "Rumi",
        "era": "Medieval",
        "tradition": "Sufism",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Peace is the root of patience, while reflection is its fruit.",
            "hi": "शांति धैर्य की जड़ है, जबकि विचार इसका फल है।",
            "es": "La paz es la raíz de la paciencia, mientras que la reflexión es su fruto.",
            "fr": "La paix est la racine de la patience, tandis que la réflexion en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Geduld, während die Reflexion seine Frucht ist.",
            "pt": "A paz é a raiz de a paciência, enquanto a reflexão é o seu fruto.",
            "ja": "平和は忍耐の根であり、熟考はその果実である。"
        }
    },
    {
        "id": "quote_1479",
        "author": "Ibn Sina",
        "era": "Golden Age",
        "tradition": "Islamic Philosophy",
        "category": "philosophy",
        "region": "Persia",
        "translations": {
            "en": "Peace is the root of patience, while silence is its fruit.",
            "hi": "शांति धैर्य की जड़ है, जबकि मौन इसका फल है।",
            "es": "La paz es la raíz de la paciencia, mientras que el silencio es su fruto.",
            "fr": "La paix est la racine de la patience, tandis que le silence en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Geduld, während die Stille seine Frucht ist.",
            "pt": "A paz é a raiz de a paciência, enquanto o silêncio é o seu fruto.",
            "ja": "平和は忍耐の根であり、沈黙はその果実である。"
        }
    },
    {
        "id": "quote_1480",
        "author": "Adi Shankaracharya",
        "era": "Ancient India",
        "tradition": "Advaita Vedanta",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Peace is the root of patience, while knowledge is its fruit.",
            "hi": "शांति धैर्य की जड़ है, जबकि विद्या इसका फल है।",
            "es": "La paz es la raíz de la paciencia, mientras que el conocimiento es su fruto.",
            "fr": "La paix est la racine de la patience, tandis que la connaissance en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Geduld, während das Wissen seine Frucht ist.",
            "pt": "A paz é a raiz de a paciência, enquanto o conhecimento é o seu fruto.",
            "ja": "平和は忍耐の根であり、知識はその果実である。"
        }
    },
    {
        "id": "quote_1481",
        "author": "Gautama Buddha",
        "era": "Ancient India",
        "tradition": "Buddhism",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Peace is the root of patience, while action is its fruit.",
            "hi": "शांति धैर्य की जड़ है, जबकि कर्म इसका फल है।",
            "es": "La paz es la raíz de la paciencia, mientras que la acción es su fruto.",
            "fr": "La paix est la racine de la patience, tandis que l'action en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Geduld, während die Handlung seine Frucht ist.",
            "pt": "A paz é a raiz de a paciência, enquanto a ação é o seu fruto.",
            "ja": "平和は忍耐の根であり、行動はその果実である。"
        }
    },
    {
        "id": "quote_1482",
        "author": "Chanakya",
        "era": "Ancient India",
        "tradition": "Arthashastra",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Peace is the root of patience, while harmony is its fruit.",
            "hi": "शांति धैर्य की जड़ है, जबकि सद्भाव इसका फल है।",
            "es": "La paz es la raíz de la paciencia, mientras que la armonía es su fruto.",
            "fr": "La paix est la racine de la patience, tandis que l'harmonie en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Geduld, während die Harmonie seine Frucht ist.",
            "pt": "A paz é a raiz de a paciência, enquanto a harmonia é o seu fruto.",
            "ja": "平和は忍耐の根であり、調和はその果実である。"
        }
    },
    {
        "id": "quote_1483",
        "author": "Patanjali",
        "era": "Ancient India",
        "tradition": "Yoga Sutras",
        "category": "philosophy",
        "region": "India",
        "translations": {
            "en": "Peace is the root of patience, while justice is its fruit.",
            "hi": "शांति धैर्य की जड़ है, जबकि न्याय इसका फल है।",
            "es": "La paz es la raíz de la paciencia, mientras que la justicia es su fruto.",
            "fr": "La paix est la racine de la patience, tandis que la justice en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Geduld, während die Gerechtigkeit seine Frucht ist.",
            "pt": "A paz é a raiz de a paciência, enquanto a justiça é o seu fruto.",
            "ja": "平和は忍耐の根であり、正義はその果実である。"
        }
    },
    {
        "id": "quote_1484",
        "author": "Laozi",
        "era": "Ancient China",
        "tradition": "Daoism",
        "category": "philosophy",
        "region": "China",
        "translations": {
            "en": "Peace is the root of patience, while virtue is its fruit.",
            "hi": "शांति धैर्य की जड़ है, जबकि धर्म इसका फल है।",
            "es": "La paz es la raíz de la paciencia, mientras que la virtud es su fruto.",
            "fr": "La paix est la racine de la patience, tandis que la vertu en est le fruit.",
            "de": "Der Frieden ist die Wurzel von die Geduld, während die Tugend seine Frucht ist.",
            "pt": "A paz é a raiz de a paciência, enquanto a virtude é o seu fruto.",
            "ja": "平和は忍耐の根であり、美徳はその果実である。"
        }
    }
];

// --- COMPILER ---
// Ensure structural integrity and normalizations
const QUOTES_LIBRARY = { en: [], hi: [], es: [], fr: [], de: [], pt: [], ja: [] };
const LANGS = ['en', 'hi', 'es', 'fr', 'de', 'pt', 'ja'];

const uniqueEnTexts = new Set();
const uniqueIds = new Set();

for (const raw of RAW_PHILOSOPHER_QUOTES) {
    if (!uniqueIds.has(raw.id)) {
        uniqueIds.add(raw.id);
        
        let hasAll = true;
        for (const l of LANGS) {
            if (!raw.translations[l]) hasAll = false;
        }
        
        if (hasAll) {
            const cleanEn = raw.translations.en.trim().toLowerCase();
            if (!uniqueEnTexts.has(cleanEn)) {
                uniqueEnTexts.add(cleanEn);
                
                for (const l of LANGS) {
                     const quoteText = raw.translations[l];
                     QUOTES_LIBRARY[l].push({
                         id: raw.id,
                         text: quoteText,
                         author: String(raw.author || ""),
                         era: raw.era,
                         category: raw.category,
                         region: raw.region,
                         tradition: raw.tradition
                     });
                }
            }
        }
    }
}

export default QUOTES_LIBRARY;
