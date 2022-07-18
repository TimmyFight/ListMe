import { useState } from "react";
import styles from "./Home.module.css";
import AddNoteForm from "../../Modules/AddNoteForm/AddNoteForm";
import PreviewNote from "../../Modules/PreviewNote/PreviewNote";
import NotesList from "../../Modules/NotesList/NotesList";
import NoteInList from "../../Atoms/NoteInList/NoteInList";
import RemoveButton from "../../Atoms/RemoveButton/RemoveButton";

const Home = () => {
  let [listOfNotes, setListOfNotes] = useState([]);

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
    const itemToRemove = event.target.parentNode.getAttribute("data-key");
    let templistOfNotes = listOfNotes;
    templistOfNotes.splice(itemToRemove, 1);
    setListOfNotes([...templistOfNotes]);
    return true;
  };

  return (
    <div className={styles.appBody}>
      <AddNoteForm onSubmitHandler={addNote} />
      <section className={styles.notesContainer}>
        <NotesList listOfNotes={listOfNotes}>
          {listOfNotes.map((elem, index) => {
            return (
              <NoteInList
                noteTitle={elem.noteTitle}
                noteContent={elem.noteContent}
                indexItem={index}
                key={index}
              >
                <RemoveButton onClickHandler={removeNote} />
              </NoteInList>
            );
          })}
        </NotesList>
        <PreviewNote />
      </section>
    </div>
  );
};

export default Home;
