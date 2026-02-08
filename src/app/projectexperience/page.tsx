'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import Images from "next/image";
import {
  PersonStandingIcon,
  Paperclip,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CustomCursor } from "@/components/CustomCursor";
import Header from "@/components/Header";
import { projectsData } from "@/lib/projects-data";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";

const skills = {
  atual: [
    "DSV - Logística e Transporte",
    "Terceiro - Mercedes Benz",
    "Out / 2024 - Atual",
    "Análise e organização de Documentos físicos e registro online.",
    "Power BI | Python | I.A | Figma | Excel ",
  ],
  antes: [
    "Camp SBC",
    "Terceiro - Mercedes Benz",
    "Fev / 2023 - Abr / 2024",
    "Análise e organização de Documentos físicos e auxílio em tarefas de automação.",
    "Power BI | Python | I.A | Figma | Excel ",
  ]
};

const drawings = [
  "https://i.pinimg.com/originals/45/e1/2e/45e12eb4357d5e04b045838a171b4fe7.jpg",
  "https://i.pinimg.com/736x/4d/4e/d3/4d4ed33064d75773cdc7408c10cef0f8.jpg",
  "https://i.pinimg.com/736x/1a/b1/27/1ab127b77b0383f54b53f289a11bbbd3.jpg",
  "https://i.pinimg.com/736x/49/5c/d6/495cd6c118fb64dc2e1746742a700f03.jpg",
  "https://i.pinimg.com/736x/ca/46/e7/ca46e729ba9aa982d3f857aaaab2256d.jpg",
  "https://i.pinimg.com/736x/ba/2d/93/ba2d93f17affa0978181c84d6b975f42.jpg",
  "https://i.pinimg.com/736x/f1/49/22/f14922591a1b5e63f8c592659c60214e.jpg",
  "https://i.pinimg.com/736x/7d/f4/f8/7df4f85d4afd3a5a726c0ef6cf4c7307.jpg",
  "https://i.pinimg.com/736x/c5/17/5e/c5175ef4d33a1d1a8c602ad386efebac.jpg",
  "https://i.pinimg.com/736x/9f/47/65/9f4765ee85013eb0ea88d0c071f2cc84.jpg",
  "https://i.pinimg.com/736x/f4/cb/66/f4cb66e1e15f6a4b510014fd8ddaae8e.jpg",
  "https://i.pinimg.com/736x/8e/0d/7e/8e0d7eb59de7ca609bc5ad43eaa36762.jpg",
  "https://i.pinimg.com/736x/c5/17/52/c51752fd70499b66aedc32f9da4d97f8.jpg",
  "https://i.pinimg.com/736x/27/ef/2c/27ef2c4f7dbfcd875b117a35a864ac4b.jpg",
  "https://i.pinimg.com/736x/43/99/04/4399040f7626ebdb1f38be50d1bff851.jpg",
  "https://i.pinimg.com/736x/77/ea/eb/77eaeb6db6a0c4439c809ed96321e42e.jpg"
];

const categories = [...Array.from(new Set(projectsData.map(p => p.category))), "desenhos"];

export default function ProjectExperience() {
  const [category, setCategory] = useState(categories[0]);

  const filteredProjects = projectsData.filter(project => {
    return project.category === category;
  });

  return (
    <>
      <div className="relative min-h-screen bg-background">
        <CustomCursor />

        <Header title="Meu Desenvolvimento" back="/" />

        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background" />

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-5xl lg:text-7xl font-light mb-6 text-foreground">
                Meus <span className="font-semibold text-primary">Projetos</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light">
                Vários de código aberto para contribuição
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-10 relative">
          <div className="container mx-auto px-6 relative z-10">
            {/* Styled Category Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={category === cat ? "default" : "outline"}
                  size="lg"
                  onClick={() => setCategory(cat)}
                  className="capitalize font-medium tracking-wide border-border hover:bg-secondary hover:text-secondary-foreground"
                >
                  {cat}
                </Button>
              ))}
            </div>

            {/* Python Warning Message */}
            {category === 'python' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12 p-4 rounded-lg bg-destructive/10 border border-destructive/50 max-w-3xl mx-auto"
              >
                <p className="text-destructive font-medium">
                  <span className="font-bold">Atenção:</span> Esses códigos não foram compilados para programa, somente projeto em desenvolvimento. Código e Programa vão ser realizados em breve...
                </p>
              </motion.div>
            )}

            {category === 'desenhos' ? (
              <div className="max-w-6xl mx-auto px-6 columns-1 md:columns-2 lg:columns-3 gap-8 ">
                {drawings.map((imageUrl, imageIndex) => (
                  <motion.div
                    key={imageIndex}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: imageIndex * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <div className={`h: auto rounded-2xl my-4 overflow-hidden border border-border/50 bg-card backdrop-blur-sm relative`}>
                        <Images
                          src={imageUrl}
                          alt={`Drawing ${imageIndex + 1}`}
                          width={600}
                          height={400}
                          priority={imageIndex === 0}
                          className="w-full h-auto object-cover my-4  transition-transform duration-700 group-hover:scale-105 "
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 " />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="max-w-6xl mx-auto space-y-32">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.number + project.category} project={project} index={index} />
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30" />

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl lg:text-5xl font-light mb-4 text-center text-foreground">
                Minha <span className="font-semibold text-primary">Trajetória Profissional</span>
              </h2>
              <p className="text-muted-foreground font-light text-center mb-16">
                Como me desenvolvi em empregos no qual, não há requisitos avançados
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl bg-card border border-border/50 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Paperclip className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-light text-foreground">Assistente de Desembaraço</h3>
                  </div>

                  <ul className="space-y-3">
                    {skills.atual.map((skill, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl bg-card border border-border/50 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-glow/10 flex items-center justify-center">
                      <PersonStandingIcon className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="text-2xl font-light text-foreground">Jovem Aprendiz</h3>
                  </div>

                  <ul className="space-y-3">
                    {skills.antes.map((skill, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>


        <Footer />
      </div>
    </>
  );
}
