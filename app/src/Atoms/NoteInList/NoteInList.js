import styles from "./NoteInList.module.css";
import TitleH3 from "../../Atoms/TitleH3/TitleH3";

const NoteInList = (props) => {
  const { noteTitle, noteContent, indexItem, children } = props;

  const noteContentCut = (noteContent) => {
    let noteShorter = noteContent;
    if (noteContent.length > 50) {
      noteShorter = noteContent.substr(50, noteContent.length) + "...";
    }
    return noteShorter;
  };

  return (
    <li className={styles.elementNoteList} data-key={indexItem}>
      {children}
      <TitleH3>{noteTitle}</TitleH3>
      <p className={styles.noteContent}>{noteContentCut(noteContent)}</p>
    </li>
  );
};

export default NoteInList;
