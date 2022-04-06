import { Header } from "../../components/Header/Header";
import "../VideoListing/VideoListing.css";
import "../PlayList/PlayList.css";
import {Link, useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";
import { useEffect } from "react";
import axios from "axios";
import { getToken } from "../../Utility/get-token";
import { usePlaylist } from "../../Context/platlist-context";
import { deletePlaylist } from "../../Utility/deletePlaylist";
import { useAuth } from "../../Context/auth-context";
export const PlayList = () => {
  const { getPlaylist, setGetPlaylist,playlistState } = usePlaylist();
  const { bg, modal } = playlistState;
  const navigate = useNavigate();
  const {auth}=useAuth()
  
  
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/playlists", {
          headers: {
            authorization: getToken(),
          },
        });

        setGetPlaylist(response.data.playlists);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);


  return (
    <>
      <div style={{ backgroundColor: bg, height: "100vh" }}>
        <Header />
        {auth&&<div className="page-heading">
          <h2>Your Playlist({getPlaylist.length})</h2>
        </div>}
        <div className="grid-container ">
          <div className="postion-center">{modal && <Modal />}</div>

          {!auth ? <div className="center center-align">
              <div className="flex-column center-text">
                <h3>Keep track of what you saved in playlist</h3>
                <small> playlist isn't show when signed out. </small>
                <div className="center mt-1">
                  <button
                    onClick={() => navigate("/login")}
                    className="primary-bg btn"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>: getPlaylist.length === 0 ? (
            <div className="watchlater-container">
              <p className="h3 center-text mb-1">NO VIDEOS IN PLAYLIST</p>
              <div className="center">
                <button
                  onClick={() => navigate("/")}
                  className="primary-bg btn"
                >
                  GO TO HOME
                </button>
              </div>
            </div>
          ) : (
            <div className="video-listing-main ">
              {getPlaylist.map(({ _id, title, videos }) => (
          <div key={_id}>
              <div className=" box-container">
            <Link to={`/playlist/${_id}`}>
              <div >
                <h2>{title}</h2>
                <small>{videos.length}videos</small>
              </div>
            </Link>
                <span onClick={()=>{
                  deletePlaylist(_id,setGetPlaylist)}} className="material-icons btn">delete</span>
              </div>
          </div>
        ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
