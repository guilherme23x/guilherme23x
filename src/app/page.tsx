'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Github, Code2, Palette, Rocket, Database, Coffee, Sparkles, Lightbulb, Code,
  Brain,
  DatabaseIcon,
  Layout,
  RocketIcon
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SteeringWheel3D } from "@/components/SteeringWheel3D";
import { CustomCursor } from "@/components/CustomCursor";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import image from "@/assets/Perfil sem Fundo.png";


const Hero = () => (
  <section className="relative min-h-screen p-6 flex items-center justify-center overflow-hidden bg-background">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
        <div
          className="absolute h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff0d 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff0d 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem'
          }}
        />
      </div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* LADO ESQUERDO: TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block"
          >
            <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium tracking-wider border border-border/10">
              PORTFÓLIO
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl lg:text-7xl font-light leading-tight text-foreground"
          >
            Guilherme Silva
            <span className="block font-semibold mt-2 text-primary">Data Analyst</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-muted-foreground font-light max-w-xl"
          >
            Automação | Dashboards | UX / UI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex gap-4 flex-wrap"
          >
            <Link href="/projectexperience">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground font-medium tracking-wide group"
              >
                Projetos
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link href="https://github.com/guilherme23x" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="font-medium tracking-wide border-border hover:bg-secondary hover:text-secondary-foreground"
              >
                Github
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/guilherme-gomes-da-silva/" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="font-medium tracking-wide border-border hover:bg-secondary hover:text-secondary-foreground"
              >

                Linkedin
              </Button>
            </Link>
            <ThemeToggle />

          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex gap-8 pt-8 text-foreground"
          >
            <div>
              <div className="text-3xl font-semibold">+ 15</div>
              <div className="text-sm text-muted-foreground">Repositórios</div>
            </div>
            <div className="h-12 w-px bg-border/20" />
            <div>
              <div className="text-3xl font-semibold">+ 5</div>
              <div className="text-sm text-muted-foreground">Projetos</div>
            </div>
            <div className="h-12 w-px bg-border/20" />
            <Link href="/drawing" className="cursor-pointer hover:opacity-80 transition-opacity">
              <div className="text-3xl font-semibold">+ 10</div>
              <div className="text-sm text-muted-foreground">Desenhos</div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="relative h-[600px] lg:h-[700px] flex items-center justify-center"
        >



          <div
            className="
        md:w-[85%] relative h-[85%]  lg:w-[65%] rounded-full overflow-hidden shadow-lg
    select-none
    pointer-events-none

  "
          >
            <img
              src={image.src}
              alt="Foto de Perfil"
              draggable="false"
              className="
      h-full w-full object-cover rounded-full
      select-none
      pointer-events-none
    "
            />

            <div
              className="
      absolute inset-0 rounded-full
      bg-gradient-to-b from-transparent via-transparent to-black/60
      blur-[6px] opacity-80
      [mask-image:radial-gradient(circle,white_65%,transparent_100%)]
    "
            />
          </div>




          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute top-30 left-10 bg-card/80 border border-border/20 text-card-foreground rounded-lg px-4 py-2 backdrop-blur-sm z-20 shadow-lg shadow-black/20"
          >
            <div className="text-xs text-muted-foreground font-light">Problema</div>
            <div className="text-sm font-medium">Ponto de Foco</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute top-80 right-0 bg-card/80 border border-border/20 text-card-foreground rounded-lg px-4 py-2 backdrop-blur-sm z-20 shadow-lg shadow-black/20 "
          >
            <div className="text-xs text-muted-foreground font-light ">UX | UI</div>
            <div className="text-sm font-medium">Fluxo de Trabalho</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-card/80 border border-border/20 text-card-foreground rounded-lg px-4 py-2 backdrop-blur-sm z-20 shadow-lg shadow-black/20 whitespace-nowrap"
          >
            <div className="text-xs text-muted-foreground font-light">Pontos</div>
            <div className="text-sm font-medium">Desenvolvimento</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Features = () => {
  const featuresList = [
    { icon: Code2, title: "Arquitetura Open Source", description: "Desenvolvimento de ferramentas robustas e documentadas, priorizando escalabilidade e colaboração técnica." },
    { icon: Palette, title: "UX para Dados", description: "Aplicação de princípios de design minimalista para criar dashboards que reduzem a carga cognitiva e aceleram a tomada de decisão." },
    { icon: Rocket, title: "Ambiente Linux", description: "Domínio de infraestrutura baseada em Unix (Linux Mint) para execução de scripts de automação e gerenciamento de servidores." },
    { icon: Database, title: "Automação de Processos", description: "Implementação de web scraping e scripts de integração que eliminam tarefas manuais repetitivas." },
    { icon: Sparkles, title: "Analytics Engineer", description: "Foco na transformação e modelagem de dados, garantindo a integridade da informação desde a origem até o consumo final." },
    { icon: Coffee, title: "Aprendizado Iterativo", description: "Evolução constante baseada em métricas de performance e feedback técnico direto." }
  ];

  return (
    <section className="py-32 relative bg-background ">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-light mb-6 text-foreground">
            Como me <span className="font-semibold text-primary">Desenvolvo</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Soluções completas, com qualidade e atenção aos detalhes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-card border border-border/10 rounded-2xl p-8 hover:border-border/30 transition-all duration-500 z-10"
            >
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-secondary/50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500 text-foreground">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: Brain,
      number: "01",
      title: "Compreensão e Diagnóstico",
      description: 'Identificação de dores de negócio e mapeamento de fontes de dados. O foco é entender o "porquê" antes do "como".'
    },
    {
      icon: DatabaseIcon,
      number: "02",
      title: "Arquitetura e Extração",
      description: "Desenvolvimento de pipelines de extração (Scraping/APIs) e estruturação de bancos de dados. Transformação de dados brutos em ativos utilizáveis."
    },
    {
      icon: Layout,
      number: "03",
      title: "Desenvolvimento e UI/UX",
      description: "Construção da interface ou dashboard. Aplicação de design minimalista para garantir que a ferramenta seja intuitiva e funcional."
    },
    {
      icon: RocketIcon,
      number: "04",
      title: "Entrega e Otimização",
      description: "Implementação, monitoramento de performance e ajustes baseados em feedback real para garantir a evolução da solução."
    },

  ];

  return (
    <section className="py-32 relative bg-secondary/5">

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-light mb-6 text-foreground">
            Como <span className="font-semibold text-primary">funciona?</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Um processo simples e rápido para começar a Desenvolver
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 relative mb-12">
          <div className="hidden md:block absolute top-[25%] left-0 right-0 h-px bg-border/20 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative z-10"
            >
              <div className="bg-card border border-border/10 rounded-2xl p-8 h-full hover:border-border/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-6 mx-auto relative z-10 ring-8 ring-background">
                  <step.icon className="w-8 h-8" />
                </div>

                <div className="text-6xl font-bold text-muted-foreground/10 mb-4 text-center absolute top-4 right-6 pointer-events-none">
                  {step.number}
                </div>

                <h3 className="text-2xl font-medium mb-4 text-center text-card-foreground">{step.title}</h3>
                <p className="text-muted-foreground font-light text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Link href="/projectexperience">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground font-medium tracking-wide"
            >
              Ver Projetos
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};



export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}
