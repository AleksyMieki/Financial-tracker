export default function BalanceCard({balance,income,expenses})
{
    return (
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
    );
}