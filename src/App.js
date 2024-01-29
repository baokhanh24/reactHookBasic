import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/header";
import { useState } from "react";
import Todo from "./components/Todo";
function App() {
  const [title, setTitle] = useState("");
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "helo khanh",
    },
  ]);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleclick = (e) => {
    if (title === "") {
      alert("loi roi ma");
      return;
    }
    let todo = { id: Math.floor(Math.random() * 100), title: title };
    setTodoList([...todoList, todo]);
    setTitle("");
  };

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>{title}</h3>
        <Todo myTodo={todoList} />
        <input type="text" value={title} onChange={(e) => handleChange(e)} />
        <button onClick={(e) => handleclick(e)}>click me</button>
      </header>
    </div>
  );
}

export default App;
