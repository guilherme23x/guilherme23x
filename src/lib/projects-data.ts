import {
    UsersRound,
    LayoutPanelLeft,
    Wallet,
    Smartphone,
    Github,
    ExternalLink,
    MailIcon,
    CheckCheckIcon,
    AudioLines,
    Workflow,
    CloudRain,
    Gamepad,
    LucideTvMinimalPlay,
    LucideIcon,
    Palette
} from "lucide-react";

export type Project = {
    category: 'dashboard' | 'python' | 'web' | 'mobile' | 'linux' | 'desenhos';
    number: string;
    icon: LucideIcon;
    title: string;
    description: string;
    details: string;
    tech: string[];
    images: string[];
    videos?: string[];
    demoUrl?: string;
    repoUrl?: string;
};

export const projectsData: Project[] = [
    // Dashboards
    {
        category: 'dashboard',
        number: "01",
        icon: UsersRound,
        title: "Gerenciamento de RH",
        description: "Monitoramento de métricas de pessoal e estrutura organizacional.",
        details: "Visualização centralizada de métricas de recrutamento, retenção e distribuição demográfica de colaboradores.",
        tech: ["Power BI", "Figma", "Excel"],
        images: [
            "https://i.pinimg.com/originals/77/08/49/7708496dd8e65567926443f56b9053ac.jpg",
            "https://i.pinimg.com/originals/fd/1a/36/fd1a3600c84905c75a10929312bc5222.png",
        ]
    },
    {
        category: 'dashboard',
        number: "02",
        icon: LayoutPanelLeft,
        title: "Gerenciamento de Compras",
        description: "Monitoramento de produtividade e qualidade fabril.",
        details: "Gestão integrada de rendimento fabril e conformidade de processos.",
        tech: ["Power BI", "Figma", "Excel"],
        images: [
            "https://i.pinimg.com/originals/4b/37/c4/4b37c4044699920cc6c0cf88a47cfc5b.jpg",
            "https://i.pinimg.com/originals/77/78/af/7778af3b9464ddec098767efa5534acc.png"
        ],
    },
    {
        category: 'dashboard',
        number: "03",
        icon: Wallet,
        title: "Dashboard Financeiro",
        description: "Monitoramento de receita, despesas e rentabilidade transacional.",
        details: "Monitora a rentabilidade mensal e a eficiência das transações por canais de pagamento.",
        tech: ["Power BI", "Figma", "Excel"],
        images: [
            "https://i.pinimg.com/originals/35/69/5b/35695b7cae9d7c7cd5af954f2a712382.png",
        ],
    },

    // Python
    {
        category: 'python',
        number: "01",
        icon: MailIcon,
        title: "Anexos de E-mail",
        description: "Logado no Outlook Clássico com emails visualizados.",
        details: "Ele sincroniza com as contas logadas, pegar os anexos e realiza o download.",
        tech: ["Python", "Interligência Artificial", "Outlook"],
        images: [
            "https://i.pinimg.com/originals/9a/7b/4f/9a7b4f63703c8a1e1eb4a2838bb0d46c.jpg",
            "https://i.pinimg.com/originals/e0/44/62/e04462c95d69494ea9e7c412e5a0f0b5.png",
        ],
    },
    {
        category: 'python',
        number: "02",
        icon: CheckCheckIcon,
        title: "Tarefas",
        description: "Suas metas do dia registradas em um só lugar",
        details: "Gestão de organização, adicionando horários para compromissos",
        tech: ["Python", "Interligência Artificial"],
        images: [
            "https://i.pinimg.com/originals/31/17/61/311761ffda8f0eb39268eb721664d0f2.jpg",
            "https://i.pinimg.com/originals/43/e0/51/43e05153a427b63a5e33b58e07e8c65e.png"
        ],
    },
    {
        category: 'python',
        number: "03",
        icon: AudioLines,
        title: "Audio Downloader",
        description: "Músicas no formato mp3",
        details: "Com apenas um link, ele já baixa o audio no format webm e converter para mp3 automaticamente.",
        tech: ["Python", "Interligência Artificial"],
        images: [
            "https://i.pinimg.com/originals/d7/c9/06/d7c90699f3870087ceb417b1f25afe2b.jpg",
            "https://i.pinimg.com/originals/8d/1f/09/8d1f090e26e6ef8aa5507e7d2ec5a6fe.png"
        ],
    },
    // Web
    {
        category: 'web',
        number: "01",
        icon: Workflow,
        title: "Day-Work",
        description: "Preparando o ambiente de Trabalho",
        details: "Configure os seus sites mais usados, crie workspaces e personalize.",
        tech: ["JavaScript", "I.A."],
        images: ["https://i.pinimg.com/originals/14/46/05/144605845d2a67857595517f2bb20fd3.png"],
        demoUrl: "https://daywork.vercel.app/",
        repoUrl: "https://github.com/guilherme23x/Day-Work"
    },
    {
        category: 'web',
        number: "02",
        icon: CloudRain,
        title: "Calculadora para Elétrica",
        description: "Calculos avançados",
        details: "Facilitar contas, melhorar a agilidade e precisão.",
        tech: ["JavaScript", "I.A.", "Html", "CSS"],
        images: ["https://i.pinimg.com/originals/ea/7a/25/ea7a25ebf759bfc7346e57e82e31e48f.png"],
        demoUrl: "https://calculos-eletricos.vercel.app/",
        repoUrl: "https://github.com/guilherme23x/Calculos-Eletricos"
    },
    // Mobile
    {
        category: 'mobile',
        number: "01",
        icon: Smartphone,
        title: "Axis",
        description: "Foco em um único objetivo",
        details: "Faz o sua ação com um único objetivo marcando como conseguiu ou não.",
        tech: ["React Native", "I.A."],
        images: ["https://i.pinimg.com/originals/dd/51/d1/dd51d1ded706461ca96ec3c48c194a9b.jpg"],
        demoUrl: "https://github.com/guilherme23x/Axis/releases/tag/Axis",
        repoUrl: "https://github.com/guilherme23x/Axis"
    },
    {
        category: 'mobile',
        number: "02",
        icon: Smartphone,
        title: "FlashCard Minimal",
        description: "Memória Forte",
        details: "Melhora o aprendizado contínuo, principalmente em idiomas. ",
        tech: ["React Native", "I.A."],
        images: ["https://i.pinimg.com/originals/74/83/41/74834179037281daa9b50e041982fde0.png"],
        demoUrl: "https://github.com/guilherme23x/FlashCards-Minimal/releases/tag/flashcard",
        repoUrl: "https://github.com/guilherme23x/FlashCards-Minimal"
    },
    {
        category: 'mobile',
        number: "03",
        icon: Smartphone,
        title: "TimeLine",
        description: "Gerenciamento de tarefas e hábitos diários.",
        details: "ajuda você a organizar suas tarefas diárias em uma linha do tempo visual intuitiva e com suporte a notificações inteligentes.",
        tech: ["React Native", "I.A.", "Expo"],
        // videos: ["QlTWD3i_83E"],
        images: ["https://i.pinimg.com/originals/d0/93/f9/d093f9cf848012aca2c8c49414bfa0f5.jpg"],
        demoUrl: "https://github.com/guilherme23x/TimeLine/releases/tag/timeline",
        repoUrl: "https://github.com/guilherme23x/TimeLine"
    },
    // Linux
    {
        category: 'linux',
        number: "01",
        icon: Gamepad,
        title: "Volant Controller",
        description: "Celular em Controle",
        details: "Transforme seu dispositivo movel em um volante como controle Xbox 360.",
        tech: ["Python", "Linux", "I.A."],
        images: ["https://i.pinimg.com/originals/e3/4c/4c/e34c4c8a05b63d7aec837cd9a469c9d0.jpg"],
        demoUrl: "https://github.com/guilherme23x/Linux-Volant/releases/tag/main",
        repoUrl: "https://github.com/guilherme23x/Linux-Volant"
    },
    {
        category: 'linux',
        number: "02",
        icon: LucideTvMinimalPlay,
        title: "Screen Video",
        description: "Gravador de Tela",
        details: "Ferramenta simples e intuitiva, um clique um vídeo. ",
        tech: ["Python", "Linux", "I.A."],
        images: ["https://i.pinimg.com/originals/fb/0d/e1/fb0de1736fb7c580c9b2071282613519.jpg"],
        demoUrl: "https://github.com/guilherme23x/Screen-Recorder/releases/tag/recorder",
        repoUrl: "https://github.com/guilherme23x/Screen-Recorder"
    },
];
