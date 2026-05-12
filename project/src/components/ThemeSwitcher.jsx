import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitcher() {
    const { theme, setTheme, themes } = useTheme();
    return (
        <div className="theme-tabs">
            {themes.map(t => (
                <button
                    key={t}
                    className={`theme-btn ${theme === t ? 'active' : ''}`}
                    onClick={() => setTheme(t)}
                >
                    {t}
                </button>
            ))}
        </div>
    );
}