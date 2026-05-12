export default function PricingCard({ name, price, period = 'mo', features, featured, cta = 'Choose plan' }) {
    return (
        <article className={`plan ${featured ? 'plan-featured' : ''}`}>
            {featured && <span className="plan-badge">Popular</span>}
            <div className="plan-name">{name}</div>
            <div className="plan-price">
                ${price}<span>/{period}</span>
            </div>
            <ul className="plan-list">
                {features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <button className={featured ? 'btn-primary' : 'btn-secondary'}>{cta}</button>
        </article>
    );
}