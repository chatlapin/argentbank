import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "@/pages/layout";
import Home from "@/pages/Home";
import Signin from "@/pages/SignIn";
import Profile from "@/pages/Profile";

import { store } from "@/redux/store";
import { Provider } from "react-redux";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="signin" element={<Signin />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
