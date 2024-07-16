import PostsList from "@/components/Posts";
import { getLongPostsWithSleep } from "@/services/posts";

export async function getStaticProps() {
  const posts = await getLongPostsWithSleep();

  return {
    props: {
      posts,
    },
  };
}

export default function SsgPage({ posts = [] }) {
  return (
    <>
      <main>
        <h1>Welcome To The Posts Page (Static Site Generation)</h1>
        <PostsList posts={posts} />
      </main>
    </>
  );
}
