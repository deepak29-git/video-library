import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";
import "../Header/Header.css";
import "../Sidebar/Sidebar.css";
import { Sidebar } from "../Sidebar/Sidebar";
import { useData } from "../../Context/data-context";
import { useRef,useEffect } from "react";
export const Header = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const { sidebar, setSidebar } = useData();
  const { search,setSearch } = useData();
  const intialFocus=useRef(null);
  const logoutHandler = () => {
    const removeToken = localStorage.removeItem("token");
    setAuth(removeToken);
    navigate("/login");
  };

  const menuHandler = () => {
    if (sidebar === "0") {
      setSidebar("-300px");
    } else {
      setSidebar("0");
    }
  };

  useEffect(()=>{
    intialFocus.current.focus()
  },[search])

  return (
    <div>
      <Sidebar />
      <header className="header">
        <nav className="navbar">
          <div className="logo-container">
            <span onClick={menuHandler} className="material-icons hamburger ">
              menu
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
                onChange={(e) => {
                  navigate('/videos')
                  setSearch(e.target.value)
                }}
                ref={intialFocus}
                className="form-control"
                type="search"
                value={search}
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
