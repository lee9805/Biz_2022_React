//state 변수르 만들기 위하여 useState 함수 import
import { useState } from "react";
import uuid from "react-uuid";
import moment from "moment";
const DietInput = () => {
  //JSON type 의 food state 변수 생성
  const [food, setFood] = useState({
    d_id: uuid(),
    d_date: moment().format("YYYY[-]MM[-]DD"),
    d_food: "",
    d_qty: "",
    d_cal: "",
    d_scal: "",
  });
  console.log(food.d_date);

  const onChange = (e) => {
    /*
    input box 에서 내용입력(onChange) 이벤트가 발생하면
    input box 가 e.target에 담겨 전달된다
    input box 의 name 속성과 value 을 분해하여 각각 변수에 담기
    name 변수와 value 변수가 분해되고 각각의 변도 변수로 생성된다
     */
    const [name, value] = e.target;
    setFood({ ...food, [name]: value });
    s;
  };
  return (
    <div className="w3-row-padding">
      <div className="w3-col s3">
        <input
          type="date"
          name="d_date"
          className="w3-input"
          defaultValue={food.d_date}
          onChange={onChange}
        />
      </div>
      <div className="w3-col s3">
        <input
          type="text"
          placeholder="메뉴를 입력하세요"
          name="d_food"
          className="w3-input"
          onChange={onChange}
        />
        <div className="w3-col s3"></div>
        <input
          type="text"
          placeholder="섭취수량을 입력하세요"
          name="d_qty"
          className="w3-input"
          onChange={onChange}
        />
        <div className="w3-col s3"></div>
        <input
          type="text"
          placeholder="단위 칼로리를 입력하세요"
          name="d_cal"
          className="w3-input"
          onChange={onChange}
        />
      </div>
      <div className="w3-col s3">
        <button className="w3-button w3-dark-grey">저장</button>
      </div>
    </div>
  );
};
export default DietInput;
