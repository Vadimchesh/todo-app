import ListTask from './components/ListTask/ListTask';
import AddTask from './components/AddTask/AddTask';
import Footer from './components/Footer/Footer';
import styles from './style.module.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <h1>todos</h1>
      <div className={styles.content}>
        <AddTask />
        <ListTask />
        <Footer />
      </div>
      <div className={styles.card1} />
      <div className={styles.card2} />
    </div>
  );
}
export default App;
