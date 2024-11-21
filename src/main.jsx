import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signin"
import Root from "./pages/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/signin",
        element: <SignIn />
      },]
  }]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
