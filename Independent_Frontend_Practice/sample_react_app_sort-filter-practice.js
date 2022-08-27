import React, {useState} from "react";

function TransactionTable({txns}) {
  const [date, setDate] = useState(null);
  const [transactionTable, setTransactionTable] = useState(txns);

  const sort = (e) => {
    e.preventDefault(); 
    let tempTable = [...transactionTable]; 
    for (let i = 0; i < tempTable.length; i++){ //bubble sort
      for (let j = 0; j + 1 < tempTable.length; j++) {
        let curAmt = tempTable[j].amount;
        let nextAmt = tempTable[j+1].amount; 
        let currItem = tempTable[j];
        let nextItem = tempTable[j+1];
        if (curAmt > nextAmt) {
          tempTable[j] = nextItem;
          tempTable[j+1] = currItem; 
        }
      }
    }
    setTransactionTable(tempTable); 
  };

  const filter = (e) => {
    e.preventDefault(); 
    let fileteredTable = []; 
    for (let item of txns) { 
      if (item.date === date) {
        fileteredTable.push(item); 
      }
    }
    setTransactionTable(fileteredTable); 
  }

  const handleDateChange = (e) => {
    setDate(e.target.value); 
  }

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <label className="mr-10">Transaction Date</label>
        <input id="date" type="date" defaultValue="yyyy-mm-dd" onChange={handleDateChange} />
        <button className="small" onClick={filter}>Filter</button>
      </section>

      <div className="card mt-50">
          <table className="table">
              <thead>
              <tr className="table">
                  <th className="table-header">Date</th>
                  <th className="table-header">Description</th>
                  <th className="table-header">Type</th>
                  <th className="table-header">
                      <span id="amount" onClick={sort}>Amount ($)</span>
                  </th>
                  <th className="table-header">Available Balance</th>
              </tr>
              </thead>
              <tbody>
                  {transactionTable.map((data) => {
                    return (
                      <tr>
                        <td>{data.date}</td>
                        <td>{data.description}</td>
                        <td>{data.type === 1 ? "Debit" : "Credit"}</td>
                        <td>{data.amount}</td>
                        <td>{data.balance}</td>
                      </tr>
                    )
                  })}        
              </tbody>
          </table>
      </div>
    </div>
  );
}

export default TransactionTable;
