const USERNAME = "root";
const PASSWORD = "12341234";
const mongoURL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.kfs3z.mongodb.net/?retryWrites=true&w=majority`;

/*
mongoose 도구를 사용하여
NoSQL 인 mongoDB 에 DMBS Schema 방식으로 접근하기
*/
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const food = Schema({
  f_date: String,
  f_food: String,
  f_eat: Number,
  f_cal: String,
  f_scal: String,
});

const food_model = mongoose.model("food", food);
export { mongoURL, food_model };
