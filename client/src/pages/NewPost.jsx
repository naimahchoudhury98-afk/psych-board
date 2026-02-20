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
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-indigo-100 p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-purple-700">New Post 🧠</h1>
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className="border border-gray-200 rounded-xl p-3 outline-none focus:border-purple-400 transition-all duration-200"
              name="title"
              placeholder="Title"
              onChange={handleChange}
            />
            <input
              className="border border-gray-200 rounded-xl p-3 outline-none focus:border-purple-400 transition-all duration-200"
              name="author"
              placeholder="Your name"
              onChange={handleChange}
            />
            <textarea
              className="border border-gray-200 rounded-xl p-3 outline-none focus:border-purple-400 transition-all duration-200 h-32"
              name="content"
              placeholder="What's on your mind?"
              onChange={handleChange}
            />
            <button className="bg-gradient-to-r from-purple-500 to-pink-400 text-white py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-200">
              Post 🧠
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}