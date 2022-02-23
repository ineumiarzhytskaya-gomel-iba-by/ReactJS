import "./SignIn.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const goHomeHandler = () => navigate("/home");

  return (
    <div className="sign-in-background">
      <form onSubmit={goHomeHandler} className="sign-in-form">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" className="input" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" className="input" />
        <button type="submit" className="sign-in-button">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignIn;
