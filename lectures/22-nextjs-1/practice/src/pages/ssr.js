import PostsList from '@/components/Posts';
import {getLongPostsWithSleep} from '@/services/posts';

export async function getServerSideProps() {
  const posts = await getLongPostsWithSleep();

  return {
    props: {
      posts,
    },
  };
}

export default function SsrPage({posts = []}) {
  return (
    <>
      <main>
        <h1>Welcome To The Posts Page (Server Side Rendering)</h1>
        <PostsList posts={posts} />
      </main>
    </>
  );
}
