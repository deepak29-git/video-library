import "../Login/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { useState } from "react";
import { useAuth } from "../../Context/auth-context";
import axios from "axios";
import { useLoader } from "../../Custom-hook/use-loader";
export const Login = () => {
  const { setAuth } = useAuth();

  const { loader, setLoader } = useLoader();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState(false);
  const [color, setColor] = useState("");
  const [showPassword, setShowPassword] = useState("password");
  const [icon, setIcon] = useState("visibility_off");
  const handlerInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrorMsg(false);
  };

  const handleUserLogin = async () => {
    if (!user.email && !user.password) {
      setErrorMsg(true);
      setColor("red");
      return;
    }
    try {
      setLoader(true);
      const { data } = await axios.post("api/auth/login", {
        email: user.email,
        password: user.password,
      });

      setLoader(false);
      localStorage.setItem("token", data.encodedToken);
      setAuth(true);
      navigate("/");
    } catch (error) {
      alert(error);
      alert("Enter Correct Details");
    }
  };

  const testLogin = async () => {
    try {
      const { data } = await axios.post("api/auth/login", {
        email: "adarshbalika@gmail.com",
        password: "adarshBalika123",
      });
      localStorage.setItem("token", data.encodedToken);
      setAuth(true);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  const passwordHandler = () => {
    if (showPassword === "password") {
      setShowPassword("text");
      setIcon("visibility");
    } else {
      setShowPassword("password");
      setIcon("visibility_off");
    }
  };

  return (
    <>
      <Header />
      <main className="login">
        <div className="login-container mt-2">
          <h3 className="center-text">Login</h3>
          <div className="input-group">
            <label className="form-label">Email address</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={user.email}
              onChange={handlerInput}
              placeholder="Enter Email"
            />
          </div>
          <small style={{ color: color }}>
            {errorMsg && "Please Enter your email"}
          </small>
          <div className="input-group">
            <label className="form-label">Password </label>
            <span
              onClick={passwordHandler}
              className="material-icons visibility"
            >
              {icon}
            </span>
            <input
              type={showPassword}
              name="password"
              value={user.password}
              onChange={handlerInput}
              className="form-control"
              placeholder="Enter Password"
            />
          </div>
          <small style={{ color: color }}>
            {errorMsg && "Enter your Password"}
          </small>

          
          <div className="center">
            <button
              type="submit"
              style={{ width: "100%" }}
              onClick={handleUserLogin}
              className="mt-1 mb-1 btn primary-bg"
            >
              {loader ? "Loading...." : "Login"}
            </button>
          </div>
          <div className="center">
            <button
              onClick={() => testLogin()}
              style={{ width: "100%" }}
              className="btn primary-bg mb-1"
            >
              Test Login
            </button>
          </div>
          <div className="center">
            <Link to="/signup" className="black-text">
              Create New Account
            </Link>
            <svg
              className="right-arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />
            </svg>
          </div>
        </div>
      </main>
    </>
  );
};
