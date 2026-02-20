import { Link } from "react-router";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl font-extrabold mb-4">MindFeed 🧠</h1>
      <p className="text-gray-500 text-lg max-w-md mb-8">
        A space to share and explore psychology, dreams, and the mysteries of the mind.
      </p>
      <Link to="/feed" className="bg-purple-500 text-white px-6 py-3 rounded-full font-semibold text-lg">
        Enter MindFeed
      </Link>
    </div>
  );
}