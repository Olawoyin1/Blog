// import logo from './logo.svg';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import Ads from "./Components/Ads.jsx";
import Featured from "./Components/Featured.jsx";
import Footer from "./Components/Footer.jsx";
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

const main = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />

      <Route path="sign-up" element={<Register />} />
      <Route path="login" element={<Register />} />
      
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
