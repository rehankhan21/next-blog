import { Fragment } from "react";
import Head from "next/head";

import Hero from "../../components/home-page/hero";
import FeaturedPosts from "../../components/home-page/featured-posts";
import getFeaturedPosts from "../../lib/posts-util";

function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Welcome to my portfolio" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 600,
  };
}

export default Home;
