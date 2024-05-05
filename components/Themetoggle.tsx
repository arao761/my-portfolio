"use client";

import { useThemeContext } from "@/components/Themeprovider";

export default function ThemeToggle() {
    const { theme, setTheme } = useThemeContext();

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="transition duration-500 ease-in-out p-4 rounded-full flex justify-center items-center fixed bottom-4 right-4"
            style={{
                backgroundColor: theme === "light" ? "#ffffff" : "#1a202c",
                border: theme === "light" ? "2px solid #e2e8f0" : "2px solid #4a5568",
                color: theme === "light" ? "#000000" : "#ffffff",
            }}
        >
            {theme === "light" ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v1M12 20v1M5.636 5.636l.707.707M17.657 17.657l.707.707M3 12h1M20 12h1M5.636 18.364l.707-.707M17.657 6.343l.707-.707M9 12a3 3 0 11-3 3 3 3 0 013-3z"
                    />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v1M12 20v1M5.636 5.636l.707.707M17.657 17.657l.707.707M3 12h1M20 12h1M5.636 18.364l.707-.707M17.657 6.343l.707-.707M9 12a3 3 0 11-3 3 3 3 0 013-3z"
                    />
                </svg>
            )}
        </button>
    );
}
