import styles from "./styles/home-list.module.scss";

const HomeList = () => {
  return (
    <ul className={styles.list}>
      <li data-testid="genre" className={styles.item}>
        <span className={styles.item__highlight}>Genre:</span> Comedy, Science
        Fiction, Adventure
      </li>
      <li className={styles.item}>
        <span className={styles.item__highlight}>Number of seasons:</span> 5
      </li>
      <li className={styles.item}>
        <span className={styles.item__highlight}>Number of episodes:</span> 51
      </li>
      <li className={styles.item}>
        <span className={styles.item__highlight}>Duration of the series:</span>{" "}
        22 min
      </li>
      <li data-testid="authors" className={styles.item}>
        <span className={styles.item__highlight}>Authors:</span> Dan Harmon,
        Justin Roiland
      </li>
      <li data-testid="directors" className={styles.item}>
        <span className={styles.item__highlight}>Directors:</span> Jeff Myers,
        Brian Newton, John Rice, Justin Royland
      </li>
      <li className={styles.item}>
        <span className={styles.item__highlight}>Composer:</span> Ryan Elder
      </li>
      <li className={styles.item}>
        <span className={styles.item__highlight}>Production:</span> Justin
        Royland&apos;s solo album Vanity, Card Productions, Dan Harmon
        Productions, Starburns Industries
      </li>
    </ul>
  );
};

export default HomeList;
