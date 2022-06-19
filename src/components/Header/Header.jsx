import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";
import "../Header/Header.css";
import "../Sidebar/Sidebar.css";
import { Sidebar } from "../Sidebar/Sidebar";
import { useData } from "../../Context/data-context";
import {  useState } from "react";
export const Header = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const { sidebar, setSidebar,menuIcon, setMenuIcon } = useData();
  const {  setSearch } = useData();
  
  const logoutHandler = () => {
    const removeToken = localStorage.removeItem("token");
    setAuth(removeToken);
    navigate("/login");
  };

  const menuHandler = () => {
    if (sidebar === "0") {
      setSidebar("-300px");
      setMenuIcon("menu");
    } else {
      setSidebar("0");
      setMenuIcon("close");
    }
  };



  function debounce(func, delay) {
    let timer;
    return function (e) {
      clearInterval(timer);
      timer = setTimeout(() => {
        func(e);
      }, delay);
    };
  }

  function getData(e) {
    navigate("/videos");
    setSearch(e.target.value);
  }

  const getDebounce = debounce(getData, 600);
  return (
    <div>
      <Sidebar />
      <header className="header">
        <nav className="navbar">
          <div className="logo-container">
            <span onClick={menuHandler} className="material-icons hamburger">
              {menuIcon}
            </span>
            <Link to="/">
              <h1 className="logo-title">
                Video<span className="primary-color">peek</span>
              </h1>
            </Link>
          </div>

          <div className="nav-list">
            <div className="input-group">
              <input
                onChange={getDebounce}
                className="form-control"
                type="search"
                placeholder="Search"
              />
            </div>
            {auth ? (
              <button
                onClick={logoutHandler}
                className="login-btn btn primary-bg"
              >
                Log out
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="login-btn btn primary-bg"
              >
                Login
              </button>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};
