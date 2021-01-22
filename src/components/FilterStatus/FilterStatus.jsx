import React from "react";
import styles from "./style.module.scss";

function FilterStatus() {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input type="radio" name="bottom" />
        <span>All</span>
      </label>
      <label className={styles.label}>
        <input type="radio" checked name="bottom" />
        <span>Active</span>
      </label>
      <label className={styles.label}>
        <input type="radio" name="bottom" />
        <span>Completed</span>
      </label>
    </div>
  );
}

export default FilterStatus;
