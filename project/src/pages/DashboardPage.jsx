import StatCard from '../components/StatCard';

const BARS = [40, 65, 50, 80, 60, 90, 75, 95, 70, 85, 60, 100];
const ACTIVITY = [
    { text: 'New order #4521 placed', time: '2m' },
    { text: 'Payment received from Acme Co.', time: '14m' },
    { text: 'User Sarah K. signed up', time: '1h' },
    { text: 'Project "Q4 Launch" updated', time: '3h' },
    { text: 'Invoice #2289 sent', time: '5h' }
];

export default function DashboardPage() {
    return (
        <>
            <h1 className="page-title">Dashboard</h1>
            <p className="page-subtitle">Stats, chart, and activity feed.</p>

            <div className="dashboard">
                <div className="stats-grid">
                    <StatCard label="Revenue" value="$48.2k" delta="12.4%" trend="up" />
                    <StatCard label="Users" value="1,284" delta="8.1%" trend="up" />
                    <StatCard label="Orders" value="376" delta="3.2%" trend="down" />
                    <StatCard label="Conversion" value="3.8%" delta="0.5%" trend="up" />
                </div>

                <div className="dashboard-row">
                    <div className="panel">
                        <div className="panel-title">Revenue last 12 months</div>
                        <div className="chart">
                            {BARS.map((h, i) => (
                                <div key={i} className="chart-bar" style={{ height: `${h}%` }} />
                            ))}
                        </div>
                    </div>
                    <div className="panel">
                        <div className="panel-title">Recent activity</div>
                        <div className="activity">
                            {ACTIVITY.map((a, i) => (
                                <div key={i} className="activity-item">
                                    <span className="activity-dot" />
                                    <span>{a.text}</span>
                                    <span className="activity-time">{a.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}