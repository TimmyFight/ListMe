import styles from "./NotesList.module.css";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";
import NoteInList from "../../Atoms/NoteInList/NoteInList";

const NotesList = (props) => {
  const { listOfNotes } = props;
  return (
    <section className={styles.notesListContainer}>
      <TitleH2>List of your Notes</TitleH2>
      <ul className={styles.notesList}>
        {listOfNotes.map((elem, index) => {
          return (
            <NoteInList
              noteTitle={elem.noteTitle}
              noteContent={elem.noteContent}
              key={index}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default NotesList;
