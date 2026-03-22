import type { Metadata } from "next";
import "./globals.css";
import { inter } from "../components/ui/fonts";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

type Props = {
  children: React.ReactNode;
};
export const metadata: Metadata = {
  title: "Rafael Tenório | Frontend Developer",
  description: "Portfólio de um estudante de Engenharia da Computação da UNLP",
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-black`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
