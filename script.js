/**
 * SmartTools Hub v5.0 - Universal Core Engine
 * Vanilla JS logic for 33+ high-performance browser tools.
 */

import QUOTES_LIBRARY from './quotes.js';
import Decimal from 'decimal.js';
import { Chart, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
Chart.register(...registerables, annotationPlugin);

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

const CURRENCIES = {
    USD: { symbol: '$', rate: 1, locale: 'en-US' },
    INR: { symbol: '₹', rate: 83, locale: 'en-IN' },
    EUR: { symbol: '€', rate: 0.92, locale: 'de-DE' },
    GBP: { symbol: '£', rate: 0.79, locale: 'en-GB' },
    JPY: { symbol: '¥', rate: 151, locale: 'ja-JP', decimals: 0 },
    CAD: { symbol: '$', rate: 1.36, locale: 'en-CA' },
    AUD: { symbol: '$', rate: 1.54, locale: 'en-AU' },
    AED: { symbol: 'DH', rate: 3.67, locale: 'ar-AE' },
    SAR: { symbol: 'SR', rate: 3.75, locale: 'ar-SA' },
    SGD: { symbol: '$', rate: 1.35, locale: 'en-SG' },
    CNY: { symbol: '¥', rate: 7.23, locale: 'zh-CN' }
};

const GLOBAL_COUNTRY_CONFIG = {
    IN: {
        name: "India",
        currency: "INR",
        locale: "en-IN",
        tax: {
            type: "progressive",
            regime: "FY 2024-25 New Regime",
            standardDeduction: 50000,
            slabs: [
                { limit: 300000, rate: 0 },
                { limit: 600000, rate: 0.05 },
                { limit: 900000, rate: 0.10 },
                { limit: 1200000, rate: 0.15 },
                { limit: 1500000, rate: 0.20 },
                { limit: Infinity, rate: 0.30 }
            ],
            rebate: { threshold: 700000 },
            additives: [{ name: "Health & Education Cess", rate: 0.04 }]
        },
        loan: {
            compounding: 12,
            dayCount: "30/360"
        }
    },
    US: {
        name: "United States",
        currency: "USD",
        locale: "en-US",
        tax: {
            type: "progressive",
            regime: "Federal 2024 (Single)",
            standardDeduction: 14600,
            slabs: [
                { limit: 11600, rate: 0.10 },
                { limit: 47150, rate: 0.12 },
                { limit: 100525, rate: 0.22 },
                { limit: 191950, rate: 0.24 },
                { limit: 243725, rate: 0.32 },
                { limit: 609350, rate: 0.35 },
                { limit: Infinity, rate: 0.37 }
            ]
        },
        loan: {
            compounding: 12,
            dayCount: "actual/365"
        }
    },
    UK: {
        name: "United Kingdom",
        currency: "GBP",
        locale: "en-GB",
        tax: {
            type: "progressive",
            regime: "HMRC 2024-25",
            standardDeduction: 12570,
            slabs: [
                { limit: 12570, rate: 0 },
                { limit: 50270, rate: 0.20 },
                { limit: 125140, rate: 0.40 },
                { limit: Infinity, rate: 0.45 }
            ]
        },
        loan: {
            compounding: 1, 
            dayCount: "actual/365"
        }
    },
    JP: {
        name: "Japan",
        currency: "JPY",
        locale: "ja-JP",
        tax: {
            type: "progressive",
            regime: "2024 Income Tax",
            standardDeduction: 480000, 
            slabs: [
                { limit: 1950000, rate: 0.05 },
                { limit: 3300000, rate: 0.10 },
                { limit: 6950000, rate: 0.20 },
                { limit: 9000000, rate: 0.23 },
                { limit: 18000000, rate: 0.33 },
                { limit: 40000000, rate: 0.40 },
                { limit: Infinity, rate: 0.45 }
            ]
        },
        loan: {
            compounding: 12,
            dayCount: "30/360"
        }
    },
    AE: {
        name: "United Arab Emirates",
        currency: "AED",
        locale: "ar-AE",
        tax: {
            type: "none",
            regime: "Zero Individual Tax",
            description: "No personal income tax is levied on individuals in the UAE."
        },
        loan: {
            compounding: 12,
            dayCount: "30/360"
        }
    },
    GEN: {
        name: "Global Financial Mode",
        currency: "USD",
        locale: "en-US",
        tax: {
            type: "progressive",
            regime: "Standard Global Baseline",
            standardDeduction: 0,
            slabs: [
                { limit: 10000, rate: 0.10 },
                { limit: 50000, rate: 0.20 },
                { limit: 100000, rate: 0.30 },
                { limit: Infinity, rate: 0.40 }
            ]
        },
        loan: {
            compounding: 12,
            dayCount: "30/360"
        }
    }
};

let quoteBag = [];
let quoteLangConfigured = null;

function getNextRandomQuote() {
    if (quoteBag.length === 0 || quoteLangConfigured !== state.lang) {
        quoteLangConfigured = state.lang;
        const library = typeof QUOTES_LIBRARY !== 'undefined' ? QUOTES_LIBRARY : {};
        const quotesForLang = library[state.lang] || library['en'] || [{ text: "Knowledge is power.", author: "Francis Bacon" }];
        
        quoteBag = [...quotesForLang];
        for (let i = quoteBag.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [quoteBag[i], quoteBag[j]] = [quoteBag[j], quoteBag[i]];
        }
    }
    return quoteBag.pop();
}

// --- STATE MANAGER ---
const CONFIG_VERSION = '1.2.0';

const handleStorageVersion = () => {
    const current = localStorage.getItem('app_config_version');
    if (current !== CONFIG_VERSION) {
        // Version mismatch: Force re-detection for accuracy in new engine
        localStorage.removeItem('user_country_confirmed');
        localStorage.setItem('app_config_version', CONFIG_VERSION);
    }
};
handleStorageVersion();

let state = {
    theme: localStorage.getItem('theme') || 'light',
    lang: localStorage.getItem('lang') || 'en',
    currency: localStorage.getItem('currency') || 'USD',
    search: '',
    category: 'All',
    detectedCountry: 'GEN',
    detectionConfidence: 'low',
    isManualCountry: false,
    countryConfirmed: false,
    recent: JSON.parse(localStorage.getItem('tool_recent') || '[]'),
    activeTool: null,
    currentQuote: null, 
    todo: JSON.parse(localStorage.getItem('tool_todo') || '[]'),
    notes: localStorage.getItem('tool_notes') || '',
    emiCharts: {}
};

// --- CROSS-TAB SYNCHRONIZATION ---
window.addEventListener('storage', (e) => {
    const syncKeys = ['user_country', 'currency', 'theme', 'user_country_confirmed'];
    if (syncKeys.includes(e.key)) {
        if (e.key === 'user_country') {
            state.detectedCountry = e.newValue;
            state.isManualCountry = true;
        }
        if (e.key === 'user_country_confirmed') {
            state.countryConfirmed = e.newValue === 'true';
            const banner = document.getElementById('country-banner');
            if (banner && state.countryConfirmed) banner.remove();
        }
        if (e.key === 'currency') {
            state.currency = e.newValue;
            const curSelect = document.getElementById('currency-select');
            if (curSelect) curSelect.value = state.currency;
        }
        if (e.key === 'theme') {
            state.theme = e.newValue;
            applyTheme();
        }
        renderUI();
    }
});

// --- LOCALIZATION ENGINE (No APIs) ---
const COUNTRY_FLAGS = { IN: '🇮🇳', US: '🇺🇸', UK: '🇬🇧', AE: '🇦🇪', GEN: '🌐' };

const detectCountry = () => {
    // P1: Check manually set preference
    const saved = localStorage.getItem('user_country');
    const confirmed = localStorage.getItem('user_country_confirmed');
    if (saved && GLOBAL_COUNTRY_CONFIG[saved]) {
        return { code: saved, confidence: 'high', isManual: true, isConfirmed: confirmed === 'true' };
    }

    // P2: Browser Locale extraction (Strict) -> HIGH
    const languages = navigator.languages || [navigator.language];
    for (const lang of languages) {
        if (!lang || lang === 'en' || lang === 'en-US' || lang === 'en-001') continue; // Skip ambiguous/generic English
        const parts = lang.split('-');
        if (parts.length > 1) {
            let code = parts[parts.length - 1].toUpperCase();
            if (code === 'GB') code = 'UK';
            if (GLOBAL_COUNTRY_CONFIG[code]) return { code, confidence: 'high' };
        }
    }

    // P3: Timezone Heuristics (Expanded Accuracy) -> MEDIUM
    try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const tzMapping = {
            'Asia/Kolkata': 'IN', 'Asia/Calcutta': 'IN', 'Asia/Mumbai': 'IN', 'Asia/Delhi': 'IN',
            'America/New_York': 'US', 'America/Detroit': 'US', 'America/Chicago': 'US', 'America/Denver': 'US', 'America/Los_Angeles': 'US', 
            'America/Phoenix': 'US', 'America/Anchorage': 'US', 'Pacific/Honolulu': 'US',
            'Europe/London': 'UK', 'Europe/Belfast': 'UK',
            'Asia/Dubai': 'AE', 'Asia/Abu_Dhabi': 'AE'
        };
        if (tzMapping[tz]) return { code: tzMapping[tz], confidence: 'medium' };
    } catch (e) {}

    return { code: 'GEN', confidence: 'low' };
};

window.confirmCountry = () => {
    localStorage.setItem('user_country_confirmed', 'true');
    state.countryConfirmed = true;
    const banner = document.getElementById('country-banner');
    if (banner) banner.remove();
};

window.setManualCountry = (code) => {
    localStorage.setItem('user_country', code);
    localStorage.setItem('user_country_confirmed', 'true');
    state.isManualCountry = true;
    state.countryConfirmed = true;
    state.detectedCountry = code;
    
    const banner = document.getElementById('country-banner');
    if (banner) banner.remove();

    const msgEl = document.getElementById('tax-detection-msg');
    if (msgEl) msgEl.classList.add('hidden');
    
    // Sync UI if needed
    const select = document.getElementById('tax-country');
    if (select) {
        select.value = code;
        window.runTaxCalc();
    }
    
    // Note: Currency is separate now per user request
    toast(`Jurisdiction updated to ${GLOBAL_COUNTRY_CONFIG[code].name}`);
};

const showCountryBanner = () => {
    if (state.countryConfirmed || state.isManualCountry || state.detectionConfidence === 'high') return;
    
    const detected = state.detectedCountry;
    const config = GLOBAL_COUNTRY_CONFIG[detected];
    if (!config) return;

    const banner = document.createElement('div');
    banner.id = 'country-banner';
    banner.setAttribute('role', 'alert');
    banner.setAttribute('aria-live', 'polite');
    banner.className = 'fixed bottom-4 right-4 z-[1000] p-4 bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-500 rounded-2xl shadow-2xl animate-fade-in max-w-sm';
    
    const msg = detected === 'GEN' 
        ? 'Using Global Financial Mode 🌐'
        : `We detected your region as ${config.name} ${COUNTRY_FLAGS[detected] || ''}`;

    banner.innerHTML = `
        <div class="flex flex-col gap-3">
            <p class="text-[11px] font-black uppercase tracking-widest text-gray-400">Localization Sync</p>
            <p class="text-xs font-bold text-gray-700 dark:text-gray-200">${msg}</p>
            <div class="flex gap-2">
                <button onclick="confirmCountry()" aria-label="Confirm detected region" class="flex-grow py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Confirm</button>
                <button onclick="document.getElementById('tax-country')?.scrollIntoView({behavior:'smooth'}); confirmCountry(); openToolModal('tax-calculator')" aria-label="Change detected region" class="flex-grow py-2 px-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">Change</button>
            </div>
        </div>
    `;
    document.body.appendChild(banner);
};

const initLocalization = () => {
    const result = detectCountry();
    state.detectedCountry = result.code;
    state.detectionConfidence = result.confidence;

    if (result.isManual) {
        state.isManualCountry = true;
        state.countryConfirmed = result.isConfirmed;
    } else if (result.confidence === 'high') {
        // Silently apply on high confidence
        state.countryConfirmed = true;
        localStorage.setItem('user_country', result.code);
        localStorage.setItem('user_country_confirmed', 'true');
    }
    
    // Auto-init global currency only if never set by user
    if (!localStorage.getItem('currency')) {
         const config = GLOBAL_COUNTRY_CONFIG[state.detectedCountry];
         if (config && config.currency) {
             state.currency = config.currency;
             localStorage.setItem('currency', config.currency);
             const curSelect = document.getElementById('currency-select');
             if (curSelect) curSelect.value = config.currency;
         }
    }
    
    if (!state.countryConfirmed) {
        setTimeout(showCountryBanner, 1500);
    }
};

// Initialize quote safely
state.currentQuote = getNextRandomQuote();


// --- UI CORE RENDERING ---
function renderUI() {
    applyTheme();
    updateText();
    renderCategoryTabs();
    renderToolShelves();
    renderFullGrid();
    
    // Auto-update open tool content on currency/lang switch
    if (state.activeTool) {
        injectToolFunctionalHTML(state.activeTool);
        
        const tid = state.activeTool.replace('#', '').toLowerCase();
        const runMap = {
            'emi-calculator': 'runEMICalc',
            'sip-calculator': 'runSIPCalc',
            'tax-calculator': 'runTaxCalc',
            'credit-card-interest': 'runCCCalc',
            'website-cost': 'runWebCost',
            'freelancer-earning': 'runFreelanceCalc',
            'crypto-profit': 'runCryCalc',
            'roi-calculator': 'runROICalc',
            'insurance-estimator': 'runInsCalc'
        };
        if (runMap[tid] && typeof window[runMap[tid]] === 'function') {
            window[runMap[tid]]();
        }
    }
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
    
    // Update active quote logic (refill tracking if necessary)
    if (!state.currentQuote || quoteLangConfigured !== state.lang) {
        state.currentQuote = getNextRandomQuote();
    }
    const q = state.currentQuote;
    document.getElementById('quote-text').innerText = `"${q.text}"`;
    document.getElementById('quote-author').innerText = `— ${q.author}`;
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
    state.currentQuote = getNextRandomQuote();
    const content = document.getElementById('quote-content');
    content.style.opacity = '0';
    content.style.transform = 'translateY(15px)';
    
    setTimeout(() => {
        const q = state.currentQuote;
        document.getElementById('quote-text').innerText = `"${q.text}"`;
        document.getElementById('quote-author').innerText = `— ${q.author}`;
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
    quoteBag = []; // clear the bag to force new language pick immediately
    state.currentQuote = getNextRandomQuote();
    renderUI();
};

document.getElementById('currency-select').onchange = (e) => {
    const oldCur = state.currency;
    state.currency = e.target.value;
    localStorage.setItem('currency', state.currency);
    console.log(`[Global] Currency changed from ${oldCur} to ${state.currency}`);
    renderUI();
    window.dispatchEvent(new CustomEvent('currencyChanged', { detail: state.currency }));
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
    
    // Update URL hash without jumping if possible
    if(location.hash !== '#' + id) {
        history.pushState(null, null, '#' + id);
    }

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
    // Clear URL hash
    history.pushState(null, null, ' ');
    
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
    const curCode = getSelectedCurrency();
    const cur = curCode; 

    switch(normalizedId) {
        case 'emi-calculator':
            c.innerHTML = `
                <div class="space-y-10">
                    <!-- Advanced Controls Grid -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <!-- Left Panel: Market & Logic Settings -->
                        <div class="p-8 bg-blue-50/30 dark:bg-blue-900/5 border border-blue-100/50 dark:border-blue-900/20 rounded-[2.5rem] space-y-8">
                            <div class="flex items-center justify-between">
                                <h3 class="text-[10px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-2">
                                    <i data-lucide="globe" class="w-3 h-3"></i> Market Alignment
                                </h3>
                                <span class="px-3 py-1 bg-blue-600/10 text-blue-600 rounded-full text-[9px] font-black uppercase tracking-tighter">Bank Grade</span>
                            </div>
                            
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div class="space-y-2">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block pl-1">Jurisdiction</label>
                                    <select id="emi-country" onchange="runEMICalc()" class="w-full p-4 bg-white dark:bg-gray-800 border-2 border-transparent focus:border-blue-500/20 rounded-2xl font-bold outline-none text-sm transition-all shadow-sm">
                                        ${Object.keys(GLOBAL_COUNTRY_CONFIG).map(k => `<option value="${k}" ${k === state.detectedCountry ? 'selected' : ''}>${GLOBAL_COUNTRY_CONFIG[k].name}</option>`).join('')}
                                    </select>
                                </div>
                                <div class="space-y-2">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block pl-1">Currency</label>
                                    <select id="emi-currency" onchange="syncEMIRate(); runEMICalc()" class="w-full p-4 bg-white dark:bg-gray-800 border-2 border-transparent focus:border-blue-500/20 rounded-2xl font-bold outline-none text-sm transition-all shadow-sm">
                                        ${Object.keys(CURRENCIES).map(cx => `<option value="${cx}" ${cx === state.currency ? 'selected' : ''}>${cx} (${CURRENCIES[cx].symbol})</option>`).join('')}
                                    </select>
                                </div>
                                <div class="space-y-2">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block pl-1">Compounding</label>
                                    <select id="emi-freq" onchange="runEMICalc()" class="w-full p-4 bg-white dark:bg-gray-800 border-2 border-transparent focus:border-blue-500/20 rounded-2xl font-bold outline-none text-sm transition-all shadow-sm">
                                        <option value="12">Monthly (Standard)</option>
                                        <option value="4">Quarterly</option>
                                        <option value="2">Semi-Annually</option>
                                        <option value="1">Annually</option>
                                        <option value="365">Daily</option>
                                    </select>
                                </div>
                                <div class="space-y-2">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block pl-1">Day Count</label>
                                    <select id="emi-daycount" onchange="runEMICalc()" class="w-full p-4 bg-white dark:bg-gray-800 border-2 border-transparent focus:border-blue-500/20 rounded-2xl font-bold outline-none text-sm transition-all shadow-sm">
                                        <option value="30/360">30 / 360 (Institutional)</option>
                                        <option value="actual/365">Actual / 365 (Precise)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <!-- Right Panel: Core Inputs -->
                        <div class="p-8 bg-gray-50/50 dark:bg-gray-900 rounded-[2.5rem] border dark:border-gray-800 space-y-8">
                            <div class="flex items-center justify-between">
                                <h3 class="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                    <i data-lucide="calculator" class="w-3 h-3"></i> Principal Parameters
                                </h3>
                                <div class="flex gap-2">
                                    <input type="number" id="emi-ex-rate" value="1" step="0.0001" class="hidden">
                                </div>
                            </div>
                            
                            <div class="space-y-6">
                                <div class="space-y-3">
                                    <div class="flex justify-between items-center px-1">
                                        <label class="text-[11px] font-black text-gray-400 uppercase tracking-widest">Loan Amount</label>
                                        <div class="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full border dark:border-gray-700">
                                            <span class="text-[10px] font-bold text-blue-600" id="emi-p-sym">$</span>
                                            <input type="number" id="emi-p" value="500000" oninput="runEMICalc()" class="w-24 bg-transparent border-none outline-none text-xs font-black text-right">
                                        </div>
                                    </div>
                                    <input type="range" min="10000" max="10000000" step="10000" value="500000" oninput="document.getElementById('emi-p').value = this.value; runEMICalc()" class="w-full accent-blue-600">
                                </div>

                                <div class="grid grid-cols-2 gap-6">
                                    <div class="space-y-3">
                                        <label class="text-[11px] font-black text-gray-400 uppercase tracking-widest block pl-1">Interest Rate (%)</label>
                                        <input type="number" id="emi-r" value="8.5" step="0.1" oninput="runEMICalc()" class="w-full p-4 bg-white dark:bg-gray-800 border rounded-2xl font-black outline-none focus:ring-4 focus:ring-blue-500/10">
                                    </div>
                                    <div class="space-y-3">
                                        <label class="text-[11px] font-black text-gray-400 uppercase tracking-widest block pl-1">Tenure (Years)</label>
                                        <input type="number" id="emi-n" value="15" oninput="runEMICalc()" class="w-full p-4 bg-white dark:bg-gray-800 border rounded-2xl font-black outline-none focus:ring-4 focus:ring-blue-500/10">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Prepayment Workshop -->
                    <div class="p-8 bg-green-50/20 dark:bg-green-900/5 border border-green-100/50 dark:border-green-900/20 rounded-[2.5rem] space-y-6">
                        <div class="flex items-center justify-between">
                            <div class="flex flex-col">
                                <h3 class="text-[10px] font-black text-green-600 uppercase tracking-widest flex items-center gap-2">
                                    <i data-lucide="trending-down" class="w-3 h-3"></i> Prepayment Strategy Workshop
                                </h3>
                                <p class="text-[10px] font-bold text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-tighter">Accelerate debt clearance through periodic logic</p>
                            </div>
                            <button onclick="document.getElementById('emi-prep-extra').classList.toggle('hidden'); lucide.createIcons()" class="text-[9px] font-black text-green-600 uppercase bg-green-600/10 px-4 py-2 rounded-full hover:bg-green-600/20 transition-all flex items-center gap-2">
                                <i data-lucide="plus-circle" class="w-3 h-3"></i> Configuration
                            </button>
                        </div>

                        <div id="emi-prep-extra" class="hidden grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in pt-4 border-t border-green-100 dark:border-green-900/30">
                            <div class="space-y-3">
                                <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest flex justify-between">
                                    Extra Monthly Payment
                                    <span class="text-green-600" id="emi-prep-m-v">$0</span>
                                </label>
                                <input type="range" id="emi-prep-m" min="0" max="100000" step="500" value="0" oninput="document.getElementById('emi-prep-m-v').innerText = formatToolCurrency(this.value); runEMICalc()" class="w-full h-1.5 bg-green-100 rounded-lg appearance-none cursor-pointer accent-green-600">
                            </div>
                            <div class="space-y-3">
                                <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest flex justify-between">
                                    Lump Sum (One-Time)
                                    <span class="text-green-600" id="emi-prep-l-v">$0</span>
                                </label>
                                <div class="flex gap-3">
                                    <input type="number" id="emi-prep-l" value="0" oninput="runEMICalc()" class="flex-grow p-4 bg-white dark:bg-gray-800 border rounded-2xl font-black text-sm outline-none">
                                    <select id="emi-prep-at" onchange="runEMICalc()" class="p-4 bg-white dark:bg-gray-800 border rounded-2xl font-bold text-[10px] uppercase">
                                        <option value="1">Month 1</option>
                                        <option value="12">Year 1</option>
                                        <option value="24">Year 2</option>
                                        <option value="60">Year 5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Financial Intelligence Dashboard -->
                    <div id="emi-box" class="hidden animate-fade-in space-y-8 pt-10 border-t dark:border-gray-800">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div class="p-10 bg-white dark:bg-gray-900 border-2 border-blue-600/10 rounded-[3rem] text-center shadow-2xl shadow-blue-500/5 relative overflow-hidden group">
                                <div class="absolute top-0 left-0 w-full h-1.5 bg-blue-600"></div>
                                <span class="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4 block opacity-60">Base Installment</span>
                                <div class="text-5xl font-black text-gray-900 dark:text-white" id="emi-out">--</div>
                                <div class="mt-4 flex items-center justify-center gap-2">
                                     <span id="emi-burden-dot" class="w-2 h-2 rounded-full bg-blue-600"></span>
                                     <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest" id="emi-burden-label">Interest Burden: 0%</span>
                                </div>
                            </div>

                            <div class="p-10 bg-green-500/5 border-2 border-green-500/20 rounded-[3rem] text-center relative overflow-hidden group">
                                <div class="absolute top-0 left-0 w-full h-1.5 bg-green-500"></div>
                                <span class="text-[10px] font-black text-green-600 uppercase tracking-[0.4em] mb-4 block opacity-60">Interest Savings</span>
                                <div class="text-5xl font-black text-gray-900 dark:text-white" id="emi-saved">--</div>
                                <div class="mt-4 text-[10px] font-black text-green-600 uppercase tracking-widest animate-pulse" id="emi-tenure-save">0 Months Off</div>
                            </div>

                            <div class="p-10 bg-gray-50/50 dark:bg-white/5 border-2 border-gray-100 dark:border-gray-800 rounded-[3rem] text-center">
                                <span class="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-4 block opacity-60">Total Cost</span>
                                <div class="text-5xl font-black text-gray-900 dark:text-white" id="emi-tot-pay">--</div>
                                <div class="mt-4 text-[10px] font-black text-red-500 uppercase tracking-widest" id="emi-tot-int">Interest Component: --</div>
                            </div>
                        </div>

                        <!-- Smart Milestones -->
                        <div id="emi-highlights" class="flex flex-wrap justify-center gap-3">
                            <!-- Dynamic Milestones injected here -->
                        </div>

                        <!-- Schedule Toggle -->
                        <div class="space-y-6">
                            <div class="flex items-center justify-between">
                                <button onclick="document.getElementById('emi-schedule-area').classList.toggle('hidden'); lucide.createIcons()" class="mx-auto flex items-center gap-3 py-4 px-8 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl active:scale-[0.98] transition-all group">
                                    <i data-lucide="list-checks" class="w-4 h-4 group-hover:rotate-12 transition-transform"></i>
                                    Explore Amortization Timeline
                                </button>
                            </div>

                            <div id="emi-schedule-area" class="hidden animate-slide-up bg-white dark:bg-gray-900 border-2 dark:border-gray-800 rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <div class="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-800/50 border-b dark:border-gray-700">
                                    <div class="flex items-center gap-3">
                                        <div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white"><i data-lucide="calendar" class="w-4 h-4"></i></div>
                                        <span class="text-xs font-black uppercase tracking-widest">Full Amortization Forecast</span>
                                    </div>
                                    <button onclick="exportEMISchedule()" class="text-[9px] font-black text-blue-600 hover:underline uppercase tracking-widest flex items-center gap-2"><i data-lucide="download" class="w-3 h-3"></i> Export Report</button>
                                </div>
                                <div class="max-h-[500px] overflow-y-auto custom-scrollbar overflow-x-auto">
                                    <table class="w-full text-left text-sm whitespace-nowrap">
                                        <thead class="sticky top-0 bg-gray-50 dark:bg-gray-900 shadow-sm z-10">
                                            <tr class="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                                <th class="p-6">Month</th>
                                                <th class="p-6 text-right">Principal Paid</th>
                                                <th class="p-6 text-right">Interest Paid</th>
                                                <th class="p-6 text-right">Remaining Balance</th>
                                            </tr>
                                        </thead>
                                        <tbody id="emi-tbody" class="font-mono pt-2 text-gray-700 dark:text-gray-300">
                                            <!-- Dynamic Rows -->
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <!-- AI Intelligence Insights -->
                        <div id="emi-insights-area" class="p-10 bg-blue-600/5 border-2 border-dashed border-blue-600/20 rounded-[3rem] space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/20 animate-pulse">
                                    <i data-lucide="sparkles" class="w-5 h-5"></i>
                                </div>
                                <h3 class="text-xs font-black text-gray-900 dark:text-white uppercase tracking-widest">Financial Intelligence Report</h3>
                            </div>
                            <div id="emi-insights-list" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <!-- Data driven insights -->
                            </div>
                        </div>
                    </div>
                </div>
            `;
            lucide.createIcons();
            break;

        case 'word-counter':
            c.innerHTML = `
                <div class="space-y-8">
                    <div class="flex items-center justify-between">
                        <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Quantitative Linguistic Workshop</label>
                        <div class="flex gap-2">
                             <button onclick="window.runCaseConv('upper')" class="px-3 py-1 bg-gray-50 dark:bg-gray-800 rounded-lg text-[10px] font-black hover:bg-blue-50 transition-colors uppercase">UPPER</button>
                             <button onclick="window.runCaseConv('lower')" class="px-3 py-1 bg-gray-50 dark:bg-gray-800 rounded-lg text-[10px] font-black hover:bg-blue-50 transition-colors uppercase">lower</button>
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
                            <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Chars (Space)</div>
                        </div>
                        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-[1.5rem] border dark:border-gray-700 text-center relative overflow-hidden group">
                            <div class="text-3xl font-black mb-1 group-hover:scale-110 transition-transform" id="wc-c-ns">0</div>
                            <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Chars (No)</div>
                        </div>
                        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-[1.5rem] border dark:border-gray-700 text-center relative overflow-hidden group text-blue-600">
                             <div class="text-3xl font-black mb-1 group-hover:scale-110 transition-transform" id="wc-r">0m</div>
                             <div class="text-[10px] font-black uppercase tracking-widest">Read Time</div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-[1.5rem] border dark:border-gray-700 flex items-center justify-between">
                            <div class="flex flex-col">
                                <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Sentence Load</span>
                                <div id="wc-s" class="text-xl font-black">0</div>
                            </div>
                            <i data-lucide="text-quote" class="text-gray-300 w-8 h-8"></i>
                        </div>
                        <div class="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-[2rem] flex items-center justify-between flex-grow">
                             <div class="flex flex-col">
                                <span class="text-[10px] font-black text-blue-600 uppercase tracking-widest">Target Progress</span>
                                <span class="text-xs font-bold text-gray-600 dark:text-gray-400 tracking-tight">Standard Page (500 Words)</span>
                             </div>
                             <div class="w-1/3 bg-white dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                                <div id="wc-prog" class="w-0 h-full bg-blue-600 transition-all duration-500"></div>
                             </div>
                        </div>
                    </div>
                </div>
            `;
            lucide.createIcons();
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
                                <div class="flex items-center justify-between">
                                     <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Security Grade</span>
                                     <span id="pg-strength" class="text-[10px] font-black uppercase tracking-widest text-green-500">Analyzing...</span>
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-2 gap-4">
                                <label class="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all group">
                                    <input type="checkbox" id="pg-up" checked onchange="runPassGen()" class="w-5 h-5 rounded border-gray-300 text-blue-600">
                                    <span class="text-xs font-bold text-gray-600 dark:text-gray-300 group-hover:text-blue-600">Uppercase</span>
                                </label>
                                <label class="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all group">
                                    <input type="checkbox" id="pg-num" checked onchange="runPassGen()" class="w-5 h-5 rounded border-gray-300 text-blue-600">
                                    <span class="text-xs font-bold text-gray-600 dark:text-gray-300 group-hover:text-blue-600">Numerics</span>
                                </label>
                                <label class="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all group">
                                    <input type="checkbox" id="pg-sym" checked onchange="runPassGen()" class="w-5 h-5 rounded border-gray-300 text-blue-600">
                                    <span class="text-xs font-bold text-gray-600 dark:text-gray-300 group-hover:text-blue-600">Symbols</span>
                                </label>
                                <label class="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all group">
                                    <input type="checkbox" id="pg-low" checked onchange="runPassGen()" class="w-5 h-5 rounded border-gray-300 text-blue-600">
                                    <span class="text-xs font-bold text-gray-600 dark:text-gray-300 group-hover:text-blue-600">Lowercase</span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="flex flex-col justify-center gap-6">
                            <div class="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] border-2 border-dashed border-gray-200 dark:border-gray-700 text-center break-all font-mono text-2xl font-black select-all group relative min-h-[140px] flex items-center justify-center overflow-hidden" id="pg-out" onclick="copyText(this)">
                                 <div class="animate-pulse text-gray-300 italic">Generating Secure Key...</div>
                                 <div class="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.4rem] flex items-center justify-center pointer-events-none text-[10px] text-blue-600 font-black tracking-[0.2em]">CLICK TO COPY SECURELY</div>
                            </div>
                            <div class="grid grid-cols-1 gap-3">
                                <button onclick="runPassGen()" class="w-full py-5 bg-blue-600 text-white rounded-3xl font-black shadow-2xl shadow-blue-600/20 active:scale-[0.98] transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                                    <i data-lucide="refresh-cw" class="w-4 h-4"></i> Rotate Secret Engine
                                </button>
                                <p class="text-[9px] text-center text-gray-400 font-bold uppercase tracking-tighter">Generated using CSPRNG Cryptographic Logic (100% Client-Side)</p>
                            </div>
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
                             <div class="p-8 bg-indigo-50 dark:bg-indigo-900/10 rounded-[2.5rem] border-2 border-indigo-100 dark:border-indigo-900/20 flex flex-col items-center justify-center gap-2">
                                <span class="text-[10px] font-black text-indigo-600 uppercase tracking-widest text-center">Next Orbit (Birthday)</span>
                                <div id="age-next-bday" class="text-xl font-black text-gray-900 dark:text-white text-center tracking-tight">-- Days Remaining</div>
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
                                <input type="range" id="qr-size" min="100" max="1000" step="50" value="300" oninput="document.getElementById('qr-size-v').innerText=this.value+'px'" class="w-full cursor-pointer">
                            </div>
                            <button onclick="runQRGen()" class="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] font-black shadow-xl shadow-blue-600/30 active:scale-[0.98] transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-3">
                                <i data-lucide="qr-code" class="w-4 h-4"></i> Generate QR Matrix
                            </button>
                        </div>
                        <div id="qr-box" class="hidden animate-fade-in flex flex-col items-center justify-center gap-6 p-6 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] border-2 border-dashed border-gray-200 dark:border-gray-700">
                            <div class="bg-white p-4 rounded-3xl shadow-xl">
                                <img id="qr-img" class="w-full h-full object-contain max-w-[200px] transition-transform hover:scale-105 duration-500">
                            </div>
                            <a id="qr-down" download="custom-qr.png" class="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl text-[10px] font-black shadow-lg uppercase tracking-widest flex items-center gap-2 border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                <i data-lucide="download" class="w-3 h-3"></i> Save Source
                            </a>
                        </div>
                    </div>
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
                        <input type="range" id="sip-step" min="0" max="25" value="0" class="w-full accent-blue-600" oninput="document.getElementById('sip-step-v').innerText = this.value + '%'; runSIPCalc()">
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="p-10 bg-blue-600 text-white rounded-[2.5rem] shadow-2xl space-y-8">
                             <div class="text-center space-y-2">
                                <span class="text-[10px] font-black text-blue-200 uppercase tracking-[0.4em] block">Estimated Future Wealth</span>
                                <div id="sip-out" class="text-5xl font-black">---</div>
                             </div>
                             <div class="grid grid-cols-2 gap-6 pt-6 border-t border-blue-500/30">
                                <div class="text-center">
                                    <span class="text-[8px] font-black text-blue-200 uppercase tracking-widest block mb-1">Invested Capital</span>
                                    <span id="sip-cap" class="text-xl font-bold">---</span>
                                </div>
                                <div class="text-center">
                                    <span class="text-[8px] font-black text-blue-200 uppercase tracking-widest block mb-1">Estimated Gains</span>
                                    <span id="sip-gain" class="text-xl font-bold">---</span>
                                </div>
                             </div>
                        </div>

                        <div id="sip-insights-area" class="grid grid-cols-1 gap-4"></div>
                    </div>

                    <div class="bg-white dark:bg-gray-800/20 rounded-3xl border dark:border-gray-800 overflow-hidden">
                        <table class="w-full text-left text-xs">
                            <thead class="bg-gray-50 dark:bg-gray-900 font-black text-gray-400 uppercase tracking-widest">
                                <tr>
                                    <th class="p-4">Year</th>
                                    <th class="p-4 text-right">Investment</th>
                                    <th class="p-4 text-right">Yield</th>
                                    <th class="p-4 text-right">Balance</th>
                                </tr>
                            </thead>
                            <tbody id="sip-tbody" class="divide-y dark:divide-gray-800"></tbody>
                        </table>
                    </div>
                </div>
            `;
            runSIPCalc();
            lucide.createIcons();
            break;

        case 'tax-calculator':
             c.innerHTML = `
                <div class="space-y-10">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <!-- Jurisdiction Grid -->
                        <div class="p-8 bg-blue-50/20 dark:bg-blue-900/5 border border-blue-100 dark:border-blue-900/20 rounded-[3rem] space-y-6">
                            <h3 class="text-[10px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-2">
                                <i data-lucide="landmark" class="w-3 h-3"></i> Tax Jurisdiction
                            </h3>
                            <select id="tax-country" onchange="window.setManualCountry(this.value)" class="w-full p-5 bg-white dark:bg-gray-800 border-2 border-transparent focus:border-blue-500/20 rounded-2xl font-black outline-none text-sm transition-all shadow-xl">
                                ${Object.keys(GLOBAL_COUNTRY_CONFIG).map(k => `<option value="${k}" ${k === state.detectedCountry ? 'selected' : ''}>${GLOBAL_COUNTRY_CONFIG[k].name}</option>`).join('')}
                            </select>
                            <div id="tax-detection-msg" class="${state.isManualCountry ? 'hidden' : ''} mt-2 flex items-center gap-2">
                                <span class="text-[9px] font-bold text-blue-500 uppercase tracking-widest bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800">
                                    ${state.detectedCountry === 'GEN' ? 'Using Global Financial Mode 🌐' : `Detected location: ${GLOBAL_COUNTRY_CONFIG[state.detectedCountry].name} ${COUNTRY_FLAGS[state.detectedCountry] || '📍'}`}
                                </span>
                                <button onclick="this.parentElement.remove()" class="text-[9px] font-black text-gray-400 hover:text-gray-600 uppercase transition-colors underline">Change</button>
                            </div>
                        </div>

                        <!-- Income Input Area -->
                        <div class="p-8 bg-gray-50/50 dark:bg-gray-900 rounded-[3rem] border dark:border-gray-800 space-y-6">
                             <h3 class="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                <i data-lucide="wallet" class="w-3 h-3"></i> Annual Gross Income
                            </h3>
                            <div class="relative">
                                <div class="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-black text-gray-300" id="tax-currency-sym">$</div>
                                <input type="number" id="tax-in" value="1200000" oninput="runTaxCalc()" class="w-full p-8 pl-16 bg-white dark:bg-gray-800 border-2 border-transparent focus:border-blue-500/20 rounded-2xl font-black text-4xl outline-none transition-all shadow-inner">
                            </div>
                            <div id="tax-us-addon" class="hidden animate-fade-in space-y-4">
                                <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block pl-1">Monthly Local/State Tax (%)</label>
                                <input type="number" id="tax-state-rate" value="5" step="0.1" oninput="runTaxCalc()" class="w-full p-4 bg-white dark:bg-gray-800 border-2 border-transparent rounded-2xl font-bold outline-none">
                            </div>
                        </div>
                    </div>

                    <button onclick="runTaxCalc()" class="w-full py-7 bg-blue-600 hover:bg-blue-700 text-white rounded-[3rem] font-black shadow-2xl shadow-blue-600/30 active:scale-[0.98] transition-all uppercase tracking-widest text-[11px] flex items-center justify-center gap-2">
                        <i data-lucide="coins" class="w-4 h-4"></i> Run Compliance Engine
                    </button>

                    <!-- Tax Dashboard -->
                    <div id="tax-box" class="hidden animate-fade-in space-y-10">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                             <div class="p-10 bg-white dark:bg-gray-900 border-2 border-red-600/10 rounded-[3rem] text-center shadow-2xl relative overflow-hidden group">
                                <div class="absolute top-0 left-0 w-full h-1.5 bg-red-600"></div>
                                <span class="text-[10px] font-black text-red-600 uppercase tracking-[0.4em] mb-4 block opacity-60">Total Tax Liability</span>
                                <div class="text-5xl font-black text-gray-900 dark:text-white" id="tax-out">--</div>
                                <div class="mt-4 text-[10px] font-black text-gray-400 uppercase tracking-widest" id="tax-rate">Effective Rate: 0%</div>
                            </div>
                            
                            <div class="p-10 bg-green-500/5 border-2 border-green-500/20 rounded-[3rem] text-center">
                                <div class="absolute top-0 left-0 w-full h-1.5 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span class="text-[10px] font-black text-green-600 uppercase tracking-[0.4em] mb-4 block opacity-60">Monthly In-Hand</span>
                                <div class="text-5xl font-black text-gray-900 dark:text-white" id="tax-inhand">--</div>
                                <div class="mt-4 text-[10px] font-black text-green-600 uppercase tracking-widest">Post-Deductions</div>
                            </div>

                            <div class="p-10 bg-gray-50/50 dark:bg-white/5 border-2 border-gray-100 dark:border-gray-800 rounded-[3rem] flex flex-col justify-center">
                                <div class="space-y-4">
                                     <div class="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                        <span class="text-gray-400">Std. Deduction</span>
                                        <span class="text-blue-600" id="tax-ded-val">--</span>
                                     </div>
                                     <div class="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                        <span class="text-gray-400">Total Deductibles</span>
                                        <span class="text-gray-900 dark:text-white" id="tax-tot-ded">--</span>
                                     </div>
                                </div>
                            </div>
                        </div>

                        <!-- India Compliance Table (Specialized) -->
                        <div id="tax-india-compliance" class="hidden animate-slide-up space-y-6">
                            <div class="flex items-center gap-4">
                                <h3 class="text-xs font-black text-gray-400 uppercase tracking-widest">Income Tax Slab Breakdown (FY 24-25)</h3>
                                <div class="h-px bg-gray-100 dark:bg-gray-800 flex-grow"></div>
                            </div>
                            <div class="bg-white dark:bg-gray-900 border-2 dark:border-gray-800 rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <table class="w-full text-left text-sm">
                                    <thead class="bg-gray-50 dark:bg-gray-800">
                                        <tr class="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                            <th class="p-6">Income Slab</th>
                                            <th class="p-6 text-center">Tax Rate</th>
                                            <th class="p-6 text-right">Tax Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tax-tbody" class="font-bold divide-y dark:divide-gray-800">
                                        <!-- Indian Slabs -->
                                    </tbody>
                                    <tfoot class="bg-gray-100/50 dark:bg-black/20">
                                        <tr>
                                            <td colspan="2" class="p-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Cess (4% Health & Edu)</td>
                                            <td class="p-6 text-right font-mono font-black" id="tax-cess">--</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>

                        <!-- Generic Breakdown -->
                        <div id="tax-generic-breakdown" class="hidden space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="tax-gen-slabs">
                                <!-- Generic slabs -->
                            </div>
                        </div>

                         <!-- AI Intelligence Insights -->
                        <div id="tax-insights-area" class="p-10 bg-indigo-600/5 border-2 border-dashed border-indigo-600/20 rounded-[3rem] space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                                    <i data-lucide="shield-check" class="w-5 h-5"></i>
                                </div>
                                <h3 class="text-xs font-black text-gray-900 dark:text-white uppercase tracking-widest">Tax Compliance Auditor Insights</h3>
                            </div>
                            <div id="tax-insights-list" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <!-- Data driven insights -->
                            </div>
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
                            <input type="number" id="cc-p" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none shadow-sm transition-all" value="2500" oninput="runCCCalc()">
                        </div>
                        <div class="space-y-3">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Card APR (%)</label>
                            <input type="number" id="cc-r" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none shadow-sm transition-all" value="19.99" oninput="runCCCalc()">
                        </div>
                        <div class="space-y-3">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Monthly Payment (${cur})</label>
                            <input type="number" id="cc-m" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none shadow-sm transition-all" value="100" oninput="runCCCalc()">
                        </div>
                        <div class="space-y-3">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Target Balance (${cur})</label>
                            <input type="number" id="cc-t" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none shadow-sm transition-all" value="0" oninput="runCCCalc()">
                        </div>
                    </div>

                    <div id="cc-box" class="hidden animate-fade-in space-y-10">
                        <div class="p-10 bg-red-600 text-white rounded-[2.5rem] shadow-2xl space-y-8">
                             <div class="text-center space-y-2">
                                <span class="text-[10px] font-black text-red-200 uppercase tracking-[0.4em] block">Total Interest Burden</span>
                                <div id="cc-total-i" class="text-6xl font-black">---</div>
                             </div>
                             <div class="grid grid-cols-2 gap-6 pt-6 border-t border-red-500/30">
                                <div class="text-center">
                                    <span class="text-[8px] font-black text-red-200 uppercase tracking-widest block mb-1">Time to Target</span>
                                    <span id="cc-months" class="text-xl font-bold">---</span>
                                </div>
                                <div class="text-center">
                                    <span class="text-[8px] font-black text-red-200 uppercase tracking-widest block mb-1">Daily Accrual</span>
                                    <span id="cc-daily" class="text-xl font-bold">---</span>
                                </div>
                             </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div id="cc-insights" class="grid grid-cols-1 gap-4">
                                <!-- AI Financial Insights -->
                            </div>
                            <div class="space-y-4">
                                <h3 class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Financial Impact Analysis</h3>
                                <div class="space-y-3">
                                    <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border dark:border-gray-800 flex justify-between items-center">
                                        <span class="text-[10px] font-black text-gray-400 uppercase">Effective ROI</span>
                                        <span id="cc-roi" class="text-xs font-bold text-red-500">---</span>
                                    </div>
                                    <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border dark:border-gray-800 flex justify-between items-center">
                                        <span class="text-[10px] font-black text-gray-400 uppercase">Principal Ratio</span>
                                        <span id="cc-ratio" class="text-xs font-bold text-gray-600 dark:text-gray-400">---</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            runCCCalc();
            lucide.createIcons();
            break;
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
                        <div class="text-6xl font-black mb-2" id="web-total">---</div>
                        <p class="text-[10px] font-black text-blue-400 uppercase tracking-widest">Pricing model: Global Flat-Rate Basis</p>
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
                            <div id="fr-month" class="text-4xl font-black text-blue-600">---</div>
                         </div>
                         <div class="p-8 bg-gray-900 text-white rounded-[2.5rem] text-center shadow-xl">
                            <span class="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-4 text-blue-400">Annual Projection</span>
                            <div id="fr-year" class="text-4xl font-black">---</div>
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
                             <div id="cry-profit" class="text-5xl font-black">---</div>
                        </div>
                        <div class="flex justify-center gap-10">
                             <div class="text-center">
                                <span class="text-[8px] font-black text-gray-500 uppercase tracking-widest block mb-1">Percentage</span>
                                <span id="cry-perc" class="text-lg font-black text-green-400">+0%</span>
                             </div>
                             <div class="text-center">
                                <span class="text-[8px] font-black text-gray-500 uppercase tracking-widest block mb-1">Total Balance</span>
                                <span id="cry-bal" class="text-lg font-black">---</span>
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
                                <span id="roi-p" class="text-xl font-black text-white">---</span>
                            </div>
                            <div class="text-center">
                                <span class="text-[8px] font-black text-blue-200 uppercase tracking-widest block mb-1">ROAS</span>
                                <span id="roi-a" class="text-xl font-black text-white">---</span>
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
                         <div id="ins-out" class="text-6xl font-black">---</div>
                         <p class="text-[8px] font-bold text-blue-300 uppercase tracking-widest">Actuarial quote based on risk profile</p>
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
                                    <select id="comp-format" class="w-full p-4 bg-gray-50 dark:bg-gray-900 border-2 border-transparent dark:border-gray-800 rounded-2xl font-bold outline-none focus:border-blue-500/20 focus:ring-4 focus:ring-blue-500/5 transition-all text-sm cursor-pointer appearance-none">
                                        <option value="original">Keep Original Format</option>
                                        <option value="image/jpeg">Convert to JPEG (Ideal for Photos)</option>
                                        <option value="image/webp">Convert to WEBP (Best for Performance)</option>
                                        <option value="image/png">Convert to PNG (Lossless/Icons)</option>
                                        <option value="image/avif">Convert to AVIF (Next-Gen Compression)</option>
                                        <option value="image/bmp">Convert to BMP (Uncompressed Legacy)</option>
                                        <option value="image/gif">Convert to GIF (Static Image)</option>
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
                                <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Universal Magnitude</label>
                                <input type="number" id="uc-in" oninput="runUnitConv()" class="w-full p-8 bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-blue-500/20 rounded-[2.5rem] font-black text-3xl outline-none focus:ring-4 focus:ring-blue-500/5 transition-all" placeholder="100.00">
                            </div>
                            <div class="space-y-4">
                                <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Format Precision</label>
                                <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-[2rem] space-y-6">
                                    <div class="flex items-center justify-between">
                                        <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Decimals</span>
                                        <div class="flex items-center gap-3">
                                            <button onclick="adjustUCPrec(-1)" class="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-sm border dark:border-gray-700 hover:bg-blue-50 transition-colors">-</button>
                                            <span id="uc-dec-v" class="w-8 text-center font-black text-blue-600 text-lg">2</span>
                                            <button onclick="adjustUCPrec(1)" class="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-sm border dark:border-gray-700 hover:bg-blue-50 transition-colors">+</button>
                                        </div>
                                    </div>
                                    <label class="flex items-center justify-between cursor-pointer group">
                                        <div class="flex flex-col">
                                            <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors">Scientific Notation</span>
                                            <span class="text-[8px] text-gray-400 font-bold">Standard exponential output</span>
                                        </div>
                                        <input type="checkbox" id="uc-sci" onchange="runUnitConv()" class="w-5 h-5 rounded border-gray-300 text-blue-600">
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        <div class="space-y-8">
                            <div class="p-6 bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-[2rem] grid grid-cols-2 gap-4">
                                <div class="space-y-3">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Source Entity</label>
                                    <select id="uc-f" onchange="runUnitConv()" class="w-full p-4 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none text-sm appearance-none"></select>
                                </div>
                                <div class="space-y-3">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Target Entity</label>
                                    <select id="uc-t" onchange="runUnitConv()" class="w-full p-4 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none text-sm appearance-none"></select>
                                </div>
                            </div>
                            
                            <div class="tool-result flex flex-col items-center justify-center py-12 bg-blue-600 text-white rounded-[3rem] shadow-2xl shadow-blue-600/30 overflow-hidden relative group">
                                <div class="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                <span class="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-60">Standard Metric Result</span>
                                <div class="flex flex-col items-center gap-1">
                                    <div class="text-6xl font-black tracking-tighter" id="uc-out">0.00</div>
                                    <div id="uc-unit-name" class="text-xs font-black uppercase tracking-[0.2em] opacity-40 mt-2">---</div>
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
                    <div id="pdf-upload" class="w-full h-48 border-4 border-dashed border-gray-100 dark:border-gray-800 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center group hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-all cursor-pointer relative" onclick="document.getElementById('file-in').click()">
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
                    <div id="pdf-split-upload" class="w-full h-48 border-4 border-dashed border-gray-100 dark:border-gray-800 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center group hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-all cursor-pointer relative" onclick="document.getElementById('file-in').click()">
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
                    <div id="resizer-upload" class="w-full h-48 border-4 border-dashed border-gray-100 dark:border-gray-800 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center group hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-all cursor-pointer relative" onclick="document.getElementById('file-in').click()">
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
window.syncEMIRate = () => {
    const curCode = document.getElementById('emi-currency')?.value || state.currency;
    const rateEl = document.getElementById('emi-ex-rate');
    const currency = CURRENCIES[curCode];
    
    if (rateEl) {
        // Sync to market rate
        rateEl.value = currency.rate;
    }
};

window.emiViewMode = 'abs';
window.runEMICalc = () => {
    const pVal = document.getElementById('emi-p').value;
    const rVal = document.getElementById('emi-r').value;
    const nVal = document.getElementById('emi-n').value;
    const extraMonthlyVal = document.getElementById('emi-prep')?.value || 0;
    const lumpSumVal = document.getElementById('emi-lump-sum')?.value || 0;
    const lumpSumMonth = parseInt(document.getElementById('emi-lump-month')?.value || '1', 10);
    
    const targetCurrency = document.getElementById('emi-currency')?.value || state.currency;
    const compoundingFreq = parseInt(document.getElementById('emi-freq')?.value || '12', 10);
    const dayCount = document.getElementById('emi-daycount')?.value || '30/360';
    const exRateVal = document.getElementById('emi-ex-rate')?.value || 1;
    
    const box = document.getElementById('emi-box');
    const out = document.getElementById('emi-out');
    if (!box) return;

    const P = new Decimal(pVal || 0);
    const annRateInput = new Decimal(rVal || 0);
    const tenureYears = new Decimal(nVal || 0);
    const extraMonthly = new Decimal(extraMonthlyVal || 0);
    const lumpSum = new Decimal(lumpSumVal || 0);
    const exRate = new Decimal(exRateVal || 1);

    if (P.lte(0) || annRateInput.lt(0) || tenureYears.lte(0)) {
        if (!box.classList.contains('hidden')) out.innerText = 'Error';
        return;
    }

    const totalMonths = tenureYears.mul(12).round().toNumber();
    const R = annRateInput.div(100);
    
    let r_eff;
    if (R.isZero()) {
        r_eff = new Decimal(0);
    } else {
        const m = new Decimal(compoundingFreq);
        r_eff = R.div(m).add(1).pow(m.div(12)).sub(1);
    }

    let emi;
    if (r_eff.isZero()) {
        emi = P.div(totalMonths);
    } else {
        const factor = r_eff.add(1).pow(totalMonths);
        emi = P.mul(r_eff).mul(factor).div(factor.sub(1));
    }
    
    const emiRounded = emi.toDecimalPlaces(2, Decimal.ROUND_HALF_UP);
    
    let baselineTotalInterest = new Decimal(0);
    let tempBal = P;
    for (let i = 1; i <= totalMonths; i++) {
        let interest = tempBal.mul(r_eff).toDecimalPlaces(2, Decimal.ROUND_HALF_UP);
        let principal = emiRounded.sub(interest).toDecimalPlaces(2, Decimal.ROUND_HALF_UP);
        if (i === totalMonths) principal = tempBal;
        baselineTotalInterest = baselineTotalInterest.add(interest);
        tempBal = tempBal.sub(principal);
    }

    let currentBalance = P;
    let totalInterestPaid = new Decimal(0);
    let scheduleRows = '';
    const scheduleData = [];
    let breakEvenMonth = null;
    let halfPaidMonth = null;
    const halfPrincipal = P.div(2);

    for (let i = 1; i <= 600; i++) {
        let interest = currentBalance.mul(r_eff).toDecimalPlaces(2, Decimal.ROUND_HALF_UP);
        let principalRepayment;
        
        let paymentThisMonth = emiRounded.plus(extraMonthly);
        if (i === lumpSumMonth) {
            paymentThisMonth = paymentThisMonth.plus(lumpSum);
        }

        if (currentBalance.lte(paymentThisMonth.minus(interest))) {
            principalRepayment = currentBalance;
            currentBalance = new Decimal(0);
            totalInterestPaid = totalInterestPaid.plus(interest);
            scheduleData.push({ month: i, principal: principalRepayment, interest: interest, balance: new Decimal(0) });
            break;
        } else {
            principalRepayment = paymentThisMonth.minus(interest).toDecimalPlaces(2, Decimal.ROUND_HALF_UP);
            currentBalance = currentBalance.minus(principalRepayment).toDecimalPlaces(2, Decimal.ROUND_HALF_UP);
            totalInterestPaid = totalInterestPaid.plus(interest);
        }

        if (!breakEvenMonth && principalRepayment.gt(interest)) breakEvenMonth = i;
        if (!halfPaidMonth && P.minus(currentBalance).gte(halfPrincipal)) halfPaidMonth = i;

        scheduleData.push({ month: i, principal: principalRepayment, interest: interest, balance: currentBalance });

        if (i <= 480) {
            scheduleRows += `
                <tr class="border-b dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td class="p-4 font-bold text-gray-500 text-xs">${i}</td>
                    <td class="p-4 text-right text-green-600 text-xs font-mono">${formatEMICurrency(principalRepayment.times(exRate).toNumber(), targetCurrency)}</td>
                    <td class="p-4 text-right text-red-500 text-xs font-mono">${formatEMICurrency(interest.times(exRate).toNumber(), targetCurrency)}</td>
                    <td class="p-4 text-right font-bold text-gray-900 dark:text-gray-100 text-xs font-mono">${formatEMICurrency(currentBalance.times(exRate).toNumber(), targetCurrency)}</td>
                </tr>
            `;
        }
    }

    const totalPayment = P.plus(totalInterestPaid);
    const savings = baselineTotalInterest.minus(totalInterestPaid);
    const monthsSaved = totalMonths - scheduleData.length;

    box.classList.remove('hidden');
    out.innerText = formatEMICurrency(emiRounded.times(exRate).toNumber(), targetCurrency);
    document.getElementById('emi-saved').innerText = formatEMICurrency(savings.times(exRate).toNumber(), targetCurrency);
    document.getElementById('emi-new-tenure').innerText = `${scheduleData.length} Months`;
    document.getElementById('emi-tot-int').innerText = formatEMICurrency(totalInterestPaid.times(exRate).toNumber(), targetCurrency);
    document.getElementById('emi-tot-pay').innerText = formatEMICurrency(totalPayment.times(exRate).toNumber(), targetCurrency);

    const milestonesArea = document.getElementById('emi-highlights');
    if (milestonesArea) {
        let mHtml = '';
        if (breakEvenMonth) mHtml += `<div class="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full text-[10px] font-black text-blue-600 flex items-center gap-2 border border-blue-100"><i data-lucide="zap" class="w-3 h-3"></i> Break-even at Month ${breakEvenMonth}</div>`;
        if (halfPaidMonth) mHtml += `<div class="px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full text-[10px] font-black text-green-600 flex items-center gap-2 border border-green-100"><i data-lucide="check" class="w-3 h-3"></i> 50% Principal at Month ${halfPaidMonth}</div>`;
        if (monthsSaved > 0) mHtml += `<div class="px-4 py-2 bg-amber-50 dark:bg-amber-900/20 rounded-full text-[10px] font-black text-amber-600 flex items-center gap-2 border border-amber-100"><i data-lucide="clock" class="w-3 h-3"></i> Retired ${monthsSaved} Months Early</div>`;
        milestonesArea.innerHTML = mHtml;
        lucide.createIcons();
    }

    const insightArea = document.getElementById('emi-insights-area');
    if (insightArea) {
        const firstYearInterest = scheduleData.slice(0, 12).reduce((sum, s) => sum.plus(s.interest), new Decimal(0));
        const firstYearPrincipal = scheduleData.slice(0, 12).reduce((sum, s) => sum.plus(s.principal), new Decimal(0));
        const intRatio = firstYearInterest.div(firstYearInterest.plus(firstYearPrincipal)).times(100);
        
        const insights = [
            { icon: 'shield-alert', title: 'Interest Heavy Phase', desc: `Warning: ${intRatio.toFixed(1)}% of your payments in Year 1 are interest. Consider lump-sum payments now to maximize savings.` },
            { icon: 'trending-down', title: 'Prepayment Efficacy', desc: `Your current strategy saves ${formatEMICurrency(savings.times(exRate).toNumber(), targetCurrency)} in total interest compared to the base tenure.` },
            { icon: 'activity', title: 'Cost of Capital', desc: `Total interest burden is ${totalInterestPaid.div(P).times(100).toFixed(1)}% of the original principal amount.` }
        ];

        insightArea.innerHTML = insights.map(i => `
            <div class="p-4 bg-white dark:bg-black/20 rounded-3xl border dark:border-gray-800 flex gap-4">
                <div class="text-blue-600"><i data-lucide="${i.icon}" class="w-5 h-5"></i></div>
                <div>
                     <h5 class="text-[10px] font-black uppercase text-gray-900 dark:text-white mb-1">${i.title}</h5>
                     <p class="text-[9px] font-bold text-gray-400 leading-tight">${i.desc}</p>
                </div>
            </div>
        `).join('');
        lucide.createIcons();
    }

    const tbody = document.getElementById('emi-tbody');
    if (tbody) tbody.innerHTML = scheduleRows;

    const chartSchedule = scheduleData.map(s => ({
        month: s.month,
        principal: s.principal.times(exRate).toNumber(),
        interest: s.interest.times(exRate).toNumber(),
        balance: s.balance.times(exRate).toNumber(),
        basePrincipal: s.principal.toNumber()
    }));
    updateEMICharts(P.times(exRate).toNumber(), totalInterestPaid.times(exRate).toNumber(), chartSchedule, breakEvenMonth, halfPaidMonth, emiRounded.times(exRate).toNumber(), targetCurrency);
};

const formatEMICurrency = (v, code) => {
    const currency = CURRENCIES[code] || CURRENCIES.USD;
    return new Intl.NumberFormat(currency.locale, {
        style: 'currency',
        currency: code,
        maximumFractionDigits: currency.decimals !== undefined ? currency.decimals : 0
    }).format(v);
};

const updateEMICharts = (principal, interest, schedule, breakEven, halfPaid, monthlyInstallment, currencyCode) => {
    const pieCtx = document.getElementById('emi-pie-chart');
    const lineCtx = document.getElementById('emi-line-chart');
    if (!pieCtx || !lineCtx) return;

    if (state.emiCharts.pie) state.emiCharts.pie.destroy();
    if (state.emiCharts.line) state.emiCharts.line.destroy();

    const isDark = document.documentElement.classList.contains('dark');
    const textColor = isDark ? '#9ca3af' : '#4b5563';
    const gridColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';

    state.emiCharts.pie = new Chart(pieCtx, {
        type: 'doughnut',
        data: {
            labels: ['Principal', 'Interest'],
            datasets: [{
                data: [principal, interest],
                backgroundColor: ['#10b981', '#f97316'],
                hoverBackgroundColor: ['#059669', '#ea580c'],
                borderWidth: 0,
                spacing: 2
            }]
        },
        options: {
            cutout: '75%',
            plugins: {
                legend: { position: 'bottom', labels: { color: textColor, font: { weight: '600', size: 10 }, padding: 20 } },
                tooltip: {
                    callbacks: { label: (ctx) => ` ${ctx.label}: ${formatEMICurrency(ctx.raw, currencyCode)} (${((ctx.raw / (principal + interest)) * 100).toFixed(1)}%)` }
                }
            }
        }
    });

    const isPctMode = window.emiViewMode === 'pct';
    const labels = schedule.map(s => `M${s.month}`);
    
    // Gradients
    const ctx = lineCtx.getContext('2d');
    const balanceGradient = ctx.createLinearGradient(0, 0, 0, 300);
    balanceGradient.addColorStop(0, 'rgba(59, 130, 246, 0.4)');
    balanceGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

    const annotations = {};
    if (breakEven) {
        annotations.breakEvenLine = {
            type: 'line',
            xMin: breakEven - 1,
            xMax: breakEven - 1,
            borderColor: '#3b82f6',
            borderWidth: 2,
            borderDash: [6, 6],
            label: {
                display: true,
                content: 'Break-even Point',
                position: 'start',
                backgroundColor: 'rgba(59, 130, 246, 0.8)',
                font: { size: 9, weight: 'bold' }
            }
        };
    }
    if (halfPaid) {
        annotations.halfPaidLine = {
            type: 'line',
            xMin: halfPaid - 1,
            xMax: halfPaid - 1,
            borderColor: '#10b981',
            borderWidth: 2,
            borderDash: [6, 6],
            label: {
                display: true,
                content: '50% Retired',
                position: 'center',
                backgroundColor: 'rgba(16, 185, 129, 0.8)',
                font: { size: 9, weight: 'bold' }
            }
        };
    }

    state.emiCharts.line = new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Remaining Balance',
                    data: schedule.map(s => isPctMode ? (s.balance / principal * 100) : s.balance),
                    borderColor: '#3b82f6',
                    backgroundColor: balanceGradient,
                    fill: !isPctMode,
                    tension: 0.4,
                    pointRadius: 0,
                    borderWidth: 3
                },
                {
                    label: 'Principal Paid',
                    data: schedule.map(s => isPctMode ? (s.principal / monthlyInstallment * 100) : s.principal),
                    borderColor: '#10b981',
                    tension: 0.4,
                    pointRadius: 0,
                    borderWidth: 2
                },
                {
                    label: 'Interest Paid',
                    data: schedule.map(s => isPctMode ? (s.interest / monthlyInstallment * 100) : s.interest),
                    borderColor: '#f97316',
                    tension: 0.4,
                    pointRadius: 0,
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: { point: { hoverRadius: 6, hoverBorderWidth: 2, hoverBorderColor: '#ffffff' } },
            scales: {
                x: { grid: { display: false }, ticks: { color: textColor, font: { size: 9 }, autoSkip: true, maxTicksLimit: 12 } },
                y: {
                    beginAtZero: true,
                    grid: { color: gridColor },
                    ticks: {
                        color: textColor,
                        font: { size: 9 },
                        callback: (v) => isPctMode ? `${v}%` : formatEMICurrency(v, currencyCode).split('.')[0]
                    }
                }
            },
            plugins: {
                annotation: { annotations: annotations },
                legend: { position: 'top', align: 'end', labels: { boxWidth: 6, usePointStyle: true, color: textColor, font: { weight: '800', size: 9 } } },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: isDark ? '#111827' : '#ffffff',
                    titleColor: isDark ? '#ffffff' : '#111827',
                    bodyColor: textColor,
                    borderColor: isDark ? '#374151' : '#e5e7eb',
                    borderWidth: 1,
                    padding: 12,
                    cornerRadius: 12,
                    callbacks: {
                        label: (ctx) => {
                            const val = ctx.raw;
                            if (isPctMode) return ` ${ctx.dataset.label}: ${val.toFixed(1)}% of Installment`;
                            return ` ${ctx.dataset.label}: ${formatEMICurrency(val, currencyCode)}`;
                        },
                        footer: (items) => {
                            const i = items[0].dataIndex;
                            const s = schedule[i];
                            const intPct = ((s.interest / (s.interest + s.basePrincipal)) * 100).toFixed(0);
                            return `\n${intPct}% of payment is Interest this month.`;
                        }
                    },
                    footerFont: { size: 10, weight: 'normal', style: 'italic' }
                }
            },
            interaction: { mode: 'index', intersect: false }
        }
    });
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
    const inputVal = document.getElementById('uc-in').value;
    if (!inputVal) return;
    
    const v = new Decimal(inputVal || 0);
    const f_el = document.getElementById('uc-f');
    const t_el = document.getElementById('uc-t');
    const f = f_el.value;
    const t = t_el.value;
    const useSci = document.getElementById('uc-sci')?.checked;
    
    // Multipliers relative to Meters (Length) or Kilograms (Mass)
    const units = {
        km: new Decimal(1000), m: new Decimal(1), cm: new Decimal(0.01), mm: new Decimal(0.001), 
        mi: new Decimal(1609.344), yd: new Decimal(0.9144), ft: new Decimal(0.3048), in: new Decimal(0.0254),
        kg: new Decimal(1), g: new Decimal(0.001), lb: new Decimal(0.45359237), oz: new Decimal(0.028349523125)
    };
    
    let res = new Decimal(0);
    const isTemp = (u) => ['c', 'f', 'k'].includes(u);
    
    if (isTemp(f) || isTemp(t)) {
        if (!isTemp(f) || !isTemp(t)) {
            res = new Decimal(0);
        } else {
            // High-precision Temperature Conversion
            let c = v;
            if (f === 'f') c = v.minus(32).times(5).div(9);
            if (f === 'k') c = v.minus(273.15);
            
            if (t === 'c') res = c;
            if (t === 'f') res = c.times(9).div(5).plus(32);
            if (t === 'k') res = c.plus(273.15);
        }
    } else {
        // Source -> Base -> Target (Avoiding precision drift)
        const sourceMult = units[f] || new Decimal(1);
        const targetMult = units[t] || new Decimal(1);
        res = v.mul(sourceMult).div(targetMult);
    }
    
    const out = document.getElementById('uc-out');
    const label = document.getElementById('uc-unit-name');
    
    if (useSci) {
        out.innerText = res.toExponential(ucPrec);
    } else {
        out.innerText = res.toFixed(ucPrec, Decimal.ROUND_HALF_UP);
    }
    
    label.innerText = t_el.options[t_el.selectedIndex]?.text || '';
    
    // Performance consistency check
    if (f === t && !res.equals(v)) {
        out.innerText = v.toString(); // Correction for identical unit maps
    }
};

window.runWordCount = () => {
    const el = document.getElementById('wc-in');
    const t = el.value || '';
    const cleanStr = t.trim();
    
    // Quantitative Linguistic Analysis
    const words = cleanStr ? cleanStr.split(/\s+/).filter(w => w.length > 0).length : 0;
    const charsNoSpace = t.replace(/\s/g, '').length;
    const sentences = cleanStr ? cleanStr.split(/[.!?]+/).filter(s => s.trim().length > 0).length : 0;
    const paragraphs = cleanStr ? cleanStr.split(/\n\s*\n/).filter(p => p.trim().length > 0).length : 0;
    
    document.getElementById('wc-w').innerText = words.toLocaleString();
    document.getElementById('wc-c').innerText = t.length.toLocaleString();
    document.getElementById('wc-s').innerText = sentences.toLocaleString();
    
    const readTime = Math.ceil(words / 225); // Industry standard 200-250 wpm
    const readingTimeEl = document.getElementById('wc-r');
    if (readingTimeEl) readingTimeEl.innerText = `${readTime}m`;
    
    // Visibility of extra stats
    const charNoSpaceEl = document.getElementById('wc-c-ns');
    if (charNoSpaceEl) charNoSpaceEl.innerText = charsNoSpace.toLocaleString();
    
    // Progress towards goal (default 500 words)
    const prog = document.getElementById('wc-prog');
    if(prog) {
        const perc = Math.min(100, (words / 500) * 100);
        prog.style.width = perc + '%';
        prog.className = `h-full transition-all duration-500 rounded-full ${perc >= 100 ? 'bg-green-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]' : 'bg-blue-600'}`;
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
    
    let pool = "";
    if(useUp) pool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(useLow) pool += "abcdefghijklmnopqrstuvwxyz";
    if(useNum) pool += "0123456789";
    if(useSym) pool += "!@#$%^&*()_+{}[]|:<>?";
    
    if(!pool) {
        document.getElementById('pg-out').innerHTML = '<span class="text-red-400 text-xs font-black uppercase tracking-widest">Select character types</span>';
        return;
    }
    
    // Cryptographically Secure Pseudo-Random Number Generator (CSPRNG)
    const array = new Uint32Array(len);
    window.crypto.getRandomValues(array);
    
    let p = "";
    for(let i=0; i<len; i++) {
        p += pool.charAt(array[i] % pool.length);
    }
    
    const out = document.getElementById('pg-out');
    out.innerText = p;
    
    // Entropy Analysis
    const entropy = Math.log2(Math.pow(pool.length, len));
    const strengthLabel = document.getElementById('pg-strength');
    if (strengthLabel) {
         let color = 'text-red-500';
         let text = 'Weak';
         if (entropy > 60) { color = 'text-yellow-500'; text = 'Moderate'; }
         if (entropy > 100) { color = 'text-green-500'; text = 'Strong'; }
         if (entropy > 128) { color = 'text-blue-500'; text = 'Extreme'; }
         strengthLabel.className = `text-[10px] font-black uppercase tracking-widest ${color}`;
         strengthLabel.innerText = `${text} (${entropy.toFixed(0)} bits)`;
    }
};

window.runAgeCalc = () => {
    const dobInput = document.getElementById('age-in').value;
    if(!dobInput) return toast("Chronological origin required");
    
    const dob = new Date(dobInput);
    const now = new Date();
    
    if (dob > now) return toast("Future dates are not biologically possible yet");
    
    let y = now.getFullYear() - dob.getFullYear();
    let m = now.getMonth() - dob.getMonth();
    let d = now.getDate() - dob.getDate();
    
    if(d < 0) { 
        m--; 
        const prevMonthLastDay = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        d += prevMonthLastDay; 
    }
    if(m < 0) { 
        y--; 
        m += 12; 
    }
    
    // Deterministic Absolute Statistics
    const diffMs = now.getTime() - dob.getTime();
    const totalDays = new Decimal(diffMs).div(1000 * 60 * 60 * 24).floor();
    const totalWeeks = totalDays.div(7).floor();
    const totalHours = new Decimal(diffMs).div(1000 * 60 * 60).floor();
    const totalMinutes = new Decimal(diffMs).div(1000 * 60).floor();
    
    // Accurate Next Birthday Logic
    let nextBday = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
    if (now > nextBday) nextBday.setFullYear(now.getFullYear() + 1);
    const daysToBday = Math.ceil((nextBday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

    document.getElementById('age-box').classList.remove('hidden');
    document.getElementById('age-y').innerText = y;
    document.getElementById('age-m').innerText = m;
    document.getElementById('age-d').innerText = d;
    document.getElementById('age-weeks').innerText = totalWeeks.toNumber().toLocaleString();
    document.getElementById('age-hours').innerText = totalHours.toNumber().toLocaleString();
    
    const nextBdayEl = document.getElementById('age-next-bday');
    if (nextBdayEl) nextBdayEl.innerText = `${daysToBday} Days Until Celebration`;
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
    const color = document.getElementById('qr-color').value;
    const bgcolor = document.getElementById('qr-bg').value;
    const size = parseInt(document.getElementById('qr-size').value, 10);
    
    const img = document.getElementById('qr-img');
    const box = document.getElementById('qr-box');
    const down = document.getElementById('qr-down');
    
    if (typeof QRCode !== 'undefined') {
        QRCode.toDataURL(val, {
            width: size,
            margin: 2,
            color: {
                dark: color,
                light: bgcolor
            }
        }, function (err, url) {
            if (err) return toast("QR Error: " + err);
            img.src = url;
            box.classList.remove('hidden');
            down.href = url;
        });
    } else {
        toast("Loading QR Engine... Retry in 2s");
    }
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
    const mInput = document.getElementById('sip-m');
    const rInput = document.getElementById('sip-r');
    const nInput = document.getElementById('sip-n');
    const stepInput = document.getElementById('sip-step');
    if (!mInput || !rInput || !nInput || !stepInput) return;

    const mBase = new Decimal(mInput.value || 0);
    const annualRate = new Decimal(rInput.value || 0);
    const years = new Decimal(nInput.value || 0);
    const stepPercent = new Decimal(stepInput.value || 0);
    const currency = state.currency;

    if (mBase.lte(0) || annualRate.lte(0) || years.lte(0)) return;

    const monthlyRate = annualRate.div(12).div(100);
    const totalMonths = years.times(12).toNumber();
    const step = stepPercent.div(100);

    let maturity = new Decimal(0);
    let totalInvested = new Decimal(0);
    let currentMonthly = mBase;
    let YearlySchedule = [];

    for (let t = 1; t <= totalMonths; t++) {
        // Investment happens at start of month (Annuity Due)
        maturity = maturity.plus(currentMonthly);
        totalInvested = totalInvested.plus(currentMonthly);
        
        // Compound for the month
        maturity = maturity.times(monthlyRate.plus(1));

        // Year-end report & Step-up
        if (t % 12 === 0) {
            YearlySchedule.push({
                year: t / 12,
                invested: totalInvested,
                maturity: maturity,
                monthlyContribution: currentMonthly
            });
            if (t < totalMonths) {
                currentMonthly = currentMonthly.times(step.plus(1));
            }
        }
    }

    // Rounding for display
    const finalMaturity = maturity.toDecimalPlaces(0, Decimal.ROUND_HALF_UP);
    const finalInvested = totalInvested.toDecimalPlaces(0, Decimal.ROUND_HALF_UP);
    const finalGains = finalMaturity.minus(finalInvested);

    // Update UI
    document.getElementById('sip-out').innerText = formatEMICurrency(finalMaturity.toNumber(), currency);
    document.getElementById('sip-cap').innerText = formatEMICurrency(finalInvested.toNumber(), currency);
    document.getElementById('sip-gain').innerText = formatEMICurrency(finalGains.toNumber(), currency);

    // Dynamic Highlights
    const highlights = document.getElementById('sip-highlights');
    if (highlights) {
        let hHtml = '';
        const multiplier = finalMaturity.div(finalInvested).toFixed(1);
        hHtml += `<div class="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full text-[10px] font-black text-blue-600 border border-blue-100">${multiplier}x Wealth Multiplier</div>`;
        if (stepPercent.gt(0)) {
            const finalMonthly = currentMonthly.toDecimalPlaces(0);
            hHtml += `<div class="px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-full text-[10px] font-black text-purple-600 border border-purple-100">Ends at ${formatEMICurrency(finalMonthly.toNumber(), currency)}/mo</div>`;
        }
        highlights.innerHTML = hHtml;
    }

    // AI Insights
    const insightArea = document.getElementById('sip-insights-area');
    if (insightArea) {
        const gainRatio = finalGains.div(finalMaturity).times(100);
        const insights = [
            { icon: 'trending-up', title: 'Wealth Composition', desc: `Market gains account for ${gainRatio.toFixed(1)}% of your estimated maturity value.` },
            { icon: 'clock', title: 'Compounding Power', desc: `In the final year alone, your wealth grows by ${formatEMICurrency(YearlySchedule[YearlySchedule.length-1].maturity.minus(YearlySchedule[YearlySchedule.length-2]?.maturity || 0).toNumber(), currency)}.` }
        ];
        if (annualRate.gt(15)) insights.push({ icon: 'alert-triangle', title: 'Yield Risk', desc: 'Aggressive yield expected. Ensure your portfolio allocation matches this risk profile.' });

        insightArea.innerHTML = insights.map(i => `
            <div class="p-4 bg-white dark:bg-black/20 rounded-2xl border dark:border-gray-800 flex gap-4">
                <div class="text-blue-500 shrink-0"><i data-lucide="${i.icon}" class="w-4 h-4"></i></div>
                <div>
                     <h5 class="text-[9px] font-black uppercase text-gray-900 dark:text-white mb-1">${i.title}</h5>
                     <p class="text-[8px] font-bold text-gray-400 leading-tight">${i.desc}</p>
                </div>
            </div>
        `).join('');
        lucide.createIcons();
    }

    // Table
    const tbody = document.getElementById('sip-tbody');
    if (tbody) {
        tbody.innerHTML = YearlySchedule.map(y => `
            <tr>
                <td class="p-4 font-bold text-gray-500">${y.year}</td>
                <td class="p-4 text-right text-gray-400 font-mono">${formatEMICurrency(y.invested.toNumber(), currency)}</td>
                <td class="p-4 text-right text-green-600 font-mono">${formatEMICurrency(y.maturity.minus(y.invested).toNumber(), currency)}</td>
                <td class="p-4 text-right font-black text-gray-900 dark:text-white font-mono">${formatEMICurrency(y.maturity.toNumber(), currency)}</td>
            </tr>
        `).join('');
    }
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

// --- TAX ENGINE DATA ---
window.runTaxCalc = () => {
    const incomeInput = document.getElementById('tax-in');
    const countrySelect = document.getElementById('tax-country');
    const box = document.getElementById('tax-box');
    if (!incomeInput || !countrySelect || !box) return;

    const countryCode = countrySelect.value;
    const config = GLOBAL_COUNTRY_CONFIG[countryCode];
    const taxReg = config.tax;
    const currency = config.currency;

    // 1. Inputs with Decimal.js
    const grossIncome = new Decimal(incomeInput.value || 0);
    if (grossIncome.lt(0)) return;

    // UI Toggles
    box.classList.remove('hidden');
    const usAddon = document.getElementById('tax-us-addon');
    if (usAddon) usAddon.classList.toggle('hidden', countryCode !== 'US');

    const inCompliance = document.getElementById('tax-india-compliance');
    if (inCompliance) inCompliance.classList.toggle('hidden', countryCode !== 'IN');

    const genBreakdown = document.getElementById('tax-generic-breakdown');
    if (genBreakdown) genBreakdown.classList.toggle('hidden', countryCode !== 'GEN' && countryCode !== 'US' && countryCode !== 'UK' && countryCode !== 'AE');

    // 2. Calculations
    const standardDeduction = new Decimal(taxReg.standardDeduction || 0);
    const taxableIncome = Decimal.max(0, grossIncome.minus(standardDeduction));

    let totalTax = new Decimal(0);
    let slabDetails = [];
    let stateTax = new Decimal(0);

    // US State Tax
    if (countryCode === 'US') {
        const stateRate = new Decimal(document.getElementById('tax-state-rate')?.value || 0).div(100);
        stateTax = taxableIncome.times(stateRate);
    }

    if (taxReg.type === 'progressive') {
        let prevLimit = new Decimal(0);
        taxReg.slabs.forEach((slab, idx) => {
            const limit = slab.limit === Infinity ? new Decimal(Infinity) : new Decimal(slab.limit);
            const rate = new Decimal(slab.rate);

            if (taxableIncome.gt(prevLimit)) {
                const slabAmount = Decimal.min(taxableIncome, limit).minus(prevLimit);
                const taxForSlab = slabAmount.times(rate);
                totalTax = totalTax.plus(taxForSlab);

                slabDetails.push({
                    range: `${formatEMICurrency(prevLimit.toNumber(), currency)} - ${limit.isFinite() ? formatEMICurrency(limit.toNumber(), currency) : '∞'}`,
                    rate: rate.times(100).toString() + '%',
                    amount: taxForSlab,
                    isActive: true
                });
            } else {
                slabDetails.push({
                    range: `${formatEMICurrency(prevLimit.toNumber(), currency)} - ${limit.isFinite() ? formatEMICurrency(limit.toNumber(), currency) : '∞'}`,
                    rate: rate.times(100).toString() + '%',
                    amount: new Decimal(0),
                    isActive: false
                });
            }
            prevLimit = limit;
        });

        // India Rebate Rule (Section 87A)
        if (countryCode === 'IN' && taxableIncome.lte(taxReg.rebate.threshold)) {
            totalTax = new Decimal(0);
        }

        // Additives (Cess)
        let cessAmt = new Decimal(0);
        if (taxReg.additives) {
            taxReg.additives.forEach(add => {
                const amt = totalTax.times(add.rate);
                if (add.name.includes("Cess")) cessAmt = amt;
                totalTax = totalTax.plus(amt);
            });
        }
        
        // Final Liability
        const finalTax = totalTax.plus(stateTax);
        const monthlyInHand = Decimal.max(0, grossIncome.minus(finalTax)).div(12);
        const effectiveRate = grossIncome.gt(0) ? finalTax.div(grossIncome).times(100) : new Decimal(0);

        // 3. Update UI Elements
        document.getElementById('tax-out').innerText = formatEMICurrency(finalTax.toNumber(), currency);
        document.getElementById('tax-rate').innerText = `Effective Rate: ${effectiveRate.toFixed(2)}%`;
        document.getElementById('tax-inhand').innerText = formatEMICurrency(monthlyInHand.toNumber(), currency);
        document.getElementById('tax-ded-val').innerText = formatEMICurrency(standardDeduction.toNumber(), currency);
        document.getElementById('tax-tot-ded').innerText = formatEMICurrency(standardDeduction.toNumber(), currency);
        document.getElementById('tax-currency-sym').innerText = CURRENCIES[currency].symbol;

        // India Compliance Table
        if (countryCode === 'IN') {
             const tbody = document.getElementById('tax-tbody');
             const cessEl = document.getElementById('tax-cess');
             if (tbody) {
                tbody.innerHTML = slabDetails.map(s => `
                    <tr class="${s.isActive ? 'bg-blue-50/30 dark:bg-blue-900/10' : 'opacity-40'}">
                        <td class="p-6 font-mono text-[10px]">${s.range}</td>
                        <td class="p-6 text-center text-[10px]">${s.rate}</td>
                        <td class="p-6 text-right font-black text-[10px] ${s.amount.gt(0) ? 'text-red-500' : 'text-gray-400'}">${formatEMICurrency(s.amount.toNumber(), currency)}</td>
                    </tr>
                `).join('');
             }
             if (cessEl) cessEl.innerText = formatEMICurrency(cessAmt.toNumber(), currency);
        }

        // Generic Slabs
        const genSlabs = document.getElementById('tax-gen-slabs');
        if (genSlabs) {
            genSlabs.innerHTML = slabDetails.map(s => `
                <div class="p-4 rounded-2xl border-2 ${s.isActive ? 'border-blue-500/20 bg-blue-50/10' : 'border-gray-100 dark:border-gray-800 opacity-40'}">
                    <p class="text-[8px] font-black text-gray-400 uppercase mb-1">${s.range}</p>
                    <div class="flex justify-between items-end text-[10px]">
                        <span class="font-black">${s.rate}</span>
                        <span class="font-mono text-gray-400">${formatEMICurrency(s.amount.toNumber(), currency)}</span>
                    </div>
                </div>
            `).join('');
        }

        // AI Insights Generate
        const insightList = document.getElementById('tax-insights-list');
        if (insightList) {
            const insights = [];
            if (effectiveRate.gt(30)) insights.push({ icon: 'alert-triangle', color: 'red', title: 'High Tax Bracket', desc: 'You are in a top-tier tax bracket. Consider tax-saving investments like 401k, ISA, or 80C.' });
            else if (effectiveRate.gt(0)) insights.push({ icon: 'trending-down', color: 'green', title: 'Optimized Burden', desc: 'Your effective rate is within a healthy range for this jurisdiction.' });
            
            if (countryCode === 'IN' && grossIncome.lte(700000)) insights.push({ icon: 'gift', color: 'blue', title: 'Marginal Relief', desc: 'Sec 87A rebate applies. Your net liability is zero despite falling in slabs.' });
            
            if (stateTax.gt(0)) insights.push({ icon: 'map-pin', color: 'amber', title: 'Local Compliance', desc: `State/Local tax adjusted at ${((stateTax.div(taxableIncome)).times(100)).toFixed(1)}% of taxable income.` });

            insights.push({ icon: 'zap', color: 'indigo', title: 'Take-Home Pay', desc: `Your purchasing power is ${formatEMICurrency(monthlyInHand.toNumber(), currency)} per month after all statutory deductions.` });

            insightList.innerHTML = insights.map(i => `
                <div class="p-5 bg-white dark:bg-black/20 rounded-3xl border dark:border-gray-800 flex gap-4">
                    <div class="text-${i.color}-500 shrink-0"><i data-lucide="${i.icon}" class="w-5 h-5"></i></div>
                    <div>
                        <h5 class="text-[10px] font-black uppercase text-gray-900 dark:text-white mb-1">${i.title}</h5>
                        <p class="text-[9px] font-bold text-gray-400 leading-tight">${i.desc}</p>
                    </div>
                </div>
            `).join('');
            lucide.createIcons();
        }
    } else if (taxReg.type === 'none') {
        document.getElementById('tax-out').innerText = formatEMICurrency(0, currency);
        document.getElementById('tax-rate').innerText = 'Effective Rate: 0%';
        document.getElementById('tax-inhand').innerText = formatEMICurrency(grossIncome.div(12).toNumber(), currency);
        document.getElementById('tax-ded-val').innerText = '--';
        document.getElementById('tax-tot-ded').innerText = '--';
        document.getElementById('tax-currency-sym').innerText = CURRENCIES[currency].symbol;
        
        const insightList = document.getElementById('tax-insights-list');
        if (insightList) {
            insightList.innerHTML = `
                <div class="p-5 bg-white dark:bg-black/20 rounded-3xl border dark:border-gray-800 flex gap-4 col-span-2">
                    <div class="text-green-500 shrink-0"><i data-lucide="sun" class="w-5 h-5"></i></div>
                    <div>
                        <h5 class="text-[10px] font-black uppercase text-gray-900 dark:text-white mb-1">Tax Haven Detected</h5>
                        <p class="text-[9px] font-bold text-gray-400 leading-tight">${taxReg.description}. Full gross income is retained as take-home pay.</p>
                    </div>
                </div>
            `;
            lucide.createIcons();
        }
    }
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
    document.getElementById('pdf-upload').classList.add('hidden');
    document.getElementById('pdf-controls').classList.remove('hidden');
    document.getElementById('pdf-count').innerText = `${count} ${count === 1 ? 'File' : 'Files'} Documented`;
    
    // Generate suggested filename
    const first = input.files[0].name.split('.')[0];
    document.getElementById('pdf-name').value = `${first}_merged`;
    lucide.createIcons();
};

window.handlePDFSplitInput = (input) => {
    if (!input.files.length) return;
    document.getElementById('pdf-split-upload').classList.add('hidden');
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
    document.getElementById('resizer-upload').classList.add('hidden');
    document.getElementById('resizer-controls').classList.remove('hidden');
    lucide.createIcons();
};

window.runFileSim = async () => {
    const prog = document.getElementById('file-prog');
    const box = document.getElementById('file-box');
    const input = document.getElementById('file-in');
    
    if (!input || !input.files.length) return toast("Please select files first");
    
    box.classList.remove('hidden');
    prog.style.width = '100%';
    prog.classList.add('animate-pulse');

    const id = state.activeTool.id;

    try {
        if (id === 'pdf-merger' && typeof PDFLib !== 'undefined') {
            const { PDFDocument } = PDFLib;
            const mergedPdf = await PDFDocument.create();
            
            for (const file of input.files) {
                const bytes = await file.arrayBuffer();
                const pdf = await PDFDocument.load(bytes);
                const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
                copiedPages.forEach((page) => mergedPdf.addPage(page));
            }
            
            const pdfBytes = await mergedPdf.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            
            document.getElementById('pdf-res').classList.remove('hidden');
            const finalName = (document.getElementById('pdf-name').value || 'Merged_Document') + '.pdf';
            document.getElementById('pdf-final-name').innerText = finalName;
            
            const dlBtn = document.getElementById('pdf-res').querySelector('button');
            dlBtn.onclick = () => {
                const a = document.createElement('a');
                a.href = url;
                a.download = finalName;
                a.click();
            };
        } 
        else if (id === 'pdf-splitter' && typeof PDFLib !== 'undefined') {
            const { PDFDocument } = PDFLib;
            const file = input.files[0];
            const bytes = await file.arrayBuffer();
            const pdf = await PDFDocument.load(bytes);
            
            const range = document.getElementById('pdf-range').value;
            const mode = document.getElementById('pdf-split-mode').value;
            
            // For simplicity in this suite, we'll extract the first page or the range
            // Real complex splitting often needs a loop and multiple files
            const newPdf = await PDFDocument.create();
            let pagesToExtract = [0];
            
            if (mode === 'range' && range.includes('-')) {
                const parts = range.split('-').map(p => parseInt(p.trim()) - 1);
                pagesToExtract = [];
                for(let i=parts[0]; i<=parts[1]; i++) {
                    if (i < pdf.getPageCount()) pagesToExtract.push(i);
                }
            }
            
            const copiedPages = await newPdf.copyPages(pdf, pagesToExtract);
            copiedPages.forEach(p => newPdf.addPage(p));
            
            const pdfBytes = await newPdf.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            
            document.getElementById('pdf-split-res').classList.remove('hidden');
            const dlBtn = document.getElementById('pdf-split-res').querySelector('button');
            dlBtn.onclick = () => {
                const a = document.createElement('a');
                a.href = url;
                a.download = `Split_${file.name}`;
                a.click();
            };
        }
        else if (id === 'image-resizer') {
            const file = input.files[0];
            const w = parseInt(document.getElementById('res-w').value);
            const h = parseInt(document.getElementById('res-h').value);
            const format = document.getElementById('res-format').value;
            
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = w;
                    canvas.height = h;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, w, h);
                    
                    const url = canvas.toDataURL(format);
                    document.getElementById('res-out-box').classList.remove('hidden');
                    const dlBtn = document.getElementById('res-out-box').querySelector('button');
                    dlBtn.onclick = () => {
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `resized_${file.name.split('.')[0]}.${format.split('/')[1]}`;
                        a.click();
                    };
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
        else {
            toast("Module not loaded or unsupported tool.");
        }
    } catch (err) {
        console.error(err);
        toast("Processing Error: " + err.message);
    } finally {
        prog.classList.remove('animate-pulse');
    }
};

// --- PHASE 4 FINANCE LOGIC ---
window.runCCCalc = () => {
    const pVal = document.getElementById('cc-p').value;
    const rVal = document.getElementById('cc-r').value;
    const mVal = document.getElementById('cc-m').value;
    const tVal = document.getElementById('cc-t').value;
    if (!pVal || !rVal || !mVal) return;

    const P = new Decimal(pVal || 0);
    const apr = new Decimal(rVal || 0);
    const monthlyPayment = new Decimal(mVal || 0);
    const targetBalance = new Decimal(tVal || 0);
    const currency = state.currency;

    if (P.lte(0) || apr.lte(0) || monthlyPayment.lte(0)) return;

    const monthlyRate = apr.div(12).div(100);
    const dailyRate = apr.div(365).div(100);
    
    // Check for negative amortization
    if (monthlyPayment.lte(P.mul(monthlyRate))) {
        toast("Payment too low - debt will never decrease!");
        return;
    }

    let balance = P;
    let totalInterest = new Decimal(0);
    let months = 0;

    while (balance.gt(targetBalance) && months < 600) {
        let interest = balance.mul(monthlyRate).toDecimalPlaces(2, Decimal.ROUND_HALF_UP);
        totalInterest = totalInterest.plus(interest);
        balance = balance.plus(interest).minus(monthlyPayment);
        months++;
        if (balance.lt(targetBalance)) balance = targetBalance;
    }

    const finalInterest = totalInterest.toDecimalPlaces(2);
    const dailyAccrual = P.mul(dailyRate).toDecimalPlaces(2);

    document.getElementById('cc-box').classList.remove('hidden');
    document.getElementById('cc-total-i').innerText = formatEMICurrency(finalInterest.toNumber(), currency);
    document.getElementById('cc-months').innerText = `${months} Months`;
    document.getElementById('cc-daily').innerText = formatEMICurrency(dailyAccrual.toNumber(), currency);
    
    document.getElementById('cc-roi').innerText = `-${apr.toFixed(2)}%`;
    const principalPaid = P.minus(targetBalance);
    const ratio = principalPaid.div(principalPaid.plus(finalInterest)).times(100);
    document.getElementById('cc-ratio').innerText = `${ratio.toFixed(1)}% Principal`;

    const insightArea = document.getElementById('cc-insights');
    if (insightArea) {
        const insights = [
            { icon: 'alert-circle', title: 'Interest Trap', desc: `You will pay ${formatEMICurrency(finalInterest.toNumber(), currency)} in interest alone just to reach your target.` },
            { icon: 'trending-up', title: 'Daily Leak', desc: `Every 24 hours, ${formatEMICurrency(dailyAccrual.toNumber(), currency)} in interest is added to your balance.` }
        ];
        if (apr.gt(20)) insights.push({ icon: 'zap', title: 'Aggressive Debt', desc: 'Extremely high APR detected. Consider balance transfer or personal loan consolidation.' });

        insightArea.innerHTML = insights.map(i => `
            <div class="p-4 bg-white dark:bg-black/20 rounded-2xl border dark:border-gray-800 flex gap-4">
                <div class="text-red-500 shrink-0"><i data-lucide="${i.icon}" class="w-4 h-4"></i></div>
                <div>
                     <h5 class="text-[9px] font-black uppercase text-gray-900 dark:text-white mb-1">${i.title}</h5>
                     <p class="text-[8px] font-bold text-gray-400 leading-tight">${i.desc}</p>
                </div>
            </div>
        `).join('');
        lucide.createIcons();
    }
};

window.runWebCost = () => {
    let total = new Decimal(500); // Base market entry rate
    const opts = document.querySelectorAll('#web-opts input[type="checkbox"]');
    opts.forEach(opt => {
        if(opt.checked) total = total.plus(parseInt(opt.getAttribute('data-val') || '0'));
    });
    
    const currency = state.currency;
    document.getElementById('web-total').innerText = formatEMICurrency(total.toNumber(), currency);
};

window.runFreelanceCalc = () => {
    const rVal = document.getElementById('fr-rate').value;
    const hVal = document.getElementById('fr-hours').value;
    const r = new Decimal(rVal || 0);
    const h = new Decimal(hVal || 0);
    const currency = state.currency;
    
    if (r.lt(0) || h.lt(0)) return;

    const weekly = r.mul(h);
    const monthly = weekly.mul(4.34524); // More precise weeks per month (365.25 / 7 / 12)
    const yearly = r.mul(h).mul(52);

    document.getElementById('fr-month').innerText = formatEMICurrency(monthly.toNumber(), currency);
    document.getElementById('fr-year').innerText = formatEMICurrency(yearly.toNumber(), currency);
};

window.runDomEst = () => {
    const domain = document.getElementById('dom-in').value.trim();
    if(!domain) return toast("Enter a domain name");

    let score = new Decimal(500);
    const parts = domain.split('.');
    const name = parts[0];
    const tld = (parts[1] || 'com').toLowerCase();

    if(name.length < 4) score = score.plus(5000);
    else if(name.length < 6) score = score.plus(2000);
    else if(name.length < 10) score = score.plus(500);
    else score = score.minus(150);

    const premiumTLDs = ['com', 'io', 'ai', 'tech', 'net', 'org'];
    if(premiumTLDs.includes(tld)) score = score.mul(3.8);
    else score = score.mul(0.5);

    const keywords = ['pay', 'fit', 'sex', 'crypto', 'loan', 'bank', 'tech', 'smart', 'hub', 'ai'];
    keywords.forEach(k => { if(name.toLowerCase().includes(k)) score = score.plus(1200); });

    const currency = state.currency;
    document.getElementById('dom-box').classList.remove('hidden');
    document.getElementById('dom-val').innerText = formatEMICurrency(score.toNumber(), currency);
    document.getElementById('dom-len').innerText = `Length: ${name.length} Chars`;
    document.getElementById('dom-tld').innerText = `TLD: ${tld.toUpperCase()}`;
};

window.runCryCalc = () => {
    const capVal = document.getElementById('cry-in').value;
    const buyVal = document.getElementById('cry-buy').value;
    const sellVal = document.getElementById('cry-sell').value;

    const cap = new Decimal(capVal || 0);
    const buyPrice = new Decimal(buyVal || 0);
    const sellPrice = new Decimal(sellVal || 0);
    const currency = state.currency;

    if (cap.lte(0) || buyPrice.lte(0)) return;

    const tokens = cap.div(buyPrice);
    const finalBalance = tokens.mul(sellPrice);
    const profit = finalBalance.minus(cap);
    const percentage = sellPrice.minus(buyPrice).div(buyPrice).times(100);

    const profitEl = document.getElementById('cry-profit');
    profitEl.innerText = formatEMICurrency(profit.toNumber(), currency);
    profitEl.className = `text-4xl font-black mb-2 ${profit.gte(0) ? 'text-green-500' : 'text-red-500'}`;
    
    const percEl = document.getElementById('cry-perc');
    percEl.innerText = (percentage.gte(0) ? '+' : '') + percentage.toFixed(2) + '%';
    percEl.className = `text-lg font-black ${percentage.gte(0) ? 'text-green-400' : 'text-red-400'}`;
    
    document.getElementById('cry-bal').innerText = formatEMICurrency(finalBalance.toNumber(), currency);
};

window.runROICalc = () => {
    const sInput = document.getElementById('roi-s');
    const rInput = document.getElementById('roi-r');
    if (!sInput || !rInput) return;

    const spend = new Decimal(sInput.value || 0);
    const revenue = new Decimal(rInput.value || 0);
    const currency = state.currency;

    if (spend.lte(0)) return;

    const profit = revenue.minus(spend);
    const roi = profit.div(spend).times(100);
    const roas = revenue.div(spend);

    const out = document.getElementById('roi-out');
    out.innerText = roi.toDecimalPlaces(1, Decimal.ROUND_HALF_UP).toString() + '%';
    
    document.getElementById('roi-p').innerText = formatEMICurrency(profit.toNumber(), currency);
    document.getElementById('roi-a').innerText = roas.toFixed(2) + 'x';

    const bar = document.getElementById('roi-bar');
    const visualPerc = Math.max(0, Math.min(100, roi.div(2).plus(50).toNumber()));
    bar.style.width = visualPerc + '%';
    bar.className = roi.gte(0) ? 'h-full bg-white shadow-[0_0_15px_white]' : 'h-full bg-red-400 shadow-[0_0_15px_red]';
};

window.runInsCalc = () => {
    const type = document.getElementById('ins-type').value;
    const age = parseInt(document.getElementById('ins-age').value) || 25;
    const cov = new Decimal(document.getElementById('ins-cov').value || 0);
    const isTobacco = document.getElementById('ins-t-yes').classList.contains('bg-blue-600');
    const currency = state.currency;

    if (cov.lte(0)) return;

    let baseRate = new Decimal(0);
    if (type === 'term') baseRate = new Decimal(0.001); // 0.1% base
    else if (type === 'health') baseRate = new Decimal(0.015); // 1.5% base
    else baseRate = new Decimal(0.0005); // 0.05% base

    // Actuarial Loadings
    let loading = new Decimal(1);
    if (age > 40) loading = loading.plus(new Decimal(age).minus(40).div(20));
    if (isTobacco) loading = loading.times(2);

    const annualPremium = cov.mul(baseRate).mul(loading);
    const monthlyPremium = annualPremium.div(12).toDecimalPlaces(0, Decimal.ROUND_HALF_UP);

    const out = document.getElementById('ins-out');
    if (out) out.innerText = formatEMICurrency(monthlyPremium.toNumber(), currency);
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
        const removeFn = window.imglyRemoveBackground || window.removeBackground || (window.imgly && window.imgly.removeBackground);
        
        if (typeof removeFn === 'function') {
            removeFn(brFile).then((blob) => {
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
function getSelectedCurrency() {
    return state.currency;
}

// Alias for tool requested name
function formatCurrency(amount) {
    return formatToolCurrency(amount);
}

function formatToolCurrency(v, convert = false) {
    const curCode = getSelectedCurrency();
    const cur = CURRENCIES[curCode];
    const convertedValue = convert ? v * (curCode === 'USD' ? 1 : cur.rate) : v;
    
    // Hardened locale mapping for accurate formatting
    let locale = 'en-US'; 
    if (curCode === 'INR') locale = 'en-IN';
    if (curCode === 'EUR') locale = 'de-DE';
    if (curCode === 'GBP') locale = 'en-GB';
    if (curCode === 'JPY') locale = 'ja-JP';
    
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: curCode,
        maximumFractionDigits: 0
    }).format(convertedValue);
}

function toast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.innerText = msg;
    t.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => {
        t.classList.add('translate-y-20', 'opacity-0');
    }, 2500);
}

// --- BOOT ENGINE ---
function boot() {
    const langSelect = document.getElementById('lang-select');
    const curSelect = document.getElementById('currency-select');
    
    langSelect.value = state.lang;
    curSelect.value = state.currency;
    
    langSelect.onchange = (e) => {
        state.lang = e.target.value;
        localStorage.setItem('lang', state.lang);
        renderUI();
    };
    
    curSelect.onchange = (e) => {
        state.currency = e.target.value;
        localStorage.setItem('currency', state.currency);
        renderUI();
    };

    document.getElementById('modal-close').onclick = closeToolModal;
    document.getElementById('modal-overlay').onclick = closeToolModal;
    
    renderUI();
    
    // Initialize with the random quote from state
    const firstQuote = state.currentQuote;
    document.getElementById('quote-text').innerText = `"${firstQuote.text}"`;
    document.getElementById('quote-author').innerText = `— ${firstQuote.author}`;
    
    setInterval(autoRotateQuotes, 8000);
    initLocalization();
    lucide.createIcons();

    // Direct routing handler
    const handleRoute = () => {
        const id = location.hash.replace('#', '');
        if (id) {
            // Short delay to ensure DOM is ready
            setTimeout(() => {
                const tool = TOOLS.find(t => t.id === id);
                if (tool) openToolModal(id);
            }, 100);
        }
    };

    window.addEventListener('hashchange', handleRoute);
    handleRoute();
}

// Expose local functions to window for legacy inline onclick handlers
window.closeToolModal = closeToolModal;
window.renderUI = renderUI;

boot();
