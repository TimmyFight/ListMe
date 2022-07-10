import styles from "./AddNoteForm.module.css";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";

const AddNoteForm = (props) => {
  const { onSubmitHandler } = props;

  return (
    <section className={styles.noteFormContainer}>
      <TitleH2>Add note</TitleH2>
      <form id="noteForm" onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="noteTitle"
          title="Note title"
          placeholder="Note title"
          required="required"
        />
        <textarea
          type="text"
          name="noteContent"
          title="Note content"
          placeholder="Here you can write your note"
          required="required"
        />
        <button type="submit" value="Send Request">
          Send Request
        </button>
      </form>
    </section>
  );
};

export default AddNoteForm;
