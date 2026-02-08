'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        const root = document.documentElement;

        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const initialTheme = savedTheme || 'dark';
        setTheme(initialTheme);

        if (initialTheme === 'light') {
            root.classList.add('light');
            root.classList.remove('dark');
        } else {
            root.classList.remove('light');
        }

    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        const newTheme = theme === 'dark' ? 'light' : 'dark';

        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);

        if (newTheme === 'light') {
            root.classList.add('light');
            root.classList.remove('dark');
        } else {
            root.classList.remove('light');
        }
    };

    return (
        <Button
            variant="outline"
            size="lg"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="font-medium tracking-wide border-border hover:bg-secondary hover:text-secondary-foreground w-auto"
        >
            {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Alternar tema</span>
        </Button>
    );
};
