export default function Card({ title, meta, price, tag, image }) {
    return (
        <article className="card">
            {tag && <span className="card-tag">{tag}</span>}
            <div className="card-img" style={{ backgroundImage: `url(${image})` }} />
            <h3 className="card-title">{title}</h3>
            <p className="card-meta">{meta}</p>
            <div className="card-bottom">
                <span className="card-price">${price}</span>
                <button className="btn-primary">Add to cart</button>
            </div>
        </article>
    );
}