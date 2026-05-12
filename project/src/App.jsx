import { BrowserRouter, Routes, Route, NavLink, Link, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import CardsPage from './pages/CardsPage';
import PricingPage from './pages/PricingPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import HeroPage from './pages/HeroPage';

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
        <header className="app-header">
          <Link to="/cards" className="logo">◆ Showcase</Link>
          <nav className="app-nav">
            <NavLink to="/cards">Cards</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/auth">Auth</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/hero">Hero</NavLink>
          </nav>
          <ThemeSwitcher />
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
      </BrowserRouter>
    </ThemeProvider>
  );
}