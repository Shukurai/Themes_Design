import PricingCard from '../components/PricingCard';

const PLANS = [
    {
        name: 'Starter', price: 0, cta: 'Start free',
        features: ['3 projects', 'Basic analytics', 'Community support']
    },
    {
        name: 'Pro', price: 19, featured: true, cta: 'Upgrade now',
        features: ['Unlimited projects', 'Advanced analytics', 'Priority support', 'Custom domains']
    },
    {
        name: 'Team', price: 49, cta: 'Contact sales',
        features: ['Everything in Pro', 'Team collaboration', 'SSO + audit logs', 'Dedicated manager']
    }
];

export default function PricingPage() {
    return (
        <>
            <h1 className="page-title">Pricing</h1>
            <p className="page-subtitle">Try every theme — the visual hierarchy shifts but the structure stays.</p>
            <div className="grid">
                {PLANS.map(p => <PricingCard key={p.name} {...p} />)}
            </div>
        </>
    );
}