import "./FinancialTracker.css";
import "./index.css";
import { useState } from "react";
import { useEffect } from "react";
export default function FinancialTracker() {
  
const [adding, setAdding] = useState(false);
const [draftLabel, setDraftLabel] = useState("");
const [draftAmount, setDraftAmount] = useState("");
const [isIncome, setIsIncome] = useState(false);
const [transactions, setTransactions] = useState([]);

const income = transactions
  .filter((t) => t.amount > 0)
  .reduce((sum, t) => sum + t.amount, 0);

const expenses = transactions
  .filter((t) => t.amount < 0)
  .reduce((sum, t) => sum + Math.abs(t.amount), 0);

const balance = income - expenses;

function handleAdd() {
  if (!draftLabel.trim() || !draftAmount) return;

  const amount = isIncome ? Number(draftAmount) : Number(-draftAmount);
  setTransactions([...transactions, { label: draftLabel.trim(), amount }]);

  setDraftLabel("");
  setDraftAmount("");
  setAdding(false);
}
  
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const budget = 1000;
  const totalSpent = transactions

  .filter((t) => t.amount < 0)
  .reduce((sum, t) => sum + Math.abs(t.amount), 0);

const pct = Math.min(totalSpent / budget, 1);

  return (
    <div>
      {/* Nav */}
      <div className="nav">
        <span>HOME</span>
        <span>GOALS</span>
        <span>SPENDING HISTORY</span>
      </div>

      {/* Title */}
      <div className="hero heading">
        <h1 className="heading">Financial</h1>
        <p>Your personal cash tracker</p>
      </div>

      <div className="cards-row ">
        {/* Balance card */}
        <div className="balanceCard">
          <p className="heading">Balance</p>
          <p>{balance} $</p>
        <div className="income-expenses">
          <div>
            <p className="heading">Income</p>
            <p>{income} $</p>
          </div>
          <div>
            <p className="heading">Expenses</p>
            <p>{expenses} $</p>
          </div>
        </div>
        </div>

        {/* Spend ring card */}
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
      </div>

      {/* Tracker */}
      <div className="tracker">
        <div className="trackerHeader">
          <p className="heading">SPENDINGS TRACKER</p>
          <div id="plus-btn" onClick={() => setAdding(!adding)}>+</div>
        </div>
        <div>
          {adding && 
          (
            <div className="add-form">

              <p>Add a new transaction</p>

              <input
                type="text"
                placeholder="What did you spend on?"
                value={draftLabel}
                onChange={(e) => setDraftLabel(e.target.value)}> 
              </input>
              <input
                type="number"
                placeholder="What amount?"
                value={draftAmount}
                onChange={(e) => setDraftAmount(e.target.value)}> 
              </input>
              <input
                type="checkbox"
                checked={isIncome}
                onChange={(e) => setIsIncome(e.target.checked)}
              />
              <p id="add-btn" onClick={() => handleAdd()}>add me</p>
              
            
            </div>   
              
          )
          }
        </div>

      <div className="rows">
        {transactions.map((t, i) => (
        <div className="row" key={i}>
          <span>Data {i + 1}</span>
          <span>{t.label}</span>
          
          <span>{t.amount} $</span>
        </div>
  ))}
</div>
        
      </div>
    </div>
  );
}

