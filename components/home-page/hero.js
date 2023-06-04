import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/me.jpg"
          alt="An image of me"
          width={300}
          height={300}
          style={{ objectFit: "contain" }}
        />
      </div>
      <h1>Rehan Khan</h1>
      <div>
        <ul>
          <li>
            <a
              href="https://github.com/rehankhan21"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/images/site/github-mark-white.svg"
                alt="Github"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rehankhann/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/images/site/icons8-linkedin.svg"
                alt="LinkedIn"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.credly.com/badges/8a86fff2-2f7c-4521-bd7a-0858e7f6089d/public_url"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/images/site/credly-svgrepo-com.svg"
                alt="AWS Cert"
                width={50}
                height={50}
              />
            </a>
          </li>
        </ul>
      </div>
      <p>
        I am a Full-Stack Developer with a Bachelors in Computer Science. I have
        a strong interest in developing quality software that meets client
        requirements. I have worked in team environments following the Agile
        development methodology.
      </p>
      <br></br>
      <p>
        I created this website using technologies such as React, TypeScript,
        NextJS, CSS, NodeJS, and MongoDB. I made a few blog post down below that
        go into these technologies in more detail.
      </p>
    </section>
  );
}

export default Hero;
