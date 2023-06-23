import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./NoteInList.module.css";
import TitleH3 from "../../Atoms/TitleH3/TitleH3";
import ShortLabel from "../../Atoms/ShortLabel/ShortLabel";

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

  useEffect(() => {
    let elementRendered = document.querySelectorAll('li[data-hidden="true"]');
    elementRendered.forEach((element) => {
      if (!element.classList.contains("hidden")) {
        element.classList.add("hidden");
      }
    });
  });

  const noteContentCut = (noteContent) => {
    let noteShorter = noteContent;
    if (noteContent.length > 50) {
      noteShorter = noteContent.substr(0, 50) + "...";
    }
    return noteShorter;
  };

  if (activeNoteIndex === indexItem) {
    tempIndex = false;
    isActive = true;
  } else {
    tempIndex = indexItem;
    isActive = false;
  }

  return (
    <li
      className={classnames({
        [styles.elementNoteList]: true,
        [styles.imprtantNote]: isImportant,
        [styles.active]: isActive,
        importantNote: isImportant,
        normalNote: !isImportant,
      })}
      data-key={indexItem}
      onClick={() => onClickHandler(tempIndex)}
    >
      {children}
      <section className={styles.titleSection}>
        <TitleH3>{noteTitle}</TitleH3>
        {isImportant && (
          <ShortLabel color="red" isGleam={true}>
            Important!
          </ShortLabel>
        )}
      </section>
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
