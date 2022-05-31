import PropTypes from "prop-types";

import styles from "./styles/wallpaper.module.scss";

const Wallpaper = ({ title }) => {
  return (
    <div className={styles.wallpaper}>
      <img
        className={styles.wallpaper__image}
        src="./images/wallpaper.jpg"
        alt=""
      />
      <p className={styles.wallpaper__text}>{title}</p>
    </div>
  );
};

Wallpaper.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Wallpaper;
