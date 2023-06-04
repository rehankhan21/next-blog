import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => (
  <footer className={styles.footer}>
    <a href="https://github.com/rehankhan21" target="_blank" rel="noreferrer">
      <Image
        src="/images/site/github-mark-white.svg"
        alt="Github"
        width={300}
        height={200}
      />
    </a>
  </footer>
);

export default Footer;
