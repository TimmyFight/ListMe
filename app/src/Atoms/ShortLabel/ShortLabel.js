import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./ShortLabel.module.css";

const ShortLabel = (props) => {
  let { children, color } = props;
  return (
    <div
      className={classnames({
        [styles.shortLabel]: true,
        [styles.green]: color === "green",
        [styles.red]: color === "red",
      })}
    >
      <p>{children}</p>
    </div>
  );
};

ShortLabel.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
};

ShortLabel.defaultProps = {
  color: "green",
};

export default ShortLabel;
