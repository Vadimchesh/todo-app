import React, { Component } from "react";
import Task from "../Task/Task";
import styles from "./style.module.scss";

class ListTask extends Component {
  render() {
    return (
      <div className={styles.container}>
        {this.props.todos.map((todo) => {
          if (todo.display === true) {
            return (
              <Task key={todo.id} todo={todo} actions={this.props.actions} />
            );
          }
        })}
      </div>
    );
  }
}

export default ListTask;
