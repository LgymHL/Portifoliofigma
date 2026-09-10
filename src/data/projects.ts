import type { Projeto } from "./types";

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
    equipe: [
      "Alison Pimenta Serra",
      "Arcênio Caetano Campos da Silva",
      "Gabriel Marinho Paiva",
      "João Gabriel Gaspar dos Santos",
    ],
    tecnologias: ["Lovable", "Claude", "VS Code"],
    destaque: true,
    capa: "/img/projetos/globaltec-dashboard.png",
    problema: [
      "A Globaltec Educacional desenvolve tecnologia para escolas — laboratórios inteligentes, bibliotecas digitais e robótica educacional. A operação roda com cerca de 50 colaboradores e entre 12 e 16 projetos simultâneos.",
      "Sem um critério formal de priorização, as tarefas se acumulavam sem ordem clara. O fluxo de compras não separava itens físicos de serviços e licenças, o que comprometia a aprovação e a rastreabilidade dos pedidos. E o assistente de IA já existente respondia perguntas, mas não executava nenhuma ação dentro do sistema.",
    ],
    solucao: [
      "A proposta da equipe foi uma camada de inteligência sobre o ERP que a empresa já usava, em vez de um sistema novo. O módulo recebeu o nome de Kosmus.",
      "Construí o protótipo funcional da interface no Lovable, incluindo tela de login, dashboard operacional, painel de carga da equipe e o resumo de projeto com recomendações da IA.",
    ],
    funcionalidades: [
      "Pesos e prioridades atribuídos às tarefas, com bloqueio de prazos impossíveis",
      "Análise preditiva de risco de atraso por projeto",
      "Separação do fluxo de compras entre itens físicos e serviços/licenças",
      "Web scraping para busca e comparação de fornecedores",
      "Assistente virtual para onboarding de novos colaboradores",
      "Leitura automatizada de relatórios de entrega",
      "Dashboards adaptativos por perfil de usuário",
    ],
    resultadosEsperados: [
      "A documentação do projeto levantou a hipótese de redução de até 50% no tempo gasto com processos manuais. O número é uma projeção da equipe, não uma medição em operação.",
      "Maior visibilidade da carga de trabalho por colaborador, permitindo redistribuição preventiva antes da sobrecarga.",
      "Antecipação de riscos de atraso a partir de dependências entre tarefas, compras e etapas.",
    ],
    meuPapel: [
      "Participei do levantamento de requisitos e da visita técnica à empresa. Depois das reuniões com a Globaltec, eu e a Alison Pimenta Serra colocávamos as ideias no papel e desenvolvíamos as melhores no Lovable, sempre alinhando com o que saía das reuniões seguintes.",
      "Construí o protótipo da interface e contribuí na documentação da solução e no pitch final, apresentado em 19 de junho de 2026. Foi esse processo que resultou no meu estágio na Globaltec Educacional.",
    ],
    aprendizados: [
      "Antes das aulas da grade e dos cursos que fiz, eu não sabia quase nada sobre IA na prática. Sabia que existia e pouco mais. Hoje minha leitura é outra: consigo usar automações com mais consciência do que está acontecendo por trás delas, e processos que pareciam complicados viraram tarefas curtas.",
      "Foi também nesse período que comecei a mexer com visão computacional. É uma área que hoje circula em quase tudo, e entender o mínimo de como ela funciona mudou o tipo de problema que eu consigo enxergar como resolvível.",
      "Nos dois meses do projeto da Globaltec, desenvolvi facilidade em construir uma interface usando IA como ferramenta. Aprendi também o limite disso. As coisas não funcionam do jeito que eu imagino que funcionam, e montar algo bem estruturado exige entender o que está sendo gerado — não apenas pedir. Saí com o básico para fazer um site razoável e com a noção clara de quanto ainda falta aprender.",
    ],
    links: [
      { rotulo: "Ver protótipo", url: "https://globaltec-projectk.lovable.app", tipo: "demo" },
    ],
    galeria: [
      {
        src: "/img/projetos/globaltec-login.png",
        alt: "Tela de login do ERP Globaltec com o módulo Kosmus",
        legenda: "Tela de login — ERP · ByLAB",
      },
      {
        src: "/img/projetos/globaltec-dashboard.png",
        alt: "Dashboard operacional com indicadores e recomendações da IA",
        legenda: "Dashboard operacional com recomendações do Kosmus",
      },
      {
        src: "/img/projetos/globaltec-pitch.jpg",
        alt: "Gabriel apresentando o pitch do projeto",
        legenda: "Pitch final — 19 de junho de 2026",
      },
    ],
  },
];
