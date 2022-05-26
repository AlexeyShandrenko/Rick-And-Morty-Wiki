import { Link } from "react-router-dom";

import {
  HEADER_HOME,
  HEADER_CHARACTERS,
  HEADER_EPISODES,
  HEADER_LOCATIONS,
} from "../../../../config/constants/constants";

import styles from "./styles/menu-list.module.scss";

const MenuList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.list__item}>
        <Link to="/" className={styles.list__link}>
          {HEADER_HOME}
        </Link>
      </li>
      <li className={styles.list__item}>
        <Link to="/characters" className={styles.list__link}>
          {HEADER_CHARACTERS}
        </Link>
      </li>
      <li className={styles.list__item}>
        <Link to="/episodes" className={styles.list__link}>
          {HEADER_EPISODES}
        </Link>
      </li>
      <li className={styles.list__item}>
        <Link to="/locations" className={styles.list__link}>
          {HEADER_LOCATIONS}
        </Link>
      </li>
    </ul>
  );
};

export default MenuList;
