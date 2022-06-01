import { Link } from "react-router-dom";

import styles from "./styles/logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/" className="logo__link">
        <img className={styles.logo__img} src="./images/icons/logo.png" />
      </Link>
    </div>
  );
};

export default Logo;
