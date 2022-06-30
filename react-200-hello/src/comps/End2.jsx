const End2 = ({ name }) => {
  // 현재 comp 에서만 사용할 수 있도록 private style 을 지정하고
  //tag comp 에 style keyword 를 사용하여 지정한다
  // 단 style 의 속성 이름은 kebab-case( font-style ) 를 사용할 수 없고
  //마이너스 기호를 제거 하고 Camel-case로 사용해야 한다
  //속성 값들은 반드시 문자열로 만들어야 한다
  const h1Style = {
    color: "red",
    fontStyle: "italic",
  };
  /*
   jsx 의 tag 규칙
   여러 tag들을 사용할때는 반드시 가장 바깥쪽을 감싸는 group tag가 있어야 한다
   -잘못된 사용
   <div></div>
   <div></div>
   <div></div>
   <p></p>
   
   -원래 tag
   <div>
   <div></div>
   <div></div>
   <p></p>
   </div>

    -div 생략 가능
   <>
   <div></div>
   <div></div>
   <p></p>
   <>
*/
  return (
    <>
      <h1 style={h1Style}>내가 받은 name = {name}</h1>
    </>
  );
};
export default End2;
