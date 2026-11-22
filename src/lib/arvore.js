// Transforma data/tree.json em posições e ramos para desenhar a árvore em SVG.
// Raiz à esquerda, folhas à direita, uma folha por linha (cabe no celular).

export function montarArvore(raiz, opt = {}) {
  const W = opt.W ?? 600;        // largura da área de desenho, em unidades do viewBox
  const linha = opt.linha ?? 96; // distância entre folhas
  const borda = opt.borda ?? 52;
  const x0 = opt.x0 ?? 46;       // x da raiz
  const xF = opt.xF ?? 318;      // x das folhas (os nomes ficam à direita)

  const nos = [];
  let nFolhas = 0, nInternos = 0, fundo = 0;

  function visita(dado, d, pai) {
    const { filhos, ...resto } = dado;
    const no = { ...resto, d, pai: pai ? pai.id : null, filhos: [], folha: !(filhos && filhos.length) };
    nos.push(no);
    fundo = Math.max(fundo, d);
    if (no.folha) {
      no.y = borda + nFolhas++ * linha;
      no.temDestaque = !!no.destaque;
    } else {
      no.num = ++nInternos;
      const fs = filhos.map((f) => visita(f, d + 1, no));
      no.filhos = fs.map((f) => f.id);
      no.y = (fs[0].y + fs[fs.length - 1].y) / 2;
      no.temDestaque = fs.some((f) => f.temDestaque);
    }
    return no;
  }
  visita(raiz, 0, null);

  const passo = (xF - x0) / fundo;
  for (const n of nos) n.x = n.folha ? xF : x0 + n.d * passo;
  const H = borda * 2 + (nFolhas - 1) * linha;
  const porId = Object.fromEntries(nos.map((n) => [n.id, n]));

  // ramo curvo: sai do nó pai na vertical e chega ao filho na horizontal, como galho
  const ramos = nos.filter((n) => n.pai).map((n) => {
    const p = porId[n.pai];
    return {
      id: n.id,
      d: n.d,
      forte: n.temDestaque,
      w: Math.max(5, 13.5 - n.d * 1.7),
      caminho: `M${p.x},${p.y} C${p.x},${n.y} ${(p.x + (n.x - p.x) * 0.45).toFixed(1)},${n.y} ${n.x},${n.y}`,
    };
  });

  // ordem visual de cima para baixo, para as setas do teclado
  const ordem = [...nos].sort((a, b) => a.y - b.y || a.x - b.x).map((n) => n.id);

  return { W, H, x0, xF, nos, ramos, ordem, raizId: raiz.id };
}
