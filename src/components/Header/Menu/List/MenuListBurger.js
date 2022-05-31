import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import {
  HEADER_HOME,
  HEADER_CHARACTERS,
  HEADER_EPISODES,
  HEADER_LOCATIONS,
} from "../../../../config/constants/constants";

import styles from "./styles/menu-list-burger.module.scss";

const MenuListBurger = ({ closeBurger }) => {
  return (
    <nav className={styles.menu}>
      <ul data-testid="header-list" className={styles.list}>
        <li className={styles.list__item}>
          <Link
            onClick={closeBurger}
            to="/"
            data-testid="header-item"
            className={styles.list__link}
          >
            {HEADER_HOME}
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link
            onClick={closeBurger}
            to="/characters"
            data-testid="header-item"
            className={styles.list__link}
          >
            {HEADER_CHARACTERS}
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link
            onClick={closeBurger}
            to="/episodes"
            data-testid="header-item"
            className={styles.list__link}
          >
            {HEADER_EPISODES}
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link
            onClick={closeBurger}
            to="/locations"
            data-testid="header-item"
            className={styles.list__link}
          >
            {HEADER_LOCATIONS}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

MenuListBurger.propTypes = {
  closeBurger: PropTypes.func.isRequired,
};

export default MenuListBurger;
