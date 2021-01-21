import React from "react";
import Task from "../Task/Task";
import PropTypes from "prop-types";
import styles from "./style.module.scss";

function ListTask(props) {
  return (
    <div className={styles.container}>
      {props.todos.map((todo, index) => {
        return (
          <Task
            todo={todo}
            index={index}
            key={todo.id}
            onChange={props.onToggle}
          ></Task>
        );
      })}
    </div>
  );
}

ListTask.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onToggle: PropTypes.func.isRequired,
};

export default ListTask;
