import React from "react";
import styles from "./Add.module.scss";

function TodoAdd() {
  return (
    <div className={styles.place}>
      <label className={styles.label}>
        <span className={styles.arrow} />
        <input
          type="text"
          className={styles.task}
          placeholder="What need to be done?"
          aria-label="What need to be done?"
        />
      </label>
    </div>
  );
}

export default TodoAdd;
