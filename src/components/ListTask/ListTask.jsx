import styles from "./style.module.scss";
import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import Task from "../Task/Task";

const selectTodoIds = (state) => state.todos.map((todo) => todo.id);

const ListTask = () => {
  const todoIds = useSelector(selectTodoIds, shallowEqual);

  const renderedListTasks = todoIds.map((todoId) => {
    return <Task key={todoId} id={todoId} />;
  });

  return <div className={styles.container}>{renderedListTasks}</div>;
};

export default ListTask;
