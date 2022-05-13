import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import jwt from "jwt-decode";

import AuthContext from "../../contexts/AuthContext";
import LoginUserForm from "../users/LoginUserForm";

function LoginUserPage() {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  function loginUserHandler(userData) {
    fetch("https://news-stories.cefalo.com:8082/api/accounts/login", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("userName", data.userId);
        localStorage.setItem("token", data.token);

        const user = jwt(data.token);
        console.log(user);

        localStorage.setItem("userId", user.Id);

        authCtx.addCredentials({
          userId: user.Id,
          userName: data.userId,
          token: data.token,
        });

        navigate("/");
      });
  }

  return (
    <section>
      <h1>User Login</h1>
      <LoginUserForm onLoginUser={loginUserHandler} />
    </section>
  );
}

export default LoginUserPage;
