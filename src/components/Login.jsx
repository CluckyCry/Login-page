import "./login.css";
import { IoIosPerson } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function Login() {
  const [canSee, setCanSee] = useState(true);

  function handleClick() {
    let passwordInput = document.getElementById("pass");
    passwordInput.focus();
    setCanSee(!canSee);
    passwordInput.setAttribute("type", (canSee && "text" || "password"));
  }

  window.addEventListener("load", () => {
    let userInput = document.getElementById("user")
    userInput.focus()
  })

  return (
    <div className="mainDiv">
      <div className="wrapper">
        <h1>LOGIN</h1>
        <div className="passAndUser">
          <input id="user" type="text" placeholder="Username" required />
          <IoIosPerson className="icon-person" />
         <input id="pass" type="password" placeholder="Password" required />
          {(canSee && (
            <FaEye onClick={handleClick} className="icon-pass" />
          )) || <FaEyeSlash onClick={handleClick} className="icon-pass" />} 
        </div>
        <input className="login" type="button" value="Login" />
        <div className="remember-forgot">
          <div className="remember">
            <input type="checkbox" id="check" />
            <label htmlFor="check" id="label">Remember me</label>
          </div>
          <a href="">Forgot your password?</a>
        </div>
      </div>
    </div>
  );
}
