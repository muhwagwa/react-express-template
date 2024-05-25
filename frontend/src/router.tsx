import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import PostDetail from "./components/PostDetail";
import PostEdit from "./components/PostEdit";
import Home from "./Home";
import App from "./App";

export const router = createBrowserRouter ([
    { 
      path: "/",
      element: <App />,

      children: [
        { index: true, element: <Home />},
        { path: "/login", element: <Login />},
        { path: "/register", element: <Register />},
        { path: "/posts", element: <Home />},
        { path: "/posts/:id", element: <PostDetail />},
        { path: "/posts/:id/edit", element: <PostEdit />},
      ]
    },    
  ]);