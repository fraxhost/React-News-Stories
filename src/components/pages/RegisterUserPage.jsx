import { useNavigate, Link } from "react-router-dom";
import jwt from "jwt-decode";
import { useContext } from "react";

import AuthContext from "../../contexts/AuthContext";
import RegisterUserForm from "../users/RegisterUserForm";

function RegisterUserPage() {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  function registerUserHandler(userData) {
    fetch("https://news-stories.cefalo.com:8082/api/accounts/register", {
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
      <h1>User Registration</h1>
      <RegisterUserForm onRegisterUser={registerUserHandler} />
      <div className="d-flex justify-content-center mt-2">
        <p className="me-2">Already have an account?</p>
        <Link to="/login">login</Link>
      </div>
    </section>
  );
}

export default RegisterUserPage;
