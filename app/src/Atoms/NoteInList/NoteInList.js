import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./NoteInList.module.css";
import TitleH3 from "../../Atoms/TitleH3/TitleH3";

const NoteInList = (props) => {
  const {
    noteTitle,
    noteContent,
    indexItem,
    onClickHandler,
    activeNoteIndex,
    isImportant,
    children,
  } = props;
  let tempIndex, isActive;

  const noteContentCut = (noteContent) => {
    let noteShorter = noteContent;
    if (noteContent.length > 50) {
      noteShorter = noteContent.substr(0, 50) + "...";
    }
    return noteShorter;
  };

  if (activeNoteIndex === indexItem) {
    tempIndex = false;
    isActive = false;
  } else {
    tempIndex = indexItem;
    isActive = true;
  }

  return (
    <li
      className={classnames({
        [styles.elementNoteList]: true,
        [styles.imprtantNote]: isImportant,
        [styles.active]: isActive,
      })}
      data-key={indexItem}
      onClick={() => onClickHandler(tempIndex)}
    >
      {children}
      <TitleH3>{noteTitle}</TitleH3>
      <p className={styles.noteContent}>{noteContentCut(noteContent)}</p>
    </li>
  );
};

NoteInList.propTypes = {
  indexItem: PropTypes.number,
  onClickHandler: PropTypes.func,
  isImportant: PropTypes.bool,
};

NoteInList.defaultProps = {
  isImportant: false,
};

export default NoteInList;
