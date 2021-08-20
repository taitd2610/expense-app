// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default function getTransactions(req, res) {
  const { transactionId } = req.query;

  axios.get(`${process.env.BASE_URL}/${transactionId}`).then((response) => {
    res.status(200).json(response.data);
  });
}
