import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./ShortLabel.module.css";

const ShortLabel = (props) => {
  let { children, color, cursor, filterLabel, isGleam } = props;
  const convertChildrenToId = (children) => {
    children = children.toLowerCase().replace(/ /g, "_");
    return children;
  };
  return (
    <div
      className={classnames({
        [styles.shortLabel]: true,
        [styles.isGleam]: isGleam,
        [styles.green]: color === "green",
        [styles.red]: color === "red",
        [styles.grey]: color === "black",
        [styles.pointer]: cursor === "pointer",
        filterLabel: filterLabel,
      })}
      id={filterLabel ? convertChildrenToId(children) : ""}
    >
      <p>{children}</p>
    </div>
  );
};

ShortLabel.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  isGleam: PropTypes.bool,
};

ShortLabel.defaultProps = {
  color: "black",
  isGleam: false,
  filterLabel: false,
};

export default ShortLabel;
