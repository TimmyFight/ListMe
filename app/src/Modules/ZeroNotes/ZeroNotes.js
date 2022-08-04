import styles from "./ZeroNotes.module.css";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";
import OpenFormButton from "../../Atoms/OpenFormButton/OpenFormButton";

const ZeroNotes = (props) => {
  const { children } = props;
  return (
    <section className={styles.zeroNotes}>
      <TitleH2>{children}</TitleH2>
      <OpenFormButton />
    </section>
  );
};

export default ZeroNotes;
