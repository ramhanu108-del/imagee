/**
 * SmartTools Hub v5.0 - Universal Core Engine
 * Vanilla JS logic for 32+ high-performance browser tools.
 */

import QUOTES_LIBRARY from './quotes.js';
import Decimal from 'decimal.js';
import { Chart, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
Chart.register(...registerables, annotationPlugin);

// --- TOOL DATABASE ---
const TOOLS = [
    { id: 'image-compressor', nameKey: 'compress', icon: 'minimize', category: 'Image', desc: 'Reduce file size while keeping visual quality.' },
    { id: 'background-remover', nameKey: 'bgremove', icon: 'scissors', category: 'Image', desc: 'Manually erase image backgrounds and export clean cutouts.' },
    { id: 'image-resizer', nameKey: 'resizer', icon: 'crop', category: 'Image', desc: 'Resize, crop, and export images in multiple formats.' },
    { id: 'pdf-merger', nameKey: 'pdfmerge', icon: 'file-text', category: 'PDF', desc: 'Combine multiple PDF files into one document.' },
    { id: 'pdf-splitter', nameKey: 'pdfsplit', icon: 'scissors', category: 'PDF', desc: 'Extract individual pages from your PDFs.' },
    { id: 'word-counter', nameKey: 'wordcount', icon: 'type', category: 'Text', desc: 'Professional utility for characters and words.' },
    { id: 'case-converter', nameKey: 'case', icon: 'type', category: 'Text', desc: 'Uppercase, lowercase, title case and more.' },
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
    { id: 'fd-calculator', nameKey: 'fd', icon: 'pie-chart', category: 'Finance', desc: 'Fixed Deposit maturity and interest earnings.' },
    { id: 'loan-comparison', nameKey: 'loancomp', icon: 'git-compare', category: 'Finance', desc: 'Compare multi-bank loan offerings side-by-side.' },
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
    'image-resizer': {
        about: "Professional-grade image transformation is no longer restricted to desktop software. Our Image Resizer tool provides a comprehensive suite of scaling and cropping options, all executing within your browser's secure sandbox. Whether you need to prepare assets for social media, reduce dimensions for web performance, or convert between high-efficiency formats like WebP and AVIF, our engine delivers precise results. By keeping all processing local, we ensure your proprietary visual content never leaves your machine, providing total privacy and offline capability.",
        steps: [
            "Upload your source image to the secure processing area.",
            "Define your target dimensions or scale percentage.",
            "Toggle aspect ratio lock to prevent visual distortion.",
            "Choose your export format and quality settings.",
            "Download your optimized, resized asset instantly."
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
            compress: "Image Compressor", bgremove: "Background Removal",
            pdfmerge: "PDF Merger", pdfsplit: "PDF Splitter", wordcount: "Word Counter", case: "Case Converter",
            resizer: "Image Resizer",
            pass: "Password Generator", age: "Age Calculator", 
            qr: "QR Code Generator", color: "Color Picker", b64: "Base64 Converter", url: "URL Converter",
            unit: "Unit Converter", stopwatch: "Stopwatch", todo: "To-Do List", notes: "Notes App",
            emi: "EMI Calculator", sip: "SIP Calculator", tax: "Tax Calculator", cc: "Credit Card Interest",
            ins: "Insurance Estimator", web: "Website Cost", free: "Freelance Earnings", dom: "Domain Estimator",
            crypto: "Crypto Profit", roi: "Ads ROI Calculator", fd: "FD Calculator", loancomp: "Loan Comparison", 
            username: "Username Generator", caption: "Caption Generator", bio: "Bio Generator"
        }
    },
    hi: {
        nav: { logo: "स्मार्टटूल्स हब", home: "होम", tools: "उपयोगिताएँ", about: "गोपनीयता कवच" },
        hero: { title1: "आपके सभी कामों के लिए ", title2: "स्विस चाकू", sub: "तेज़, सुरक्षित और पूरी तरह से आपके ब्राउज़र में काम करता है। आपका डेटा कहीं नहीं जाता।" },
        ui: { all: "सभी टूल्स", popular: "🔥 लोकप्रिय टूल्स", recent: "🕒 हाल ही में प्रयुक्त", trending: "📈 अभी ट्रेंड में", about: "स्मार्टटूल्स हब", rights: "सर्वाधिकार सुरक्षित।", related: "संबंधित टूल्स", search: "टूल्स खोजें...", quotesTitle: "महान दार्शनicों का ज्ञान", categories: { ALL: "सभी", IMAGE: "इमेज", PDF: "पीडीएफ", FINANCE: "वित्त", TEXT: "टेक्स्ट", INSTAGRAM: "इंस्टाग्राम", UTILITY: "उपयोगिता" } },
        tools: {
            compress: "इमेज कंप्रेशर", bgremove: "बैकग्राउंड रिमूवल",
            pdfmerge: "PDF मर्जर", pdfsplit: "PDF स्प्लिटर", wordcount: "शब्द गणक", case: "केस कनवर्टर",
            pass: "पासवर्ड जनरेटर", age: "आयु गणक", 
            qr: "QR कोड जनरेटर", color: "कलर पिकर", b64: "Base64 कनवर्टर", url: "URL कनवर्टर",
            unit: "यूनिट कनवर्टर", stopwatch: "स्टॉपवॉच", todo: "टू-डू लिस्ट", notes: "नोट्स ऐप",
            emi: "EMI कैलकुलेटर", sip: "SIP कैलकुलेटर", tax: "टैक्स कैलकुलेटर", cc: "क्रेडिट कार्ड ब्याज",
            ins: "बीमा प्रीमियम", web: "वेबसाइट लागत", free: "फ्रीलांसर कमाई", dom: "डोमेन मूल्य",
            crypto: "क्रिप्टो लाभ", roi: "विज्ञापन ROI", fd: "एफडी कैलकुलेटर", loancomp: "लोन तुलना",
            username: "यूज़रनेम जनरेटर", caption: "कैप्शन जनरेटर", bio: "बायो जनरेटर"
        }
    },
    es: {
        nav: { logo: "SmartTools Hub", home: "Inicio", tools: "Utilidades", about: "Escudo de Privacidad" },
        hero: { title1: "Navaja Suiza para ", title2: "Todo tu Trabajo", sub: "Rápido, seguro y funciona completamente en tu navegador. Ningún dato sale de tu dispositivo." },
        ui: { all: "Todas las Herramientas", popular: "🔥 Herramientas Populares", recent: "🕒 Usadas Recientemente", trending: "📈 Tendencias", about: "SmartTools Hub", rights: "Todos los derechos reservados.", related: "Utilidades Relacionadas", search: "Buscar herramientas...", quotesTitle: "Sabiduría de Grandes Filósofos", categories: { ALL: "Todo", IMAGE: "Imagen", PDF: "PDF", FINANCE: "Finanzas", TEXT: "Texto", INSTAGRAM: "Instagram", UTILITY: "Utilidad" } },
        tools: {
            compress: "Compresor de Imágenes", bgremove: "Eliminación de Fondo",
            pdfmerge: "Fusionador PDF", pdfsplit: "Divisor PDF", wordcount: "Contador de Palabras", case: "Conversor de Mayúsculas/Minúsculas",
            pass: "Generador de Contraseñas", age: "Calculadora de Edad", 
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
            compress: "Compresseur d'Images", bgremove: "Suppression de Fond",
            pdfmerge: "Fusionneur PDF", pdfsplit: "Diviseur PDF", wordcount: "Compteur de Mots", case: "Convertisseur de Cas",
            pass: "Générateur de Mots de Passe", age: "Calculateur d'Âge", 
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
            compress: "Bildkomprimierer", bgremove: "Hintergrundentferner",
            pdfmerge: "PDF Zusammenführen", pdfsplit: "PDF Splitten", wordcount: "Wortzähler", case: "Groß-/Kleinschreibung",
            pass: "Passwortgenerator", age: "Altersrechner", 
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
            compress: "Compressor de Imagens", bgremove: "Removedor de Fundo",
            pdfmerge: "Fusão de PDF", pdfsplit: "Divisor de PDF", wordcount: "Contador de Palavras", case: "Conversor de Letras",
            pass: "Gerador de Senhas", age: "Calculadora de Idade", 
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
            compress: "画像圧縮", bgremove: "背景削除",
            pdfmerge: "PDF結合", pdfsplit: "PDF分割", wordcount: "単語数カウント", case: "大文字小文字変換",
            pass: "パスワード生成", age: "年齢計算", 
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

const INDIA_TAX_CONFIG = {
    "FY_2024_25": {
        label: "FY 2024–25 / AY 2025–26",
        standardDeduction: 75000,
        rebateLimit: 700000,
        rebateMax: 25000,
        cessRate: 0.04,
        slabs: [
            { upTo: 300000, rate: 0 },
            { upTo: 700000, rate: 0.05 },
            { upTo: 1000000, rate: 0.10 },
            { upTo: 1200000, rate: 0.15 },
            { upTo: 1500000, rate: 0.20 },
            { upTo: Infinity, rate: 0.30 }
        ]
    },
    "FY_2025_26": {
        label: "FY 2025–26 / AY 2026–27",
        standardDeduction: 75000,
        rebateLimit: 1200000,
        rebateMax: 60000,
        cessRate: 0.04,
        slabs: [
            { upTo: 400000, rate: 0 },
            { upTo: 800000, rate: 0.05 },
            { upTo: 1200000, rate: 0.10 },
            { upTo: 1600000, rate: 0.15 },
            { upTo: 2000000, rate: 0.20 },
            { upTo: 2400000, rate: 0.25 },
            { upTo: Infinity, rate: 0.30 }
        ]
    }
};

function D(value) {
    const clean = FinUI && FinUI.safeNumber
        ? FinUI.safeNumber(value, 0)
        : Number(String(value ?? "0").replace(/[₹$,\s]/g, "")) || 0;

    if (typeof Decimal !== "undefined") {
        return new Decimal(clean);
    }

    return {
        value: Number(clean) || 0,
        plus(x) { return D(this.value + Number(x?.value ?? x ?? 0)); },
        add(x) { return this.plus(x); },
        minus(x) { return D(this.value - Number(x?.value ?? x ?? 0)); },
        sub(x) { return this.minus(x); },
        times(x) { return D(this.value * Number(x?.value ?? x ?? 0)); },
        mul(x) { return this.times(x); },
        div(x) { return D(this.value / (Number(x?.value ?? x ?? 1) || 1)); },
        pow(x) { return D(Math.pow(this.value, Number(x?.value ?? x ?? 1))); },
        gt(x) { return this.value > Number(x?.value ?? x ?? 0); },
        gte(x) { return this.value >= Number(x?.value ?? x ?? 0); },
        lt(x) { return this.value < Number(x?.value ?? x ?? 0); },
        lte(x) { return this.value <= Number(x?.value ?? x ?? 0); },
        eq(x) { return this.value === Number(x?.value ?? x ?? 0); },
        isZero() { return this.value === 0; },
        isNaN() { return isNaN(this.value); },
        round() { return D(Math.round(this.value)); },
        toDecimalPlaces(n) { return D(Number(this.value.toFixed(n))); },
        toNumber() { return this.value; },
        toFixed(n) { return this.value.toFixed(n); },
        isFinite() { return isFinite(this.value); },
        abs() { return D(Math.abs(this.value)); }
    };
}

const GLOBAL_COUNTRY_CONFIG = {
    IN: {
        name: "India",
        currency: "INR",
        locale: "en-IN",
        tax: {
            type: "progressive",
            defaultYear: "2024-25",
            years: {
                "2024-25": {
                    regime: "FY 2024-25 (New Regime)",
                    standardDeduction: 75000,
                    slabs: [
                        { limit: 300000, rate: 0 },
                        { limit: 700000, rate: 0.05 },
                        { limit: 1000000, rate: 0.10 },
                        { limit: 1200000, rate: 0.15 },
                        { limit: 1500000, rate: 0.20 },
                        { limit: Infinity, rate: 0.30 }
                    ],
                    rebate: { threshold: 700000 },
                    additives: [{ name: "Health & Education Cess", rate: 0.04 }]
                },
                "2025-26": {
                    regime: "FY 2025-26 (New Regime)",
                    standardDeduction: 75000,
                    slabs: [
                        { limit: 400000, rate: 0 },
                        { limit: 800000, rate: 0.05 },
                        { limit: 1200000, rate: 0.10 },
                        { limit: 1600000, rate: 0.15 },
                        { limit: 2000000, rate: 0.20 },
                        { limit: 2400000, rate: 0.25 },
                        { limit: Infinity, rate: 0.30 }
                    ],
                    rebate: { threshold: 1200000 },
                    additives: [{ name: "Health & Education Cess", rate: 0.04 }]
                }
            }
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
let quoteTimer = null;

function getNextRandomQuote() {
    const library = typeof QUOTES_LIBRARY !== 'undefined' ? QUOTES_LIBRARY : {};
    if (quoteBag.length === 0 || quoteLangConfigured !== state.lang) {
        quoteLangConfigured = state.lang;
        const quotesForLang = library[state.lang] || library['en'] || [{ text: "Knowledge is power.", author: "Francis Bacon" }];
        
        quoteBag = [...quotesForLang];
        // Fisher-Yates Shuffle
        for (let i = quoteBag.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [quoteBag[i], quoteBag[j]] = [quoteBag[j], quoteBag[i]];
        }
    }
    
    // Prevent same quote twice if possible
    let next = quoteBag.pop();
    if (state.currentQuote && next && next.text === state.currentQuote.text && quoteBag.length > 0) {
        const fallback = next;
        next = quoteBag.pop();
        quoteBag.push(fallback);
    }
    return next || { text: "Wisdom awaits.", author: "Anonymous" };
}

function startQuoteRotation() {
    stopQuoteRotation();
    quoteTimer = setInterval(() => {
        if (!document.hidden) {
            refreshQuote();
        }
    }, 12000); // Rotate every 12 seconds
}

function stopQuoteRotation() {
    if (quoteTimer) clearInterval(quoteTimer);
}

window.refreshQuote = () => {
    const container = document.getElementById('quote-content');
    if (container) {
        container.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
            state.currentQuote = getNextRandomQuote();
            renderUI();
            container.classList.remove('opacity-0', 'scale-95');
            container.classList.add('opacity-100', 'scale-100');
        }, 500);
    } else {
        state.currentQuote = getNextRandomQuote();
        renderUI();
    }
};

// Visibility management for rotation
document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopQuoteRotation();
    else startQuoteRotation();
});

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
    emiCharts: {},
    resizerFile: null,
    resizerImg: null,
    resizerRatio: null,
    bgOriginalImg: null,
    bgUndoStack: [],
    bgRedoStack: []
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
    // Preserve tool-specific state before re-render
    if (state.activeTool && state.activeTool.id === 'tax-calculator') {
        const inEl = document.getElementById('tax-in');
        if (inEl) state.lastTaxIncome = inEl.value;
        const coEl = document.getElementById('tax-country');
        if (coEl) state.lastTaxCountry = coEl.value;
        const yeEl = document.getElementById('tax-year');
        if ( yeEl ) state.lastTaxYear = yeEl.value;
    }

    applyTheme();
    updateText();
    renderCategoryTabs();
    renderToolShelves();
    renderFullGrid();
    
    // Auto-update open tool content on currency/lang switch
    if (state.activeTool) {
        injectToolFunctionalHTML(state.activeTool.id);
        
        const tid = state.activeTool.id.replace('#', '').toLowerCase();
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
    document.getElementById('quote-author').innerText = `— ${q.author || 'Unknown'}`;
    
    const chipsContainer = document.getElementById('quote-chips');
    if (chipsContainer) {
        chipsContainer.innerHTML = '';
        if (q.tradition) {
            chipsContainer.innerHTML += `<span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[8px] font-black uppercase tracking-widest rounded-full">${q.tradition}</span>`;
        }
        if (q.era) {
            chipsContainer.innerHTML += `<span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-400 text-[8px] font-black uppercase tracking-widest rounded-full">${q.era}</span>`;
        }
        if (q.region) {
            chipsContainer.innerHTML += `<span class="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[8px] font-black uppercase tracking-widest rounded-full">${q.region}</span>`;
        }
    }
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
        <div onclick="openToolModal('${t.id}')" class="fin-card group cursor-pointer relative overflow-hidden backdrop-blur-sm">
            <div class="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-5 transition-opacity">
                <i data-lucide="${t.icon}" class="w-24 h-24 stroke-1"></i>
            </div>
            <div class="w-12 h-12 bg-blue-600/5 dark:bg-blue-400/5 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                <i data-lucide="${t.icon}" class="w-5 h-5"></i>
            </div>
            <h3 class="text-lg font-black mb-2 tracking-tight">${name}</h3>
            <p class="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 uppercase font-bold tracking-tighter opacity-80">${t.desc}</p>
            <div class="mt-6 flex items-center gap-2 text-[10px] font-black text-blue-600 opacity-0 group-hover:opacity-100 uppercase tracking-widest transition-all">
                <span>Launch Tool</span>
                <i data-lucide="arrow-right" class="w-3 h-3"></i>
            </div>
        </div>
    `;
}

// --- QUOTES SYSTEM ---
// The quote system is now strictly philosopher-based and deduplicated via quotes.js.
// Functionality is handled via getNextRandomQuote and startQuoteRotation.

// --- GLOBAL ACTIONS ---
window.updateGlobalCurrency = (code) => {
    const oldCur = state.currency;
    state.currency = code;
    localStorage.setItem('currency', code);
    
    const curSelect = document.getElementById('currency-select');
    if (curSelect) curSelect.value = code;
    
    console.log(`[Global] Currency changed to ${code}`);
    toast(`Currency: ${code} (${CURRENCIES[code].symbol})`);
    renderUI();
    window.dispatchEvent(new CustomEvent('currencyChanged', { detail: code }));
};

window.updateGlobalLanguage = (lang) => {
    state.lang = lang;
    localStorage.setItem('lang', lang);
    quoteBag = []; 
    state.currentQuote = getNextRandomQuote();
    
    const langSelect = document.getElementById('lang-select');
    if (langSelect) langSelect.value = lang;
    
    toast(`Language: ${lang.toUpperCase()}`);
    renderUI();
};

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
    window.updateGlobalLanguage(e.target.value);
};

document.getElementById('currency-select').onchange = (e) => {
    window.updateGlobalCurrency(e.target.value);
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
    
    // Notify StabilityEngine for session monitoring
    if (window.StabilityEngine) {
        StabilityEngine.sessionSwitches = (StabilityEngine.sessionSwitches || 0) + 1;
        if (StabilityEngine.sessionSwitches % 10 === 0) {
            StabilityEngine.logDiagnostic('SESSION_CHECKPOINT', { switches: StabilityEngine.sessionSwitches });
        }
    }

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
    // 1. Cleanup Memory & Global State
    if (window.swInt) { 
        clearInterval(window.swInt); 
        window.swInt = null; 
    }
    
    // Revoke generated object URLs to prevent memory bloat
    if (window.objectUrls && window.objectUrls.length > 0) {
        window.objectUrls.forEach(url => {
            try { URL.revokeObjectURL(url); } catch(e) {}
        });
        window.objectUrls = [];
    }

    // 2. Clear UI State
    history.pushState(null, null, ' ');
    
    const modal = document.getElementById('modal-container');
    const overlay = document.getElementById('modal-overlay');
    
    modal.classList.add('scale-95');
    modal.classList.remove('scale-100');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
        // Clear heavy tool content to free DOM/Memory
        const content = document.getElementById('tool-content');
        if (content) content.innerHTML = ''; 
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
        case 'image-resizer':
             c.innerHTML = `
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" id="resizer-ui">
                    <div class="space-y-6">
                        <div id="resizer-upload" class="w-full h-48 border-4 border-dashed border-gray-100 dark:border-gray-800 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center group hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-all cursor-pointer relative" onclick="document.getElementById('res-in').click()">
                            <input type="file" id="res-in" class="hidden" accept="image/*" onchange="handleResizerInput(this)">
                            <div class="flex flex-col items-center gap-4">
                                <div class="w-16 h-16 bg-blue-50 dark:bg-blue-900/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <i data-lucide="image" class="w-8 h-8 text-blue-600"></i>
                                </div>
                                <div>
                                    <h4 class="font-black text-gray-900 dark:text-white uppercase tracking-widest text-[10px] mb-1">Select Source Asset</h4>
                                    <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest">PNG, JPG, WebP, BMP, AVIF</p>
                                </div>
                            </div>
                        </div>

                        <div id="resizer-controls" class="hidden space-y-6 animate-fade-in">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border dark:border-gray-800">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block">Width (px)</label>
                                    <input type="number" id="res-w" value="1080" oninput="syncResizerDim('w')" class="w-full bg-transparent font-black text-lg outline-none text-gray-900 dark:text-white">
                                </div>
                                <div class="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border dark:border-gray-800">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block">Height (px)</label>
                                    <input type="number" id="res-h" value="1080" oninput="syncResizerDim('h')" class="w-full bg-transparent font-black text-lg outline-none text-gray-900 dark:text-white">
                                </div>
                            </div>

                            <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border dark:border-gray-800">
                                <span class="text-[10px] font-black text-gray-500 uppercase tracking-widest">Maintain Aspect Ratio</span>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" id="res-aspect" checked class="sr-only peer">
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </div>

                            <div class="space-y-4">
                                <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Target Format</label>
                                <select id="res-format" onchange="toggleResizerQuality()" class="w-full p-4 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none text-xs appearance-none">
                                    <option value="image/png">PNG (Lossless)</option>
                                    <option value="image/jpeg" selected>JPEG (High Perf)</option>
                                    <option value="image/webp">WebP (Next Gen)</option>
                                    <option value="image/bmp">BMP (Classic)</option>
                                </select>
                            </div>

                            <div id="res-quality-box" class="space-y-4">
                                <div class="flex justify-between items-center">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Output Quality</label>
                                    <span id="res-qual-val" class="text-[10px] font-black text-blue-600 uppercase tracking-widest">85%</span>
                                </div>
                                <input type="range" id="res-qual" min="1" max="100" value="85" oninput="updateResizerQual(this.value)" class="w-full h-1.5 accent-blue-600 bg-gray-100 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer">
                            </div>

                            <button onclick="runImageResizer()" class="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black shadow-2xl shadow-blue-600/30 transition-all uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3">
                                <i data-lucide="zap" class="w-4 h-4"></i> Process Transformation
                            </button>
                        </div>
                    </div>

                    <div id="resizer-preview" class="hidden animate-fade-in h-full">
                        <div class="bg-gray-50 dark:bg-gray-900/50 rounded-[2.5rem] p-8 border dark:border-gray-800 h-full flex flex-col">
                            <div class="flex items-center justify-between mb-8">
                                <h4 class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Live Asset Preview</h4>
                                <div class="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-full text-[8px] font-black uppercase tracking-widest">Privacy Shield: Active</div>
                            </div>
                            
                            <div class="flex-grow flex items-center justify-center mb-8 min-h-[250px] bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border dark:border-gray-700 shadow-inner">
                                <img id="res-preview-img" class="max-w-full max-h-[300px] object-contain">
                            </div>

                            <div class="grid grid-cols-2 gap-4 mb-6">
                                <div class="p-4 bg-white dark:bg-gray-800 rounded-2xl">
                                    <div class="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Source Resolution</div>
                                    <div id="res-orig-info" class="text-xs font-black text-gray-900 dark:text-white">---</div>
                                </div>
                                <div class="p-4 bg-white dark:bg-gray-800 rounded-2xl border-2 border-blue-500/10">
                                    <div class="text-[8px] font-black text-blue-600 uppercase tracking-widest mb-1">Target Resolution</div>
                                    <div id="res-target-info" class="text-xs font-black text-gray-900 dark:text-white">---</div>
                                </div>
                            </div>

                            <div id="res-result" class="hidden p-6 bg-green-50 dark:bg-green-900/10 border-2 border-green-100 dark:border-green-800/20 rounded-3xl animate-slide-up">
                                <div class="flex items-center justify-between gap-4">
                                    <div>
                                        <div class="text-[8px] font-black text-green-600 uppercase tracking-widest mb-1">Ready for Retrieval</div>
                                        <div id="res-final-size" class="text-xs font-black text-gray-900 dark:text-white">Processing...</div>
                                    </div>
                                    <button id="res-dl" class="px-8 py-4 bg-green-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-green-700 transition-all shadow-xl active:scale-95">Download Artifact</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             `;
             lucide.createIcons();
             break;

        case 'background-remover':
             c.innerHTML = `
                <div class="space-y-6">
                    <!-- Upload State -->
                    <div id="bg-upload" class="w-full h-64 border-4 border-dashed border-gray-100 dark:border-gray-800 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center group hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-all cursor-pointer relative" onclick="document.getElementById('bg-in').click()">
                        <input type="file" id="bg-in" class="hidden" accept="image/*" onchange="handleBgRemoveUpload(this)">
                        <div class="w-16 h-16 bg-blue-50 dark:bg-blue-900/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                            <i data-lucide="scissors" class="w-8 h-8 text-blue-600"></i>
                        </div>
                        <h4 class="font-black text-gray-900 dark:text-white uppercase tracking-widest text-[10px] mb-1">Select Asset to De-Background</h4>
                        <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Manual isolation via precision brushes</p>
                        <p class="text-[7px] text-gray-400 font-bold uppercase tracking-widest mt-4">Supports PNG, JPEG, WebP, BMP, SVG, AVIF, and other browser-supported image formats where available.</p>
                        <p class="text-[8px] text-gray-400 uppercase tracking-widest mt-2">Images are processed locally in your browser and are never uploaded.</p>
                    </div>

                    <!-- Sandbox State -->
                    <div id="bg-sandbox" class="hidden grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in">
                        <!-- Toolbar -->
                        <div class="lg:col-span-3 space-y-6">
                            <div class="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-3xl border dark:border-gray-800 space-y-6">
                                <div>
                                    <label class="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-4 block">Brush Mechanism</label>
                                    <div class="grid grid-cols-2 gap-2">
                                        <button id="bg-btn-erase" onclick="setBgBrushMode('erase')" class="flex flex-col items-center gap-2 p-4 rounded-xl transition-all bg-blue-600 text-white shadow-lg">
                                            <i data-lucide="eraser" class="w-4 h-4"></i>
                                            <span class="text-[8px] font-black uppercase">Eraser</span>
                                        </button>
                                        <button id="bg-btn-restore" onclick="setBgBrushMode('restore')" class="flex flex-col items-center gap-2 p-4 rounded-xl transition-all bg-white dark:bg-gray-800 text-gray-400 border dark:border-gray-700">
                                            <i data-lucide="paintbrush" class="w-4 h-4"></i>
                                            <span class="text-[8px] font-black uppercase">Restore</span>
                                        </button>
                                    </div>
                                </div>

                                <div class="space-y-4">
                                    <div class="flex justify-between items-center">
                                        <label class="text-[8px] font-black text-gray-400 uppercase tracking-widest">Brush Magnitude</label>
                                        <span id="bg-brush-val" class="text-[8px] font-black text-blue-600">20px</span>
                                    </div>
                                    <input type="range" id="bg-brush-size" min="1" max="100" value="20" oninput="updateBgBrushSize(this.value)" class="w-full h-1 accent-blue-600 bg-gray-200 dark:bg-gray-800 rounded-full appearance-none">
                                </div>

                                <div class="pt-4 border-t dark:border-gray-800 grid grid-cols-2 gap-2">
                                    <button onclick="bgUndo()" class="p-3 bg-white dark:bg-gray-800 rounded-xl border dark:border-gray-700 text-gray-400 disabled:opacity-30" id="bg-undo">
                                        <i data-lucide="undo-2" class="w-4 h-4 mx-auto"></i>
                                    </button>
                                    <button onclick="bgRedo()" class="p-3 bg-white dark:bg-gray-800 rounded-xl border dark:border-gray-700 text-gray-400 disabled:opacity-30" id="bg-redo">
                                        <i data-lucide="redo-2" class="w-4 h-4 mx-auto"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="bg-blue-600 p-6 rounded-3xl shadow-xl shadow-blue-600/20 space-y-4">
                                <label class="text-[8px] font-black text-blue-200 uppercase tracking-widest">Artifact Export</label>
                                <select id="bg-export-fmt" onchange="toggleBgExportWarn()" class="w-full bg-blue-700 text-white p-3 rounded-xl font-bold outline-none text-xs border-none appearance-none">
                                    <option value="image/png">PNG (Transparent)</option>
                                    <option value="image/webp">WebP (Transparent)</option>
                                    <option value="image/jpeg">JPEG (Solid Back)</option>
                                </select>
                                <div id="bg-jpg-warn" class="hidden text-[8px] text-blue-100 uppercase tracking-widest italic flex items-center gap-2">
                                    <i data-lucide="alert-circle" class="w-3 h-3"></i> Use White Fill for JPEG
                                </div>
                                <button onclick="exportBgRemovedImage()" class="w-full py-4 bg-white text-blue-600 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-50 transition-all active:scale-95 shadow-lg">
                                    Export Result
                                </button>
                            </div>
                        </div>

                        <!-- Canvas Workspace -->
                        <div class="lg:col-span-9 space-y-6">
                            <div class="relative bg-gray-100 dark:bg-gray-900 rounded-[2.5rem] border-4 border-white dark:border-gray-800 overflow-hidden min-h-[400px] flex items-center justify-center p-8 bg-[url('https://www.transparenttextures.com/patterns/checkerboard.png')]">
                                <canvas id="bg-canvas" class="max-w-full max-h-[600px] rounded-lg shadow-2xl cursor-crosshair transition-opacity duration-300"></canvas>
                                <div id="bg-loader" class="absolute inset-0 bg-white/80 dark:bg-black/80 flex flex-col items-center justify-center z-10 hidden">
                                    <div class="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                                    <span class="text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-widest">Initialising Workspace...</span>
                                </div>
                            </div>
                            
                            <div class="flex items-center justify-between px-4">
                                <div class="flex items-center gap-4">
                                    <div class="flex items-center gap-2">
                                        <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span class="text-[8px] font-black text-gray-400 uppercase tracking-widest">Sanitized Sandbox</span>
                                    </div>
                                    <span class="text-[8px] font-black text-gray-400 uppercase tracking-widest opacity-30">•</span>
                                    <span id="bg-dim-info" class="text-[8px] font-black text-gray-400 uppercase tracking-widest italic">---</span>
                                </div>
                                <button onclick="location.reload()" class="text-[8px] font-black text-red-500 uppercase tracking-widest hover:underline">Reset Session</button>
                            </div>
                        </div>
                    </div>
                </div>
             `;
             lucide.createIcons();
             break;

        case 'emi-calculator':
            c.innerHTML = `
                <div class="tool-container">
                    <!-- Left Panel: Input Controls -->
                    <div class="space-y-6">
                        <div class="fin-card">
                            <div class="flex items-center gap-3 mb-8">
                                <div class="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center">
                                    <i data-lucide="settings-2" class="w-4 h-4"></i>
                                </div>
                                <h3 class="fin-label">Loan Configuration</h3>
                            </div>
                            
                            <div class="fin-input-panel">
                                <div class="fin-input-group">
                                    <label class="fin-label">Principal Amount</label>
                                    <div class="relative">
                                        <input type="number" id="emi-p" value="500000" oninput="runEMICalc()" class="fin-input pr-16">
                                        <button onclick="window.toggleGlobalCurrency()" class="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-sm active:scale-95" id="emi-p-sym">${curCode}</button>
                                    </div>
                                    <input type="range" min="10000" max="10000000" step="10000" value="500000" oninput="document.getElementById('emi-p').value = this.value; runEMICalc()" class="mt-4 w-full h-1.5 accent-blue-600">
                                </div>

                                <div class="grid grid-cols-2 gap-4">
                                    <div class="fin-input-group">
                                        <label class="fin-label">Interest (%)</label>
                                        <input type="number" id="emi-r" value="8.5" step="0.1" oninput="runEMICalc()" class="fin-input">
                                    </div>
                                    <div class="fin-input-group">
                                        <div class="flex justify-between items-center mb-2">
                                            <label class="fin-label m-0" id="emi-tenure-label">Tenure (Yrs)</label>
                                            <select id="emi-tenure-unit" onchange="window.updateEMITenureLabel(this.value); runEMICalc()" class="bg-transparent text-[10px] font-black uppercase text-blue-600 outline-none cursor-pointer">
                                                <option value="years">Years</option>
                                                <option value="months">Months</option>
                                            </select>
                                        </div>
                                        <input type="number" id="emi-n" value="15" oninput="runEMICalc()" class="fin-input">
                                        <p class="text-[8px] text-gray-400 mt-2 italic leading-tight" id="emi-tenure-helper">Use decimal years. Example: 18 months = 1.5 years.</p>
                                    </div>
                                </div>

                                <div class="fin-input-group">
                                    <label class="fin-label">Region & Market</label>
                                    <select id="emi-country" onchange="runEMICalc()" class="fin-input cursor-pointer">
                                        ${Object.keys(GLOBAL_COUNTRY_CONFIG).map(k => `<option value="${k}" ${k === state.detectedCountry ? 'selected' : ''}>${GLOBAL_COUNTRY_CONFIG[k].name}</option>`).join('')}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="fin-card bg-green-50/30 dark:bg-green-900/5 border-green-100/50 dark:border-green-900/20">
                            <div class="flex items-center justify-between mb-6">
                                <h3 class="fin-label text-green-600">Prepayment Strategy</h3>
                                <button onclick="document.getElementById('emi-prep-extra').classList.toggle('hidden'); lucide.createIcons()" class="p-2 rounded-lg bg-green-600/10 text-green-600 hover:bg-green-600/20 transition-all">
                                    <i data-lucide="chevron-down" class="w-4 h-4"></i>
                                </button>
                            </div>
                            <div id="emi-prep-extra" class="hidden space-y-6 animate-fade-in pt-4 border-t border-green-100 dark:border-green-800">
                                <div class="fin-input-group">
                                    <label class="fin-label flex justify-between">Extra Monthly <span class="text-green-600" id="emi-prep-m-v">$0</span></label>
                                    <input type="range" id="emi-prep-m" min="0" max="100000" step="500" value="0" oninput="document.getElementById('emi-prep-m-v').innerText = formatToolCurrency(this.value); runEMICalc()" class="w-full h-1.5 accent-green-600">
                                </div>
                                <div class="fin-input-group">
                                    <label class="fin-label">One-Time Lump Sum</label>
                                    <div class="flex gap-2">
                                        <input type="number" id="emi-prep-l" value="0" oninput="runEMICalc()" class="fin-input flex-grow">
                                        <select id="emi-prep-at" onchange="runEMICalc()" class="fin-input w-28 text-[10px]">
                                            <option value="1">Month 1</option>
                                            <option value="12">Year 1</option>
                                            <option value="60">Year 5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Panel: Financial Intelligence Dashboard -->
                    <div class="fin-result-panel" id="emi-box">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="fin-card border-l-4 border-l-blue-600 flex flex-col justify-between">
                                <span class="fin-label">Monthly EMI</span>
                                <div class="fin-value text-blue-600" id="emi-out">--</div>
                                <div class="mt-4 flex items-center gap-2">
                                    <div class="w-1.5 h-1.5 rounded-full bg-blue-600" id="emi-burden-dot"></div>
                                    <span class="text-[10px] font-black opacity-50 uppercase tracking-widest" id="emi-burden-label">Interest: 0%</span>
                                </div>
                            </div>

                            <div class="fin-card border-l-4 border-l-green-500 bg-green-50/20 dark:bg-green-900/5 flex flex-col justify-between">
                                <span class="fin-label text-green-600">Total Savings</span>
                                <div class="fin-value" id="emi-saved">--</div>
                                <div class="mt-4 text-[10px] font-black text-green-600 uppercase tracking-widest animate-pulse" id="emi-tenure-save">0 Months Off</div>
                            </div>

                            <div class="fin-card md:col-span-2 flex flex-col justify-between">
                                <div class="flex justify-between items-start mb-6">
                                    <span class="fin-label">Total Repayment Amount</span>
                                    <span class="text-[10px] font-black text-red-500 uppercase tracking-widest" id="emi-tot-int">Interest: --</span>
                                </div>
                                <div class="fin-value" id="emi-tot-pay">--</div>
                                <div class="mt-6 w-full bg-gray-100 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden flex">
                                    <div id="emi-prog-p" class="h-full bg-blue-600 transition-all duration-700" style="width: 50%"></div>
                                    <div id="emi-prog-i" class="h-full bg-blue-400 transition-all duration-700" style="width: 50%"></div>
                                </div>
                            </div>
                        </div>

                        <!-- Highlights & Insights -->
                        <div id="emi-highlights" class="flex flex-wrap gap-2"></div>
                        
                        <div id="emi-insights-area" class="fin-card border-dashed bg-blue-50/30 dark:bg-blue-900/10">
                            <div class="flex items-center gap-3 mb-6">
                                <i data-lucide="sparkles" class="w-4 h-4 text-blue-600"></i>
                                <h3 class="fin-label">AI Insights</h3>
                            </div>
                            <div id="emi-insights-list" class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold"></div>
                        </div>

                        <!-- Schedule Toggle -->
                        <div class="fin-card">
                            <button onclick="document.getElementById('emi-schedule-area').classList.toggle('hidden'); lucide.createIcons()" class="w-full flex items-center justify-between text-left">
                                <span class="fin-label">Amortization Schedule</span>
                                <i data-lucide="table-2" class="w-4 h-4 opacity-40"></i>
                            </button>
                            
                            <div id="emi-schedule-area" class="hidden mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                                <div class="flex flex-wrap gap-2 mb-6">
                                    <button onclick="exportEMICSV()" class="flex-grow py-3 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all">
                                        Export CSV
                                    </button>
                                </div>
                                <div class="max-h-[300px] overflow-y-auto custom-scrollbar overflow-x-auto text-[10px]">
                                    <table class="w-full text-left whitespace-nowrap">
                                        <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10 fin-label">
                                            <tr>
                                                <th class="py-3 pr-4">Month</th>
                                                <th class="py-3 px-4 text-right">Principal</th>
                                                <th class="py-3 px-4 text-right">Interest</th>
                                                <th class="py-3 pl-4 text-right">Balance</th>
                                            </tr>
                                        </thead>
                                        <tbody id="emi-tbody" class="font-mono pt-4 text-gray-500"></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            lucide.createIcons();
            break;

        case 'word-counter':
            c.innerHTML = `
                <div class="space-y-8 word-counter" id="word-counter">
                    <div class="flex items-center justify-between">
                        <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Quantitative Linguistic Workshop</label>
                        <div class="flex gap-2">
                             <button type="button" data-wc-action="copy" class="wc-copy px-3 py-1 bg-blue-600 text-white rounded-lg text-[10px] font-black hover:bg-blue-700 transition-colors uppercase">Copy</button>
                             <button type="button" data-wc-action="upper" class="wc-upper px-3 py-1 bg-white dark:bg-gray-800 rounded-lg text-[10px] font-black hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors uppercase border dark:border-gray-700">UPPER</button>
                             <button type="button" data-wc-action="lower" class="wc-lower px-3 py-1 bg-white dark:bg-gray-800 rounded-lg text-[10px] font-black hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors uppercase border dark:border-gray-700">LOWER</button>
                             <button type="button" data-wc-action="title" class="wc-title px-3 py-1 bg-white dark:bg-gray-800 rounded-lg text-[10px] font-black hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors uppercase border dark:border-gray-700">Title</button>
                             <button type="button" data-wc-action="clear" class="wc-clear px-3 py-1 bg-red-50 dark:bg-red-900/10 text-red-600 rounded-lg text-[10px] font-black hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors uppercase border border-red-200 dark:border-red-900/50">Clear</button>
                        </div>
                    </div>
                    <textarea id="wc-in" oninput="window.runWordCount()" class="word-counter-editor w-full h-64 p-8 bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-blue-500/20 rounded-[2.5rem] dark:border-gray-700 outline-none focus:ring-4 focus:ring-blue-500/5 font-medium leading-relaxed custom-scrollbar placeholder:text-gray-300" placeholder="Type or paste your content here..."></textarea>
                    
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-[1.5rem] border dark:border-gray-700 text-center relative overflow-hidden group">
                            <div class="text-3xl font-black mb-1 group-hover:scale-110 transition-transform" id="wc-w">0</div>
                            <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Words</div>
                            <i data-lucide="type" class="absolute -bottom-2 -right-2 w-12 h-12 text-gray-200 dark:text-gray-800 opacity-40 group-hover:scale-110 transition-transform"></i>
                        </div>
                        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-[1.5rem] border dark:border-gray-700 text-center relative overflow-hidden group">
                            <div class="text-3xl font-black mb-1 group-hover:scale-110 transition-transform" id="wc-c">0</div>
                            <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Chars (Space)</div>
                            <i data-lucide="align-left" class="absolute -bottom-2 -right-2 w-12 h-12 text-gray-200 dark:text-gray-800 opacity-40 group-hover:scale-110 transition-transform"></i>
                        </div>
                        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-[1.5rem] border dark:border-gray-700 text-center relative overflow-hidden group">
                            <div class="text-3xl font-black mb-1 group-hover:scale-110 transition-transform" id="wc-c-ns">0</div>
                            <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Chars (No)</div>
                            <i data-lucide="hash" class="absolute -bottom-2 -right-2 w-12 h-12 text-gray-200 dark:text-gray-800 opacity-40 group-hover:scale-110 transition-transform"></i>
                        </div>
                        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-[1.5rem] border dark:border-gray-700 text-center relative overflow-hidden group text-blue-600">
                             <div class="text-3xl font-black mb-1 group-hover:scale-110 transition-transform" id="wc-r">0m</div>
                             <div class="text-[10px] font-black uppercase tracking-widest">Read Time</div>
                             <i data-lucide="clock" class="absolute -bottom-2 -right-2 w-12 h-12 text-blue-100 dark:text-blue-900/30 opacity-40 group-hover:scale-110 transition-transform"></i>
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
                        <input type="text" id="todo-in" class="flex-grow p-4 bg-gray-50 dark:bg-gray-900 border rounded-xl dark:border-gray-700 font-bold outline-none" placeholder="Add a new task...">
                        <button onclick="runAddTodo()" class="px-6 bg-blue-600 text-white rounded-xl font-bold">Add</button>
                    </div>
                    <div id="todo-list-v" class="space-y-3 max-h-72 overflow-y-auto"></div>
                </div>
            `;
            refreshTodoList();
            lucide.createIcons();
            break;

        case 'base64-converter':
            c.innerHTML = `
                <div class="space-y-6">
                    <textarea id="b64-in" class="w-full h-32 p-4 bg-gray-50 dark:bg-gray-900 border rounded-xl dark:border-gray-700 outline-none" placeholder="Input string..."></textarea>
                    <div class="grid grid-cols-2 gap-4">
                        <button onclick="runB64('enc')" class="py-3 bg-blue-600 text-white rounded-xl font-bold">Encode</button>
                        <button onclick="runB64('dec')" class="py-3 bg-gray-800 text-white rounded-xl font-bold">Decode</button>
                    </div>
                    <textarea id="b64-out" readonly class="w-full h-32 p-4 bg-blue-50/50 dark:bg-blue-900/10 border rounded-xl outline-none" placeholder="Result..."></textarea>
                </div>
            `;
            break;

        case 'stopwatch':
            c.innerHTML = `
                <div class="space-y-10 py-6 text-center">
                    <div class="text-7xl font-black tracking-tighter" id="sw-time">00:00:00</div>
                    <div class="flex justify-center gap-6">
                        <button id="sw-btn" onclick="runStopwatchToggle()" class="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl">
                             <i data-lucide="play" class="w-8 h-8 ml-1"></i>
                        </button>
                        <button onclick="runStopwatchReset()" class="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 flex items-center justify-center">
                             <i data-lucide="refresh-cw" class="w-8 h-8"></i>
                        </button>
                    </div>
                </div>
            `;
            lucide.createIcons();
            break;

        case 'sip-calculator':
            c.innerHTML = `
                <div class="tool-container">
                    <div class="space-y-6">
                        <div class="fin-card">
                            <div class="flex items-center gap-3 mb-8">
                                <div class="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center">
                                    <i data-lucide="trending-up" class="w-4 h-4"></i>
                                </div>
                                <h3 class="fin-label">Investment Profile</h3>
                            </div>
                            
                            <div class="fin-input-panel">
                                <div class="fin-input-group">
                                    <label class="fin-label">Monthly Investment</label>
                                    <div class="relative">
                                        <input type="number" id="sip-m" oninput="runSIPCalc()" class="fin-input pr-12" value="5000">
                                        <button onclick="window.toggleGlobalCurrency()" class="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-sm active:scale-95">${curCode}</button>
                                    </div>
                                    <input type="range" min="500" max="100000" step="500" value="5000" oninput="document.getElementById('sip-m').value = this.value; runSIPCalc()" class="mt-4 w-full h-1.5 accent-blue-600">
                                </div>

                                <div class="grid grid-cols-2 gap-4">
                                    <div class="fin-input-group">
                                        <label class="fin-label">Returns (%)</label>
                                        <input type="number" id="sip-r" step="0.1" oninput="runSIPCalc()" class="fin-input" value="12">
                                    </div>
                                    <div class="fin-input-group">
                                        <label class="fin-label">Years</label>
                                        <input type="number" id="sip-n" oninput="runSIPCalc()" class="fin-input" value="10">
                                    </div>
                                </div>

                                <div class="grid grid-cols-2 gap-4">
                                    <div class="fin-input-group">
                                        <label class="fin-label">Step-up (%)</label>
                                        <input type="number" id="sip-step" oninput="runSIPCalc()" class="fin-input" value="10">
                                    </div>
                                    <div class="fin-input-group">
                                        <label class="fin-label">Inflation (%)</label>
                                        <input type="number" id="sip-inf" oninput="runSIPCalc()" class="fin-input" value="6">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="fin-card bg-blue-50/20 dark:bg-blue-900/5">
                            <div class="flex items-center gap-3 mb-4">
                                <i data-lucide="cloud-download" class="w-4 h-4 text-blue-600"></i>
                                <span class="fin-label">Data Management</span>
                            </div>
                            <div class="flex gap-2">
                                <button onclick="document.getElementById('sip-csv-file').click()" class="flex-grow py-3 bg-gray-100 dark:bg-gray-800 rounded-xl fin-label hover:bg-gray-200 transition-all">Import</button>
                                <button onclick="exportSIPCSV()" class="flex-grow py-3 bg-white dark:bg-gray-800 rounded-xl fin-label border border-gray-100 dark:border-gray-700 hover:bg-gray-50 transition-all">Export</button>
                                <input type="file" id="sip-csv-file" class="hidden" accept=".csv" onchange="importSIPCSV(event)">
                            </div>
                        </div>
                    </div>

                    <div class="fin-result-panel">
                        <div class="fin-card bg-gray-900 text-white border-none min-h-[240px] flex flex-col justify-between overflow-hidden relative">
                            <div class="absolute -right-10 -top-10 w-40 h-40 bg-blue-600/20 blur-3xl rounded-full"></div>
                            <span class="fin-label opacity-60 relative z-10">Wealth at Maturity</span>
                            <div id="sip-out" class="fin-value text-blue-400 relative z-10">0</div>
                            <div class="grid grid-cols-2 gap-6 pt-6 border-t border-white/10 mt-6 relative z-10">
                                <div>
                                    <p class="fin-label opacity-40 mb-1">Invested</p>
                                    <span id="sip-cap" class="text-lg font-black tracking-tight">0</span>
                                </div>
                                <div>
                                    <p class="fin-label opacity-40 mb-1">Gains</p>
                                    <span id="sip-gain" class="text-lg font-black text-green-400 tracking-tight">0</span>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="fin-card bg-blue-50 border-blue-100 dark:bg-blue-900/10 dark:border-blue-900/20">
                                <span class="fin-label text-blue-600">Inflation Adj.</span>
                                <div id="sip-real" class="text-xl font-black mt-2">---</div>
                            </div>
                            <div class="fin-card bg-purple-50 border-purple-100 dark:bg-purple-900/10 dark:border-purple-900/20">
                                <span class="fin-label text-purple-600">Post-Tax</span>
                                <div id="sip-taxed" class="text-xl font-black mt-2">---</div>
                            </div>
                        </div>

                        <div id="sip-highlights" class="flex flex-wrap gap-2"></div>
                        <div id="sip-insights-area" class="grid grid-cols-1 md:grid-cols-2 gap-4"></div>

                        <div class="fin-card">
                            <button onclick="document.getElementById('sip-schedule-area').classList.toggle('hidden'); lucide.createIcons()" class="w-full flex items-center justify-between">
                                <span class="fin-label">Full Projection Table</span>
                                <i data-lucide="chevron-down" class="w-4 h-4 opacity-40"></i>
                            </button>
                            <div id="sip-schedule-area" class="hidden mt-6 overflow-x-auto">
                                <table class="w-full text-left text-[10px]">
                                    <thead class="fin-label border-b dark:border-gray-800">
                                        <tr>
                                            <th class="py-2 pr-4">Year</th>
                                            <th class="py-2 px-4 text-right">Invested</th>
                                            <th class="py-2 px-4 text-right">Interest</th>
                                            <th class="py-2 pl-4 text-right">Wealth</th>
                                        </tr>
                                    </thead>
                                    <tbody id="sip-tbody" class="font-mono text-gray-500"></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            runSIPCalc();
            lucide.createIcons();
            break;

        case 'tax-calculator':
            c.innerHTML = `
                <div class="tool-container">
                    <div class="space-y-6">
                        <div class="fin-card">
                            <div class="flex items-center gap-3 mb-8">
                                <div class="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center">
                                    <i data-lucide="landmark" class="w-4 h-4"></i>
                                </div>
                                <h3 class="fin-label">Income Configuration</h3>
                            </div>
                            
                            <div class="fin-input-panel">
                                <div class="fin-input-group">
                                    <label class="fin-label">Annual Gross Income</label>
                                    <div class="relative">
                                        <input type="text" id="tax-in" value="${state.lastTaxIncome || '1,200,000'}" oninput="runTaxCalc()" class="fin-input pr-16 bg-blue-50/50 border-blue-100 dark:bg-blue-900/10 dark:border-blue-900/20">
                                        <button onclick="window.toggleGlobalCurrency()" class="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-sm active:scale-95" id="tax-currency-sym">${curCode}</button>
                                    </div>
                                </div>

                                <div class="fin-input-group">
                                    <label class="fin-label">Jurisdiction</label>
                                    <select id="tax-country" onchange="window.setManualCountry(this.value)" class="fin-input cursor-pointer">
                                        ${Object.keys(GLOBAL_COUNTRY_CONFIG).map(k => `<option value="${k}" ${k === (state.lastTaxCountry || state.detectedCountry) ? 'selected' : ''}>${GLOBAL_COUNTRY_CONFIG[k].name}</option>`).join('')}
                                    </select>
                                </div>

                                <div id="tax-year-container" class="fin-input-group ${((state.lastTaxCountry || state.detectedCountry) === 'IN') ? '' : 'hidden'}">
                                    <label class="fin-label">Assessment Year</label>
                                    <select id="tax-year" onchange="runTaxCalc()" class="fin-input cursor-pointer">
                                        <option value="2024-25" ${(state.lastTaxYear === '2024-25' || !state.lastTaxYear) ? 'selected' : ''}>FY 2024-25 / AY 2025-26</option>
                                        <option value="2025-26" ${state.lastTaxYear === '2025-26' ? 'selected' : ''}>FY 2025-26 / AY 2026-27</option>
                                    </select>
                                </div>

                                <div id="tax-us-addon" class="hidden fin-input-group">
                                    <label class="fin-label">State Tax (%)</label>
                                    <input type="number" id="tax-state-rate" value="5" step="0.1" oninput="runTaxCalc()" class="fin-input">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fin-result-panel" id="tax-box">
                        <div class="fin-card border-l-4 border-l-red-500 bg-red-50/10 dark:bg-red-900/5">
                            <span class="fin-label text-red-600">Total Tax Liability</span>
                            <div id="tax-out" class="fin-value text-red-600">--</div>
                            <div class="mt-4 fin-label opacity-50" id="tax-rate">Effective Rate: 0%</div>
                        </div>

                        <div class="fin-card border-l-4 border-l-green-500 bg-green-50/10 dark:bg-green-900/5">
                            <span class="fin-label text-green-600">Monthly In-Hand</span>
                            <div id="tax-inhand" class="fin-value text-green-600">--</div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="fin-card">
                                <span class="fin-label">Std. Deduction</span>
                                <div id="tax-ded-val" class="text-lg font-black mt-1">--</div>
                            </div>
                            <div class="fin-card">
                                <span class="fin-label">Total Deductibles</span>
                                <div id="tax-tot-ded" class="text-lg font-black mt-1">--</div>
                            </div>
                        </div>

                        <div id="tax-insights-area" class="fin-card border-dashed bg-indigo-50/30 dark:bg-indigo-900/10">
                            <div class="flex items-center gap-3 mb-6">
                                <i data-lucide="shield-check" class="w-4 h-4 text-indigo-600"></i>
                                <h3 class="fin-label">Compliance Auditor Insights</h3>
                            </div>
                            <div id="tax-insights-list" class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold"></div>
                        </div>

                        <div id="tax-india-compliance" class="hidden fin-card">
                            <h3 class="fin-label mb-6" id="tax-regime-label">Tax Slab Analysis (FY 24-25)</h3>
                            <div class="overflow-x-auto">
                                <table class="w-full text-left text-[10px]">
                                    <thead class="fin-label border-b dark:border-gray-800">
                                        <tr>
                                            <th class="py-2 pr-4">Slab</th>
                                            <th class="py-2 px-4 text-center">Rate</th>
                                            <th class="py-2 pl-4 text-right">Tax</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tax-tbody" class="font-bold py-2 text-gray-500"></tbody>
                                    <tfoot>
                                        <tr class="border-t dark:border-gray-800">
                                            <td colspan="2" class="py-2 fin-label pt-4">Cess (4%)</td>
                                            <td class="py-2 text-right pt-4 font-mono font-black" id="tax-cess">--</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>

                        <div id="tax-gen-slabs" class="hidden grid grid-cols-2 gap-4"></div>

                        <div class="text-[8px] font-bold text-gray-400 dark:text-gray-500 px-6 py-4 bg-gray-50 dark:bg-black/20 rounded-[2rem] border border-dashed dark:border-gray-800">
                            <b>Disclaimer:</b> Tax estimates are educational and may vary by deductions, surcharge, rebate eligibility, residential status, special-rate income, and future law changes.
                        </div>
                    </div>
                </div>
            `;
            // Auto-run trigger
            requestAnimationFrame(() => runTaxCalc());
            lucide.createIcons();
            break;

        case 'credit-card-interest':
            c.innerHTML = `
                <div class="space-y-10">
                    <div class="flex items-center justify-between">
                        <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Debt Scrutiny Engine</label>
                        <div class="flex gap-2">
                             <button onclick="document.getElementById('cc-csv-file').click()" title="Import CSV" class="p-2 bg-gray-50 dark:bg-gray-800 rounded-xl transition-all">
                                <i data-lucide="upload" class="w-3 h-3"></i>
                             </button>
                             <input type="file" id="cc-csv-file" class="hidden" accept=".csv" onchange="importCCCSV(event)">
                             <button onclick="exportCCCSV()" title="Export CSV" class="p-2 bg-gray-50 dark:bg-gray-800 rounded-xl transition-all">
                                <i data-lucide="download" class="w-3 h-3"></i>
                             </button>
                        </div>
                    </div>
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
                            <input type="number" id="fr-hours" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none" value="35" min="0" max="168" oninput="runFreelanceCalc()">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="space-y-3">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Platform Fees (%)</label>
                            <input type="number" id="fr-fee" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none" value="0" step="0.1" oninput="runFreelanceCalc()">
                            <p class="text-[9px] text-gray-400 uppercase font-black tracking-tighter italic">Upwork, Fiverr etc.</p>
                        </div>
                        <div class="space-y-3">
                            <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Estimated Tax (%)</label>
                            <input type="number" id="fr-tax" class="w-full p-5 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none" value="0" step="1" oninput="runFreelanceCalc()">
                             <p class="text-[9px] text-gray-400 uppercase font-black tracking-tighter italic">Self-employment tax estimate.</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                         <div class="p-6 bg-gray-50 dark:bg-gray-800 rounded-[2rem] border dark:border-gray-700 text-center">
                            <span class="text-[9px] font-black text-gray-500 uppercase tracking-widest block mb-3">Weekly Net</span>
                            <div id="fr-week" class="text-2xl font-black text-gray-800 dark:text-gray-100">---</div>
                         </div>
                         <div class="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-[2rem] border dark:border-blue-900/20 text-center">
                            <span class="text-[9px] font-black text-blue-600 uppercase tracking-widest block mb-3">Monthly Net</span>
                            <div id="fr-month" class="text-2xl font-black text-blue-600">---</div>
                         </div>
                         <div class="p-6 bg-gray-900 text-white rounded-[2rem] text-center shadow-xl">
                            <span class="text-[9px] font-black text-blue-400 uppercase tracking-widest block mb-3">Annual Net</span>
                            <div id="fr-year" class="text-2xl font-black">---</div>
                         </div>
                    </div>

                    <div class="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/20">
                         <p class="text-[10px] text-blue-600 dark:text-blue-400 font-bold text-center leading-relaxed">
                            Projection assumed on 52 working weeks/year. Net income excludes overheads like software, equipment, and health insurance.
                         </p>
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
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div class="space-y-3">
                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center block">Investment</label>
                            <input type="number" id="cry-in" class="w-full p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none" value="1000" oninput="runCryCalc()">
                        </div>
                        <div class="space-y-3">
                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center block">Buy Price</label>
                            <input type="number" id="cry-buy" class="w-full p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none" value="45000" oninput="runCryCalc()">
                        </div>
                        <div class="space-y-3">
                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center block">Sell Price</label>
                            <input type="number" id="cry-sell" class="w-full p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none" value="52000" oninput="runCryCalc()">
                        </div>
                        <div class="space-y-3">
                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center block">Exchange Fee (%)</label>
                            <input type="number" id="cry-fee" step="0.1" class="w-full p-5 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none" value="0.5" oninput="runCryCalc()">
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="md:col-span-2 p-10 bg-gray-900 text-white rounded-[2.5rem] text-center shadow-2xl space-y-6 relative overflow-hidden group">
                            <div class="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                            <div class="relative z-10">
                                 <span class="text-[8px] font-black text-blue-400 uppercase tracking-[0.4em] mb-2 block">Net Profit After Tax</span>
                                 <div id="cry-profit" class="text-5xl font-black">---</div>
                                 <div id="cry-perc" class="text-lg font-black text-green-400 mt-2">+0%</div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 pt-6 border-t border-white/5 relative z-10">
                                 <div class="text-center border-r border-white/5">
                                    <span class="text-[8px] font-black text-gray-500 uppercase tracking-widest block mb-1">Tokens Received</span>
                                    <span id="cry-tokens" class="text-sm font-bold">---</span>
                                 </div>
                                 <div class="text-center">
                                    <span class="text-[8px] font-black text-gray-500 uppercase tracking-widest block mb-1">Total Balance</span>
                                    <span id="cry-bal" class="text-sm font-bold">---</span>
                                 </div>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <div class="p-6 bg-white dark:bg-gray-900 rounded-3xl border dark:border-gray-800">
                                <h5 class="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-4">Market Metrics</h5>
                                <div class="space-y-4">
                                    <div class="flex justify-between items-center">
                                        <span class="text-[10px] font-bold text-gray-500 uppercase">Break-even</span>
                                        <span id="cry-be" class="text-xs font-black text-gray-900 dark:text-white">---</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-[10px] font-bold text-gray-500 uppercase">Fees Paid</span>
                                        <span id="cry-fee-val" class="text-xs font-black text-red-400">---</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <input type="number" id="cry-tax" value="30" oninput="runCryCalc()" class="w-12 bg-transparent border-b dark:border-gray-700 text-[10px] font-black outline-none">% Tax
                                        <span id="cry-tax-val" class="text-xs font-black text-red-500">---</span>
                                    </div>
                                </div>
                            </div>
                            <div class="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-900/20 text-center">
                                <h5 class="text-[8px] font-black text-blue-600 uppercase tracking-widest mb-2">Final Take-Away</h5>
                                <div id="cry-net" class="text-xl font-black text-blue-700 dark:text-blue-400">---</div>
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
                <div class="tool-container">
                    <div class="space-y-6">
                        <div class="fin-card">
                            <div class="flex items-center gap-3 mb-8">
                                <div class="w-8 h-8 rounded-lg bg-indigo-600/10 text-indigo-600 flex items-center justify-center">
                                    <i data-lucide="bar-chart-3" class="w-4 h-4"></i>
                                </div>
                                <h3 class="fin-label">Investment Parameters</h3>
                            </div>
                            
                            <div class="fin-input-panel">
                                <div class="fin-input-group">
                                    <label class="fin-label">Initial Capital / Spend</label>
                                    <div class="relative">
                                        <input type="number" id="roi-s" value="5000" oninput="runROICalc()" class="fin-input pr-12">
                                        <button onclick="window.toggleGlobalCurrency()" class="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-sm active:scale-95">${curCode}</button>
                                    </div>
                                    <p class="text-[9px] text-gray-400 mt-1 uppercase font-black italic">Total marketing budget spent</p>
                                </div>

                                <div class="fin-input-group">
                                    <label class="fin-label">Final Value / Revenue</label>
                                    <div class="relative">
                                        <input type="number" id="roi-r" value="12000" oninput="runROICalc()" class="fin-input pr-12">
                                        <button onclick="window.toggleGlobalCurrency()" class="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-sm active:scale-95">${curCode}</button>
                                    </div>
                                    <p class="text-[9px] text-gray-400 mt-1 uppercase font-black italic">Total revenue generated from ads</p>
                                </div>

                                <div class="fin-input-group">
                                    <label class="fin-label">Duration (Days)</label>
                                    <input type="number" id="roi-t" value="365" oninput="runROICalc()" class="fin-input">
                                    <p class="text-[9px] text-gray-400 mt-1 uppercase font-black italic">Used for annualizing performance</p>
                                </div>
                            </div>

                            <div id="roi-error" class="mt-4 p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-xl hidden">
                                <p class="text-[10px] font-bold text-red-600 dark:text-red-400 text-center uppercase tracking-widest">Initial capital must be greater than 0.</p>
                            </div>
                        </div>

                        <div class="fin-card bg-indigo-50/20 dark:bg-indigo-900/5">
                            <div class="flex items-center gap-3 mb-4">
                                <i data-lucide="database" class="w-4 h-4 text-indigo-600"></i>
                                <span class="fin-label text-indigo-600">Persistence Engine</span>
                            </div>
                            <div class="flex gap-2">
                                <button onclick="document.getElementById('roi-csv-file').click()" class="flex-grow py-3 bg-gray-100 dark:bg-gray-800 rounded-xl fin-label transition-all">Import</button>
                                <button onclick="exportROICSV()" class="flex-grow py-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 fin-label hover:bg-gray-50 transition-all">Export</button>
                                <input type="file" id="roi-csv-file" class="hidden" accept=".csv" onchange="importROICSV(event)">
                            </div>
                        </div>
                    </div>

                    <div class="fin-result-panel">
                        <div class="fin-card bg-indigo-600 text-white border-none min-h-[220px] flex flex-col justify-center items-center text-center overflow-hidden relative">
                            <div class="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-700 opacity-50"></div>
                            <div class="absolute -right-10 -top-10 w-40 h-40 bg-white/10 blur-3xl rounded-full"></div>
                            <span class="fin-label text-indigo-100 mb-2 relative z-10">Net Return on Investment (ROI)</span>
                            <div id="roi-out" class="text-6xl font-black relative z-10">0%</div>
                            <div class="w-full max-w-[200px] h-1 bg-white/20 rounded-full mt-6 overflow-hidden relative z-10">
                                <div id="roi-bar" class="h-full bg-white shadow-[0_0_15px_white] transition-all duration-1000" style="width: 0%"></div>
                            </div>
                            <p class="text-[9px] font-bold text-indigo-200 mt-4 uppercase tracking-[0.2em] relative z-10">Profit divided by spend</p>
                        </div>

                        <div class="grid grid-cols-3 gap-4">
                            <div class="fin-card group hover:shadow-lg transition-all">
                                <span class="fin-label opacity-60">Net Profit</span>
                                <div id="roi-p" class="text-lg font-black mt-1">--</div>
                            </div>
                            <div class="fin-card group hover:shadow-lg transition-all">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="fin-label opacity-60">ROAS</span>
                                    <div class="w-4 h-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[8px] font-bold group-hover:bg-indigo-600 group-hover:text-white transition-colors" title="Revenue divided by spend">?</div>
                                </div>
                                <div id="roi-a" class="text-lg font-black mt-1">--</div>
                            </div>
                            <div class="fin-card group hover:shadow-lg transition-all">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="fin-label opacity-60">Annualized</span>
                                    <div class="w-4 h-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[8px] font-bold group-hover:bg-indigo-600 group-hover:text-white transition-colors" title="ROI adjusted to 365-day period">?</div>
                                </div>
                                <div id="roi-ann" class="text-lg font-black mt-1">--</div>
                            </div>
                        </div>

                        <div class="fin-card border-dashed">
                            <h4 class="fin-label mb-6">Efficiency Breakdown</h4>
                            <div id="roi-table" class="space-y-4"></div>
                        </div>

                        <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800 text-center">
                            <p class="text-[9px] text-gray-400 font-medium leading-relaxed italic">ROI is an estimate and does not include platform fees, taxes, refunds, attribution errors, or operational costs unless included in your inputs.</p>
                        </div>
                    </div>
                </div>
            `;
            runROICalc();
            lucide.createIcons();
            break;

        case 'fd-calculator':
            c.innerHTML = `
                <div class="tool-container">
                    <div class="space-y-6">
                        <div class="fin-card">
                            <div class="flex items-center gap-3 mb-8">
                                <div class="w-8 h-8 rounded-lg bg-emerald-600/10 text-emerald-600 flex items-center justify-center">
                                    <i data-lucide="piggy-bank" class="w-4 h-4"></i>
                                </div>
                                <h3 class="fin-label">Deposit Parameters</h3>
                            </div>
                            
                            <div class="fin-input-panel">
                                <div class="fin-input-group">
                                    <label class="fin-label">Deposit Amount</label>
                                    <div class="relative">
                                        <input type="number" id="fd-p" value="100000" oninput="runFDCalc()" class="fin-input pr-12 bg-emerald-50/50 border-emerald-100 dark:bg-emerald-900/10 dark:border-emerald-900/20">
                                        <button onclick="window.toggleGlobalCurrency()" class="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-all shadow-sm active:scale-95">${curCode}</button>
                                    </div>
                                </div>

                                <div class="grid grid-cols-2 gap-4">
                                    <div class="fin-input-group">
                                        <label class="fin-label">Interest Rate (%)</label>
                                        <input type="number" id="fd-r" step="0.1" value="7.5" oninput="runFDCalc()" class="fin-input">
                                    </div>
                                    <div class="fin-input-group">
                                        <label class="fin-label">Tenure (Years)</label>
                                        <input type="number" id="fd-n" value="5" oninput="runFDCalc()" class="fin-input">
                                    </div>
                                </div>

                                <div class="fin-input-group">
                                    <label class="fin-label">Compounding Frequency</label>
                                    <select id="fd-freq" onchange="runFDCalc()" class="fin-input cursor-pointer">
                                        <option value="4">Quarterly (Compounded)</option>
                                        <option value="12">Monthly</option>
                                        <option value="2">Half-Yearly</option>
                                        <option value="1">Annually</option>
                                    </select>
                                </div>

                                <div class="grid grid-cols-2 gap-4">
                                    <div class="fin-input-group">
                                        <label class="fin-label">Tax Bracket (%)</label>
                                        <input type="number" id="fd-tax" value="0" oninput="runFDCalc()" class="fin-input">
                                    </div>
                                    <div class="fin-input-group">
                                        <label class="fin-label">Inflation (%)</label>
                                        <input type="number" id="fd-inf" value="0" oninput="runFDCalc()" class="fin-input">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="fin-card bg-emerald-50/20 dark:bg-emerald-900/5">
                            <div class="flex items-center gap-3 mb-4">
                                <i data-lucide="share-2" class="w-4 h-4 text-emerald-600"></i>
                                <span class="fin-label text-emerald-600">Persistence Services</span>
                            </div>
                            <div class="flex gap-2">
                                <button onclick="document.getElementById('fd-csv-file').click()" class="flex-grow py-3 bg-gray-100 dark:bg-gray-800 rounded-xl fin-label transition-all">Import</button>
                                <button onclick="exportFDCSV()" class="flex-grow py-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 fin-label hover:bg-gray-50 transition-all">Export</button>
                                <input type="file" id="fd-csv-file" class="hidden" accept=".csv" onchange="importFDCSV(event)">
                            </div>
                        </div>
                    </div>

                    <div class="fin-result-panel">
                        <div class="fin-card bg-gray-900 text-white border-none min-h-[220px] flex flex-col justify-between overflow-hidden relative">
                            <div class="absolute -right-10 -top-10 w-40 h-40 bg-emerald-600/20 blur-3xl rounded-full"></div>
                            <span class="fin-label opacity-60 relative z-10">Maturity Value (Net)</span>
                            <div id="fd-out" class="fin-value text-emerald-400 relative z-10">0</div>
                            <div class="grid grid-cols-2 gap-6 pt-6 border-t border-white/10 mt-6 relative z-10">
                                <div>
                                    <p class="fin-label opacity-40 mb-1">Interest Earned</p>
                                    <span id="fd-tot-int" class="text-lg font-black text-emerald-400 tracking-tight">0</span>
                                </div>
                                <div>
                                    <p class="fin-label opacity-40 mb-1" id="fd-extra-label">Tax & Infl. Loss</p>
                                    <span id="fd-tot-tax" class="text-lg font-black text-red-400 tracking-tight">0</span>
                                </div>
                            </div>
                        </div>

                        <div id="fd-highlights" class="flex flex-wrap gap-3"></div>

                        <div id="fd-box" class="hidden fin-card animate-fade-in space-y-8">
                            <div class="flex items-center justify-between">
                                <h4 class="fin-label">Yield Analysis & Comparison</h4>
                                <div id="fd-verdict" class="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-[8px] font-black uppercase tracking-widest text-gray-500">---</div>
                            </div>
                            
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                                <!-- Chart Section -->
                                <div class="space-y-6">
                                    <div class="flex justify-center p-4 bg-gray-50/50 dark:bg-gray-900/50 rounded-3xl">
                                        <canvas id="fd-pie-chart" class="max-w-[180px] w-full"></canvas>
                                    </div>
                                    <div id="fd-simple-insights" class="space-y-3"></div>
                                </div>
                                
                                <!-- Comparison Detail Section -->
                                <div class="space-y-6">
                                     <div class="space-y-4">
                                        <h5 class="text-[9px] font-black text-gray-400 uppercase tracking-widest">Compounding comparison</h5>
                                        <div id="fd-comp-table" class="space-y-2"></div>
                                     </div>
                                     
                                     <div class="space-y-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                                        <h5 class="text-[9px] font-black text-gray-400 uppercase tracking-widest">Real Return Analysis</h5>
                                        <div id="fd-real-return" class="grid grid-cols-2 gap-4"></div>
                                     </div>

                                     <div class="space-y-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                                        <h5 class="text-[9px] font-black text-gray-400 uppercase tracking-widest">Purchasing Power Result</h5>
                                        <div id="fd-power-analysis" class="space-y-3"></div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            runFDCalc();
            lucide.createIcons();
            break;

        case 'loan-comparison':
            c.innerHTML = `
                <div class="tool-container">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div class="lg:col-span-1 space-y-8">
                            <div class="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] border dark:border-gray-800 space-y-6">
                                <h3 class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Base Loan Configuration</h3>
                                <div class="space-y-4">
                                    <label class="text-[9px] font-black text-gray-400 uppercase tracking-widest">Principal Amount Wanted</label>
                                    <div class="relative">
                                        <button onclick="window.toggleGlobalCurrency()" id="lc-p-sym" class="absolute left-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-sm active:scale-95">${curCode}</button>
                                        <input type="number" id="lc-p" value="500000" oninput="runLoanComp()" class="w-full p-4 pl-12 bg-white dark:bg-black/20 border rounded-2xl dark:border-gray-700 outline-none font-bold">
                                    </div>
                                </div>
                                <div class="space-y-4">
                                    <label class="text-[9px] font-black text-gray-400 uppercase tracking-widest">Tenure (Years)</label>
                                    <input type="number" id="lc-n" value="5" oninput="runLoanComp()" class="w-full p-4 bg-white dark:bg-black/20 border rounded-2xl dark:border-gray-700 outline-none font-bold">
                                </div>
                                <button onclick="addLoanScenario()" class="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-blue-600/20 hover:-translate-y-1 transition-all">Add Offer Variant</button>
                            </div>
                        </div>

                        <div class="lg:col-span-2 space-y-8">
                            <div id="lc-scenarios" class="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
                            
                            <div id="lc-results" class="hidden animate-fade-in space-y-6">
                                <div class="p-8 bg-blue-600 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                                    <div class="absolute -right-20 -top-20 w-64 h-64 bg-white/10 blur-[80px] rounded-full"></div>
                                    <h4 class="text-[10px] font-black uppercase tracking-widest opacity-60 mb-8">Recommendation Engine</h4>
                                    <div id="lc-rec" class="text-xl font-bold leading-tight">Analyzing best financial outcome...</div>
                                </div>
                                
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" id="lc-cards"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            initLoanComp();
            lucide.createIcons();
            break;


        case 'insurance-estimator':
            c.innerHTML = `
                <div class="space-y-10">
                    <div class="flex items-center justify-between">
                        <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Risk Protection Oracle</label>
                        <div class="flex gap-2">
                             <button onclick="exportInsCSV()" title="Export CSV" class="p-2 bg-gray-50 dark:bg-gray-800 rounded-xl transition-all">
                                <i data-lucide="download" class="w-3 h-3"></i>
                             </button>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="space-y-3">
                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Plan Type</label>
                            <select id="ins-type" class="w-full p-4 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none" onchange="runInsCalc()">
                                <option value="term">Term Life Insurance</option>
                                <option value="health">Health Insurance</option>
                                <option value="accident">Accident Cover</option>
                                <option value="ci">Critical Illness Plan</option>
                            </select>
                        </div>
                        <div class="space-y-3">
                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Coverage Amount (${cur})</label>
                            <input type="number" id="ins-cov" class="w-full p-4 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none" value="1000000" oninput="runInsCalc()">
                        </div>
                        <div class="space-y-3">
                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Your Age</label>
                            <input type="number" id="ins-age" class="w-full p-4 bg-gray-50 border rounded-2xl dark:bg-gray-900 dark:border-gray-700 font-bold outline-none" value="25" oninput="runInsCalc()">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="space-y-6">
                             <div class="space-y-4">
                                <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block text-center md:text-left">Tobacco / Smoking</label>
                                <div class="flex p-1 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                                    <button id="ins-t-no" onclick="setInsTobacco(false)" class="flex-grow py-3 rounded-xl text-[10px] font-black uppercase transition-all bg-blue-600 text-white shadow-lg">Non-Smoker</button>
                                    <button id="ins-t-yes" onclick="setInsTobacco(true)" class="flex-grow py-3 rounded-xl text-[10px] font-black uppercase transition-all text-gray-400 hover:text-gray-900 dark:hover:text-white">Smoker</button>
                                </div>
                             </div>

                             <div class="space-y-4">
                                <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block text-center md:text-left">Add-on Riders</label>
                                <div class="grid grid-cols-1 gap-3">
                                    <label class="flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded-2xl border dark:border-gray-800 cursor-pointer group hover:border-blue-500/50 transition-all">
                                        <div class="flex items-center gap-3">
                                            <i data-lucide="zap" class="w-4 h-4 text-blue-500"></i>
                                            <span class="text-[10px] font-black text-gray-500 uppercase tracking-widest">Critical Illness Cover</span>
                                        </div>
                                        <input type="checkbox" id="ins-r-ci" onchange="runInsCalc()" class="w-4 h-4 rounded text-blue-600">
                                    </label>
                                    <label class="flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded-2xl border dark:border-gray-800 cursor-pointer group hover:border-blue-500/50 transition-all">
                                        <div class="flex items-center gap-3">
                                            <i data-lucide="shield-alert" class="w-4 h-4 text-red-500"></i>
                                            <span class="text-[10px] font-black text-gray-500 uppercase tracking-widest">Accidental Disability</span>
                                        </div>
                                        <input type="checkbox" id="ins-r-ad" onchange="runInsCalc()" class="w-4 h-4 rounded text-blue-600">
                                    </label>
                                </div>
                             </div>
                        </div>

                        <div class="flex flex-col space-y-6 justify-center">
                            <div class="p-8 bg-gray-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
                                <div class="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
                                <div class="relative z-10 text-center">
                                    <span class="text-[8px] font-black text-blue-400 uppercase tracking-[0.4em] mb-4 block">Estimated Premium</span>
                                    <div class="flex items-end justify-center gap-2">
                                        <div id="ins-out" class="text-5xl font-black">---</div>
                                        <span class="text-xs font-black text-gray-500 mb-2">/MO</span>
                                    </div>
                                    <p class="text-[8px] font-bold text-gray-500 mt-6 uppercase tracking-widest leading-loose">Educational estimate only. Actual premium may vary by insurer and underwriting.</p>
                                    
                                    <div id="ins-breakdown" class="mt-6 pt-6 border-t border-white/5 space-y-1 hidden">
                                        <div class="flex justify-between text-[8px] uppercase tracking-tighter">
                                            <span class="text-gray-500">Base Premium</span>
                                            <span id="ins-val-base" class="font-mono">--</span>
                                        </div>
                                        <div id="ins-row-smoker" class="flex justify-between text-[8px] uppercase tracking-tighter hidden">
                                            <span class="text-gray-500">Tobacco Loading</span>
                                            <span id="ins-val-smoker" class="font-mono">--</span>
                                        </div>
                                        <div id="ins-row-riders" class="flex justify-between text-[8px] uppercase tracking-tighter hidden">
                                            <span class="text-gray-500">Rider Add-ons</span>
                                            <span id="ins-val-riders" class="font-mono">--</span>
                                        </div>
                                        <div id="ins-row-gst" class="flex justify-between text-[8px] uppercase tracking-tighter hidden">
                                            <span class="text-gray-500">GST / Tax (18%)</span>
                                            <span id="ins-val-gst" class="font-mono">--</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div id="ins-caution" class="hidden animate-bounce-subtle">
                                <div class="px-4 py-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-900/30 rounded-2xl flex items-center gap-3">
                                    <i data-lucide="alert-triangle" class="w-4 h-4 text-orange-500"></i>
                                    <p class="text-[10px] font-bold text-orange-700 dark:text-orange-400 leading-tight">Premiums may vary significantly after medical underwriting.</p>
                                </div>
                            </div>

                            <div class="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-900/20 text-center space-y-2">
                                <h5 class="text-[10px] font-black text-blue-600 uppercase tracking-widest">Safety Quotient</h5>
                                <div id="ins-safety" class="text-sm font-bold text-gray-600 dark:text-gray-300 tracking-tight">Optimal coverage strategy for your cohort.</div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800 text-center">
                        <p class="text-[9px] text-gray-400 font-medium leading-relaxed italic">Disclaimer: This is an educational estimate, not an insurer quote. Actual premiums depend on underwriting, medical history, policy term, insurer pricing, GST, and policy conditions. Term life estimates are indicative for a standard policy term.</p>
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
                                        <option value="image/webp">WebP (Modern Web Format)</option>
                                        <option value="image/jpeg">JPEG (Efficient Compression)</option>
                                        <option value="image/png">PNG (Lossless / Transparent)</option>
                                        <option value="image/avif">AVIF (Next-Gen High Quality)</option>
                                        <option value="image/bmp">BMP (Classic Uncompressed)</option>
                                        <option value="image/gif">GIF (Static Banner)</option>
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
                <div class="space-y-10 unit-converter-card">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div class="space-y-8 min-w-0">
                            <div class="space-y-4">
                                <label class="text-xs font-black text-gray-400 uppercase tracking-widest flex justify-between">
                                    <span>Universal Magnitude</span>
                                    <span id="uc-in-preview" class="opacity-0 transition-opacity"></span>
                                </label>
                                <input type="number" id="uc-in" oninput="runUnitConv()" class="unit-converter-input w-full p-8 bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-blue-500/20 rounded-[2.5rem] font-black outline-none focus:ring-4 focus:ring-blue-500/5 transition-all text-gray-900 dark:text-white" placeholder="100.00">
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
                        
                        <div class="space-y-8 min-w-0">
                            <div class="p-6 bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-[2rem] grid grid-cols-2 gap-4">
                                <div class="space-y-3 min-w-0">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Source Entity</label>
                                    <select id="uc-f" onchange="runUnitConv()" class="w-full p-4 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none text-sm appearance-none"></select>
                                </div>
                                <div class="space-y-3 min-w-0">
                                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Target Entity</label>
                                    <select id="uc-t" onchange="runUnitConv()" class="w-full p-4 bg-gray-50 dark:bg-gray-900 border rounded-2xl dark:border-gray-700 font-bold outline-none text-sm appearance-none"></select>
                                </div>
                            </div>
                            
                            <div class="tool-result flex flex-col items-center justify-center py-12 bg-blue-600 text-white rounded-[3rem] shadow-2xl shadow-blue-600/30 overflow-hidden relative group unit-converter-card">
                                <div class="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                <span class="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-60">Standard Metric Result</span>
                                <div class="flex flex-col items-center gap-1 w-full px-4">
                                    <div class="unit-converter-result-value font-black tracking-tighter" id="uc-out">0.00</div>
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
                            <button class="w-full mt-4 py-4 bg-blue-600 text-white rounded-2xl text-xs font-black shadow-xl hover:bg-green-700 transition-all uppercase tracking-widest">Download ZIP Archive</button>
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

    // AUTO-RUN AFTER INJECTION
    const runMap = {
        'emi-calculator': window.runEMICalc,
        'sip-calculator': window.runSIPCalc,
        'tax-calculator': window.runTaxCalc,
        'credit-card-interest': window.runCCCalc,
        'website-cost': window.runWebCost,
        'freelancer-earning': window.runFreelanceCalc,
        'crypto-profit': window.runCryCalc,
        'roi-calculator': window.runROICalc,
        'insurance-estimator': window.runInsCalc,
        'fd-calculator': window.runFDCalc,
        'loan-comparison': window.runLoanComp,
        'age-calculator': window.runAgeCalc,
        'word-counter': window.runWordCounter,
        'password-generator': window.runPassGen,
        'qr-code-generator': window.runQRGen,
        'color-picker': window.runColorInit,
        'base64-converter': window.runB64Calc,
        'url-converter': window.runUrlCalc,
        'unit-converter': window.runUnitCalc,
        'stopwatch': window.runStopwatchInit,
        'notes-app': () => { if(window.refreshNotes) window.refreshNotes(); },
        'todo-list': () => { if(window.refreshTodoList) window.refreshTodoList(); }
    };
    
    if (runMap[normalizedId]) {
        try {
            // Use setTimeout to ensure DOM is fully ready
            setTimeout(() => {
                if (typeof runMap[normalizedId] === 'function') {
                    runMap[normalizedId]();
                }
            }, 50);
        } catch (e) {
            console.warn(`Auto-run failed for ${normalizedId}:`, e);
        }
    }
}

// --- CSV UTILITIES (CSVCore) ---
const CSVCore = {
    generateCSV: (data) => {
        if (!data || !data.length) return "";
        const headers = Object.keys(data[0]);
        const rows = data.map(row => 
            headers.map(header => {
                let val = row[header];
                if (val instanceof Decimal) val = val.toFixed(2);
                if (typeof val === 'string' && val.includes(',')) return `"${val}"`;
                return val;
            }).join(",")
        );
        return [headers.join(","), ...rows].join("\n");
    },

    downloadCSV: (filename, content) => {
        const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },

    parseCSV: (text) => {
        const lines = text.split("\n").filter(l => l.trim().length > 0);
        if (lines.length < 2) return [];
        const headers = lines[0].split(",").map(h => h.trim().replace(/"/g, ''));
        return lines.slice(1).map(line => {
            const values = line.split(",").map(v => v.trim().replace(/"/g, ''));
            const obj = {};
            headers.forEach((h, i) => {
                obj[h] = values[i];
            });
            return obj;
        });
    }
};

// --- FINTECH CORE ENGINE (FinancialCore) ---
const FinancialCore = {
    /**
     * Safety Wrapper
     */
    ensureDecimal: (value) => {
        const v = D(value);
        if (v.isNaN() || !v.isFinite()) return D(0);
        return v;
    },

    /**
     * Standard Patterns for Rate Handling
     */
    getAnnualRate: (rate) => FinancialCore.ensureDecimal(rate),
    getMonthlyRate: (annualRate) => FinancialCore.ensureDecimal(annualRate).div(1200),
    
    /**
     * Progressive Tax Engine (Hardcoded logic for multiple jurisdictions)
     * Supports multi-year FY configuration and Section 87A Marginal Relief.
     * RETURN: { grossIncome, taxableIncome, slabTax, taxAfterRelief, finalTax, cess, effectiveRate, slabDetails }
     */
    calculateProgressiveTax: (grossIncome, taxableIncome, slabs, additives = [], countryCode = '', rebateThreshold = 700000) => {
        const gross = D(grossIncome);
        const income = D(taxableIncome);
        let slabTax = D(0);
        let prevLimit = D(0);
        let slabDetails = [];

        const safeSlabs = Array.isArray(slabs) ? slabs : [];
        
        for (const slab of safeSlabs) {
            const limitVal = slab.limit !== undefined ? slab.limit : (slab.upTo !== undefined ? slab.upTo : Infinity);
            const limit = limitVal === Infinity ? D(Number.MAX_SAFE_INTEGER) : D(limitVal);
            const rate = D(slab.rate || 0);
            
            if (income.gt(prevLimit)) {
                // Ensure only income within this specific range is taxed
                const upperBoundary = income.gt(limit) ? limit : income;
                const slabAmount = upperBoundary.minus(prevLimit);
                const taxForSlab = slabAmount.times(rate);
                
                slabTax = slabTax.plus(taxForSlab);
                
                slabDetails.push({ 
                    range: `${prevLimit.toNumber()} - ${slab.limit === Infinity || slab.upTo === Infinity ? '∞' : limit.toNumber()}`,
                    rate: rate.times(100).toNumber(),
                    amount: taxForSlab,
                    isActive: true
                });
            } else {
                // Income does not reach this slab
                slabDetails.push({ 
                    range: `${prevLimit.toNumber()} - ${slab.limit === Infinity || slab.upTo === Infinity ? '∞' : limit.toNumber()}`,
                    rate: rate.times(100).toNumber(),
                    amount: D(0),
                    isActive: false
                });
            }
            prevLimit = limit;
        }

        let taxAfterRelief = slabTax;
        // India Specific: Rebate and Marginal Relief (Section 87A)
        if (countryCode === 'IN') {
             const threshold = D(rebateThreshold); 
             if (income.lte(threshold)) {
                 taxAfterRelief = D(0);
             } else {
                 const excess = income.minus(threshold);
                 // Marginal Relief: Tax should not exceed income above rebate limit
                 if (slabTax.gt(excess)) {
                     taxAfterRelief = excess;
                 } else {
                     taxAfterRelief = slabTax;
                 }
             }
        }

        let totalCess = D(0);
        let taxWithCess = taxAfterRelief;
        additives.forEach(add => {
            const cessAmt = taxAfterRelief.times(add.rate);
            totalCess = totalCess.plus(cessAmt);
            taxWithCess = taxWithCess.plus(cessAmt);
        });

        const finalTax = taxWithCess.round();
        const effectiveRate = gross.gt(0) ? finalTax.div(gross).times(100) : D(0);
        
        return {
            grossIncome: gross,
            taxableIncome: income,
            slabTax: slabTax,
            taxAfterRelief: taxAfterRelief,
            cess: totalCess,
            finalTax: finalTax,
            totalTax: finalTax, // UI Consistency
            effectiveRate: effectiveRate,
            slabDetails: slabDetails
        };
    },

    /**
     * Standard EMI (Reducing Balance)
     */
    calculateEMI: (P, annualRate, months, compoundingFreq = 12) => {
        const p = FinancialCore.ensureDecimal(P);
        const r = FinancialCore.ensureDecimal(annualRate).div(100);
        const m = FinancialCore.ensureDecimal(compoundingFreq);
        const n = FinancialCore.ensureDecimal(months);
        
        if (p.isZero() || n.isZero()) return new Decimal(0);
        
        const r_monthly = r.div(12);
        const shadow = p.mul(r_monthly).mul(new Decimal(1).plus(r_monthly).pow(n)).div(new Decimal(1).plus(r_monthly).pow(n).sub(1));
        
        if (annualRate > 1000000) return p.mul(FinancialCore.ensureDecimal(annualRate).div(1200));

        const r_eff = r.div(m).add(1).pow(m.div(12)).sub(1);
        
        if (r_eff.isZero()) return p.div(n);
        
        const factor = r_eff.add(1).pow(n);
        if (!factor.isFinite() || factor.isNaN()) return p.mul(r_eff);
        
        const finalVal = p.mul(r_eff).mul(factor).div(factor.sub(1));

        if (compoundingFreq === 12 && finalVal.minus(shadow).abs().gt(1)) {
            StabilityEngine.logDiagnostic('EMI_DRIFT_DETECTED', { diff: finalVal.minus(shadow).toNumber(), p: p.toNumber(), r: annualRate });
        }

        return finalVal;
    },

    /**
     * SIP Maturity with Step-up support
     */
    calculateSIP: (monthly, annualRate, years, stepUpPercent = 0) => {
        const m_val = FinancialCore.ensureDecimal(monthly);
        const rate = FinancialCore.getMonthlyRate(annualRate);
        const step = FinancialCore.ensureDecimal(stepUpPercent).div(100);
        const yearsNum = FinancialCore.ensureDecimal(years);
        const months = yearsNum.mul(12).toNumber();
        
        let maturity = new Decimal(0);
        let invested = new Decimal(0);
        let currentMonthly = m_val;
        let schedule = [];

        let shadowVal = null;
        if (stepUpPercent === 0) {
            if (rate.isZero()) {
                shadowVal = currentMonthly.mul(months);
            } else {
                shadowVal = currentMonthly.mul( (rate.plus(1).pow(months).sub(1)).div(rate).mul(rate.plus(1)) );
            }
        }

        for (let t = 1; t <= months; t++) {
            invested = invested.plus(currentMonthly);
            maturity = (maturity.plus(currentMonthly)).times(rate.plus(1));

            if (t % 12 === 0) {
                schedule.push({ 
                    year: t/12, 
                    invested: new Decimal(invested), 
                    maturity: new Decimal(maturity) 
                });
                if (t < months) currentMonthly = currentMonthly.plus(currentMonthly.mul(step));
            }
        }
        
        if (stepUpPercent === 0 && shadowVal && maturity.minus(shadowVal).abs().gt(1)) {
            StabilityEngine.logDiagnostic('SIP_DRIFT_DETECTED', { diff: maturity.minus(shadowVal).toNumber() });
        }

        const result = maturity;
        result.maturity = maturity;
        result.invested = invested;
        result.schedule = schedule;
        return result;
    },

    /**
     * FD Maturity (Compound Interest)
     */
    calculateFD: (P, annualRate, years, freq = 4) => {
        const p = FinancialCore.ensureDecimal(P);
        const r = FinancialCore.ensureDecimal(annualRate).div(100);
        const n = FinancialCore.ensureDecimal(years);
        const f = FinancialCore.ensureDecimal(freq);
        
        if (p.isZero() || n.isZero()) {
            return {
                maturity: p,
                interest: D(0)
            };
        }
        
        // maturity = principal * (1 + r/f)^(n*f)
        const maturity = p.mul(r.div(f).plus(1).pow(n.mul(f)));
        return {
            maturity: maturity,
            interest: maturity.minus(p)
        };
    },

    /**
     * CAGR Calculation
     */
    calculateCAGR: (beginValue, endValue, years) => {
        const bv = FinancialCore.ensureDecimal(beginValue);
        const ev = FinancialCore.ensureDecimal(endValue);
        const n = FinancialCore.ensureDecimal(years);
        if (bv.lte(0) || n.lte(0)) return new Decimal(0);
        return ev.div(bv).pow(new Decimal(1).div(n)).sub(1).mul(100);
    }
};

/**
 * --- STABILITY ENGINE & MONITORING LAYER ---
 * A silent, zero-API system for regression detection and self-healing.
 */
const StabilityEngine = {
    logs: [],
    maxLogs: 50,
    status: 'OPTIMAL',
    sessionSwitches: 0,
    
    init() {
        this.setupErrorHandlers();
        this.runRegressionEngine();
        this.startMemoryWatcher();
        console.log("Stability Engine: Online. Running regression tests...");
    },

    setupErrorHandlers() {
        window.onerror = (msg, url, line, col, error) => {
            this.logDiagnostic('RUNTIME_ERROR', { msg, url, line, col, stack: error?.stack });
            return false;
        };
        window.onunhandledrejection = (event) => {
            this.logDiagnostic('PROMISE_REJECTION', { reason: event.reason });
        };
    },

    logDiagnostic(type, data) {
        const entry = {
            type,
            data,
            time: new Date().toISOString(),
            tool: state.activeTool || 'None',
            currency: state.currency
        };
        this.logs.unshift(entry);
        if (this.logs.length > this.maxLogs) this.logs.pop();
        
        // Persistent storage (capped)
        try {
            localStorage.setItem('stability_logs', JSON.stringify(this.logs));
        } catch(e) {}
    },

    runRegressionEngine() {
        const tests = [
            {
                name: 'EMI_Standard_5L_15Y_8.5P',
                run: () => FinancialCore.calculateEMI(500000, 8.5, 180).round().toNumber(),
                expected: 4924 
            },
            {
                name: 'SIP_10K_10Y_12P',
                run: () => FinancialCore.calculateSIP(10000, 12, 10).maturity.round().toNumber(),
                expected: 2323391 
            },
            {
                name: 'Tax_India_Rebate_7L_Gross',
                run: () => {
                    const config = INDIA_TAX_CONFIG.FY_2024_25;
                    const gross = D(700000);
                    const taxable = D(700000).minus(config.standardDeduction).gt(0) ? D(700000).minus(config.standardDeduction) : D(0);
                    const res = FinancialCore.calculateProgressiveTax(gross, taxable, config.slabs, [{ rate: config.cessRate }], 'IN', config.rebateLimit);
                    return res.finalTax.toNumber();
                },
                expected: 0
            },
            {
                name: 'Tax_India_Marginal_775001_Gross',
                run: () => {
                    const config = INDIA_TAX_CONFIG.FY_2024_25;
                    const gross = D(775001); 
                    const taxable = gross.minus(config.standardDeduction).gt(0) ? gross.minus(config.standardDeduction) : D(0);
                    const res = FinancialCore.calculateProgressiveTax(gross, taxable, config.slabs, [{ rate: config.cessRate }], 'IN', config.rebateLimit);
                    return res.finalTax.toNumber();
                },
                expected: 1
            },
            {
                name: 'Tax_India_12L_Gross',
                run: () => {
                    const config = INDIA_TAX_CONFIG.FY_2024_25;
                    const gross = D(1200000); 
                    const taxable = gross.minus(config.standardDeduction).gt(0) ? gross.minus(config.standardDeduction) : D(0);
                    const res = FinancialCore.calculateProgressiveTax(gross, taxable, config.slabs, [{ rate: config.cessRate }], 'IN', config.rebateLimit);
                    return res.finalTax.toNumber();
                },
                expected: 71500
            },
            {
                name: 'Tax_India_Marginal_700001_Taxable',
                run: () => {
                    const config = INDIA_TAX_CONFIG.FY_2024_25;
                    const res = FinancialCore.calculateProgressiveTax(D(775001), D(700001), config.slabs, [{ rate: config.cessRate }], 'IN', config.rebateLimit);
                    return res.finalTax.toNumber();
                },
                expected: 1
            },
            {
                name: 'Tax_India_50L_Gross',
                run: () => {
                    const config = INDIA_TAX_CONFIG.FY_2024_25;
                    const gross = D(5000000); 
                    const taxable = gross.minus(config.standardDeduction).gt(0) ? gross.minus(config.standardDeduction) : D(0);
                    const res = FinancialCore.calculateProgressiveTax(gross, taxable, config.slabs, [{ rate: config.cessRate }], 'IN', config.rebateLimit);
                    return res.finalTax.toNumber();
                },
                expected: 1214200
            }
        ];

        let failed = [];
        tests.forEach(test => {
            try {
                const result = test.run();
                if (Math.abs(result - test.expected) > 5) {
                    failed.push(`${test.name}: Out of tolerance (Got ${result}, Exp ${test.expected})`);
                }
            } catch(e) {
                failed.push(`${test.name}: Crashed - ${e.message}`);
            }
        });

        if (failed.length > 0) {
            this.status = 'DEGRADED';
            this.logDiagnostic('REGRESSION_FAILURE', { issues: failed });
            console.error("Stability Engine: Regressions detected!", failed);
        }
    },

    startMemoryWatcher() {
        setInterval(() => {
            const nodeCount = document.querySelectorAll('*').length;
            const objUrlCount = (window.objectUrls || []).length;
            
            if (nodeCount > 5000 || objUrlCount > 20) {
                this.logDiagnostic('RESOURCES_HIGH', { nodes: nodeCount, urls: objUrlCount });
                this.forceResourceCleanup();
            }
        }, 30000); // Check every 30s
    },

    forceResourceCleanup() {
        if (window.objectUrls && window.objectUrls.length > 10) {
            window.objectUrls.forEach(url => URL.revokeObjectURL(url));
            window.objectUrls = [];
            this.logDiagnostic('RESOURCES_FLUSHED', { msg: 'URL Revocation complete' });
        }
    }
};

// --- ENHANCED UI UTILITIES ---
const FinUI = {
    formatCurrency: (v, code, decimals) => {
        const val = parseFloat(v);
        if (isNaN(val)) return '--';
        const currency = CURRENCIES[code] || CURRENCIES.USD;
        // Improved Indian Numbering System Support
        const options = {
            style: 'currency',
            currency: code || 'USD',
            maximumFractionDigits: decimals !== undefined ? decimals : (currency.decimals !== undefined ? currency.decimals : 0)
        };
        try {
            return new Intl.NumberFormat(currency.locale, options).format(val);
        } catch (e) {
            return new Intl.NumberFormat('en-US', options).format(val);
        }
    },

    formatCompact: (v, code) => {
        const val = parseFloat(v);
        if (isNaN(val)) return '--';
        const currency = CURRENCIES[code] || CURRENCIES.USD;
        try {
            return new Intl.NumberFormat(currency.locale, {
                notation: 'compact',
                compactDisplay: 'short',
                maximumFractionDigits: 1
            }).format(val);
        } catch (e) {
            return val.toString();
        }
    },

    safeNumber: (val) => {
        if (val === null || val === undefined || val === '') return 0;
        if (typeof val === 'string') {
            // Strip currency symbols and commas
            val = val.replace(/[^0-9.-]/g, '');
        }
        const n = parseFloat(val);
        return isNaN(n) ? 0 : n;
    },

    getValidInput: (id, fallback = 0, { min = -Infinity, max = Infinity } = {}) => {
        const el = document.getElementById(id);
        if (!el) return D(fallback);
        let val = el.value === "" ? fallback : FinUI.safeNumber(el.value);
        if (val < min) val = min;
        if (val > max) val = max;
        return D(val);
    },

    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    showError: (id, msg) => {
        const el = document.getElementById(id);
        if (el) {
            el.classList.add('border-red-500', 'shake');
            setTimeout(() => el.classList.remove('border-red-500', 'shake'), 2000);
        }
        toast(msg);
    }
};

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
window.updateEMITenureLabel = (unit) => {
    const label = document.getElementById('emi-tenure-label');
    const helper = document.getElementById('emi-tenure-helper');
    if (label) {
        label.innerText = unit === 'years' ? 'Tenure (Yrs)' : 'Tenure (Mo)';
    }
    if (helper) {
        helper.innerText = unit === 'years' ? 
            'Use decimal years. Example: 18 months = 1.5 years.' : 
            'Enter total duration in months directly.';
    }
};

window.runEMICalc = () => {
    const P = FinUI.getValidInput('emi-p', 500000);
    const inputRate = FinUI.getValidInput('emi-r', 8.5);
    const annualRate = new Decimal(inputRate || 0); 
    const tenureVal = FinUI.getValidInput('emi-n', 15);
    const tenureUnit = document.getElementById('emi-tenure-unit')?.value || 'years';
    const feeRate = FinUI.getValidInput('emi-fee', 0).div(100);
    
    const extraMonthly = FinUI.getValidInput('emi-prep-m', 0);
    const lumpSum = FinUI.getValidInput('emi-prep-l', 0);
    const lumpSumMonth = parseInt(document.getElementById('emi-prep-at')?.value || '1', 10);
    
    const targetCurrency = document.getElementById('emi-currency')?.value || state.currency;
    const compoundingFreq = parseInt(document.getElementById('emi-freq')?.value || '12', 10);
    const exRate = FinUI.getValidInput('emi-ex-rate', 1);
    
    const box = document.getElementById('emi-box');
    const out = document.getElementById('emi-out');
    if (!box) return;

    if (P.lte(0) || annualRate.lt(0) || tenureVal.lte(0)) {
        if (!box.classList.contains('hidden')) out.innerText = 'Error';
        return;
    }

    const totalMonths = tenureUnit === 'years' 
        ? Math.max(1, tenureVal.mul(12).ceil().toNumber())
        : Math.max(1, tenureVal.ceil().toNumber());
        
    const processingFee = P.mul(feeRate);
    
    const emi = FinancialCore.calculateEMI(P, annualRate, totalMonths, compoundingFreq);
    const emiRounded = emi.toDecimalPlaces(2, Decimal.ROUND_HALF_UP);
    
    // Effective Rate for Amortization
    const R = annualRate.div(100);
    const m = new Decimal(compoundingFreq);
    const r_eff = R.div(m).add(1).pow(m.div(12)).sub(1);

    // Amortization with Prepayments
    let currentBalance = P;
    let totalInterestPaid = new Decimal(0);
    let scheduleRows = '';
    const scheduleData = [];
    window.currentEMISchedule = scheduleData; // Export support
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
                    <td class="p-4 text-right text-green-600 text-xs font-mono">${FinUI.formatCurrency(principalRepayment.times(exRate).toNumber(), targetCurrency)}</td>
                    <td class="p-4 text-right text-red-500 text-xs font-mono">${FinUI.formatCurrency(interest.times(exRate).toNumber(), targetCurrency)}</td>
                    <td class="p-4 text-right font-bold text-gray-900 dark:text-gray-100 text-xs font-mono">${FinUI.formatCurrency(currentBalance.times(exRate).toNumber(), targetCurrency)}</td>
                </tr>
            `;
        }
    }

    const totalPayment = P.plus(totalInterestPaid).plus(processingFee);
    const baselineEMI = FinancialCore.calculateEMI(P, annualRate, totalMonths, compoundingFreq);
    const baselineTotalInterest = baselineEMI.mul(totalMonths).minus(P);
    const savings = Decimal.max(0, baselineTotalInterest.minus(totalInterestPaid));
    const monthsSaved = Math.max(0, totalMonths - scheduleData.length);

    box.classList.remove('hidden');
    out.innerText = FinUI.formatCurrency(emiRounded.times(exRate).toNumber(), targetCurrency);
    document.getElementById('emi-saved').innerText = FinUI.formatCurrency(savings.times(exRate).toNumber(), targetCurrency);
    document.getElementById('emi-tenure-save').innerText = monthsSaved > 0 ? `${monthsSaved} Months Off Tenure` : 'Paid On Schedule';
    document.getElementById('emi-tot-int').innerText = `Interest Component: ${FinUI.formatCurrency(totalInterestPaid.times(exRate).toNumber(), targetCurrency)}`;
    document.getElementById('emi-tot-pay').innerText = FinUI.formatCurrency(totalPayment.times(exRate).toNumber(), targetCurrency);

    // Update Progress Bars
    const pPerc = P.div(totalPayment).times(100);
    const iPerc = totalInterestPaid.div(totalPayment).times(100);
    const progP = document.getElementById('emi-prog-p');
    const progI = document.getElementById('emi-prog-i');
    if (progP) progP.style.width = `${pPerc.toFixed(2)}%`;
    if (progI) progI.style.width = `${iPerc.toFixed(2)}%`;

    // Insights and UI updates...
    const burdenPerc = totalInterestPaid.div(totalPayment).times(100);
    const burdenLabel = document.getElementById('emi-burden-label');
    const burdenDot = document.getElementById('emi-burden-dot');
    if (burdenLabel && burdenDot) {
        burdenLabel.innerText = `Interest Burden: ${burdenPerc.toFixed(1)}%`;
        burdenDot.className = `w-2 h-2 rounded-full ${burdenPerc.gt(50) ? 'bg-red-500' : 'bg-blue-600'}`;
    }

    const milestonesArea = document.getElementById('emi-highlights');
    if (milestonesArea) {
        let mHtml = '';
        if (breakEvenMonth) mHtml += `<div class="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full text-[10px] font-black text-blue-600 flex items-center gap-2 border border-blue-100"><i data-lucide="zap" class="w-3 h-3"></i> Break-even Point M${breakEvenMonth}</div>`;
        if (halfPaidMonth) mHtml += `<div class="px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full text-[10px] font-black text-green-600 flex items-center gap-2 border border-green-100"><i data-lucide="check" class="w-3 h-3"></i> 50% Principal M${halfPaidMonth}</div>`;
        if (processingFee.gt(0)) mHtml += `<div class="px-4 py-2 bg-slate-50 dark:bg-slate-900/20 rounded-full text-[10px] font-black text-slate-600 flex items-center gap-2 border border-slate-100"><i data-lucide="info" class="w-3 h-3"></i> Fee: ${FinUI.formatCurrency(processingFee.toNumber(), targetCurrency)}</div>`;
        milestonesArea.innerHTML = mHtml;
        lucide.createIcons();
    }

    const insightArea = document.getElementById('emi-insights-list');
    if (insightArea) {
        const insights = [
            { icon: 'shield-alert', title: 'Debt Efficiency', desc: `Total cost is ${totalPayment.div(P).toFixed(2)}x of principal. ${burdenPerc.gt(40) ? 'High interest burden detected.' : 'Efficient debt structure.'}` },
            { icon: 'trending-down', title: 'Savings Potential', desc: `Prepayments save you ${FinUI.formatCurrency(savings.times(exRate).toNumber(), targetCurrency)} and retire loan ${monthsSaved} months early.` },
            { icon: 'activity', title: 'Processing Impact', desc: `Upfront processing fee adds ${feeRate.times(100).toFixed(1)}% to your effective loan cost today.` }
        ];
        insightArea.innerHTML = insights.map(i => `
            <div class="p-4 bg-white dark:bg-black/20 rounded-2xl border dark:border-gray-800 flex gap-4">
                <div class="text-blue-600"><i data-lucide="${i.icon}" class="w-4 h-4"></i></div>
                <div class="space-y-1">
                    <h5 class="text-[9px] font-black uppercase text-gray-900 dark:text-white leading-none">${i.title}</h5>
                    <p class="text-[8px] font-bold text-gray-500 dark:text-gray-400 break-words">${i.desc}</p>
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
    // Export Support
    window.currentEMISchedule = scheduleData;
    window.currentEMIInputs = { p: P, r: annualRate, n: tenureYears, fee: feeRate, prepayM: extraMonthly, prepayL: lumpSum, currentCurrency: targetCurrency };
    window.currentEMISummary = { emi: emiRounded, totalInterest: totalInterestPaid, totalPayment: totalPayment, savings: savings };

    updateEMICharts(P.times(exRate).toNumber(), totalInterestPaid.times(exRate).toNumber(), chartSchedule, breakEvenMonth, halfPaidMonth, emiRounded.times(exRate).toNumber(), targetCurrency);
};

const formatEMICurrency = (v, code) => FinUI.formatCurrency(v, code);

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
    
    // Preview for huge inputs
    const inPreview = document.getElementById('uc-in-preview');
    if (inPreview) {
        if (useSci && inputVal.length > 5) {
            inPreview.innerText = v.toExponential(2);
            inPreview.classList.remove('opacity-0');
        } else {
            inPreview.classList.add('opacity-0');
        }
    }
    
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
        let formatted = res.toFixed(ucPrec, Decimal.ROUND_HALF_UP);
        if (formatted.length < 100) {
            const parts = formatted.split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            formatted = parts.join('.');
        }
        out.innerText = formatted;
    }
    out.title = res.toString();
    
    label.innerText = t_el.options[t_el.selectedIndex]?.text || '';
    
    // Performance consistency check
    if (f === t && !res.equals(v)) {
        out.innerText = v.toString(); // Correction for identical unit maps
    }
};

window.runWordCount = () => {
    const el = document.getElementById('wc-in');
    if (!el) return;
    const t = el.value || '';
    const cleanStr = t.trim();
    
    // Quantitative Linguistic Analysis
    // 1. Count words using trimmed text only.
    // 2. Split on one or more whitespace characters.
    // 3. Filter out empty strings.
    // 4. Do not count empty text as 1 word.
    const words = cleanStr ? cleanStr.split(/\s+/).filter(Boolean).length : 0;
    const charsWithSpaces = t.length;
    const charsNoSpace = t.replace(/\s/g, '').length;
    const sentences = cleanStr ? cleanStr.split(/[.!?]+/).filter(s => s.trim().length > 0).length : 0;
    
    document.getElementById('wc-w').innerText = words.toLocaleString();
    document.getElementById('wc-c').innerText = charsWithSpaces.toLocaleString();
    document.getElementById('wc-c-ns').innerText = charsNoSpace.toLocaleString();
    document.getElementById('wc-s').innerText = sentences.toLocaleString();
    
    // Read time: 0 words = 0m, 1+ words = minimum 1m
    let readTime = 0;
    if (words > 0) {
        readTime = Math.max(1, Math.ceil(words / 200));
    }
    
    const readingTimeEl = document.getElementById('wc-r');
    if (readingTimeEl) readingTimeEl.innerText = `${readTime}m`;
    
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

/* Word Counter Robust Logic */
window.getWordCounterEditor = () => {
    const root =
        document.querySelector('#word-counter') ||
        document.querySelector('[data-tool="word-counter"]') ||
        document.querySelector('.word-counter');

    if (!root) return null;

    return (
        root.querySelector('textarea') ||
        root.querySelector('[contenteditable="true"]') ||
        root.querySelector('.word-counter-editor') ||
        root.querySelector('#word-counter-input') ||
        root.querySelector('#wc-input') ||
        document.getElementById('wc-in')
    );
};

window.readEditorText = (editor) => {
    if (!editor) return '';
    if ('value' in editor) return editor.value || '';
    return editor.textContent || '';
};

window.writeEditorText = (editor, text) => {
    if (!editor) return;
    if ('value' in editor) {
        editor.value = text;
        editor.dispatchEvent(new Event('input', { bubbles: true }));
    } else {
        editor.textContent = text;
        editor.dispatchEvent(new Event('input', { bubbles: true }));
    }
};

window.processWCText = (action) => {
    const editor = window.getWordCounterEditor();
    if (!editor) {
        console.warn('Word Counter editor not found');
        return;
    }

    const text = window.readEditorText(editor);
    
    if (action === 'copy') {
        navigator.clipboard.writeText(text);
        if (window.toast) toast("Content Copied!");
        return;
    }

    let next = text;

    if (action === 'upper') {
        next = text.toUpperCase();
    } else if (action === 'lower') {
        next = text.toLowerCase();
    } else if (action === 'cleanup' || action === 'clean') {
        next = text
            .replace(/\t/g, ' ') // Convert all tabs to single spaces
            .replace(/[ ]+/g, ' ') // Collapse multiple spaces to one
            .split('\n') // Process line by line
            .map(line => line.trim()) // Trim whitespace from each line
            .join('\n') // Rejoin lines
            .replace(/\n{3,}/g, '\n\n') // Collapse 3+ newlines to 2
            .trim(); // Final trim of overall text
    } else if (action === 'title') {
        next = text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    } else if (action === 'clear') {
        next = '';
    }

    window.writeEditorText(editor, next);

    if (typeof window.runWordCount === 'function') {
        window.runWordCount();
    }
};

// Event Delegation for Word Counter Toolbar
document.addEventListener('click', function (event) {
    const btn = event.target.closest(
        '[data-wc-action], .wc-copy, .wc-upper, .wc-lower, .wc-cleanup, .wc-title, .wc-clear'
    );

    if (!btn) return;

    const action = btn.dataset.wcAction || (btn.textContent || '').trim().toLowerCase();
    
    let finalAction = null;
    if (action.includes('copy')) finalAction = 'copy';
    if (action.includes('upper')) finalAction = 'upper';
    if (action.includes('lower')) finalAction = 'lower';
    if (action.includes('cleanup') || action.includes('clean')) finalAction = 'cleanup';
    if (action.includes('title')) finalAction = 'title';
    if (action.includes('clear')) finalAction = 'clear';

    if (!finalAction) return;

    const wordCounterRoot =
        btn.closest('#word-counter') ||
        btn.closest('[data-tool="word-counter"]') ||
        btn.closest('.word-counter');

    if (!wordCounterRoot) return;

    event.preventDefault();
    event.stopPropagation();

    window.processWCText(finalAction);
});

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

// --- FD CALCULATOR LOGIC ---
window.runFDCalc = () => {
    const P = FinUI.getValidInput('fd-p', 100000, { min: 0.01 });
    const inputRate = FinUI.getValidInput('fd-r', 7.5, { min: 0 });
    const annualRate = D(inputRate || 0);
    const years = FinUI.getValidInput('fd-n', 5, { min: 0.01 });
    const freqEl = document.getElementById('fd-freq');
    const freq = parseInt(freqEl?.value || '4', 10);
    const taxBracketInput = document.getElementById('fd-tax')?.value;
    const taxRate = D(taxBracketInput === "" ? 0 : taxBracketInput).div(100);
    const inflation = FinUI.getValidInput('fd-inf', 0, { min: 0 }).div(100);
    const currency = state.currency;

    if (P.lte(0) || years.lte(0)) {
        const box = document.getElementById('fd-box');
        if (box) box.classList.add('hidden');
        return;
    }

    const { maturity, interest } = FinancialCore.calculateFD(P, annualRate, years, freq);
    
    const taxPaid = interest.mul(taxRate);
    const netMaturity = maturity.minus(taxPaid);
    
    // inflation-adjusted value: realValue = postTaxMaturity / (1 + inflationRate)^years
    const inflationFactor = inflation.plus(1).pow(years);
    const realMaturity = netMaturity.div(inflationFactor);
    const inflationLoss = netMaturity.minus(realMaturity);

    const outEl = document.getElementById('fd-out');
    const intEl = document.getElementById('fd-tot-int');
    const taxEl = document.getElementById('fd-tot-tax');
    const extraLabel = document.getElementById('fd-extra-label');

    if (outEl) outEl.innerText = FinUI.formatCurrency(netMaturity.toNumber(), currency);
    if (intEl) intEl.innerText = FinUI.formatCurrency(interest.toNumber(), currency);
    
    if (taxEl) {
        const isNegZeroTx = taxPaid.plus(inflationLoss).lt(0) && taxPaid.plus(inflationLoss).gt(-0.01);
        taxEl.innerText = (taxPaid.plus(inflationLoss).lt(0) && !isNegZeroTx ? '-' : '') + FinUI.formatCurrency(taxPaid.plus(inflationLoss).abs().toNumber(), currency);
    }
    
    if (extraLabel) {
        if (taxRate.gt(0)) {
            extraLabel.innerText = "Tax + Inflation Loss";
        } else {
            extraLabel.innerText = "Inflation Loss";
        }
    }

    const box = document.getElementById('fd-box');
    if (box) box.classList.remove('hidden');
    
    // Compounding Comparison
    const compTable = document.getElementById('fd-comp-table');
    if (compTable) {
        const frequencies = [
            { name: 'Annually', f: 1 },
            { name: 'Quarterly', f: 4 },
            { name: 'Monthly', f: 12 }
        ];
        
        compTable.innerHTML = frequencies.map(comp => {
            const res = FinancialCore.calculateFD(P, annualRate, years, comp.f);
            const diff = res.maturity.minus(maturity);
            const isSelected = comp.f === freq;
            
            return `
                <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 border ${isSelected ? 'border-emerald-500' : 'dark:border-gray-800'} rounded-2xl">
                    <div class="flex items-center gap-2">
                        <span class="text-[10px] font-black text-gray-500 uppercase tracking-widest">${comp.name}</span>
                        ${isSelected ? '<span class="text-[8px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-black">SELECTED</span>' : ''}
                    </div>
                    <div class="text-right">
                        <div class="text-xs font-black text-gray-900 dark:text-white">${FinUI.formatCurrency(res.maturity.toNumber(), currency)}</div>
                        <div class="text-[9px] font-bold ${diff.gte(0) ? 'text-green-500' : 'text-red-500'}">
                            ${diff.isZero() ? 'Base' : (diff.gt(0) ? '+' : '') + FinUI.formatCurrency(diff.toNumber(), currency)}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Real Return Analysis
    const realAnnualReturn = inflation.gt(10) ? D(0) : D(1).plus(annualRate.div(100)).div(D(1).plus(inflation)).minus(1).times(100);
    const realReturnEl = document.getElementById('fd-real-return');
    if (realReturnEl) {
        realReturnEl.innerHTML = `
            <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                <p class="text-[8px] font-black text-gray-400 uppercase mb-1">Nominal Return</p>
                <div class="text-sm font-black text-gray-900 dark:text-white">${annualRate.toFixed(2)}%</div>
            </div>
            <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                <p class="text-[8px] font-black text-gray-400 uppercase mb-1">Real Return (Adj.)</p>
                <div class="text-sm font-black ${realAnnualReturn.gt(0) ? 'text-green-500' : 'text-red-500'}">${realAnnualReturn.toFixed(2)}%</div>
            </div>
        `;
    }

    // Purchasing Power Analysis
    const powerEl = document.getElementById('fd-power-analysis');
    if (powerEl) {
        const realGain = realMaturity.minus(P);
        powerEl.innerHTML = `
            <div class="p-4 bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-2xl space-y-2">
                <div class="flex justify-between items-center">
                    <span class="text-[10px] font-black text-gray-500 uppercase tracking-widest">Real Value (Inflation adj.)</span>
                    <span class="text-xs font-black text-gray-900 dark:text-white">${FinUI.formatCurrency(realMaturity.toNumber(), currency)}</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-[10px] font-black text-gray-500 uppercase tracking-widest">Purchasing Power Delta</span>
                    <span class="text-xs font-black ${realGain.gte(0) ? 'text-green-500' : 'text-red-500'}">${realGain.gt(0) ? '+' : ''}${FinUI.formatCurrency(realGain.toNumber(), currency)}</span>
                </div>
            </div>
            ${taxRate.gt(0) ? `
            <div class="p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-2xl flex justify-between items-center">
                <span class="text-[10px] font-black text-red-600 uppercase tracking-widest">Tax Impact on Yield</span>
                <span class="text-xs font-black text-red-600">-${FinUI.formatCurrency(taxPaid.toNumber(), currency)}</span>
            </div>
            ` : '<div class="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-2xl text-center text-[10px] font-black text-blue-600 uppercase tracking-widest">No tax assumed in calculation</div>'}
        `;
    }

    // Verdict Chip
    const verdictEl = document.getElementById('fd-verdict');
    if (verdictEl) {
        if (realAnnualReturn.gt(1)) {
            verdictEl.innerText = "Positive Real Return";
            verdictEl.className = "px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg text-[8px] font-black uppercase tracking-widest";
        } else if (realAnnualReturn.gte(0)) {
            verdictEl.innerText = "Low Real Return";
            verdictEl.className = "px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg text-[8px] font-black uppercase tracking-widest";
        } else {
            verdictEl.innerText = "Inflation Beats Returns";
            verdictEl.className = "px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-lg text-[8px] font-black uppercase tracking-widest";
        }
    }

    // Simple Insights
    const simpleIns = document.getElementById('fd-simple-insights');
    if (simpleIns) {
        simpleIns.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <p class="text-[10px] font-black text-gray-500 uppercase">Principal Stake: ${((P.div(netMaturity.gt(0) ? netMaturity : 1)).times(100)).toFixed(1)}%</p>
            </div>
            <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <p class="text-[10px] font-black text-gray-500 uppercase">Interest Growth: ${interest.div(P).times(100).toFixed(1)}%</p>
            </div>
        `;
    }

    const highlights = document.getElementById('fd-highlights');
    if (highlights) {
        highlights.innerHTML = `
            <div class="px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-full text-[10px] font-black text-emerald-600 border border-emerald-100">Capital Protection: 100%</div>
            <div class="px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-full text-[8px] font-bold text-gray-400 border dark:border-gray-700 italic">*Nominal capital protected; real value depends on inflation</div>
        `;
    }

    const labels = [];
    const dataPoints = [];
    for (let i = 1; i <= years.toNumber(); i++) {
        const yearResult = FinancialCore.calculateFD(P, annualRate, i, freq);
        labels.push(`Year ${i}`);
        dataPoints.push(yearResult.maturity.toNumber());
    }

    updateFDCharts(P.toNumber(), interest.toNumber(), labels, dataPoints, currency);
};

const updateFDCharts = (principal, interest, labels, data, currency) => {
    const pieCtx = document.getElementById('fd-pie-chart');
    if (!pieCtx) return;

    if (window.fdCharts) {
        window.fdCharts.pie?.destroy();
        window.fdCharts.line?.destroy();
    } else {
        window.fdCharts = {};
    }

    const isDark = document.documentElement.classList.contains('dark');
    const textColor = isDark ? '#9ca3af' : '#4b5563';

    window.fdCharts.pie = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Principal', 'Interest'],
            datasets: [{
                data: [principal, interest],
                backgroundColor: ['#3b82f6', '#10b981'],
                borderWidth:0
            }]
        },
        options: {
            plugins: {
                legend: { position: 'bottom', labels: { color: textColor, font: { size: 10, weight: 'bold' } } }
            }
        }
    });

    const lineCtx = document.getElementById('fd-line-chart');
    if (lineCtx) {
        window.fdCharts.line = new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Maturity Value',
                    data: data,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                scales: {
                    x: { ticks: { color: textColor, font: { size: 9 } } },
                    y: { ticks: { color: textColor, font: { size: 9 }, callback: v => FinUI.formatCurrency(v, currency).split('.')[0] } }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }
};

// --- LOAN COMPARISON LOGIC ---
let lcScenarios = [
    { id: 1, name: 'Bank A', rate: 8.5, fee: 1000 },
    { id: 2, name: 'Bank B', rate: 9.2, fee: 0 }
];

window.initLoanComp = () => {
    renderLoanScenarios();
    runLoanComp();

    // Event Delegation for Remove Buttons
    const container = document.getElementById('lc-scenarios');
    if (container && !container.dataset.bound) {
        container.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-remove-loan]');
            if (btn) {
                const id = parseInt(btn.dataset.removeLoan);
                window.removeLoanScenario(id);
            }
        });
        container.dataset.bound = 'true';
    }
};

window.addLoanScenario = () => {
    if (lcScenarios.length >= 4) return toast("Maximum 4 scenarios allowed for comparison");
    const nextId = Math.max(...lcScenarios.map(s => s.id)) + 1;
    lcScenarios.push({ id: nextId, name: `Offer ${String.fromCharCode(64 + nextId)}`, rate: 9.0, fee: 500 });
    renderLoanScenarios();
    runLoanComp();
};

window.removeLoanScenario = (id) => {
    if (lcScenarios.length <= 2) return toast("At least 2 scenarios are required for comparison");
    lcScenarios = lcScenarios.filter(s => s.id !== id);
    renderLoanScenarios();
    runLoanComp();
};

function renderLoanScenarios() {
    const container = document.getElementById('lc-scenarios');
    if (!container) return;
    container.innerHTML = lcScenarios.map(s => `
        <div class="p-6 bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-[2rem] space-y-4 relative group animate-fade-in" data-loan-card>
            <button 
                type="button"
                data-remove-loan="${s.id}"
                aria-label="Remove bank"
                class="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-all sm:opacity-0 group-hover:opacity-100 opacity-100 z-20 cursor-pointer p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20"
            >
                <i data-lucide="x-circle" class="w-5 h-5 pointer-events-none"></i>
            </button>
            <div class="space-y-2">
                <input type="text" value="${s.name}" oninput="updateLCParam(${s.id}, 'name', this.value)" class="bg-transparent border-none outline-none font-black text-gray-900 dark:text-white uppercase text-[10px] tracking-widest w-full">
                <div class="h-0.5 w-8 bg-blue-500"></div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                    <label class="text-[8px] font-black text-gray-400 uppercase">Rate (%)</label>
                    <input type="number" value="${s.rate}" step="0.1" oninput="updateLCParam(${s.id}, 'rate', this.value)" class="w-full p-3 bg-gray-50 dark:bg-black/20 border rounded-xl dark:border-gray-700 font-bold text-xs outline-none">
                </div>
                <div class="space-y-2">
                    <label class="text-[8px] font-black text-gray-400 uppercase">Fee (${CURRENCIES[state.currency].symbol})</label>
                    <input type="number" value="${s.fee}" oninput="updateLCParam(${s.id}, 'fee', this.value)" class="w-full p-3 bg-gray-50 dark:bg-black/20 border rounded-xl dark:border-gray-700 font-bold text-xs outline-none">
                </div>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

window.updateLCParam = (id, key, val) => {
    const s = lcScenarios.find(sc => sc.id === id);
    if (!s) return;
    if (key === 'name') s.name = val;
    else s[key] = parseFloat(val) || 0;
    runLoanComp();
};

window.runLoanComp = () => {
    const P = FinUI.getValidInput('lc-p', 500000, { min: 0.01 });
    const N = FinUI.getValidInput('lc-n', 5, { min: 0.01 });
    const currency = state.currency;
    const recContainer = document.getElementById('lc-results');
    const recText = document.getElementById('lc-rec');
    const cardsContainer = document.getElementById('lc-cards');

    if (!recContainer || !recText || !cardsContainer) return;

    if (P.lte(0) || N.lte(0)) {
        recContainer.classList.add('hidden');
        return;
    }

    if (lcScenarios.length < 2) {
        recContainer.classList.remove('hidden');
        recText.innerHTML = '<div class="text-sm opacity-80 font-medium">Add at least 2 valid offers to compare.</div>';
        cardsContainer.innerHTML = '';
        return;
    }

    const results = lcScenarios.map(s => {
        const annualRate = new Decimal(s.rate || 0);
        const processingFee = new Decimal(s.fee || 0);
        const totalMonths = N.mul(12).round().toNumber();
        
        const emi = FinancialCore.calculateEMI(P, annualRate, totalMonths);
        const totalEMIOutflow = emi.mul(totalMonths);
        const totalInterest = totalEMIOutflow.minus(P);
        const totalOutflow = totalEMIOutflow.plus(processingFee);

        return {
            id: s.id,
            name: s.name,
            emi: emi,
            interest: totalInterest,
            fee: processingFee,
            outflow: totalOutflow,
            rate: annualRate
        };
    });

    results.sort((a, b) => a.outflow.minus(b.outflow).toNumber());
    const best = results[0];
    const worst = results[results.length - 1];
    const savings = worst.outflow.minus(best.outflow);

    recContainer.classList.remove('hidden');

    // Recommendation Result
    recText.innerHTML = `
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <div>
                    <div class="text-[10px] font-black uppercase text-blue-200 mb-1">Best Recommended Offer</div>
                    <div class="text-3xl font-black">${best.name}</div>
                </div>
                <div class="text-right">
                    <div class="text-[10px] font-black uppercase text-blue-200 mb-1">Total Cost</div>
                    <div class="text-2xl font-black">${FinUI.formatCurrency(best.outflow.toNumber(), currency)}</div>
                </div>
            </div>
            <div class="flex items-center gap-4 pt-4 border-t border-white/10">
                <div>
                    <div class="text-[10px] font-black uppercase text-blue-200">Estimated EMI</div>
                    <div class="text-lg font-bold">${FinUI.formatCurrency(best.emi.toNumber(), currency)}/mo</div>
                </div>
                <div class="flex-grow"></div>
                <div class="px-4 py-2 bg-white/10 rounded-2xl">
                    <div class="text-[10px] font-black uppercase text-blue-200 mb-1">Impact Analysis</div>
                    <div class="text-xs font-black text-emerald-300">Saves ${FinUI.formatCurrency(savings.toNumber(), currency)} vs most expensive</div>
                </div>
            </div>
        </div>
    `;

    // Cards Table
    cardsContainer.innerHTML = results.map(r => {
        const delta = r.outflow.minus(best.outflow);
        return `
            <div class="p-6 bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-3xl space-y-4 relative overflow-hidden transition-all hover:shadow-lg">
                ${delta.isZero() ? '<div class="absolute top-0 right-0 px-4 py-1 bg-blue-600 text-white text-[8px] font-black uppercase tracking-widest rounded-bl-xl">Winner</div>' : ''}
                <div class="flex justify-between items-start">
                    <div class="space-y-1">
                        <h5 class="text-xs font-black text-gray-900 dark:text-white uppercase tracking-widest">${r.name}</h5>
                        <p class="text-[10px] font-bold text-gray-400">${r.rate}% Interest</p>
                    </div>
                    <div class="text-right">
                        <div class="text-lg font-black text-gray-900 dark:text-white">${FinUI.formatCurrency(r.emi.toNumber(), currency)}</div>
                        <p class="text-[8px] font-black uppercase text-gray-400">Monthly EMI</p>
                    </div>
                </div>
                
                <div class="grid grid-cols-2 gap-4 py-4 border-t border-gray-50 dark:border-gray-800">
                    <div>
                        <p class="text-[8px] font-black text-gray-400 uppercase mb-1">Total Interest</p>
                        <p class="text-xs font-bold text-red-500">${FinUI.formatCurrency(r.interest.toNumber(), currency)}</p>
                    </div>
                    <div>
                        <p class="text-[8px] font-black text-gray-400 uppercase mb-1">Proc. Fee</p>
                        <p class="text-xs font-bold text-gray-600 dark:text-gray-400">${FinUI.formatCurrency(r.fee.toNumber(), currency)}</p>
                    </div>
                </div>
                
                <div class="pt-4 border-t border-gray-50 dark:border-gray-800 flex justify-between items-center">
                    <div>
                        <p class="text-[8px] font-black text-gray-400 uppercase mb-1">Total Cost</p>
                        <p class="text-sm font-black text-gray-900 dark:text-white">${FinUI.formatCurrency(r.outflow.toNumber(), currency)}</p>
                    </div>
                    ${!delta.isZero() ? `<div class="text-[10px] font-black text-orange-500">+${FinUI.formatCurrency(delta.toNumber(), currency)}</div>` : ''}
                </div>
            </div>
        `;
    }).join('');

    // Export Support
    window.currentLCResults = results;
    window.currentLCInputs = { p: P, n: N, scenarios: lcScenarios, currency };

    updateLCChart(results.map(r => r.name), results.map(r => r.outflow.toNumber()), currency);
};

const updateLCChart = (labels, data, currency) => {
    const ctx = document.getElementById('lc-chart');
    if (!ctx) return;

    if (window.lcChart) window.lcChart.destroy();

    const isDark = document.documentElement.classList.contains('dark');
    const textColor = isDark ? '#9ca3af' : '#4b5563';

    window.lcChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Total Outflow',
                data: data,
                backgroundColor: data.map((v, i) => i === 0 ? '#3b82f6' : '#374151'),
                borderRadius: 12
            }]
        },
        options: {
            scales: {
                x: { grid: { display: false }, ticks: { color: textColor, font: { weight: '800', size: 9 } } },
                y: { grid: { borderDash: [5, 5] }, ticks: { color: textColor, font: { size: 9 }, callback: v => formatEMICurrency(v, currency).split('.')[0] } }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
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

// --- CSV Logic ---

window.exportEMICSV = () => {
    if (!window.currentEMISchedule || window.currentEMISchedule.length === 0) {
        return toast("No calculation data to export");
    }
    
    const inputs = window.currentEMIInputs || {};
    const summary = window.currentEMISummary || {};
    const schedule = window.currentEMISchedule;

    const data = [
        { Section: "REPORT_TYPE", Key: "Loan Amortization Schedule", Value: `Generated: ${new Date().toLocaleString()}` },
        { Section: "INPUTS", Key: "Principal", Value: inputs.p ? inputs.p.toFixed(2) : "0" },
        { Section: "INPUTS", Key: "Annual Interest Rate (%)", Value: inputs.r ? String(inputs.r) : "0" },
        { Section: "INPUTS", Key: "Tenure (Years)", Value: inputs.n ? String(inputs.n) : "0" },
        { Section: "INPUTS", Key: "Processing Fee (%)", Value: inputs.fee ? inputs.fee.times(100).toFixed(2) : "0" },
        { Section: "SUMMARY", Key: "Monthly EMI", Value: summary.emi ? summary.emi.toFixed(2) : "0" },
        { Section: "SUMMARY", Key: "Total Interest", Value: summary.totalInterest ? summary.totalInterest.toFixed(2) : "0" },
        { Section: "SUMMARY", Key: "Total Payment", Value: summary.totalPayment ? summary.totalPayment.toFixed(2) : "0" },
        { Section: "SUMMARY", Key: "Effective Savings", Value: summary.savings ? summary.savings.toFixed(2) : "0" },
        { Section: "COLUMNS", Key: "Month", Value: "Principal Paid | Interest Paid | Remaining Balance" }
    ];

    schedule.forEach(s => {
        data.push({ 
            Section: `MONTH_DATA`, 
            Key: `Month ${s.month}`, 
            Value: `${FinUI.getDecimal(s.principal).toFixed(2)}, ${FinUI.getDecimal(s.interest).toFixed(2)}, ${FinUI.getDecimal(s.balance).toFixed(2)}` 
        });
    });

    try {
        const csv = CSVCore.generateCSV(data);
        CSVCore.downloadCSV(`loan_amortization_${new Date().getTime()}.csv`, csv);
        toast("Financial Data exported successfully to your PC");
    } catch (err) {
        console.error("Export Error:", err);
        toast("Export failed. Check logic.");
    }
};

window.importEMICSV = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        const text = e.target.result;
        const rows = CSVCore.parseCSV(text);
        if (rows.length < 4) return toast("Invalid CSV format");
        
        try {
            const getVal = (key) => rows.find(r => r.Key === key)?.Value;
            if (document.getElementById('emi-p')) document.getElementById('emi-p').value = getVal("Loan Amount") || 100000;
            if (document.getElementById('emi-r')) document.getElementById('emi-r').value = getVal("Interest Rate") || 10;
            if (document.getElementById('emi-n')) document.getElementById('emi-n').value = getVal("Tenure (Years)") || 5;
            if (document.getElementById('emi-fee')) document.getElementById('emi-fee').value = getVal("Processing Fee") || 0;
            
            window.runEMICalc();
            toast("EMI calculation imported");
        } catch (err) {
            toast("Error parsing CSV");
        }
    };
    reader.readAsText(file);
};

window.exportSIPCSV = () => {
    if (!window.currentSIPSchedule) return toast("No data to export");
    const inputs = window.currentSIPInputs;
    const summary = window.currentSIPSummary;
    const schedule = window.currentSIPSchedule;

    const data = [
        { Section: "INPUTS", Key: "Monthly Investment", Value: inputs.monthly },
        { Section: "INPUTS", Key: "Expected Return", Value: inputs.rate },
        { Section: "INPUTS", Key: "Tenure", Value: inputs.years },
        { Section: "INPUTS", Key: "Step Up", Value: inputs.stepUp },
        { Section: "SUMMARY", Key: "Maturity Value", Value: summary.maturity },
        { Section: "SUMMARY", Key: "Invested Capital", Value: summary.invested },
        { Section: "SUMMARY", Key: "Gains", Value: summary.gains },
        { Section: "SCHEDULE", Key: "Year", Value: "Invested | Maturity" }
    ];

    schedule.forEach(s => {
        data.push({ 
            Section: `Year ${s.year}`, 
            Key: s.invested.toFixed(2), 
            Value: s.maturity.toFixed(2)
        });
    });

    CSVCore.downloadCSV("sip-growth.csv", CSVCore.generateCSV(data));
    toast("SIP Projection exported");
};

window.importSIPCSV = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        const text = e.target.result;
        const rows = CSVCore.parseCSV(text);
        try {
            const getVal = (key) => rows.find(r => r.Key === key)?.Value;
            document.getElementById('sip-m').value = getVal("Monthly Investment");
            document.getElementById('sip-r').value = getVal("Expected Return");
            document.getElementById('sip-n').value = getVal("Tenure");
            document.getElementById('sip-step').value = getVal("Step Up");
            window.runSIPCalc();
            toast("SIP calculation imported");
        } catch(e) { toast("Invalid CSV"); }
    };
    reader.readAsText(file);
};

window.exportFDCSV = () => {
    if (!window.currentFDSchedule) return toast("No data to export");
    const inputs = window.currentFDInputs;
    const summary = window.currentFDSummary;
    const schedule = window.currentFDSchedule;

    const data = [
        { Section: "INPUTS", Key: "Principal", Value: inputs.p },
        { Section: "INPUTS", Key: "Rate", Value: inputs.r },
        { Section: "INPUTS", Key: "Years", Value: inputs.n },
        { Section: "SUMMARY", Key: "Net Maturity", Value: summary.maturity },
        { Section: "SUMMARY", Key: "Total Interest", Value: summary.interest },
        { Section: "SCHEDULE", Key: "Year", Value: "Opening | Interest | Closing" }
    ];

    schedule.forEach(s => {
        data.push({ 
            Section: `Year ${s.year}`, 
            Key: s.opening.toFixed(2), 
            Value: `${s.interest.toFixed(2)} | ${s.closing.toFixed(2)}`
        });
    });

    CSVCore.downloadCSV("fd-maturity.csv", CSVCore.generateCSV(data));
    toast("FD Maturity exported");
};

window.importFDCSV = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        const text = e.target.result;
        const rows = CSVCore.parseCSV(text);
        try {
            const getVal = (key) => rows.find(r => r.Key === key)?.Value;
            document.getElementById('fd-p').value = getVal("Principal");
            document.getElementById('fd-r').value = getVal("Rate");
            document.getElementById('fd-n').value = getVal("Years");
            window.runFDCalc();
            toast("FD calculation imported");
        } catch(e) { toast("Invalid CSV"); }
    };
    reader.readAsText(file);
};

window.exportLoanCompCSV = () => {
    if (!window.currentLCResults) return toast("No data to export");
    const inputs = window.currentLCInputs;
    const results = window.currentLCResults;

    const data = [
        { Section: "BASE", Key: "Principal", Value: inputs.p },
        { Section: "BASE", Key: "Tenure", Value: inputs.n },
        { Section: "RESULTS", Key: "Bank Name", Value: "Rate | EMI | Interest | Total Outflow" }
    ];

    results.forEach(r => {
        data.push({ 
            Section: `Outcome ${r.id}`, 
            Key: r.name, 
            Value: `${r.rate}% | ${r.emi.toFixed(2)} | ${r.interest.toFixed(2)} | ${r.outflow.toFixed(2)}`
        });
    });

    CSVCore.downloadCSV("loan-comparison.csv", CSVCore.generateCSV(data));
    toast("Comparison report exported");
};

window.importLoanCompCSV = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        const text = e.target.result;
        const rows = CSVCore.parseCSV(text);
        try {
            const getVal = (key) => rows.find(r => r.Key === key)?.Value;
            document.getElementById('lc-p').value = getVal("Principal");
            document.getElementById('lc-n').value = getVal("Tenure");
            
            // Reconstruct scenarios if possible (optional but advanced)
            // Simplified: just update base inputs
            window.runLoanComp();
            toast("Loan comparison base imported");
        } catch(e) { toast("Invalid CSV"); }
    };
    reader.readAsText(file);
};

window.exportCCCSV = () => {
    if (!window.currentCCInputs) return toast("No data to export");
    const i = window.currentCCInputs;
    const s = window.currentCCSummary;
    const data = [
        { Section: "INPUTS", Key: "Balance", Value: i.p },
        { Section: "INPUTS", Key: "APR", Value: i.r },
        { Section: "INPUTS", Key: "Monthly Payment", Value: i.m },
        { Section: "SUMMARY", Key: "Total Interest", Value: s.interest },
        { Section: "SUMMARY", Key: "Time to Target", Value: s.months + " Months" },
        { Section: "SUMMARY", Key: "Daily Accrual", Value: s.daily }
    ];
    CSVCore.downloadCSV("credit-card-debt.csv", CSVCore.generateCSV(data));
    toast("Debt report exported");
};

window.importCCCSV = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        const rows = CSVCore.parseCSV(e.target.result);
        try {
            const getVal = (key) => rows.find(r => r.Key === key)?.Value;
            document.getElementById('cc-p').value = getVal("Balance");
            document.getElementById('cc-r').value = getVal("APR");
            document.getElementById('cc-m').value = getVal("Monthly Payment");
            window.runCCCalc();
            toast("Debt data imported");
        } catch(e) { toast("Invalid CSV"); }
    };
    reader.readAsText(file);
};

window.exportROICSV = () => {
    if (!window.currentROIInputs) return toast("No data to export");
    const i = window.currentROIInputs;
    const s = window.currentROISummary;
    const data = [
        { Section: "INPUTS", Key: "Spend", Value: i.spend },
        { Section: "INPUTS", Key: "Revenue", Value: i.revenue },
        { Section: "INPUTS", Key: "Days", Value: i.days },
        { Section: "SUMMARY", Key: "ROI", Value: s.roi.toFixed(2) + "%" },
        { Section: "SUMMARY", Key: "Profit", Value: s.profit },
        { Section: "SUMMARY", Key: "ROAS", Value: s.roas.toFixed(2) + "x" }
    ];
    CSVCore.downloadCSV("roi-analysis.csv", CSVCore.generateCSV(data));
    toast("ROI Analysis exported");
};

window.importROICSV = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        const rows = CSVCore.parseCSV(e.target.result);
        try {
            const getVal = (key) => rows.find(r => r.Key === key)?.Value;
            document.getElementById('roi-s').value = getVal("Spend");
            document.getElementById('roi-r').value = getVal("Revenue");
            document.getElementById('roi-t').value = getVal("Days");
            window.runROICalc();
            toast("ROI data imported");
        } catch(e) { toast("Invalid CSV"); }
    };
    reader.readAsText(file);
};

window.exportInsCSV = () => {
    if (!window.currentInsInputs) return toast("No data");
    const i = window.currentInsInputs;
    const s = window.currentInsSummary;
    const data = [
        { Section: "INPUTS", Key: "Type", Value: i.type },
        { Section: "INPUTS", Key: "Age", Value: i.age },
        { Section: "INPUTS", Key: "Coverage", Value: i.cov },
        { Section: "SUMMARY", Key: "Monthly Premium", Value: s.monthlyPremium },
        { Section: "SUMMARY", Key: "Annual Premium", Value: s.annualPremium }
    ];
    CSVCore.downloadCSV("insurance-quote.csv", CSVCore.generateCSV(data));
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
    const monthly = FinUI.getValidInput('sip-m', 5000);
    const inputRate = FinUI.getValidInput('sip-r', 12);
    const annualRate = new Decimal(inputRate || 0);
    const years = FinUI.getValidInput('sip-n', 10);
    const stepUp = FinUI.getValidInput('sip-step', 10);
    const inflation = FinUI.getValidInput('sip-inf', 6);
    const currency = state.currency;

    if (monthly.lte(0) || annualRate.lt(0) || years.lte(0)) return;

    // Core Logic via FinancialCore
    const { maturity, invested, schedule } = FinancialCore.calculateSIP(monthly, annualRate, years, stepUp);

    const finalMaturity = maturity.toDecimalPlaces(0, Decimal.ROUND_HALF_UP);
    const finalInvested = invested.toDecimalPlaces(0, Decimal.ROUND_HALF_UP);
    const finalGains = finalMaturity.minus(finalInvested);

    // Precise Tax: 12.5% on gains exceeding 1.25 Lakh (Simplified local policy vs global fallback)
    /**
     * Post-tax assumes Indian equity LTCG (Long Term Capital Gains) rules:
     * - 12.5% tax on gains exceeding ₹1.25 Lakh per year (as per 2024-25 Budget).
     * - This is an estimate; actual taxes vary for debt funds, ELSS, or future laws.
     */
    const exemptionLimit = state.currency === 'INR' ? 125000 : 0; 
    const taxableGain = Decimal.max(0, finalGains.minus(exemptionLimit));
    const taxAmount = taxableGain.mul(0.125);
    const postTaxMaturity = finalMaturity.minus(taxAmount);

    // Inflation Adjusted (Real) Maturity - Based on nominal Wealth as per requirement
    const inflationFactor = inflation.div(100).plus(1).pow(years);
    const realMaturity = finalMaturity.div(inflationFactor);
    const postTaxRealMaturity = postTaxMaturity.div(inflationFactor);

    // UI Updates
    document.getElementById('sip-out').innerText = FinUI.formatCurrency(finalMaturity.toNumber(), currency);
    document.getElementById('sip-cap').innerText = FinUI.formatCurrency(finalInvested.toNumber(), currency);
    document.getElementById('sip-gain').innerText = FinUI.formatCurrency(finalGains.toNumber(), currency);
    
    // Export Support
    window.currentSIPSchedule = schedule;
    window.currentSIPInputs = { monthly, rate: annualRate, years, stepUp, inflation, currency };
    window.currentSIPSummary = { maturity: finalMaturity, invested: finalInvested, gains: finalGains, postTax: postTaxMaturity, real: realMaturity };
    
    const realEl = document.getElementById('sip-real');
    const taxEl = document.getElementById('sip-taxed');
    if (realEl) realEl.innerText = FinUI.formatCurrency(realMaturity.toNumber(), currency);
    if (taxEl) taxEl.innerText = FinUI.formatCurrency(postTaxMaturity.toNumber(), currency);

    // Highlights
    const highlights = document.getElementById('sip-highlights');
    if (highlights) {
        const mult = finalMaturity.div(finalInvested).toFixed(1);
        // Correct calculation for ending monthly SIP
        const finalMonthlySIP = monthly.mul(new Decimal(1).plus(stepUp.div(100)).pow(years.minus(1))).toDecimalPlaces(0);
        
        highlights.innerHTML = `
            <div class="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full text-[10px] font-black text-blue-600 border border-blue-100">${mult}x Wealth Multiplier</div>
            <div class="px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full text-[10px] font-black text-green-600 border border-green-100">Ends at: ${FinUI.formatCurrency(finalMonthlySIP.toNumber(), currency)}/mo</div>
        `;
    }

    const insightArea = document.getElementById('sip-insights-area');
    if (insightArea) {
        const insights = [
            { icon: 'trending-up', title: 'Portfolio Growth', desc: `Market gains account for ${finalGains.div(finalMaturity).mul(100).toFixed(0)}% of your estimated maturity value.` },
            { icon: 'shield-check', title: 'Tax Efficiency', desc: `Estimated taxes reduce your final corpus by ${FinUI.formatCurrency(taxAmount.toNumber(), currency)}.` },
            { icon: 'wind', title: 'Inflation Erosion', desc: `Inflation at ${inflation}%/yr reduces the purchasing power of your wealth by ${FinUI.formatCurrency(finalMaturity.minus(realMaturity).toNumber(), currency)}.` }
        ];
        insightArea.innerHTML = insights.map(i => `
            <div class="p-6 bg-white dark:bg-black/20 rounded-[2rem] border dark:border-gray-800 space-y-3">
                <div class="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center text-blue-600"><i data-lucide="${i.icon}" class="w-4 h-4"></i></div>
                <h5 class="text-[10px] font-black uppercase text-gray-900 dark:text-white">${i.title}</h5>
                <p class="text-[9px] font-bold text-gray-400 leading-relaxed">${i.desc}</p>
            </div>
        `).join('');
        lucide.createIcons();
    }

    const tbody = document.getElementById('sip-tbody');
    if (tbody) {
        tbody.innerHTML = schedule.map(y => `
            <tr class="border-b dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td class="p-6 font-bold text-gray-500">Year ${y.year}</td>
                <td class="p-6 text-right font-mono text-gray-400">${FinUI.formatCurrency(y.invested.toNumber(), currency)}</td>
                <td class="p-6 text-right font-mono text-green-600">${FinUI.formatCurrency(y.maturity.minus(y.invested).toNumber(), currency)}</td>
                <td class="p-6 text-right font-black font-mono">${FinUI.formatCurrency(y.maturity.toNumber(), currency)}</td>
            </tr>
        `).join('');
    }
};

// --- TAX ENGINE DATA ---
window.runTaxCalc = () => {
    try {
        const incomeInput = document.getElementById('tax-in');
        const countrySelect = document.getElementById('tax-country');
        const box = document.getElementById('tax-box');
        if (!incomeInput || !countrySelect || !box) return;

        const countryCode = countrySelect.value || 'IN';
        const curCode = state.currency;

        const grossIncome = D(FinUI.getValidInput('tax-in', 1200000));
        if (grossIncome.lt(0)) return;

        box.classList.remove('hidden');

        let taxReg;
        let finalRes;

        const indiaBase = GLOBAL_COUNTRY_CONFIG.IN.tax;

        if (countryCode === 'IN') {
            const yearSelect = document.getElementById('tax-year');
            const rawYear = yearSelect ? yearSelect.value : (state.lastTaxYear || "FY_2024_25");
            
            // Normalize year key
            let yearKey = "FY_2024_25";
            if (rawYear.includes("2025") && (rawYear.includes("26") || rawYear.includes("2026"))) {
                yearKey = "FY_2025_26";
            } else if (rawYear === "2025-26") {
                yearKey = "FY_2025_26";
            }
            
            const config = INDIA_TAX_CONFIG[yearKey] || INDIA_TAX_CONFIG.FY_2024_25;
            
            state.lastTaxYear = yearKey;
            taxReg = {
                standardDeduction: config.standardDeduction,
                slabs: config.slabs,
                rebate: { threshold: config.rebateLimit },
                additives: [{ name: "Health & Education Cess", rate: config.cessRate }],
                regime: config.label
            };

            const yearCont = document.getElementById('tax-year-container');
            if (yearCont) yearCont.classList.remove('hidden');
            
            const regimeLabel = document.getElementById('tax-regime-label');
            if (regimeLabel) regimeLabel.innerText = `Tax Slab Analysis (${taxReg.regime})`;
            
            const sd = D(taxReg.standardDeduction);
            const taxableIncome = grossIncome.minus(sd).gt(0) ? grossIncome.minus(sd) : D(0);
            
            finalRes = FinancialCore.calculateProgressiveTax(grossIncome, taxableIncome, taxReg.slabs, taxReg.additives, 'IN', taxReg.rebate.threshold);
        } else {
            const countryConfig = GLOBAL_COUNTRY_CONFIG[countryCode];
            taxReg = countryConfig.tax;

            const yearCont = document.getElementById('tax-year-container');
            if (yearCont) yearCont.classList.add('hidden');

            const sd = D(taxReg.standardDeduction || 0);
            const taxableIncome = grossIncome.minus(sd).gt(0) ? grossIncome.minus(sd) : D(0);

            if (taxReg.type === 'progressive') {
                finalRes = FinancialCore.calculateProgressiveTax(grossIncome, taxableIncome, taxReg.slabs, taxReg.additives, countryCode, taxReg.rebate?.threshold);
            } else {
                finalRes = { 
                    totalTax: D(0), 
                    finalTax: D(0), 
                    slabDetails: [], 
                    cess: D(0),
                    effectiveRate: D(0)
                };
            }
        }

        const finalTax = finalRes.finalTax || D(0);
        const effectiveRate = finalRes.effectiveRate || (grossIncome.gt(0) ? finalTax.div(grossIncome).times(100) : D(0));
        const monthlyInHand = grossIncome.minus(finalTax).gt(0) ? grossIncome.minus(finalTax).div(12) : D(0);

        // Update UI
        const outEl = document.getElementById('tax-out');
        const rateEl = document.getElementById('tax-rate');
        const inhandEl = document.getElementById('tax-inhand');
        
        if (outEl) outEl.innerText = FinUI.formatCurrency(finalTax.toNumber(), curCode);
        if (rateEl) rateEl.innerText = `Effective Rate: ${effectiveRate.toFixed(2)}%`;
        if (inhandEl) inhandEl.innerText = FinUI.formatCurrency(monthlyInHand.toNumber(), curCode);
        
        const sdVal = D(taxReg.standardDeduction || 0);
        const sdValEl = document.getElementById('tax-ded-val');
        const sdTotEl = document.getElementById('tax-tot-ded');
        if (sdValEl) sdValEl.innerText = FinUI.formatCurrency(sdVal.toNumber(), curCode);
        if (sdTotEl) sdTotEl.innerText = FinUI.formatCurrency(sdVal.toNumber(), curCode);
        
        const curSymBtn = document.getElementById('tax-currency-sym');
        if (curSymBtn) curSymBtn.innerText = CURRENCIES[curCode] ? CURRENCIES[curCode].symbol : curCode;
        
        // UI Helpers: Toggle compliance view for India
        const inCompliance = document.getElementById('tax-india-compliance');
        if (inCompliance) inCompliance.classList.toggle('hidden', countryCode !== 'IN');
        
        const genBreakdown = document.getElementById('tax-gen-slabs');
        if (genBreakdown) genBreakdown.classList.toggle('hidden', !['GEN', 'US', 'UK', 'AE', 'JP'].includes(countryCode));

        if (countryCode === 'IN' && finalRes.slabDetails) {
             const tbody = document.getElementById('tax-tbody');
             const cessEl = document.getElementById('tax-cess');
             if (tbody) {
                tbody.innerHTML = finalRes.slabDetails.map(s => `
                    <tr class="${s.isActive ? 'bg-blue-50/30 dark:bg-blue-900/10' : 'opacity-40'}">
                        <td class="p-6 font-mono text-[10px]">${s.range.replace(' - Infinity', '+')}</td>
                        <td class="p-6 text-center text-[10px]">${s.rate}%</td>
                        <td class="p-6 text-right font-black text-[10px] ${D(s.amount).gt(0) ? 'text-red-500' : 'text-gray-400'}">${FinUI.formatCurrency(D(s.amount).toNumber(), curCode)}</td>
                    </tr>
                `).join('');
             }
             if (cessEl) cessEl.innerText = FinUI.formatCurrency(D(finalRes.cess).toNumber(), curCode);
        }

        if (genBreakdown && countryCode !== 'IN' && finalRes.slabDetails) {
            genBreakdown.innerHTML = finalRes.slabDetails.map(s => `
                <div class="p-4 rounded-2xl border-2 ${s.isActive ? 'border-blue-500/20 bg-blue-50/10' : 'border-gray-100 dark:border-gray-800 opacity-40'}">
                    <p class="text-[8px] font-black text-gray-400 uppercase mb-1">${s.range.replace(' - Infinity', '+')}</p>
                    <div class="flex justify-between items-end text-[10px]">
                        <span class="font-black">${s.rate}%</span>
                        <span class="font-mono ${D(s.amount).gt(0) ? 'text-red-500' : 'text-gray-400'}">${FinUI.formatCurrency(D(s.amount).toNumber(), curCode)}</span>
                    </div>
                </div>
            `).join('');
        }

        // Insights
        const insightList = document.getElementById('tax-insights-list');
        if (insightList) {
            let insights = [];
            if (finalTax.isZero()) {
                insights.push({ icon: 'sun', color: 'green', title: 'Zero Tax Liability', desc: 'You fall under the tax exemption threshold for this jurisdiction.' });
            } else {
                insights.push({ icon: 'trending-down', color: 'red', title: 'Tax Impact', desc: `Approximately ${effectiveRate.toFixed(1)}% of your gross earnings are allocated to statutory dues.` });
            }
            insights.push({ icon: 'zap', color: 'indigo', title: 'Take-Home Pay', desc: `Your purchasing power is ${formatEMICurrency(monthlyInHand.toNumber(), curCode)} per month after all statutory deductions.` });
            
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

    } catch (err) {
        console.error("Tax Engine Performance Failure:", err);
        StabilityEngine.logDiagnostic('TAX_ENGINE_EXCEPTION', { msg: err.message });
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
            
            // Register for cleanup - simple queue
            if (!window.objectUrls) window.objectUrls = [];
            window.objectUrls.push(url);
            
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
            
            // Register for cleanup
            if (!window.objectUrls) window.objectUrls = [];
            window.objectUrls.push(url);
            
            document.getElementById('pdf-split-res').classList.remove('hidden');
            const dlBtn = document.getElementById('pdf-split-res').querySelector('button');
            dlBtn.onclick = () => {
                const a = document.createElement('a');
                a.href = url;
                a.download = `Split_${file.name}`;
                a.click();
            };
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
    const P = FinUI.getValidInput('cc-p', 2500);
    const annualAPR = FinUI.getValidInput('cc-r', 19.99);
    const monthlyPayment = FinUI.getValidInput('cc-m', 100);
    const targetBalance = FinUI.getValidInput('cc-t', 0);
    const currency = state.currency;

    if (P.lte(0) || annualAPR.lt(0) || monthlyPayment.lte(0)) return;
    if (targetBalance.gte(P)) return;

    const monthlyRate = annualAPR.div(1200);
    const dailyRate = annualAPR.div(36500);
    
    document.getElementById('cc-box').classList.remove('hidden');
    const insightArea = document.getElementById('cc-insights');

    // Check for negative amortization (Minimum payment trap)
    const monthlyInterestInitial = P.mul(monthlyRate);
    if (monthlyPayment.lte(monthlyInterestInitial) && annualAPR.gt(0)) {
        if (insightArea) {
             insightArea.innerHTML = `
                <div class="p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-[2rem] flex gap-4">
                    <div class="text-red-500 shrink-0"><i data-lucide="alert-triangle" class="w-5 h-5"></i></div>
                    <div>
                         <h5 class="text-[10px] font-black uppercase text-red-700 dark:text-red-400 mb-1">Debt Trap Detected</h5>
                         <p class="text-[9px] font-bold text-red-600 dark:text-red-400">Monthly payment of ${FinUI.formatCurrency(monthlyPayment.toNumber(), currency)} is less than the interest of ${FinUI.formatCurrency(monthlyInterestInitial.toNumber(), currency)}. Balance will never be repaid.</p>
                    </div>
                </div>
             `;
             lucide.createIcons();
        }
        document.getElementById('cc-total-i').innerText = "∞";
        document.getElementById('cc-months').innerText = "Infinite";
        document.getElementById('cc-daily').innerText = "---";
        document.getElementById('cc-roi').innerText = "---";
        document.getElementById('cc-ratio').innerText = "---";
        return;
    }

    let balance = P;
    let totalInterest = new Decimal(0);
    let months = 0;
    const maxMonths = 1200;

    while (balance.gt(targetBalance) && months < maxMonths) {
        let interest = balance.mul(monthlyRate);
        totalInterest = totalInterest.plus(interest);
        
        // Exact payment to reach target exactly this month (if payment > remaining)
        let paymentToTarget = balance.plus(interest).minus(targetBalance);
        let actualPayment = Decimal.min(monthlyPayment, paymentToTarget);
        
        balance = balance.plus(interest).minus(actualPayment);
        months++;
    }

    const totalPaid = P.minus(targetBalance).plus(totalInterest);
    const finalInterestDisplay = totalInterest.round().toNumber();
    const dailyAccrualVal = P.mul(dailyRate);
    const dailyStr = FinUI.formatCurrency(dailyAccrualVal.toNumber(), currency, 2);

    let timeStr = `${months} Months`;
    if (months >= 12) {
        const years = Math.floor(months / 12);
        const remMonths = months % 12;
        timeStr = remMonths > 0 ? `${years}y ${remMonths}m` : `${years} Years`;
    }

    const effectiveROI = totalInterest.div(P).mul(100).negated();
    const principalRatio = P.minus(targetBalance).div(totalPaid).mul(100);

    // DOM Updates
    document.getElementById('cc-total-i').innerText = FinUI.formatCurrency(totalInterest.toNumber(), currency);
    document.getElementById('cc-months').innerText = timeStr;
    document.getElementById('cc-daily').innerText = `${dailyStr}/day`;
    document.getElementById('cc-roi').innerText = `${effectiveROI.toFixed(2)}%`;
    document.getElementById('cc-ratio').innerText = `${principalRatio.toFixed(1)}% Principal`;

    if (insightArea) {
        const insights = [
            { icon: 'alert-circle', title: 'Interest Trap', desc: `You will pay ${FinUI.formatCurrency(finalInterestDisplay, currency)} in interest alone just to reach your target.` },
            { icon: 'trending-up', title: 'Daily Leak', desc: `Every 24 hours, ${dailyStr} in interest is added to your balance.` }
        ];
        if (annualAPR.gt(20)) insights.push({ icon: 'zap', title: 'Aggressive Debt', desc: 'Extremely high APR detected. Consider balance transfer or personal loan consolidation.' });

        insightArea.innerHTML = insights.map(i => `
            <div class="p-6 bg-white dark:bg-black/20 rounded-[2rem] border dark:border-gray-800 flex gap-4">
                <div class="${i.title === 'Interest Trap' ? 'text-red-500' : 'text-blue-500'} shrink-0"><i data-lucide="${i.icon}" class="w-5 h-5"></i></div>
                <div>
                     <h5 class="text-[10px] font-black uppercase text-gray-900 dark:text-white mb-1">${i.title}</h5>
                     <p class="text-[9px] font-bold text-gray-400 leading-tight">${i.desc}</p>
                </div>
            </div>
        `).join('');
        lucide.createIcons();
    }

    // Export Support
    window.currentCCInputs = { p: P, r: annualAPR, m: monthlyPayment, t: targetBalance, currency };
    window.currentCCSummary = { interest: totalInterest, months: months, daily: dailyAccrualVal, principalRatio: principalRatio };
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
    const r = FinUI.getValidInput('fr-rate', 45, { min: 0 });
    const h = FinUI.getValidInput('fr-hours', 35, { min: 0, max: 168 });
    const feeRate = FinUI.getValidInput('fr-fee', 0, { min: 0, max: 100 }).div(100);
    const taxRate = FinUI.getValidInput('fr-tax', 0, { min: 0, max: 100 }).div(100);
    const currency = state.currency;
    
    // Revenue
    const weeklyGross = r.mul(h);
    
    // Deductions
    const platformFees = weeklyGross.mul(feeRate);
    const weeklyAfterFees = weeklyGross.minus(platformFees);
    const taxDeduction = weeklyAfterFees.mul(taxRate);
    
    const weeklyNet = weeklyAfterFees.minus(taxDeduction);
    
    // Projections
    // User requested Annual = Weekly * 52 and Monthly = Annual / 12
    const yearlyNet = weeklyNet.mul(52);
    const monthlyNet = yearlyNet.div(12);

    const weekEl = document.getElementById('fr-week');
    const monthEl = document.getElementById('fr-month');
    const yearEl = document.getElementById('fr-year');

    if (weekEl) weekEl.innerText = formatEMICurrency(weeklyNet.toNumber(), currency);
    if (monthEl) monthEl.innerText = formatEMICurrency(monthlyNet.toNumber(), currency);
    if (yearEl) yearEl.innerText = formatEMICurrency(yearlyNet.toNumber(), currency);

    // Export Support
    window.currentFreelanceInputs = { r, h, feeRate, taxRate, currency };
    window.currentFreelanceSummary = { weeklyNet, monthlyNet, yearlyNet };
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
    const capital = FinUI.getValidInput('cry-in', 0, { min: 0 });
    const buyPrice = FinUI.getValidInput('cry-buy', 0, { min: 0.00000001 });
    const sellPrice = FinUI.getValidInput('cry-sell', 0, { min: 0 });
    const feeRate = FinUI.getValidInput('cry-fee', 0.1, { min: 0, max: 100 }).div(100);
    const taxRate = FinUI.getValidInput('cry-tax', 0, { min: 0, max: 100 }).div(100);
    const currency = state.currency;

    const profitEl = document.getElementById('cry-profit');
    const percEl = document.getElementById('cry-perc');
    const tokensEl = document.getElementById('cry-tokens');
    const balEl = document.getElementById('cry-bal');
    const beEl = document.getElementById('cry-be');
    const feeValEl = document.getElementById('cry-fee-val');
    const taxValEl = document.getElementById('cry-tax-val');
    const netEl = document.getElementById('cry-net');

    if (capital.lte(0) || buyPrice.lte(0)) {
        if (profitEl) profitEl.innerText = '---';
        if (percEl) percEl.innerText = '+0%';
        if (tokensEl) tokensEl.innerText = '---';
        if (balEl) balEl.innerText = '---';
        if (beEl) beEl.innerText = '---';
        if (feeValEl) feeValEl.innerText = '---';
        if (taxValEl) taxValEl.innerText = '---';
        if (netEl) netEl.innerText = '---';
        return;
    }

    // Buying Phase: Capital -> Tokens (minus entry fee)
    const entryFee = capital.mul(feeRate);
    const netCapital = capital.minus(entryFee);
    const tokens = netCapital.div(buyPrice);

    // Selling Phase: Tokens -> Balance (minus exit fee)
    const grossBalance = tokens.mul(sellPrice);
    const exitFee = grossBalance.mul(feeRate);
    const finalBalance = grossBalance.minus(exitFee);

    const totalFees = entryFee.plus(exitFee);
    const profitBeforeTax = finalBalance.minus(capital);
    
    let taxAmount = new Decimal(0);
    if (profitBeforeTax.gt(0)) {
        taxAmount = profitBeforeTax.mul(taxRate);
    }
    const finalProfit = profitBeforeTax.minus(taxAmount);
    const netTakeAway = finalBalance.minus(taxAmount);
    const percentage = finalProfit.div(capital).times(100);

    // Break-even Buy Price (assuming selling at current sell price)
    // Formula: FinalBalance = Capital
    // Tokens = Capital * (1-fee) / BuyPrice
    // FinalBalance = Tokens * SellPrice * (1-fee)
    // BuyPriceTarget = SellPrice * (1-fee)^2
    // Wait, the user usually wants to know what SELL price they need to break even at a given BUY price.
    // Or what BUY price they should have had for current SELL price.
    // Usually it's: "I bought at X, what should I sell at to break even?"
    // The current code does: breakEven = buyPrice / (1-fee)^2
    // Let's re-verify:
    // Capital = Tokens * TargetSellPrice * (1-fee)
    // Capital = [Capital * (1-fee) / BuyPrice] * TargetSellPrice * (1-fee)
    // 1 = (1-fee)^2 * TargetSellPrice / BuyPrice
    // TargetSellPrice = BuyPrice / (1-fee)^2. Correct.
    const breakEven = buyPrice.div(new Decimal(1).minus(feeRate).pow(2));

    if (profitEl) {
        const isNegZero = finalProfit.lt(0) && finalProfit.gt(-0.01);
        profitEl.innerText = (finalProfit.lt(0) && !isNegZero ? '-' : '') + FinUI.formatCurrency(finalProfit.abs().toNumber(), currency);
        profitEl.className = `text-5xl font-black mb-2 ${finalProfit.gte(0) ? 'text-green-500' : 'text-red-500'}`;
    }
    
    if (percEl) {
        const isNegZeroPerc = percentage.lt(0) && percentage.gt(-0.005);
        percEl.innerText = (percentage.gte(0) || isNegZeroPerc ? '+' : '') + percentage.toFixed(2) + '%';
        percEl.className = `text-lg font-black ${percentage.gte(0) ? 'text-green-400' : 'text-red-400'}`;
    }
    
    if (balEl) balEl.innerText = FinUI.formatCurrency(finalBalance.toNumber(), currency);
    if (tokensEl) tokensEl.innerText = tokens.toFixed(8);
    if (beEl) beEl.innerText = FinUI.formatCurrency(breakEven.toNumber(), currency);
    if (feeValEl) feeValEl.innerText = `-${FinUI.formatCurrency(totalFees.toNumber(), currency)}`;
    if (taxValEl) taxValEl.innerText = `-${FinUI.formatCurrency(taxAmount.toNumber(), currency)}`;
    if (netEl) {
        const isNegZeroNet = netTakeAway.lt(0) && netTakeAway.gt(-0.01);
        netEl.innerText = (netTakeAway.lt(0) && !isNegZeroNet ? '-' : '') + FinUI.formatCurrency(netTakeAway.abs().toNumber(), currency);
    }
};

window.runROICalc = () => {
    const spend = FinUI.getValidInput('roi-s', 0);
    const revenue = FinUI.getValidInput('roi-r', 0);
    const days = FinUI.getValidInput('roi-t', 365);
    const currency = state.currency;

    const errorEl = document.getElementById('roi-error');
    const out = document.getElementById('roi-out');
    const profitEl = document.getElementById('roi-p');
    const roasEl = document.getElementById('roi-a');
    const annEl = document.getElementById('roi-ann');
    const bar = document.getElementById('roi-bar');

    if (spend.lte(0)) {
        if (errorEl) errorEl.classList.remove('hidden');
        if (out) out.innerText = '---';
        if (profitEl) profitEl.innerText = '--';
        if (roasEl) roasEl.innerText = '--';
        if (annEl) annEl.innerText = '--';
        if (bar) bar.style.width = '0%';
        return;
    }

    if (errorEl) errorEl.classList.add('hidden');

    const profit = revenue.minus(spend);
    const roi = profit.div(spend).times(100);
    const roas = revenue.div(spend);

    // Annualized ROI: ((finalValue / initialCapital) ^ (365 / durationDays) - 1) × 100
    let annualized;
    if (days.lte(0)) {
        annualized = null;
    } else {
        try {
            const roasFactor = revenue.div(spend);
            if (roasFactor.lte(0)) {
                annualized = roi; // Fallback for total loss
            } else {
                const timeFactor = new Decimal(365).div(days);
                annualized = roasFactor.pow(timeFactor).minus(1).times(100);
            }
        } catch (e) {
            annualized = null;
        }
    }

    if (out) {
        out.innerText = (roi.lt(0) && roi.gt(-0.05) ? '0.0' : roi.toFixed(1)) + '%';
        out.className = `text-6xl font-black relative z-10 ${roi.gte(0) ? 'text-white' : 'text-red-200'}`;
    }
    
    if (profitEl) {
        const isNegZero = profit.lt(0) && profit.gt(-0.01);
        profitEl.innerText = (profit.lt(0) && !isNegZero ? '-' : '') + FinUI.formatCurrency(profit.abs().toNumber(), currency);
        profitEl.className = `text-lg font-black mt-1 ${profit.gte(0) ? 'text-green-600' : 'text-red-500'}`;
    }
    
    if (roasEl) roasEl.innerText = roas.toFixed(2) + 'x';
    
    if (annEl) {
        if (annualized === null) {
            annEl.innerText = 'N/A';
            annEl.className = 'text-lg font-black mt-1 text-gray-400';
        } else {
            annEl.innerText = (annualized.lt(0) && annualized.gt(-0.1) ? '0.0' : annualized.toFixed(1)) + '%';
            annEl.className = `text-lg font-black mt-1 ${annualized.gte(0) ? 'text-green-600' : 'text-red-500'}`;
        }
    }

    if (bar) {
        const visualPerc = Math.max(0, Math.min(100, roi.div(2).plus(50).toNumber()));
        bar.style.width = visualPerc + '%';
        bar.className = `h-full transition-all duration-1000 ${roi.gte(0) ? 'bg-white' : 'bg-red-400'}`;
    }

    const table = document.getElementById('roi-table');
    if (table) {
        const targets = [1, 2, 3, 5, 10];
        table.innerHTML = targets.map(t => {
            const targetRev = spend.mul(t);
            const isReached = roas.gte(t);
            return `
                <div class="flex items-center justify-between p-3 rounded-xl border dark:border-gray-800 ${isReached ? 'bg-green-500/10 border-green-500/20' : ''}">
                    <div class="flex items-center gap-3">
                        <div class="w-2 h-2 rounded-full ${isReached ? 'bg-green-500' : 'bg-gray-300'}"></div>
                        <span class="text-[9px] font-black uppercase text-gray-400">${t}x ROAS Target</span>
                    </div>
                    <span class="text-[10px] font-mono font-bold">${FinUI.formatCurrency(targetRev.toNumber(), currency)}</span>
                </div>
            `;
        }).join('');
    }
};

window.runInsCalc = () => {
    const type = document.getElementById('ins-type')?.value;
    const age = FinUI.getValidInput('ins-age', 25).toNumber();
    const cov = FinUI.getValidInput('ins-cov', 1000000);
    const isTobacco = document.getElementById('ins-t-yes')?.classList.contains('bg-blue-600');
    const hasCI = document.getElementById('ins-r-ci')?.checked;
    const hasAD = document.getElementById('ins-r-ad')?.checked;
    const currency = state.currency;
    const country = state.detectedCountry;

    const out = document.getElementById('ins-out');
    const breakdown = document.getElementById('ins-breakdown');
    const caution = document.getElementById('ins-caution');

    if (cov.lte(0) || age < 18 || age > 75) {
        if (out) out.innerText = "---";
        if (breakdown) breakdown.classList.add('hidden');
        
        // Handle caution display for invalid age before returning
        if (caution && (age > 75 || age < 18)) {
            caution.classList.remove('hidden');
            const cautionText = caution.querySelector('p');
            if (cautionText) cautionText.innerText = "Age outside standard coverage range.";
        } else if (caution) {
            caution.classList.add('hidden');
        }
        return;
    }

    // Base Rates per 1000 Coverage
    const termRates = {
        18: 0.45, 26: 0.55, 31: 0.75, 36: 1.05, 41: 1.55, 46: 2.30, 51: 3.40, 56: 5.20, 61: 7.80
    };
    const healthRates = {
        18: 0.65, 26: 0.85, 31: 1.10, 36: 1.45, 41: 1.95, 46: 2.80, 51: 4.10, 56: 6.20, 61: 9.50
    };

    const getBase = (a, table) => {
        const keys = Object.keys(table).map(Number).sort((a,b) => b-a);
        for(let k of keys) {
            if (a >= k) return table[k];
        }
        return table[18];
    };

    let baseRateVal = 0;
    let planMult = 1.0;

    if (type === 'term') {
        baseRateVal = getBase(age, termRates);
        planMult = 1.0;
    } else if (type === 'health') {
        baseRateVal = getBase(age, healthRates);
        planMult = 1.25; // Loading for comprehensive health
    } else if (type === 'accident') {
        baseRateVal = getBase(age, termRates);
        planMult = 0.25;
    } else if (type === 'ci') {
        baseRateVal = getBase(age, termRates);
        planMult = 1.80;
    }

    const basePremAnnual = cov.div(1000).mul(baseRateVal).mul(planMult);
    
    // Multipliers
    let smokerMult = isTobacco ? 1.35 : 1.0;
    
    // Riders (Additive components)
    let riderLoading = 0;
    if (hasCI) riderLoading += 0.25;
    if (hasAD) riderLoading += 0.15;
    const riderMult = 1 + riderLoading;

    const totalAnnualBase = basePremAnnual.mul(smokerMult).mul(riderMult);
    
    let gstVal = D(0);
    // Trigger GST if country is India or currency is INR (common for tests/Indian users)
    if (country === 'IN' || currency === 'INR') {
        gstVal = totalAnnualBase.mul(0.18);
    }
    
    const finalAnnual = totalAnnualBase.plus(gstVal);
    const monthly = finalAnnual.div(12);

    // Update UI
    if (out) out.innerText = FinUI.formatCurrency(monthly.toNumber(), currency);
    
    if (breakdown) {
        breakdown.classList.remove('hidden');
        document.getElementById('ins-val-base').innerText = FinUI.formatCurrency(basePremAnnual.div(12).toNumber(), currency);
        
        const smokerRow = document.getElementById('ins-row-smoker');
        if (smokerRow) {
            smokerRow.classList.toggle('hidden', !isTobacco);
            document.getElementById('ins-val-smoker').innerText = `+${FinUI.formatCurrency(basePremAnnual.mul(smokerMult - 1).div(12).toNumber(), currency)}`;
        }

        const riderRow = document.getElementById('ins-row-riders');
        if (riderRow) {
            riderRow.classList.toggle('hidden', riderLoading === 0);
            document.getElementById('ins-val-riders').innerText = `+${FinUI.formatCurrency(basePremAnnual.mul(smokerMult).mul(riderLoading).div(12).toNumber(), currency)}`;
        }

        const gstRow = document.getElementById('ins-row-gst');
        if (gstRow) {
            gstRow.classList.toggle('hidden', gstVal.eq(0));
            document.getElementById('ins-val-gst').innerText = `+${FinUI.formatCurrency(gstVal.div(12).toNumber(), currency)}`;
        }
    }

    if (caution) {
        const cautionText = caution.querySelector('p');
        if (age > 75 || age < 18) {
            caution.classList.remove('hidden');
            if (cautionText) cautionText.innerText = "Age outside standard coverage range.";
        } else if (age > 50) {
            caution.classList.remove('hidden');
            if (cautionText) cautionText.innerText = "Premiums may vary significantly after medical underwriting.";
        } else {
            caution.classList.add('hidden');
        }
    }

    // Safety Quotient
    const safety = document.getElementById('ins-safety');
    if (safety) {
        if (age > 60) {
            safety.innerText = "Focus on Critical Illness and OPD riders.";
            safety.className = "text-sm font-bold text-orange-500 tracking-tight";
        } else if (cov.lt(5000000) && type === 'term') {
            safety.innerText = "Lower than recommended coverage for most households.";
            safety.className = "text-sm font-bold text-orange-500 tracking-tight";
        } else {
            safety.innerText = "Robust strategy. Review riders as life stages change.";
            safety.className = "text-sm font-bold text-green-500 tracking-tight";
        }
    }
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

window.handleResizerInput = (input) => {
    if (!input.files || !input.files[0]) return;
    const file = input.files[0];
    if (!file.type.startsWith('image/')) return toast("Please select a valid image file.");

    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            state.resizerFile = file;
            state.resizerImg = img;
            state.resizerRatio = img.width / img.height;
            document.getElementById('res-w').value = img.width;
            document.getElementById('res-h').value = img.height;
            document.getElementById('res-orig-info').innerText = `${img.width}x${img.height} (${(file.size / 1024).toFixed(1)} KB)`;
            document.getElementById('res-preview-img').src = e.target.result;
            document.getElementById('resizer-upload').classList.add('hidden');
            document.getElementById('resizer-controls').classList.remove('hidden');
            document.getElementById('resizer-preview').classList.remove('hidden');
            updateResizerTargetInfo();
            lucide.createIcons();
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
};

window.syncResizerDim = (type) => {
    const wInput = document.getElementById('res-w');
    const hInput = document.getElementById('res-h');
    const aspect = document.getElementById('res-aspect').checked;
    if (aspect && state.resizerRatio) {
        if (type === 'w') {
            hInput.value = Math.round(wInput.value / state.resizerRatio);
        } else {
            wInput.value = Math.round(hInput.value * state.resizerRatio);
        }
    }
    updateResizerTargetInfo();
};

window.updateResizerQual = (val) => {
    document.getElementById('res-qual-val').innerText = `${val}%`;
    updateResizerTargetInfo();
};

window.toggleResizerQuality = () => {
    const fmt = document.getElementById('res-format').value;
    const box = document.getElementById('res-quality-box');
    if (fmt === 'image/png' || fmt === 'image/bmp') {
        box.classList.add('opacity-30', 'pointer-events-none');
    } else {
        box.classList.remove('opacity-30', 'pointer-events-none');
    }
    updateResizerTargetInfo();
};

function updateResizerTargetInfo() {
    const w = document.getElementById('res-w').value || 0;
    const h = document.getElementById('res-h').value || 0;
    const fmtSelection = document.getElementById('res-format');
    if(!fmtSelection) return;
    const fmt = fmtSelection.value.split('/')[1].toUpperCase();
    const info = document.getElementById('res-target-info');
    if(info) info.innerText = `${w}x${h} (${fmt})`;
}

window.runImageResizer = () => {
    if (!state.resizerImg) return;
    const w = parseInt(document.getElementById('res-w').value);
    const h = parseInt(document.getElementById('res-h').value);
    const mime = document.getElementById('res-format').value;
    const quality = parseInt(document.getElementById('res-qual').value) / 100;

    if (w < 1 || w > 10000 || h < 1 || h > 10000) return toast("Invalid dimensions (1-10000px)");

    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (mime === 'image/jpeg') {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, w, h);
    }
    ctx.drawImage(state.resizerImg, 0, 0, w, h);
    
    canvas.toBlob((blob) => {
        if (!blob) return toast("Export failed. Browser limitation?");
        const url = URL.createObjectURL(blob);
        const resBox = document.getElementById('res-result');
        const dlBtn = document.getElementById('res-dl');
        const sizeInfo = document.getElementById('res-final-size');
        sizeInfo.innerText = `Output Size: ${(blob.size / 1024).toFixed(1)} KB`;
        resBox.classList.remove('hidden');
        dlBtn.onclick = () => {
            const a = document.createElement('a');
            a.href = url;
            const ext = mime.split('/')[1].replace('jpeg', 'jpg');
            a.download = `${state.resizerFile.name.split('.')[0]}_resized_${w}x${h}.${ext}`;
            a.click();
            setTimeout(() => URL.revokeObjectURL(url), 10000);
        };
        toast("Transformation complete!");
    }, mime, quality);
};

// --- BACKGROUND REMOVAL LOGIC ---
let bgCanvas, bgCtx, bgIsDrawing = false;
let bgBrushSize = 20;
let bgBrushMode = 'erase';

window.handleBgRemoveUpload = (input) => {
    if (!input.files || !input.files[0]) return;
    const file = input.files[0];
    const reader = new FileReader();

    document.getElementById('bg-loader').classList.remove('hidden');
    document.getElementById('bg-upload').classList.add('hidden');
    document.getElementById('bg-sandbox').classList.remove('hidden');

    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            state.bgFile = file;
            state.bgOriginalImg = img;
            initBgRemoverCanvas(img);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
};

function initBgRemoverCanvas(img) {
    bgCanvas = document.getElementById('bg-canvas');
    bgCtx = bgCanvas.getContext('2d', { willReadFrequently: true });

    // Limit large images for performance
    const maxDim = 1600;
    let w = img.width;
    let h = img.height;
    if (w > maxDim || h > maxDim) {
        const ratio = Math.min(maxDim / w, maxDim / h);
        w *= ratio;
        h *= ratio;
        toast("Image scaled down for editing performance.");
    }

    bgCanvas.width = w;
    bgCanvas.height = h;
    bgCtx.drawImage(img, 0, 0, w, h);
    document.getElementById('bg-dim-info').innerText = `${Math.round(w)}x${Math.round(h)} Optimized Workspace`;
    
    // Initial State for Undo
    state.bgUndoStack = [bgCtx.getImageData(0, 0, w, h)];
    state.bgRedoStack = [];
    updateBgHistoryButtons();

    // Event Listeners
    bgCanvas.onmousedown = bgStartDraw;
    bgCanvas.onmousemove = bgDraw;
    bgCanvas.onmouseup = bgEndDraw;
    bgCanvas.onmouseleave = bgEndDraw;

    // Touch Support
    bgCanvas.ontouchstart = (e) => { e.preventDefault(); bgStartDraw(e.touches[0]); };
    bgCanvas.ontouchmove = (e) => { e.preventDefault(); bgDraw(e.touches[0]); };
    bgCanvas.ontouchend = (e) => { e.preventDefault(); bgEndDraw(); };

    document.getElementById('bg-loader').classList.add('hidden');
    lucide.createIcons();
}

function bgStartDraw(e) {
    bgIsDrawing = true;
    bgDraw(e);
}

function bgDraw(e) {
    if (!bgIsDrawing) return;

    const rect = bgCanvas.getBoundingClientRect();
    const scaleX = bgCanvas.width / rect.width;
    const scaleY = bgCanvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    bgCtx.globalCompositeOperation = bgBrushMode === 'erase' ? 'destination-out' : 'source-over';
    
    if (bgBrushMode === 'restore') {
        // Drawing from original image data is tricky with globalCompositeOperation
        // Simpler way: clip and draw original image
        bgCtx.save();
        bgCtx.beginPath();
        bgCtx.arc(x, y, bgBrushSize / 2, 0, Math.PI * 2);
        bgCtx.clip();
        bgCtx.drawImage(state.bgOriginalImg, 0, 0, bgCanvas.width, bgCanvas.height);
        bgCtx.restore();
    } else {
        bgCtx.beginPath();
        bgCtx.arc(x, y, bgBrushSize / 2, 0, Math.PI * 2);
        bgCtx.fill();
    }
}

function bgEndDraw() {
    if (!bgIsDrawing) return;
    bgIsDrawing = false;
    saveBgState();
}

function saveBgState() {
    const data = bgCtx.getImageData(0, 0, bgCanvas.width, bgCanvas.height);
    state.bgUndoStack.push(data);
    if (state.bgUndoStack.length > 21) state.bgUndoStack.shift();
    state.bgRedoStack = [];
    updateBgHistoryButtons();
}

window.bgUndo = () => {
    if (state.bgUndoStack.length <= 1) return;
    state.bgRedoStack.push(state.bgUndoStack.pop());
    const prev = state.bgUndoStack[state.bgUndoStack.length - 1];
    bgCtx.putImageData(prev, 0, 0);
    updateBgHistoryButtons();
};

window.bgRedo = () => {
    if (state.bgRedoStack.length === 0) return;
    const next = state.bgRedoStack.pop();
    state.bgUndoStack.push(next);
    bgCtx.putImageData(next, 0, 0);
    updateBgHistoryButtons();
};

function updateBgHistoryButtons() {
    const u = document.getElementById('bg-undo');
    const r = document.getElementById('bg-redo');
    if(u) u.disabled = state.bgUndoStack.length <= 1;
    if(r) r.disabled = state.bgRedoStack.length === 0;
}

window.setBgBrushMode = (mode) => {
    bgBrushMode = mode;
    document.getElementById('bg-btn-erase').className = mode === 'erase' ? 'flex flex-col items-center gap-2 p-4 rounded-xl transition-all bg-blue-600 text-white shadow-lg' : 'flex flex-col items-center gap-2 p-4 rounded-xl transition-all bg-white dark:bg-gray-800 text-gray-400 border dark:border-gray-700';
    document.getElementById('bg-btn-restore').className = mode === 'restore' ? 'flex flex-col items-center gap-2 p-4 rounded-xl transition-all bg-blue-600 text-white shadow-lg' : 'flex flex-col items-center gap-2 p-4 rounded-xl transition-all bg-white dark:bg-gray-800 text-gray-400 border dark:border-gray-700';
};

window.updateBgBrushSize = (val) => {
    bgBrushSize = parseInt(val);
    document.getElementById('bg-brush-val').innerText = `${val}px`;
};

window.toggleBgExportWarn = () => {
    const fmt = document.getElementById('bg-export-fmt').value;
    const warn = document.getElementById('bg-jpg-warn');
    if (fmt === 'image/jpeg') {
        warn.classList.remove('hidden');
    } else {
        warn.classList.add('hidden');
    }
};

window.exportBgRemovedImage = () => {
    const mime = document.getElementById('bg-export-fmt').value;
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = bgCanvas.width;
    tempCanvas.height = bgCanvas.height;
    const tCtx = tempCanvas.getContext('2d');

    if (mime === 'image/jpeg') {
        tCtx.fillStyle = '#FFFFFF';
        tCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    }
    
    tCtx.drawImage(bgCanvas, 0, 0);
    
    const dataUrl = tempCanvas.toDataURL(mime, 0.9);
    const link = document.createElement('a');
    link.href = dataUrl;
    const ext = mime.split('/')[1].replace('jpeg', 'jpg');
    link.download = `${state.bgFile.name.split('.')[0]}_isolated.${ext}`;
    link.click();
    toast("Asset exported successfully!");
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

window.toggleGlobalCurrency = () => {
    const codes = Object.keys(CURRENCIES);
    const currentIndex = codes.indexOf(state.currency);
    const nextIndex = (currentIndex + 1) % codes.length;
    window.updateGlobalCurrency(codes[nextIndex]);
};

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
    StabilityEngine.init(); // Start regression testing and error monitoring
    
    // User Behavior Guard: Apply debouncing to heavy calculation tools
    const calcsToDebounce = [
        'runEMICalc', 'runSIPCalc', 'runTaxCalc', 'runFDCalc', 
        'runLoanComp', 'runInsCalc', 'runROICalc', 'runCCCalc',
        'runFreelanceCalc', 'runCryCalc'
    ];
    calcsToDebounce.forEach(fnName => {
        if (typeof window[fnName] === 'function') {
            const original = window[fnName];
            window[fnName] = FinUI.debounce(original, 200);
        }
    });

    const langSelect = document.getElementById('lang-select');
    const curSelect = document.getElementById('currency-select');
    
    if (langSelect) langSelect.value = state.lang;
    if (curSelect) curSelect.value = state.currency;

    document.getElementById('modal-close').onclick = closeToolModal;
    document.getElementById('modal-overlay').onclick = closeToolModal;
    
    renderUI();
    startQuoteRotation();
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
