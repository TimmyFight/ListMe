import styles from "./NotesList.module.css";
import PriorityFilter from "../PriorityFilter/PriorityFilter";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";

const NotesList = (props) => {
  const { children } = props;
  return (
    <section className={styles.notesListContainer}>
      <TitleH2>List of your Notes</TitleH2>
      <PriorityFilter />
      <ul className={styles.notesList}>{children}</ul>
    </section>
  );
};

export default NotesList;
