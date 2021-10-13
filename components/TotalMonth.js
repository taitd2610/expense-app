import React from "react";
import { numberWithCommas } from "../utils/utils";

const TotalMonth = ({ totalMonth }) => {
  return (
    <div className="bg-red-50 rounded-sm shadow p-4 dark:bg-dark">
      <div className="grid grid-cols-2 gap-4 mb-2">
        <div className="font-bold bg-white rounded-md p-2 flex justify-between">
          <p>Chi tiêu:</p>
          <p className="text-lossColor">
            {numberWithCommas(totalMonth.expense.expenseTotal)}
          </p>
        </div>

        <div className="font-bold bg-white rounded-md p-2 flex justify-between items-center">
          <p>Thu nhập:</p>
          <p className="text-profitColor">
            +{numberWithCommas(totalMonth.income.incomeTotal)}
          </p>
        </div>
      </div>

      <div className="font-bold bg-white rounded-md p-2 flex justify-between">
        <p>Thu chi:</p>
        <p className="text-gray-600 text-right">
          {numberWithCommas(totalMonth.balance)}
        </p>
      </div>
    </div>
  );
};

export default TotalMonth;
