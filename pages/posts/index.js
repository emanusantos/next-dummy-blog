import Head from 'next/head';
import AllPosts from "../../components/posts/all-posts";

import { getAllPosts } from "../../utils/posts-util";

const Posts = ({ posts }) => {
    return (
        <>
        <Head>
          <title>All my posts</title>
          <meta name="description" content="A list of all programming-related posts." />
        </Head>
        <AllPosts posts={posts} />
        </>
    );
};

export default Posts;

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  }
}