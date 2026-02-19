import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

 useEffect(() => {
  const fetchPosts = () => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  fetchPosts();

  const interval = setInterval(fetchPosts, 5000);

  return () => clearInterval(interval);
}, []);

  return (
    <div>
      <h1>Psych Board 🧠</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.author}</p>
        </div>
      ))}
    </div>
  );
}