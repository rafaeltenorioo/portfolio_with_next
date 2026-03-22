import { GrGithub, GrInstagram, GrLinkedin } from "react-icons/gr";
import { LuAlignJustify } from "react-icons/lu";
import { RiCloseLargeLine } from "react-icons/ri";

export const IconGithub = () => {
  return <GrGithub size={30} className="text-white" />;
};

export const IconLinkedIn = () => {
  return <GrLinkedin size={30} className="text-white" />;
};

export const IconInstagram = () => {
  return <GrInstagram size={30} className="text-white" />;
};

export const IconHamburguer = () => {
  return <LuAlignJustify className="text-white" size={28} />;
};

export const IconClose = () => {
  return <RiCloseLargeLine size={20} className="text-white" />;
};
