"use client";

import { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { useTheme } from "next-themes";

interface ThemeContextType {
    theme: string | undefined;
    setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<string | undefined>("light");
    const [mounted, setMounted] = useState(false);
    const { setTheme: setNextTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setTheme(resolvedTheme);
        setMounted(true);
    }, [resolvedTheme]);

    if (!mounted) return null;

    return (
        <ThemeContext.Provider value={{ theme, setTheme: setNextTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeProvider");
    }
    return context;
}
