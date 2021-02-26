import React from 'react';
import styles from './style.module.scss';
import RemainingTodos from '../RemainingTodos/RemainingTodos';
import BottomControls from '../BottomControls/BottomControls';
import BottomContolAllClear from '../BottomControls/BottomContolAllClear';
import { useSelector, useDispatch } from 'react-redux';

const Footer = () => {
  const dispatch = useDispatch();

  const todosRemaining = useSelector((state) => {
    const uncompletedTodos = state.todos.filter((todo) => !todo.completed);
    return uncompletedTodos.length;
  });

  const status = useSelector((state) => state.filters);

  const onStatusChange = (status) =>
    dispatch({ type: 'FILTER', payload: status });
  console.log(onStatusChange);
  return (
    <footer className={styles.container}>
      <RemainingTodos count={todosRemaining} />
      <BottomControls value={status} onChange={onStatusChange} />
      <BottomContolAllClear />
    </footer>
  );
};

export default Footer;
