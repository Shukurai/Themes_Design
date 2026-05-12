import Card from '../components/Card';

const PRODUCTS = [
    { id: 1, title: 'Wireless Headphones', meta: 'Studio quality · 40h battery', price: 249, tag: 'New', image: 'https://picsum.photos/seed/headphones/400/300' },
    { id: 2, title: 'Mechanical Keyboard', meta: 'Hot-swap · RGB · USB-C', price: 159, tag: '-20%', image: 'https://picsum.photos/seed/keyboard/400/300' },
    { id: 3, title: 'Smart Watch Pro', meta: 'GPS · Heart rate · 7d battery', price: 329, image: 'https://picsum.photos/seed/watch/400/300' },
    { id: 4, title: 'Studio Microphone', meta: 'USB-C · Cardioid · 48kHz', price: 179, tag: 'Hot', image: 'https://picsum.photos/seed/mic/400/300' },
    { id: 5, title: 'Ergonomic Mouse', meta: 'Wireless · 6 buttons · 4000 DPI', price: 89, image: 'https://picsum.photos/seed/mouse/400/300' },
    { id: 6, title: 'Desk Lamp', meta: 'LED · Touch · Adjustable', price: 65, image: 'https://picsum.photos/seed/lamp/400/300' }
];

export default function CardsPage() {
    return (
        <>
            <h1 className="page-title">Product cards</h1>
            <p className="page-subtitle">Same components, different design languages.</p>
            <div className="grid">
                {PRODUCTS.map(p => <Card key={p.id} {...p} />)}
            </div>
        </>
    );
}