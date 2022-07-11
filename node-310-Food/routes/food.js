import express from "express";
const router = express.Router();

import { food_model } from "../config/mongoConfig.js";

// //localhost:3000/food/insert 로 받음
// router.post("/insert", (req, res) => {
//   console.log(req.body);
//   food_model.create(req.body);

//   res.json({ OK: "ok" });
// });

export default router;
