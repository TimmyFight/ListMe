import styles from "./NotesList.module.css";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";

const NotesList = () => {
  return (
    <section className={styles.notesListContainer}>
      <TitleH2>List of your Notes</TitleH2>
      <ul>
        <li>Fist Note</li>
      </ul>
    </section>
  );
};

export default NotesList;
