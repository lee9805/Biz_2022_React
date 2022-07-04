import { useState, useEffect } from "react";
// DataApi.js 에 정의 된 fetchData 함수를 사용하겠다
import { fetchData } from "../module/DataApi";

const ApiMain = () => {
    //fetchData 함수를 호출하여 return 되는 결과를
    // result 변수에 받고
    // reslut 
  const [text, setText] = useState("Korea");
    useEffect(() =>{
        /*
        react 의 생명주기 함수 컴포넌트가 만들어질때, 컴포넌트가
        reding 될때 자도으로 실행되는 함수
        */
       fetchData().them((useEffect)=>
        console.log(result)
        const item = result.response.body.items.item;
        setText(JSON.)
       )
    }[])
  return <>{text}</>;
};
export default ApiMain;
