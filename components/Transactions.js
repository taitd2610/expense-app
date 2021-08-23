import React, { useState, useEffect } from "react";
import axios from "axios";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  // Get all transactions
  useEffect(async () => {
    const result = await axios.get("/api/transactions");

    setTransactions(result.data);
  }, []);

  console.log(transactions);

  return (
    <div>
      {transactions.map((transaction) => (
        <ul className="mb-2">
          <li>{transaction.date}</li>
          <li>{transaction.description}</li>
          <li>{transaction.amount}</li>
        </ul>
      ))}
    </div>
  );
};

export default Transactions;
