import { useNavigate } from "react-router-dom";

import LoginUserForm from "../users/LoginUserForm";

function LoginUserPage() {
  const navigate = useNavigate();

  function loginUserHandler(userData) {
    fetch("https://localhost:5001/api/accounts/login", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
        // navigate("/");
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("username", data.userId);
        localStorage.setItem("token", data.token);

        console.log("un", localStorage.getItem("username"));
        console.log("tn", localStorage.getItem("token"));
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
