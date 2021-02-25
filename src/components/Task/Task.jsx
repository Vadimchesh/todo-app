import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
import cn from "classnames";

const Task = ({ onClick, completed, text }) => (
  <label className={styles.container} onClick={onClick}>
    <span className={styles.checkmark}></span>
    <input type="checkbox" />
    <span
      className={cn({
        [styles.done]: completed,
      })}
    >
      {text}
    </span>
  </label>
);

Task.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Task;

// function Task({ todo, onChange }) {
//   return (
//     <label className={styles.container}>
//       <input type="checkbox" onChange={() => onChange(todo.id)}></input>
//       <span className={styles.checkmark}></span>
//       <span
//         className={cn({
//           [styles.done]: complited,
//         })}
//       >
//         {todo.title}
//       </span>
//     </label>
//   );
// }
// Task.propTypes = {
//   todo: PropTypes.object.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
// export default Task;
