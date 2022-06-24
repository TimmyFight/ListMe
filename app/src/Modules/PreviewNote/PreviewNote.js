import styles from "./PreviewNote.module.css";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";

const PreviewNote = () => {
  return (
    <section className={styles.previewNoteContainer}>
      <TitleH2>Note Title</TitleH2>
      <p>Your note will be here ...</p>
    </section>
  );
};

export default PreviewNote;
