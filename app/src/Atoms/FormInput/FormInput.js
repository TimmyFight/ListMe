import styles from "./FormInput.module.css";

const FormInput = (props) => {
  const { type, name, title, placeholder, required } = props;

  return (
    <input
      className={styles.formInput}
      type={type}
      name={name}
      title={title}
      placeholder={placeholder}
      required={required}
    />
  );
};

FormInput.defaultProps = {
  type: "text",
  required: false,
};

export default FormInput;
