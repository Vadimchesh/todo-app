import React from "react";
import styles from "./style.module.scss";
import PropTypes from "prop-types";

const FilterStatus = ({ active, onClick }) => (
  <div className={styles.container}>
    <label className={styles.label}>
      <input type="radio" onClick={onClick} checked={active} name="bottom" />
      <span>All</span>
    </label>
    <label className={styles.label}>
      <input type="radio" onClick={onClick} checked={active} name="bottom" />
      <span>Active</span>
    </label>
    <label className={styles.label}>
      <input type="radio" onClick={onClick} checked={active} name="bottom" />
      <span>Completed</span>
    </label>
  </div>
);

FilterStatus.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default FilterStatus;
