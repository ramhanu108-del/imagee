import fs from 'fs';
import path from 'path';

const tools = [
  { path: 'pdf-compressor-online', id: 'pdf-compressor', title: 'PDF Compressor Online - Reduce PDF Size Under 100KB', desc: 'Securely completely client-side. Compress PDF under 100KB, 200KB or 500KB online. Best government PDF size reducer.' },
  { path: 'pdf-maker-online', id: 'pdf-maker', title: 'Professional PDF Maker Online - Create PDFs', desc: 'Create professional PDFs from text and images locally. Fast, secure, and fully browser-based.' },
  { path: 'sip-calculator', id: 'sip-calculator', title: 'SIP Calculator Online - Mutual Fund Returns Estimator', desc: 'Mutual fund SIP calculator India. Estimate your SIP returns and compounding benefits for long-term wealth.' },
  { path: 'emi-calculator', id: 'emi-calculator', title: 'EMI Calculator - Home & Personal Loan EMI', desc: 'Calculate home loan, personal loan, and car loan EMI. Get detailed monthly repayment schedule and interest breakout.' },
  { path: 'fd-calculator', id: 'fd-calculator', title: 'FD Calculator - Fixed Deposit Maturity & Returns', desc: 'Calculate Fixed Deposit maturity amounts and interest earnings online.' },
  { path: 'credit-card-payoff-calculator', id: 'credit-card-interest', title: 'Credit Card Payoff Calculator - Clear Debt Faster', desc: 'Calculate credit card interest costs and see how long it takes to pay off your balance.' },
  { path: 'ads-roi-calculator', id: 'roi-calculator', title: 'Ads ROI Calculator - Marketing Spend Analyzer', desc: 'Evaluate your advertising campaigns. Calculate Return on Investment (ROI) and Return on Ad Spend (ROAS).' },
  { path: 'crypto-profit-calculator', id: 'crypto-profit', title: 'Crypto Profit Calculator - Track Crypto Returns', desc: 'Calculate your cryptocurrency trading profits and ROI accurately.' },
  { path: 'image-compressor', id: 'image-compressor', title: 'Image Compressor - Reduce JPG, PNG Size Online', desc: 'Compress Image size without losing quality. Ideal for web optimization.' },
  { path: 'word-counter', id: 'word-counter', title: 'Word Counter & Character Count Tool', desc: 'Professional word counter tool for SEO, essays, and writing analysis.' },
  { path: 'qr-code-generator', id: 'qr-code-generator', title: 'Free QR Code Generator Online - Links & Text', desc: 'Generate secure QR codes for URLs, text, and contacts. 100% free.' },
  { path: 'password-generator', id: 'password-generator', title: 'Secure Password Generator - Create Strong Passwords', desc: 'Generate secure, random, unbreakable passwords locally in your browser.' },
  { path: 'age-calculator', id: 'age-calculator', title: 'Age Calculator - Calculate Exact Age in Years & Days', desc: 'Calculate your exact age in years, months, and days from your date of birth.' },
  { path: 'unit-converter', id: 'unit-converter', title: 'Unit Converter - Convert Length, Weight, Volume', desc: 'A quick and easy online unit conversion tool for various metrics.' }
];

const indexHtml = fs.readFileSync('index.html', 'utf-8');

tools.forEach(tool => {
  let html = indexHtml;
  html = html.replace(/<title>.*?<\/title>/, `<title>${tool.title} | SmartTools Hub</title>`);
  html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${tool.desc}">`);
  html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="https://smarttoolshub.com/${tool.path}">`);
  html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${tool.title}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${tool.desc}">`);
  html = html.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="https://smarttoolshub.com/${tool.path}">`);
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": tool.title,
    "description": tool.desc,
    "applicationCategory": "BrowserApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Is this tool free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all tools on SmartTools Hub are completely free to use."
      }
    }, {
      "@type": "Question",
      "name": "Do I need to create an account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, there is no signup required to use our utilities."
      }
    }]
  };
  
  // Inject script and content
  const content = `
    <script>window.__PRELOADED_TOOL__ = '${tool.id}';</script>
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
    <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-blue dark:prose-invert" id="seo-content-block">
      <h1>${tool.title}</h1>
      <p>${tool.desc}</p>
      <h2>What this tool does</h2>
      <p>This ${tool.title} helps you achieve your tasks quickly and securely. All processing is done locally in your browser to maintain 100% privacy.</p>
      <h2>How to use it</h2>
      <ul>
        <li>Open the tool.</li>
        <li>Follow the intuitive instructions on the screen.</li>
        <li>Get your results instantly.</li>
      </ul>
      <h2>Why it is useful</h2>
      <p>Using an online utility saves time compared to installing dedicated applications. With no server uploads, your work remains confidential.</p>
      <h2>Privacy Note</h2>
      <p>Your data never leaves your device. We use client-side processing to ensure absolute security and privacy.</p>
      <h2>FAQs</h2>
      <h3>Is this tool free?</h3>
      <p>Yes, all tools on SmartTools Hub are completely free to use.</p>
      <h3>Do I need to create an account?</h3>
      <p>No, there is no signup required to use our utilities.</p>
    </div>
  `;
  
  html = html.replace('<!-- SEO Content Section (1000+ Words) -->', content + '\n<!-- SEO Content Section (1000+ Words) -->');
  
  fs.writeFileSync(`${tool.path}.html`, html, 'utf-8');
});

console.log('Generated ' + tools.length + ' SEO pages.');
