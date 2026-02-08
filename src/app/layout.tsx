import "./globals.css";
import { Outfit } from 'next/font/google'
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Portfólio - Gui23x',
  description: 'Sobre mim e o como me identifico na criação de projetos e o que gosto de fazer',
  keywords: ["Gui23x", "Guilherme Silva", "Guilherme Gomes da Silva", "Front End", "Analista de Dados", "Minimalista", "Projetos Linux", "Projetos", "Desenhos"],
  openGraph: {
    title: "Gui23x - Portfólio",
    description: "Porfólio pessoal com projetos e desenhos",
    type: "website",
    url: "https://gui23x.vercel.app",
  },
  alternates: {
    canonical: "https://gui23x.vercel.app"
  }
};

const outfit = Outfit({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
      >
     
        {children}
      </body>
    </html>
  );
}
