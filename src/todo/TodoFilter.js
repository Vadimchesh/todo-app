import React from "react";
import styles from "./Filter.module.scss";

function TodoFilter() {
  return (
    <div>
      <label className={styles.conainer}>
        <input className={styles.input} type="radio" name="bottom" />
        <span>All</span>
      </label>
      <label>
        <input className={styles.input} type="radio" checked name="bottom" />
        <span>Active</span>
      </label>
      <label>
        <input className={styles.input} type="radio" name="bottom" />
        <span>Completed</span>
      </label>
    </div>
  );
}

export default TodoFilter;
