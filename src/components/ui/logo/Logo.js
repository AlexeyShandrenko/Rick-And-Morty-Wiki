import { Link } from "react-router-dom";

import styles from "./styles/logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/rick-and-morty-wiki" className="logo__link">
        <img
          className={styles.logo__img}
          src={process.env.PUBLIC_URL + "/images/icons/logo.png"}
          alt=""
        />
      </Link>
    </div>
  );
};

export default Logo;
