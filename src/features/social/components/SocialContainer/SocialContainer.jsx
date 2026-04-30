import { useState, useEffect, useCallback, useMemo } from "react";
import Loader from "../../../../shared/components/Loader"; 
import Navbar from "../../../../shared/components/Navbar"; 
import Sidebar from "../../../../shared/components/Sidebar";
import RightBar from "../../../../shared/components/RightBar";
import CreatePost from "../CreatePost";
import PostList from "../PostList";
import { getPosts } from "../../services/api"; 
import styles from "./SocialContainer.module.css";

const names = ["Alex", "Mia", "Jordan", "Emma", "Liam", "Sophia", "Noah", "Olivia"];
const SocialContainer = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = useCallback((query) => {
  setSearchQuery(query.toLowerCase());
}, []);

const filteredPosts = useMemo(() =>
  [...posts]
    .sort((a, b) => b.id - a.id)
    .sort((a, b) => {
      const aMatch = a.userName.toLowerCase().includes(searchQuery);
      const bMatch = b.userName.toLowerCase().includes(searchQuery);
      return bMatch - aMatch; 
    }),
  [posts, searchQuery]
);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const apiPosts = await getPosts();
        const formatted = apiPosts.map(p => ({
          id: p.id,
          userName: names[p.id % names.length],
          text: p.body,
          image: `https://picsum.photos/seed/${p.id}/600/400`,
          date: "5 dəq əvvəl"
        }));
        
        const localPosts = JSON.parse(localStorage.getItem("my_posts") || "[]");
        setPosts([...localPosts, ...formatted]);
      } catch (error) {
        console.error("Postlar yüklənmədi:", error);
      } finally {
        setLoading(false); 
      }
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
      <Navbar onSearch={handleSearch}/>
      <div className={styles.mainContent}>
        <Sidebar />

        <main className={styles.feed}>
          <CreatePost onPostCreate={handleAddPost} />
          
          {loading ? (
            <div className={styles.loaderWrapper}>
              <Loader />
            </div>
          ) : (
            <PostList posts={filteredPosts } onDeletePost={handleDelete} />
          )}
        </main>
        
        <RightBar/>
      </div>
    </div>
  );
};

export default SocialContainer;