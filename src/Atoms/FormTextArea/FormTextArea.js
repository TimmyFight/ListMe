import PropTypes from "prop-types";
import styles from "./FormTextArea.module.css";

const FormTextArea = (props) => {
  const { type, name, title, placeholder, required, maxlength } = props;

  return (
    <textarea
      className={styles.formTextArea}
      type={type}
      name={name}
      title={title}
      placeholder={placeholder}
      required={required}
      maxLength={maxlength}
    />
  );
};

FormTextArea.propTypes = {
  maxlength: PropTypes.number,
};

FormTextArea.defaultProps = {
  type: "text",
  required: false,
  maxlength: 500,
};

export default FormTextArea;
