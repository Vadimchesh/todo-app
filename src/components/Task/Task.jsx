import React, { Component } from "react";
import styles from "./style.module.scss";
import cn from "classnames";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.todo.title,
      completed: this.props.todo.completed,
    };
  }
  handleComplete() {
    this.props.actions.completeTodo(this.props.todo.id);
    this.setState({
      checked: !this.state.checked,
    });
  }
  handleDelete() {
    this.props.actions.deleteTodo(this.props.todo.id);
  }
  handleEdit() {
    this.props.actions.editTodo(this.props.todo.id);
  }
  handleUpdate() {
    if (this.state.title !== "") {
      this.props.actions.updateTodo(this.props.todo.id, this.state.title);
    }
  }
  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }
  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value,
    });
  }
  handleDueDateChange(event) {
    console.log(event);
    this.setState({
      dueDate: event,
    });
  }
  handleFocusChange(event) {
    console.log(event);
    this.setState({
      focused: event.focused,
    });
  }
  render() {
    return (
      <label className={styles.container}>
        <input
          type="checkbox"
          defaultChecked={this.state.completed}
          required={true}
          onClick={this.handleComplete.bind(this)}
        />
        <span
          className={cn({
            [styles.done]: this.state.complited,
          })}
        >
          {this.state.title}
        </span>
        <button onClick={this.handleDelete.bind(this)}>Delete</button>
      </label>
    );
  }
}
export default Task;
