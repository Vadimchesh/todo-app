import React from 'react';
import styles from './style.module.scss';
import { useDispatch } from 'react-redux';

const BottomContolAllClear = (id) => {
  const dispatch = useDispatch();

  const onClearCompletedClicked = () =>
    dispatch({ type: 'todos/completedClear', payload: id });

  return (
    <label className={styles.label}>
      <span
        data-cy='clearAllComplited'
        id='clear'
        onClick={onClearCompletedClicked}
      >
        Clear all complited
      </span>
    </label>
  );
};

export default BottomContolAllClear;
