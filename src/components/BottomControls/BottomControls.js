import React from 'react';
import { StatusFilters } from '../../redux/reducerFilter';
import styles from './style.module.scss';

const BottomControls = ({ value: status, onChange }) => {
  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key];
    const handleClick = () => onChange(value);
    return (
      <label data-cy='filterLabel' className={styles.label} key={value}>
        <input
          defaultChecked={status.status === value}
          type='radio'
          name='bottom'
        />
        <span data-cy='filterName' onClick={handleClick}>
          {key}
        </span>
      </label>
    );
  });

  return <div className='styles.conainer'>{renderedFilters}</div>;
};

export default BottomControls;
