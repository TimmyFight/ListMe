import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./OpenFormButton.module.css";

const OpenFormButton = (props) => {
  const { children, revertColors } = props;
  return (
    <button
      className={classnames({
        [styles.openFormButton]: true,
        [styles.revertColors]: revertColors,
      })}
      value={children}
    >
      {children}
    </button>
  );
};

OpenFormButton.defaultProps = {
  revertColors: false,
};

OpenFormButton.propTypes = {
  revertColors: PropTypes.bool,
};

export default OpenFormButton;
