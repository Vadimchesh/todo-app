import React from "react";
import styles from "./style.module.scss";
import cn from "classnames";
import { useSelector, useDispatch } from "react-redux";

const selectTodoById = (state, todoId) => {
  return state.todos.find((todo) => todo.id === todoId);
};

const TodoListItem = ({ id }) => {
  const todo = useSelector((state) => selectTodoById(state, id));
  const { text, completed } = todo;

  const dispatch = useDispatch();

  const handleCompletedChanged = () => {
    dispatch({ type: "todos/todoToggled", payload: todo.id });
  };

  const onDelete = () => {
    dispatch({ type: "todos/todoDeleted", payload: todo.id });
  };

  return (
    <label className={styles.label}>
      <div className={styles.container}>
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={handleCompletedChanged}
        />
        <span className={styles.checkmark}></span>
        <span
          className={cn({
            [styles.done]: todo.completed,
          })}
        >
          {text}
        </span>
      </div>
      <button className={styles.del} onClick={onDelete}></button>
    </label>
  );
};

export default TodoListItem;
