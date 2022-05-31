import styles from "./styles/header-menu.module.scss";

import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

const HeaderMenuBurger = ({ clickBurger, open }) => {
  const burgerIcon = (
    <AiOutlineMenu
      className={styles.burger}
      size="30px"
      color="#282828"
      onClick={clickBurger}
    />
  );

  const closeIcon = (
    <GrClose
      className={styles.close}
      size="30px"
      color="#282828"
      onClick={clickBurger}
    />
  );

  return (
    <nav className={styles.menuBurger}>{open ? closeIcon : burgerIcon}</nav>
  );
};

export default HeaderMenuBurger;
