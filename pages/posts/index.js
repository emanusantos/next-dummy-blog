import AllPosts from "../../components/posts/all-posts";

import { getAllPosts } from "../../utils/posts-util";

const Posts = ({ posts }) => {
    return (
        <AllPosts posts={posts} />
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