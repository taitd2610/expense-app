import React, { useState, useEffect } from "react";
import axios from "axios";

import { numberWithCommas } from "../utils/utils";

const Transactions = () => {
  const [dailyTransactions, setDailyTransactions] = useState([]);

  // Get all transactions
  useEffect(async () => {
    const result = await axios.get("/api/transactions");

    setDailyTransactions(result.data);
  }, []);

  console.log(dailyTransactions);

  return (
    <div className="">
      {dailyTransactions.map((dailyTransaction) => (
        <div>
          <div className="flex justify-between bg-gray-100 border px-2">
            <p className="">{dailyTransaction.date}</p>
            <p className="">{`-${numberWithCommas(
              dailyTransaction.totalDaily
            )}đ`}</p>
          </div>

          <div class="divide-y divide-light-blue-400">
            {dailyTransaction.transactions.map((transaction) => (
              <div className="flex justify-between px-2 py-2">
                <p className="font-semibold">
                  {transaction.category}
                  <span className="ml-2 font-light text-sm">{`(${transaction.description})`}</span>
                </p>
                <p>{`${numberWithCommas(transaction.amount)}đ`}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
