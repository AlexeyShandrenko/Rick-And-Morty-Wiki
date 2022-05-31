import styles from "./styles/header-menu.module.scss";

import MenuList from "./List/MenuList";

const HeaderMenu = () => {
  return (
    <nav className={styles.menu}>
      <MenuList />
    </nav>
  );
};

export default HeaderMenu;
