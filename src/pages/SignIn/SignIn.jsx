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

  const goHomeHandler = (event) => {
    event.preventDefault();
    navigate("/home");
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
    },
    {
      id: "password",
      type: "password",
      validateForm: validateFormHandler,
      validateField: (value) =>
        value.length >= 8 && /\d/.test(value) && /[a-zа-яё]/i.test(value),
      text: "Password",
    },
  ];

  const isButtonDisabled = Object.values(isFormValid).includes(false);

  return (
    <div className="sign-in-background">
      <form onSubmit={goHomeHandler} className="sign-in-form">
        {inputFields.map((field) => (
          <Input
            key={field.id}
            id={field.id}
            type={field.text}
            validateForm={field.validateForm}
            validateField={field.validateField}
          >
            {field.text}
          </Input>
        ))}
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
