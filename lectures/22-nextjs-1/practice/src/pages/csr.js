import PostsList from "@/components/Posts";
import { getLongPostsWithSleep } from "@/services/posts";
import { useEffect, useState } from "react";

export default function CsrPage() {
  const [postsData, setPostsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        return await getLongPostsWithSleep();
      } catch {
        alert("Smth Went Wrong While Posts Fetcing");
        return [];
      } finally {
        setIsLoading(false);
      }
    };

    const initPosts = async () => {
      const fetchedPosts = await fetchPosts();
      setPostsData(fetchedPosts);
    };

    initPosts();
  }, []);

  return (
    <>
      <main>
        <h1>Welcome To The Posts Page (Client Side Rendering)</h1>
        {isLoading && <h2>Loading Posts....</h2>}
        {!isLoading && <PostsList posts={postsData} />}
      </main>
    </>
  );
}
