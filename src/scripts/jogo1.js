// Jogo 1, Árvore viva: a pergunta, a árvore navegável e os outros modos de agrupar.
const jogo = document.querySelector('[data-jogo1]');

if (jogo) {
  const um = (s, r = jogo) => r.querySelector(s);
  const todos = (s, r = jogo) => [...r.querySelectorAll(s)];
  const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const passo1 = um('[data-passo="1"]');
  const passo2 = um('[data-passo="2"]');

  /* ---------- passo 1: a pergunta ---------- */
  const ops = todos('[data-par]');
  const veredito = um('[data-veredito]');
  const vereditoTexto = um('[data-veredito-texto]');
  const ramo = um('[data-ramo]');
  const CERTO = 'Formiga e abelha. Pela árvore do DNA, as duas dividem um ancestral mais recente entre si do que com a família da caba-tatu (Peters et al., 2017).';
  const ERRADO = 'Muita gente escolhe assim. Pela árvore do DNA, o par mais próximo é formiga e abelha (Peters et al., 2017).';

  ops.forEach((b) => {
    b.addEventListener('click', () => {
      const acertou = b.dataset.par === 'fa';
      ops.forEach((o) => {
        o.disabled = true;
        o.classList.add(o.dataset.par === 'fa' ? 'certa' : 'fora');
      });
      vereditoTexto.textContent = acertou ? CERTO : ERRADO;
      ramo.hidden = false;
      veredito.hidden = false;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        passo1.dataset.estado = acertou ? 'certo' : 'errado';
        veredito.focus({ preventScroll: true });
      }));
    });
  });

  function reiniciar() {
    delete passo1.dataset.estado;
    ops.forEach((o) => { o.disabled = false; o.classList.remove('certa', 'fora'); });
    ramo.hidden = true;
    veredito.hidden = true;
  }
  um('[data-denovo]').addEventListener('click', () => { reiniciar(); ops[0].focus(); });

  /* ---------- passo 2: a árvore ---------- */
  const nos = todos('[data-no]');
  const fichas = todos('[data-ficha]');
  const ordem = JSON.parse(jogo.dataset.ordem);
  const porId = Object.fromEntries(nos.map((n) => [n.dataset.no, n]));

  function selecionar(id, comFoco) {
    if (!porId[id]) return;
    nos.forEach((n) => n.setAttribute('aria-pressed', String(n.dataset.no === id)));
    fichas.forEach((f) => { f.hidden = f.dataset.ficha !== id; });
    if (comFoco) porId[id].focus();
  }

  nos.forEach((n) => {
    n.addEventListener('click', () => selecionar(n.dataset.no));
    n.addEventListener('keydown', (e) => {
      const i = ordem.indexOf(n.dataset.no);
      const alvo = {
        ArrowDown: ordem[i + 1],
        ArrowUp: ordem[i - 1],
        ArrowLeft: n.dataset.pai,
        ArrowRight: n.dataset.filho,
        Home: ordem[0],
        End: ordem[ordem.length - 1],
      }[e.key];
      if (alvo && porId[alvo]) { e.preventDefault(); selecionar(alvo, true); }
    });
  });

  // a árvore cresce como galho: os ramos são riscados da raiz para as pontas
  function crescer() {
    jogo.removeAttribute('data-cresce');
    requestAnimationFrame(() => requestAnimationFrame(() => jogo.setAttribute('data-cresce', '')));
  }

  /* ---------- seletor: árvore do DNA / outros modos ---------- */
  const abas = todos('[role="tab"]');
  const paineis = todos('[data-painel]');
  function mostrarAba(nome, comFoco) {
    abas.forEach((a) => {
      const ativa = a.dataset.aba === nome;
      a.setAttribute('aria-selected', String(ativa));
      a.tabIndex = ativa ? 0 : -1;
      if (ativa && comFoco) a.focus();
    });
    paineis.forEach((p) => { p.hidden = p.dataset.painel !== nome; });
    if (nome === 'dna') crescer();
  }
  abas.forEach((a, i) => {
    a.addEventListener('click', () => mostrarAba(a.dataset.aba));
    a.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const outra = abas[(i + (e.key === 'ArrowRight' ? 1 : abas.length - 1)) % abas.length];
      mostrarAba(outra.dataset.aba, true);
    });
  });

  const chips = todos('[data-modo]');
  const modos = todos('[data-modo-painel]');
  chips.forEach((c) => {
    c.addEventListener('click', () => {
      chips.forEach((x) => x.setAttribute('aria-pressed', String(x === c)));
      modos.forEach((m) => { m.hidden = m.dataset.modoPainel !== c.dataset.modo; });
    });
  });

  /* ---------- ir e voltar entre os passos ---------- */
  const rolar = () => jogo.scrollIntoView({ behavior: semMovimento ? 'auto' : 'smooth', block: 'start' });

  um('[data-abrir]').addEventListener('click', () => {
    passo1.hidden = true;
    passo2.hidden = false;
    selecionar(jogo.dataset.inicial);
    mostrarAba('dna');
    rolar();
    abas[0].focus({ preventScroll: true });
  });

  um('[data-recomecar]').addEventListener('click', () => {
    passo2.hidden = true;
    passo1.hidden = false;
    reiniciar();
    rolar();
    ops[0].focus({ preventScroll: true });
  });
}
