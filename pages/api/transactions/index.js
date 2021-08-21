// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default function getTransactions(req, res) {
  const url = `${process.env.BASE_URL}/transactions`;
  axios.get(process.env.BASE_URL).then((response) => {
    res.status(200).json(response.data);
  });
}
