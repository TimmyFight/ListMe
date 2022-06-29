import { useState } from "react";
import styles from "./Home.module.css";
import AddNoteForm from "../../Modules/AddNoteForm/AddNoteForm";
import PreviewNote from "../../Modules/PreviewNote/PreviewNote";
import NotesList from "../../Modules/NotesList/NotesList";

const Home = () => {
  let [listOfNotes, setListOfNotes] = useState([]);

  const addNote = (event) => {
    event.preventDefault();
    const noteTitle = document.querySelector('[name="noteTitle"]').value;
    const noteContent = document.querySelector('[name="noteContent"]').value;
    let templistOfNotes = listOfNotes;
    const note = {
      noteTitle: noteTitle,
      noteContent: noteContent,
    };
    templistOfNotes.push(note);
    setListOfNotes([...templistOfNotes]);
    return true;
  };

  return (
    <div className={styles.appBody}>
      <AddNoteForm onSubmitHandler={addNote} />
      <section className={styles.notesContainer}>
        <NotesList listOfNotes={listOfNotes} />
        <PreviewNote />
      </section>
    </div>
  );
};

export default Home;
