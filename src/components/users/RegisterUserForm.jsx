import { useEffect, useRef, useState } from "react";

import { Card } from "react-bootstrap";
import classes from "./UserForm.module.css";

function RegisterUserForm(props) {
  const fullNameInputRef = useRef();
  const userNameInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const [fullNameError, setFullNameError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  useEffect(() => {
    document.getElementById("fullNameErrorId").style.display = fullNameError
      ? "block"
      : "none";

    document.getElementById("userNameErrorId").style.display = userNameError
      ? "block"
      : "none";

    document.getElementById("passwordErrorId").style.display = passwordError
      ? "block"
      : "none";

    document.getElementById("confirmPasswordErrorId").style.display =
      confirmPasswordError ? "block" : "none";
  }, [fullNameError, userNameError, passwordError, confirmPasswordError]);

  function submitHandler(event) {
    event.preventDefault();

    const enteredFullName = fullNameInputRef.current.value;
    const enteredUserName = userNameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current.value;

    const fullNameValid = enteredFullName.length >= 8;
    const userNameValid = enteredUserName.length >= 4;
    const passwordValid = enteredPassword.length >= 8;
    const confirmPasswordValid = enteredConfirmPassword === enteredPassword;

    fullNameValid ? setFullNameError(false) : setFullNameError(true);

    userNameValid ? setUserNameError(false) : setUserNameError(true);

    passwordValid ? setPasswordError(false) : setPasswordError(true);

    confirmPasswordValid
      ? setConfirmPasswordError(false)
      : setConfirmPasswordError(true);

    if (
      !fullNameValid ||
      !userNameValid ||
      !passwordValid ||
      !confirmPasswordValid
    )
      return;

    const userData = {
      UserId: enteredUserName,
      FullName: enteredFullName,
      Password: enteredPassword,
      Roles: ["General"],
    };

    console.log(userData);
    props.onRegisterUser(userData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" ref={fullNameInputRef} />
          <p style={{ color: "red" }} id="fullNameErrorId">
            full name must be 8 characters
          </p>
        </div>
        <div className={classes.control}>
          <label htmlFor="userName">Username</label>
          <input type="text" id="userName" ref={userNameInputRef} />
          <p style={{ color: "red" }} id="userNameErrorId">
            username must be 4 characters
          </p>
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordInputRef} />
          <p style={{ color: "red" }} id="passwordErrorId">
            password must be 8 characters
          </p>
        </div>
        <div className={classes.control}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            ref={confirmPasswordInputRef}
          />
          <p style={{ color: "red" }} id="confirmPasswordErrorId">
            passwords do not match
          </p>
        </div>
        <div className={classes.actions}>
          <button>Register</button>
        </div>
      </form>
    </Card>
  );
}

export default RegisterUserForm;
