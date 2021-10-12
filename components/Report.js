import React, { useState, useEffect } from "react";
import axios from "axios";
import { numberWithCommas } from "../utils/utils";

const Report = () => {
  const [totalMonth, setTotalMonth] = useState();

  useEffect(async () => {
    await axios
      .get(`/api/transactions/totalMonth`)
      .then((res) => setTotalMonth(res.data));
  }, []);

  return totalMonth ? (
    <div className="bg-red-50 rounded-sm shadow p-4 dark:bg-dark">
      <div className="grid grid-cols-2 gap-4 mb-2">
        <div className="font-bold bg-white rounded-md p-2 flex justify-between">
          <p>Chi tiêu:</p>
          <p className="text-lossColor">
            {numberWithCommas(totalMonth.expense)}
          </p>
        </div>

        <div className="font-bold bg-white rounded-md p-2 flex justify-between items-center">
          <p>Thu nhập:</p>
          <p className="text-profitColor">
            +{numberWithCommas(totalMonth.income)}
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
  ) : (
    <div className="bg-red-50 rounded-sm shadow p-4 dark:bg-dark">
      Loading data...
    </div>
  );
};

export default Report;
