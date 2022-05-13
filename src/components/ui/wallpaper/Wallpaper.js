import styles from "./styles/wallpaper.module.scss";

const Wallpaper = () => {
  return (
    <div className={styles.wallpaper}>
      <img
        className={styles.wallpaper__image}
        src="./images/wallpaper.jpg"
        alt=""
      />
      <p className={styles.wallpaper__text}>Rick and Morty Wiki</p>
    </div>
  );
};

export default Wallpaper;
