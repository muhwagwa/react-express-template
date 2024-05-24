import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Register from "./components/Register";
import NoteDetail from "./components/NoteDetail";

export const router = createBrowserRouter ([
    { path: "/", element: <App />},
    { path: "/login", element: <Login />},
    { path: "/register", element: <Register />},
    { path: "/posts", element: <App />},
    { path: "/posts/:id", element: <NoteDetail />},
  ]);