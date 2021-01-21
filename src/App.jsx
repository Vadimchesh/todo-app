import React from "react";
import ListTask from "./components/ListTask/ListTask";
import BottomControls from "./components/BottomControls//BottomControls";
import AddTask from "./components/AddTask/AddTask";
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
        <AddTask />
        <ListTask todos={todos} onToggle={toggleTodo}></ListTask>
        <BottomControls />
      </div>
      <div className={styles.card1} />
      <div className={styles.card2} />
    </div>
  );
}

export default App;
