import styles from "./CloseButton.module.css";

const CloseButton = () => {
  const closeParrent = (event) => {
    event.target.parentNode.classList.add("hidden");
  };

  return (
    <div className={styles.closeButton} onClick={closeParrent}>
      X
    </div>
  );
};

export default CloseButton;
