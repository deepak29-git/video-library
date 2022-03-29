import '../Header/Header.css'
export const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img
            className="logo-img"
            src="https://cdn2.vectorstock.com/i/1000x1000/44/21/video-icon-symbol-premium-quality-isolated-vector-16004421.jpg"
            alt=""
          />
          <h1 className="logo-title">
            Video<span className="primary-color">peek</span>
          </h1>
        </div>
        <div className="nav-list">
          <button className="login-btn btn primary-bg">Login</button>
        </div>
      </nav>
    </header>
  );
};
