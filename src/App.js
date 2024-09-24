// import logo from './logo.svg';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SharedLayout from "./Components/SharedLayout.js";
import SinglePost from "./Pages/SinglePost.jsx";
import Register from "./Pages/Register.jsx";
import Home from "./Pages/Home.jsx";
import Blog from "./Pages/Blog.jsx";
import BlogLayout from "./Components/BlogLayout.js";
import Author from "./Pages/Author.jsx";
import Slider from "./AnimatedRoute.jsx";

const main = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />

      <Route path="author" element={<Author />} />
      <Route path="sign-up" element={<Register />} />
      <Route path="register" element={<Register />} />
      <Route path="slider" element={<Slider />} />
      
      <Route path="posts" element={<BlogLayout />}>
        <Route
          index
          element={
            <Blog  />
          }
        />
        <Route path=":id" element={<SinglePost />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={main} />;
}

export default App;
