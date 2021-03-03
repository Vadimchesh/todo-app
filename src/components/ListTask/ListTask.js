import styles from './style.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import Task from '../Task/Task';
import { StatusFilters } from '../../redux/reducerFilter';

const ListTask = () => {
  const todos = useSelector((state) => {
    switch (state.filters.status) {
      case StatusFilters.All:
        return state.todos;
      case StatusFilters.Active:
        return state.todos.filter((todo) => todo.completed === false);
      case StatusFilters.Completed:
        return state.todos.filter((todo) => todo.completed === true);
      default:
        return state.todos;
    }
  });

  const renderedListTasks = todos.map((todo) => {
    return (
      <Task
        data-cy='oneTask'
        key={todo.id}
        id={todo.id}
        completed={todo.completed}
        text={todo.text}
      />
    );
  });

  return <div className={styles.container}>{renderedListTasks}</div>;
};

export default ListTask;
