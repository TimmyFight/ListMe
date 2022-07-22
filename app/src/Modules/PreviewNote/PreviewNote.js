import PropTypes from "prop-types";
import styles from "./PreviewNote.module.css";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";

const PreviewNote = (props) => {
  const { activeNoteTitle, activeNoteContent, activeNoteIndex } = props;
  return (
    <section className={styles.previewNoteContainer}>
      <TitleH2>
        {activeNoteIndex === false ||
        activeNoteContent === null ||
        activeNoteTitle === null
          ? "Click on your Note!"
          : activeNoteTitle}
      </TitleH2>
      <p>
        {activeNoteIndex === false ||
        activeNoteContent === null ||
        activeNoteTitle === null
          ? "Here will be your full active note"
          : activeNoteContent}
      </p>
    </section>
  );
};

PreviewNote.propTypes = {
  activeNoteIndex: PropTypes.number,
};

export default PreviewNote;
