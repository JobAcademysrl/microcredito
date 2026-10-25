// Copies src/ to docs/ (the folder GitHub Pages serves) and fills in the public URL.
// Usage: node build.mjs https://<user>.github.io/<repo>
import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync, copyFileSync } from 'node:fs';
import path from 'node:path';

const url = (process.argv[2] || readFileSync('site-url.txt', 'utf8')).trim().replace(/\/+$/, '');
if (!/^https:\/\//.test(url)) { console.error('Usage: node build.mjs https://example.github.io/repo'); process.exit(1); }
writeFileSync('site-url.txt', url + '\n');
const date = new Date().toISOString().slice(0, 10);
rmSync('docs', { recursive: true, force: true });
mkdirSync('docs');
for (const f of readdirSync('src')) {
  const src = path.join('src', f), dst = path.join('docs', f);
  if (/\.(html|txt|xml|css|js|svg|json)$/.test(f)) writeFileSync(dst, readFileSync(src, 'utf8').replaceAll('{{SITE_URL}}', url).replaceAll('{{DATE}}', date));
  else copyFileSync(src, dst);
}
writeFileSync(path.join('docs', '.nojekyll'), '');
writeFileSync(path.join('docs', '404.html'), readFileSync(path.join('docs', 'grazie.html'), 'utf8')
  .replace('Richiesta inviata |', 'Pagina non trovata |').replace('<p class="kicker" style="color:#cfe0ff">Richiesta inviata</p>', '<p class="kicker" style="color:#cfe0ff">Errore 404</p>')
  .replace('Grazie, abbiamo ricevuto i tuoi documenti', 'Questa pagina non esiste')
  .replace(/<p class="lead">[\s\S]*?<\/p>/, '<p class="lead">Torna alla home per leggere come funziona il microcredito e inviare la richiesta.</p>'));
console.log(`docs/ built for ${url}`);
