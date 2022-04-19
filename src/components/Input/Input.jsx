import "./Input.css";
import { useState, useEffect } from "react";

const Input = ({ id, type, children, validateForm, validateField, fieldValue }) => {
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const changeHandler = (event) => {
    const value = event.target.value;

    const validationResult = validateField(value);
    validationResult !== isValid && setIsValid(validationResult);

    fieldValue(value);
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
