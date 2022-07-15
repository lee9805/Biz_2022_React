import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { todoList } = props;
  const _tempTodoList = todoList.map((todo) => {
    const todo_td = <TodoItem todo={todo} />;
    return todo_td;
  });

  return (
    <table className="w3-table w3-table-all">
      <thead>{_tempTodoList}</thead>
      <button>저장</button>
    </table>
  );
};

export default TodoList;
