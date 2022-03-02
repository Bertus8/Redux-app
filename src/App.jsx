import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostPage from "./pages/PostPage";
import { Menu } from "./components/Menu";


function App() {
  return (
    <Router>
        <Menu />
      <Routes>
      <Route path="*" element={<Home/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/posts" element={<Posts/>} />
        <Route exact path="/posts/:postId" element={<PostPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
