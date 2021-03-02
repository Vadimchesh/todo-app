import React from 'react';

const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? '' : 's';

  return (
    <label className='labelCount' data-cy='countItemLeft'>
      {count} item{suffix} left
    </label>
  );
};
export default RemainingTodos;
