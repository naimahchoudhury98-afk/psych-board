import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data[0]));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-600 my-4">{post.content}</p>
      <p className="text-sm text-gray-400">By {post.author}</p>
    </div>
  );
}