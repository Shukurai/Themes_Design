import Hero from '../components/Hero';

export default function HeroPage() {
    return (
        <>
            <h1 className="page-title">Hero sections</h1>
            <p className="page-subtitle">Landing page heroes — two layouts, four themes.</p>

            <Hero
                eyebrow="New"
                title="Build beautiful interfaces in minutes"
                subtitle="A design system that adapts to your brand. Pick a style, ship faster."
                primaryCta="Get started"
                secondaryCta="View docs"
            />

            <Hero
                variant="split"
                eyebrow="Pro"
                title="Ship products your users love"
                subtitle="Built-in components, dark mode, accessibility, and four design languages out of the box."
                primaryCta="Try free"
                secondaryCta="See examples"
            />
        </>
    );
}