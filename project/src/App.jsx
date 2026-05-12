import { BrowserRouter, Routes, Route, NavLink, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import CardsPage from './pages/CardsPage';
import PricingPage from './pages/PricingPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import HeroPage from './pages/HeroPage';
import ModeToggle from './components/ModeToggle';

import './styles/reset.css';        
import './styles/tokens.css';       
import './styles/themes/minimal.css';  
import './styles/themes/brutalist.css';
import './styles/themes/neumorphic.css';
import './styles/themes/retro.css';
import './styles/components/card.css'; 
import './styles/components/pricing.css';
import './styles/components/button.css';
import './styles/components/form.css';
import './styles/components/dashboard.css';
import './styles/components/hero.css';
import './App.css';   


export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </ThemeProvider>
  );
}

function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="app-header">
        <Link to="/cards" className="logo" onClick={closeMenu}>◆ Showcase</Link>

        <button
          type="button"
          className="burger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`app-nav ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/cards" onClick={closeMenu}>Cards</NavLink>
          <NavLink to="/pricing" onClick={closeMenu}>Pricing</NavLink>
          <NavLink to="/auth" onClick={closeMenu}>Auth</NavLink>
          <NavLink to="/dashboard" onClick={closeMenu}>Dashboard</NavLink>
          <NavLink to="/hero" onClick={closeMenu}>Hero</NavLink>

          <div className="app-nav-themes">
            <ThemeSwitcher />
          </div>
        </nav>
        
        <div className="app-header-right">
          <ThemeSwitcher />
          <ModeToggle />
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/cards" replace />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/hero" element={<HeroPage />} />
        </Routes>
      </main>
    </>
  );
}