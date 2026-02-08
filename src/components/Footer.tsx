'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight, Github
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/10 pointer-events-none" />
            <div className="container mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-5xl lg:text-6xl font-light mb-8 text-foreground">
                        Pronto para <span className="font-semibold text-primary">Conversar?</span>
                    </h2>
                    <p className="text-xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
                        Vamos otimizar seus processos através de dados? Entre em contato para parcerias e projetos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="https://www.linkedin.com/in/guilherme-gomes-da-silva/" target="_blank">
                            <Button
                                size="lg"
                                className="bg-primary text-primary-foreground dark:text-primary-foregroundhover:bg-white/90 font-medium tracking-wide group min-w-[200px]"
                            >
                                Entre em contato
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        <Link href="https://github.com/guilherme23x/" className="flex items-center" target="_blank">
                            <Button
                                size="lg"
                                variant="outline"
                                className="font-medium tracking-wide border-border hover:bg-secondary hover:text-secondary-foreground min-w-[200px]"
                            >

                                <Github className="mr-2 h-4 w-4" />
                                Ver GitHub

                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );

}


