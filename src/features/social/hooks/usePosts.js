import { useState, useEffect } from 'react';
import { getPosts } from '../../../services/api'; 

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return { posts, loading };
};