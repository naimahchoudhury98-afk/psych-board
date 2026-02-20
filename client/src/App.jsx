import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import Feed from "./pages/Feed";
import NewPost from "./pages/NewPost";
import SinglePost from "./pages/SinglePost";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/posts/:id" element={<SinglePost />} />
      </Routes>
    </div>
  );
}