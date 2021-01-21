import React from "react";
import TodoFilter from "./TodoFilter";
import styles from "./Controls.module.scss";

function TodoControls() {
  return (
    <div className={styles.container}>
      <label>2 2 left</label>
      <TodoFilter />
      <label>Clear completed</label>
    </div>
  );
}

export default TodoControls;
