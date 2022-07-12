import express from "express";
const router = express.Router();

import { food_model } from "../config/mongoConfig.js";

router.get("/selectAll", (req, res) => {
  food_model.find({}).then((result) => res.json(result));
});

// //localhost:3000/food/insert 로 받음
router.post("/insert", (req, res) => {
  console.log(req.body);
  food_model.create(req.body);

  res.json({ OK: "ok" });
});
/*
REST Ful 방식의 delete RequestMathod 로 요청을 받고
주소창에 전달된 값을 id params 변수에 받아 확인하기
*/
router.delete("/remove/:id", (req, res) => {
  const id = req.params.id;
  console.log("받은 ID", id);
  /*
  mongoose모델의 findOneAndDelete 함수를 호출하여
  d_id 값이 id 일치하는 데이터를 삭제하라
  findOneAndRemove: findOneAndModify 로 변경되었다
  실제로 삭제라혈면 findOneAndDelete
  */
  food_model.findOneAndRemove({ d_id: id }).exec().then(res.send("OK"));
});

export default router;
/*
REST Ful 방식의 요청
  router, Controller 에서 사용하는 RequestMethod 
    get :  데이터를 요청할때
    POSt : 데이터를 추가할때
    Delete :  데이터를 삭제할때
    put : 데이터를 업데이트 할때
*/
