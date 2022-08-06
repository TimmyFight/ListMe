import PropTypes from "prop-types";
import styles from "./RadioInput.module.css";

const RadioInput = (props) => {
  let { children, group, defaultChecked } = props;
  return (
    <div className={styles.radioInput}>
      <input
        type="radio"
        id={children}
        name={group}
        value={children}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={children}>{children}</label>
    </div>
  );
};

RadioInput.propTypes = {
  children: PropTypes.string,
  group: PropTypes.string,
  defaultChecked: PropTypes.bool,
};

RadioInput.defaultProps = {
  group: "priority",
  defaultChecked: false,
};

export default RadioInput;
