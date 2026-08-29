import { StethoscopeIcon } from "lucide-react";
import { useState } from "react";

export default function SpendingsTracker({ transactions, setTransactions }) {
  const [adding, setAdding] = useState(false);
  const [draftLabel, setDraftLabel] = useState("");
  const [draftAmount, setDraftAmount] = useState("");
  const [isIncome, setIsIncome] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  const CATEGORIES = ['Other','Food', 'Rent', 'Salary', 'Transport', 'Entertainment' ];
  const [draftCategory, setDraftCategory] = useState(CATEGORIES[0]);
  const [hideCategory, setHideCategory] = useState(true);

  function handleEdit(i)
  {
    setIsEdit(true);
    setEditIndex(i);
    setHideCategory(false);
  }

  function incomeCategory(val)
  {
    setIsIncome(val)
    setHideCategory(!hideCategory);
    setDraftCategory("income")
  }

  function handleDelete(i){

    setTransactions(transactions.filter((_,index) => i !== index ));
  }

  function handleAdd() {

    if (!draftLabel.trim() || !draftAmount) return;

    const amount = isIncome ? Number(draftAmount) : Number(-draftAmount);
    if(!isEdit)
    {
    setTransactions([...transactions, {date: new Date(), label: draftLabel.trim(), amount, cat: draftCategory }]);
    }
    else
    {
     const newArr = transactions.map((t,index) =>{
    if(index === editIndex)
    {
      return {...t,date: new Date(), label: draftLabel, amount: amount, cat: draftCategory}
    }
    return t;
    }
    )
      setTransactions(newArr);
    }
      
    
    setDraftLabel("");
    setDraftAmount("");
    setAdding(false);
    setEditIndex(null);
    setIsEdit(false);
    setDraftCategory(CATEGORIES[0]);
    setHideCategory(false);
  }

  return (
    <div className="tracker">
      <div className="trackerHeader">
        <p className="heading">SPENDINGS TRACKER</p>
        <div id="plus-btn" onClick={() => setAdding(!adding)}>+</div>
      </div>
      <div>
        {(adding || isEdit) && (
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
              onChange={(e) => incomeCategory(e.target.checked)}
            />
            {hideCategory && (
              <select value={draftCategory} onChange={(e) => setDraftCategory(e.target.value)}>
              {CATEGORIES.map((cat) => (
               <option key={cat} value={cat}>{cat}</option>
               ))}
              </select>
            )
              
            }
            <p id="add-btn" onClick={() => handleAdd()}>add me</p>
          </div>
        )}
      </div>

      <div className="rows">
        {transactions.map((t, i) => (
          <div className="row" key={i}>
            <span>{t.date.toLocaleDateString()}</span>
            <span>{t.label}</span>
            <span>{t.amount} $</span>
            <span>{t.cat} </span>
            <span onClick={() => handleEdit(i)}>edit</span>
            <span id="delete" onClick={() => handleDelete(i)}>-</span>
          </div>
        ))}
      </div>
    </div>
  );
}
