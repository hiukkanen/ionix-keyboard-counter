const fs = require('fs');
const inName = 'index.html.template';
const outName = 'index.html';
let content = fs.readFileSync(inName, 'utf8');
const url = process.env.URL || process.env.DEPLOY_URL || 'https://ionix-keyboard-counter.netlify.app';
content = content.replace(/\$\{URL\}/g, url);
fs.writeFileSync(outName, content, 'utf8');
console.log('Wrote', outName, 'with URL', url);