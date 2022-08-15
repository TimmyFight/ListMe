import styles from "./PriorityFilter.module.css";
import ShortLabel from "../../Atoms/ShortLabel/ShortLabel";
import TitleH3 from "../../Atoms/TitleH3/TitleH3";

const PriorityFilter = () => {
  const toggleFilters = (event) => {
    const eventNode = event.target;
    const eventParent = event.target.parentNode;
    let tempNode = eventNode;
    let normalNotes, importantNotes;
    if (eventNode.classList.contains("filterLabel")) {
      eventNode.classList.toggle("unChecked");
    } else if (eventParent.classList.contains("filterLabel")) {
      eventParent.classList.toggle("unChecked");
      tempNode = eventParent;
    }
    if (tempNode.id === "important") {
      importantNotes = document.querySelectorAll(".importantNote");
      importantNotes.forEach((element) => {
        if (tempNode.classList.contains("unChecked")) {
          element.classList.add("hidden");
        } else {
          element.classList.remove("hidden");
        }
      });
    } else if (tempNode.id === "normal") {
      normalNotes = document.querySelectorAll(".normalNote");
      normalNotes.forEach((element) => {
        if (tempNode.classList.contains("unChecked")) {
          element.classList.add("hidden");
        } else {
          element.classList.remove("hidden");
        }
      });
    }
  };

  return (
    <section className={styles.priorityFilter} onClick={toggleFilters}>
      <TitleH3>Show me Notes:</TitleH3>
      <ShortLabel color="green" cursor="pointer" filterLabel={true}>
        Normal
      </ShortLabel>
      <ShortLabel color="red" cursor="pointer" filterLabel={true}>
        Important
      </ShortLabel>
    </section>
  );
};

export default PriorityFilter;
