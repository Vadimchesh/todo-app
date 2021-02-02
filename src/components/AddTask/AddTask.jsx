import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './style.module.scss';

const AddTask = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => setText(e.target.value);

  const handleKeyDown = (e) => {
    const trimmedText = text.trim();
    if (e.which === 13 && trimmedText) {
      dispatch({ type: 'todos/todoAdd', payload: trimmedText });
      setText('');
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.arrow} />
      <input
        className='new-todo'
        placeholder='What needs to be done?'
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default AddTask;
