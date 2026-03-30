"use client";

import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

export interface ProjectPreview {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  technologies: Technologies[];
}
interface CarouselProps {
  projects: ProjectPreview[];
}
interface Technologies {
  name: string;
  icon: React.ReactNode;
}

const ProjectsCarousel = ({ projects }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <>
      <div className="overflow-hidden w-full rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {projects.map((projeto, index) => (
            <div
              key={projeto.id}
              className="flex-[0_0_100%] min-w-0 pl-4 mt-4 md:flex-[0_0_50%] hover:-translate-y-2"
              aria-roledescription="slide"
            >
              <motion.article
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                className="h-105 p-6 flex flex-col gap-5 justify-between items-center hover:border-gray-600 transition-colors "
              >
                <div className="flex flex-col gap-3 items-center">
                  <div className="flex gap-2 justify-center items-center">
                    {projeto.technologies.map((item, index) => (
                      <div
                        key={index}
                        className="group relative overflow-hidden bg-gray-700 hover:bg-gray-500 min-w-20 h-2 px-5 py-5  flex justify-center items-center rounded-4xl"
                      >
                        <p className="absolute transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-2 flex text-white">
                          {item.icon}
                        </p>
                        <p className="absolute opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-500 text-white font-light text-[12px]">
                          {item.name}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Image
                    src={projeto.imageUrl}
                    alt={projeto.description}
                    width={500}
                    height={700}
                    className="rounded-xl"
                  />
                </div>

                <Link href={projeto.link} className="text-white self-end">
                  Ver Detalhes →
                </Link>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2  bg-white/10 hover:bg-white/20 p-3 rounded-full text-white backdrop-blur-sm transition-all"
        aria-label="Projeto anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white backdrop-blur-sm transition-all"
        aria-label="Próximo projeto"
      >
        <ChevronRight size={24} />
      </button>
    </>
  );
};

export default ProjectsCarousel;
