import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-post" element={<NewPost />} />
      </Routes>
    </div>
  );
}