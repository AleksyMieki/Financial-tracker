export default function SpendRing({ expenses, budget = 1000 }) {
  
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.min(expenses / budget, 1);

  return (
    <div className="moneySpent">
      <p className="heading">MONEY SPENT THIS MONTH</p>
      <p>{expenses} $</p>
      <svg width="178" height="178" viewBox="0 0 178 178">
        <circle cx="89" cy="89" r="70" fill="none" stroke="#3a3a3a" strokeWidth="18" />
        <circle
          cx="89" cy="89" r="70"
          fill="none" stroke="#e00505" strokeWidth="18"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - pct)}
          strokeLinecap="round"
          transform="rotate(-90 89 89)"
        />
      </svg>
    </div>
  );
}