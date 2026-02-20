import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import Navbar from "./components/Navbar";
import SinglePost from "./pages/SinglePost";


export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/posts/:id" element={<SinglePost />} />
      </Routes>
    </div>
  );
}