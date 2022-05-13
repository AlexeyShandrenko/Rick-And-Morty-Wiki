import { Link } from "react-router-dom";

import styles from "./styles/menu-list.module.scss";

const MenuList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.list__item}>
        <Link to="/" className={styles.list__link}>Home</Link>
      </li>
      <li className={styles.list__item}>
        <a href="#" className={styles.list__link}>Characters</a>
      </li>
    </ul>
  );
};

export default MenuList;
