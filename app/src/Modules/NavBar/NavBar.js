import styles from "./NavBar.module.css";
import OpenFormButton from "../../Atoms/OpenFormButton/OpenFormButton";
import Logo from "../../Atoms/Logo/Logo";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Logo />
      <OpenFormButton>Open form and add new note</OpenFormButton>
    </nav>
  );
};

export default NavBar;
