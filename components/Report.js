import React, { useState, useEffect } from "react";

const Report = () => {
  const [totalMonth, setTotalMonth] = useState();

  useEffect(async () => {
    await axios
      .get(`/api/transactions/totalMonth`)
      .then((res) => setTotalMonth(res.data));
  }, []);

  return (
    <div className="bg-red-50 rounded-sm shadow p-4 dark:bg-dark">
      <p>
        Chi tiêu:<span>{totalMonth.expense}</span>
      </p>
    </div>
  );
};

export default Report;
