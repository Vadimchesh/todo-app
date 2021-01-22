import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
import cn from "classnames";

function Task({ todo, onChange }) {
  return (
    <label className={styles.container}>
      <input type="checkbox" onChange={() => onChange(todo.id)}></input>
      <span className={styles.checkmark}></span>
      <span
        className={cn({
          [styles.done]: todo.complited,
        })}
      >
        {todo.title}
      </span>
    </label>
  );
}
Task.propTypes = {
  todo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Task;
