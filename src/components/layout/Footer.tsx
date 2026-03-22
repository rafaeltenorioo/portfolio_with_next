import { IconGithub, IconInstagram, IconLinkedIn } from "../ui/icons";
import { ScrollToTopButton } from "../ui/ScrollToTopButton";

interface LinkFooterProps {
  icone: React.ReactNode;
  link: string;
  ariaLabel: string;
}
const listLink: LinkFooterProps[] = [
  {
    icone: <IconGithub />,
    link: "https://github.com/rafaeltenorioo",
    ariaLabel: "Acessar meu perfil no GitHub",
  },
  {
    icone: <IconLinkedIn />,
    link: "https://www.linkedin.com/in/rafael-ten%C3%B3rio-63792927b/",
    ariaLabel: "Acessar meu perfil no LinkedIn",
  },
  {
    icone: <IconInstagram />,
    link: "#",
    ariaLabel: "Acessar meu perfil no Instagram",
  },
];

export const Footer = () => {
  return (
    <footer className="w-full h-25 px-10 py-5 flex justify-around items-center bg-gray-950">
      <div className="flex gap-10">
        {listLink.map((item, i) => (
          <a
            href={item.link}
            key={i}
            aria-label={item.ariaLabel}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Se você não usar isso (rel="noopener noreferrer"), a nova aba do LinkedIn ganha acesso a uma variável JavaScript chamada window.opener. Se, por acaso, um site malicioso acessar essa variável, ele pode redirecionar a aba original (onde estava o seu portfólio) para uma página falsa de login, roubando dados do usuário. O noopener corta esse cordão umbilical entre as duas abas. */}
            {item.icone}
          </a>
        ))}
      </div>
      <ScrollToTopButton />
    </footer>
  );
};
