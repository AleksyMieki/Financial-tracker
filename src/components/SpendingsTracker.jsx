import { useState } from "react";

export default function SpendingsTracker({ transactions, setTransactions }) {
  const [adding, setAdding] = useState(false);
  const [draftLabel, setDraftLabel] = useState("");
  const [draftAmount, setDraftAmount] = useState("");
  const [isIncome, setIsIncome] = useState(false);

  function handleAdd() {
    if (!draftLabel.trim() || !draftAmount) return;

    const amount = isIncome ? Number(draftAmount) : Number(-draftAmount);
    setTransactions([...transactions, { label: draftLabel.trim(), amount }]);

    setDraftLabel("");
    setDraftAmount("");
    setAdding(false);
  }

  return (
    <div className="tracker">
      <div className="trackerHeader">
        <p className="heading">SPENDINGS TRACKER</p>
        <div id="plus-btn" onClick={() => setAdding(!adding)}>+</div>
      </div>
      <div>
        {adding && (
          <div className="add-form">
            <p>Add a new transaction</p>

            <input
              type="text"
              placeholder="What did you spend on?"
              value={draftLabel}
              onChange={(e) => setDraftLabel(e.target.value)}
            >
            </input>
            <input
              type="number"
              placeholder="What amount?"
              value={draftAmount}
              onChange={(e) => setDraftAmount(e.target.value)}
            >
            </input>
            <input
              type="checkbox"
              checked={isIncome}
              onChange={(e) => setIsIncome(e.target.checked)}
            />
            <p id="add-btn" onClick={() => handleAdd()}>add me</p>
          </div>
        )}
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
  );
}
