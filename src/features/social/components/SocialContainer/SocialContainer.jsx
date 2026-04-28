import { useState, useEffect, useCallback, useMemo } from "react";
import Navbar from "/src/shared/components/Navbar";
import Sidebar from "/src/shared/components/Sidebar";
import CreatePost from "../CreatePost";
import PostList from "../PostList";
import { getPosts } from "/src/services/api";
import styles from "./SocialContainer.module.css";
import RightBar from "../../../../shared/components/RightBar";

const SocialContainer = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const apiPosts = await getPosts();
      const formatted = apiPosts.map(p => ({
        id: p.id,
        userName: `User ${p.userId}`,
        text: p.body,
        image: `https://picsum.photos/seed/${p.id}/600/400`,
        date: "5 dəq əvvəl"
      }));
      const localPosts = JSON.parse(localStorage.getItem("my_posts") || "[]");
      setPosts([...localPosts, ...formatted]);
      setLoading(false);
    };
    loadPosts();
  }, []);

  const handleAddPost = useCallback((newPost) => {
    setPosts(prev => [newPost, ...prev]);
    const localPosts = JSON.parse(localStorage.getItem("my_posts") || "[]");
    localStorage.setItem("my_posts", JSON.stringify([newPost, ...localPosts]));
  }, []);

  const handleDelete = useCallback((id) => {
    setPosts(prev => prev.filter(p => p.id !== id));
    const localPosts = JSON.parse(localStorage.getItem("my_posts") || "[]");
    localStorage.setItem("my_posts", JSON.stringify(localPosts.filter(p => p.id !== id)));
  }, []);

  const sortedPosts = useMemo(() =>
    [...posts].sort((a, b) => b.id - a.id),
  [posts]);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainContent}>
        <Sidebar />

        <main className={styles.feed}>
          <CreatePost onPostCreate={handleAddPost} />
          {loading
            ? <p style={{ color: "#9ca3af" }}>Yüklənir...</p>
            : <PostList posts={sortedPosts} onDeletePost={handleDelete} />
          }
        </main>
        <RightBar/>
      </div>
    </div>
  );
};

export default SocialContainer;