import styles from "./FormTextArea.module.css";

const FormTextArea = (props) => {
  const { type, name, title, placeholder, required } = props;

  return (
    <textarea
      className={styles.formTextArea}
      type={type}
      name={name}
      title={title}
      placeholder={placeholder}
      required={required}
    />
  );
};

FormTextArea.defaultProps = {
  type: "text",
  required: false,
};

export default FormTextArea;
