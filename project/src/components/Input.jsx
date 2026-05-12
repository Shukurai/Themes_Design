export default function Input({ label, type = 'text', placeholder, value, onChange }) {
    return (
        <div className="field">
            <label className="field-label">{label}</label>
            <input
                type={type}
                className="field-input"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}