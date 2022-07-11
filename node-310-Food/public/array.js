//객체 펼치기
//객체의 비 구조화
// 객체의 분해
// 객체를 분해하여 K 변수를 생성하고
// K 변수에 '대한민국' 문자열을 담아라
const Korea = { K: "대한민국" };
console.log(Korea.K);
const [k] = Korea.K;
console.log(k);

const nation = "우리나라";
console.log(nation);

//배열 펼치기
//배열의 비 구조화
//배열의 분해
// [1,2,3]가 담긴 배열을 각각 분해하여
//변수, a,b,c 를 생성하고 각각 요소를 변수에 담아라
const arr = [1, 2, 3];
const [a, b, c] = arr;
//const a = arr[1]
//const b = arr[2]
//const c = arr[3]
console.log(a, b, c);
