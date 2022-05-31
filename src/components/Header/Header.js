import { useState } from "react";

import HeaderMenu from "./Menu/HeaderMenu";
import HeaderMenuBurger from "./Menu/HeaderMenuBurger";

import Logo from "../ui/logo/Logo";

import styles from "./styles/header.module.scss";
import MenuListBurger from "./Menu/List/MenuListBurger";

const Header = () => {
  const [open, setOpen] = useState(false);

  const clickBurger = () => {
    setOpen((prev) => !prev);
  };

  const closeBurger = () => {
    setOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__content}>
          <Logo />
          <HeaderMenu />
          <HeaderMenuBurger clickBurger={clickBurger} open={open} />
        </div>
      </div>
      {open && <MenuListBurger closeBurger={closeBurger} />}
    </header>
  );
};

export default Header;
