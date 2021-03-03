import React from 'react';
import ListTask from './components/ListTask/ListTask';
import AddTask from './components/AddTask/AddTask';
import styles from './style.module.scss';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className={styles.wrapper}>
    <h1>todos</h1>
    <div className={styles.content}>
      <AddTask />
      <ListTask></ListTask>
      <Footer />
    </div>
    <div className={styles.card1} />
    <div className={styles.card2} />
  </div>
);

export default App;
