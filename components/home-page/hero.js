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
