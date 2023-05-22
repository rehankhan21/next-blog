import Image from "next/image";

import classes from "./hero.module.css";

function Hero(params) {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/coffee.jpg"
          alt="An image of coffee"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am coffee</h1>
      <p>this is a paragrah that describes me</p>
    </section>
  );
}

export default Hero;
