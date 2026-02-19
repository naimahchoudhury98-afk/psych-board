import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-post" element={<NewPost />} />
      </Routes>
    </div>
  );
}