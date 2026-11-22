// Espécimes em vista dorsal, desenhados em SVG no código.
// Só a metade direita é descrita; a esquerda é espelhada.
// Dois traços: "riso" (cor chapada, registro fora, retícula) e "gravura" (nanquim e hachura).
// As retículas e hachuras (#ha1, #ha2, #hax, #hb) ficam em src/layouts/Base.astro.

const VB = '-114 -114 228 210';

export const SPEC = {
  caba: {
    alt: 'Caba-tatu em vista dorsal',
    cor: 'var(--tinta)', inv: true, asas: true,
    head: 'M0,-72 C9,-72 15,-68 15,-62 C15,-56 9,-53 0,-53 C-9,-53 -15,-56 -15,-62 C-15,-68 -9,-72 0,-72Z', ht: 2,
    parts: [
      { d: 'M0,-52 C10,-52 16,-45 16,-34 C16,-22 10,-14 0,-13 C-10,-14 -16,-22 -16,-34 C-16,-45 -10,-52 0,-52Z', t: 2 },
      { d: 'M0,-13 C2.2,-13 2.6,-8 3,-3 C3.6,2 6,5 6.5,8 L-6.5,8 C-6,5 -3.6,2 -3,-3 C-2.6,-8 -2.2,-13 0,-13Z', t: 2 },
      { d: 'M0,8 C10,8 17,18 17,32 C17,50 8,68 0,80 C-8,68 -17,50 -17,32 C-17,18 -10,8 0,8Z', t: 2 },
    ],
    det: 'M-9,-41 Q0,-37 9,-41 M-8,-24 Q0,-20 8,-24 M-15.5,22 Q0,28 15.5,22 M-16.6,36 Q0,42 16.6,36 M-13.6,50 Q0,56 13.6,50 M-8.6,62 Q0,67 8.6,62 M0,80 L0,89',
    ant: 'M4,-70 C7,-78 11,-83 16,-85 C24,-88 31,-96 33,-106',
    eyes: '<ellipse cx="11.6" cy="-62.5" rx="3.3" ry="6"/>',
    legs: ['M12,-46 L24,-57 L33,-73 L37,-83', 'M14,-32 L32,-24 L46,-6 L52,6', 'M12,-20 L30,-4 L40,26 L46,44'],
    wf: 'M13,-42 C30,-52 62,-62 92,-58 C104,-56 108,-48 100,-42 C82,-30 44,-28 13,-38Z',
    wfv: 'M13,-41 C40,-48 70,-52 100,-49 M40,-47 L46,-33 M62,-52 L70,-33 M80,-55 L84,-37 M30,-40 C50,-40 70,-40 90,-43',
    wh: 'M12,-34 C28,-32 52,-30 70,-22 C76,-18 72,-12 64,-12 C44,-12 24,-22 12,-30Z',
    whv: 'M12,-32 C30,-28 50,-24 66,-17 M36,-27 L40,-17',
  },
  formiga: {
    alt: 'Formiga operária em vista dorsal',
    cor: 'var(--terra)', asas: false,
    head: 'M0,-80 C12,-80 17,-72 16,-62 C15,-54 8,-49 0,-49 C-8,-49 -15,-54 -16,-62 C-17,-72 -12,-80 0,-80Z', ht: 1,
    parts: [
      { d: 'M0,-48 C8,-48 10,-42 9,-35 C8,-28 6,-24 6,-18 C6,-12 4,-8 0,-8 C-4,-8 -6,-12 -6,-18 C-6,-24 -8,-28 -9,-35 C-10,-42 -8,-48 0,-48Z', t: 1 },
      { d: 'M0,-7 C3.6,-7 4.6,-4.5 4.6,-2 C4.6,1 3,3 0,3 C-3,3 -4.6,1 -4.6,-2 C-4.6,-4.5 -3.6,-7 0,-7Z', t: 2 },
      { d: 'M0,4 C12,4 18,14 18,26 C18,40 10,50 0,52 C-10,50 -18,40 -18,26 C-18,14 -12,4 0,4Z', t: 1 },
    ],
    det: 'M-8,-36 Q0,-33 8,-36 M-6,-20 Q0,-17 6,-20 M-17,18 Q0,24 17,18 M-17.4,31 Q0,37 17.4,31 M-12,43 Q0,48 12,43 M2,-80 L8,-90 L1,-86 M-2,-80 L-8,-90 L-1,-86',
    ant: 'M6,-76 L23,-82 C29,-90 31,-98 29,-106',
    eyes: '<ellipse cx="12.4" cy="-66" rx="2" ry="3"/>',
    legs: ['M8,-42 L22,-52 L34,-68 L40,-80', 'M8,-30 L28,-28 L44,-10 L54,2', 'M6,-16 L26,-4 L40,24 L50,42'],
  },
  abelha: {
    alt: 'Abelha em vista dorsal',
    cor: 'var(--mel)', asas: true, pelos: true,
    head: 'M0,-64 C10,-64 15,-60 15,-54 C15,-48 9,-45 0,-45 C-9,-45 -15,-48 -15,-54 C-15,-60 -10,-64 0,-64Z', ht: 1,
    parts: [
      { d: 'M0,-45 C13,-45 20,-37 20,-26 C20,-15 13,-8 0,-8 C-13,-8 -20,-15 -20,-26 C-20,-37 -13,-45 0,-45Z', t: 1 },
      { d: 'M0,-8 C14,-8 23,4 23,20 C23,38 12,52 0,58 C-12,52 -23,38 -23,20 C-23,4 -14,-8 0,-8Z', t: 1 },
    ],
    det: 'M-10,-33 Q0,-29 10,-33 M-20,6 Q0,13 20,6 M-22.6,20 Q0,27 22.6,20 M-19.5,34 Q0,41 19.5,34 M-11.5,46 Q0,52 11.5,46',
    ant: 'M4,-62 C7,-69 10,-72 14,-74 C20,-76 24,-82 25,-90',
    eyes: '<ellipse cx="11.6" cy="-54.5" rx="3.4" ry="6"/>',
    legs: ['M14,-38 L26,-48 L34,-60 L37,-68', 'M18,-24 L35,-17 L45,-1 L49,9', 'M14,-12 L31,3 L39,25 L43,39'],
    wf: 'M17,-33 C32,-45 58,-53 80,-49 C90,-47 92,-39 85,-34 C68,-23 40,-23 17,-29Z',
    wfv: 'M17,-32 C40,-40 62,-43 84,-41 M40,-40 L45,-27 M60,-45 L66,-27 M30,-31 C46,-32 62,-32 78,-34',
    wh: 'M16,-25 C31,-23 49,-21 61,-14 C66,-10 62,-6 56,-6 C41,-7 26,-15 16,-21Z',
    whv: 'M16,-23 C32,-20 46,-16 57,-10',
  },
};

const mir = (s) => `${s}<g transform="scale(-1 1)">${s}</g>`;
const caminhos = (ds) => ds.map((d) => `<path d="${d}"/>`).join('');

// pelos curtos em volta do tórax da abelha
function pelos() {
  let d = '';
  const n = 46;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2, c = Math.cos(a), s = Math.sin(a);
    if (Math.abs(c) < 0.38) continue;
    const x = 20 * c, y = -26.5 + 18.5 * s, l = 2.6 + ((i * 7) % 4) * 0.7;
    d += `M${x.toFixed(1)},${y.toFixed(1)} l${(c * l).toFixed(1)},${(s * l).toFixed(1)} `;
  }
  return d;
}

let uid = 0;

/**
 * @param {'caba'|'formiga'|'abelha'} k
 * @param {'riso'|'gravura'} estilo
 * @param {{extra?: string, vb?: string, decorativo?: boolean}} opt
 */
export function bicho(k, estilo = 'riso', opt = {}) {
  const s = SPEC[k];
  const id = `sombra${++uid}`;
  const todas = [...s.parts, { d: s.head, t: s.ht }];
  const corpo = todas.map((p) => p.d).join(' ');
  const acess = opt.decorativo ? 'aria-hidden="true"' : `role="img" aria-label="${s.alt}"`;
  let o = `<svg viewBox="${opt.vb || VB}" ${acess} class="bicho bicho-${estilo}">` +
    `<clipPath id="${id}"><rect x="-130" y="-130" width="128.5" height="260"/></clipPath>`;

  if (estilo === 'gravura') {
    o += '<g fill="none" stroke="var(--tinta)" stroke-linecap="round" stroke-linejoin="round">';
    o += `<g stroke-width="1.2">${mir(caminhos(s.legs))}</g>`;
    if (s.asas) {
      o += mir(
        `<path d="${s.wh}" fill="var(--claro)" fill-opacity=".72" stroke-width=".7"/><path d="${s.whv}" stroke-width=".4"/>` +
        `<path d="${s.wf}" fill="var(--claro)" fill-opacity=".72" stroke-width=".8"/><path d="${s.wfv}" stroke-width=".45"/>`
      );
    }
    if (s.pelos) o += `<path d="${pelos()}" stroke-width=".55"/>`;
    o += todas.map((p) =>
      `<path d="${p.d}" fill="var(--claro)" stroke-width="1.1"/>` +
      (p.t ? `<path d="${p.d}" fill="url(#ha${p.t})" stroke="none"/>` : '')
    ).join('');
    o += `<g clip-path="url(#${id})"><path d="${corpo}" fill="url(#hax)" stroke="none"/></g>`;
    o += `<path d="${s.det}" stroke-width=".65"/>`;
    o += mir(`<path d="${s.ant}" stroke-width="1.4"/><g fill="var(--tinta)" stroke="none">${s.eyes}</g>`);
    o += `</g>${opt.extra || ''}`;
  } else {
    const traco = s.inv ? 'var(--claro)' : 'var(--tinta)';
    o += '<g transform="translate(2.6 2.2)" style="mix-blend-mode:multiply">';
    if (s.asas) o += mir(`<path d="${s.wh}" fill="var(--mel)" fill-opacity=".5"/><path d="${s.wf}" fill="var(--mel)" fill-opacity=".72"/>`);
    o += `<path d="${corpo}" fill="${s.cor}"/></g>`;
    if (!s.inv) o += `<g clip-path="url(#${id})" opacity=".55"><path d="${corpo}" fill="url(#hb)"/></g>`;
    o += '<g fill="none" stroke="var(--tinta)" stroke-linecap="round" stroke-linejoin="round">';
    o += `<g stroke-width="1.7">${mir(caminhos(s.legs))}</g>`;
    if (s.asas) o += mir(`<path d="${s.wf}" stroke-width=".9"/><path d="${s.wfv}" stroke-width=".5"/><path d="${s.wh}" stroke-width=".7"/>`);
    if (s.pelos) o += `<path d="${pelos()}" stroke-width=".8"/>`;
    o += todas.map((p) => `<path d="${p.d}" stroke-width="1.5"/>`).join('');
    o += `<path d="${s.det}" stroke-width=".9" stroke="${traco}"/>`;
    o += mir(`<path d="${s.ant}" stroke-width="1.8"/><g fill="var(--tinta)" stroke="none">${s.eyes}</g>`);
    o += '</g>';
  }
  return `${o}</svg>`;
}

// Prancha de anatomia da caba-tatu, com linhas de chamada numeradas (a legenda fica no HTML).
export const LEGENDA_CABA = [
  'antena',
  'asa anterior',
  'pecíolo, a cintura fina dos Apocrita',
  'ferrão: ovipositor modificado, só as fêmeas ferroam',
];

export function pranchaCaba() {
  const chamadas =
    '<g fill="none" stroke="var(--tinta)" stroke-width=".5">' +
    '<path d="M34,-104 L62,-104"/><path d="M82,-58 L98,-84"/><path d="M4,-2 L72,14"/><path d="M1.5,88 L40,94"/></g>' +
    '<g font-family="var(--f-display)" font-style="italic" font-size="11" fill="var(--terra-txt)">' +
    '<text x="65" y="-100">1</text><text x="100" y="-86">2</text><text x="75" y="19">3</text><text x="43" y="99">4</text></g>';
  return bicho('caba', 'gravura', { extra: chamadas, vb: '-118 -116 236 222' });
}
