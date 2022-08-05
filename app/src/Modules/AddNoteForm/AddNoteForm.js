import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./AddNoteForm.module.css";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";
import FormInput from "../../Atoms/FormInput/FormInput";
import FormTextArea from "../../Atoms/FormTextArea/FormTextArea";
import FormButton from "../../Atoms/FormButton/FormButton";
import CloseButton from "../../Atoms/CloseButton/CloseButton";

const AddNoteForm = (props) => {
  const { onSubmitHandler } = props;

  return (
    <section
      id="addNoteForm"
      className={classnames({
        [styles.noteFormContainer]: true,
        hidden: true,
      })}
    >
      <CloseButton />
      <div className={styles.noteFormBody}>
        <TitleH2>Add your new note</TitleH2>
        <form id="noteForm" onSubmit={onSubmitHandler}>
          <FormInput
            type="text"
            name="noteTitle"
            title="Note title"
            placeholder="Note title"
            required="required"
          />
          <FormTextArea
            type="text"
            name="noteContent"
            title="Note content"
            placeholder="Here you can write your note"
            required="required"
          />
          <FormButton type="submit">Add Note</FormButton>
        </form>
      </div>
    </section>
  );
};

AddNoteForm.propTypes = {
  onClickHandler: PropTypes.func,
};

export default AddNoteForm;
