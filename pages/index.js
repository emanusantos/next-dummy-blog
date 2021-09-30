import Head from 'next/head';
import Hero from '../components/homepage/hero';
import FeaturedPosts from '../components/homepage/featured-posts';
import { getFeaturedPosts } from '../utils/posts-util';

export default function HomePage({ posts }) {
  return (
    <>
    <Head>
      <title>Emanuel{"'"}s Blog</title>
      <meta name="description" content="I post about programming and web development." />
    </Head>
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
