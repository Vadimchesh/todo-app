// import React from "react";
// import FilterStatus from "../FilterStatus/FilterStatus";
// import styles from "./style.module.scss";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StatusFilters } from "../../redux/reducerFilter";
import styles from "./style.module.scss";

const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? "" : "s";

  return (
    <label>
      {count} item{suffix} left{" "}
    </label>
  );
};

const StatusFilter = ({ value: status, onChange }) => {
  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key];
    const handleClick = () => onChange(value);

    return (
      <label className={styles.label} key={value}>
        <input type="radio" name="bottom" />
        <span onClick={handleClick}>{key}</span>
      </label>
    );
  });

  return <div className="styles.conainer">{renderedFilters}</div>;
};

const BottomControls = () => {
  const dispatch = useDispatch();

  const todosRemaining = useSelector((state) => {
    const uncompletedTodos = state.todos.filter((todo) => !todo.completed);
    return uncompletedTodos.length;
  });

  const status = useSelector((state) => state.filters);

  const onStatusChange = (status) =>
    dispatch({ type: "filters/statusFilterChanged", payload: status });

  return (
    <footer className={styles.container}>
      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
    </footer>
  );
};

export default BottomControls;
