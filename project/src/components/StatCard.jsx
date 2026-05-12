export default function StatCard({ label, value, delta, trend = 'up' }) {
    return (
        <div className="stat">
            <div className="stat-label">{label}</div>
            <div className="stat-value">{value}</div>
            {delta && (
                <div className={`stat-delta ${trend}`}>
                    {trend === 'up' ? '↑' : '↓'} {delta}
                </div>
            )}
        </div>
    );
}