import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import PostDetail from "./pages/Post/PostDetail";
import PostEdit from "./pages/Post/PostEdit";
import Home from "./pages/Home";
import App from "./App";
import PostCreate from "./pages/Post/PostCreate";

export const router = createBrowserRouter ([
    { 
      path: "/",
      element: <App />,

      children: [
        { index: true, element: <Home />},
        { path: "/login", element: <Login />},
        { path: "/register", element: <Register />},
        { path: "/posts", element: <Home />},
        { path: "/posts/create", element: <PostCreate />},
        { path: "/posts/:id", element: <PostDetail />},
        { path: "/posts/:id/edit", element: <PostEdit />},
      ]
    },    
  ]);