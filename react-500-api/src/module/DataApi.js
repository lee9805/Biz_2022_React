/*
    fetch 함수를 사용하여 data.go.kr 의 API 연결하기
*/
const apiURL = "/get/1360000/WthrWrnInfoService/getWthrWrnMsg";
const apiServiceKey =
  "http://apis.data.go.kr/1360000/WthrWrnInfoService/getWthrWrnList";
const fetch = async () => {
  const serviceURL = `${apiURL}?serviceKey=${apiServiceKey}&dataType=JSON&pageNo=1&numOfRow=110`;
  console.log(serviceURL);
  const response = await fetch(serviceURL);
  const json = await response.json();
  return json;
};
export { fetchData };
