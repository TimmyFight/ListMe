import styles from "./Home.module.css";
import AddNoteForm from "../../Modules/AddNoteForm/AddNoteForm";
import PreviewNote from "../../Modules/PreviewNote/PreviewNote";
import NotesList from "../../Modules/NotesList/NotesList";

const Home = () => {
  return (
    <div className={styles.appBody}>
      <AddNoteForm />
      <section className={styles.notesContainer}>
        <NotesList />
        <PreviewNote />
      </section>
    </div>
  );
};

export default Home;
