import { useTheme } from '../context/ThemeContext';

export default function ModeToggle() {
    const { mode, toggleMode } = useTheme();
    return (
        <button
            type="button"
            className="mode-toggle"
            onClick={toggleMode}
            aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
        >
            {mode === 'light' ? '🌙' : '☀️'}
        </button>
    );
}