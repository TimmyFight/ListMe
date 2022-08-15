import styles from "./TitleH4.module.css";

const TitleH4 = ({ children }) => {
  return <h4 className={styles.titleThird}>{children}</h4>;
};

export default TitleH4;
