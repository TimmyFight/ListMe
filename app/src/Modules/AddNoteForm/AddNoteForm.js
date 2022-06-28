import styles from "./AddNoteForm.module.css";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";

const AddNoteForm = (props) => {
  const { onSubmitHandler } = props;

  return (
    <section className={styles.noteFormContainer}>
      <TitleH2>Add note</TitleH2>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="noteTitle"
          title="Note title"
          placeholder="Note title"
        />
        <textarea
          type="text"
          name="noteContent"
          title="Note content"
          placeholder="Here you can write your note"
        />
        <button type="submit" value="Send Request">
          Send Request
        </button>
      </form>
    </section>
  );
};

export default AddNoteForm;
