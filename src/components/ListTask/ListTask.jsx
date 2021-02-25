import React from "react";
import Task from "../Task/Task";
import PropTypes from "prop-types";
import styles from "./style.module.scss";

const ListTask = ({ todos, toggleTodo }) => (
  <div className={styles.container}>
    {todos &&
      todos.map((todo) => (
        <Task key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
  </div>
);

ListTask.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default ListTask;
