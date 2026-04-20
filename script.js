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
    { id: 'username-generator', nameKey: 'username', icon: 'user-plus', category: 'Instagram', desc: 'Creative handle generator for socials.' },
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
    },
    'tax-calculator': {
        about: "Navigate the complexities of annual tax liability with our Income Tax Estimator. Designed for multiple jurisdictions with a focus on simple, accurate projections, this tool helps you understand your tax bracket and effective rate based on your gross revenue. Whether you are optimizing your finances for the new fiscal year or just curious about your deductions, our calculator provides a clear visual of your contributions and net take-home pay.",
        steps: [
            "Enter your total annual revenue before deductions.",
            "Select your preferred tax regime or filing status.",
            "Input applicable investment deductions or exemptions.",
            "Review your calculated liability and effective percentage."
        ]
    },
    'credit-card-interest': {
        about: "Uncover the true cost of debt with our Credit Card Interest and Payoff Calculator. Many users are unaware of how daily interest accrual impacts their long-term balance. This tool uses standard amortization arithmetic to show you exactly how much interest you will pay over time and how long it will take to reach a zero balance based on your current payments. Visualizing this data is the first step toward financial freedom and interest-saving strategies.",
        steps: [
            "Input your current unpaid credit card balance.",
            "Enter the annual percentage rate (APR) from your statement.",
            "Input your planned monthly payment amount.",
            "Analyze the total interest cost and time to reach your target."
        ]
    },
    'insurance-estimator': {
        about: "Choosing the right protection for your family and health is a vital decision. Our Insurance Premium Estimator provides heuristic quotes for term life, health, and accident covers based on global actuarial averages. By factoring in your age, coverage requirements, and lifestyle choices like tobacco use, our tool helps you baseline your expected costs before speaking with an agent. Understanding your premium requirements helps in securing the best possible rates.",
        steps: [
            "Select the type of insurance plan you are exploring.",
            "Enter your current age to adjust for actuarial risk.",
            "Input the desired coverage amount (sum assured).",
            "Review your estimated monthly premium commitment."
        ]
    },
    'freelancer-earning': {
        about: "Transitioning from a salary to freelance work requires a solid understanding of your earning potential. Our Freelancer Income Projector helps you convert your hourly rates and billable hours into realistic monthly and annual revenue targets. Accounting for average billability and regional holidays, this tool provides a clear target for business growth and lifestyle budgeting. It's an essential utility for independent consultants and creative entrepreneurs.",
        steps: [
            "Input your high-value hourly or project base rate.",
            "Enter the number of billable hours you plan to work weekly.",
            "Check the projected monthly revenue for budget planning.",
            "Analyze the annual income forecast to set financial goals."
        ]
    },
    'domain-estimator': {
        about: "In the digital real-estate market, your domain name is your most valuable asset. Our Domain Value Estimator uses heuristic analysis to baseline the market worth of your URL based on length, TLD prestige (like .com, .io, .ai), and keyword density. While the actual sale price depends on market demand, our tool provides a data-driven starting point for negotiations and portfolio management. Identifying high-value keywords helps you understand the hidden potential of your URLs.",
        steps: [
            "Enter the full domain name you wish to evaluate.",
            "The engine will analyze character count and TLD rarity.",
            "Keyword relevance is checked against historical sales data.",
            "Review the estimated valuation and technical breakdown."
        ]
    },
    'crypto-profit': {
        about: "Tracking volatile asset performance requires high-speed calculations. Our Crypto Profit and ROI Tracker allows you to quickly calculate net gains or losses on your digital asset trades. Simply input your entry capital, buy price, and sell price to see your percentage return and final balance. This tool is perfect for both day-traders and long-term HODLers looking to baseline their portfolio performance without using complex spreadsheets.",
        steps: [
            "Input your initial investment capital in your base currency.",
            "Enter the asset price at the time of your purchase.",
            "Input the current market price or target exit price.",
            "Analyze your net profit/loss and total percentage ROI."
        ]
    },
    'roi-calculator': {
        about: "Efficiency is the key to successful performance marketing. Our Ads ROI and ROAS (Return on Ad Spend) Calculator helps you determine the profitability of your marketing campaigns. By analyzing total spend against generated revenue, our tool provides an efficiency factor that helps you identify winning strategies and cut waste. It's a critical utility for media buyers, small business owners, and digital marketers focused on metric-driven growth.",
        steps: [
            "Enter your total budget spent on the marketing campaign.",
            "Input the total gross revenue generated from those ads.",
            "Review the calculated ROI and ROAS metrics.",
            "Use the visual efficiency bar to baseline campaign performance."
        ]
    },
    'username-generator': {
        about: "Identity on social media starts with a memorable handle. Our Instagram/TikTok Username Generator creates unique, stylish, and 'OG' handles based on your personal keyword combined with modern style presets. Whether you need a professional HQ handle or a high-hype street vibe, our engine generates multiple variants that avoid the 'User123' feeling. Finding the perfect identity helps in building a cohesive personal brand across digital platforms.",
        steps: [
            "Enter a core keyword related to your brand or name.",
            "Select a style preset (Modern, Hype, OG, or Professional).",
            "Choose a separator style to suit your platform's aesthetic.",
            "Click 'Forge' and select your favorite available-style handle."
        ]
    },
    'caption-generator': {
        about: "Stop wasting hours staring at a blinking cursor. Our AI-Vibe Caption Generator creates engaging social media scripts tailored to your post's topic and desired aesthetic. From minimal aesthetic vibes for Pinterest-style content to high-hype bold captions for reel viral loops, our templates cover every creative scenario. We even include hashtag blueprints and emoji load levels to ensure your post is optimized for engagement and discovery.",
        steps: [
            "Describe the topic or scene of your social media post.",
            "Select the desired aesthetic vibe and emoji load level.",
            "Choose your hashtag strategy based on post goals.",
            "Copy your favorite script and watch your engagement grow."
        ]
    },
    'bio-generator': {
        about: "Your social media bio is your digital first impression. Our Aesthetic Bio Generator transforms your simple description into a creatively formatted, professional, and eye-catching user profile. Using stylish typography and logical structure, we help you communicate your identity and call-to-action effectively. Whether you are an influencer, a developer, or a brand, our utility ensures your 'Link in Bio' starts with a strong introduction.",
        steps: [
            "Input a brief description of who you are and what you do.",
            "Our engine will apply multiple creative formatting templates.",
            "Review the generated bios for tone and aesthetic appeal.",
            "Copy the one that best represents your digital identity."
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
    console.log("openToolModal called with ID:", id);
    const tool = TOOLS.find(t => t.id === id);
    if (!tool) {
        console.error("Tool not found for ID:", id);
        return;
    }

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
    const normalizedId = (id || location.hash.replace('#', '') || '').toLowerCase().trim().replace('#', '').replace(/\s+/g, '-');
    console.log("TOOL ID (injected):", normalizedId);
    const c = document.getElementById('tool-content');
    const cur = CURRENCIES[state.currency].symbol;

    switch(normalizedId) {
        case 'emi-calculator':
            c.innerHTML = `
                <div class="space-y-10">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="space-y-6">
                            <div class="space-y-3">
                                <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Loan Amount (${cur})</label>
                                <input type="number" id="emi-p" class="w-full p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="500000">
                            </div>
                            <div class="space-y-3">
                                <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Annual Rate (%)</label>
                                <input type="number" id="emi-r" class="w-full p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="10.5">
                            </div>
                        </div>
                        <div class="space-y-6">
                            <div class="space-y-3">
                                <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Tenure (Years)</label>
                                <input type="number" id="emi-n" class="w-full p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="5">
                            </div>
                            <div class="space-y-3">
                                <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Interest Customization</label>
                                <select id="emi-freq" class="w-full p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none">
                                    <option value="12">Compounded Monthly (Standard)</option>
                                    <option value="4">Compounded Quarterly</option>
                                    <option value="1">Compounded Annually</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button onclick="runEMICalc()" class="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] font-black shadow-2xl shadow-blue-600/30 active:scale-[0.98] transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                        <i data-lucide="calculator" class="w-4 h-4"></i> Generate Amortization Summary
                    </button>
                    <div id="emi-box" class="hidden animate-fade-in tool-result text-center py-10 bg-blue-600/5 border-2 border-blue-600/20 rounded-[2.5rem]">
                        <span class="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-4 block">Scheduled Monthly Installment</span>
                        <div class="text-6xl font-black text-gray-900 dark:text-white" id="emi-out"></div>
                    </div>
                </div>
            `;
            lucide.createIcons();
            break;

        case 'word-counter':
            c.innerHTML = `
                <div class="space-y-8">
                    <div class="flex items-center justify-between">
                        <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Text Analytics Workshop</label>
                        <div class="flex gap-2">
                             <button onclick="processWCText('upper')" class="px-3 py-1 bg-gray-50 dark:bg-gray-800 rounded-lg text-[10px] font-black hover:bg-blue-50 transition-colors uppercase">UPPER</button>
                             <button onclick="processWCText('lower')" class="px-3 py-1 bg-gray-50 dark:bg-gray-800 rounded-lg text-[10px] font-black hover:bg-blue-50 transition-colors uppercase">lower</button>
                             <button onclick="processWCText('clean')" class="px-3 py-1 bg-gray-50 dark:bg-gray-800 rounded-lg text-[10px] font-black hover:bg-blue-50 transition-colors uppercase">Cleanup</button>
                        </div>
                    </div>
                    <textarea id="wc-in" oninput="runWordCount()" class="w-full h-64 p-8 bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-blue-500/20 rounded-[2.5rem] dark:border-gray-700 outline-none focus:ring-4 focus:ring-blue-500/5 font-medium leading-relaxed custom-scrollbar placeholder:text-gray-300" placeholder="Type or paste your content here..."></textarea>
                    
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-[1.5rem] border dark:border-gray-700 text-center relative overflow-hidden group">
                            <div class="text-3xl font-black mb-1 group-hover:scale-110 transition-transform" id="wc-w">0</div>
                            <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Words</div>
                        </div>
                        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-[1.5rem] border dark:border-gray-700 text-center relative overflow-hidden group">
                            <div class="text-3xl font-black mb-1 group-hover:scale-110 transition-transform" id="wc-c">0</div>
                            <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Chars</div>
                        </div>
                        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-[1.5rem] border dark:border-gray-700 text-center relative overflow-hidden group">
                             <div class="text-3xl font-black mb-1 group-hover:scale-110 transition-transform" id="wc-s">0</div>
                             <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Sentences</div>
                        </div>
                        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-[1.5rem] border dark:border-gray-700 text-center relative overflow-hidden group">
                             <div class="text-3xl font-black mb-1 group-hover:scale-110 transition-transform" id="wc-r">0m</div>
                             <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Reading</div>
                        </div>
                    </div>

                    <div class="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-[2rem] flex items-center justify-between">
                         <div class="flex flex-col">
                            <span class="text-[10px] font-black text-blue-600 uppercase tracking-widest">Target Progress</span>
                            <span class="text-xs font-bold text-gray-600 dark:text-gray-400">Aiming for 500 words</span>
                         </div>
                         <div class="w-1/2 bg-white dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                            <div id="wc-prog" class="w-0 h-full bg-blue-600 transition-all duration-500"></div>
                         </div>
                    </div>
                </div>
            `;
            break;

        case 'password-generator':
            c.innerHTML = `
                <div class="space-y-10">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="space-y-8">
                            <div class="flex flex-col gap-6">
                                <div class="flex items-center justify-between">
                                    <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Passphrase Length</label>
                                    <span id="pg-len-v" class="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-lg text-xs font-black">16</span>
                                </div>
                                <input type="range" id="pg-len" min="8" max="64" value="16" oninput="document.getElementById('pg-len-v').innerText=this.value; runPassGen()" class="w-full">
                            </div>
                            
                            <div class="grid grid-cols-2 gap-4">
                                <label class="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors">
                                    <input type="checkbox" id="pg-up" checked onchange="runPassGen()" class="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                                    <span class="text-xs font-bold text-gray-600 dark:text-gray-300">ABC</span>
                                </label>
                                <label class="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors">
                                    <input type="checkbox" id="pg-num" checked onchange="runPassGen()" class="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                                    <span class="text-xs font-bold text-gray-600 dark:text-gray-300">123</span>
                                </label>
                                <label class="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors">
                                    <input type="checkbox" id="pg-sym" checked onchange="runPassGen()" class="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                                    <span class="text-xs font-bold text-gray-600 dark:text-gray-300">@#$</span>
                                </label>
                                <label class="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors">
                                    <input type="checkbox" id="pg-low" checked onchange="runPassGen()" class="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                                    <span class="text-xs font-bold text-gray-600 dark:text-gray-300">abc</span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="flex flex-col justify-center gap-6">
                            <div class="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] border-2 border-dashed border-gray-200 dark:border-gray-700 text-center break-all font-mono text-2xl font-black select-all group relative min-h-[140px] flex items-center justify-center overflow-hidden" id="pg-out">
                                 <div class="animate-pulse text-gray-300 italic">Generating Secure Key...</div>
                                 <div class="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.4rem] flex items-center justify-center pointer-events-none text-[10px] text-blue-600 font-black tracking-[0.2em]">CLICK TO COPY ALL</div>
                            </div>
                            <button onclick="runPassGen()" class="w-full py-5 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-3xl font-black shadow-2xl active:scale-[0.98] transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                                <i data-lucide="refresh-cw" class="w-4 h-4"></i> Generate New Key
                            </button>
                        </div>
                    </div>
                </div>
            `;
            runPassGen();
            lucide.createIcons();
            break;

        case 'age-calculator':
            c.innerHTML = `
                <div class="space-y-10">
                    <div class="flex flex-col md:flex-row gap-8 items-center bg-gray-50 dark:bg-gray-900 p-8 rounded-[2.5rem] border dark:border-gray-800">
                        <div class="space-y-4 flex-grow w-full">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Chronological Origin</label>
                            <input type="date" id="age-in" class="w-full p-6 bg-white dark:bg-gray-800 border-2 border-transparent focus:border-blue-500/20 rounded-2xl font-black outline-none focus:ring-4 focus:ring-blue-500/5 transition-all">
                        </div>
                        <button onclick="runAgeCalc()" class="w-full md:w-auto h-20 px-10 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black shadow-2xl shadow-blue-600/30 flex items-center justify-center transition-all group">
                            <i data-lucide="zap" class="w-6 h-6 group-hover:scale-125 transition-transform"></i>
                        </button>
                    </div>

                    <div id="age-box" class="hidden animate-fade-in space-y-10">
                        <div class="grid grid-cols-3 gap-6">
                            <div class="p-8 bg-blue-600 text-white rounded-[2.5rem] text-center shadow-2xl shadow-blue-600/20">
                                <div class="text-4xl font-black mb-2" id="age-y">0</div>
                                <div class="text-[10px] font-black uppercase tracking-widest opacity-60">Years</div>
                            </div>
                            <div class="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] text-center border dark:border-gray-800">
                                <div class="text-4xl font-black mb-2 text-gray-900 dark:text-white" id="age-m">0</div>
                                <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Months</div>
                            </div>
                            <div class="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] text-center border dark:border-gray-800">
                                <div class="text-4xl font-black mb-2 text-gray-900 dark:text-white" id="age-d">0</div>
                                <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Days</div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div class="p-6 bg-indigo-50 dark:bg-indigo-900/10 rounded-3xl border-2 border-indigo-100 dark:border-indigo-900/20 flex flex-col items-center">
                                <span class="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-2 text-center">Next Orbit (Birthday)</span>
                                <div id="age-next" class="text-xl font-black text-gray-900 dark:text-white text-center">-- Days Remaining</div>
                             </div>
                             <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border dark:border-gray-800 flex justify-around items-center">
                                <div class="text-center">
                                    <div class="text-lg font-black text-gray-900 dark:text-white" id="age-weeks">0</div>
                                    <div class="text-[8px] font-black text-gray-400 uppercase tracking-widest">Total Weeks</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-lg font-black text-gray-900 dark:text-white" id="age-hours">0</div>
                                    <div class="text-[8px] font-black text-gray-400 uppercase tracking-widest">Total Hours</div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            `;
            lucide.createIcons();
            break;

        case 'qr-code-generator':
            c.innerHTML = `
                <div class="space-y-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="space-y-6">
                            <div class="space-y-3">
                                <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Global Payload</label>
                                <input type="text" id="qr-in" class="w-full p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="URL, Text or Phone...">
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Dots Color</label>
                                    <input type="color" id="qr-color" value="#000000" class="w-full h-12 p-1 bg-white dark:bg-gray-800 rounded-xl cursor-pointer">
                                </div>
                                <div class="space-y-2">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">BG Color</label>
                                    <input type="color" id="qr-bg" value="#ffffff" class="w-full h-12 p-1 bg-white dark:bg-gray-800 rounded-xl cursor-pointer">
                                </div>
                            </div>
                            <div class="space-y-3">
                                <div class="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                    <span class="text-gray-400">Resolution</span>
                                    <span id="qr-size-v" class="text-blue-600">300px</span>
                                </div>
                                <input type="range" id="qr-size" min="100" max="1000" step="50" value="300" oninput="document.getElementById('qr-size-v').innerText=this.value+'px'" class="w-full">
                            </div>
                        </div>
                        <div id="qr-box" class="hidden animate-fade-in flex flex-col items-center justify-center gap-6 p-6 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] border-2 border-dashed border-gray-200 dark:border-gray-700">
                            <img id="qr-img" class="w-48 h-48 rounded-2xl shadow-2xl bg-white p-2 transition-transform hover:scale-105 duration-500">
                            <a id="qr-down" download="custom-qr.png" class="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl text-[10px] font-black shadow-lg uppercase tracking-widest flex items-center gap-2 border dark:border-gray-700">
                                <i data-lucide="download" class="w-3 h-3"></i> Save Source
                            </a>
                        </div>
                    </div>
                    <button onclick="runQRGen()" class="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] font-black shadow-2xl shadow-blue-600/30 active:scale-[0.98] transition-all uppercase tracking-widest text-xs">Build Custom QR Matrix</button>
                </div>
            `;
            lucide.createIcons();
            break;

        case 'notes-app':
            c.innerHTML = `
                <div class="space-y-6">
                    <div class="flex items-center justify-between mb-2">
                        <label class="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                             <i data-lucide="file-pen" class="w-3 h-3"></i> Private Workspace
                        </label>
                        <div class="flex gap-4">
                             <button onclick="exportNotes()" class="text-[10px] font-black text-blue-600 hover:underline uppercase tracking-widest">Export TXT</button>
                             <button onclick="copyNotes()" class="text-[10px] font-black text-blue-600 hover:underline uppercase tracking-widest">Copy Content</button>
                        </div>
                    </div>
                    <textarea id="notes-in" oninput="runNotesSave()" class="w-full h-80 p-10 bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-blue-500/10 rounded-[2.5rem] dark:border-gray-700 outline-none focus:ring-4 focus:ring-blue-500/5 font-medium leading-relaxed custom-scrollbar shadow-inner" placeholder="Encryption active... start your manifestation.">${state.notes}</textarea>
                    <div class="flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        <span class="flex items-center gap-2 text-green-500"><i data-lucide="cloud-check" class="w-3 h-3"></i> Syncing to Local DB</span>
                        <button onclick="clearNotes()" class="text-red-500 hover:underline">Destroy Fragment</button>
                    </div>
                </div>
            `;
            lucide.createIcons();
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
                <div class="space-y-10">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="space-y-3">
                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Monthly Commitment (${cur})</label>
                            <input type="number" id="sip-m" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" value="5000">
                        </div>
                        <div class="space-y-3">
                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Expected Yield (%)</label>
                            <input type="number" id="sip-r" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" value="12">
                        </div>
                        <div class="space-y-3">
                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Timeline (Years)</label>
                            <input type="number" id="sip-n" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" value="10">
                        </div>
                    </div>

                    <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border dark:border-gray-800 space-y-6">
                        <div class="flex items-center justify-between">
                            <div class="flex flex-col">
                                <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Annual Step-Up (%)</span>
                                <span class="text-[8px] font-bold text-blue-500 uppercase tracking-tighter">Increase investment yearly</span>
                            </div>
                            <span id="sip-step-v" class="text-xs font-black text-blue-600">0%</span>
                        </div>
                        <input type="range" id="sip-step" min="0" max="25" value="0" step="1" oninput="document.getElementById('sip-step-v').innerText = this.value + '%'" class="w-full">
                    </div>

                    <button onclick="runSIPCalc()" class="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] font-black shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-3 transition-all uppercase tracking-widest text-[10px]">
                        <i data-lucide="trending-up" class="w-4 h-4"></i> Forecast Financial Trajectory
                    </button>

                    <div id="sip-box" class="hidden animate-fade-in space-y-8">
                         <div class="text-center py-10 bg-blue-600/5 rounded-[2.5rem] border-2 border-dashed border-blue-600/20">
                            <span class="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4 block">Maturity Expectation</span>
                            <div class="text-6xl font-black text-gray-900 dark:text-white" id="sip-out"></div>
                         </div>
                         
                         <div class="grid grid-cols-2 gap-4">
                            <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl flex flex-col items-center">
                                <span class="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Assets Invested</span>
                                <span class="text-lg font-black text-gray-900 dark:text-white" id="sip-invested">0</span>
                            </div>
                            <div class="p-6 bg-green-50 dark:bg-green-900/10 rounded-2xl flex flex-col items-center">
                                <span class="text-[8px] font-black text-green-600 uppercase tracking-widest mb-1">Compound Wealth Gained</span>
                                <span class="text-lg font-black text-green-600" id="sip-gained">0</span>
                            </div>
                         </div>
                    </div>
                </div>
            `;
            lucide.createIcons();
            break;

        case 'tax-calculator':
            c.innerHTML = `
                <div class="space-y-10">
                    <div class="flex flex-col md:flex-row gap-6 bg-gray-50 dark:bg-gray-900 p-8 rounded-[2.5rem] border dark:border-gray-800">
                        <div class="space-y-3 flex-grow">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                <i data-lucide="receipt-indian-rupee" class="w-3 h-3 text-blue-600"></i> Annual Revenue (${cur})
                            </label>
                            <input type="number" id="tax-in" class="w-full p-6 bg-white dark:bg-gray-800 border-2 border-transparent focus:border-blue-500/20 rounded-2xl font-black text-3xl outline-none focus:ring-4 focus:ring-blue-500/5 transition-all" placeholder="1000000">
                        </div>
                        <div class="space-y-3 min-w-[200px]">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest text-center block">Tax Regime</label>
                            <div class="flex bg-white dark:bg-gray-800 p-2 rounded-2xl border dark:border-gray-700">
                                <button onclick="setTaxRegime('new')" id="tax-reg-new" class="flex-grow py-3 rounded-xl text-[10px] font-black uppercase transition-all bg-blue-600 text-white shadow-lg">New</button>
                                <button onclick="setTaxRegime('old')" id="tax-reg-old" class="flex-grow py-3 rounded-xl text-[10px] font-black uppercase transition-all text-gray-400 hover:text-gray-900 dark:hover:text-white">Old</button>
                            </div>
                        </div>
                    </div>
                    
                    <button onclick="runTaxCalc()" class="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] font-black shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-3 transition-all uppercase tracking-widest text-[10px]">
                        <i data-lucide="calculator" class="w-4 h-4"></i> Execute Tax Evaluation
                    </button>

                    <div id="tax-box" class="hidden animate-fade-in space-y-8">
                         <div class="text-center py-10 bg-red-600/5 rounded-[2.5rem] border-2 border-dashed border-red-600/20">
                            <span class="text-[10px] font-black text-red-600 uppercase tracking-[0.4em] mb-4 block">Calculated Liability</span>
                            <div class="text-6xl font-black text-gray-900 dark:text-white" id="tax-out"></div>
                         </div>
                         <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl text-center">
                            <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Effective Tax Rate</span>
                            <div class="text-2xl font-black text-blue-600 mt-1" id="tax-rate">0%</div>
                         </div>
                    </div>
                </div>
            `;
            lucide.createIcons();
            break;

        case 'credit-card-interest':
            c.innerHTML = `
                <div class="space-y-10">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="space-y-3">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Unpaid Balance (${cur})</label>
                            <input type="number" id="cc-p" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none shadow-sm transition-all" value="2500">
                        </div>
                        <div class="space-y-3">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Card APR (%)</label>
                            <input type="number" id="cc-r" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none shadow-sm transition-all" value="19.99">
                        </div>
                        <div class="space-y-3">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Monthly Payment (${cur})</label>
                            <input type="number" id="cc-m" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none shadow-sm transition-all" value="100">
                        </div>
                        <div class="space-y-3">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Balance Target (${cur})</label>
                            <input type="number" id="cc-t" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none shadow-sm transition-all" value="0">
                        </div>
                    </div>
                    <button onclick="runCCCalc()" class="w-full py-6 bg-red-600 text-white rounded-[2rem] font-black shadow-2xl shadow-red-600/30 flex items-center justify-center gap-3 transition-all uppercase tracking-widest text-[10px]">
                        <i data-lucide="skull" class="w-4 h-4"></i> Analyze Debt Impact
                    </button>
                    <div id="cc-box" class="hidden animate-fade-in space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                             <div class="p-6 bg-red-50 dark:bg-red-900/10 rounded-2xl border dark:border-red-900/20 text-center">
                                <span class="text-[8px] font-black text-red-600 uppercase tracking-widest block mb-1">Total Interest</span>
                                <span id="cc-total-i" class="text-xl font-black text-red-600">0</span>
                             </div>
                             <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl text-center">
                                <span class="text-[8px] font-black text-gray-400 uppercase tracking-widest block mb-1">Months to Clear</span>
                                <span id="cc-months" class="text-xl font-black text-gray-900 dark:text-white">0</span>
                             </div>
                             <div class="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-2xl text-center">
                                <span class="text-[8px] font-black text-blue-600 uppercase tracking-widest block mb-1">Daily Accrual</span>
                                <span id="cc-daily" class="text-xl font-black text-blue-600">0</span>
                             </div>
                        </div>
                    </div>
                </div>
            `;
            lucide.createIcons();
            break;

        case 'website-cost':
            c.innerHTML = `
                <div class="space-y-10">
                    <div class="space-y-6">
                        <label class="text-xs font-black text-gray-400 uppercase tracking-widest block mb-4">Project Components</label>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" id="web-opts">
                            <label class="p-5 border-2 border-gray-100 dark:border-gray-800 rounded-2xl cursor-pointer hover:border-blue-500/30 transition-all flex items-center gap-4 group">
                                <input type="checkbox" data-val="150" onchange="runWebCost()" class="w-5 h-5 accent-blue-600">
                                <div class="flex flex-col">
                                    <span class="text-sm font-black">Basic SEO</span>
                                    <span class="text-[8px] text-gray-400 uppercase tracking-widest font-bold">Metadata & Optimization</span>
                                </div>
                            </label>
                            <label class="p-5 border-2 border-gray-100 dark:border-gray-800 rounded-2xl cursor-pointer hover:border-blue-500/30 transition-all flex items-center gap-4 group">
                                <input type="checkbox" data-val="400" onchange="runWebCost()" class="w-5 h-5 accent-blue-600">
                                <div class="flex flex-col">
                                    <span class="text-sm font-black">E-Commerce</span>
                                    <span class="text-[8px] text-gray-400 uppercase tracking-widest font-bold">Shop & Payments</span>
                                </div>
                            </label>
                            <label class="p-5 border-2 border-gray-100 dark:border-gray-800 rounded-2xl cursor-pointer hover:border-blue-500/30 transition-all flex items-center gap-4 group">
                                <input type="checkbox" data-val="250" onchange="runWebCost()" class="w-5 h-5 accent-blue-600">
                                <div class="flex flex-col">
                                    <span class="text-sm font-black">Admin CMS</span>
                                    <span class="text-[8px] text-gray-400 uppercase tracking-widest font-bold">Content Management</span>
                                </div>
                            </label>
                            <label class="p-5 border-2 border-gray-100 dark:border-gray-800 rounded-2xl cursor-pointer hover:border-blue-500/30 transition-all flex items-center gap-4 group">
                                <input type="checkbox" data-val="300" onchange="runWebCost()" class="w-5 h-5 accent-blue-600">
                                <div class="flex flex-col">
                                    <span class="text-sm font-black">User Auth</span>
                                    <span class="text-[8px] text-gray-400 uppercase tracking-widest font-bold">Logins & Database</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="p-10 bg-gray-900 text-white rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                        <span class="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-4 block">Estimated Market Quote</span>
                        <div class="text-6xl font-black mb-2" id="web-total">${cur}0</div>
                        <p class="text-[10px] font-black text-blue-400 uppercase tracking-widest">Base Rate: ${cur}500 Applied</p>
                    </div>
                </div>
            `;
            lucide.createIcons();
            break;

        case 'freelancer-earning':
            c.innerHTML = `
                <div class="space-y-10">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="space-y-3">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Hourly Rate (${cur})</label>
                            <input type="number" id="fr-rate" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none" value="45" oninput="runFreelanceCalc()">
                        </div>
                        <div class="space-y-3">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Weekly Hours</label>
                            <input type="number" id="fr-hours" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none" value="35" oninput="runFreelanceCalc()">
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div class="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-[2.5rem] border dark:border-blue-900/20 text-center">
                            <span class="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-4">Monthly Income</span>
                            <div id="fr-month" class="text-4xl font-black text-blue-600">${cur}0</div>
                         </div>
                         <div class="p-8 bg-gray-900 text-white rounded-[2.5rem] text-center shadow-xl">
                            <span class="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-4 text-blue-400">Annual Projection</span>
                            <div id="fr-year" class="text-4xl font-black">${cur}0</div>
                         </div>
                    </div>
                </div>
            `;
            runFreelanceCalc();
            lucide.createIcons();
            break;

        case 'domain-estimator':
            c.innerHTML = `
                <div class="space-y-8">
                    <div class="space-y-4">
                        <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Enter Domain Identity</label>
                        <div class="flex gap-4">
                            <input type="text" id="dom-in" class="flex-grow p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-black outline-none focus:ring-4 focus:ring-blue-500/10 transition-all uppercase placeholder:normal-case" placeholder="example.com">
                            <button onclick="runDomEst()" class="px-8 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-blue-500/20 active:scale-95 transition-all">Evaluate</button>
                        </div>
                    </div>
                    <div id="dom-box" class="hidden animate-fade-in space-y-6">
                        <div class="p-10 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] border dark:border-gray-800 text-center">
                             <span class="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-4 block">Estimated Market Value</span>
                             <div id="dom-val" class="text-5xl font-black text-blue-600 mb-6"></div>
                             <div class="grid grid-cols-2 gap-4">
                                <div class="px-4 py-2 bg-white dark:bg-gray-800 rounded-xl text-[10px] font-black uppercase tracking-widest border dark:border-gray-700" id="dom-len">Length: 0</div>
                                <div class="px-4 py-2 bg-white dark:bg-gray-800 rounded-xl text-[10px] font-black uppercase tracking-widest border dark:border-gray-700" id="dom-tld">TLD: Premium</div>
                             </div>
                        </div>
                    </div>
                </div>
            `;
            lucide.createIcons();
            break;

        case 'crypto-profit':
             c.innerHTML = `
                <div class="space-y-10">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="space-y-3">
                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center block">Capital In</label>
                            <input type="number" id="cry-in" class="w-full p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none" value="1000" oninput="runCryCalc()">
                        </div>
                        <div class="space-y-3">
                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center block">Entry Price</label>
                            <input type="number" id="cry-buy" class="w-full p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none" value="45000" oninput="runCryCalc()">
                        </div>
                        <div class="space-y-3">
                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center block">Exit Price</label>
                            <input type="number" id="cry-sell" class="w-full p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none" value="52000" oninput="runCryCalc()">
                        </div>
                    </div>
                    <div id="cry-res" class="p-10 bg-gray-900 text-white rounded-[2.5rem] text-center shadow-2xl space-y-6">
                        <div>
                             <span class="text-[8px] font-black text-gray-500 uppercase tracking-[0.4em] mb-2 block text-blue-400">Net Return</span>
                             <div id="cry-profit" class="text-5xl font-black">$0</div>
                        </div>
                        <div class="flex justify-center gap-10">
                             <div class="text-center">
                                <span class="text-[8px] font-black text-gray-500 uppercase tracking-widest block mb-1">Percentage</span>
                                <span id="cry-perc" class="text-lg font-black text-green-400">+0%</span>
                             </div>
                             <div class="text-center">
                                <span class="text-[8px] font-black text-gray-500 uppercase tracking-widest block mb-1">Total Balance</span>
                                <span id="cry-bal" class="text-lg font-black">$0</span>
                             </div>
                        </div>
                    </div>
                </div>
             `;
             runCryCalc();
             lucide.createIcons();
             break;

        case 'roi-calculator':
             c.innerHTML = `
                <div class="space-y-10">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="space-y-3">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Ad Spend (${cur})</label>
                            <input type="number" id="roi-s" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none transition-all" value="5000" oninput="runROICalc()">
                        </div>
                        <div class="space-y-3">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Total Revenue (${cur})</label>
                            <input type="number" id="roi-r" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none transition-all" value="12000" oninput="runROICalc()">
                        </div>
                    </div>
                    <div class="p-10 bg-blue-600 text-white rounded-[2.5rem] text-center shadow-2xl">
                         <span class="text-[10px] font-black text-blue-200 uppercase tracking-[0.4em] mb-4 block">Marketing Efficiency Factor</span>
                         <div id="roi-out" class="text-6xl font-black mb-4">140%</div>
                         <div class="h-1 w-full bg-blue-800 rounded-full overflow-hidden mb-8">
                            <div id="roi-bar" class="h-full bg-white shadow-[0_0_15px_white]" style="width: 70%"></div>
                         </div>
                         <div class="grid grid-cols-2 gap-4">
                            <div class="text-center">
                                <span class="text-[8px] font-black text-blue-200 uppercase tracking-widest block mb-1">Net Profit</span>
                                <span id="roi-p" class="text-xl font-black text-white">${cur}</span>
                            </div>
                            <div class="text-center">
                                <span class="text-[8px] font-black text-blue-200 uppercase tracking-widest block mb-1">ROAS</span>
                                <span id="roi-a" class="text-xl font-black text-white">2.4x</span>
                            </div>
                         </div>
                    </div>
                </div>
             `;
             runROICalc();
             lucide.createIcons();
             break;

        case 'insurance-estimator':
            c.innerHTML = `
                <div class="space-y-10">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="space-y-3">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Plan Type</label>
                            <select id="ins-type" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none" onchange="runInsCalc()">
                                <option value="term">Term Life Insurance</option>
                                <option value="health">Health Insurance</option>
                                <option value="accident">Accident Cover</option>
                            </select>
                        </div>
                        <div class="space-y-3">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Your Age</label>
                            <input type="number" id="ins-age" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none" value="25" oninput="runInsCalc()">
                        </div>
                        <div class="space-y-3">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Coverage Amount (${cur})</label>
                            <input type="number" id="ins-cov" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none" value="1000000" oninput="runInsCalc()">
                        </div>
                        <div class="space-y-3">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Tobacco User?</label>
                            <div class="flex bg-gray-50 dark:bg-gray-900 p-2 rounded-2xl border dark:border-gray-700">
                                <button onclick="setInsTobacco(false)" id="ins-t-no" class="flex-grow py-3 rounded-xl text-[10px] font-black uppercase transition-all bg-blue-600 text-white shadow-lg">No</button>
                                <button onclick="setInsTobacco(true)" id="ins-t-yes" class="flex-grow py-3 rounded-xl text-[10px] font-black uppercase transition-all text-gray-400 hover:text-gray-900 dark:hover:text-white">Yes</button>
                            </div>
                        </div>
                    </div>
                    <div class="p-10 bg-blue-600 text-white rounded-[2.5rem] text-center shadow-2xl space-y-4">
                         <span class="text-[10px] font-black text-blue-200 uppercase tracking-[0.4em] block">Estimated Monthly Premium</span>
                         <div id="ins-out" class="text-6xl font-black">${cur}0</div>
                         <p class="text-[8px] font-bold text-blue-300 uppercase tracking-widest">Indicative quote based on global averages</p>
                    </div>
                </div>
            `;
            runInsCalc();
            lucide.createIcons();
            break;

        case 'username-generator':
             c.innerHTML = `
                <div class="space-y-10">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="space-y-6">
                            <div class="space-y-3">
                                <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Identity Keyword</label>
                                <input type="text" id="un-in" class="w-full p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-black outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="e.g. Neo, Alex, Spark...">
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Style Preset</label>
                                    <select id="un-style" class="w-full p-4 bg-white dark:bg-gray-800 rounded-xl text-xs font-bold border dark:border-gray-700 outline-none">
                                        <option value="modern">Modern / Clean</option>
                                        <option value="hype">Hype / Street</option>
                                        <option value="og">OG / Original</option>
                                        <option value="pro">Professional</option>
                                    </select>
                                </div>
                                <div class="space-y-2">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Separator</label>
                                    <select id="un-sep" class="w-full p-4 bg-white dark:bg-gray-800 rounded-xl text-xs font-bold border dark:border-gray-700 outline-none">
                                        <option value="">None</option>
                                        <option value=".">Dot (.)</option>
                                        <option value="_">Under (_)</option>
                                        <option value="-">Dash (-)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <div class="space-y-6">
                            <div class="space-y-3">
                                <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Custom Modifier</label>
                                <input type="text" id="un-mod" class="w-full p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold text-sm outline-none" placeholder="e.g. Official, HQ, Pro...">
                            </div>
                            <button onclick="runUserGen()" class="w-full py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-3xl font-black shadow-2xl active:scale-[0.98] transition-all uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-2">
                                <i data-lucide="sparkles" class="w-4 h-4"></i> Forge Identity Handles
                            </button>
                        </div>
                    </div>
                    
                    <div id="un-grid" class="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in"></div>
                </div>
             `;
             lucide.createIcons();
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
                <div class="space-y-10">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="space-y-6">
                            <div class="space-y-3">
                                <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Post Topic / Scene</label>
                                <input type="text" id="cap-in" class="w-full p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-medium" placeholder="Travel, Coffee, Sunset, Gym...">
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Aesthetic Vibe</label>
                                    <select id="cap-vibe" class="w-full p-4 bg-white dark:bg-gray-800 rounded-xl text-xs font-bold border dark:border-gray-700 outline-none">
                                        <option value="aesthetic">Minimal Aesthetic</option>
                                        <option value="hype">Hype / Bold</option>
                                        <option value="deep">Deep / Meaningful</option>
                                        <option value="pro">Brand / Professional</option>
                                    </select>
                                </div>
                                <div class="space-y-2">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Emoji Load</label>
                                    <select id="cap-emoji" class="w-full p-4 bg-white dark:bg-gray-800 rounded-xl text-xs font-bold border dark:border-gray-700 outline-none">
                                        <option value="none">None</option>
                                        <option value="min">Minimal (1-2)</option>
                                        <option value="heavy">Heavy (4+)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col justify-end gap-6">
                            <div class="space-y-2">
                                <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Hashtag Blueprint</label>
                                <select id="cap-hash" class="w-full p-4 bg-white dark:bg-gray-800 rounded-xl text-xs font-bold border dark:border-gray-700 outline-none">
                                    <option value="0">Zero Hashtags</option>
                                    <option value="3">Minimal (3)</option>
                                    <option value="10">Trending (10)</option>
                                    <option value="max">Niche Targeted (30)</option>
                                </select>
                            </div>
                            <button onclick="runCaptionGen()" class="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] font-black shadow-2xl shadow-blue-600/30 active:scale-[0.98] transition-all uppercase tracking-widest text-[10px] flex items-center justify-center gap-2">
                                <i data-lucide="sparkles" class="w-4 h-4 text-blue-200"></i> Generate Social Scripts
                            </button>
                        </div>
                    </div>
                    <div id="cap-list" class="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in"></div>
                </div>
            `;
            lucide.createIcons();
            break;
        
        case 'image-compressor':
             c.innerHTML = `
                <div class="space-y-8">
                    <div id="comp-upload" class="w-full h-48 border-4 border-dashed border-gray-100 dark:border-gray-800 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center group hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-all cursor-pointer relative" onclick="document.getElementById('file-in').click()">
                        <i data-lucide="upload-cloud" class="w-12 h-12 text-gray-300 group-hover:text-blue-500 mb-4 transition-transform group-hover:-translate-y-2"></i>
                        <p class="text-sm font-bold text-gray-400 group-hover:text-gray-600">Select Image to Begin Compression</p>
                        <p class="text-[10px] text-gray-300 dark:text-gray-600 mt-2 font-bold uppercase tracking-widest">Supports JPG, PNG, WEBP</p>
                        <input type="file" id="file-in" class="hidden" accept="image/*" onchange="handleImageInput(this)">
                    </div>

                    <div id="comp-controls" class="hidden space-y-10 animate-fade-in">
                        <div class="flex items-center justify-between">
                            <h3 class="text-xs font-black text-blue-600 uppercase tracking-[0.2em]">Manual Compression Options</h3>
                            <button onclick="location.reload()" class="text-[10px] font-black text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest flex items-center gap-2">
                                <i data-lucide="refresh-cw" class="w-3 h-3"></i> Change Image
                            </button>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div class="space-y-8">
                                <div class="space-y-4">
                                    <div class="flex justify-between items-center">
                                        <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Visual Quality</label>
                                        <span id="qual-val" class="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-lg text-[10px] font-black">80%</span>
                                    </div>
                                    <input type="range" id="comp-quality" min="1" max="100" value="80" class="w-full" oninput="document.getElementById('qual-val').innerText = this.value + '%'">
                                    <div class="flex justify-between text-[10px] font-bold text-gray-300 dark:text-gray-600 uppercase tracking-tighter">
                                        <span>Max Compression</span>
                                        <span>High Fidelity</span>
                                    </div>
                                </div>
                                <div class="space-y-4">
                                    <div class="flex justify-between items-center">
                                        <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Dimension Scale</label>
                                        <span id="scale-val" class="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-lg text-[10px] font-black">100%</span>
                                    </div>
                                    <input type="range" id="comp-scale" min="10" max="100" value="100" class="w-full" oninput="document.getElementById('scale-val').innerText = this.value + '%'">
                                    <div class="flex justify-between text-[10px] font-bold text-gray-300 dark:text-gray-600 uppercase tracking-tighter">
                                        <span>Small Area</span>
                                        <span>Full Resolution</span>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-8">
                                <div class="space-y-4">
                                    <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Format Conversion</label>
                                    <select id="comp-format" class="w-full p-4 bg-gray-50 dark:bg-gray-900 border-2 border-transparent dark:border-gray-800 rounded-2xl font-bold outline-none focus:border-blue-500/20 focus:ring-4 focus:ring-blue-500/5 transition-all text-sm">
                                        <option value="original">Keep Original Format</option>
                                        <option value="image/jpeg">Convert to JPEG (Ideal for Photos)</option>
                                        <option value="image/webp">Convert to WEBP (Best for Performance)</option>
                                        <option value="image/png">Convert to PNG (Lossless/Icons)</option>
                                    </select>
                                </div>
                                <div class="space-y-4">
                                    <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Advanced Customization</label>
                                    <div class="grid grid-cols-2 gap-4">
                                        <label class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl cursor-pointer group">
                                            <span class="text-[10px] font-black text-gray-500 group-hover:text-blue-600 transition-colors uppercase tracking-widest">Grayscale</span>
                                            <input type="checkbox" id="comp-gray" class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                                        </label>
                                        <label class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl cursor-pointer group">
                                            <span class="text-[10px] font-black text-gray-500 group-hover:text-blue-600 transition-colors uppercase tracking-widest">Strip EXIF</span>
                                            <input type="checkbox" id="comp-strip" checked class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                                        </label>
                                    </div>
                                    <div class="px-6 py-4 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-between group">
                                        <div class="flex flex-col">
                                            <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Display Metric</span>
                                            <span class="text-[9px] font-bold text-gray-400 lowercase">Choose KB or MB for results</span>
                                        </div>
                                        <div class="flex gap-1 bg-white dark:bg-gray-900 p-1 rounded-xl shadow-sm border dark:border-gray-700">
                                            <button onclick="changeCompUnit('KB')" id="unit-kb" class="px-4 py-1.5 text-[10px] font-black rounded-lg transition-all bg-blue-600 text-white shadow-sm">KB</button>
                                            <button onclick="changeCompUnit('MB')" id="unit-mb" class="px-4 py-1.5 text-[10px] font-black rounded-lg transition-all text-gray-400 hover:text-gray-600">MB</button>
                                        </div>
                                    </div>
                                </div>
                                <div id="img-preview-box" class="p-4 border-2 border-dashed border-gray-100 dark:border-gray-800 rounded-[2rem] bg-gray-50/50 dark:bg-gray-900/50 relative aspect-video flex items-center justify-center overflow-hidden">
                                    <img id="img-preview" class="max-w-full max-h-full object-contain rounded-xl shadow-2xl transition-transform hover:scale-105 duration-700">
                                    <div class="absolute inset-x-0 bottom-0 p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-center">
                                        <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Live Metadata Preview</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button onclick="runManualCompress()" class="group relative w-full py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] font-black shadow-2xl shadow-blue-600/30 active:scale-[0.98] transition-all uppercase tracking-[0.2em] text-xs overflow-hidden">
                            <span class="relative z-10">Start Manual Processing</span>
                            <div class="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </button>
                    </div>

                    <div id="file-box" class="hidden animate-fade-in space-y-6">
                         <div class="flex justify-between items-end mb-2">
                            <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Processing Bitstream...</span>
                            <span id="prog-val" class="text-[10px] font-black text-blue-600">0%</span>
                         </div>
                         <div class="w-full bg-gray-100 dark:bg-gray-800 h-3 rounded-full overflow-hidden">
                             <div id="file-prog" class="w-0 h-full bg-blue-600 transition-all duration-700 ease-out"></div>
                         </div>
                         <div id="comp-res-box" class="hidden p-8 bg-green-50 dark:bg-green-900/10 border-2 border-green-100 dark:border-green-800/20 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6 animate-slide-up">
                             <div class="flex flex-col items-center md:items-start">
                                <div class="flex items-center gap-2 mb-1">
                                    <i data-lucide="check-circle-2" class="w-4 h-4 text-green-600"></i>
                                    <span class="font-black text-green-600 uppercase tracking-widest text-xs">Ready for Distribution</span>
                                </div>
                                <span class="text-sm font-bold text-gray-900 dark:text-gray-100" id="comp-saved">Saved 45% (850KB → 460KB)</span>
                             </div>
                             <button class="w-full md:w-auto px-10 py-4 bg-green-600 text-white rounded-2xl text-xs font-black shadow-xl shadow-green-500/30 hover:bg-green-700 transition-all uppercase tracking-widest">Download Now</button>
                         </div>
                    </div>
                </div>
             `;
             lucide.createIcons();
             break;

        case 'unit-converter':
            c.innerHTML = `
                <div class="space-y-10">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div class="space-y-8">
                            <div class="space-y-4">
                                <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Source Magnitude</label>
                                <input type="number" id="uc-in" oninput="runUnitConv()" class="w-full p-6 bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-blue-500/20 rounded-[2rem] font-black text-2xl outline-none focus:ring-4 focus:ring-blue-500/5 transition-all" placeholder="100">
                            </div>
                            <div class="space-y-4">
                                <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Output Customization</label>
                                <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-[2rem] space-y-6">
                                    <div class="flex items-center justify-between">
                                        <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Precision Decimals</span>
                                        <div class="flex items-center gap-3">
                                            <button onclick="adjustUCPrec(-1)" class="w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 hover:bg-blue-50 transition-colors">-</button>
                                            <span id="uc-dec-v" class="w-6 text-center font-black text-blue-600">2</span>
                                            <button onclick="adjustUCPrec(1)" class="w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 hover:bg-blue-50 transition-colors">+</button>
                                        </div>
                                    </div>
                                    <label class="flex items-center justify-between cursor-pointer group">
                                        <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors">Scientific Notation</span>
                                        <input type="checkbox" id="uc-sci" onchange="runUnitConv()" class="w-4 h-4 rounded border-gray-300 text-blue-600">
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        <div class="space-y-8">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="space-y-3">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Base</label>
                                    <select id="uc-f" onchange="runUnitConv()" class="w-full p-4 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none text-sm"></select>
                                </div>
                                <div class="space-y-3">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Target</label>
                                    <select id="uc-t" onchange="runUnitConv()" class="w-full p-4 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none text-sm"></select>
                                </div>
                            </div>
                            
                            <div class="tool-result flex flex-col items-center justify-center py-10 bg-blue-600 text-white rounded-[2.5rem] shadow-2xl shadow-blue-600/30 overflow-hidden relative group">
                                <div class="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                <span class="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-60">Resultant Value</span>
                                <div class="flex flex-col items-center gap-1">
                                    <div class="text-5xl font-black tracking-tighter" id="uc-out">0.00</div>
                                    <div id="uc-unit-name" class="text-[10px] font-black uppercase tracking-widest opacity-40">---</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            initUnitConv();
            lucide.createIcons();
            break;

        case 'pdf-merger':
             c.innerHTML = `
                <div class="space-y-10">
                    <div id="comp-upload" class="w-full h-48 border-4 border-dashed border-gray-100 dark:border-gray-800 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center group hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-all cursor-pointer relative" onclick="document.getElementById('file-in').click()">
                        <i data-lucide="file-stack" class="w-12 h-12 text-gray-300 group-hover:text-blue-500 mb-4 transition-transform group-hover:-translate-y-2"></i>
                        <p class="text-sm font-bold text-gray-400 group-hover:text-gray-600">Select PDF Files for Merger</p>
                        <p class="text-[10px] text-gray-300 dark:text-gray-600 mt-2 font-bold uppercase tracking-widest">Process entirely in RAM (Privacy Secure)</p>
                        <input type="file" id="file-in" class="hidden" accept="application/pdf" multiple onchange="handlePDFInput(this)">
                    </div>

                    <div id="pdf-controls" class="hidden animate-fade-in space-y-10">
                        <div class="flex items-center justify-between">
                            <h3 id="pdf-count" class="text-xs font-black text-blue-600 uppercase tracking-[0.2em]">0 Files Documented</h3>
                            <button onclick="location.reload()" class="text-[10px] font-black text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest flex items-center gap-2">
                                <i data-lucide="refresh-cw" class="w-3 h-3"></i> Clear Workspace
                            </button>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <div class="space-y-3">
                                <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Output Filename</label>
                                <input type="text" id="pdf-name" class="w-full p-4 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none" value="Merged_Document">
                             </div>
                             <div class="space-y-3">
                                <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Optimization Strategy</label>
                                <select id="pdf-opt" class="w-full p-4 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none text-sm">
                                    <option value="hq">Preserve Original Vector Quality</option>
                                    <option value="web">Web Optimized (Compressed)</option>
                                    <option value="grayscale">Ink-Saver Grayscale</option>
                                </select>
                             </div>
                        </div>

                        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border dark:border-gray-800 space-y-6">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Document Flow Options</label>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <label class="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-2xl cursor-pointer group hover:border-blue-500 border border-transparent transition-all">
                                    <span class="text-[10px] font-black text-gray-500 group-hover:text-blue-600 uppercase tracking-widest">Insert Blank Separation</span>
                                    <input type="checkbox" id="pdf-blank" class="w-4 h-4 rounded text-blue-600">
                                </label>
                                <label class="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-2xl cursor-pointer group hover:border-blue-500 border border-transparent transition-all">
                                    <span class="text-[10px] font-black text-gray-500 group-hover:text-blue-600 uppercase tracking-widest">Generate Table of Contents</span>
                                    <input type="checkbox" id="pdf-toc" class="w-4 h-4 rounded text-blue-600">
                                </label>
                            </div>
                        </div>

                        <button onclick="runFileSim()" class="w-full py-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-[2rem] font-black shadow-2xl active:scale-[0.98] transition-all uppercase tracking-[0.2em] text-xs">
                           Merge Digital Assets
                        </button>
                    </div>

                    <div id="file-box" class="hidden animate-fade-in space-y-6">
                         <div class="w-full bg-gray-100 dark:bg-gray-800 h-3 rounded-full overflow-hidden">
                             <div id="file-prog" class="w-0 h-full bg-blue-600 transition-all duration-1000"></div>
                         </div>
                         <div id="pdf-res" class="hidden p-8 bg-green-50 dark:bg-green-900/10 border-2 border-green-100 dark:border-green-800/20 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6 animate-slide-up">
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                                    <i data-lucide="check-check"></i>
                                </div>
                                <div>
                                    <div class="font-black text-gray-900 dark:text-white uppercase text-[10px] tracking-widest mb-1">Synthesized Successfully</div>
                                    <div id="pdf-final-name" class="text-sm font-bold text-gray-500">Document_Final.pdf</div>
                                </div>
                            </div>
                            <button class="w-full md:w-auto px-10 py-4 bg-green-600 text-white rounded-2xl text-xs font-black shadow-xl hover:bg-green-700 transition-all uppercase tracking-widest">Retrieve Artifact</button>
                         </div>
                    </div>
                </div>
             `;
             lucide.createIcons();
             break;

        case 'pdf-splitter':
             c.innerHTML = `
                <div class="space-y-10">
                    <div id="comp-upload" class="w-full h-48 border-4 border-dashed border-gray-100 dark:border-gray-800 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center group hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-all cursor-pointer relative" onclick="document.getElementById('file-in').click()">
                        <i data-lucide="scissors" class="w-12 h-12 text-gray-300 group-hover:text-blue-500 mb-4 transition-transform group-hover:-translate-y-2"></i>
                        <p class="text-sm font-bold text-gray-400 group-hover:text-gray-600">Select PDF Source for Extraction</p>
                        <p class="text-[10px] text-gray-300 dark:text-gray-600 mt-2 font-bold uppercase tracking-widest">Supports files up to 500MB</p>
                        <input type="file" id="file-in" class="hidden" accept="application/pdf" onchange="handlePDFSplitInput(this)">
                    </div>

                    <div id="pdf-split-controls" class="hidden animate-fade-in space-y-10">
                        <div class="flex items-center justify-between">
                            <h3 class="text-xs font-black text-blue-600 uppercase tracking-[0.2em]">Surgical Extraction Setup</h3>
                            <button onclick="location.reload()" class="text-[10px] font-black text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest flex items-center gap-2">
                                <i data-lucide="refresh-cw" class="w-3 h-3"></i> Switch Document
                            </button>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <div class="space-y-3">
                                <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Extraction Mode</label>
                                <select id="pdf-split-mode" onchange="document.getElementById('pdf-range-box').style.opacity = this.value === 'all' ? '0.3' : '1'; document.getElementById('pdf-range').disabled = this.value === 'all'" class="w-full p-4 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none text-sm">
                                    <option value="range">Specific Range (e.g. 1-5)</option>
                                    <option value="individual">Individual Pages (e.g. 2,4,9)</option>
                                    <option value="all">Deconstruct (Every page separate)</option>
                                </select>
                             </div>
                             <div class="space-y-3" id="pdf-range-box">
                                <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Target Pages</label>
                                <input type="text" id="pdf-range" class="w-full p-4 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none" placeholder="1-5 or 2,5,8">
                             </div>
                        </div>

                        <button onclick="runFileSim()" class="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] font-black shadow-2xl shadow-blue-600/30 active:scale-[0.98] transition-all uppercase tracking-[0.2em] text-xs">
                           Execute Precision Split
                        </button>
                    </div>

                    <div id="file-box" class="hidden animate-fade-in space-y-6">
                         <div class="w-full bg-gray-100 dark:bg-gray-800 h-3 rounded-full overflow-hidden">
                             <div id="file-prog" class="w-0 h-full bg-blue-600 transition-all duration-1000"></div>
                         </div>
                         <div id="pdf-split-res" class="hidden p-8 bg-blue-50 dark:bg-blue-900/10 border-2 border-blue-100 dark:border-blue-900/20 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 text-center animate-slide-up">
                            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-2">
                                <i data-lucide="layers"></i>
                            </div>
                            <div class="font-black text-gray-900 dark:text-white uppercase text-xs tracking-widest">Extraction Vector Ready</div>
                            <p class="text-xs text-gray-500 font-bold">Successfully isolated 12 individual document segments.</p>
                            <button class="w-full mt-4 py-4 bg-blue-600 text-white rounded-2xl text-xs font-black shadow-xl hover:bg-blue-700 transition-all uppercase tracking-widest">Download ZIP Archive</button>
                         </div>
                    </div>
                </div>
             `;
             lucide.createIcons();
             break;

        case 'image-resizer':
             c.innerHTML = `
                <div class="space-y-10">
                    <div id="comp-upload" class="w-full h-48 border-4 border-dashed border-gray-100 dark:border-gray-800 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center group hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-all cursor-pointer relative" onclick="document.getElementById('file-in').click()">
                        <i data-lucide="maximize" class="w-12 h-12 text-gray-300 group-hover:text-blue-500 mb-4 transition-transform group-hover:scale-110"></i>
                        <p class="text-sm font-bold text-gray-400 group-hover:text-gray-600">Select Image to Resize</p>
                        <input type="file" id="file-in" class="hidden" accept="image/*" onchange="handleResizerInput(this)">
                    </div>

                    <div id="resizer-controls" class="hidden animate-fade-in space-y-10">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <div class="space-y-6">
                                <div class="grid grid-cols-2 gap-4">
                                    <div class="space-y-2">
                                        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Width (px)</label>
                                        <input type="number" id="res-w" class="w-full p-4 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none" value="1920">
                                    </div>
                                    <div class="space-y-2">
                                        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Height (px)</label>
                                        <input type="number" id="res-h" class="w-full p-4 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none" value="1080">
                                    </div>
                                </div>
                                <label class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl cursor-pointer group">
                                    <span class="text-[10px] font-black text-gray-500 group-hover:text-blue-600 uppercase tracking-widest">Maintain Aspect Ratio</span>
                                    <input type="checkbox" id="res-aspect" checked class="w-4 h-4 rounded text-blue-600 border-gray-300">
                                </label>
                             </div>
                             <div class="space-y-6">
                                <div class="space-y-2">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Export Format</label>
                                    <select id="res-format" class="w-full p-4 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none text-xs">
                                        <option value="image/png">PNG (Lossless / Transparent)</option>
                                        <option value="image/jpeg">JPEG (High Quality Compression)</option>
                                        <option value="image/webp">WEBP (Modern Web Format)</option>
                                    </select>
                                </div>
                                <button onclick="runFileSim()" class="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black shadow-2xl shadow-blue-600/30 transition-all uppercase tracking-widest text-[10px]">
                                    Process Transformation
                                </button>
                             </div>
                        </div>
                    </div>

                    <div id="file-box" class="hidden animate-fade-in space-y-6">
                         <div class="w-full bg-gray-100 dark:bg-gray-800 h-3 rounded-full overflow-hidden">
                             <div id="file-prog" class="w-0 h-full bg-blue-600 transition-all duration-1000"></div>
                         </div>
                         <div id="res-out-box" class="hidden p-8 bg-green-50 dark:bg-green-900/10 border-2 border-green-100 dark:border-green-800/20 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 text-center animate-slide-up">
                            <i data-lucide="image" class="w-10 h-10 text-green-600 mb-2"></i>
                            <div class="font-black text-gray-900 dark:text-white uppercase text-[10px] tracking-widest">Dimensions Optimized</div>
                            <button class="w-full mt-2 py-4 bg-green-600 text-white rounded-2xl text-xs font-black shadow-xl hover:bg-green-700 transition-all uppercase tracking-widest">Download Asset</button>
                         </div>
                    </div>
                </div>
             `;
             lucide.createIcons();
             break;

        case 'case-converter':
             c.innerHTML = `
                <div class="space-y-6">
                    <textarea id="case-in" class="w-full h-64 p-8 bg-gray-50 dark:bg-gray-900 border rounded-[2rem] dark:border-gray-700 outline-none focus:ring-4 focus:ring-blue-500/5 font-medium leading-relaxed shadow-inner placeholder:text-gray-300" placeholder="Type or paste your text for character transformation..."></textarea>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <button onclick="runCaseConv('upper')" class="py-4 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-50 transition-colors">UPPERCASE</button>
                        <button onclick="runCaseConv('lower')" class="py-4 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-50 transition-colors">lowercase</button>
                        <button onclick="runCaseConv('title')" class="py-4 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-50 transition-colors">Title Case</button>
                        <button onclick="runCaseConv('sentence')" class="py-4 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-50 transition-colors">Sentence Case</button>
                    </div>
                </div>
             `;
             break;

        case 'text-to-speech':
             c.innerHTML = `
                <div class="space-y-10">
                    <textarea id="tts-in" class="w-full h-48 p-8 bg-gray-50 dark:bg-gray-900 border rounded-[2.5rem] dark:border-gray-700 outline-none font-medium leading-relaxed" placeholder="Enter text to synthesize..."></textarea>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="space-y-4">
                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Select Voice Actor</label>
                            <select id="tts-voice" class="w-full p-4 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none text-xs"></select>
                        </div>
                        <div class="flex items-end gap-4">
                            <button onclick="runTTS()" class="flex-grow py-5 bg-blue-600 text-white rounded-2xl font-black shadow-xl flex items-center justify-center gap-3 uppercase tracking-widest text-[10px]">
                                <i data-lucide="volume-2"></i> Initialise Synthesis
                            </button>
                            <button onclick="stopTTS()" class="px-6 py-5 bg-gray-100 dark:bg-gray-800 rounded-2xl font-black text-gray-500"><i data-lucide="square"></i></button>
                        </div>
                    </div>
                </div>
             `;
             initTTSVoices();
             lucide.createIcons();
             break;

        case 'speech-to-text':
             c.innerHTML = `
                <div class="space-y-10 text-center py-10">
                    <div id="stt-active" class="hidden mb-10">
                        <div class="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto animate-pulse">
                            <div class="w-8 h-8 bg-red-600 rounded-full"></div>
                        </div>
                        <p class="mt-4 text-xs font-black text-red-600 uppercase tracking-widest">Listening to Audio Stream...</p>
                    </div>
                    <div id="stt-idle" class="mb-10">
                        <div class="w-24 h-24 bg-blue-50 dark:bg-blue-900/10 rounded-full flex items-center justify-center mx-auto">
                            <i data-lucide="mic" class="w-8 h-8 text-blue-600"></i>
                        </div>
                        <p class="mt-4 text-xs font-black text-gray-400 uppercase tracking-widest">Mic Ready for Input</p>
                    </div>
                    <textarea id="stt-out" class="w-full h-48 p-8 bg-gray-50 dark:bg-gray-900 border rounded-[2.5rem] dark:border-gray-700 outline-none font-medium leading-relaxed font-mono text-sm" placeholder="Transcribed text will appear here..."></textarea>
                    <button onclick="toggleSTT()" id="stt-btn" class="w-full py-6 bg-blue-600 text-white rounded-[2rem] font-black shadow-2xl flex items-center justify-center gap-3 uppercase tracking-widest text-[10px]">
                        Start Dictation
                    </button>
                </div>
             `;
             lucide.createIcons();
             break;

        case 'color-picker':
             c.innerHTML = `
                <div class="space-y-12">
                    <div class="flex flex-col md:flex-row gap-12 items-start justify-center">
                        <div class="relative group mx-auto">
                            <input type="color" id="cp-in" oninput="runColorPicker()" class="w-56 h-56 rounded-full border-[10px] border-white dark:border-gray-800 shadow-2xl cursor-pointer bg-transparent transition-transform hover:scale-105 active:scale-95">
                            <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                                <span class="bg-black/70 backdrop-blur-md text-white px-4 py-2 rounded-2xl text-[9px] font-black uppercase tracking-widest border border-white/10">Base Frequency</span>
                            </div>
                        </div>
                        
                        <div class="space-y-6 flex-grow max-w-sm w-full">
                            <div class="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border dark:border-gray-800 space-y-6 shadow-inner">
                                <div class="flex items-center justify-between group">
                                    <span onclick="copyToClipboard(document.getElementById('cp-hex').innerText, 'Hex Signature')" class="text-[10px] font-mono font-black text-gray-400 uppercase tracking-widest group-hover:text-blue-500 transition-colors cursor-help" title="HEX: Six-digit alphanumeric code representing color frequencies. Click to copy.">HEX Spectrum</span>
                                    <div class="flex items-center gap-3">
                                        <span id="cp-hex" class="font-mono font-black text-xl text-blue-600">#000000</span>
                                        <button onclick="copyToClipboard(document.getElementById('cp-hex').innerText, 'Hex Signature')" class="text-gray-300 hover:text-blue-500 transition-colors p-1">
                                            <i data-lucide="copy" class="w-4 h-4"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="h-px bg-gray-200 dark:bg-gray-800 opacity-50"></div>
                                <div class="flex items-center justify-between group">
                                    <span onclick="copyToClipboard(document.getElementById('cp-rgb').innerText, 'RGB Matrix')" class="text-[10px] font-mono font-black text-gray-400 uppercase tracking-widest group-hover:text-blue-500 transition-colors cursor-help" title="RGB: Values 0-255 for Red, Green, and Blue. Click to copy.">RGB Matrix</span>
                                    <div class="flex items-center gap-3">
                                        <span id="cp-rgb" class="font-mono font-black text-gray-500">rgb(0, 0, 0)</span>
                                        <button onclick="copyToClipboard(document.getElementById('cp-rgb').innerText, 'RGB Matrix')" class="text-gray-300 hover:text-blue-500 transition-colors p-1">
                                            <i data-lucide="copy" class="w-4 h-4"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="h-px bg-gray-200 dark:bg-gray-800 opacity-50"></div>
                                <div class="flex items-center justify-between group">
                                    <span onclick="copyToClipboard(document.getElementById('cp-hsl').innerText, 'HSL Gradient')" class="text-[10px] font-mono font-black text-gray-400 uppercase tracking-widest group-hover:text-blue-500 transition-colors cursor-help" title="HSL: Representation in degrees and percentages. Click to copy.">HSL Gradient</span>
                                    <span id="cp-hsl" class="font-mono font-black text-gray-500">hsl(0, 0%, 0%)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-8">
                        <div>
                            <div class="flex items-center gap-4 mb-6">
                                <h3 class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Shades & Tints (Lightness Variance)</h3>
                                <div class="h-px bg-gray-100 dark:bg-gray-800 flex-grow"></div>
                            </div>
                            <div id="cp-swatch" class="grid grid-cols-5 md:grid-cols-10 gap-3"></div>
                        </div>

                        <div>
                            <div class="flex items-center gap-4 mb-6">
                                <h3 class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Color Harmonies (Schematic Pairs)</h3>
                                <div class="h-px bg-gray-100 dark:bg-gray-800 flex-grow"></div>
                            </div>
                            <div id="cp-harmony" class="grid grid-cols-2 md:grid-cols-4 gap-4"></div>
                        </div>
                    </div>
                </div>
             `;
             runColorPicker();
             lucide.createIcons();
             break;

        case 'background-remover':
             c.innerHTML = `
                <div class="space-y-10">
                    <div id="br-upload" class="w-full h-48 border-4 border-dashed border-gray-100 dark:border-gray-800 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center group hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-all cursor-pointer relative" onclick="document.getElementById('br-in').click()">
                        <i data-lucide="image" class="w-12 h-12 text-gray-300 group-hover:text-blue-500 mb-4 transition-transform group-hover:-translate-y-2"></i>
                        <p class="text-sm font-bold text-gray-400">Select Portrait/Image</p>
                        <p class="text-[10px] text-gray-300 dark:text-gray-600 mt-2 font-bold uppercase tracking-widest italic">Local AI Processing • No Uploads</p>
                        <input type="file" id="br-in" class="hidden" accept="image/*" onchange="handleBRInput(this)">
                    </div>
                    <div id="br-status" class="hidden text-center space-y-4">
                        <div class="flex justify-center"><i data-lucide="loader-2" class="w-8 h-8 text-blue-600 animate-spin"></i></div>
                        <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest" id="br-progress">Initalizing AI Tensor Models...</p>
                    </div>
                    <div id="br-result" class="hidden space-y-8 animate-fade-in">
                        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] border dark:border-gray-800">
                            <img id="br-img" class="w-full rounded-2xl shadow-xl max-h-80 object-contain bg-[url('https://www.transparenttextures.com/patterns/checkerboard.png')]">
                        </div>
                        <button onclick="downloadBR()" class="w-full py-6 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-[2rem] font-black shadow-2xl uppercase tracking-widest text-[10px]">Download Transparent Asset</button>
                    </div>
                </div>
             `;
             lucide.createIcons();
             break;

        case 'jpg-to-png':
             c.innerHTML = `
                <div class="space-y-10">
                    <div id="conv-upload" class="w-full h-48 border-4 border-dashed border-gray-100 dark:border-gray-800 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center group hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-all cursor-pointer relative" onclick="document.getElementById('conv-in').click()">
                        <i data-lucide="file-type" class="w-12 h-12 text-gray-300 group-hover:text-blue-500 mb-4 transition-transform group-hover:-translate-y-2"></i>
                        <p class="text-sm font-bold text-gray-400">Upload Image to Convert</p>
                        <input type="file" id="conv-in" class="hidden" accept="image/*" onchange="handleConvInput(this)">
                    </div>
                    <div id="conv-controls" class="hidden space-y-10 animate-fade-in">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="space-y-3">
                                <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Target Format</label>
                                <select id="conv-fmt" class="w-full p-4 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none text-sm">
                                    <option value="png">PNG (Transparent)</option>
                                    <option value="webp">WebP (Efficient)</option>
                                    <option value="jpeg">JPEG (Compressed)</option>
                                </select>
                            </div>
                            <div class="space-y-3">
                                <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Image Quality</label>
                                <input type="range" id="conv-qual" min="1" max="100" value="95" class="w-full accent-blue-600">
                            </div>
                        </div>
                        <button onclick="runConvAction()" class="w-full py-6 bg-blue-600 text-white rounded-[2rem] font-black shadow-2xl uppercase tracking-widest text-[10px]">Process & Secure Download</button>
                    </div>
                </div>
             `;
             lucide.createIcons();
             break;

        case 'url-converter':
             c.innerHTML = `
                <div class="space-y-8">
                    <div class="space-y-4">
                        <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Source URL / String</label>
                        <textarea id="url-in" class="w-full h-32 p-6 bg-gray-50 dark:bg-gray-900 border rounded-[2rem] dark:border-gray-700 outline-none font-medium text-sm" placeholder="https://example.com/search?q=smart tools"></textarea>
                    </div>
                    <div class="grid grid-cols-3 gap-3">
                        <button onclick="runUrlAction('encode')" class="p-4 bg-blue-50 dark:bg-blue-900/40 text-blue-600 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">Encode URL</button>
                        <button onclick="runUrlAction('decode')" class="p-4 bg-blue-50 dark:bg-blue-900/40 text-blue-600 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">Decode URL</button>
                        <button onclick="runUrlAction('slug')" class="p-4 bg-blue-50 dark:bg-blue-900/40 text-blue-600 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">Slugify</button>
                    </div>
                    <div id="url-box" class="hidden p-6 bg-blue-600 text-white rounded-[2.5rem] shadow-xl relative group animate-fade-in">
                        <span class="text-[8px] font-black uppercase tracking-widest opacity-60 mb-2 block">Sanitized Output</span>
                        <div id="url-out" class="font-mono text-sm break-all font-bold"></div>
                        <button onclick="copyToolVal('url-out')" class="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all"><i data-lucide="copy" class="w-3 h-3"></i></button>
                    </div>
                </div>
             `;
             lucide.createIcons();
             break;

        default:
            console.error("Unknown tool ID:", normalizedId);
            c.innerHTML = `<div class="p-20 text-center text-red-500"><i data-lucide="alert-triangle" class="w-16 h-16 mx-auto mb-6"></i><p class="font-black text-xl uppercase tracking-widest">Tool configuration error.</p></div>`;
    }
}

// --- LOGIC FUNCTIONS ---
window.runEMICalc = () => {
    const p = parseFloat(document.getElementById('emi-p').value);
    const r = (parseFloat(document.getElementById('emi-r').value) / 100);
    const n = parseFloat(document.getElementById('emi-n').value) * 12;
    const freq = parseInt(document.getElementById('emi-freq').value || 12);
    
    if(!p || !r || !n) return toast("Enter valid numbers");
    
    const monthlyRate = r / 12;
    const emi = p * monthlyRate * Math.pow(1 + monthlyRate, n) / (Math.pow(1 + monthlyRate, n) - 1);
    
    document.getElementById('emi-box').classList.remove('hidden');
    document.getElementById('emi-out').innerText = formatToolCurrency(emi);
};

let ucPrec = 2;
window.compUnit = 'KB';

window.changeCompUnit = (u) => {
    window.compUnit = u;
    const kb = document.getElementById('unit-kb');
    const mb = document.getElementById('unit-mb');
    if(!kb || !mb) return;
    
    if(u === 'KB') {
        kb.className = "px-4 py-1.5 text-[10px] font-black rounded-lg transition-all bg-blue-600 text-white shadow-sm";
        mb.className = "px-4 py-1.5 text-[10px] font-black rounded-lg transition-all text-gray-400 hover:text-gray-600";
    } else {
        mb.className = "px-4 py-1.5 text-[10px] font-black rounded-lg transition-all bg-blue-600 text-white shadow-sm";
        kb.className = "px-4 py-1.5 text-[10px] font-black rounded-lg transition-all text-gray-400 hover:text-gray-600";
    }
};

window.adjustUCPrec = (dir) => {
    ucPrec = Math.max(0, Math.min(10, ucPrec + dir));
    document.getElementById('uc-dec-v').innerText = ucPrec;
    runUnitConv();
};

window.runUnitConv = () => {
    const v = parseFloat(document.getElementById('uc-in').value) || 0;
    const f_el = document.getElementById('uc-f');
    const t_el = document.getElementById('uc-t');
    const f = f_el.value;
    const t = t_el.value;
    const useSci = document.getElementById('uc-sci')?.checked;
    
    // Multipliers relative to Meters or Kilograms
    const units = {
        km: 1000, m: 1, cm: 0.01, mm: 0.001, mi: 1609.34, yd: 0.9144, ft: 0.3048, in: 0.0254,
        kg: 1, g: 0.001, lb: 0.453592, oz: 0.0283495
    };
    
    let res = 0;
    
    // Temperature handles separately
    const isTemp = (u) => ['c', 'f', 'k'].includes(u);
    
    if (isTemp(f) || isTemp(t)) {
        if (!isTemp(f) || !isTemp(t)) {
            res = 0; // Incompatible categories
        } else {
            // Convert everything to Celsius first
            let c = v;
            if (f === 'f') c = (v - 32) * 5/9;
            if (f === 'k') c = v - 273.15;
            
            // Convert to Target
            if (t === 'c') res = c;
            if (t === 'f') res = (c * 9/5) + 32;
            if (t === 'k') res = c + 273.15;
        }
    } else {
        let base = v * (units[f] || 1);
        res = base / (units[t] || 1);
    }
    
    const out = document.getElementById('uc-out');
    const label = document.getElementById('uc-unit-name');
    
    if (useSci) {
        out.innerText = res.toExponential(ucPrec);
    } else {
        out.innerText = res.toFixed(ucPrec);
    }
    
    label.innerText = t_el.options[t_el.selectedIndex]?.text || '';
};

window.runWordCount = () => {
    const el = document.getElementById('wc-in');
    const t = el.value.trim();
    const words = t ? t.split(/\s+/).length : 0;
    
    document.getElementById('wc-w').innerText = words;
    document.getElementById('wc-c').innerText = t.length;
    document.getElementById('wc-s').innerText = t ? t.split(/[.!?]+/).filter(Boolean).length : 0;
    document.getElementById('wc-r').innerText = Math.ceil((words || 0) / 200) + 'm';
    
    // Progress logic
    const prog = document.getElementById('wc-prog');
    if(prog) {
        const perc = Math.min(100, (words / 500) * 100);
        prog.style.width = perc + '%';
        prog.style.backgroundColor = perc >= 100 ? '#10b981' : '#2563eb';
    }
};

// --- NEW TOOL LOGICS ---
window.initUnitConv = () => {
    const f = document.getElementById('uc-f');
    const t = document.getElementById('uc-t');
    if (!f || !t) return;
    const units = [
        {k:'m', n:'Meter'}, {k:'km', n:'Kilometer'}, {k:'cm', n:'Centimeter'}, {k:'mm', n:'Millimeter'},
        {k:'mi', n:'Mile'}, {k:'yd', n:'Yard'}, {k:'ft', n:'Foot'}, {k:'in', n:'Inch'},
        {k:'kg', n:'Kilogram'}, {k:'g', n:'Gram'}, {k:'lb', n:'Pound'}, {k:'oz', n:'Ounce'},
        {k:'c', n:'Celsius'}, {k:'f', n:'Fahrenheit'}, {k:'k', n:'Kelvin'}
    ];
    units.forEach(u => {
        const o1 = document.createElement('option'); o1.value = u.k; o1.innerText = u.n;
        const o2 = document.createElement('option'); o2.value = u.k; o2.innerText = u.n;
        f.appendChild(o1); t.appendChild(o2);
    });
    f.value = 'm'; t.value = 'km';
    runUnitConv();
};

window.runCaseConv = (mode) => {
    const el = document.getElementById('case-in');
    let text = el.value;
    if (mode === 'upper') text = text.toUpperCase();
    if (mode === 'lower') text = text.toLowerCase();
    if (mode === 'title') text = text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    if (mode === 'sentence') text = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
    el.value = text;
};

let ttsSynth = window.speechSynthesis;
window.initTTSVoices = () => {
    const sel = document.getElementById('tts-voice');
    if (!sel) return;
    const updateVoices = () => {
        const voices = ttsSynth.getVoices();
        sel.innerHTML = voices.map(v => `<option value="${v.name}">${v.name} (${v.lang})</option>`).join('');
    };
    if (ttsSynth.onvoiceschanged !== undefined) ttsSynth.onvoiceschanged = updateVoices;
    updateVoices();
};

window.runTTS = () => {
    const text = document.getElementById('tts-in').value;
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = ttsSynth.getVoices();
    utterance.voice = voices.find(v => v.name === document.getElementById('tts-voice').value);
    ttsSynth.speak(utterance);
};
window.stopTTS = () => ttsSynth.cancel();

let sttRec = null;
window.toggleSTT = () => {
    const btn = document.getElementById('stt-btn');
    if (sttRec) {
        sttRec.stop();
        sttRec = null;
        btn.innerText = "Start Dictation";
        document.getElementById('stt-active').classList.add('hidden');
        document.getElementById('stt-idle').classList.remove('hidden');
        return;
    }
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) return alert("Browser does not support Speech Recognition.");
    sttRec = new SpeechRec();
    sttRec.continuous = true;
    sttRec.onresult = (event) => {
        const last = event.results.length - 1;
        document.getElementById('stt-out').value += event.results[last][0].transcript;
    };
    sttRec.start();
    btn.innerText = "Stop Dictation";
    document.getElementById('stt-active').classList.remove('hidden');
    document.getElementById('stt-idle').classList.add('hidden');
};

window.runColorPicker = () => {
    const input = document.getElementById('cp-in');
    if (!input) return;
    const val = input.value;
    document.getElementById('cp-hex').innerText = val.toUpperCase();
    
    const r = parseInt(val.substr(1,2), 16);
    const g = parseInt(val.substr(3,2), 16);
    const b = parseInt(val.substr(5,2), 16);
    document.getElementById('cp-rgb').innerText = `rgb(${r}, ${g}, ${b})`;

    // Helper: Hex to HSL
    const hexToHSL = (hex) => {
        let r = parseInt(hex.substr(1, 2), 16) / 255;
        let g = parseInt(hex.substr(3, 2), 16) / 255;
        let b = parseInt(hex.substr(5, 2), 16) / 255;
        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max === min) { h = s = 0; }
        else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
    };

    // Helper: HSL to Hex
    const hslToHex = (h, s, l) => {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = n => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, '0');
        };
        return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
    };

    const hsl = hexToHSL(val);
    document.getElementById('cp-hsl').innerText = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    
    // Generate Shades (Brightness variance)
    const swatch = document.getElementById('cp-swatch');
    const lightLevels = [10, 20, 30, 40, 50, 60, 70, 80, 90, 95];
    swatch.innerHTML = lightLevels.map(l => {
        const hex = hslToHex(hsl.h, hsl.s, l);
        return `
            <div class="group relative aspect-square rounded-xl shadow-lg border-2 border-white dark:border-gray-800 transition-transform hover:scale-110 active:scale-95 cursor-pointer" 
                 style="background: ${hex}" 
                 onclick="document.getElementById('cp-in').value='${hex}'; runColorPicker()"
                 title="${hex}">
                 <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                    <span class="bg-black/50 text-[6px] font-black text-white px-1 py-0.5 rounded uppercase">${l}%</span>
                 </div>
            </div>
        `;
    }).join('');

    // Generate Harmonies
    const harmony = document.getElementById('cp-harmony');
    const presets = [
        { name: 'Compl.', h: (hsl.h + 180) % 360 },
        { name: 'Analog 1', h: (hsl.h + 30) % 360 },
        { name: 'Analog 2', h: (hsl.h - 30 + 360) % 360 },
        { name: 'Triadic 1', h: (hsl.h + 120) % 360 },
    ];

    harmony.innerHTML = presets.map(p => {
        const hex = hslToHex(p.h, hsl.s, hsl.l);
        return `
            <div class="p-4 bg-white dark:bg-gray-800 rounded-2xl border dark:border-gray-700 space-y-3 shadow-sm hover:shadow-md transition-shadow group cursor-pointer" onclick="document.getElementById('cp-in').value='${hex}'; runColorPicker()">
                <div class="flex items-center justify-between">
                    <span class="text-[8px] font-black text-gray-400 uppercase tracking-widest">${p.name}</span>
                    <span class="font-mono text-[9px] font-black text-blue-600">${hex}</span>
                </div>
                <div class="h-10 rounded-lg shadow-inner overflow-hidden border dark:border-gray-700" style="background: ${hex}"></div>
            </div>
        `;
    }).join('');
};

window.copyColor = () => {
    const hex = document.getElementById('cp-hex').innerText;
    navigator.clipboard.writeText(hex);
    toast("HEX Signature Locked!");
};

window.processWCText = (action) => {
    const el = document.getElementById('wc-in');
    let val = el.value;
    
    if(action === 'upper') val = val.toUpperCase();
    if(action === 'lower') val = val.toLowerCase();
    if(action === 'clean') val = val.replace(/\s+/g, ' ').trim();
    
    el.value = val;
    runWordCount();
};

window.runPassGen = () => {
    const len = parseInt(document.getElementById('pg-len')?.value || 16);
    const useUp = document.getElementById('pg-up')?.checked ?? true;
    const useLow = document.getElementById('pg-low')?.checked ?? true;
    const useNum = document.getElementById('pg-num')?.checked ?? true;
    const useSym = document.getElementById('pg-sym')?.checked ?? true;
    
    let chars = "";
    if(useUp) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(useLow) chars += "abcdefghijklmnopqrstuvwxyz";
    if(useNum) chars += "0123456789";
    if(useSym) chars += "!@#$%^&*()_+{}[]|:<>?";
    
    if(!chars) {
        document.getElementById('pg-out').innerHTML = '<span class="text-red-400 text-sm italic">Select at least one category</span>';
        return;
    }
    
    let p = "";
    for(let i=0; i<len; i++) p += chars.charAt(Math.floor(Math.random() * chars.length));
    document.getElementById('pg-out').innerText = p;
};

window.runAgeCalc = () => {
    const dobInput = document.getElementById('age-in').value;
    if(!dobInput) return toast("Chronological origin required");
    
    const dob = new Date(dobInput);
    const now = new Date();
    
    let y = now.getFullYear() - dob.getFullYear();
    let m = now.getMonth() - dob.getMonth();
    let d = now.getDate() - dob.getDate();
    
    if(d < 0) { m--; const p = new Date(now.getFullYear(), now.getMonth(), 0); d += p.getDate(); }
    if(m < 0) { y--; m += 12; }
    
    // Advanced Stats
    const diffMs = now - dob;
    const weeks = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7));
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    
    // Next Birthday
    let nextBday = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
    if (now > nextBday) nextBday.setFullYear(now.getFullYear() + 1);
    const daysToBday = Math.ceil((nextBday - now) / (1000 * 60 * 60 * 24));

    document.getElementById('age-box').classList.remove('hidden');
    document.getElementById('age-y').innerText = y;
    document.getElementById('age-m').innerText = m;
    document.getElementById('age-d').innerText = d;
    document.getElementById('age-weeks').innerText = weeks.toLocaleString();
    document.getElementById('age-hours').innerText = hours.toLocaleString();
    document.getElementById('age-next').innerText = `${daysToBday} Days Until Celebration`;
};

window.exportNotes = () => {
    const text = document.getElementById('notes-in').value;
    if(!text) return toast("Notes are empty");
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `notes_${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
};

window.copyNotes = () => {
    const text = document.getElementById('notes-in').value;
    if(!text) return toast("Nothing to copy");
    window.copyToClipboard(text, "Notes Content");
};

window.runQRGen = () => {
    const val = document.getElementById('qr-in').value;
    if(!val) return toast("Enter text/URL");
    const color = document.getElementById('qr-color').value.replace('#','');
    const bgcolor = document.getElementById('qr-bg').value.replace('#','');
    const size = document.getElementById('qr-size').value;
    
    const img = document.getElementById('qr-img');
    const box = document.getElementById('qr-box');
    const down = document.getElementById('qr-down');
    
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(val)}&color=${color}&bgcolor=${bgcolor}`;
    img.onload = () => { 
        box.classList.remove('hidden');
        down.href = img.src;
    };
};

window.runNotesSave = () => {
    state.notes = document.getElementById('notes-in').value;
    localStorage.setItem('tool_notes', state.notes);
};

window.clearNotes = () => {
    const el = document.getElementById('notes-in');
    if (!el) return;
    el.value = '';
    state.notes = '';
    localStorage.setItem('tool_notes', '');
    toast("Fragment destroyed successfully.");
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
    let m = parseFloat(document.getElementById('sip-m').value) || 0;
    const r = parseFloat(document.getElementById('sip-r').value) / 100 / 12;
    const n = parseFloat(document.getElementById('sip-n').value);
    const step = parseFloat(document.getElementById('sip-step').value) / 100;
    
    if(!m || !r || !n) return toast("Parameters incomplete");

    let maturity = 0;
    let totalInvested = 0;
    
    // Monthly calculation with yearly step-up
    for (let year = 1; year <= n; year++) {
        for (let month = 1; month <= 12; month++) {
            maturity += m;
            totalInvested += m;
            maturity *= (1 + r);
        }
        m *= (1 + step);
    }
    
    document.getElementById('sip-box').classList.remove('hidden');
    document.getElementById('sip-out').innerText = formatToolCurrency(maturity);
    document.getElementById('sip-invested').innerText = formatToolCurrency(totalInvested);
    document.getElementById('sip-gained').innerText = formatToolCurrency(maturity - totalInvested);
};

let taxRegime = 'new';
window.setTaxRegime = (r) => {
    taxRegime = r;
    const nEl = document.getElementById('tax-reg-new');
    const oEl = document.getElementById('tax-reg-old');
    if(r === 'new') {
        nEl.className = "flex-grow py-3 rounded-xl text-[10px] font-black uppercase transition-all bg-blue-600 text-white shadow-lg";
        oEl.className = "flex-grow py-3 rounded-xl text-[10px] font-black uppercase transition-all text-gray-400 hover:text-gray-900 dark:hover:text-white";
    } else {
        oEl.className = "flex-grow py-3 rounded-xl text-[10px] font-black uppercase transition-all bg-blue-600 text-white shadow-lg";
        nEl.className = "flex-grow py-3 rounded-xl text-[10px] font-black uppercase transition-all text-gray-400 hover:text-gray-900 dark:hover:text-white";
    }
    runTaxCalc();
};

window.runTaxCalc = () => {
    const sal = parseFloat(document.getElementById('tax-in').value) || 0;
    let t = 0;
    
    if(taxRegime === 'new') {
        if(sal > 1500000) t = (sal - 1500000) * 0.3 + 150000;
        else if(sal > 1200000) t = (sal - 1200000) * 0.2 + 90000;
        else if(sal > 900000) t = (sal - 900000) * 0.15 + 45000;
        else if(sal > 600000) t = (sal - 600000) * 0.1 + 15000;
        else if(sal > 300000) t = (sal - 300000) * 0.05;
    } else {
        // Old Regime simplified
        if(sal > 1000000) t = (sal - 1000000) * 0.3 + 112500;
        else if(sal > 500000) t = (sal - 500000) * 0.2 + 12500;
        else if(sal > 250000) t = (sal - 250000) * 0.05;
    }
    
    const rate = sal > 0 ? (t / sal) * 100 : 0;
    
    document.getElementById('tax-box').classList.remove('hidden');
    document.getElementById('tax-out').innerText = formatToolCurrency(t);
    document.getElementById('tax-rate').innerText = rate.toFixed(1) + '%';
};

window.runUserGen = () => {
    const k = document.getElementById('un-in').value || 'User';
    const mod = document.getElementById('un-mod').value || '';
    const style = document.getElementById('un-style').value;
    const sep = document.getElementById('un-sep').value;
    
    const cleanK = k.toLowerCase().replace(/\s/g, '');
    const cleanMod = mod.toLowerCase().replace(/\s/g, '');
    
    let presets = [];
    if(style === 'modern') presets = ['io', 'dot', 'kit', 'lab', 'app', 'hub', 'flow'];
    if(style === 'hype') presets = ['vx', 'z', 'hype', 'flex', 'drip', 'vibe', 'mode'];
    if(style === 'og') presets = ['the', 'real', 'og', 'main', 'prime', 'ace', 'king'];
    if(style === 'pro') presets = ['consult', 'hq', 'official', 'pro', 'partner', 'inc'];
    
    const results = presets.map(p => {
        const parts = [cleanK, p];
        if(cleanMod) parts.push(cleanMod);
        return parts.join(sep);
    });
    
    const g = document.getElementById('un-grid');
    g.innerHTML = results.map(n => `
        <div onclick="navigator.clipboard.writeText('${n}'); toast('Handle Copied!')" class="p-5 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center text-xs font-black border dark:border-gray-700 hover:border-blue-500 cursor-pointer transition-all active:scale-95 group">
            <span class="group-hover:text-blue-600 transition-colors">${n}</span>
        </div>
    `).join('');
};

window.runBioGen = () => {
    const input = document.getElementById('bio-in').value || "Creator";
    const templates = [
        `✨ {t} | Making waves\n📍 Earth \n🛠️ Professional SmartTools usage`,
        `Digital Enthusiast 💻\n{t} centered experiences.\nCurating logic & love ❤️`,
        `{t} state of mind. ⚪\nproductivity obsessed.\n2026 vibes only.`,
        `Mastering the art of {t}.\nDM for collaboration 📩\nofficial {t} handle.`,
        `Passionate about {t} 🌿\nBuilding the future, one byte at a time.\n#Innovation #Growth`
    ];

    const list = document.getElementById('bio-list');
    list.innerHTML = templates.map(tpl => {
        const text = tpl.replace(/{t}/g, input);
        return `
            <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border dark:border-gray-800 group relative">
                <p class="text-sm font-bold whitespace-pre-wrap leading-relaxed">${text}</p>
                <button onclick="copyToClipboard('${text.replace(/\n/g, '\\n')}')" class="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-all border dark:border-gray-700 shadow-sm">
                    <i data-lucide="copy" class="w-3 h-3"></i>
                </button>
            </div>
        `;
    }).join("");
    lucide.createIcons();
};

let selectedFile = null;

window.handleImageInput = (input) => {
    if (input.files && input.files[0]) {
        selectedFile = input.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById('img-preview').src = e.target.result;
            document.getElementById('comp-upload').classList.add('hidden');
            document.getElementById('comp-controls').classList.remove('hidden');
        };
        reader.readAsDataURL(selectedFile);
    }
};

window.runManualCompress = () => {
    if (!selectedFile) return toast("Please upload an image first");

    const quality = document.getElementById('comp-quality').value / 100;
    const scale = document.getElementById('comp-scale').value / 100;
    const format = document.getElementById('comp-format').value;
    
    const prog = document.getElementById('file-prog');
    const box = document.getElementById('file-box');
    const res = document.getElementById('comp-res-box');
    
    box.classList.remove('hidden');
    res.classList.add('hidden');
    prog.style.width = '0%';
    
    const img = new Image();
    img.src = document.getElementById('img-preview').src;
    
    img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        const width = img.width * scale;
        const height = img.height * scale;
        
        canvas.width = width;
        canvas.height = height;
        
        if (document.getElementById('comp-gray')?.checked) {
            ctx.filter = 'grayscale(100%)';
        }
        
        ctx.drawImage(img, 0, 0, width, height);
        
        const targetFormat = format === 'original' ? selectedFile.type : format;
        const compressedDataUrl = canvas.toDataURL(targetFormat, quality);
        
        // Update progress
        setTimeout(() => { 
            prog.style.width = '100%'; 
            setTimeout(() => {
                res.classList.remove('hidden');
                
                // Calculate real savings
                const originalSize = selectedFile.size;
                const head = 'data:' + targetFormat + ';base64,';
                const compressedSize = Math.round((compressedDataUrl.length - head.length) * 3 / 4);
                const savings = Math.round((1 - (compressedSize / originalSize)) * 100);
                
                const formatSize = (s) => {
                    if (window.compUnit === 'MB') return (s / (1024 * 1024)).toFixed(2) + ' MB';
                    return (s / 1024).toFixed(1) + ' KB';
                };
                document.getElementById('comp-saved').innerText = `Saved ${savings}% (${formatSize(originalSize)} → ${formatSize(compressedSize)})`;
                
                // Setup download button
                const dlBtn = res.querySelector('button');
                dlBtn.onclick = () => {
                    const link = document.createElement('a');
                    link.href = compressedDataUrl;
                    link.download = `compressed_${selectedFile.name.split('.')[0]}.${targetFormat.split('/')[1]}`;
                    link.click();
                };
            }, 500);
        }, 50);
    };
};

window.handlePDFInput = (input) => {
    if (!input.files.length) return;
    const count = input.files.length;
    document.getElementById('comp-upload').classList.add('hidden');
    document.getElementById('pdf-controls').classList.remove('hidden');
    document.getElementById('pdf-count').innerText = `${count} ${count === 1 ? 'File' : 'Files'} Documented`;
    
    // Generate suggested filename
    const first = input.files[0].name.split('.')[0];
    document.getElementById('pdf-name').value = `${first}_merged`;
    lucide.createIcons();
};

window.handlePDFSplitInput = (input) => {
    if (!input.files.length) return;
    document.getElementById('comp-upload').classList.add('hidden');
    document.getElementById('pdf-split-controls').classList.remove('hidden');
    lucide.createIcons();
};

window.runCaptionGen = () => {
    const topic = document.getElementById('cap-in').value;
    if(!topic) return toast("What is the scene about?");
    
    const vibe = document.getElementById('cap-vibe').value;
    const emoji = document.getElementById('cap-emoji').value;
    const hashCount = document.getElementById('cap-hash').value === 'max' ? 30 : parseInt(document.getElementById('cap-hash').value);
    
    const templates = {
        aesthetic: [
            "soft mornings & {t} 🕊️",
            "finding magic in {t} ✨",
            "just another day with {t} ☁️",
            "{t} state of mind.",
            "POV: you found the perfect {t} 🎞️"
        ],
        hype: [
            "Main character energy with {t} ⚡",
            "{t} season is officially here.",
            "Nobody does {t} like this. 😤",
            "{t} > Everything else.",
            "Locked in on {t}. 🔒"
        ],
        deep: [
            "{t} taught me more than I expected.",
            "In a world of noise, find your {t}. 🌿",
            "The beauty of {t} is in the details.",
            "Gratitude for moments like {t}.",
            "Quietly evolving through {t}."
        ],
        pro: [
            "Elevating your workflow with {t}.",
            "The fundamental guide to {t} in 2026.",
            "Why {t} remains a top priority for teams.",
            "Strategic insights into {t}.",
            "Mastering the art of {t}."
        ]
    };

    const emojiSets = ["✨", "☁️", "🕊️", "🌿", "⚡", "🎞️", "🔥", "💎"];
    const hashtagSets = ["#aesthetic", "#vibes", "#explore", "#dailymotivation", "#mindset", "#lifestyle"];

    const list = document.getElementById('cap-list');
    list.innerHTML = templates[vibe].map(tpl => {
        let text = tpl.replace('{t}', topic);
        
        // Add emojis
        if (emoji === 'min') text += " " + emojiSets[Math.floor(Math.random() * emojiSets.length)];
        if (emoji === 'heavy') text += " " + emojiSets.sort(() => .5 - Math.random()).slice(0, 4).join("");

        // Add hashtags
        let hashes = "";
        if (hashCount > 0) {
            hashes = "\n\n" + hashtagSets.sort(() => .5 - Math.random()).slice(0, hashCount).join(" ");
        }

        return `
            <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border dark:border-gray-800 group relative">
                <p class="text-sm font-medium mb-4 whitespace-pre-wrap">${text}${hashes}</p>
                <button onclick="copyToClipboard('${text}${hashes.replace(/\n\n/, '\\n\\n')}')" class="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-all border dark:border-gray-700 shadow-sm">
                    <i data-lucide="copy" class="w-3 h-3"></i>
                </button>
            </div>
        `;
    }).join('');
    lucide.createIcons();
};

window.handleResizerInput = (input) => {
    if (!input.files.length) return;
    document.getElementById('comp-upload').classList.add('hidden');
    document.getElementById('resizer-controls').classList.remove('hidden');
    lucide.createIcons();
};

window.runFileSim = () => {
    const prog = document.getElementById('file-prog');
    const box = document.getElementById('file-box');
    box.classList.remove('hidden');
    prog.style.width = '0%';
    
    setTimeout(() => { 
        prog.style.width = '100%'; 
        setTimeout(() => {
            if (state.activeTool.id === 'pdf-merger') {
                document.getElementById('pdf-res').classList.remove('hidden');
                document.getElementById('pdf-final-name').innerText = (document.getElementById('pdf-name').value || 'Merged_Document') + '.pdf';
            }
            if (state.activeTool.id === 'pdf-splitter') {
                document.getElementById('pdf-split-res').classList.remove('hidden');
            }
            if (state.activeTool.id === 'image-resizer') {
                document.getElementById('res-out-box').classList.remove('hidden');
            }
        }, 1200);
    }, 50);
};

// --- PHASE 4 FINANCE LOGIC ---
window.runCCCalc = () => {
    const p = parseFloat(document.getElementById('cc-p').value);
    const r = (parseFloat(document.getElementById('cc-r').value) / 100) / 12;
    const m = parseFloat(document.getElementById('cc-m').value);
    const t = parseFloat(document.getElementById('cc-t').value);

    if(!p || !m) return toast("Enter valid balance and payment");
    if(m <= p * r) return toast("Monthly payment must be greater than interest accrued");

    let totalInterest = 0;
    let months = 0;
    let balance = p;

    while (balance > t && months < 600) { // Limit to 50 years
        let interest = balance * r;
        totalInterest += interest;
        balance = balance + interest - m;
        months++;
    }

    document.getElementById('cc-box').classList.remove('hidden');
    document.getElementById('cc-total-i').innerText = formatToolCurrency(totalInterest);
    document.getElementById('cc-months').innerText = months + ' Months';
    document.getElementById('cc-daily').innerText = formatToolCurrency((p * r * 12) / 365);
};

window.runWebCost = () => {
    let total = 500; // Base rate
    const opts = document.querySelectorAll('#web-opts input[type="checkbox"]');
    opts.forEach(opt => {
        if(opt.checked) total += parseInt(opt.getAttribute('data-val'));
    });
    document.getElementById('web-total').innerText = formatToolCurrency(total);
};

window.runFreelanceCalc = () => {
    const r = parseFloat(document.getElementById('fr-rate').value) || 0;
    const h = parseFloat(document.getElementById('fr-hours').value) || 0;
    
    const monthly = r * h * 4.33; // Avg weeks in month
    const yearly = monthly * 12;

    document.getElementById('fr-month').innerText = formatToolCurrency(monthly);
    document.getElementById('fr-year').innerText = formatToolCurrency(yearly);
};

window.runDomEst = () => {
    const domain = document.getElementById('dom-in').value.trim();
    if(!domain) return;

    let score = 500;
    const parts = domain.split('.');
    const name = parts[0];
    const tld = parts[1] || 'com';

    // Length heuristic
    if(name.length < 5) score += 2000;
    else if(name.length < 8) score += 500;
    else score -= 100;

    // TLD heuristic
    const premiumTLDs = ['com', 'io', 'ai', 'net', 'org'];
    if(premiumTLDs.includes(tld)) score *= 2.5;

    // Keyword heuristic
    const keywords = ['pay', 'fit', 'sex', 'crypto', 'loan', 'bank', 'tech'];
    keywords.forEach(k => { if(name.includes(k)) score += 1000; });

    document.getElementById('dom-box').classList.remove('hidden');
    document.getElementById('dom-val').innerText = formatToolCurrency(score);
    document.getElementById('dom-len').innerText = `Length: ${name.length} Chars`;
    document.getElementById('dom-tld').innerText = `TLD: ${tld.toUpperCase()}`;
};

window.runCryCalc = () => {
    const cap = parseFloat(document.getElementById('cry-in').value) || 0;
    const buy = parseFloat(document.getElementById('cry-buy').value) || 1;
    const sell = parseFloat(document.getElementById('cry-sell').value) || 0;

    const tokens = cap / buy;
    const balance = tokens * sell;
    const profit = balance - cap;
    const perc = ((sell - buy) / buy) * 100;

    document.getElementById('cry-profit').innerText = formatToolCurrency(Math.abs(profit));
    document.getElementById('cry-profit').style.color = profit >= 0 ? '#10b981' : '#ef4444';
    
    document.getElementById('cry-perc').innerText = (profit >= 0 ? '+' : '') + perc.toFixed(2) + '%';
    document.getElementById('cry-perc').className = `text-lg font-black ${profit >= 0 ? 'text-green-400' : 'text-red-400'}`;
    
    document.getElementById('cry-bal').innerText = formatToolCurrency(balance);
};

window.runROICalc = () => {
    const s = parseFloat(document.getElementById('roi-s').value) || 1;
    const r = parseFloat(document.getElementById('roi-r').value) || 0;

    const profit = r - s;
    const roi = (profit / s) * 100;
    const roas = r / s;

    document.getElementById('roi-out').innerText = roi.toFixed(0) + '%';
    document.getElementById('roi-p').innerText = formatToolCurrency(profit);
    document.getElementById('roi-a').innerText = roas.toFixed(1) + 'x';
    
    const bar = document.getElementById('roi-bar');
    const perc = Math.max(0, Math.min(100, (roi / 200) * 100)); // Normalized to 200% baseline
    bar.style.width = perc + '%';
    bar.style.backgroundColor = roi >= 0 ? '#ffffff' : '#ef4444';
};

window.runInsCalc = () => {
    const type = document.getElementById('ins-type').value;
    const age = parseInt(document.getElementById('ins-age').value) || 25;
    const cov = parseFloat(document.getElementById('ins-cov').value) || 0;
    const isTobacco = document.getElementById('ins-t-yes').classList.contains('bg-blue-600');

    let baseRate = 0.0001; // Base multiplier
    if (type === 'health') baseRate = 0.0005;
    if (type === 'accident') baseRate = 0.00005;

    // Age multiplier
    let ageMult = 1 + (Math.max(0, age - 25) * 0.05);
    if (isTobacco) ageMult *= 1.8;

    const monthly = (cov * baseRate * ageMult) / 12;
    document.getElementById('ins-out').innerText = formatToolCurrency(monthly);
};

window.setInsTobacco = (val) => {
    const no = document.getElementById('ins-t-no');
    const yes = document.getElementById('ins-t-yes');
    if (val) {
        yes.className = "flex-grow py-3 rounded-xl text-[10px] font-black uppercase transition-all bg-blue-600 text-white shadow-lg";
        no.className = "flex-grow py-3 rounded-xl text-[10px] font-black uppercase transition-all text-gray-400 hover:text-gray-900 dark:hover:text-white";
    } else {
        no.className = "flex-grow py-3 rounded-xl text-[10px] font-black uppercase transition-all bg-blue-600 text-white shadow-lg";
        yes.className = "flex-grow py-3 rounded-xl text-[10px] font-black uppercase transition-all text-gray-400 hover:text-gray-900 dark:hover:text-white";
    }
    runInsCalc();
};

// --- PHASE 3 LOGIC ---
let brFile = null;
window.handleBRInput = (input) => {
    if (input.files && input.files[0]) {
        brFile = input.files[0];
        document.getElementById('br-upload').classList.add('hidden');
        document.getElementById('br-status').classList.remove('hidden');
        
        // AI Removal Logic
        if (typeof imglyRemoveBackground !== 'undefined') {
            imglyRemoveBackground(brFile).then((blob) => {
                const url = URL.createObjectURL(blob);
                const img = document.getElementById('br-img');
                img.src = url;
                document.getElementById('br-status').classList.add('hidden');
                document.getElementById('br-result').classList.remove('hidden');
                lucide.createIcons();
            }).catch((err) => {
                console.error(err);
                toast("AI Logic Error: " + err.message);
                document.getElementById('br-status').classList.add('hidden');
                document.getElementById('br-upload').classList.remove('hidden');
            });
        } else {
            toast("AI Module Loading... Please retry in 3s");
            setTimeout(() => {
                document.getElementById('br-status').classList.add('hidden');
                document.getElementById('br-upload').classList.remove('hidden');
            }, 3000);
        }
    }
};

window.downloadBR = () => {
    const img = document.getElementById('br-img');
    const a = document.createElement('a');
    a.href = img.src;
    a.download = `removed_bg_${Date.now()}.png`;
    a.click();
};

let convFile = null;
window.handleConvInput = (input) => {
    if (input.files && input.files[0]) {
        convFile = input.files[0];
        document.getElementById('conv-upload').classList.add('hidden');
        document.getElementById('conv-controls').classList.remove('hidden');
        lucide.createIcons();
    }
};

window.runConvAction = () => {
    if (!convFile) return;
    const fmt = document.getElementById('conv-fmt').value;
    const qual = document.getElementById('conv-qual').value / 100;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            
            const mime = `image/${fmt}`;
            const dataUrl = canvas.toDataURL(mime, qual);
            const a = document.createElement('a');
            a.href = dataUrl;
            a.download = `converted_image.${fmt === 'jpeg' ? 'jpg' : fmt}`;
            a.click();
            toast("Conversion Success!");
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(convFile);
};

window.runUrlAction = (mode) => {
    const val = document.getElementById('url-in').value;
    if (!val) return;
    
    let res = "";
    if (mode === 'encode') res = encodeURIComponent(val);
    if (mode === 'decode') res = decodeURIComponent(val);
    if (mode === 'slug') res = val.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
    
    document.getElementById('url-out').innerText = res;
    document.getElementById('url-box').classList.remove('hidden');
    lucide.createIcons();
};

window.copyToolVal = (id) => {
    const text = document.getElementById(id).innerText;
    copyToClipboard(text);
};

window.copyToClipboard = (text, label = "Content") => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            toast(`${label} Locked to Clipboard!`);
        }).catch(() => {
            fallbackCopy(text, label);
        });
    } else {
        fallbackCopy(text, label);
    }
};

function fallbackCopy(text, label) {
    const el = document.createElement('textarea');
    el.value = text;
    el.style.position = 'fixed';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    try {
        document.execCommand('copy');
        toast(`${label} Locked to Clipboard!`);
    } catch (err) {
        toast("Copy Failed. Please manual select.");
    }
    document.body.removeChild(el);
}

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
