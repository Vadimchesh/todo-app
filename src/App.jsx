import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "./redux/actions";
import ListTask from "./components/ListTask/ListTask";
import BottomControls from "./components/BottomControls//BottomControls";
import AddTask from "./components/AddTask/AddTask";
import styles from "./style.module.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1>todos</h1>
        <div className={styles.content}>
          <AddTask addTodo={this.props.actions.addTodo} />
          <ListTask
            actions={this.props.actions}
            todos={this.props.todos}
          ></ListTask>
          <BottomControls />
        </div>
        <div className={styles.card1} />
        <div className={styles.card2} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
