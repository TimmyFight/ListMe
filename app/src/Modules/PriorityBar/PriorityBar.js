import styles from "./PriorityBar.module.css";
import RadioInput from "../../Atoms/RadioInput/RadioInput";
import TitleH3 from "../../Atoms/TitleH3/TitleH3";

const PriorityBar = () => {
  return (
    <section className={styles.priorityBar}>
      <TitleH3>Priority</TitleH3>
      <div className={styles.radioContainer}>
        <RadioInput defaultChecked={true}>Normal</RadioInput>
        <RadioInput>Important</RadioInput>
      </div>
    </section>
  );
};

export default PriorityBar;
