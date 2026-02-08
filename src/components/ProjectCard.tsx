'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { Project } from "@/lib/projects-data";
import React, { useState } from "react";
import YouTubeEmbed from "./YoutubeEmbed";

interface ProjectCardProps {
    project: Project;
    index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const [api, setApi] = useState<CarouselApi>();

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
        >
            {/* Text Content */}
            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-6">
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-glow/20 border border-primary/30 flex items-center justify-center relative overflow-hidden shrink-0"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                        <project.icon className="h-8 w-8 text-primary relative z-10" />
                    </motion.div>
                    <div>
                        <span className="text-6xl font-light text-primary/20">
                            {project.number}
                        </span>
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl font-light mb-2 text-foreground">
                        {project.title}
                    </h3>
                    <p className="text-primary font-medium tracking-wide mb-4">
                        {project.description}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        {project.details}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                        <span
                            key={`${tech}-${idx}`}
                            className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-light text-foreground"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                    {project.demoUrl && (
                        <Link href={project.demoUrl} target="_blank">
                            <Button className="bg-primary text-primary-foreground">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Ver Projeto
                            </Button>
                        </Link>
                    )}
                    {project.repoUrl && (
                        <Link href={project.repoUrl} target="_blank">
                            <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                            </Button>
                        </Link>
                    )}
                </div>
            </div>

            {/* Image Content */}
            <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative group ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
            >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-glow/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {
                    (() => {
                        const media = [...(project.videos || []), ...project.images];
                        if (media.length > 1) {
                            return (
                                <Carousel className="w-full" setApi={setApi}>
                                    <CarouselContent>
                                        {media.map((mediaUrl, i) => (
                                            <CarouselItem key={i}>
                                                <div className="p-1">
                                                    <div className={`relative h-[500px] w-full rounded-2xl overflow-hidden border border-border/50 bg-card backdrop-blur-sm`}>
                                                        {project.videos?.includes(mediaUrl) ? (
                                                            <YouTubeEmbed videoId={mediaUrl} />
                                                        ) : (
                                                            <Image
                                                                src={mediaUrl}
                                                                alt={`${project.title} - Media ${i + 1}`}
                                                                fill
                                                                className="object-cover"
                                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="absolute top-1/2 -left-4 -translate-y-1/2" />
                                    <CarouselNext className="absolute top-1/2 -right-4 -translate-y-1/2" />
                                </Carousel>
                            );
                        } else if (media.length === 1) {
                            return (
                                <div className={`relative h-[500px] w-full rounded-2xl overflow-hidden border border-border/50 bg-card backdrop-blur-sm`}>
                                    {project.videos?.includes(media[0]) ? (
                                        <YouTubeEmbed videoId={media[0]} />
                                    ) : (
                                        <Image
                                            src={media[0]}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            );
                        }
                        return null;
                    })()
                }
            </motion.div>
        </motion.div>
    );
};
