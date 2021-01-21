import React from "react";
import styles from "./style.module.scss";

function TodoFilter() {
  return (
    <div className={styles.container}>
      <label>
        <input type="radio" name="bottom" />
        <span>All</span>
      </label>
      <label>
        <input type="radio" checked name="bottom" />
        <span>Active</span>
      </label>
      <label>
        <input type="radio" name="bottom" />
        <span>Completed</span>
      </label>
    </div>
  );
}

export default TodoFilter;
