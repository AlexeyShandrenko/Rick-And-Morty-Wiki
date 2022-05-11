import HeaderMenu from "./Menu/HeaderMenu";

import Logo from "../ui/logo/Logo";

import styles from "./styles/header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__content}>
          <Logo />
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
