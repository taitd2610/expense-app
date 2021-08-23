// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default function getTransactions(req, res) {
  const url = `${process.env.BASE_URL}/transactions`;

  axios.get(url).then((response) => {
    const transactions = response.data.allTransactions.data;
    transactions.sort((a, b) => b.date.localeCompare(a.date));
    res.status(200).json(transactions);
  });
}
