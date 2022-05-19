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

export default Wallpaper;
