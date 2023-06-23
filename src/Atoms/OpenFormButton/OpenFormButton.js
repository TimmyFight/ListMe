import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./OpenFormButton.module.css";

const OpenFormButton = (props) => {
  let showAddNoteForm = (event) => {
    let addNoteForm = document.querySelector("#addNoteForm");
    event.preventDefault();
    addNoteForm.classList.remove("hidden");
  };

  const { children, revertColors } = props;
  return (
    <button
      className={classnames({
        [styles.openFormButton]: true,
        [styles.revertColors]: revertColors,
      })}
      value={children}
      onClick={showAddNoteForm}
    >
      {children}
    </button>
  );
};

OpenFormButton.defaultProps = {
  revertColors: false,
  children: "Open form and add new Note",
};

OpenFormButton.propTypes = {
  revertColors: PropTypes.bool,
};

export default OpenFormButton;
