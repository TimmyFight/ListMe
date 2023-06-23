import PropTypes from "prop-types";
import styles from "./FormInput.module.css";

const FormInput = (props) => {
  const { type, name, title, placeholder, required, autocomplete, maxlength } =
    props;

  return (
    <input
      className={styles.formInput}
      type={type}
      name={name}
      title={title}
      placeholder={placeholder}
      required={required}
      autoComplete={autocomplete}
      maxLength={maxlength}
    />
  );
};

FormInput.propTypes = {
  maxlength: PropTypes.number,
};

FormInput.defaultProps = {
  type: "text",
  required: false,
  autocomplete: "off",
  maxlength: 35,
};

export default FormInput;
