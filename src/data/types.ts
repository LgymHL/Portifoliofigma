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

export interface Habilidade {
  nome: string;
  grupo: "Uso em projeto" | "Em estudo";
  nivel: Nivel;
  icone: string;
}
