export default function Sidebar({ isOpen, onClose, transactions }) {
  const categoryTotals = transactions.reduce((acc, t) => {
    const key = t.amount > 0 ? "Income" : t.cat;
    acc[key] = (acc[key] || 0) + Math.abs(t.amount);
    return acc;
  }, {});

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <div className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <button className="sidebar-close" onClick={onClose}>×</button>
        <h2>Summary</h2>
        {Object.entries(categoryTotals).map(([cat, total]) => (
          <div className="sidebar-row" key={cat}>
            <span>{cat}</span>
            <span>{total.toFixed(2)} $</span>
          </div>
        ))}
      </div>
    </>
  );
}