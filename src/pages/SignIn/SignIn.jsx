import "./SignIn.css";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { usersActions } from "../../store/users-slice";
import Input from "../../components/Input/Input";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isFormValid, setIsFormValid] = useState({
    username: false,
    password: false,
  });
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  const [authError, setAuthError] = useState("");

  //users: masha@gmail.com 1234masha
  //       vasya@gmail.com 1234vasya
  // admin: testAdmin@gmail.com 12345yuiopp
  const signInHandler = (event) => {
    event.preventDefault();

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBAAugocQg-K1r5iMzzK1PLkqkn54flxTk",
        {
          email: userCredentials.username,
          password: userCredentials.password,
          returnSecureToken: true,
        }
      )
      .then((response) => {
        setAuthError("");
        dispatch(
          usersActions.login({
            userEmail: response.data.email,
            token: response.data.idToken,
          })
        );
        navigate("/home");
      })
      .catch((error) => setAuthError(error.message));
  };

  const validateFormHandler = useCallback((isValid, id) => {
    setIsFormValid((prevState) => {
      const prevErrors = { ...prevState };
      prevErrors[id] = isValid;
      return prevErrors;
    });
  }, []);

  const inputFields = [
    {
      id: "username",
      type: "text",
      validateForm: validateFormHandler,
      validateField: (value) => /^.+?@.+?\..+?/.test(value),
      text: "Username",
      fieldValue: (value) =>
        setUserCredentials((prevState) => ({ ...prevState, username: value })),
    },
    {
      id: "password",
      type: "password",
      validateForm: validateFormHandler,
      validateField: (value) =>
        value.length >= 8 && /\d/.test(value) && /[a-zа-яё]/i.test(value),
      text: "Password",
      fieldValue: (value) =>
        setUserCredentials((prevState) => ({ ...prevState, password: value })),
    },
  ];

  const isButtonDisabled = Object.values(isFormValid).includes(false);

  return (
    <div className="sign-in-background">
      <form onSubmit={signInHandler} className="sign-in-form">
        {inputFields.map((field) => (
          <Input
            key={field.id}
            id={field.id}
            type={field.type}
            validateForm={field.validateForm}
            validateField={field.validateField}
            fieldValue={field.fieldValue}
          >
            {field.text}
          </Input>
        ))}
        <div className="auth-error">{authError}</div>
        <button
          type="submit"
          className={isButtonDisabled ? "disabled-button" : "sign-in-button"}
          disabled={isButtonDisabled}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignIn;
