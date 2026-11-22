// Capturas de tela da capa em 390 px e 1440 px, com Playwright.
// Uso: node scripts/capturas.mjs [url]   (padrão: http://127.0.0.1:4417/filogenia-viva/)
// Usa o Chromium que o Playwright já baixou. Para outro navegador, defina CHROME_PATH.
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const url = process.argv[2] || 'http://127.0.0.1:4417/filogenia-viva/';
const saida = 'shots';
mkdirSync(saida, { recursive: true });

function acharChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const raiz = join(process.env.LOCALAPPDATA || '', 'ms-playwright');
  if (!existsSync(raiz)) return undefined;
  const pastas = readdirSync(raiz).sort().reverse();
  // o "headless shell" abre mesmo quando o Windows bloqueia o chrome.exe de teste
  for (const pasta of pastas.filter((p) => /^chromium_headless_shell-\d+$/.test(p))) {
    const exe = join(raiz, pasta, 'chrome-headless-shell-win64', 'chrome-headless-shell.exe');
    if (existsSync(exe)) return exe;
  }
  for (const pasta of pastas.filter((p) => /^chromium-\d+$/.test(p))) {
    for (const sub of ['chrome-win64', 'chrome-win']) {
      const exe = join(raiz, pasta, sub, 'chrome.exe');
      if (existsSync(exe)) return exe;
    }
  }
  return undefined;
}

const navegador = await chromium.launch({ executablePath: acharChrome() });
const erros = [];

for (const largura of [390, 1440]) {
  const pagina = await navegador.newPage({ viewport: { width: largura, height: largura < 600 ? 844 : 900 }, deviceScaleFactor: largura < 600 ? 2 : 1 });
  pagina.on('console', (m) => { if (m.type() === 'error') erros.push(`${largura}: ${m.text()}`); });
  pagina.on('pageerror', (e) => erros.push(`${largura}: ${e.message}`));
  await pagina.goto(url, { waitUntil: 'networkidle' });
  await pagina.evaluate(() => document.fonts.ready);
  const foto = (nome) => pagina.screenshot({ path: join(saida, `${largura}-${nome}.png`), fullPage: true });

  await foto('1-capa');
  await pagina.click('#op-fa');
  await pagina.waitForTimeout(2600);
  await foto('2-resposta');
  await pagina.click('#abrir-arvore');
  await pagina.waitForTimeout(3200);
  await foto('3-arvore');
  await pagina.click('#no-vespidae');
  await pagina.waitForTimeout(500);
  await foto('4-ficha-caba-tatu');
  await pagina.click('#aba-outros');
  await pagina.click('#chip-ferroada');
  await pagina.waitForTimeout(1200);
  await foto('5-outros-modos');

  const estouro = await pagina.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  console.log(`${largura}px: estouro horizontal = ${estouro}px`);
  await pagina.close();
}

await navegador.close();
console.log(erros.length ? `Erros de console:\n${erros.join('\n')}` : 'Sem erros de console.');
