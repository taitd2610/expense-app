// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default function createTransaction(req, res) {
  const url = `${process.env.BASE_URL}/create`;
  const transaction = req.body;

  try {
    axios.post(url, transaction).then((res) => {
      res.status(200).json("Create successfully");
    });
  } catch (error) {
    console.log(error.message);
  }
}
