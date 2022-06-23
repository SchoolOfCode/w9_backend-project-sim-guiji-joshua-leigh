import express from "express";

const router = express.Router();

import { getData } from "../models/quotesFunctions.js";

/* GET quotesData. */
router.get("/", async function (req, res, next) {
  let payload = await getData();
  const responseObject = {success: Boolean, payload: payload};
  res.json(responseObject);
});

export default router;
