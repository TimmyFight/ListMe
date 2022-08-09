import PropTypes from "prop-types";
import styles from "./RadioInput.module.css";

const RadioInput = (props) => {
  let { children, group, defaultChecked } = props;
  const convertChildrenToId = (children) => {
    children = children.toLowerCase().replace(/ /g, "_");
    return children;
  };
  return (
    <div className={styles.radioInput}>
      <input
        type="radio"
        id={convertChildrenToId(children)}
        name={group}
        value={children}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={convertChildrenToId(children)}>{children}</label>
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
