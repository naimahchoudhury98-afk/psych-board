import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      fetch("https://psych-board.onrender.com/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data));
    };
    fetchPosts();
    const interval = setInterval(fetchPosts, 5000);
    return () => clearInterval(interval);
  }, []);

  async function deletePost(id) {
    await fetch(`https://psych-board.onrender.com/posts/${id}`, { method: "DELETE" });
    setPosts(posts.filter((post) => post.id !== id));
  }

  return (
    <div className="max-w-xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">MindFeed 🧠</h1>
      {posts.map((post) => (
        <div key={post.id} className="border-b p-4 hover:bg-gray-50 cursor-pointer">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                {post.author ? post.author[0].toUpperCase() : "?"}
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="font-bold">{post.author}</span>
                <span className="text-gray-400 text-sm">{new Date(post.created_at).toLocaleDateString()}</span>
              </div>
              <Link to={`/posts/${post.id}`}>
                <p className="font-semibold mt-1">{post.title}</p>
              </Link>
              <p className="text-gray-600 mt-1">{post.content}</p>
              <button onClick={() => deletePost(post.id)} className="text-red-400 text-sm mt-2">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}