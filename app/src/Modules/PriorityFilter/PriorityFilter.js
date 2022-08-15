import styles from "./PriorityFilter.module.css";
import ShortLabel from "../../Atoms/ShortLabel/ShortLabel";
import TitleH3 from "../../Atoms/TitleH3/TitleH3";

const PriorityFilter = () => {
  return (
    <section className={styles.priorityFilter}>
      <TitleH3>Filter by Priority:</TitleH3>
      <ShortLabel color="green">Normal</ShortLabel>
      <ShortLabel color="red">Important</ShortLabel>
    </section>
  );
};

export default PriorityFilter;
