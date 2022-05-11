import { Link } from "react-router-dom";

import styles from "./styles/menu-list.module.scss";

const MenuList = () => {
  return (
    <ul className={styles.menu__list}>
      <li className={styles.menu__item}>
        <Link to="/" className={styles.menu__link}>Home</Link>
      </li>
      <li className={styles.menu__item}>
        <a href="#" className={styles.menu__link}>Characters</a>
      </li>
    </ul>
  );
};

export default MenuList;
