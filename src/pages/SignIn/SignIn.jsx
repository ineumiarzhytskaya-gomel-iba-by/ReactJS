import "./SignIn.css";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";

const SignIn = () => {
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState({
    username: false,
    password: false,
  });

  const goHomeHandler = () => navigate("/home");

  const validateFormHandler = useCallback((isValid, id) => {
    setIsFormValid((prevState) => {
      const prevErrors = { ...prevState };
      prevErrors[id] = isValid;
      return prevErrors;
    });
  }, []);

  const isButtonDisabled = Object.values(isFormValid).includes(false);

  return (
    <div className="sign-in-background">
      <form onSubmit={goHomeHandler} className="sign-in-form">
        <Input id="username" type="text" validateForm={validateFormHandler}>
          Username
        </Input>
        <Input id="password" type="password" validateForm={validateFormHandler}>
          Password
        </Input>
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
