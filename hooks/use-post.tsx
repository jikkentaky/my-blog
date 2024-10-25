import { Post } from '@/types/post';
import { useEffect, useState } from 'react';

const usePost = (id: string | string[]): { post: Post | null, loading: boolean } => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      if (id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(response => response.json())
          .then(data => {
            setPost(data);
          });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  return { post, loading };
};

export default usePost;