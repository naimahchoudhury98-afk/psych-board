import { useState } from "react";
import { useNavigate } from "react-router";

export default function NewPost() {
  const [formData, setFormData] = useState({ title: "", content: "", author: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch("https://psych-board.onrender.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    navigate("/feed");
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">New Post 🧠</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border rounded-xl p-3 outline-none focus:border-purple-400"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          className="border rounded-xl p-3 outline-none focus:border-purple-400"
          name="author"
          placeholder="Your name"
          onChange={handleChange}
        />
        <textarea
          className="border rounded-xl p-3 outline-none focus:border-purple-400 h-32"
          name="content"
          placeholder="What's on your mind?"
          onChange={handleChange}
        />
        <button className="bg-purple-500 text-white py-3 rounded-full font-semibold">
          Post
        </button>
      </form>
    </div>
  );
}