const fs = require('fs');

const path = process.argv[2] || 'd:\\Projelerim\\vivern_digital\\wivern-frontend\\frontend\\wivern-digital.vercel.app-20260617T190818.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

console.log(`Performance Score: ${data.categories.performance.score * 100}`);

const metrics = data.audits;
console.log(`\n--- Core Web Vitals ---`);
console.log(`First Contentful Paint (FCP): ${metrics['first-contentful-paint'].displayValue}`);
console.log(`Largest Contentful Paint (LCP): ${metrics['largest-contentful-paint'].displayValue}`);
const lcpElement = metrics['largest-contentful-paint-element'];
if (lcpElement && lcpElement.details && lcpElement.details.items) {
  console.log(`LCP Element: ${JSON.stringify(lcpElement.details.items, null, 2)}`);
}
console.log(`Total Blocking Time (TBT): ${metrics['total-blocking-time'].displayValue}`);
console.log(`Cumulative Layout Shift (CLS): ${metrics['cumulative-layout-shift'].displayValue}`);
console.log(`Speed Index: ${metrics['speed-index'].displayValue}`);

console.log(`\n--- Top Opportunities (Impact) ---`);
const opportunities = Object.values(data.audits).filter(audit => audit.details && audit.details.type === 'opportunity' && audit.score !== 1 && audit.score !== null);
opportunities.sort((a, b) => b.details.overallSavingsMs - a.details.overallSavingsMs);

opportunities.slice(0, 5).forEach(opp => {
  console.log(`${opp.title}: Saves ~${opp.details.overallSavingsMs || opp.details.overallSavingsBytes} ms/bytes (Score: ${opp.score})`);
});

console.log(`\n--- Main Thread & JS execution ---`);
const mainThread = metrics['mainthread-work-breakdown'];
if (mainThread && mainThread.details && mainThread.details.items) {
  console.log(`Main Thread Work: ${mainThread.displayValue}`);
  mainThread.details.items.slice(0, 3).forEach(item => {
    console.log(`  - ${item.groupLabel}: ${Math.round(item.duration)}ms`);
  });
}

const bootup = metrics['bootup-time'];
if (bootup && bootup.details && bootup.details.items) {
  console.log(`\nBootup Time: ${bootup.displayValue}`);
  bootup.details.items.slice(0, 3).forEach(item => {
    console.log(`  - ${item.url}: ${Math.round(item.total)}ms`);
  });
}
