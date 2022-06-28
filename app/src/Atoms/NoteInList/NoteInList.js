import styles from "./NoteInList.module.css";

const NoteInList = (props) => {
  const { noteTitle, noteContent } = props;

  const noteContentCut = (noteContent) => {
    let noteShorter = noteContent;
    if (noteContent.length > 50) {
      noteShorter = noteContent.substr(50, noteContent.length) + "...";
    }
    return noteShorter;
  };

  return (
    <li className={styles.elementNoteList}>
      <h3 className={styles.noteTitle}>{noteTitle}</h3>
      <p className={styles.noteContent}>{noteContentCut(noteContent)}</p>
    </li>
  );
};

export default NoteInList;
