import React from "react";
import styles from "./style.module.scss";
import { connect } from "react-redux";
import { addTodo } from "../../actions";

// function AddTask() {
//   return (
//     <div className={styles.container}>
//       <span className={styles.arrow} />
//       <input type="text" placeholder="Whats needs to be done?" />
//     </div>
//   );
// }

const AddTask = ({ dispatch }) => {
  let input;

  return (
    <div className={styles.container}>
      <span className={styles.arrow} />
      <input
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
        ref={(node) => (input = node)}
      />
    </div>
  );
};

export default connect()(AddTask);
