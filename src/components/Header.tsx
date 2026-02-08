'use client';
import Link from "next/link";
import {
    ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
    title: string
    back: string
}

export default function Header({ title, back }: HeaderProps) {

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">

            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href={back}>
                        <Button variant="ghost" className="font-light hover:bg-white/10">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Voltar
                        </Button>
                    </Link>
                    <h2 className="text-xl text-center font-light text-foreground ">{title}</h2>
                </div>
            </div>
        </header>


    );
}
