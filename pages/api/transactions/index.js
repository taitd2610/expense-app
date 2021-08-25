// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default function getTransactions(req, res) {
  const url = `${process.env.BASE_URL}/transactions/by-date`;

  axios.get(url).then((response) => {
    const transactions = response.data.transactionsByDate.data.map((daily) => ({
      date: daily.date,
      totalDaily: daily.totalDaily,
      transactions: daily.transactionDaily.split(",").map((description) => {
        let transaction = description.split("/");
        return {
          description: transaction[0],
          category: transaction[1],
          amount: transaction[2],
        };
      }),
    }));

    res.status(200).json(transactions);
  });
}
