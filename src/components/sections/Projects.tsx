import ProjectsCarousel, { ProjectPreview } from "../layout/Carousel";
import {
  IconAxios,
  IconGraphQl,
  IconJavaScript,
  IconReact,
  IconReactRouter,
  IconSupabase,
  IconTailwind,
  IconTypeScript,
  IconVite,
} from "../ui/icons";

const meusProjetos: ProjectPreview[] = [
  {
    id: 1,
    title: "HBO Min",
    description:
      "Um clone da interface do HBO Max construído com React e TypeScript.",
    imageUrl: "/print-HBO-min.jpg",
    link: "https://hbo-min-clone.vercel.app/",
    technologies: [
      { name: "React", icon: <IconReact /> },
      { name: "TypeScript", icon: <IconTypeScript /> },
      { name: "Axios", icon: <IconAxios /> },
      { name: "React Router", icon: <IconReactRouter /> },
    ],
  },
  {
    id: 2,
    title: "Netflix Clone",
    description:
      "Simulando login/cadastro da Netflix usando Supabase como BaaS",
    imageUrl: "/print-netflix-clone.jpg",
    link: "https://login-netflix-coral.vercel.app/login",
    technologies: [
      { name: "React", icon: <IconReact /> },
      { name: "JavaScript", icon: <IconJavaScript /> },
      { name: "Supabase", icon: <IconSupabase /> },
      { name: "Vite", icon: <IconVite /> },
    ],
  },
  {
    id: 3,
    title: "Finanças com React",
    description:
      "Finanças com React é uma aplicação de controle financeiro pessoal",
    imageUrl: "/print-financas-React.jpg",
    link: "https://financas-com-react.vercel.app/",
    technologies: [
      { name: "React", icon: <IconReact /> },
      { name: "JavaScript", icon: <IconJavaScript /> },
      { name: "Tailwind CSS", icon: <IconTailwind /> },
      { name: "React Router", icon: <IconReactRouter /> },
    ],
  },
  {
    id: 4,
    title: "Países com GraphQL",
    description: "Explorador de países com GraphQL",
    imageUrl: "/print-paises-GQL.jpg",
    link: "https://paises-com-graphql.vercel.app/",
    technologies: [
      { name: "React", icon: <IconReact /> },
      { name: "JavaScript", icon: <IconJavaScript /> },
      { name: "GraphQL", icon: <IconGraphQl /> },
      { name: "Tailwind CSS", icon: <IconTailwind /> },
      { name: "Vite", icon: <IconVite /> },
    ],
  },
];

export const Projects = () => {
  return (
    <section
      aria-roledescription="carousel"
      className="relative w-full h-screen mx-auto px-6 py-6 bg-radial-[at_25%_25%] from-black to-emerald-950/70 to-100%"
    >
      <ProjectsCarousel projects={meusProjetos} />
    </section>
  );
};
