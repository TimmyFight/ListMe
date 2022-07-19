import { useState } from "react";
import styles from "./Home.module.css";
import AddNoteForm from "../../Modules/AddNoteForm/AddNoteForm";
import PreviewNote from "../../Modules/PreviewNote/PreviewNote";
import NotesList from "../../Modules/NotesList/NotesList";
import ZeroNotes from "../../Modules/ZeroNotes/ZeroNotes";
import NoteInList from "../../Atoms/NoteInList/NoteInList";
import RemoveButton from "../../Atoms/RemoveButton/RemoveButton";

const Home = () => {
  let [listOfNotes, setListOfNotes] = useState([]);
  let [activeNoteIndex, setActiveNoteIndex] = useState(false);

  const addNote = (event) => {
    event.preventDefault();
    let noteTitle = document.querySelector(
      '#noteForm [name="noteTitle"]'
    ).value;
    let noteContent = document.querySelector(
      '#noteForm [name="noteContent"]'
    ).value;

    let templistOfNotes = listOfNotes;
    const note = {
      noteTitle: noteTitle,
      noteContent: noteContent,
    };
    templistOfNotes.push(note);
    setListOfNotes([...templistOfNotes]);
    return true;
  };

  const removeNote = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const itemToRemove = event.target.parentNode.getAttribute("data-key");
    let templistOfNotes = listOfNotes;
    templistOfNotes.splice(itemToRemove, 1);
    setListOfNotes([...templistOfNotes]);
    setActiveNoteIndex(false);
    return true;
  };

  return (
    <div className={styles.appBody}>
      <AddNoteForm onSubmitHandler={addNote} />
      {listOfNotes.length === 0 ? (
        <section className={styles.zeroNotes}>
          <ZeroNotes />
        </section>
      ) : (
        <section className={styles.notesContainer}>
          <NotesList listOfNotes={listOfNotes}>
            {listOfNotes.map((elem, index) => {
              return (
                <NoteInList
                  noteTitle={elem.noteTitle}
                  noteContent={elem.noteContent}
                  indexItem={index}
                  key={index}
                  activeNoteIndex={activeNoteIndex}
                  onClickHandler={setActiveNoteIndex}
                >
                  <RemoveButton onClickHandler={removeNote} />
                </NoteInList>
              );
            })}
          </NotesList>
          <PreviewNote
            activeNoteTitle={
              activeNoteIndex !== false
                ? listOfNotes[activeNoteIndex].noteTitle
                : null
            }
            activeNoteContent={
              activeNoteIndex !== false
                ? listOfNotes[activeNoteIndex].noteContent
                : null
            }
            activeNoteIndex={activeNoteIndex}
          />
        </section>
      )}
    </div>
  );
};

export default Home;
