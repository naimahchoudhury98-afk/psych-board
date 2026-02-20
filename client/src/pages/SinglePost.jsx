import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://psych-board.onrender.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data[0]));
  }, [id]);

  if (!post) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <Link to="/feed" className="text-purple-500 font-semibold">← Back to Feed</Link>
      <div className="border-b py-6">
        <div className="flex gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
            {post.author ? post.author[0].toUpperCase() : "?"}
          </div>
          <div>
            <p className="font-bold">{post.author}</p>
            <p className="text-gray-400 text-sm">{new Date(post.created_at).toLocaleDateString()}</p>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-3">{post.title}</h1>
        <p className="text-gray-600 leading-relaxed">{post.content}</p>
      </div>
    </div>
  );
}