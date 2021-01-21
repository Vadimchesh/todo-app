import React from "react";
import PropTypes from "prop-types";
import styles from "./Item.module.scss";

function TodoItem({ todo, onChange }) {
  const classes = [];
  if (todo.complited) {
    classes.push("done");
  }

  return (
    <label className={styles.container}>
      <input type="checkbox" onChange={() => onChange(todo.id)}></input>
      <span className={styles.checkmark}></span>
      <span className={classes.join("")}>{todo.title}</span>
    </label>
  );
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default TodoItem;
