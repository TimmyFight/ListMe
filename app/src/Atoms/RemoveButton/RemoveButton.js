import styles from "./RemoveButton.module.css";

const RemoveButton = (props) => {
  const { onClickHandler } = props;

  return (
    <button className={styles.removeButton} onClick={onClickHandler}>
      X
    </button>
  );
};

export default RemoveButton;
