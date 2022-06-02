import "../Sidebar/Sidebar.css";
import {NavLink, Link } from "react-router-dom";
import { useData } from "../../Context/data-context";
export const Sidebar = () => {
  const { sidebar,setSidebar } = useData();


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
          <NavLink onClick={()=>setSidebar("-300px")} className={activeStyle}  to="/">
            <li className="sidebar-link">Home</li>
          </NavLink>
          </div>
          <NavLink onClick={()=>setSidebar("-300px")} className={activeStyle} to="/videos">
            <li className="sidebar-link">All Videos</li>
          </NavLink >

          <NavLink onClick={()=>setSidebar("-300px")} className={activeStyle} to="/watchlater">
            <li className="sidebar-link">Watch Later</li>
          </NavLink >
          <NavLink onClick={()=>setSidebar("-300px")} className={activeStyle} to="/likedvideos">
            <li className="sidebar-link">Liked Videos</li>
          </NavLink >
          <NavLink onClick={()=>setSidebar("-300px")} className={activeStyle} to="/playlist">
            <li className="sidebar-link">PlayList</li>
          </NavLink >
          <NavLink onClick={()=>setSidebar("-300px")} className={activeStyle} to="/history">
            <li className="sidebar-link">History</li>
          </NavLink >
        </ul>
      </aside>
    </div>
  );
};
