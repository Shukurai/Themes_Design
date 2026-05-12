import { useState } from 'react';
import Input from '../components/Input';

export default function AuthPage() {
    const [mode, setMode] = useState('login');
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const update = (key) => (e) => setForm(prev => ({ ...prev, [key]: e.target.value }));
    const toggleMode = () => setMode(m => m === 'login' ? 'signup' : 'login');

    return (
        <>
            <h1 className="page-title">Auth forms</h1>
            <p className="page-subtitle">Login & signup — switch themes to see how inputs transform.</p>

            <div className="form-card">
                <h2 className="form-title">{mode === 'login' ? 'Welcome back' : 'Create account'}</h2>
                <p className="form-subtitle">
                    {mode === 'login' ? 'Sign in to continue' : 'Start your free trial'}
                </p>

                <div className="form-tabs">
                    <button
                        type="button"
                        className={`form-tab ${mode === 'login' ? 'active' : ''}`}
                        onClick={() => setMode('login')}
                    >Login</button>
                    <button
                        type="button"
                        className={`form-tab ${mode === 'signup' ? 'active' : ''}`}
                        onClick={() => setMode('signup')}
                    >Sign up</button>
                </div>

                {mode === 'signup' && (
                    <Input label="Name" placeholder="Jane Doe" value={form.name} onChange={update('name')} />
                )}
                <Input label="Email" type="email" placeholder="you@example.com" value={form.email} onChange={update('email')} />
                <Input label="Password" type="password" placeholder="••••••••" value={form.password} onChange={update('password')} />

                <button type="button" className="btn-primary" style={{ width: '100%', marginTop: 8 }}>
                    {mode === 'login' ? 'Sign in' : 'Create account'}
                </button>

                <div className="form-divider">or continue with</div>
                <div className="social-buttons">
                    <button type="button" className="btn-secondary">Continue with Google</button>
                    <button type="button" className="btn-secondary">Continue with GitHub</button>
                </div>

                <p className="form-footer">
                    {mode === 'login' ? "Don't have an account? " : 'Already a member? '}
                    <button type="button" className="form-link" onClick={toggleMode}>
                        {mode === 'login' ? 'Sign up' : 'Sign in'}
                    </button>
                </p>
            </div>
        </>
    );
}