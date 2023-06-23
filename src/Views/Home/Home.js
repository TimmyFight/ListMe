import { useState } from "react";
import styles from "./Home.module.css";
import NavBar from "../../Modules/NavBar/NavBar";
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
    let addNoteForm = document.querySelector("#addNoteForm");
    let isImportant = addNoteForm.querySelector("#important");
    isImportant = isImportant ? isImportant.checked : false;
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
      isImportant: isImportant,
    };
    templistOfNotes.push(note);
    setListOfNotes([...templistOfNotes]);
    addNoteForm.classList.add("hidden");
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
      <NavBar />
      <AddNoteForm onSubmitHandler={addNote} />
      {listOfNotes.length === 0 ? (
        <ZeroNotes>Add your first Note</ZeroNotes>
      ) : (
        <section className={styles.notesContainer}>
          <NotesList listOfNotes={listOfNotes}>
            {listOfNotes.map((elem, index) => {
              return (
                <NoteInList
                  noteTitle={elem.noteTitle}
                  noteContent={elem.noteContent}
                  isImportant={elem.isImportant}
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
            isImportant={
              activeNoteIndex !== false
                ? listOfNotes[activeNoteIndex].isImportant
                : null
            }
          />
        </section>
      )}
    </div>
  );
};

export default Home;
