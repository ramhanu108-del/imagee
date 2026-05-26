import fs from 'fs';
import path from 'path';

console.log('=== STARTING POSTBUILD SEO FILE CHECK ===');

// Check paths
const distSitemapPath = path.resolve('dist/sitemap.xml');
const distRobotsPath = path.resolve('dist/robots.txt');

let allChecksPass = true;

// 1 & 2. Check existence
if (!fs.existsSync(distSitemapPath)) {
  console.error('[FAIL] dist/sitemap.xml does not exist.');
  allChecksPass = false;
} else {
  console.log('[PASS] dist/sitemap.xml exists.');
}

if (!fs.existsSync(distRobotsPath)) {
  console.error('[FAIL] dist/robots.txt does not exist.');
  allChecksPass = false;
} else {
  console.log('[PASS] dist/robots.txt exists.');
}

// 3. Sitemap XML declaration & first-line check
if (fs.existsSync(distSitemapPath)) {
  const sitemapContent = fs.readFileSync(distSitemapPath, 'utf8').trim();
  if (sitemapContent.startsWith('<?xml version="1.0" encoding="UTF-8"?>')) {
    console.log('[PASS] sitemap.xml starts exactly with correct XML declaration.');
  } else {
    console.error('[FAIL] sitemap.xml does not start with correct XML declaration.');
    allChecksPass = false;
  }

  // 4. Check domain-specific constraints in sitemap
  // Extract all <loc> values
  const locRegex = /<loc>([\s\S]*?)<\/loc>/g;
  let locMatch;
  let invalidUrls = [];
  let sitemapWebsites = [];

  while ((locMatch = locRegex.exec(sitemapContent)) !== null) {
    const url = locMatch[1].trim();
    sitemapWebsites.push(url);
    if (!url.startsWith('https://www.smarttoolshub.cc')) {
      invalidUrls.push(url);
    }
    if (url.includes('localhost') || url.includes('vercel.app') || url.includes('github.io') || (url.includes('smarttoolshub.cc') && !url.includes('www.smarttoolshub.cc'))) {
      if (!invalidUrls.includes(url)) {
        invalidUrls.push(url);
      }
    }
  }

  if (invalidUrls.length > 0) {
    console.error('[FAIL] Found invalid or non-custom/non-www/stuck domain URLs in sitemap:', invalidUrls);
    allChecksPass = false;
  } else if (sitemapWebsites.length === 0) {
    console.error('[FAIL] No URLs found in sitemap.');
    allChecksPass = false;
  } else {
    console.log(`[PASS] All ${sitemapWebsites.length} URLs in sitemap use the secure custom domain 'https://www.smarttoolshub.cc' and are strictly clean.`);
  }

  // Check XML root element is correct
  if (sitemapContent.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')) {
    console.log('[PASS] sitemap.xml uses correct urlset root element with expected schema attribute.');
  } else {
    console.error('[FAIL] sitemap.xml is missing correct urlset header.');
    allChecksPass = false;
  }
}

// 5. robots.txt points precisely to sitemap.xml
if (fs.existsSync(distRobotsPath)) {
  const robotsContent = fs.readFileSync(distRobotsPath, 'utf8').trim();
  const expectSitemapLine = 'Sitemap: https://www.smarttoolshub.cc/sitemap.xml';
  if (robotsContent.includes(expectSitemapLine)) {
    console.log(`[PASS] robots.txt points correctly to standard sitemap: "${expectSitemapLine}"`);
  } else {
    console.error('[FAIL] robots.txt does not point correctly to custom domain sitemap. Content matches:\n', robotsContent);
    allChecksPass = false;
  }

  // No index check on robots.txt just in case
  if (robotsContent.toLowerCase().includes('disallow: /')) {
    if (robotsContent.toLowerCase().includes('disallow: / ') || robotsContent.toLowerCase() === 'user-agent: *\ndisallow: /') {
      console.warn('[WARNING] robots.txt blocks all indexing!');
    }
  }
}

// 6. Check for any NOINDEX tags inside all distributed HTML files
function checkNoIndexRecursively(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      checkNoIndexRecursively(fullPath);
    } else if (file.endsWith('.html')) {
      const htmlContent = fs.readFileSync(fullPath, 'utf8');
      if (htmlContent.toLowerCase().includes('noindex')) {
        console.error(`[FAIL] Found 'noindex' directive inside built file: ${fullPath}`);
        allChecksPass = false;
      }
    }
  }
}

if (fs.existsSync('dist')) {
  try {
    checkNoIndexRecursively('dist');
    console.log('[PASS] Verified that no "noindex" directives are in built HTML files.');
  } catch (err) {
    console.error('[ERROR] Error while checking for noindex tags:', err);
    allChecksPass = false;
  }
} else {
  console.error('[FAIL] dist directory does not exist.');
  allChecksPass = false;
}

if (allChecksPass) {
  console.log('=== [SUCCESS] ALL SEO VERIFICATIONS PASSED SUCCESSFULLY ===');
  process.exit(0);
} else {
  console.error('=== [FAIL] SEO FILE CHECKS FAILED ===');
  process.exit(1);
}
