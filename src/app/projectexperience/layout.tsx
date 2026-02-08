import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Portfólio - Projetos',
    description: 'Projetos que faço tanto de aprendizado, quanto projetos rápidos com uso de I.A e um pouco sobre mim',
    keywords: ["Gui23x", "Guilherme Silva", "Guilherme Gomes da Silva", "Front End", "Analista de Dados", "Minimalista", "Projetos Linux", "Projetos", "Desenhos"],
    openGraph: {
        title: "Gui23x - Portfólio",
        description: "Projetos feitos com I.A., desenhos que faço como Hobby e Projetos dedicados ao mundo Linux",
        type: "website",
        url: "https://gui23x.vercel.app/projectexperience",
    },
    alternates: {
        canonical: "https://gui23x.vercel.app/projectexperience"
    },
    robots:{
        index: true,
        follow: true,
        nocache: true,
        googleBot:{
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1
        }
    }
};

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
