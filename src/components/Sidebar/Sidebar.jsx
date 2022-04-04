import "../Sidebar/Sidebar.css";
import {NavLink, Link } from "react-router-dom";
import { useData } from "../../Context/data-context";
export const Sidebar = () => {
  const { sidebar } = useData();


  const activeStyle=(({isActive})=>{
    return isActive?"activeTab":undefined
  })
  
  return (
    <div>
      <aside
        style={{
          left: sidebar,
        }}
        className="video-library-sidebar"
      >
        <ul className="sidebar-lists">
          <div>
          <NavLink className={activeStyle}  to="/">
            <li   className="sidebar-link">Home</li>
          </NavLink>
          </div>
          <NavLink className={activeStyle} to="/videos">
            <li className="sidebar-link">All Videos</li>
          </NavLink >

          <NavLink className={activeStyle} to="/watchlater">
            <li className="sidebar-link">Watch Later</li>
          </NavLink >
          <NavLink className={activeStyle} to="/likedvideos">
            <li className="sidebar-link">Liked Videos</li>
          </NavLink >
          <NavLink className={activeStyle} to="/playlist">
            <li className="sidebar-link">PlayList</li>
          </NavLink >
          <NavLink className={activeStyle} to="/history">
            <li className="sidebar-link">History</li>
          </NavLink >
        </ul>
      </aside>
    </div>
  );
};
