import { useState } from "react";
import uuid from "react-uuid";
import TodoList from "./TodoList";

const TodoMain = () => {
  const [todoList, setTodoList] = useState([]);

  const onClick = () => {
    const b_todo = document.querySelector("input[name='b_todo");
    const todo = {
      b_id: uuid,
      b_todo: b_todo.value,
      b_comp: false,
    };
    setTodoList([...todoList, todo]);
  };
  const todo_delete = (id) => {
    const todoRemoveList = todoList.filter((todo) => {
      return todo.b_id !== id;
    });
    setTodoList(todoRemoveList);
  };
  const todo_complete = (id) => {
    const todoBody = todoList.map((todo) => {
      if (todo.b_id === id) {
        const comp = !todo.b_comp;
        return { ...todo, b_comp: comp };
      }
      return todo;
    });
    setTodoList(todoBody);
  };
  return (
    <>
      <div>
        <input
          name="b_todo"
          className="w3-input w3-border w3-round"
          placeholder="오늘 할일 작성"
        />
        <button onClick={onClick} className="w3-button w3-border">
          추가
        </button>
      </div>
      <div>
        <TodoList
          todoList={todoList}
          todo_delete={todo_delete}
          todo_complete={todo_complete}
        />
      </div>
    </>
  );
};
export default TodoMain;
