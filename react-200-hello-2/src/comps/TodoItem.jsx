const TodoItem = (props) => {
  const { todo } = props;
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.t_s_date}</td>
      <td>{todo.content}</td>
      <td></td>
    </tr>
  );
};
export default TodoItem;
