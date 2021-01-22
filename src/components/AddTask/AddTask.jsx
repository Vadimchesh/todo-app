import React from "react";
import styles from "./style.module.scss";

function AddTask() {
  return (
    <div className={styles.container}>
      <span className={styles.arrow} />
      <input type="text" placeholder="Whats needs to be done?" />
    </div>
  );
}

export default AddTask;
