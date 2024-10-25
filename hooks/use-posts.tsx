import { Post } from "@/types/post";
import { useState, useEffect } from "react";

export default function usePosts(): Post[] {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data));
    } catch (error) {
      console.log(error);
    }

  }, []);

  return posts;
}
