import { useState, useEffect } from "react";
import { Link } from "react-router";

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

   async function deletePost(id) {
  await fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",
  });
  setPosts(posts.filter((post) => post.id !== id));
}
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Psych Board 🧠</h1>
            {posts.map((post) => (
            <div key={post.id} className="border rounded-lg p-4 mb-4 shadow">
                <Link to={`/posts/${post.id}`}>
                    <h2 className="text-xl font-bold">{post.title}</h2>
                </Link>
                <p className="text-gray-600 my-2">{post.content}</p>
                <p className="text-sm text-gray-400">By {post.author}</p>
                <p className="text-sm text-gray-400">By {post.author}</p>
                <button onClick={() => deletePost(post.id)} className="text-red-400 text-sm mt-2">Delete </button>
                
                   
            </div>
        ))}
        </div>
    );
}