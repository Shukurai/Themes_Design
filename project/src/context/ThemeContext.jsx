import { createContext, useContext, useState, useEffect } from 'react';

const THEMES = ['minimal', 'brutalist', 'neumorphic', 'retro'];
const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'minimal');
    const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light');

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        document.documentElement.dataset.mode = mode;
        localStorage.setItem('mode', mode);
    }, [mode]);

    const toggleMode = () => setMode(m => m === 'light' ? 'dark' : 'light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES, mode, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);