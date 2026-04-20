import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteSection } from './components/QuoteSection';
import { Modal } from './components/Modal';
import { AdPlaceholder } from './components/AdPlaceholder';
import { ToolShelf } from './components/ToolShelf';
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SEO_CONTENT } from './lib/seoContent';
import { detectDefaultCurrency, formatCurrency, CURRENCIES } from './lib/currency';
import { Language, TRANSLATIONS, detectLanguage } from './lib/i18n';
import { 
  ArrowUp, Scissors, Type, Calculator, Image as ImageIcon, Lock, Calendar, 
  FileText, Minimize, Trash2, Volume2, Mic, QrCode, Palette, Hash, Link as LinkIcon, 
  Ruler, Timer, CheckSquare, PenTool, Banknote, Landmark, Wallet, CreditCard, 
  ShieldCheck, Globe, Briefcase, Search as SearchIcon, Coins, LineChart, Percent,
  Instagram, MessageCircle, Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

// Import tools
import AgeCalculator from './tools/AgeCalculator';
import BackgroundRemover from './tools/BackgroundRemover';
import CaseConverter from './tools/CaseConverter';
import ImageCompressor from './tools/ImageCompressor';
import ImageResizer from './tools/ImageResizer';
import JpgToPng from './tools/JpgToPng';
import PasswordGenerator from './tools/PasswordGenerator';
import PdfMerger from './tools/PdfMerger';
import PdfSplitter from './tools/PdfSplitter';
import WordCounter from './tools/WordCounter';

// New Tool Imports
import TextToSpeech from './tools/TextToSpeech';
import SpeechToText from './tools/SpeechToText';
import QrCodeGenerator from './tools/QrCodeGenerator';
import ColorPicker from './tools/ColorPicker';
import Base64Converter from './tools/Base64Converter';
import UrlConverter from './tools/UrlConverter';
import UnitConverter from './tools/UnitConverter';
import Stopwatch from './tools/Stopwatch';
import TodoList from './tools/TodoList';
import NotesApp from './tools/NotesApp';

// High CPC Finance Tools
import EMICalculator from './tools/EMICalculator';
import SIPCalculator from './tools/SIPCalculator';
import TaxCalculator from './tools/TaxCalculator';
import CreditCardInterest from './tools/CreditCardInterest';
import InsurancePremium from './tools/InsurancePremium';
import WebsiteCost from './tools/WebsiteCost';
import FreelancerEarnings from './tools/FreelancerEarnings';
import DomainEstimator from './tools/DomainEstimator';
import CryptoProfit from './tools/CryptoProfit';
import AdsROICalculator from './tools/AdsROICalculator';

// Instagram Tools
import InstaUsernameGenerator from './tools/InstaUsernameGenerator';
import InstaCaptionGenerator from './tools/InstaCaptionGenerator';
import InstaBioGenerator from './tools/InstaBioGenerator';

const TOOLS = [
  { id: 'image-compressor', nameKey: 'compress', icon: Minimize, desc: 'Compress images without losing quality.', category: 'Image', component: ImageCompressor, slugs: ['compress', 'compress-image-50kb', 'compress-image-100kb', 'compress-image-20kb'] },
  { id: 'background-remover', nameKey: 'bgremove', icon: Trash2, desc: 'Remove image backgrounds easily.', category: 'Image', component: BackgroundRemover, slugs: ['bgremove', 'remove-background-online'] },
  { id: 'image-resizer', nameKey: 'resize', icon: ImageIcon, desc: 'Resize dimensions of any image.', category: 'Image', component: ImageResizer, slugs: ['resize', 'resize-image-px'] },
  { id: 'jpg-to-png', nameKey: 'png', icon: ImageIcon, desc: 'Convert JPG images to PNG format.', category: 'Image', component: JpgToPng, slugs: ['png', 'convert-jpg-to-png'] },
  { id: 'pdf-merger', nameKey: 'pdfmerge', icon: FileText, desc: 'Combine multiple PDFs into one.', category: 'PDF', component: PdfMerger, slugs: ['pdfmerge', 'merge-pdf-online'] },
  { id: 'pdf-splitter', nameKey: 'pdfsplit', icon: Scissors, desc: 'Extract pages from a PDF document.', category: 'PDF', component: PdfSplitter, slugs: ['pdfsplit', 'split-pdf-free'] },
  { id: 'word-counter', nameKey: 'wordcount', icon: Type, desc: 'Count words, chars, and paragraphs.', category: 'Text', component: WordCounter, slugs: ['wordcount', 'word-count-checker'] },
  { id: 'case-converter', nameKey: 'case', icon: Type, desc: 'Change text to uppercase, lowercase, etc.', category: 'Text', component: CaseConverter, slugs: ['case', 'text-case-changer'] },
  { id: 'password-generator', nameKey: 'pass', icon: Lock, desc: 'Generate strong secure passwords.', category: 'Utility', component: PasswordGenerator, slugs: ['pass', 'secure-password-maker'] },
  { id: 'age-calculator', nameKey: 'age', icon: Calendar, desc: 'Calculate your exact age in days.', category: 'Utility', component: AgeCalculator, slugs: ['age', 'how-old-am-i'] },
  
  // New Tools
  { id: 'text-to-speech', nameKey: 'tts', icon: Volume2, desc: 'Convert any text into natural sounding speech.', category: 'Text', component: TextToSpeech, slugs: ['tts', 'voice-generator'] },
  { id: 'speech-to-text', nameKey: 'stt', icon: Mic, desc: 'Convert your voice to text in real-time.', category: 'Text', component: SpeechToText, slugs: ['stt', 'voice-typing'] },
  { id: 'qr-code-generator', nameKey: 'qr', icon: QrCode, desc: 'Create custom QR codes for URLs or text.', category: 'Utility', component: QrCodeGenerator, slugs: ['qr', 'make-qr-code'] },
  { id: 'color-picker', nameKey: 'color', icon: Palette, desc: 'Pick, generate and copy hexadecimal colors.', category: 'Utility', component: ColorPicker, slugs: ['color', 'hex-color-picker'] },
  { id: 'base64-converter', nameKey: 'b64', icon: Hash, desc: 'Encode or decode text to Base64 format.', category: 'Utility', component: Base64Converter, slugs: ['b64', 'base64-encode'] },
  { id: 'url-converter', nameKey: 'url', icon: LinkIcon, desc: 'Sanitize URLs with encoding and decoding.', category: 'Utility', component: UrlConverter, slugs: ['url', 'url-encoder-decoder'] },
  { id: 'unit-converter', nameKey: 'unit', icon: Ruler, desc: 'Convert between different units of measurement.', category: 'Utility', component: UnitConverter, slugs: ['unit', 'measurement-converter'] },
  { id: 'stopwatch', nameKey: 'stopwatch', icon: Timer, desc: 'Accurate timer with start and pause.', category: 'Utility', component: Stopwatch, slugs: ['timer', 'online-stopwatch'] },
  { id: 'todo-list', nameKey: 'todo', icon: CheckSquare, desc: 'Manage your tasks with local storage sync.', category: 'Utility', component: TodoList, slugs: ['todo', 'task-manager'] },
  { id: 'notes-app', nameKey: 'notes', icon: PenTool, desc: 'Quickly write and auto-save personal notes.', category: 'Text', component: NotesApp, slugs: ['notes', 'sticky-notes-online'] },

  // Finance Tools
  { id: 'emi-calculator', nameKey: 'emi', icon: Landmark, desc: 'Free EMI Calculator Online for loans.', category: 'Finance', component: EMICalculator, slugs: ['emi', 'loan-emi-calculator'] },
  { id: 'sip-calculator', nameKey: 'sip', icon: Banknote, desc: 'SIP Calculator India for future wealth.', category: 'Finance', component: SIPCalculator, slugs: ['sip', 'mutual-fund-calculator'] },
  { id: 'tax-calculator', nameKey: 'tax', icon: Wallet, desc: 'Tax Calculator 2026 for salary planning.', category: 'Finance', component: TaxCalculator, slugs: ['tax', 'income-tax-calculator'] },
  { id: 'credit-card-interest', nameKey: 'cc', icon: CreditCard, desc: 'Calculate interest on unpaid card balance.', category: 'Finance', component: CreditCardInterest, slugs: ['cc', 'credit-card-payoff'] },
  { id: 'insurance-estimator', nameKey: 'ins', icon: ShieldCheck, desc: 'Estimate monthly premiums for insurance.', category: 'Finance', component: InsurancePremium, slugs: ['ins', 'term-insurance-calc'] },
  { id: 'website-cost', nameKey: 'web', icon: Globe, desc: 'Calculate cost for building a new website.', category: 'Finance', component: WebsiteCost, slugs: ['web', 'web-design-cost'] },
  { id: 'freelancer-earning', nameKey: 'free', icon: Briefcase, desc: 'Monthly/yearly income for freelancers.', category: 'Finance', component: FreelancerEarnings, slugs: ['free', 'freelance-hourly-rate'] },
  { id: 'domain-estimator', nameKey: 'dom', icon: SearchIcon, desc: 'Heuristic domain market value estimator.', category: 'Finance', component: DomainEstimator, slugs: ['dom', 'domain-value-checker'] },
  { id: 'crypto-profit', nameKey: 'crypto', icon: Coins, desc: 'Calculate profit or loss on crypto trades.', category: 'Finance', component: CryptoProfit, slugs: ['crypto', 'crypto-calculator'] },
  { id: 'roi-calculator', nameKey: 'roi', icon: LineChart, desc: 'Google Ads ROI and profit analyzer.', category: 'Finance', component: AdsROICalculator, slugs: ['roi', 'ad-profit-calculator'] },

  // Instagram Tools
  { id: 'username-generator', nameKey: 'username', icon: Instagram, desc: 'Generate unique and cool Instagram usernames.', category: 'Instagram', component: InstaUsernameGenerator, slugs: ['username', 'ig-name-generator'] },
  { id: 'caption-generator', nameKey: 'caption', icon: MessageCircle, desc: 'Create engaging Instagram captions with AI.', category: 'Instagram', component: InstaCaptionGenerator, slugs: ['caption', 'ig-captions'] },
  { id: 'bio-generator', nameKey: 'bio', icon: Sparkles, desc: 'Create stylish Instagram bios with symbols.', category: 'Instagram', component: InstaBioGenerator, slugs: ['bio', 'stylish-bio-maker'] },
];

const CATEGORIES = ['All', 'Image', 'PDF', 'Finance', 'Text', 'Instagram', 'Utility'];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [currency, setCurrency] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('currency');
      return saved || detectDefaultCurrency();
    }
    return 'USD';
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTool, setActiveTool] = useState<typeof TOOLS[0] | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [sharedState, setSharedState] = useState<{ original: string | null, processed: string | null }>({
    original: null,
    processed: null
  });

  const updateSharedImage = (url: string | null, isProcessed: boolean = false) => {
    setSharedState(prev => ({
      original: isProcessed ? prev.original : url,
      processed: isProcessed ? url : prev.processed
    }));
  };
  const navigate = useNavigate();
  const location = useLocation();

  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('lang') as Language;
      return saved || detectLanguage();
    }
    return 'en';
  });

  const [usageStats, setUsageStats] = useState<{popular: Record<string, number>, trending: Record<string, {count: number, lastUpdate: number}>, recent: string[] }>(() => {
    if (typeof window !== 'undefined') {
      const popular = JSON.parse(localStorage.getItem('tool_popular') || '{}');
      const trending = JSON.parse(localStorage.getItem('tool_trending') || '{}');
      const recent = JSON.parse(localStorage.getItem('tool_recent') || '[]');
      
      // Cleanup trending if older than 24h
      const now = Date.now();
      const updatedTrending = { ...trending };
      Object.keys(updatedTrending).forEach(id => {
        if (now - updatedTrending[id].lastUpdate > 24 * 60 * 60 * 1000) {
          delete updatedTrending[id];
        }
      });

      return { popular, trending: updatedTrending, recent };
    }
    return { popular: {}, trending: {}, recent: [] };
  });

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('currency', currency);
  }, [currency]);

  // URL Sync Effect
  useEffect(() => {
    const path = location.pathname.split('/').filter(Boolean)[0];
    if (path) {
      const tool = TOOLS.find(t => t.id === path || (t.slugs && t.slugs.includes(path)));
      if (tool) {
        setActiveTool(tool);
      } else {
        setActiveTool(null);
      }
    } else {
      setActiveTool(null);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const trackToolClick = (toolId: string) => {
    setUsageStats(prev => {
      const now = Date.now();
      
      // 1. Popular (Total counts)
      const popular = { ...prev.popular, [toolId]: (prev.popular[toolId] || 0) + 1 };
      localStorage.setItem('tool_popular', JSON.stringify(popular));

      // 2. Trending (Counts in last 24h)
      const trending = { ...prev.trending };
      if (!trending[toolId]) {
        trending[toolId] = { count: 1, lastUpdate: now };
      } else {
        trending[toolId] = { count: trending[toolId].count + 1, lastUpdate: now };
      }
      localStorage.setItem('tool_trending', JSON.stringify(trending));

      // 3. Recent (Last 5 unique)
      const recent = [toolId, ...prev.recent.filter(id => id !== toolId)].slice(0, 5);
      localStorage.setItem('tool_recent', JSON.stringify(recent));

      return { popular, trending, recent };
    });
  };

  const handleToolSelect = (tool: typeof TOOLS[0]) => {
    trackToolClick(tool.id);
    navigate(`/${tool.id}`);
  };

  const handleCloseTool = () => {
    setActiveTool(null);
    navigate('/');
  };

  const currentSEO = activeTool ? SEO_CONTENT[activeTool.id] : null;

  const filteredTools = TOOLS.filter(tool => {
    const name = t.tools[tool.nameKey as keyof typeof t.tools];
    const matchesSearch = name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-200 dark:selection:bg-blue-900">
      <Helmet>
        <title>{currentSEO?.title || "SmartTools Hub - All-in-One Free Online Tools Website"}</title>
        <meta name="description" content={currentSEO?.description || "SmartTools Hub offers high-quality free online tools including image compressor, PDF merger, word counter, and EMI calculators. Secure browser-based tools."} />
        <meta name="keywords" content={currentSEO?.keywords || "free online tools, swiss knife tools, web tools, productivity tools, all-in-one tools"} />
        <html lang="en" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "SmartTools Hub",
            "url": "https://smarttoolshub.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://smarttoolshub.com/?search={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        {activeTool && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": currentSEO?.title,
              "description": currentSEO?.description,
              "applicationCategory": activeTool.category,
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })}
          </script>
        )}
      </Helmet>
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
        currency={currency}
        onCurrencyChange={setCurrency}
        lang={lang}
        onLangChange={setLang}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <AdPlaceholder id="top-banner" type="banner" />
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 text-center max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
        >
          {t.hero.titlePart1}<span className="text-blue-600 dark:text-blue-400">{t.hero.titlePart2}</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative max-w-2xl mx-auto"
        >
          <input
            type="text"
            placeholder={t.hero.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 text-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-full shadow-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-400"
          />
        </motion.div>
      </section>

      <QuoteSection lang={lang} />

      {/* SEO & In-Content Ad Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center prose dark:prose-invert">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{lang === 'hi' ? 'स्मार्टटूल्स हब के बारे में' : 'About SmartTools Hub'}</h2>
        <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-left space-y-4">
          {lang === 'hi' ? (
            <>
              <p>स्मार्टटूल्स हब आपके डिजिटल जीवन को सरल बनाने के लिए डिज़ाइन किया गया एक व्यापक <strong>स्विस चाकू वाला टूलबॉक्स</strong> है। हम इमेज प्रोसेसिंग, पीडीएफ मैनिपुलेशन, कोडिंग उपयोगिताओं और अत्यधिक शक्तिशाली वित्तीय कैलकुलेटर सहित 30 से अधिक उच्च-गुणवत्ता वाले मुफ्त ऑनलाइन टूल्स प्रदान करते हैं।</p>
              <p>हमारा मिशन गोपनीयता और गति प्रदान करना है। अधिकांश वेबसाइटों के विपरीत, हमारे उपकरण पूरी तरह से आपके ब्राउज़र में काम करते हैं, जिसका अर्थ है कि आपकी फ़ाइलें और डेटा कभी भी आपके डिवाइस को नहीं छोड़ते हैं। चाहे आपको <strong>इमेज कंप्रेशर ऑनलाइन फ्री</strong> में उपयोग करना हो, या जटिल <strong>EMI कैलकुलेटर इंडिया</strong> के साथ अपने ऋण की योजना बनानी हो, हम आपके लिए इसे आसान बनाते हैं।</p>
              <p>प्रमुख लाभ: </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>100% नि:शुल्क और विज्ञापन-अनुकूलित (बिना किसी सब्सक्रिप्शन के)</li>
                <li>कोई सर्वर अपलोड नहीं: पूर्ण गोपनीयता और बिजली की तेज़ गति</li>
                <li>बहु-भाषा समर्थन: अंग्रेजी और हिंदी में उपलब्ध</li>
                <li>मोबाइल और डेस्कटॉप के लिए पूरी तरह उत्तरदायी डिजाइन</li>
              </ul>
            </>
          ) : (
            <>
              <p>SmartTools Hub is a comprehensive <strong>digital swiss-knife toolbox</strong> designed to simplify your online life. We provide over 30 high-quality, free online tools including advanced image processing, PDF manipulation, coding utilities, and high-precision financial calculators like our <strong>EMI Calculator India</strong>.</p>
              <p>Our mission is to prioritize user privacy and speed. Unlike most websites that require file uploads to a server, our tools operate entirely within your browser. This means your sensitive documents and photos never leave your device. Whether you are looking for an <strong>image compressor online free</strong> to reduce file sizes or an <strong>online word counter</strong> for your essays, our hub is the one-stop destination.</p>
              <p>Key Benefits of using SmartTools:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Completely Free:</strong> No hidden costs or subscriptions for any of our conversion or calculation tools.</li>
                <li><strong>Privacy-First:</strong> Processing happens locally, ensuring 100% data security.</li>
                <li><strong>Fast & Light:</strong> Built for performance, our tools load instantly on both mobile and desktop.</li>
                <li><strong>Contextual Workflow:</strong> Reuse your images across multiple tools without re-uploading.</li>
              </ul>
            </>
          )}
        </div>
        <div className="mt-8">
          <AdPlaceholder id="homepage-content-ad" type="content" />
        </div>
        
        {/* Programmatic SEO Homepage Content */}
        {!activeTool && (
          <div className="mt-16 pt-16 border-t border-gray-100 dark:border-gray-800 prose dark:prose-invert max-w-none">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">The Ultimate All-in-One Free Online Tools Website</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Welcome to **SmartTools Hub**, your premier destination for high-quality, fast, and 100% secure **free online tools**. Our platform is designed to be the "Swiss Knife" for your digital life, offering everything from advanced image processing to complex financial calculators, all working directly within your browser. 
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 not-prose">
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2 text-blue-600">
                  <ImageIcon className="w-5 h-5" /> Professional Image Tools
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our image suite includes the most sought-after tools like a pro-grade **image compressor** (compress image to 50kb or 100kb), a background remover, and an efficient image resizer. These tools are essential for web developers, social media managers, and digital artists looking to optimize their workflow.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2 text-purple-600">
                  <Banknote className="w-5 h-5" /> Accurate Finance Calculators
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Plan your future with precision. Use our **EMI calculator India with interest** to find your loan installments, or calculate your wealth growth with our SIP, Tax, and Crypto profit calculators. We provide reliable data for your financial decisions.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-4">Why Choose SmartTools Hub?</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-600 dark:text-gray-400">
              <li>**100% Secure & Private:** We never upload your data to any server. All processing happens in your browser.</li>
              <li>**Blazing Fast:** Get instant results without waiting for file uploads or server-side rendering.</li>
              <li>**No Limits:** Use all our tools as many times as you want, completely free of charge.</li>
              <li>**Mobile Friendly:** Access our tools on the go with a fully responsive and modern design.</li>
              <li>**No Ads Overload:** We maintain a clean interface focused on your productivity and user experience.</li>
            </ul>
            
            <p className="mt-8 text-gray-600 dark:text-gray-400 italic">
              Whether you are looking to count words for an essay, generate a secure password, or convert units for a recipe, SmartTools Hub provides the reliable, professional tools you need to get the job done right.
            </p>
          </div>
        )}
      </section>

      {/* Dynamic Tool Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {usageStats.recent.length > 0 && (
          <ToolShelf 
            title={t.ui.recent} 
            tools={usageStats.recent.map(id => TOOLS.find(t => t.id === id)).filter(Boolean)} 
            onSelectTool={handleToolSelect} 
            lang={lang} 
          />
        )}

        <ToolShelf 
          title={t.ui.popular} 
          tools={Object.entries(usageStats.popular)
            .sort((a, b) => (b[1] as number) - (a[1] as number))
            .slice(0, 8)
            .map(([id]) => TOOLS.find(t => t.id === id))
            .filter(Boolean)} 
          onSelectTool={handleToolSelect} 
          lang={lang} 
        />

        <ToolShelf 
          title={t.ui.trending} 
          tools={Object.entries(usageStats.trending)
            .sort((a, b) => (b[1] as any).count - (a[1] as any).count)
            .slice(0, 5)
            .map(([id]) => TOOLS.find(t => t.id === id))
            .filter(Boolean)} 
          onSelectTool={handleToolSelect} 
          lang={lang} 
        />
      </section>

      {/* Category Filters */}
      <section id="tools" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {category === 'All' ? t.ui.all : t.categories[category as keyof typeof t.categories]}
            </button>
          ))}
        </div>
      </section>

      {/* Tools Grid Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {filteredTools.length === 0 ? (
              <div className="text-center py-20 text-gray-500">
                <p className="text-xl">{t.ui.noResults}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTools.map((tool, idx) => {
                  const Icon = tool.icon;
                  const name = t.tools[tool.nameKey as keyof typeof t.tools];
                  const showAd = (idx + 1) % 4 === 0;

                  return (
                    <React.Fragment key={tool.id}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => handleToolSelect(tool)}
                        className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                      >
                        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">{name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                          {tool.desc}
                        </p>
                        <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                          {t.ui.openTool} &rarr;
                        </div>
                      </motion.div>
                      {showAd && (
                        <div className="md:col-span-2 xl:col-span-1">
                          <AdPlaceholder id={`grid-ad-${idx}`} type="in-grid" />
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-80 space-y-6">
            <div className="sticky top-24 space-y-6">
              <AdPlaceholder id="sidebar-ad" type="sidebar" />
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
                <h4 className="font-bold mb-4">Why SmartTools?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  We offer premium tools for designers, developers, and writers. All processing happened on your device.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer lang={lang} />

      {/* Scroll to Top */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all ${
          showScrollTop ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      {/* Tool Modal */}
      <Modal
        isOpen={!!activeTool}
        onClose={handleCloseTool}
        title={activeTool ? t.tools[activeTool.nameKey as keyof typeof t.tools] : ''}
        relatedTools={activeTool ? TOOLS.filter(tool => tool.category === activeTool.category && tool.id !== activeTool.id).slice(0, 3) : []}
        onSelectTool={handleToolSelect}
        t={t}
        seo={currentSEO}
      >
        {activeTool && (
          <div className="tool-container">
            <AdPlaceholder id="modal-top-ad" className="mb-8" />
            {React.createElement(activeTool.component, { 
              currency, 
              lang, 
              sharedState, 
              updateSharedImage 
            })}
            <AdPlaceholder id="modal-bottom-ad" className="mt-8" />
          </div>
        )}
      </Modal>
    </div>
  );
}
