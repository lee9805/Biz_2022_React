# TodoList Project

- TodoMain 이 TodoInput 과 TodoList 를 감싸고 있고
- TodoInput 과 TodoList 는

```
|------------TodoMain---------------|
|   |--------TodoInput----------|   |
|   |--------TodoInput----------|   |
|-----------------------------------|
```

## 데이터 흐름 정의

- TodoInput 에서 데이터를 입력하고 추가를 하면 TodoLIst 배열에 추가하고
- TodoList 배열은 TodoLIst에서 표출한다
- TodoInput 와 TodoList 가 parents-child 관계에 있다면 TodoInput 에서
  TodoList State 에 값을 추가하면 자연히 TodoList에 변경된 값이 표출 될것이다
  하지만 2개 의 Component 가 같은 level 에 있기 때문에 TodoInput 에서
  TodoList State를 정의 하면 데이터르 ㄹ공유하는데 어려움이 있다
- 이러한 경우는 TodoMain에서 TodoList State 를 선언하고 TodoInput 과 TodoList가
  공유 할수 있는 방법으로 진행해야 한다

## TodoList State 의 추가

- TodoMain 에서 TodoList State를 선언하고, 데이터를 입력하는 함수를 선언하여
  데이터를 입력하는 함수를 TodoInput 에 props로 전달해 주어야 한다
- TodoInput 은 input box에 입력된 데이터를 TodoMain으로 부터 전달받은 함수를
  통해 TodoMain 에 선언된 TodoList State 에 추가하는 과정이 필요하다
