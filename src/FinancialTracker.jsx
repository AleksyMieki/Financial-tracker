import "./FinancialTracker.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BalanceCard from "./components/BalanceCard";
import SpendRing from "./components/SpendRing";
import SpendingsTracker from "./components/SpendingsTracker";
import "./index.css";
import { useState } from "react";
import { useEffect } from "react";

export default function FinancialTracker() {
  
const [transactions, setTransactions] = useState([]);

const income = transactions
  .filter((t) => t.amount > 0)
  .reduce((sum, t) => sum + t.amount, 0);

const expenses = transactions
  .filter((t) => t.amount < 0)
  .reduce((sum, t) => sum + Math.abs(t.amount), 0);

const balance = income - expenses;

  
const radius = 70;
const budget = 1000;
  const totalSpent = transactions
  .filter((t) => t.amount < 0)
  .reduce((sum, t) => sum + Math.abs(t.amount), 0);

const pct = Math.min(totalSpent / budget, 1);

  return (
    <div>
      {/* Nav */}
      <Navbar/>

      {/* Title */}
      <Hero/>

      <div className="cards-row ">
        {/* Balance card */}
      <BalanceCard balance={balance} income={income} expenses={expenses} />

        {/* Spend ring card */}

      <SpendRing expenses={expenses}/>

      </div>

      {/* Tracker */}
      <SpendingsTracker transactions={transactions} setTransactions={setTransactions} />
    </div>
  );
}

