import { useNavigate,Link } from 'react-router-dom';
import { useAuth } from '../../Context/auth-context';
import '../Header/Header.css'
export const Header = () => {
  const navigate=useNavigate()
  const {auth,setAuth}=useAuth()

  const logoutHandler=()=>{
    const removeToken=localStorage.removeItem("token");
    setAuth(removeToken)
    navigate('/login')
  }
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
          <h1 className="logo-title">
            Video<span className="primary-color">peek</span>
          </h1>
          </Link>
        </div>
        <div className="nav-list">
          {auth ? <button onClick={logoutHandler} className="login-btn btn primary-bg">Log out</button>:<button onClick={()=>navigate('/login')} className="login-btn btn primary-bg">Login</button>}
          
        </div>
      </nav>
    </header>
  );
};
