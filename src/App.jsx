import ListTask from "./components/ListTask/ListTask";
// import BottomControls from "./components/BottomControls//BottomControls";
import AddTask from "./components/AddTask/AddTask";
import styles from "./style.module.scss";
import BottomControls from "./components/BottomControls/BottomControls";

function App() {
  return (
    <div className={styles.wrapper}>
      <h1>todos</h1>
      <div className={styles.content}>
        <AddTask />
        <ListTask />
        <BottomControls />
      </div>
      <div className={styles.card1} />
      <div className={styles.card2} />
    </div>
  );
}
export default App;
