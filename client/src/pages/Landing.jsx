import { Link } from "react-router";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-linear-to-br from-purple-400 via-pink-300 to-indigo-400">
      <div className="animate-bounce text-6xl mb-6">🧠</div>
      <h1 className="text-6xl font-extrabold mb-4 text-purple-600">MindFeed</h1>
      <p className="text-gray-500 text-xl max-w-md mb-10">
        A space to share and explore psychology, dreams, and the mysteries of the mind.
      </p>
      <Link
        to="/feed"
        className="bg-purple-500 hover:bg-purple-600 transition-all duration-300 text-white px-8 py-4 rounded-full font-semibold text-lg"
      >
        Enter MindFeed →
      </Link>
    </div>
  );
}