import React, { Component } from "react";
import styles from "./style.module.scss";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleTitleChange(event) {
    console.log(event);
    this.setState({
      title: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.title !== "") {
      this.props.addTodo(this.state.title);
      //reset input box
      this.setState({
        title: "",
      });
    }
  }
  render() {
    return (
      <div className={styles.container}>
        <span className={styles.arrow} />
        <input
          type="text"
          placeholder="title.."
          required={true}
          value={this.state.title}
          onChange={this.handleTitleChange.bind(this)}
        />
      </div>
    );
  }
}
export default AddTask;
