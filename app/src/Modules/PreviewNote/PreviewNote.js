import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./PreviewNote.module.css";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";

const PreviewNote = (props) => {
  const { activeNoteTitle, activeNoteContent, activeNoteIndex, isImportant } =
    props;
  return (
    <section
      className={classnames({
        [styles.previewNoteContainer]: true,
        [styles.imprtantNote]: isImportant,
      })}
    >
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
  isImportant: PropTypes.bool,
};

PreviewNote.defaultProps = {
  isImportant: false,
};

export default PreviewNote;
