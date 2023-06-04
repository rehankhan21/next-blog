import Image from "next/image";

import classes from "./post-header.module.css";

function PostHeader(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image} `;

  return (
    <header className={classes.header}>
      <h1>{post.title}</h1>
      <Image src={imagePath} alt={post.title} width={200} height={150} />
    </header>
  );
}

export default PostHeader;
