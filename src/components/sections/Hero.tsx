import { RetroGrid } from "@//components/ui/retro-grid";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="flex justify-center items-center px-16 pt-4  h-screen relative w-full overflow-hidden">
      <div className="z-10 flex flex-col gap-16">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-300 md:text-7xl ">
            Olá, sou Rafael. <br />
            Desenvolvedor{" "}
            <span className="text-5xl font-extrabold tracking-tight bg-linear-to-r from-emerald-500 to-emerald-800 bg-clip-text text-transparent md:text-7xl">
              Front-End.
            </span>
          </h1>
          <br />
          <p className="text-gray-300 md:w-[50%]">
            Unindo a base sólida da Engenharia da Computação (UNLP) com as
            tecnologias mais modernas da web. Construo interfaces acessíveis,
            performáticas e focadas na melhor experiência do usuário.
            {/* Brasileiro estudando Engenharia da Computação na Argentina (UNLP). Crio aplicações web modernas com React e Next.js, focado em performance, design e código limpo. */}
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="text-white bg-emerald-800 hover:bg-emerald-700 px-8 py-3 rounded-full cursor-pointer transition-all"
          >
            Ver Projetos
          </Link>
          <Link
            href="/contact"
            className="text-white border border-gray-600 hover:border-gray400 px-8 py-3 rounded-full transition-allcursor-pointer"
          >
            Contato
          </Link>
        </div>
      </div>

      <RetroGrid className="" />
    </section>
  );
};
