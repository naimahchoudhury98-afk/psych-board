import { useState } from "react";
import { useNavigate } from "react-router";

export default function NewPost() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
  e.preventDefault();
  await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  navigate("/");
}

 return (
  <div className="p-4">
    <h1>Create a New Post</h1>
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-96">
      <input className="border p-2" name="title" placeholder="Title" onChange={handleChange} />
      <input className="border p-2" name="author" placeholder="Author" onChange={handleChange} />
      <textarea className="border p-2" name="content" placeholder="Content" onChange={handleChange} />
      <button className="bg-black text-white p-2" type="submit">Submit</button>
    </form>
  </div>
);
}