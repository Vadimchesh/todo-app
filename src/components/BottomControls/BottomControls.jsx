import React from "react";
import FilterStatus from "../FilterStatus/FilterStatus";
import styles from "./style.module.scss";

function BottomControls() {
  return (
    <div className={styles.container}>
      <label>2 2 left</label>
      <FilterStatus />
      <label>Clear completed</label>
    </div>
  );
}

export default BottomControls;
