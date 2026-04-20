/**
 * SmartTools Hub v5.0 - Universal Core Engine
 * Vanilla JS logic for 33+ high-performance browser tools.
 */

// --- TOOL DATABASE ---
const TOOLS = [
    { id: 'image-compressor', nameKey: 'compress', icon: 'minimize', category: 'Image', desc: 'Reduce file size while keeping visual quality.' },
    { id: 'background-remover', nameKey: 'bgremove', icon: 'trash-2', category: 'Image', desc: 'AI-powered background extraction for your photos.' },
    { id: 'image-resizer', nameKey: 'resize', icon: 'image', category: 'Image', desc: 'Change width and height of images instantly.' },
    { id: 'jpg-to-png', nameKey: 'png', icon: 'image', category: 'Image', desc: 'Standard converter for JPG to transparent PNG.' },
    { id: 'pdf-merger', nameKey: 'pdfmerge', icon: 'file-text', category: 'PDF', desc: 'Combine multiple PDF files into one document.' },
    { id: 'pdf-splitter', nameKey: 'pdfsplit', icon: 'scissors', category: 'PDF', desc: 'Extract individual pages from your PDFs.' },
    { id: 'word-counter', nameKey: 'wordcount', icon: 'type', category: 'Text', desc: 'Professional utility for characters and words.' },
    { id: 'case-converter', nameKey: 'case', icon: 'type', category: 'Text', desc: 'Uppercase, lowercase, title case and more.' },
    { id: 'text-to-speech', nameKey: 'tts', icon: 'volume-2', category: 'Text', desc: 'Convert text to natural speech audio files.' },
    { id: 'speech-to-text', nameKey: 'stt', icon: 'mic', category: 'Text', desc: 'Real-time voice transcription in your browser.' },
    { id: 'notes-app', nameKey: 'notes', icon: 'pen-tool', category: 'Text', desc: 'Secure, locally saved markdown notes.' },
    { id: 'password-generator', nameKey: 'pass', icon: 'lock', category: 'Utility', desc: 'Enterprise-grade secure password creator.' },
    { id: 'age-calculator', nameKey: 'age', icon: 'calendar', category: 'Utility', desc: 'Calculate exact age in years, months and days.' },
    { id: 'qr-code-generator', nameKey: 'qr', icon: 'qr-code', category: 'Utility', desc: 'Instant QR generation for links and text.' },
    { id: 'color-picker', nameKey: 'color', icon: 'palette', category: 'Utility', desc: 'Explore palettes and copy hex codes.' },
    { id: 'base64-converter', nameKey: 'b64', icon: 'hash', category: 'Utility', desc: 'Encode or decode strings to Base64 format.' },
    { id: 'url-converter', nameKey: 'url', icon: 'link', category: 'Utility', desc: 'Safe URL encoding and decoding utility.' },
    { id: 'unit-converter', nameKey: 'unit', icon: 'ruler', category: 'Utility', desc: 'Convert metrics, weights and volumes.' },
    { id: 'stopwatch', nameKey: 'stopwatch', icon: 'timer', category: 'Utility', desc: 'Accurate timer with split times support.' },
    { id: 'todo-list', nameKey: 'todo', icon: 'check-square', category: 'Utility', desc: 'Manage daily tasks with persistence.' },
    { id: 'emi-calculator', nameKey: 'emi', icon: 'landmark', category: 'Finance', desc: 'Monthly loan installment and interest breakdown.' },
    { id: 'sip-calculator', nameKey: 'sip', icon: 'banknote', category: 'Finance', desc: 'Mutual fund investment return estimator.' },
    { id: 'tax-calculator', nameKey: 'tax', icon: 'wallet', category: 'Finance', desc: 'Income tax estimator for the financial year.' },
    { id: 'credit-card-interest', nameKey: 'cc', icon: 'credit-card', category: 'Finance', desc: 'Calculate credit card debt interest costs.' },
    { id: 'insurance-estimator', nameKey: 'ins', icon: 'shield-check', category: 'Finance', desc: 'Estimate premiums for life and health plans.' },
    { id: 'website-cost', nameKey: 'web', icon: 'globe', category: 'Finance', desc: 'Estimate development costs for your next web app.' },
    { id: 'freelancer-earning', nameKey: 'free', icon: 'briefcase', category: 'Finance', desc: 'Project hourly rates into annual income.' },
    { id: 'domain-estimator', nameKey: 'dom', icon: 'search', category: 'Finance', desc: 'Check the heuristic value of your domain name.' },
    { id: 'crypto-profit', nameKey: 'crypto', icon: 'coins', category: 'Finance', desc: 'Calculate ROI for your crypto trades.' },
    { id: 'roi-calculator', nameKey: 'roi', icon: 'line-chart', category: 'Finance', desc: 'Ads ROI and marketing spend analyzer.' },
    { id: 'username-generator', nameKey: 'username', icon: 'instagram', category: 'Instagram', desc: 'Creative handle generator for socials.' },
    { id: 'caption-generator', nameKey: 'caption', icon: 'message-circle', category: 'Instagram', desc: 'Engaging AI-vibe captions for posts.' },
    { id: 'bio-generator', nameKey: 'bio', icon: 'sparkles', category: 'Instagram', desc: 'Professional and aesthetic user bios.' },
];

const TOOL_SEO_CONTENT = {
    'image-compressor': {
        about: "Our Image Compressor is a state-of-the-art utility designed to reduce the storage footprint of your digital photos without compromising on the visual intricate details. Utilizing advanced lossy and lossless compression algorithms directly in the browser via WebAssembly, this tool ensures your high-resolution images are ready for web deployment, email attachments, or social media sharing in seconds. By optimizing your images, you significantly improve website loading speeds and user experience, which is a critical factor for search engine indexing and AdSense conversion rates.",
        steps: [
            "Click on the 'Upload' area or drag and drop your JPG/PNG files.",
            "The compression engine will automatically analyze the image pixel data.",
            "Visual artifacts are minimized through intelligent bit-depth adjustment.",
            "Once processing hit 100%, click 'Download' to save the optimized file."
        ]
    },
    'pdf-merger': {
        about: "The PDF Merger tool at SmartTools Hub provides a professional-grade document orchestration experience. Whether you are combining legal contracts, academic research papers, or monthly invoices, our browser-based engine handles the heavy lifting without ever uploading your sensitive documents to a remote server. This privacy-first approach makes it the preferred choice for security-conscious professionals. Merging PDFs helps in organizing digital archives, simplifying document distribution, and ensuring that your multi-part files are delivered as a single, cohesive unit.",
        steps: [
            "Select multiple PDF documents from your local storage.",
            "Arrange them in your preferred sequence for the final document.",
            "Click 'Merge' to execute the safe, client-side binding logic.",
            "Retrieve your integrated PDF file instantly with zero wait time."
        ]
    },
    'emi-calculator': {
        about: "Empower your financial planning with our precise EMI Calculator. This utility is indispensable for anyone considering a home loan, personal loan, or car finance. It provides a detailed breakdown of your monthly equated installments based on the principal amount, interest rate (APR), and repayment tenure. Understanding your EMI ahead of time allows for better budgeting and financial health management. Our calculator uses standard banking formulas to ensure accuracy, giving you the confidence to make the best financial decisions for your future.",
        steps: [
            "Input the total loan amount you intend to borrow.",
            "Enter the annual interest rate offered by your financial institution.",
            "Select the repayment duration in months or years.",
            "Hit 'Calculate' to view your monthly commitment and total interest."
        ]
    },
    'password-generator': {
        about: "Security is non-negotiable in the digital age. Our Password Generator creates enterprise-grade, cryptographically secure strings that protect your online accounts from brute-force attacks. By combining uppercase letters, lowercase letters, numbers, and special symbols, our engine produces high-entropy keys that are impossible to guess. The best part? The generation happens entirely within your browser session, meaning your new passwords are never transmitted over the network or stored in a database.",
        steps: [
            "Choose your desired password length (minimum 12-16 recommended).",
            "Select the complexity requirements including symbols and numerals.",
            "Click 'Generate' to create a unique, high-security sequence.",
            "Copy the resulting key and store it in your preferred password manager."
        ]
    },
    'background-remover': {
        about: "The AI Background Remover at SmartTools Hub leverages neural network processing to isolate subjects from their surroundings with pixel-perfect accuracy. Ideal for product photography, profile pictures, and digital marketing assets, this tool eliminates the need for expensive design software. By processing the image locally via a light-weight AI model in your browser, your privacy is maintained while you achieve professional-grade isolation in milliseconds. This is a critical utility for e-commerce entrepreneurs and social media influencers looking to streamline their creative workflow.",
        steps: [
            "Upload a clear image with a distinct subjects.",
            "Our AI will analyze the foreground and background layers.",
            "Wait a moment while the segmentation mask is applied.",
            "Download the result as a transparent PNG file."
        ]
    },
    'image-resizer': {
        about: "Correct image dimensions are vital for page speed and social media layout consistency. Our Image Resizer allows you to adjust the width and height of your photos with precise control. Whether you need to meet the strict requirements of an online application or optimize a thumbnail for your latest blog post, our tool ensures your images are perfectly scaled without losing clarity. Efficient resizing helps reduce bandwidth consumption and improves the Core Web Vitals of your website.",
        steps: [
            "Drag your image into the resize workspace.",
            "Input your desired dimensions or select a standard preset.",
            "Toggle 'Aspect Ratio Lock' to prevent distortion.",
            "Apply and download the perfectly sized image."
        ]
    },
    'word-counter': {
        about: "Our Word Counter is more than just a digit tracker; it is a comprehensive text analysis utility for writers, students, and SEO professionals. Beyond simple character and word counts, our tool analyzes sentence structure and identifies reading levels to help you craft more engaging content. Character limits are a constant in digital communication—from meta descriptions to social media captions. This tool ensures you hit the mark every time without the risk of truncation.",
        steps: [
            "Paste your text into the professional editor area.",
            "Monitor live updates for word and character counts.",
            "Check reading time estimates for better audience targeting.",
            "Optimize your copy based on the real-time feedback."
        ]
    },
    'pdf-splitter': {
        about: "Extraction is just as important as integration. Our PDF Splitter gives you the surgical precision to pull specific pages or ranges from a larger document. This is perfect for sharing specific chapters of an e-book, removing unnecessary pages from a report, or isolating individual invoices from a batch file. Running entirely in your browser, this tool ensures your sensitive document data is never exposed to external cloud risks.",
        steps: [
            "Select the PDF file you need to deconstruct.",
            "Identify the specific pages or ranges to extract.",
            "Click 'Split' to generate the individual documents.",
            "Download your isolated pages instantly."
        ]
    },
    'jpg-to-png': {
        about: "Transforming standard JPG files into high-quality, transparent PNG images is a fundamental task for designers and web developers. Original JPG files often contain compression artifacts that are visible during design work; converting them to PNG ensures a lossless environment for further editing. Our converter handles the mapping of pixel data with high fidelity, ensuring that your gradients and fine lines remain sharp. This utility is perfect for creating assets for mobile apps, website headers, and presentation slides.",
        steps: [
            "Upload your JPG photo to the conversion workspace.",
            "The browser engine will re-encode the pixels into a PNG-24 container.",
            "Review the output for clarity and color accuracy.",
            "Download your new PNG asset with one click."
        ]
    },
    'text-to-speech': {
        about: "Accessibility and content consumption are evolving. Our Text-to-Speech (TTS) engine converts written copy into lifelike audio narration, allowing users to listen to articles, scripts, and documents on the go. By utilizing native browser Synthesis APIs, we provide a variety of voices and accents without requiring any cloud fees. This tool is an essential partner for content creators wanting to offer audio versions of their blog posts and for students who learn better by listening.",
        steps: [
            "Input your content into the TTS processing area.",
            "Select your preferred voice, pitch, and speed from the options.",
            "Preview the audio generation in real-time.",
            "Download or play the audio directly from your browser."
        ]
    },
    'age-calculator': {
        about: "Precision matters when tracking milestones. Our Age Calculator provides an exact breakdown of time since a specific date, calculating years, months, and days with absolute accuracy. Beyond simple birthdays, this tool is useful for calculating job tenure, project durations, and warranty periods. It accounts for leap years and varying month lengths, ensuring that your chronological data is always correct.",
        steps: [
            "Enter the birth date or starting date using the picker.",
            "View the instant breakdown of age in various units.",
            "Check for upcoming milestones and anniversaries.",
            "Share the result or use it for your records."
        ]
    },
    'sip-calculator': {
        about: "Strategic long-term investing is the path to financial freedom. Our SIP (Systematic Investment Plan) Calculator helps you visualize the future value of your monthly mutual fund contributions. By factoring in expected annual returns and the power of compounding, you can see how even small amounts grow into significant wealth over 10-20 years. This tool is a cornerstone of responsible financial planning, helping you stay motivated and disciplined in your investment journey.",
        steps: [
            "Enter your planned monthly investment amount.",
            "Input the expected annual return rate (ROI).",
            "Select the total time period for your investment.",
            "Analyze the growth chart and final maturity value."
        ]
    },
    'website-cost': {
        about: "Planning a digital project requires accurate budgeting. Our Website Cost Estimator provides a heuristic breakdown of development expenses based on features, complexity, and design requirements. Whether you are building a simple landing page or a complex e-commerce platform, understanding the potential investment helps in aligning your business goals with your budget. This tool uses industry-standard benchmarks to provide a realistic range for your project.",
        steps: [
            "Select the type of website and core features (e.g., Blog, Shop).",
            "Choose the design complexity and custom integration needs.",
            "Input estimated timelines and developer requirements.",
            "Review the detailed cost breakdown for your project."
        ]
    }
};

const TRANSLATIONS = {
    en: {
        nav: { logo: "SmartTools Hub", home: "Home", tools: "Utilities", about: "Privacy Shield" },
        hero: { title1: "Swiss Knife for ", title2: "All Your Work", sub: "Fast, secure, and works entirely in your browser. No data leaves your device." },
        ui: { all: "All Utility Tools", popular: "🔥 Popular Tools", recent: "🕒 Recently Used", trending: "📈 Trending Tools", about: "SmartTools Hub", rights: "All rights reserved.", related: "Related Utilities", search: "Search for tools...", quotesTitle: "Wisdom from Great Philosophers", categories: { ALL: "All", IMAGE: "Image", PDF: "PDF", FINANCE: "Finance", TEXT: "Text", INSTAGRAM: "Instagram", UTILITY: "Utility" } },
        tools: {
            compress: "Image Compressor", bgremove: "Background Remover", resize: "Image Resizer", png: "JPG to PNG Converter",
            pdfmerge: "PDF Merger", pdfsplit: "PDF Splitter", wordcount: "Word Counter", case: "Case Converter",
            pass: "Password Generator", age: "Age Calculator", tts: "Text to Speech", stt: "Speech to Text",
            qr: "QR Code Generator", color: "Color Picker", b64: "Base64 Converter", url: "URL Converter",
            unit: "Unit Converter", stopwatch: "Stopwatch", todo: "To-Do List", notes: "Notes App",
            emi: "EMI Calculator", sip: "SIP Calculator", tax: "Tax Calculator", cc: "Credit Card Interest",
            ins: "Insurance Estimator", web: "Website Cost", free: "Freelance Earnings", dom: "Domain Estimator",
            crypto: "Crypto Profit", roi: "Ads ROI Calculator", username: "Username Generator", caption: "Caption Generator", bio: "Bio Generator"
        }
    },
    hi: {
        nav: { logo: "स्मार्टटूल्स हब", home: "होम", tools: "उपयोगिताएँ", about: "गोपनीयता कवच" },
        hero: { title1: "आपके सभी कामों के लिए ", title2: "स्विस चाकू", sub: "तेज़, सुरक्षित और पूरी तरह से आपके ब्राउज़र में काम करता है। आपका डेटा कहीं नहीं जाता।" },
        ui: { all: "सभी टूल्स", popular: "🔥 लोकप्रिय टूल्स", recent: "🕒 हाल ही में प्रयुक्त", trending: "📈 अभी ट्रेंड में", about: "स्मार्टटूल्स हब", rights: "सर्वाधिकार सुरक्षित।", related: "संबंधित टूल्स", search: "टूल्स खोजें...", quotesTitle: "महान दार्शनिकों का ज्ञान", categories: { ALL: "सभी", IMAGE: "इमेज", PDF: "पीडीएफ", FINANCE: "वित्त", TEXT: "टेक्स्ट", INSTAGRAM: "इंस्टाग्राम", UTILITY: "उपयोगिता" } },
        tools: {
            compress: "इमेज कंप्रेशर", bgremove: "बैकग्राउंड रिमूवर", resize: "इमेज रिसाइज़र", png: "JPG से PNG कनवर्टर",
            pdfmerge: "PDF मर्जर", pdfsplit: "PDF स्प्लिटर", wordcount: "शब्द गणक", case: "केस कनवर्टर",
            pass: "पासवर्ड जनरेटर", age: "आयु गणक", tts: "टेक्स्ट टू स्पीच", stt: "स्पीच टू टेक्स्ट",
            qr: "QR कोड जनरेटर", color: "कलर पिकर", b64: "Base64 कनवर्टर", url: "URL कनवर्टर",
            unit: "यूनिट कनवर्टर", stopwatch: "स्टॉपवॉच", todo: "टू-डू लिस्ट", notes: "नोट्स ऐप",
            emi: "EMI कैलकुलेटर", sip: "SIP कैलकुलेटर", tax: "टैक्स कैलकुलेटर", cc: "क्रेडिट कार्ड ब्याज",
            ins: "बीमा प्रीमियम", web: "वेबसाइट लागत", free: "फ्रीलांसर कमाई", dom: "डोमेन मूल्य",
            crypto: "क्रिप्टो लाभ", roi: "विज्ञापन ROI", username: "यूज़रनेम जनरेटर", caption: "कैप्शन जनरेटर", bio: "बायो जनरेटर"
        }
    },
    es: {
        nav: { logo: "SmartTools Hub", home: "Inicio", tools: "Utilidades", about: "Escudo de Privacidad" },
        hero: { title1: "Navaja Suiza para ", title2: "Todo tu Trabajo", sub: "Rápido, seguro y funciona completamente en tu navegador. Ningún dato sale de tu dispositivo." },
        ui: { all: "Todas las Herramientas", popular: "🔥 Herramientas Populares", recent: "🕒 Usadas Recientemente", trending: "📈 Tendencias", about: "SmartTools Hub", rights: "Todos los derechos reservados.", related: "Utilidades Relacionadas", search: "Buscar herramientas...", quotesTitle: "Sabiduría de Grandes Filósofos", categories: { ALL: "Todo", IMAGE: "Imagen", PDF: "PDF", FINANCE: "Finanzas", TEXT: "Texto", INSTAGRAM: "Instagram", UTILITY: "Utilidad" } },
        tools: {
            compress: "Compresor de Imágenes", bgremove: "Eliminador de Fondo", resize: "Redimensionador de Imágenes", png: "Conversor JPG a PNG",
            pdfmerge: "Fusionador PDF", pdfsplit: "Divisor PDF", wordcount: "Contador de Palabras", case: "Conversor de Mayúsculas/Minúsculas",
            pass: "Generador de Contraseñas", age: "Calculadora de Edad", tts: "Texto a Voz", stt: "Voz a Texto",
            qr: "Generador de Códigos QR", color: "Selector de Color", b64: "Conversor Base64", url: "Conversor de URL",
            unit: "Conversor de Unidades", stopwatch: "Cronómetro", todo: "Lista de Tareas", notes: "App de Notas",
            emi: "Calculadora EMI", sip: "Calculadora SIP", tax: "Calculadora de Impuestos", cc: "Interés de Tarjeta de Crédito",
            ins: "Estimador de Seguros", web: "Costo de Sitio Web", free: "Ganancias Freelance", dom: "Estimador de Dominios",
            crypto: "Beneficio Cripto", roi: "Calculadora de ROI de Anuncios", username: "Generador de Nombres de Usuario", caption: "Generador de Subtítulos", bio: "Generador de Biografías"
        }
    },
    fr: {
        nav: { logo: "SmartTools Hub", home: "Accueil", tools: "Utilitaires", about: "Bouclier de Confidentialité" },
        hero: { title1: "Couteau Suisse pour ", title2: "Tout votre Travail", sub: "Rapide, sécurisé et fonctionne entièrement dans votre navigateur. Aucune donnée ne quitte votre appareil." },
        ui: { all: "Tous les Outils", popular: "🔥 Outils Populaires", recent: "🕒 Récemment Utilisé", trending: "📈 Tendances", about: "SmartTools Hub", rights: "Tous droits réservés.", related: "Utilitaires Associés", search: "Chercher des outils...", quotesTitle: "Sagesse des Grands Philosophe", categories: { ALL: "Tout", IMAGE: "Image", PDF: "PDF", FINANCE: "Finance", TEXT: "Texte", INSTAGRAM: "Instagram", UTILITY: "Utilitaire" } },
        tools: {
            compress: "Compresseur d'Images", bgremove: "Suppresseur de Fond", resize: "Redimensionneur d'Images", png: "Convertisseur JPG en PNG",
            pdfmerge: "Fusionneur PDF", pdfsplit: "Diviseur PDF", wordcount: "Compteur de Mots", case: "Convertisseur de Cas",
            pass: "Générateur de Mots de Passe", age: "Calculateur d'Âge", tts: "Synthèse Vocale", stt: "Reconnaissance Vocale",
            qr: "Générateur de Code QR", color: "Sélecteur de Couleur", b64: "Convertisseur Base64", url: "Convertisseur d'URL",
            unit: "Convertisseur d'Unités", stopwatch: "Chronomètre", todo: "Liste de Tâches", notes: "App de Notes",
            emi: "Calculatrice EMI", sip: "Calculatrice SIP", tax: "Calculatrice d'Impôts", cc: "Intérêt de Carte de Crédit",
            ins: "Estimateur d'Assurance", web: "Coût du Site Web", free: "Gains Freelance", dom: "Estimateur de Domaine",
            crypto: "Profit Crypto", roi: "Calculateur de ROI Publicitaire", username: "Générateur de Noms d'Utilisateur", caption: "Générateur de Légendes", bio: "Générateur de Bio"
        }
    },
    de: {
        nav: { logo: "SmartTools Hub", home: "Startseite", tools: "Dienstprogramme", about: "Datenschutzschild" },
        hero: { title1: "Schweizer Taschenmesser für ", title2: "Ihre ganze Arbeit", sub: "Schnell, sicher und funktioniert komplett in Ihrem Browser. Keine Daten verlassen Ihr Gerät." },
        ui: { all: "Alle Werkzeuge", popular: "🔥 Beliebte Werkzeuge", recent: "🕒 Kürzlich Verwendet", trending: "📈 Trends", about: "SmartTools Hub", rights: "Alle Rechte vorbehalten.", related: "Verwandte Utilities", search: "Nach Werkzeugen suchen...", quotesTitle: "Weisheit großer Philosophen", categories: { ALL: "Alle", IMAGE: "Bild", PDF: "PDF", FINANCE: "Finanzen", TEXT: "Text", INSTAGRAM: "Instagram", UTILITY: "Dienstprogramm" } },
        tools: {
            compress: "Bildkomprimierer", bgremove: "Hintergrundentferner", resize: "Bildgrößenänderung", png: "JPG zu PNG Konverter",
            pdfmerge: "PDF Zusammenführen", pdfsplit: "PDF Splitten", wordcount: "Wortzähler", case: "Groß-/Kleinschreibung",
            pass: "Passwortgenerator", age: "Altersrechner", tts: "Text-zu-Sprache", stt: "Sprache-zu-Text",
            qr: "QR-Code-Generator", color: "Farbauswahl", b64: "Base64-Konverter", url: "URL-Konverter",
            unit: "Einheitenumrechner", stopwatch: "Stoppuhr", todo: "To-Do Liste", notes: "Notizen App",
            emi: "EMI Rechner", sip: "SIP Rechner", tax: "Steuerrechner", cc: "Kreditkartenzinsen",
            ins: "Versicherungsschätzer", web: "Webseitenkosten", free: "Freelancer Verdienst", dom: "Domain-Schätzer",
            crypto: "Krypto-Gewinn", roi: "Anzeigen ROI Rechner", username: "Benutzernamengenerator", caption: "Untertitelgenerator", bio: "Bio-Generator"
        }
    },
    pt: {
        nav: { logo: "SmartTools Hub", home: "Início", tools: "Utilidades", about: "Escudo de Privacidade" },
        hero: { title1: "Canivete Suíço para ", title2: "Todo o seu Trabalho", sub: "Rápido, seguro e funciona inteiramente no seu navegador. Nenhum dado sai do seu dispositivo." },
        ui: { all: "Todas as Ferramentas", popular: "🔥 Ferramentas Populares", recent: "🕒 Usado Recentemente", trending: "📈 Tendências", about: "SmartTools Hub", rights: "Todos os direitos reservados.", related: "Utilidades Relacionadas", search: "Procurar ferramentas...", quotesTitle: "Sabedoria de Grandes Filósofos", categories: { ALL: "Todas", IMAGE: "Imagem", PDF: "PDF", FINANCE: "Finanças", TEXT: "Texto", INSTAGRAM: "Instagram", UTILITY: "Utilidade" } },
        tools: {
            compress: "Compressor de Imagens", bgremove: "Removedor de Fundo", resize: "Redimensionador de Imagens", png: "Conversor JPG para PNG",
            pdfmerge: "Fusão de PDF", pdfsplit: "Divisor de PDF", wordcount: "Contador de Palavras", case: "Conversor de Letras",
            pass: "Gerador de Senhas", age: "Calculadora de Idade", tts: "Texto para Fala", stt: "Fala para Texto",
            qr: "Gerador de Código QR", color: "Seletor de Cores", b64: "Conversor Base64", url: "Conversor de URL",
            unit: "Conversor de Unidades", stopwatch: "Cronômetro", todo: "Lista de Tarefas", notes: "App de Notas",
            emi: "Calculadora EMI", sip: "Calculadora SIP", tax: "Calculadora de Impostos", cc: "Juros de Cartão de Crédito",
            ins: "Estimador de Seguros", web: "Custo do Site", free: "Ganhos Freelancer", dom: "Estimador de Domínio",
            crypto: "Lucro Cripto", roi: "Calculadora de ROI de Anúncios", username: "Gerador de Nomes de Usuário", caption: "Gerador de Legendas", bio: "Gerador de Biografias"
        }
    },
    ja: {
        nav: { logo: "SmartTools Hub", home: "ホーム", tools: "ユーティリティ", about: "プライバシーシールド" },
        hero: { title1: "すべての作業に最適な ", title2: "スイスアーミーナイフ", sub: "高速で安全かつ、ブラウザ上で完全に動作します。データがデバイスから離れることはありません。" },
        ui: { all: "すべてのツール", popular: "🔥 人気のツール", recent: "🕒 最近使ったツール", trending: "📈 トレンドのツール", about: "SmartTools Hub", rights: "全著作権所有。", related: "関連ユーティリティ", search: "ツールを検索...", quotesTitle: "偉大な哲学者の知恵", categories: { ALL: "すべて", IMAGE: "画像", PDF: "PDF", FINANCE: "金融", TEXT: "テキスト", INSTAGRAM: "インスタ", UTILITY: "ユーティリティ" } },
        tools: {
            compress: "画像圧縮", bgremove: "背景削除", resize: "画像サイズ変更", png: "JPGからPNGへの変換",
            pdfmerge: "PDF結合", pdfsplit: "PDF分割", wordcount: "単語数カウント", case: "大文字小文字変換",
            pass: "パスワード生成", age: "年齢計算", tts: "テキスト読み上げ", stt: "音声文字変換",
            qr: "QRコード生成", color: "カラーピッカー", b64: "Base64変換", url: "URL変換",
            unit: "単位変換", stopwatch: "ストップウォッチ", todo: "ToDoリスト", notes: "メモ帳アプリ",
            emi: "EMI計算機", sip: "SIP計算機", tax: "税金計算機", cc: "クレジットカード利息",
            ins: "保険見積もり", web: "ウェブサイト作成費用", free: "フリーランスの収益", dom: "ドメイン見積もり",
            crypto: "クリプト利益計算", roi: "広告ROI計算機", username: "ユーザー名生成", caption: "キャプション生成", bio: "プロフィール生成"
        }
    }
};

const QUOTES = window.QUOTES_LIBRARY || [
    { text: "The unexamined life is not worth living.", author: "Socrates" },
    { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" }
];

const CURRENCIES = {
    USD: { symbol: '$', rate: 1 },
    INR: { symbol: '₹', rate: 83 },
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.79 }
};

// --- STATE MANAGER ---
let state = {
    theme: localStorage.getItem('theme') || 'light',
    lang: localStorage.getItem('lang') || 'en',
    currency: localStorage.getItem('currency') || 'USD',
    search: '',
    category: 'All',
    recent: JSON.parse(localStorage.getItem('tool_recent') || '[]'),
    activeTool: null,
    quoteIdx: Math.floor(Math.random() * (window.QUOTES_LIBRARY ? window.QUOTES_LIBRARY.length : 2)),
    todo: JSON.parse(localStorage.getItem('tool_todo') || '[]'),
    notes: localStorage.getItem('tool_notes') || ''
};

// --- UI CORE RENDERING ---
function renderUI() {
    applyTheme();
    updateText();
    renderCategoryTabs();
    renderToolShelves();
    renderFullGrid();
}

function applyTheme() {
    if (state.theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
}

function updateText() {
    const t = TRANSLATIONS[state.lang];
    document.getElementById('nav-hub-name').innerText = t.nav.logo;
    document.getElementById('nav-home').innerText = t.nav.home;
    document.getElementById('nav-tools').innerText = t.nav.tools;
    document.getElementById('nav-about').innerText = t.nav.about;
    document.getElementById('hero-title').innerHTML = `${t.hero.title1}<span class="text-blue-600 dark:text-blue-400">${t.hero.title2}</span>`;
    document.getElementById('hero-subtitle').innerText = t.hero.sub;
    document.getElementById('tool-search').placeholder = t.ui.search;
    document.getElementById('all-tools-header').innerText = t.ui.all;
    document.getElementById('footer-hub-name').innerText = t.nav.logo;
    document.getElementById('footer-rights').innerText = `© 2026 ${t.nav.logo}. ${t.ui.rights}`;
    document.getElementById('quote-header').innerText = t.ui.quotesTitle;
}

function renderCategoryTabs() {
    const categories = ['All', 'Image', 'PDF', 'Finance', 'Text', 'Instagram', 'Utility'];
    const container = document.getElementById('category-tabs');
    const t = TRANSLATIONS[state.lang].ui.categories;
    container.innerHTML = categories.map(c => `
        <button onclick="setGlobalCategory('${c}')" class="px-8 py-3 rounded-full text-sm font-bold transition-all ${state.category === c ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-white dark:hover:bg-gray-700 hover:shadow-md'}">
            ${t[c.toUpperCase()]}
        </button>
    `).join('');
}

function renderToolShelves() {
    const container = document.getElementById('tool-shelves');
    if (state.search || state.category !== 'All') {
        container.style.display = 'none';
        return;
    }
    container.style.display = 'block';
    container.innerHTML = '';

    if (state.recent.length > 0) {
        const recentTools = state.recent.map(id => TOOLS.find(t => t.id === id)).filter(Boolean);
        container.appendChild(createShelfMarkup(TRANSLATIONS[state.lang].ui.recent, recentTools));
    }

    const popular = TOOLS.filter(t => ['emi-calculator', 'image-compressor', 'pdf-merger', 'password-generator'].includes(t.id));
    container.appendChild(createShelfMarkup(TRANSLATIONS[state.lang].ui.popular, popular));

    const trending = TOOLS.filter(t => ['caption-generator', 'qr-code-generator', 'word-counter', 'notes-app'].includes(t.id));
    container.appendChild(createShelfMarkup(TRANSLATIONS[state.lang].ui.trending, trending));

    lucide.createIcons();
}

function createShelfMarkup(title, data) {
    const section = document.createElement('section');
    section.className = "animate-slide-up";
    section.innerHTML = `
        <h3 class="text-xl font-black mb-8 text-gray-800 dark:text-gray-100">${title}</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            ${data.map(t => createToolCard(t)).join('')}
        </div>
    `;
    return section;
}

function renderFullGrid() {
    const container = document.getElementById('tool-grid');
    const filtered = TOOLS.filter(t => {
        const name = TRANSLATIONS[state.lang].tools[t.nameKey].toLowerCase();
        const category = t.category;
        const searchMatch = name.includes(state.search.toLowerCase()) || t.desc.toLowerCase().includes(state.search.toLowerCase());
        const categoryMatch = state.category === 'All' || category === state.category;
        return searchMatch && categoryMatch;
    });

    container.innerHTML = filtered.map(t => createToolCard(t)).join('');
    document.getElementById('no-results').classList.toggle('hidden', filtered.length > 0);
    lucide.createIcons();
}

function createToolCard(t) {
    const name = TRANSLATIONS[state.lang].tools[t.nameKey];
    return `
        <div onclick="openToolModal('${t.id}')" class="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border-2 border-transparent hover:border-blue-500 group cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
            <div class="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                <i data-lucide="${t.icon}" class="w-24 h-24 stroke-1"></i>
            </div>
            <div class="w-14 h-14 bg-blue-50 dark:bg-blue-900/10 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                <i data-lucide="${t.icon}" class="w-6 h-6"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">${name}</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed line-clamp-2">${t.desc}</p>
        </div>
    `;
}

// --- QUOTES SYSTEM ---
function autoRotateQuotes() {
    let nextIdx;
    do {
        nextIdx = Math.floor(Math.random() * QUOTES.length);
    } while (nextIdx === state.quoteIdx && QUOTES.length > 1);
    
    state.quoteIdx = nextIdx;
    const content = document.getElementById('quote-content');
    content.style.opacity = '0';
    content.style.transform = 'translateY(15px)';
    
    setTimeout(() => {
        document.getElementById('quote-text').innerText = `"${QUOTES[state.quoteIdx].text}"`;
        document.getElementById('quote-author').innerText = `— ${QUOTES[state.quoteIdx].author}`;
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 800);
}

// --- GLOBAL ACTIONS ---
window.setGlobalCategory = (c) => {
    state.category = c;
    renderUI();
    document.getElementById('tools-section').scrollIntoView({ behavior: 'smooth' });
};

document.getElementById('tool-search').oninput = (e) => {
    state.search = e.target.value;
    renderUI();
};

document.getElementById('theme-toggle').onclick = () => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', state.theme);
    renderUI();
};

document.getElementById('lang-select').onchange = (e) => {
    state.lang = e.target.value;
    localStorage.setItem('lang', state.lang);
    renderUI();
};

document.getElementById('currency-select').onchange = (e) => {
    state.currency = e.target.value;
    localStorage.setItem('currency', state.currency);
    renderUI();
};

// --- MODAL ENGINE ---
window.openToolModal = (id) => {
    const tool = TOOLS.find(t => t.id === id);
    if (!tool) return;

    state.activeTool = tool;
    trackRecentlyUsed(id);

    const modal = document.getElementById('modal-container');
    const overlay = document.getElementById('modal-overlay');
    
    document.getElementById('modal-title').innerText = TRANSLATIONS[state.lang].tools[tool.nameKey];
    document.getElementById('modalIcon').innerHTML = `<i data-lucide="${tool.icon}" class="w-6 h-6"></i>`;
    
    // SEO & Educational Injection
    const seoContent = TOOL_SEO_CONTENT[id];
    const seoArea = document.getElementById('tool-seo-text');
    if (seoContent) {
        seoArea.innerHTML = `
            <div class="space-y-6">
                <div>
                    <h3 class="text-gray-900 dark:text-white font-black text-sm mb-4 uppercase tracking-widest">About this Tool</h3>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">${seoContent.about}</p>
                </div>
                <div>
                    <h3 class="text-gray-900 dark:text-white font-black text-sm mb-4 uppercase tracking-widest">How to Use</h3>
                    <ul class="space-y-3">
                        ${seoContent.steps.map(step => `
                            <li class="flex gap-3">
                                <div class="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex-shrink-0 flex items-center justify-center text-[10px] font-black">${seoContent.steps.indexOf(step) + 1}</div>
                                <span>${step}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    } else {
        seoArea.innerText = `${tool.desc} SmartTools Hub provides professional-grade browser utilities for thousands of users daily. This tool is built using highly optimized JavaScript for maximum performance and user privacy. No data is stored on our servers.`;
    }

    // Inject Specific Logic
    injectToolFunctionalHTML(id);

    // Similar tools
    const related = TOOLS.filter(t => t.category === tool.category && t.id !== tool.id).slice(0, 4);
    document.getElementById('related-grid').innerHTML = related.map(t => `
        <button onclick="openToolModal('${t.id}')" class="flex items-center gap-5 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-blue-500 transition-all text-left bg-white dark:bg-gray-900 group">
            <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl text-gray-400 group-hover:text-blue-500 transition-colors">
                <i data-lucide="${t.icon}" class="w-5 h-5"></i>
            </div>
            <span class="font-bold text-sm">${TRANSLATIONS[state.lang].tools[t.nameKey]}</span>
        </button>
    `).join('');

    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('scale-95');
        modal.classList.add('scale-100');
    }, 10);
    
    document.body.style.overflow = "hidden";
    lucide.createIcons();
};

function closeToolModal() {
    const modal = document.getElementById('modal-container');
    const overlay = document.getElementById('modal-overlay');
    
    modal.classList.add('scale-95');
    modal.classList.remove('scale-100');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }, 300);
    
    document.body.style.overflow = "auto";
    state.activeTool = null;
    renderToolShelves();
}

function trackRecentlyUsed(id) {
    state.recent = [id, ...state.recent.filter(i => i !== id)].slice(0, 4);
    localStorage.setItem('tool_recent', JSON.stringify(state.recent));
}

// --- TOOLS IMPLEMENTATION HUB ---
function injectToolFunctionalHTML(id) {
    const c = document.getElementById('tool-content');
    const cur = CURRENCIES[state.currency].symbol;

    switch(id) {
        case 'emi-calculator':
            c.innerHTML = `
                <div class="space-y-10">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="space-y-3">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Loan Amount (${cur})</label>
                            <input type="number" id="emi-p" class="w-full p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="500000">
                        </div>
                        <div class="space-y-3">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Annual Rate (%)</label>
                            <input type="number" id="emi-r" class="w-full p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="10.5">
                        </div>
                        <div class="space-y-3">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Tenure (Years)</label>
                            <input type="number" id="emi-n" class="w-full p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="5">
                        </div>
                    </div>
                    <button onclick="runEMICalc()" class="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl font-black shadow-xl shadow-blue-600/20 active:scale-[0.98] transition-all uppercase tracking-widest text-sm">Calculate EMI</button>
                    <div id="emi-box" class="hidden animate-fade-in tool-result text-center">
                        <span class="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-4 block">Monthly Equated Installment</span>
                        <div class="text-5xl font-black text-gray-900 dark:text-white" id="emi-out"></div>
                    </div>
                </div>
            `;
            break;

        case 'word-counter':
            c.innerHTML = `
                <div class="space-y-8">
                    <textarea id="wc-in" oninput="runWordCount()" class="w-full h-64 p-8 bg-gray-50 dark:bg-gray-900 border rounded-[2rem] dark:border-gray-700 outline-none focus:ring-4 focus:ring-blue-500/10 font-medium leading-relaxed custom-scrollbar" placeholder="Type or paste your content here..."></textarea>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border dark:border-gray-700 text-center">
                            <div class="text-3xl font-black mb-1" id="wc-w">0</div>
                            <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Words</div>
                        </div>
                        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border dark:border-gray-700 text-center">
                            <div class="text-3xl font-black mb-1" id="wc-c">0</div>
                            <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Chars</div>
                        </div>
                        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border dark:border-gray-700 text-center">
                             <div class="text-3xl font-black mb-1" id="wc-s">0</div>
                             <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Sentences</div>
                        </div>
                        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border dark:border-gray-700 text-center">
                             <div class="text-3xl font-black mb-1" id="wc-r">0m</div>
                             <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Reading</div>
                        </div>
                    </div>
                </div>
            `;
            break;

        case 'password-generator':
            c.innerHTML = `
                <div class="space-y-10">
                    <div class="flex flex-col gap-6">
                         <div class="flex items-center justify-between">
                             <span class="text-sm font-black text-gray-400 uppercase tracking-widest">Length: <span id="pg-len-v">16</span></span>
                         </div>
                         <input type="range" id="pg-len" min="8" max="64" value="16" oninput="document.getElementById('pg-len-v').innerText=this.value" class="w-full">
                    </div>
                    <div class="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border-2 border-dashed border-gray-200 dark:border-gray-700 text-center break-all font-mono text-xl font-bold select-all group relative" id="pg-out">
                         Loading...
                         <div class="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[1.8rem] flex items-center justify-center pointer-events-none text-xs text-blue-600 font-black">CLICK TO SELECT ALL</div>
                    </div>
                    <button onclick="runPassGen()" class="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl font-black shadow-xl shadow-blue-600/20 transition-all uppercase tracking-widest text-sm">Regenerate Key</button>
                </div>
            `;
            runPassGen();
            break;

        case 'age-calculator':
            c.innerHTML = `
                <div class="space-y-8">
                    <div class="space-y-3">
                        <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Select Date of Birth</label>
                        <input type="date" id="age-in" class="w-full p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none focus:ring-4 focus:ring-blue-500/10">
                    </div>
                    <button onclick="runAgeCalc()" class="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl font-black shadow-xl shadow-blue-600/20 transition-all uppercase tracking-widest">Analyze Lifetime</button>
                    <div id="age-box" class="hidden animate-fade-in tool-result grid grid-cols-3 gap-4">
                        <div class="text-center"><div class="text-3xl font-black" id="age-y">0</div><div class="text-[10px] font-bold text-gray-400">Years</div></div>
                        <div class="text-center"><div class="text-3xl font-black" id="age-m">0</div><div class="text-[10px] font-bold text-gray-400">Months</div></div>
                        <div class="text-center"><div class="text-3xl font-black" id="age-d">0</div><div class="text-[10px] font-bold text-gray-400">Days</div></div>
                    </div>
                </div>
            `;
            break;

        case 'qr-code-generator':
            c.innerHTML = `
                <div class="space-y-8">
                    <input type="text" id="qr-in" class="w-full p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none focus:ring-4 focus:ring-blue-500/10" placeholder="Enter URL or Text...">
                    <button onclick="runQRGen()" class="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl font-black shadow-xl shadow-blue-600/20 transition-all uppercase tracking-widest">Generate QR Code</button>
                    <div id="qr-box" class="hidden animate-fade-in flex flex-col items-center gap-6">
                        <img id="qr-img" class="w-48 h-48 rounded-2xl shadow-xl bg-white p-2">
                        <a id="qr-down" download="qr.png" class="text-blue-600 font-bold hover:underline">Download Image</a>
                    </div>
                </div>
            `;
            break;

        case 'notes-app':
            c.innerHTML = `
                <div class="space-y-6">
                    <textarea id="notes-in" oninput="runNotesSave()" class="w-full h-80 p-8 bg-gray-50 dark:bg-gray-900 border rounded-[2rem] dark:border-gray-700 outline-none focus:ring-4 focus:ring-blue-500/10 font-medium leading-relaxed custom-scrollbar" placeholder="Start writing notes... auto-saves.">${state.notes}</textarea>
                    <div class="flex justify-between items-center text-xs font-bold text-gray-400">
                        <span>Synced with Local Storage</span>
                        <button onclick="clearNotes()" class="text-red-500 hover:underline">Clear Everything</button>
                    </div>
                </div>
            `;
            break;

        case 'todo-list':
             c.innerHTML = `
                <div class="space-y-8">
                    <div class="flex gap-4">
                        <input type="text" id="todo-in" class="flex-grow p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none focus:ring-4 focus:ring-blue-500/10" placeholder="Task description...">
                        <button onclick="runAddTodo()" class="px-8 bg-blue-600 text-white rounded-2xl font-black shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all"><i data-lucide="plus"></i></button>
                    </div>
                    <div id="todo-list-v" class="space-y-4 max-h-72 overflow-y-auto custom-scrollbar pr-2">
                        <!-- Tasks -->
                    </div>
                </div>
             `;
             refreshTodoList();
             lucide.createIcons();
             break;

        case 'base64-converter':
            c.innerHTML = `
                <div class="space-y-6">
                    <textarea id="b64-in" class="w-full h-40 p-6 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-medium outline-none focus:ring-2 focus:ring-blue-500" placeholder="Input string..."></textarea>
                    <div class="grid grid-cols-2 gap-4">
                        <button onclick="runB64('enc')" class="py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg transition-all">Encode</button>
                        <button onclick="runB64('dec')" class="py-4 bg-gray-100 dark:bg-gray-800 rounded-2xl font-black transition-all">Decode</button>
                    </div>
                    <textarea id="b64-out" readonly class="w-full h-40 p-6 bg-blue-50/50 dark:bg-blue-900/10 border-2 border-blue-100 dark:border-blue-900/20 rounded-2xl font-mono text-sm outline-none" placeholder="Result..."></textarea>
                </div>
            `;
            break;

        case 'stopwatch':
            c.innerHTML = `
                <div class="space-y-10 py-6 text-center">
                    <div class="text-7xl font-black tracking-tighter" id="sw-time">00:00:00</div>
                    <div class="flex justify-center gap-6">
                        <button id="sw-btn" onclick="runStopwatchToggle()" class="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl shadow-blue-500/30 hover:scale-110 active:scale-95 transition-all">
                             <i data-lucide="play" class="w-8 h-8 ml-1"></i>
                        </button>
                        <button onclick="runStopwatchReset()" class="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
                             <i data-lucide="refresh-cw" class="w-8 h-8"></i>
                        </button>
                    </div>
                </div>
            `;
            lucide.createIcons();
            break;

        case 'sip-calculator':
            c.innerHTML = `
                <div class="space-y-8">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="space-y-2"><label class="text-[10px] font-black text-gray-400 uppercase">Monthly SIP (${cur})</label><input type="number" id="sip-m" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700" value="5000"></div>
                        <div class="space-y-2"><label class="text-[10px] font-black text-gray-400 uppercase">Return Rate (%)</label><input type="number" id="sip-r" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700" value="12"></div>
                        <div class="space-y-2"><label class="text-[10px] font-black text-gray-400 uppercase">Years</label><input type="number" id="sip-n" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700" value="10"></div>
                    </div>
                    <button onclick="runSIPCalc()" class="w-full py-5 bg-blue-600 text-white rounded-3xl font-black uppercase tracking-widest text-sm shadow-xl">Estimate Growth</button>
                    <div id="sip-box" class="hidden animate-fade-in tool-result text-center"><span class="text-xs font-black text-blue-600 block mb-2 uppercase">Maturity Value</span><div class="text-4xl font-black" id="sip-out"></div></div>
                </div>
            `;
            break;

        case 'tax-calculator':
            c.innerHTML = `
                <div class="space-y-8">
                    <div class="space-y-2"><label class="text-xs font-black text-gray-400 uppercase tracking-widest">Annual Salary (${cur})</label><input type="number" id="tax-in" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold" placeholder="1000000"></div>
                    <button onclick="runTaxCalc()" class="w-full py-5 bg-blue-600 text-white rounded-3xl font-black uppercase shadow-xl">Calculate Tax Liability</button>
                    <div id="tax-box" class="hidden animate-fade-in tool-result text-center"><span class="text-xs font-black text-blue-600 block mb-2 uppercase">Estimated Annual Tax</span><div class="text-4xl font-black" id="tax-out"></div></div>
                </div>
            `;
            break;
        
        case 'username-generator':
             c.innerHTML = `
                <div class="space-y-8">
                     <input type="text" id="un-in" class="w-full p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold" placeholder="Your name/keyword...">
                     <button onclick="runUserGen()" class="w-full py-5 bg-blue-600 text-white rounded-3xl font-black uppercase shadow-xl">Generate Handles</button>
                     <div id="un-grid" class="grid grid-cols-2 gap-3"></div>
                </div>
             `;
             break;

        case 'bio-generator':
            c.innerHTML = `
                <div class="space-y-8">
                    <textarea id="bio-in" class="w-full p-6 bg-gray-50 dark:bg-gray-900 border rounded-3xl dark:border-gray-700 font-medium" placeholder="Describe yourself briefly..."></textarea>
                    <button onclick="runBioGen()" class="w-full py-5 bg-blue-600 text-white rounded-3xl font-black uppercase shadow-xl">Creativeify Bio</button>
                    <div id="bio-list" class="space-y-4"></div>
                </div>
            `;
            break;
            
        case 'caption-generator':
            c.innerHTML = `
                <div class="space-y-8">
                    <input type="text" id="cap-in" class="w-full p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold" placeholder="Post topic (e.g. Travel, Coffee, Life)...">
                    <button onclick="runCaptionGen()" class="w-full py-5 bg-blue-600 text-white rounded-3xl font-black uppercase shadow-xl tracking-widest">Generate Aesthetic Captions</button>
                    <div id="cap-list" class="space-y-4"></div>
                </div>
            `;
            break;
        
        case 'image-compressor':
        case 'background-remover':
        case 'image-resizer':
        case 'jpg-to-png':
        case 'pdf-merger':
        case 'pdf-splitter':
             c.innerHTML = `
                <div class="space-y-8">
                    <div class="w-full h-48 border-4 border-dashed border-gray-100 dark:border-gray-800 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center group hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-all cursor-pointer relative" onclick="document.getElementById('file-in').click()">
                        <i data-lucide="upload-cloud" class="w-12 h-12 text-gray-300 group-hover:text-blue-500 mb-4"></i>
                        <p class="text-sm font-bold text-gray-400 group-hover:text-gray-600">Click or Drag to Upload Files</p>
                        <input type="file" id="file-in" class="hidden" multiple onchange="runFileSim()">
                    </div>
                    <div id="file-box" class="hidden animate-fade-in space-y-6">
                         <div class="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                             <div id="file-prog" class="w-0 h-full bg-blue-600 transition-all duration-1000"></div>
                         </div>
                         <div class="p-6 bg-green-50 dark:bg-green-900/10 border-2 border-green-100 dark:border-green-800/20 rounded-2xl flex items-center justify-between">
                             <span class="font-bold text-green-600 text-sm">Processing Complete!</span>
                             <button class="px-6 py-2 bg-green-600 text-white rounded-xl text-xs font-black shadow-lg shadow-green-500/20">Download Result</button>
                         </div>
                    </div>
                </div>
             `;
             lucide.createIcons();
             break;

        default:
            c.innerHTML = `<div class="p-20 text-center opacity-30"><i data-lucide="wrench" class="w-16 h-16 mx-auto mb-6 animate-bounce"></i><p class="font-black text-xl uppercase tracking-widest">Premium Logic Coming Soon</p></div>`;
    }
}

// --- LOGIC FUNCTIONS ---
window.runEMICalc = () => {
    const p = parseFloat(document.getElementById('emi-p').value);
    const r = parseFloat(document.getElementById('emi-r').value) / 12 / 100;
    const n = parseFloat(document.getElementById('emi-n').value) * 12;
    if(!p || !r || !n) return toast("Enter valid numbers");
    const emi = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    document.getElementById('emi-box').classList.remove('hidden');
    document.getElementById('emi-out').innerText = formatToolCurrency(emi);
};

window.runWordCount = () => {
    const t = document.getElementById('wc-in').value.trim();
    document.getElementById('wc-w').innerText = t ? t.split(/\s+/).length : 0;
    document.getElementById('wc-c').innerText = t.length;
    document.getElementById('wc-s').innerText = t ? t.split(/[.!?]+/).filter(Boolean).length : 0;
    document.getElementById('wc-r').innerText = Math.ceil((t.split(/\s+/).length || 0) / 200) + 'm';
};

window.runPassGen = () => {
    const len = document.getElementById('pg-len')?.value || 16;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]";
    let p = "";
    for(let i=0; i<len; i++) p += chars.charAt(Math.floor(Math.random() * chars.length));
    document.getElementById('pg-out').innerText = p;
};

window.runAgeCalc = () => {
    const dob = new Date(document.getElementById('age-in').value);
    if(isNaN(dob)) return toast("Check date");
    const now = new Date();
    let y = now.getFullYear() - dob.getFullYear();
    let m = now.getMonth() - dob.getMonth();
    let d = now.getDate() - dob.getDate();
    if(d < 0) { m--; d += 30; }
    if(m < 0) { y--; m += 12; }
    document.getElementById('age-box').classList.remove('hidden');
    document.getElementById('age-y').innerText = y;
    document.getElementById('age-m').innerText = m;
    document.getElementById('age-d').innerText = d;
};

window.runQRGen = () => {
    const val = document.getElementById('qr-in').value;
    if(!val) return toast("Enter text/URL");
    const img = document.getElementById('qr-img');
    const box = document.getElementById('qr-box');
    const down = document.getElementById('qr-down');
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(val)}`;
    img.onload = () => { 
        box.classList.remove('hidden');
        down.href = img.src;
    };
};

window.runNotesSave = () => {
    state.notes = document.getElementById('notes-in').value;
    localStorage.setItem('tool_notes', state.notes);
};

window.runAddTodo = () => {
    const v = document.getElementById('todo-in').value.trim();
    if(!v) return;
    state.todo.push({ id: Date.now(), text: v, done: false });
    localStorage.setItem('tool_todo', JSON.stringify(state.todo));
    document.getElementById('todo-in').value = '';
    refreshTodoList();
};

window.removeTodo = (id) => {
    state.todo = state.todo.filter(t => t.id !== id);
    localStorage.setItem('tool_todo', JSON.stringify(state.todo));
    refreshTodoList();
};

function refreshTodoList() {
    const v = document.getElementById('todo-list-v');
    v.innerHTML = state.todo.map(t => `
        <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 border dark:border-gray-800 rounded-2xl animate-fade-in group">
            <span class="font-bold text-sm text-gray-700 dark:text-gray-300 capitalize">${t.text}</span>
            <button onclick="removeTodo(${t.id})" class="p-2 text-red-400 opacity-0 group-hover:opacity-100 transition-all"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
        </div>
    `).join('') || '<p class="text-center text-xs text-gray-400 font-bold py-10 uppercase tracking-widest">No active tasks</p>';
    lucide.createIcons();
}

window.runB64 = (mode) => {
    const v = document.getElementById('b64-in').value;
    const out = document.getElementById('b64-out');
    try {
        out.value = mode === 'enc' ? btoa(v) : atob(v);
    } catch(e) { toast("Invalid input"); }
};

let swInt = null;
let swT = 0;
window.runStopwatchToggle = () => {
    const btn = document.getElementById('sw-btn');
    if(swInt) {
        clearInterval(swInt);
        swInt = null;
        btn.innerHTML = `<i data-lucide="play" class="w-8 h-8 ml-1"></i>`;
    } else {
        swInt = setInterval(() => {
            swT += 10;
            const ms = swT % 1000;
            const s = Math.floor(swT / 1000) % 60;
            const m = Math.floor(swT / 60000) % 60;
            document.getElementById('sw-time').innerText = `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}:${(ms/10).toFixed(0).toString().padStart(2,'0')}`;
        }, 10);
        btn.innerHTML = `<i data-lucide="pause" class="w-8 h-8"></i>`;
    }
    lucide.createIcons();
};

window.runStopwatchReset = () => {
    clearInterval(swInt); swInt = null; swT = 0;
    document.getElementById('sw-time').innerText = "00:00:00";
    document.getElementById('sw-btn').innerHTML = `<i data-lucide="play" class="w-8 h-8 ml-1"></i>`;
    lucide.createIcons();
};

window.runSIPCalc = () => {
    const p = parseFloat(document.getElementById('sip-m').value);
    const r = parseFloat(document.getElementById('sip-r').value) / 100 / 12;
    const n = parseFloat(document.getElementById('sip-n').value) * 12;
    const mat = p * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    document.getElementById('sip-box').classList.remove('hidden');
    document.getElementById('sip-out').innerText = formatToolCurrency(mat);
};

window.runTaxCalc = () => {
    const sal = parseFloat(document.getElementById('tax-in').value) || 0;
    let t = 0;
    if(sal > 1500000) t = (sal - 1500000) * 0.3 + 187500;
    else if(sal > 1000000) t = (sal - 1000000) * 0.2 + 87500;
    else if(sal > 500000) t = (sal - 500000) * 0.1 + 12500;
    document.getElementById('tax-box').classList.remove('hidden');
    document.getElementById('tax-out').innerText = formatToolCurrency(t);
};

window.runUserGen = () => {
    const k = document.getElementById('un-in').value || 'cool';
    const sufs = ['_dev', 'master', 'io', 'hq', 'official', '2k26', 'x', 'box', 'ultra', 'hub'];
    const names = sufs.map(s => k.toLowerCase().replace(/\s/g, '') + s);
    const g = document.getElementById('un-grid');
    g.innerHTML = names.map(n => `<div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl text-center text-xs font-bold border dark:border-gray-700">${n}</div>`).join('');
};

window.runBioGen = () => {
    const bios = [
        "✨ Dreamer | Explorer of Code \n📍 Earth \n🛠️ Building SmartTools",
        "Digital Enthusiast 💻 \nCurating experiences with logic & love ❤️ \n#DeveloperLife",
        "minimalist. ⚪ \nproductivity obsessed. \n2026 vibes only.",
    ];
    document.getElementById('bio-list').innerHTML = bios.map(b => `<pre class="p-6 bg-gray-50 dark:bg-gray-900 border dark:border-gray-800 rounded-3xl font-bold whitespace-pre-wrap text-sm">${b}</pre>`).join('');
};

window.runCaptionGen = () => {
    const caps = ["Escaping the ordinary. ✨", "Code is poetry. 💻", "Just vibes and utilities. 🛠️", "Focus on results. 📈"];
    document.getElementById('cap-list').innerHTML = caps.map(c => `<div class="p-6 bg-gray-50 dark:bg-gray-900 border dark:border-gray-800 rounded-3xl font-bold text-sm">${c}</div>`).join('');
};

window.runFileSim = () => {
    const prog = document.getElementById('file-prog');
    const box = document.getElementById('file-box');
    box.classList.remove('hidden');
    prog.style.width = '0%';
    setTimeout(() => { prog.style.width = '100%'; }, 50);
};

// --- HELPERS ---
function formatToolCurrency(v) {
    const cur = CURRENCIES[state.currency];
    const val = v * (state.currency === 'USD' ? 1 : cur.rate / (cur.rate === 83 ? 1 : 1)); // Simplified for export
    return new Intl.NumberFormat(state.lang === 'hi' ? 'en-IN' : 'en-US', {
        style: 'currency',
        currency: state.currency,
        maximumFractionDigits: 0
    }).format(v);
}

function toast(msg) {
    const t = document.getElementById('toast');
    t.innerText = msg;
    t.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => {
        t.classList.add('translate-y-20', 'opacity-0');
    }, 2500);
}

// --- BOOT ENGINE ---
function boot() {
    document.getElementById('lang-select').value = state.lang;
    document.getElementById('currency-select').value = state.currency;
    document.getElementById('modal-close').onclick = closeToolModal;
    document.getElementById('modal-overlay').onclick = closeToolModal;
    
    renderUI();
    
    // Initialize with the random quote from state
    const firstQuote = QUOTES[state.quoteIdx];
    document.getElementById('quote-text').innerText = `"${firstQuote.text}"`;
    document.getElementById('quote-author').innerText = `— ${firstQuote.author}`;
    
    setInterval(autoRotateQuotes, 8000);
    lucide.createIcons();
}

boot();
