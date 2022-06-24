import styles from "./AddNoteForm.module.css";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";

const AddNoteForm = () => {
  return (
    <section className={styles.noteFormContainer}>
      <TitleH2>Add note</TitleH2>
      <form>
        <input
          type="text"
          name="Note title"
          title="Note title"
          placeholder="Note title"
        />
        <textarea
          type="text"
          name="Note content"
          title="Note content"
          placeholder="Here you can write your note"
        />
      </form>
    </section>
  );
};

export default AddNoteForm;
