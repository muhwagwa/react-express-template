import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Register from "./components/Register";
import NoteDetail from "./components/NoteDetail";
import PostEdit from "./components/PostEdit";

export const router = createBrowserRouter ([
    { path: "/", element: <App />},
    { path: "/login", element: <Login />},
    { path: "/register", element: <Register />},
    { path: "/posts", element: <App />},
    { path: "/posts/:id", element: <NoteDetail />},
    { path: "/posts/:id/edit", element: <PostEdit />},
  ]);