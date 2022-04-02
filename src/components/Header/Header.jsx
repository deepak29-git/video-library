import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/auth-context";
import "../Header/Header.css";
import { Sidebar } from "../Sidebar/Sidebar";
export const Header = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
const [sidebar,setSidebar]=useState(false)
  const logoutHandler = () => {
    const removeToken = localStorage.removeItem("token");
    setAuth(removeToken);
    navigate("/login");
  };

  const menuHandler=()=>{
    if(sidebar){
      setSidebar(false)
    }else{
      setSidebar(!sidebar)
    }
  }
  return (
    <header className="header">
     
      <nav className="navbar">
        <div className="logo-container">
              <span onClick={menuHandler} style={{cursor:"pointer"}}  class="material-icons">menu</span>
          <Link to="/">
            <h1 className="logo-title">
              Video<span className="primary-color">peek</span>
            </h1>
          </Link>
        </div>
        <div className="nav-list">
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
      {sidebar && <Sidebar/>}
    </header>
  );
};
