"use client";
import { GoArrowUp } from "react-icons/go";

export const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={handleScrollToTop}
      aria-label="Voltar ao topo da página"
      className="cursor-pointer"
    >
      <GoArrowUp size={25} className="text-white" />
    </button>
  );
};
