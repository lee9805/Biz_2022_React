import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const { todoList, todo_delete, todo_complete } = props;
  const todoBody = todoList.map((todo) => {
    return (
      <TodoItem
        key={todo.b_id}
        item={todo}
        todo_delete={todo_delete}
        todo_complete={todo_complete}
      />
    );
  });

  return (
    <table className="w3-table w3-table-all">
      <thead></thead>
      <tbody>{todoBody}</tbody>
    </table>
  );
}

export default TodoList;
