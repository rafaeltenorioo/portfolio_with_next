"use client";

import Link from "next/link";
import { useState } from "react";
import { IconClose, IconHamburguer } from "../ui/icons";

interface NavLinkProps {
  name: string;
  path: string;
}

const navLinks: NavLinkProps[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Sobre",
    path: "/about",
  },
  {
    name: "Projetos",
    path: "/projects",
  },
  {
    name: "Contato",
    path: "/contact",
  },
];
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    console.log(
      isOpen
        ? "Menu hamburguer esta aberto"
        : "Agora o menu hamburguer esta fechado",
    );
  };
  return (
    <header className="h-15 w-full py-4 px-4 flex items-center justify-items-start bg-gray-950 md:h-20 md:justify-center relative">
      <nav aria-label="Navegação principal desktop" className="hidden md:block">
        <ul className="flex gap-8">
          {navLinks.map((item, index) => (
            <li key={index} className="text-blue-50">
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menu e botão hambúrguer para mobile */}

      <button
        className="md:hidden z-50 cursor-pointer"
        onClick={toggleOpen}
        aria-label={
          isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
        }
        aria-expanded={isOpen}
      >
        <IconHamburguer />
      </button>

      {/* Inicialmente coloquei uma rendering conditional {isOpen && (...)}, entretanto, esse operador faz com que o componente seja destruido quando false e recriado quando true. Ao clicar para abrir o React injetaria o menu no DOM já na posição final e ñ daria tempo para o CSS animar porque ñ houve um estado inicial. Solução: remover essa condicional e deixar o menu lá escondido*/}
      <div
        className={`fixed top-0 left-0 p-4 z-60  w-3/4 max-w-sm h-full bg-mauve-950 md:hidden 
            transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col gap-10">
          <button onClick={toggleOpen} className="cursor-pointer self-start">
            <IconClose />
          </button>
          <nav>
            <ul className="flex flex-col gap-4 items-start py-3 ">
              {navLinks.map((item) => (
                <li
                  key={item.name}
                  className="text-lg font-medium text-mist-300 hover:text-mist-500"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
