import { useState } from "react";
import "./Login.scss";

function Login() {
  const [hovered, isHovered] = useState(0);
  return (
    <div className="login">
      <div className="top">
        <img className="logo" src="https://logotyp.us/files/blockbuster.svg" />
        <span
          onMouseEnter={() => isHovered(true)}
          onMouseLeave={() => isHovered(false)}
        >
          New To BlockBuster ?
        </span>
        <button className="signin">Sign Up</button>
      </div>
      <div className="container">
        <h1>Netflix ate us</h1>
        <h2>So we giving movies for free :)</h2>
        <div className="input">
          <input type="email" placeholder="email address or phone Number" />
          {/* <button className="start">Get Started</button> */}
        </div>
        <form className="input">
          <input type="password" placeholder="password" />
          <button className="start">Dive In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
