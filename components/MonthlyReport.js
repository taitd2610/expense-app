import React, { useState, useEffect } from "react";
import axios from "axios";
import TotalMonth from "./TotalMonth";
import PieChart from "./PieChart";
import { numberWithCommas, percentage } from "../utils/utils";

const MonthlyReport = () => {
  const [totalMonth, setTotalMonth] = useState();

  useEffect(async () => {
    await axios
      .get(`/api/transactions/totalMonth`)
      .then((res) => setTotalMonth(res.data));
  }, []);

  return totalMonth ? (
    <div>
      <TotalMonth totalMonth={totalMonth} />

      <PieChart data={totalMonth.expense.detail} />

      <div class="grid grid-cols-1 divide-y py-2 bg-red-50 rounded-sm shadow p-4 dark:bg-dark divide-gray-200 mt-4">
        {totalMonth.expense.detail.map((item) => (
          <div className="grid grid-cols-4 py-1">
            <p className="font-bold col-span-2">{item.categoryName}</p>

            <p className="font-bold text-right">
              {numberWithCommas(item.total)}đ
            </p>
            <p className="font-light text-right">
              {percentage(item.total, totalMonth.expense.expenseTotal)}%
            </p>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="bg-red-50 rounded-sm shadow p-4 dark:bg-dark">
      Loading data...
    </div>
  );
};

export default MonthlyReport;
