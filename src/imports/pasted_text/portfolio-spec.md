PAPEL E OBJETIVO

Você é uma IA de desenvolvimento front-end. Sua tarefa é construir um site de portfólio pessoal completo, bilíngue (Português/Inglês), a partir da especificação abaixo. Todo o conteúdo real já está fornecido neste documento — não invente textos, dados, projetos, métricas ou informações sobre a pessoa.

Entregue o trabalho em 4 ETAPAS numeradas. Ao final de cada etapa, PARE e aguarde confirmação antes de seguir para a próxima.


VISÃO GERAL DO PROJETO

Pessoa: Gabriel Marinho Paiva. Nome de exibição no site: "Gabriel Marinho".
Título: Estudante de Análise e Desenvolvimento de Sistemas — Universidade Ceuma (programa TechX), São Luís, Maranhão, Brasil. Em formação em desenvolvimento front-end e Python.
Público-alvo, em ordem de prioridade: (1) recrutadores e processos seletivos; (2) clientes diretos de serviços e consultoria; (3) meio acadêmico.
Objetivo do site: servir como arquivo profissional organizado dos trabalhos realizados e construir autoridade na área. Não é um site de venda de serviços.

Headline da primeira dobra (texto exato, em português):
"A curiosidade me trouxe até aqui — o trabalho é o que veio depois."
Subtítulo: "Projetos, pesquisa e processo, reunidos em um só lugar."

Tom de voz: técnico e pessoal ao mesmo tempo. Precisão nos termos técnicos; primeira pessoa nas partes de processo, decisão e aprendizado. Frases curtas. Sem adjetivos de autopromoção ("apaixonado por tecnologia", "sempre em busca de desafios" e similares estão proibidos).

Idiomas: português (padrão) e inglês, com botão de troca no cabeçalho. VOCÊ deve gerar as traduções em inglês a partir dos textos em português fornecidos aqui. Mantenha nomes próprios, nomes de tecnologias e títulos de certificados no original.


STACK TÉCNICA E RESTRIÇÕES OBRIGATÓRIAS

- React 18 + TypeScript + Vite
- Tailwind CSS para toda a estilização
- React Router para roteamento no cliente (incluindo rota dinâmica de projeto)
- Sem backend, sem banco de dados, sem CMS, sem formulários com envio
- Dados dos projetos, habilidades e certificados em arquivos TypeScript tipados dentro de src/data/
- Internacionalização com um contexto React simples (sem biblioteca externa de i18n), lendo de src/i18n/pt.ts e src/i18n/en.ts
- Idioma persistido em localStorage; tema também
- Bibliotecas externas permitidas: apenas react-router-dom e, se necessário para animação, framer-motion. Nada além disso.
- Ícones: Simple Icons ou Devicon via CDN. Para tecnologias sem ícone no catálogo (Lovable, Claude), renderize um badge quadrado com as iniciais, usando a fonte mono e a cor de acento.
- Fontes via Google Fonts: Archivo Black, Instrument Serif (itálico), Inter, JetBrains Mono.


ARQUITETURA DE PÁGINAS E ROTAS

/                       Home
/projetos               Listagem de projetos com filtro por tecnologia
/projetos/:slug         Estudo de caso individual (ROTA DINÂMICA — obrigatória)
/stacks                 Stacks, habilidades e certificações
/sobre                  Sobre
/contato                Contato
*                       Página 404

As quatro primeiras rotas são requisito fixo. O cabeçalho é fixo no topo, com: monograma "GM" à esquerda, links de navegação ao centro, e à direita o botão de troca de idioma (PT/EN) e o botão de troca de tema.


ESPECIFICAÇÃO SEÇÃO POR SEÇÃO

--- HOME ---

1. Hero (full-bleed, altura mínima 90vh)
   - Headline em Archivo Black, tamanho fluido gigante (clamp entre 3rem e 9rem), quebrando em 3 linhas, ocupando quase toda a largura útil.
   - A palavra "curiosidade" recebe destaque em Instrument Serif itálico e na cor de acento.
   - Subtítulo em Inter, abaixo.
   - Linha de metadados em JetBrains Mono, caixa alta, corpo pequeno, espaçamento de letras aumentado: "SÃO LUÍS, MA · UNIVERSIDADE CEUMA · ADS"
   - Sem imagem de fundo. O tipo é o elemento gráfico.

2. Marquee horizontal, logo abaixo do hero
   - Faixa de texto rolando infinitamente da direita para a esquerda, em Archivo Black, contornado (text-stroke) em vez de preenchido.
   - Conteúdo repetido: "PROJETOS · VISÃO COMPUTACIONAL · AGENTES DE IA · FRONT-END · PYTHON · "
   - Pausa ao passar o mouse. Desativado com prefers-reduced-motion.

3. Projeto em destaque
   - Título de seção "Projeto em destaque" / "Featured project".
   - Um único card grande, largura total, com a captura do dashboard do ERP como imagem, legenda sobreposta no canto inferior esquerdo com fundo semitransparente, contendo título do projeto, ano e cliente.
   - Clicar leva a /projetos/projeto-globaltec.

4. Sobre resumido
   - Duas colunas: à esquerda a foto de perfil (retrato vertical, cantos levemente arredondados); à direita 2 parágrafos curtos + botão "Sobre mim" levando a /sobre.
   - Texto (português, exato):
     "Estudo Análise e Desenvolvimento de Sistemas na Universidade Ceuma, em São Luís. Em 2026, participei do programa TechX e trabalhei dois meses em um projeto real para a Globaltec Educacional, prototipando a interface de um ERP com camada de inteligência."
     "Fora da faculdade, tenho estudado visão computacional, agentes de IA e automação — treze certificados concluídos pela Coursera entre abril e junho de 2026 — enquanto construo base em front-end e Python."

5. Faixa de stacks
   - Grade horizontal com os ícones das tecnologias, discreta, levando a /stacks.

6. Rodapé (padrão em todas as páginas)
   - Wordmark "GABRIEL MARINHO" em Archivo Black, gigante, ocupando toda a largura, cortado pela borda inferior.
   - Acima: três colunas — navegação, redes, e a linha "© 2026 Gabriel Marinho".

--- PROJETOS (/projetos) ---

1. Cabeçalho da página: título "Projetos" em Archivo Black grande + contador em JetBrains Mono ("01 PROJETO").
2. Barra de filtros por tecnologia: pílulas clicáveis, uma por tecnologia presente nos dados, mais uma pílula "Todos" ativa por padrão. Filtro em estado local, sem recarregar a página. As pílulas usam as cores de acento, alternando.
3. Grade de cards de projeto (1 coluna no mobile, 2 no desktop). Cada card: imagem de capa, título, ano, cliente, e as tecnologias em JetBrains Mono.
4. Sem paginação e sem rolagem infinita. Se nenhum projeto corresponder ao filtro, exiba "Nenhum projeto com essa tecnologia."

--- PROJETO INDIVIDUAL (/projetos/:slug) ---

Ordem obrigatória dos blocos:
1. Título e subtítulo, em Archivo Black e Instrument Serif itálico.
2. Tabela de metadados, estilo ficha técnica, com filetes pontilhados entre as linhas (borda inferior dashed, cor sutil), em JetBrains Mono: Ano, Tipo, Cliente, Papel, Duração, Equipe, Tecnologias.
3. Imagem de capa, full-bleed.
4. "O problema" — parágrafos.
5. "A solução" — parágrafos + lista das funcionalidades.
6. "Resultados esperados" — ATENÇÃO: este bloco deve começar com uma linha de aviso, em corpo menor e cor sutil, com o texto exato: "Estes são resultados projetados na documentação do projeto, não métricas medidas em operação." Não altere, suavize ou remova esse aviso.
7. "Meu papel" — parágrafos.
8. "Aprendizados" — parágrafos.
9. Galeria de imagens, em grade, com lightbox simples ao clicar.
10. Link: demo do protótipo (abre em nova aba).
11. Navegação no rodapé: "← Voltar para projetos".

Se o slug não existir nos dados, redirecione para a página 404.

--- STACKS (/stacks) ---

1. Título da página + parágrafo introdutório (português, exato):
   "Separei o que já usei em projeto real do que ainda estou estudando. A distinção importa mais do que uma barra de porcentagem."
2. Grupo "Uso em projeto" — cards com ícone, nome e rótulo.
3. Grupo "Em estudo" — mesma estrutura.


--- SOBRE (/sobre) ---

1. Foto de perfil grande, em coluna, com a foto do pitch como segunda imagem.
2. Texto em primeira pessoa. Use os dois parágrafos da Home como início e adicione um terceiro, exato:
   "Meu estudo hoje se divide em duas frentes: visão computacional e agentes de IA, onde concentrei minhas certificações, e desenvolvimento front-end e Python, que é a base que estou construindo. O projeto da Globaltec foi onde as duas se encontraram — uma interface que precisava tornar visível o que um sistema de inteligência estava calculando por trás."
3. Linha do tempo simples, em JetBrains Mono, com os marcos reais:
   - 2026 · Programa TechX — Universidade Ceuma
   - 2026 · Projeto Globaltec — estágio e prototipagem do ERP
   - 2026 · 13 certificados Coursera em IA, visão computacional e dados
   Não invente marcos anteriores.

--- CONTATO (/contato) ---

1. Título grande e a linha de disponibilidade, texto exato:
   "Se você quiser falar sobre um projeto, uma vaga ou só trocar ideia sobre o que estou estudando, me chama."
2. Três links grandes, em Archivo Black, um por linha, com efeito de sublinhado animado ao passar o mouse:
   - E-mail: gabrielmarinhopaiva325@gmail.com (mailto:)
   - LinkedIn: https://www.linkedin.com/in/gabriel-p-43213a3b0/
   - Instagram: https://www.instagram.com/_gabrie.lxz_/
3. Telefone: (98) 98438-5595 — CAMPO OPCIONAL. Renderize-o comentado no código, com um comentário explicando que publicar telefone em site aberto atrai spam automatizado, para que o dono decida se ativa.


MODELO DE DADOS

// src/data/types.ts
export type Nivel = "Uso em projeto" | "Uso básico" | "Em estudo";

export interface Projeto {
  slug: string;
  titulo: string;
  subtitulo: string;
  ano: number;
  tipo: string;
  cliente: string;
  papel: string;
  duracao: string;
  equipe: string[];
  tecnologias: string[];
  destaque: boolean;
  capa: string;
  problema: string[];
  solucao: string[];
  funcionalidades: string[];
  resultadosEsperados: string[];
  meuPapel: string[];
  aprendizados: string[];
  links: { rotulo: string; url: string; tipo: "demo" | "download" }[];
  galeria: { src: string; alt: string; legenda: string }[];
}

export interface Habilidade { nome: string; grupo: "Uso em projeto" | "Em estudo"; nivel: Nivel; icone: string; }

// src/data/projects.ts
export const projetos: Projeto[] = [
  {
    slug: "projeto-globaltec",
    titulo: "Projeto Globaltec",
    subtitulo: "Camada de inteligência sobre o ERP da Globaltec Educacional",
    ano: 2026,
    tipo: "Acadêmico com cliente real",
    cliente: "Globaltec Educacional — São Luís, MA",
    papel: "Prototipagem e construção da interface do ERP no Lovable; participação no levantamento de requisitos e na documentação da solução",
    duracao: "8 semanas, concluído em junho de 2026",
    equipe: ["Alison Pimenta Serra", "Arcênio Caetano Campos da Silva", "Gabriel Marinho Paiva", "João Gabriel Gaspar dos Santos"],
    tecnologias: ["Lovable", "Claude", "VS Code"],
    destaque: true,
    capa: "/img/projetos/globaltec-dashboard.png",
    problema: [
      "A Globaltec Educacional desenvolve tecnologia para escolas — laboratórios inteligentes, bibliotecas digitais e robótica educacional. A operação roda com cerca de 50 colaboradores e entre 12 e 16 projetos simultâneos.",
      "Sem um critério formal de priorização, as tarefas se acumulavam sem ordem clara. O fluxo de compras não separava itens físicos de serviços e licenças, o que comprometia a aprovação e a rastreabilidade dos pedidos. E o assistente de IA já existente respondia perguntas, mas não executava nenhuma ação dentro do sistema."
    ],
    solucao: [
      "A proposta da equipe foi uma camada de inteligência sobre o ERP que a empresa já usava, em vez de um sistema novo. O módulo recebeu o nome de Kosmus.",
      "Construí o protótipo funcional da interface no Lovable, incluindo tela de login, dashboard operacional, painel de carga da equipe e o resumo de projeto com recomendações da IA."
    ],
    funcionalidades: [
      "Pesos e prioridades atribuídos às tarefas, com bloqueio de prazos impossíveis",
      "Análise preditiva de risco de atraso por projeto",
      "Separação do fluxo de compras entre itens físicos e serviços/licenças",
      "Web scraping para busca e comparação de fornecedores",
      "Assistente virtual para onboarding de novos colaboradores",
      "Leitura automatizada de relatórios de entrega",
      "Dashboards adaptativos por perfil de usuário"
    ],
    resultadosEsperados: [
      "A documentação do projeto levantou a hipótese de redução de até 50% no tempo gasto com processos manuais. O número é uma projeção da equipe, não uma medição em operação.",
      "Maior visibilidade da carga de trabalho por colaborador, permitindo redistribuição preventiva antes da sobrecarga.",
      "Antecipação de riscos de atraso a partir de dependências entre tarefas, compras e etapas."
    ],
    meuPapel: [
      "Participei do levantamento de requisitos e da visita técnica à empresa. Depois das reuniões com a Globaltec, eu e a Alison Pimenta Serra colocávamos as ideias no papel e desenvolvíamos as melhores no Lovable, sempre alinhando com o que saía das reuniões seguintes.",
      "Construí o protótipo da interface e contribuí na documentação da solução e no pitch final, apresentado em 19 de junho de 2026. Foi esse processo que resultou no meu estágio na Globaltec Educacional."
    ],
    aprendizados: [
      "Antes das aulas da grade e dos cursos que fiz, eu não sabia quase nada sobre IA na prática. Sabia que existia e pouco mais. Hoje minha leitura é outra: consigo usar automações com mais consciência do que está acontecendo por trás delas, e processos que pareciam complicados viraram tarefas curtas.",
      "Foi também nesse período que comecei a mexer com visão computacional. É uma área que hoje circula em quase tudo, e entender o mínimo de como ela funciona mudou o tipo de problema que eu consigo enxergar como resolvível.",
      "Nos dois meses do projeto da Globaltec, desenvolvi facilidade em construir uma interface usando IA como ferramenta. Aprendi também o limite disso. As coisas não funcionam do jeito que eu imagino que funcionam, e montar algo bem estruturado exige entender o que está sendo gerado — não apenas pedir. Saí com o básico para fazer um site razoável e com a noção clara de quanto ainda falta aprender."
    ],
    links: [
      { rotulo: "Ver protótipo", url: "https://globaltec-projectk.lovable.app", tipo: "demo" }
    ],
    galeria: [
      { src: "/img/projetos/globaltec-login.png", alt: "Tela de login do ERP Globaltec com o módulo Kosmus", legenda: "Tela de login — ERP · ByLAB" },
      { src: "/img/projetos/globaltec-dashboard.png", alt: "Dashboard operacional com indicadores e recomendações da IA", legenda: "Dashboard operacional com recomendações do Kosmus" },
      { src: "/img/projetos/globaltec-problema.png", alt: "Slide do pitch apresentando o problema", legenda: "O problema — projetos simultâneos e processos manuais" },
      { src: "/img/projetos/globaltec-proposta.png", alt: "Slide do pitch apresentando a proposta", legenda: "A proposta — camada de inteligência sobre o ERP existente" },
      { src: "/img/projetos/globaltec-visibilidade.png", alt: "Slide mostrando o painel de projetos ativos", legenda: "Visibilidade — projetos ativos e tarefas críticas" },
      { src: "/img/projetos/globaltec-automacao.png", alt: "Slide mostrando o resumo de projeto com recomendações", legenda: "Automação — resumo de projeto e recomendações da IA" },
      { src: "/img/projetos/globaltec-pitch.jpg", alt: "Gabriel apresentando o pitch do projeto", legenda: "Pitch final — 19 de junho de 2026" }
    ]
  }
];

// src/data/skills.ts
export const habilidades: Habilidade[] = [
  { nome: "Lovable",    grupo: "Uso em projeto", nivel: "Uso em projeto", icone: "iniciais:LO" },
  { nome: "Claude",     grupo: "Uso em projeto", nivel: "Uso em projeto", icone: "iniciais:CL" },
  { nome: "VS Code",    grupo: "Uso em projeto", nivel: "Uso em projeto", icone: "devicon:vscode" },
  { nome: "HTML",       grupo: "Em estudo", nivel: "Em estudo", icone: "devicon:html5" },
  { nome: "CSS",        grupo: "Em estudo", nivel: "Em estudo", icone: "devicon:css3" },
  { nome: "JavaScript", grupo: "Em estudo", nivel: "Em estudo", icone: "devicon:javascript" },
  { nome: "React",      grupo: "Em estudo", nivel: "Em estudo", icone: "devicon:react" },
  { nome: "Python",     grupo: "Em estudo", nivel: "Em estudo", icone: "devicon:python" },
  { nome: "Git",        grupo: "Em estudo", nivel: "Em estudo", icone: "devicon:git" },
  { nome: "GitHub",     grupo: "Em estudo", nivel: "Em estudo", icone: "devicon:github" }
];

SISTEMA DE DESIGN

Estilo: editorial. Linguagem visual: tipografia display gigantesca como elemento gráfico principal; seções full-bleed alternando fundo claro e escuro; itálico serifado como contraponto ao display pesado; pílulas coloridas para filtros e etiquetas; tabelas com filetes pontilhados; wordmark enorme no rodapé; marquee horizontal de texto.

PALETAS — implemente as três como conjuntos de variáveis CSS em :root, com a Paleta 1 ativa por padrão. Deixe as outras duas comentadas e rotuladas, para troca em uma linha.

Paleta 1 — "Arquivo" (padrão)
  claro:  bg #F2F2F0 · superfície #FFFFFF · tinta #0E0E0E · sutil #6B6B68 · borda #D8D8D4
  escuro: bg #0B0B0B · superfície #161616 · tinta #F2F2F0 · sutil #8A8A86 · borda #2A2A2A
  acentos: #1B4DE4 (azul) · #FF5A1F (laranja) · #0F9D58 (verde)

Paleta 2 — "Grão"
  claro:  bg #EDEAE4 · superfície #F7F5F1 · tinta #111111 · sutil #6E675E · borda #D5CFC5
  escuro: bg #14120F · superfície #1E1B17 · tinta #EDEAE4 · sutil #8F877C · borda #302B25
  acentos: #C2410C (terracota) · #1E3A8A (azul profundo) · #A16207 (ocre)

Paleta 3 — "Kosmus" (herda a identidade do protótipo do projeto)
  claro:  bg #F5F7FA · superfície #FFFFFF · tinta #0B1220 · sutil #5B6B80 · borda #DDE3EA
  escuro: bg #0B1220 · superfície #131E30 · tinta #E8EEF6 · sutil #7C8CA3 · borda #1E2B40
  acentos: #22B8F0 (ciano) · #1B4DE4 (azul) · #F59E0B (âmbar)

TIPOGRAFIA
  Display:   Archivo Black, 400. Headline, títulos de página, wordmark do rodapé e marquee. Entrelinha 0.9, letter-spacing -0.02em.
  Contraponto: Instrument Serif, itálico. Palavras destacadas, subtítulos de projeto e chamadas curtas. Nunca em blocos longos.
  Texto:     Inter, 400/500/600. Corpo 17px, entrelinha 1.65, largura máxima de leitura 68ch.
  Mono:      JetBrains Mono, 400/500. Metadados, tabelas, rótulos de nível, datas, contadores e etiquetas. Sempre em caixa alta com letter-spacing 0.08em quando usada como rótulo.

  Escala fluida (clamp, mobile → desktop):
    display-xl  clamp(3rem, 12vw, 9rem)
    display-lg  clamp(2.25rem, 7vw, 5rem)
    display-md  clamp(1.75rem, 4vw, 3rem)
    corpo-lg    clamp(1.0625rem, 1.4vw, 1.25rem)
    corpo       1.0625rem
    mono-sm     0.8125rem

ESPAÇAMENTO: escala de 4px (4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192). Seções full-bleed com padding vertical de 96px no mobile e 192px no desktop.
RAIOS: 0 para blocos estruturais e tabelas; 4px para cards de imagem; 999px para pílulas.
SOMBRAS: nenhuma. A separação vem do contraste de fundo e das bordas de 1px.
BOTÕES E PÍLULAS: fundo de acento, texto na cor de fundo, sem borda, altura 36px, JetBrains Mono em caixa alta, corpo pequeno.


RESPONSIVIDADE, ANIMAÇÃO E ACESSIBILIDADE

RESPONSIVIDADE — mobile-first. Breakpoints Tailwind padrão: sm 640 · md 768 · lg 1024 · xl 1280. Navegação vira menu hambúrguer abaixo de 768px, abrindo em tela cheia. Grades de 2 colunas colapsam para 1 abaixo de 768px. A tabela de metadados vira lista empilhada no mobile.

ANIMAÇÃO — nível marcante:
  1. TRANSIÇÃO DE TEMA — REQUISITO CENTRAL. Efeito Iris In / Circular Reveal: ao clicar no botão de tema, capture as coordenadas exatas do clique (clientX, clientY); inicie um círculo de raio 0px nesse ponto e expanda-o suavemente até cobrir 100% da viewport, revelando o novo tema. Use a View Transitions API com clip-path: circle() no pseudo-elemento ::view-transition-new(root), calculando o raio final como a maior distância entre o ponto de clique e os quatro cantos da tela. Duração entre 500ms e 700ms, easing ease-in-out. Em navegadores sem suporte, aplique um crossfade simples de 200ms.
  2. Títulos revelados por máscara ao entrar na viewport (translateY + clip), via IntersectionObserver.
  3. Marquee horizontal contínuo no hero.
  4. Parallax sutil nas imagens de capa (deslocamento máximo de 40px).
  5. Contadores animados nos números da ficha técnica.
  6. Transição de página com fade curto ao trocar de rota.

  Com prefers-reduced-motion: reduce, TODAS as animações acima são desativadas — inclusive o marquee, o parallax e os contadores. A transição de tema passa a ser instantânea. Isso não é opcional.

ACESSIBILIDADE — requisito, não sugestão:
  - Contraste mínimo AA (4.5:1 para texto, 3:1 para elementos grandes) nos dois temas e nas três paletas.
  - HTML semântico: header, nav, main, section, article, footer. Um único h1 por página.
  - Navegação completa por teclado, com foco visível de 2px na cor de acento. Link "Pular para o conteúdo" no início do documento.
  - Todas as imagens com alt descritivo (já fornecidos nos dados). Imagens decorativas com alt="".
  - Botões de tema e idioma com aria-label e aria-pressed.
  - Lightbox da galeria com foco preso dentro dele e fechamento por Esc.
  - Filtros de projeto como botões com aria-pressed, não como links.


SEO E PERFORMANCE

  - Título e meta description por rota, atualizados via useEffect no document.
  - Open Graph e Twitter Card no index.html: og:title, og:description, og:image (/img/og.jpg), og:type, og:locale (pt_BR).
  - lang do html alternando entre "pt-BR" e "en" conforme o idioma ativo.
  - Favicon gerado a partir do monograma GM.
  - Imagens com width e height explícitos, loading="lazy" fora da primeira dobra.
  - Fontes com preconnect para fonts.gstatic.com e font-display: swap.
  - Nota: por ser uma aplicação renderizada no cliente, a indexação por buscadores é limitada. Isso é aceito; não introduza SSR ou pré-renderização para contornar.


ESTRUTURA DE PASTAS ESPERADA

  public/
    img/perfil.jpg
      img/og.jpg
      img/projetos/globaltec-dashboard.png
            img/projetos/globaltec-pitch.jpg
      src/
    main.tsx
    App.tsx
    index.css
    components/  (Header, Footer, ThemeToggle, LangToggle, Marquee, ProjectCard, FilterPills, MetaTable, Gallery, Lightbox, RevealText, SkipLink)
    context/     (ThemeContext.tsx, LangContext.tsx)
    data/        (types.ts, projects.ts, skills.ts)
    hooks/       (useReveal.ts, useParallax.ts, useCounter.ts)
    i18n/        (pt.ts, en.ts)
    pages/       (Home.tsx, Projects.tsx, ProjectDetail.tsx, Stacks.tsx, About.tsx, Contact.tsx, NotFound.tsx)
  index.html
  tailwind.config.ts
  vite.config.ts


INVENTÁRIO DE ASSETS

Todos os arquivos abaixo existem e serão fornecidos pelo dono do site nos caminhos indicados. Enquanto não estiverem no projeto, renderize um bloco cinza com a proporção correta e o caminho do arquivo escrito em JetBrains Mono no centro — nunca uma imagem genérica de banco de imagens.

  /img/perfil.jpg — retrato vertical
  /img/og.jpg — 1200×630
  /img/projetos/globaltec-dashboard.png — 1920×1080
  /img/projetos/globaltec-pitch.jpg — 1024×636
  Monograma "GM" — NÃO existe arquivo. Construa em CSS puro: as letras "GM" em Archivo Black dentro de um quadrado de 36px com borda de 1px na cor da tinta.


ENTREGA EM 4 ETAPAS

ETAPA 1 — Fundação: projeto Vite configurado, Tailwind com todas as variáveis de tema e as três paletas, fontes carregadas, contextos de tema e idioma funcionando, transição Iris implementada e testada, Header, Footer, SkipLink e roteamento com as 7 rotas exibindo apenas o título de cada página. PARE e aguarde.

ETAPA 2 — Dados e componentes: todos os arquivos de src/data/ preenchidos exatamente como especificado, arquivos de i18n com português completo e inglês traduzido por você, e os componentes reutilizáveis prontos e isolados. PARE e aguarde.

ETAPA 3 — Páginas: Home, Projetos, Projeto individual, Stacks, Sobre, Contato e 404, com todo o conteúdo real. PARE e aguarde.

ETAPA 4 — Refinamento: animações, lightbox, responsividade em todos os breakpoints, auditoria de acessibilidade e SEO. Entregue ao final um relatório curto do que foi verificado.


CRITÉRIOS DE ACEITAÇÃO

  1. As 7 rotas funcionam, incluindo /projetos/projeto-globaltec pela rota dinâmica.
  2. Um slug inexistente cai na página 404 sem quebrar a aplicação.
  3. O botão de idioma troca todo o conteúdo entre PT e EN, e a escolha persiste após recarregar.
  4. O botão de tema executa a transição Iris a partir do ponto exato do clique, e a escolha persiste após recarregar.
  5. Com prefers-reduced-motion: reduce ativo, nenhuma animação ocorre — inclusive marquee, parallax e contadores.
  6. O filtro por tecnologia funciona e exibe a mensagem correta quando nada corresponde.
  7. O aviso sobre "resultados projetados, não medidos" aparece no bloco de Resultados esperados, com o texto exato.
  8. Todo o site é navegável apenas por teclado, com foco sempre visível.
  9. Nenhum texto lorem ipsum e nenhum texto inventado sobre a pessoa em lugar nenhum.
  10. Layout íntegro em 375px, 768px, 1024px e 1440px.


O QUE NÃO FAZER

  - Não invente projetos, textos biográficos, métricas, datas, empresas, prêmios ou depoimentos. Nada além do que está neste documento.
  - Não reescreva os "Aprendizados" nem os textos em primeira pessoa. Eles foram escritos pelo dono do site e devem ser reproduzidos exatamente como estão.
  - Não converta os "resultados esperados" em resultados alcançados, e não remova nem suavize o aviso do item 7 dos critérios.
  - Não adicione bibliotecas fora das permitidas (react-router-dom e, se necessário, framer-motion).
  - Não use imagens de banco de imagens, ilustrações genéricas, avatares ou fotos de terceiros. Onde faltar imagem, use o placeholder cinza com o caminho do arquivo.
  - Não use localStorage para nada além de tema e idioma.
  - Não crie formulário de contato, newsletter, blog, depoimentos, contador de visitas ou seção de serviços.
  - Não adicione barras de porcentagem, estrelas ou notas numéricas às habilidades. Apenas os rótulos definidos.
  - Não descreva Gabriel como "desenvolvedor front-end" ou "programador Python" em nenhum texto. O enquadramento correto é "em formação" / "em estudo".
  - Não use gradientes, glassmorphism, sombras difusas ou cantos muito arredondados. O estilo é editorial, não dashboard.
  - Não implemente SSR, Next.js ou pré-renderização.
  - Não gere um único arquivo gigante. Respeite a estrutura de pastas.


PENDÊNCIAS DO USUÁRIO

  1. Colocar as imagens e os PDFs nos caminhos indicados no inventário de assets.
  2. Decidir se publica o telefone (98) 98438-5595 ou mantém apenas e-mail e redes.
  3. Escolher entre as três paletas — a Paleta 1 vem ativa por padrão.
  4. Revisar as traduções em inglês geradas automaticamente antes de publicar.
  5. Domínio: o site usará a URL gerada pela plataforma. Nenhum domínio próprio configurado.