function Todo(props) {
  const todos = props.myTodo;
  return (
    <ul style={{ display: "flex", flexDirection: "column" }}>
      {todos.map((todo, i) => {
        return (
          <li key={i}>
            {todo.id}-{todo.title}
          </li>
        );
      })}
    </ul>
  );
}

export default Todo;
