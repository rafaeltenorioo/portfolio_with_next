import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex justify-center items-center gap-4 px-16 pt-8 pb-48 ">
      <div>
        <h1 className="text-white font-semibold text-[18px]">
          <span className="text-2xl">Olá, eu sou Rafael.</span> Desenvolvedor
          Front-End.
        </h1>
        <br />
        <p className="text-white">
          Estudante de Engenharia da Computação na UNLP, focado em criar
          interfaces acessíveis e performáticas com React e TypeScript.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <Image
          alt="Imagem de Rafael"
          src="/minhaFoto-removebg-preview.png"
          width={500}
          height={700}
        />

        <div className=" flex gap-4">
          <button className="text-white cursor-pointer">Ver Projetos</button>
          <button className="text-white cursor-pointer">Contato</button>
        </div>
      </div>
    </section>
  );
};
