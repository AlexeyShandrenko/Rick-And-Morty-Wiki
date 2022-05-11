import styles from "./styles/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className="footer__text">
          ❮❯ by{" "}
          <a
            href="https://github.com/AlexeyShandrenko"
            className={styles.footer__link}
          >
            Alexey Shandrenko
          </a>{" "}
          2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;
