import React from "react";
import TodoList from "../list/List";
import TodoControls from "../controls/Controls";
import TodoAdd from "../add/Add";
import styles from "./style.module.scss";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, complited: false, title: "New task 1" },
    { id: 2, complited: false, title: "New task 2" },
    { id: 3, complited: false, title: "New task 3" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.complited = !todo.complited;
        }
        return todo;
      })
    );
  }

  return (
    <div className={styles.wrapper}>
      <h1>todos</h1>
      <div className={styles.content}>
        <TodoAdd />
        <TodoList todos={todos} onToggle={toggleTodo}></TodoList>
        <TodoControls />
      </div>
      <div className={styles.card1} />
      <div className={styles.card2} />
    </div>
  );
}

export default App;
