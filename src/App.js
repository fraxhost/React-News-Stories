import { Route, Routes } from "react-router-dom";

import "./App.css";
import AllStoriesPage from "./pages/AllStoriesPage";
import Layout from "./layouts/Layout";
import NewStoryPage from "./pages/NewStoryPage";
import RegisterUserPage from "./pages/RegisterUserPage";
import LoginUserPage from "./pages/LoginUserPage";

function App() {
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
