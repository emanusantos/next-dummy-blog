import Hero from '../components/homepage/hero'
import FeaturedPosts from '../components/homepage/featured-posts'

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs', 
    title: 'Getting started with NextJS', 
    image: 'getting-started-nextjs.png', 
    excerpt: 
    'NextJS is the React framework for production - it makes building fullstack React and sites a breeze and ships with built-in server-side rendering.', 
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2', 
    title: 'Getting started with NextJS', 
    image: 'getting-started-nextjs.png', 
    excerpt: 
    'NextJS is the React framework for production - it makes building fullstack React and sites a breeze and ships with built-in server-side rendering.', 
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs3', 
    title: 'Getting started with NextJS', 
    image: 'getting-started-nextjs.png', 
    excerpt: 
    'NextJS is the React framework for production - it makes building fullstack React and sites a breeze and ships with built-in server-side rendering.', 
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs4', 
    title: 'Getting started with NextJS', 
    image: 'getting-started-nextjs.png', 
    excerpt: 
    'NextJS is the React framework for production - it makes building fullstack React and sites a breeze and ships with built-in server-side rendering.', 
    date: '2022-02-10',
  },
]

export default function HomePage() {
  return (
    <>
    <Hero />
    <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  )
}
