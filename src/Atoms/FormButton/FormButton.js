import styles from "./FormButton.module.css";

const FormButton = (props) => {
  const { type, children } = props;

  return (
    <button className={styles.FormButton} type={type} value={children}>
      {children}
    </button>
  );
};

FormButton.defaultProps = {
  type: "submit",
  children: "Send",
};

export default FormButton;
