import { Route, Routes } from "react-router-dom";

import "./App.css";
import AllStoriesPage from "./components/pages/AllStoriesPage";
import Layout from "./components/layouts/Layout";
import NewStoryPage from "./components/pages/NewStoryPage";
import RegisterUserPage from "./components/pages/RegisterUserPage";
import LoginUserPage from "./components/pages/LoginUserPage";
import { useContext, useEffect } from "react";
import AuthContext from "./contexts/AuthContext";

function App() {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const userName = localStorage.getItem("userName");
    const token = localStorage.getItem("token");

    if (userName && token) {
      authCtx.addCredentials({
        userId: userId,
        userName: userName,
        token: token,
      });
    }
  }, [authCtx]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllStoriesPage />} />
        <Route path="/new-story" element={<NewStoryPage />} />
        <Route path="/register" element={<RegisterUserPage />} />
        <Route path="/login" element={<LoginUserPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
