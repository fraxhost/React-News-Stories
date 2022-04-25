import { useNavigate } from "react-router-dom";

import RegisterUserForm from "../users/RegisterUserForm";

function RegisterUserPage() {
  const navigate = useNavigate();

  function registerUserHandler(userData) {
    fetch("https://localhost:5001/api/accounts/register", {
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
      });
  }

  return (
    <section>
      <h1>User Registration</h1>
      <RegisterUserForm onRegisterUser={registerUserHandler} />
    </section>
  );
}

export default RegisterUserPage;
