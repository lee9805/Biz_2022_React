import Sub from "./Sub";
const Main = () => {
  const comp = (
    <div>
      <h1>하하호호</h1>
      <p>리액트를 사용하여 컴포넌트를 만들고 있음</p>
      <p> 3 + 4 = {3 + 4} </p>
      <Sub name="lee" />
    </div>
  );
  return comp;
};
export default Main;
