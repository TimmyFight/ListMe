import styles from "./TitleH3.module.css";

const TitleH3 = ({ children }) => {
  return <h3 className={styles.titleThird}>{children}</h3>;
};

export default TitleH3;
