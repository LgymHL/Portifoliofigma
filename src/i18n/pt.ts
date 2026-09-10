export const pt = {
  skipLink: "Pular para o conteúdo",

  nav: {
    home: "Início",
    projects: "Projetos",
    stacks: "Stacks",
    about: "Sobre",
    contact: "Contato",
  },

  theme: { toggle: "Alternar tema", light: "Claro", dark: "Escuro" },
  lang: { toggle: "Mudar idioma" },

  footer: {
    nav: "Navegação",
    social: "Redes",
    copy: "© 2026 Gabriel Marinho",
  },

  pages: {
    home: "Início",
    projects: "Projetos",
    stacks: "Stacks",
    about: "Sobre",
    contact: "Contato",
    notFound: "Página não encontrada",
    notFoundSub: "Esse endereço não existe.",
    backHome: "← Voltar para o início",
  },

  hero: {
    headline: ["A ", "curiosidade", " me trouxe até aqui — o trabalho é o que veio depois."],
    sub: "Projetos, pesquisa e processo, reunidos em um só lugar.",
    meta: "SÃO LUÍS, MA · UNIVERSIDADE CEUMA · ADS",
  },

  featured: {
    label: "Projeto em destaque",
    caption_year: "2026",
    caption_client: "Globaltec Educacional",
  },

  about_home: {
    p1: "Estudo Análise e Desenvolvimento de Sistemas na Universidade Ceuma, em São Luís. Em 2026, participei do programa TechX e trabalhei dois meses em um projeto real para a Globaltec Educacional, prototipando a interface de um ERP com camada de inteligência.",
    p2: "Fora da faculdade, tenho estudado visão computacional, agentes de IA e automação — treze certificados concluídos pela Coursera entre abril e junho de 2026 — enquanto construo base em front-end e Python.",
    cta: "Sobre mim",
  },

  stacks_strip: { label: "Ver todas as stacks" },

  projects_page: {
    title: "Projetos",
    filter_all: "Todos",
    empty: "Nenhum projeto com essa tecnologia.",
    project_singular: "PROJETO",
    project_plural: "PROJETOS",
  },

  project_detail: {
    problem: "O problema",
    solution: "A solução",
    features: "Funcionalidades",
    results: "Resultados esperados",
    results_disclaimer:
      "Estes são resultados projetados na documentação do projeto, não métricas medidas em operação.",
    my_role: "Meu papel",
    learnings: "Aprendizados",
    gallery: "Galeria",
    demo: "Ver protótipo",
    back: "← Voltar para projetos",
    not_found: "Projeto não encontrado.",
    meta: {
      ano: "Ano",
      tipo: "Tipo",
      cliente: "Cliente",
      papel: "Papel",
      duracao: "Duração",
      equipe: "Equipe",
      tecnologias: "Tecnologias",
    },
  },

  stacks_page: {
    title: "Stacks",
    intro:
      "Separei o que já usei em projeto real do que ainda estou estudando. A distinção importa mais do que uma barra de porcentagem.",
    group_used: "Uso em projeto",
    group_studying: "Em estudo",
  },

  about_page: {
    title: "Sobre",
    p1: "Estudo Análise e Desenvolvimento de Sistemas na Universidade Ceuma, em São Luís. Em 2026, participei do programa TechX e trabalhei dois meses em um projeto real para a Globaltec Educacional, prototipando a interface de um ERP com camada de inteligência.",
    p2: "Fora da faculdade, tenho estudado visão computacional, agentes de IA e automação — treze certificados concluídos pela Coursera entre abril e junho de 2026 — enquanto construo base em front-end e Python.",
    p3: "Meu estudo hoje se divide em duas frentes: visão computacional e agentes de IA, onde concentrei minhas certificações, e desenvolvimento front-end e Python, que é a base que estou construindo. O projeto da Globaltec foi onde as duas se encontraram — uma interface que precisava tornar visível o que um sistema de inteligência estava calculando por trás.",
    timeline_title: "Linha do tempo",
    timeline: [
      { year: "2026", event: "Programa TechX — Universidade Ceuma" },
      { year: "2026", event: "Projeto Globaltec — estágio e prototipagem do ERP" },
      { year: "2026", event: "13 certificados Coursera em IA, visão computacional e dados" },
    ],
    photo_alt: "Gabriel Marinho — retrato",
    pitch_alt: "Gabriel apresentando o pitch do Projeto Globaltec",
  },

  contact_page: {
    title: "Contato",
    intro:
      "Se você quiser falar sobre um projeto, uma vaga ou só trocar ideia sobre o que estou estudando, me chama.",
    email_label: "E-mail",
    linkedin_label: "LinkedIn",
    instagram_label: "Instagram",
  },
};

export type Translations = typeof pt;
