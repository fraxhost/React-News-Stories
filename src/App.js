import { Route, Routes } from "react-router-dom";

import "./App.css";
import AllStoriesPage from "./components/pages/AllStoriesPage";
import ProtectedRoutes from "./components/auths/ProtectedRoutes";
import MyStoriesPage from "./components/pages/MyStoriesPage";
import Layout from "./components/layouts/Layout";
import NewStoryPage from "./components/pages/NewStoryPage";
import RegisterUserPage from "./components/pages/RegisterUserPage";
import LoginUserPage from "./components/pages/LoginUserPage";
import { useContext, useEffect } from "react";
import AuthContext from "./contexts/AuthContext";
import SearchPage from "./components/pages/SearchPage";

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
        <Route path="/register" element={<RegisterUserPage />} />
        <Route path="/login" element={<LoginUserPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/new-story" element={<NewStoryPage />} />
          <Route path="/my-story" element={<MyStoriesPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
