import React from 'react';
import ListTask from './components/ListTask/ListTask';
import BottomControls from './components/BottomControls//BottomControls';
import AddTask from './components/AddTask/AddTask';
import VisibleTaskList from './components/VisibleTaskList';
import styles from './style.module.scss';

const App = () => (
  <div className={styles.wrapper}>
    <h1>todos</h1>
    <div className={styles.content}>
      <AddTask />
      <VisibleTaskList />
      <ListTask></ListTask>
      <BottomControls />
    </div>
    <div className={styles.card1} />
    <div className={styles.card2} />
  </div>
);

export default App;
