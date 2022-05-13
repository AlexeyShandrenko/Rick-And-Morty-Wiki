import styles from "./styles/home.module.scss";

import HomeList from "./List/HomeList";

const Home = () => {
  return (
    <section className={styles.home}>
      <h1 className={styles.home__title}>About animated series</h1>
      <div className={styles.content}>
        <div className={styles.content__info}>
          <p className={styles.description}>
            <span className={styles.description__highlight}>
              Rick and Morty
            </span>{" "}
            is an American animated series created by Dan Harmon and Justin
            Roiland, which premiered on December 2, 2013 in the Adult Swim
            programming block on Cartoon Network. The 5th season was released on
            June 20, 2021.
          </p>
          <HomeList />
        </div>
        <div className={styles.content__img}>
          <img
            className={styles.img}
            src="./images/home.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
