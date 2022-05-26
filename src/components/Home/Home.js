import styles from "./styles/home.module.scss";

import {
  HOME_ABOUT,
  HOME_HIGHLIGHT,
  HOME_DESCRIPTION,
} from "../../config/constants/constants";

import HomeList from "./List/HomeList";

const Home = () => {
  return (
    <section className={styles.home}>
      <h1 className={styles.home__title}>{HOME_ABOUT}</h1>
      <div className={styles.content}>
        <div className={styles.content__info}>
          <p className={styles.description}>
            <span className={styles.description__highlight}>
              {HOME_HIGHLIGHT}
            </span>{" "}
            {HOME_DESCRIPTION}
          </p>
          <HomeList />
        </div>
        <div className={styles.content__img}>
          <img className={styles.img} src="./images/home.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
