import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import styles from "./List.module.scss";

function TodoList(props) {
  return (
    <div className={styles.container}>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            index={index}
            key={todo.id}
            onChange={props.onToggle}
          ></TodoItem>
        );
      })}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;
