import React, { useState, useEffect, forwardRef } from "react";
import axios from "axios";
import DatePicker, { registerLocale } from "react-datepicker";
import vi from "date-fns/locale/vi";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

import { numberWithCommas } from "../utils/utils";
import { LOSS } from "../constants/transactionType";

registerLocale("vi", vi);

const Transactions = ({ currentTransaction, setTransactionId }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [dailyTransactions, setDailyTransactions] = useState([]);

  // Get all transactions
  useEffect(async () => {
    await axios
      .get("/api/transactions")
      .then((res) => setDailyTransactions(res.data));
  }, [currentTransaction]);

  return (
    <div className="bg-blue-50 rounded-sm shadow p-4 dark:bg-dark ">
      {/* Month Picker */}
      <div className="flex mb-4 items-center justify-between">
        <ChevronLeftIcon className="h-8 cursor-pointer text-blue-500" />

        <DatePicker
          className="outline-none font-bold text-lg text-center w-full bg-transparent dark:text-light"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          locale="vi"
          dateFormat="MM/yyyy"
          showMonthYearPicker
          value={startDate}
        />

        <ChevronRightIcon className="h-8 text-blue-500 cursor-pointer" />
      </div>
      {dailyTransactions.map((dailyTransaction) => (
        <div>
          <div className="flex justify-between bg-red-100 rounded-md py-2 border px-2">
            <p className="font-semibold">{dailyTransaction.date}</p>
            <p
              className={`font-semibold ${
                dailyTransaction.totalDaily > 0
                  ? "text-profitColor"
                  : "text-lossColor"
              }`}
            >{`${dailyTransaction.totalDaily > 0 ? "+" : ""}${numberWithCommas(
              dailyTransaction.totalDaily
            )}đ`}</p>
          </div>

          <div class="divide-y divide-light-blue-400">
            {dailyTransaction.transactions.map((transaction) => (
              <div
                className={`flex justify-between px-2 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-md ${
                  transaction.categoryType === LOSS
                    ? "text-lossColor"
                    : "text-profitColor"
                }`}
                onClick={() => {
                  setTransactionId(transaction.transactionId);
                }}
              >
                <p className="font-semibold">
                  {transaction.categoryName}
                  <span className="ml-2 font-light text-sm">{`(${transaction.description})`}</span>
                </p>
                <p>{`${transaction.amount > 0 ? "+" : ""}${numberWithCommas(
                  transaction.amount
                )}đ`}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
