import "../Sidebar/Sidebar.css";
import { Link } from "react-router-dom";
import { useData } from "../../Context/data-context";
export const Sidebar = () => {
  const {sidebar}=useData()
  return (
    <div>
      <aside style={{position:"fixed",left:sidebar,transition:"all 0.5s ease-in-out"}}  className="video-library-sidebar">
        <ul className="sidebar-lists">
          <Link to="/">
            <li className="sidebar-link">Home</li>
          </Link>
          <Link to="/videos">
            <li className="sidebar-link">All Videos</li>
          </Link>
          <Link to="trendingvideos">
            <li className="sidebar-link">Trending Videos</li>
          </Link>
          <Link to="/watchlater">
            <li className="sidebar-link">Watch Later</li>
          </Link>
          <Link to="/likedvideos">
            <li className="sidebar-link">Liked Videos</li>
          </Link>
          <Link to="/playlist">
            <li className="sidebar-link">PlayList</li>
          </Link>
          <Link to="/history">
            <li className="sidebar-link">History</li>
          </Link>
        </ul>
      </aside>
    </div>
  );
};
