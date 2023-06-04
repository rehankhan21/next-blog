import styles from "./footer.module.css";
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
    <a
      href="https://www.credly.com/badges/8a86fff2-2f7c-4521-bd7a-0858e7f6089d/public_url"
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src="/images/site/credly-svgrepo-com.svg"
        alt="AWS Cert"
        width={300}
        height={200}
      />
    </a>
    <a
      href="https://www.linkedin.com/in/rehankhann/"
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src="/images/site/icons8-linkedin.svg"
        alt="LinkedIn"
        width={300}
        height={200}
      />
    </a>
  </footer>
);

export default Footer;
