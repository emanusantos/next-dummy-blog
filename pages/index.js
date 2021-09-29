import Hero from '../components/homepage/hero'
import FeaturedPosts from '../components/homepage/featured-posts'
import { getFeaturedPosts } from '../utils/posts-util'

export default function HomePage({ posts }) {
  return (
    <>
    <Hero />
    <FeaturedPosts posts={posts} />
    </>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
}
