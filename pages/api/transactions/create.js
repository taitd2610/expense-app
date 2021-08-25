// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default function createTransaction(req, res) {
  const url = `${process.env.BASE_URL}/transactions/create`;
  const transaction = req.body;

  axios
    .post(url, transaction)
    .then((response) => {
      res.status(200).json("Create successfully!");
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).end();
    });
}
