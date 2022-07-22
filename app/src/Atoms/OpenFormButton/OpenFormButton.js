import styles from "./OpenFormButton.module.css";

const OpenFormButton = (props) => {
  const { children } = props;
  return (
    <button className={styles.openFormButton} value={children}>
      {children}
    </button>
  );
};

export default OpenFormButton;
