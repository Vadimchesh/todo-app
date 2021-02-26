import React from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

const TodoListItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const handleCompletedChanged = () => {
    dispatch({ type: 'todos/todoToggle', payload: id });
  };

  const onDelete = () => {
    dispatch({ type: 'todos/todoDelet', payload: id });
  };

  return (
    <label className={styles.label}>
      <div className={styles.container}>
        <input
          className='toggle'
          type='checkbox'
          checked={completed}
          onChange={handleCompletedChanged}
        />
        <span className={styles.checkmark}></span>
        <span
          className={cn({
            [styles.done]: completed,
          })}
        >
          {text}
        </span>
        <span id='delete' className={styles.close} onClick={onDelete}></span>
      </div>
    </label>
  );
};

export default TodoListItem;
