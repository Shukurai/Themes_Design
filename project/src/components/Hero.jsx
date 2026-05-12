export default function Hero({ eyebrow, title, subtitle, primaryCta, secondaryCta, variant = 'centered' }) {
    const content = (
        <>
            {eyebrow && <span className="hero-eyebrow">{eyebrow}</span>}
            <h1 className="hero-title">{title}</h1>
            <p className="hero-subtitle">{subtitle}</p>
            <div className="hero-actions">
                <button className="btn-primary">{primaryCta}</button>
                {secondaryCta && <button className="btn-secondary">{secondaryCta}</button>}
            </div>
        </>
    );

    if (variant === 'split') {
        return (
            <section className="hero">
                <div className="hero-split">
                    <div>{content}</div>
                    <div className="hero-visual" />
                </div>
            </section>
        );
    }

    return <section className="hero">{content}</section>;
}