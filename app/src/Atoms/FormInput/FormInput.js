import styles from "./FormInput.module.css";

const FormInput = (props) => {
  const { type, name, title, placeholder, required, autocomplete } = props;

  return (
    <input
      className={styles.formInput}
      type={type}
      name={name}
      title={title}
      placeholder={placeholder}
      required={required}
      autoComplete={autocomplete}
    />
  );
};

FormInput.defaultProps = {
  type: "text",
  required: false,
  autocomplete: "off",
};

export default FormInput;
