import "./Input.css";
import { useState, useEffect } from "react";

const Input = ({ id, type, children, validateForm }) => {
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const changeHandler = (event) => {
    const value = event.target.value;

    if (id === "username") {
      if (/^.+?@.+?\..+?/.test(value)) {
        !isValid && setIsValid(true);
      } else {
        isValid && setIsValid(false);
      }
    } else if (id === "password") {
      if (value.length >= 8 && /\d/.test(value) && /[a-zа-яё]/i.test(value)) {
        !isValid && setIsValid(true);
      } else {
        isValid && setIsValid(false);
      }
    }
  };

  useEffect(() => {
    validateForm(isValid, id);
  }, [isValid, id, validateForm]);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        type={type}
        className={!isValid && isTouched ? "invalid-input" : "input"}
        onChange={changeHandler}
        onBlur={() => setIsTouched(true)}
      />
    </>
  );
};

export default Input;
