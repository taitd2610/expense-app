// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default function getCategories(req, res) {
  const url = `${process.env.BASE_URL}/categories?type=${req.query.type}`;
  axios.get(url).then((response) => {
    res.status(200).json(response.data);
  });
}
