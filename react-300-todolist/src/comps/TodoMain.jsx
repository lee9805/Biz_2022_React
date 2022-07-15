import { useState } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoMain = () => {
  const [todoList, setTodoList] = useState([]);

  const insert_todo = (content) => {
    // 여기는 TodoInput 이 전달해준 todo 를 todoList 에 추가하는 곳
    const todo = {
      t_id: "",
      t_s_date: "",
      content: content,
      t_e_date: "",
    };

    // todoList 배열을 모두 복사하고
    // 끝에 todo를 추가하여
    // todoBody 배열을 생성하라
    const todoBody = [...todoList, todo];
    setTodoList(todoBody);
  };

  return (
    <>
      <div>
        <input
          onKeyDown={onKeyDown}
          placeholder="버킷에 추가할 내용을 입력하세요"
          className="w3-input w3-border w3-hover-gray w3-round"
        />
      </div>
      <div>
        <TodoList TodoList={TodoList} functions={functions} />
      </div>
    </>
  );
};
export default TodoMain;
