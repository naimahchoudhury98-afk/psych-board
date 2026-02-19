import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/new-post">New Post</Link>
    </nav>
  );
}