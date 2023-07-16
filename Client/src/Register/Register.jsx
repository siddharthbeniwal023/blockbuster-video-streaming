import { useRef, useState } from "react";
import "./Register.scss";

function Register() {
  const [email, setEmail] = useState("");
  const emailRef = useRef();
  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="register">
      <div className="top">
        <img className="logo" src="https://logotyp.us/files/blockbuster.svg" />
        <button className="signin">Sign in</button>
      </div>
      <div className="container">
        <h1>Netflix ate us</h1>
        <h2>So we giving movies for free :)</h2>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="start" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (<form className="input">
        <input type="password" placeholder="password" ref={passwordRef} />
        <button className="start" onClick={handleFinish}>
          Start
        </button>
      </form>) }
      </div>
    </div>
  );
}

export default Register;
