import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <Link to="/">
        <h1 className="text-xl font-bold text-white">MindFeed 🧠</h1>
      </Link>
      <div className="flex gap-4 items-center">
        <Link to="/feed" className="font-semibold text-white">Feed</Link>
        <Link to="/new-post" className="bg-purple-500 text-white px-4 py-2 rounded-full font-semibold">Post</Link>
      </div>
    </nav>
  );
}