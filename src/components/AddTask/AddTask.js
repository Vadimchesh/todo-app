import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './style.module.scss';

const AddTask = () => {
  const dispatch = useDispatch();
  const handleKeyDown = (e) => {
    const trimmedText = e.target.value.trim();
    if (e.which === 13 && trimmedText) {
      dispatch({ type: 'todoAdd', payload: trimmedText });
      e.target.value = '';
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.arrow} />
      <input
        autoFocus
        className='new-todo'
        placeholder='What needs to be done?'
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default AddTask;
