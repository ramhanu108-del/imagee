import fs from 'fs';
import path from 'path';

// Parse tools array from script.js
const scriptContent = fs.readFileSync('script.js', 'utf-8');
const toolsMatch = scriptContent.match(/const TOOLS = \[([\s\S]*?)\];/);
const toolsCode = toolsMatch[1];
const getTools = new Function(`return [${toolsCode}];`);
const ALL_TOOLS = getTools();

// seoRoutes from script.js
const seoRoutes = {
    'pdf-compressor': '/pdf-compressor-online',
    'pdf-maker': '/pdf-maker-online',
    'sip-calculator': '/sip-calculator',
    'emi-calculator': '/emi-calculator',
    'fd-calculator': '/fd-calculator',
    'credit-card-interest': '/credit-card-payoff-calculator',
    'roi-calculator': '/ads-roi-calculator',
    'crypto-profit': '/crypto-profit-calculator',
    'image-compressor': '/image-compressor',
    'word-counter': '/word-counter',
    'qr-code-generator': '/qr-code-generator',
    'password-generator': '/password-generator',
    'age-calculator': '/age-calculator',
    'unit-converter': '/unit-converter'
};

const processedTools = ALL_TOOLS.map(t => {
    let routePath = seoRoutes[t.id] ? seoRoutes[t.id].replace('/', '') : t.id;
    return {
        path: routePath,
        id: t.id,
        title: `${t.nameKey.charAt(0).toUpperCase() + t.nameKey.slice(1)} | SmartTools Hub`,
        desc: t.desc || 'Free online tool.'
    };
});

const indexHtml = fs.readFileSync('index.html', 'utf-8');

let addedTools = [];

processedTools.forEach(tool => {
  let html = indexHtml;
  html = html.replace(/<title>.*?<\/title>/, `<title>${tool.title} | SmartTools Hub</title>`);
  html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${tool.desc}">`);
  html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="https://www.smarttoolshub.cc/${tool.path}">`);
  html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${tool.title}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${tool.desc}">`);
  html = html.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="https://www.smarttoolshub.cc/${tool.path}">`);
  
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
      <h1>${tool.title.replace(' | SmartTools Hub', '')}</h1>
      <p>${tool.desc}</p>
      <h2>What this tool does</h2>
      <p>This tool helps you achieve your tasks quickly and securely. All processing is done locally in your browser to maintain 100% privacy.</p>
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
  
  const destPath = `${tool.path}.html`;
  if (!fs.existsSync(destPath)) {
    addedTools.push(tool.id);
  }
  fs.writeFileSync(destPath, html, 'utf-8');
});

// Generate Sitemap
const sitemapUrls = processedTools.map(tool => {
    return `
  <url>
    <loc>https://www.smarttoolshub.cc/${tool.path}</loc>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>`;
}).join('');

const staticPages = [
    { path: '' },
    { path: 'privacy-policy' },
    { path: 'terms-of-service' },
    { path: 'disclaimer' },
    { path: 'contact-us' }
];

const staticSitemapUrls = staticPages.map(page => `
  <url>
    <loc>https://www.smarttoolshub.cc/${page.path}</loc>
    <priority>${page.path === '' ? '1.0' : '0.5'}</priority>
    <changefreq>${page.path === '' ? 'weekly' : 'yearly'}</changefreq>
  </url>`).join('');

const fullSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticSitemapUrls}
${sitemapUrls}
</urlset>`;

if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
}
fs.writeFileSync('public/sitemap.xml', fullSitemap, 'utf-8');

console.log('--- GENERATION REPORT ---');
console.log('Total tools found in registry: ' + ALL_TOOLS.length);
console.log('Total URLs written to sitemap: ' + (ALL_TOOLS.length + staticPages.length));
console.log('Missing tools that were added: ' + (addedTools.length > 0 ? addedTools.join(', ') : 'None'));
console.log('Static pages generated for missing tools: Yes');
console.log('Final sitemap path: public/sitemap.xml');

