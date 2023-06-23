import PropTypes from "prop-types";
import styles from "./RemoveButton.module.css";

const RemoveButton = (props) => {
  const { onClickHandler } = props;

  return (
    <button className={styles.removeButton} onClick={onClickHandler}>
      X
    </button>
  );
};

RemoveButton.propTypes = {
  onClickHandler: PropTypes.func,
};

export default RemoveButton;
