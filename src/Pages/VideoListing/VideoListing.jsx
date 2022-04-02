import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useAuth } from "../../Context/auth-context";
import { usePlaylist } from "../../Context/platlist-context";
import { useWatchLater } from "../../Context/watch-leter-context";
import { useLoader } from "../../Custom-hook/use-loader";
import { addToWatchLater } from "../../Utility/addToWatchLater";
import { deleteFromWatchLater } from "../../Utility/deleteFromWatchLater";
import "../VideoListing/VideoListing.css";
import { getVideos } from "../../Data/getvideos";
import { useData } from "../../Context/data-context";
import { Modal } from "../../components/Modal/Modal";
import { addToPlaylist } from "../../Utility/add-to-playlist";
import { addToHistory } from "../../Utility/add-to-history";
import { useHistory } from "../../Context/history-context";
function VideoListing() {
  const { data, setData } = useData();
  const { loader, setLoader } = useLoader();
  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const { watchedVideo } = watchLaterState;
  const { playlistState, playlistDispatch } = usePlaylist();
  const { bg, modal } = playlistState;
  const { auth } = useAuth();
  const navigate = useNavigate();
  const {setHistory}=useHistory()

  useEffect(() => {
    getVideos(setLoader, setData);
  }, []);
  return (
    <div style={{ backgroundColor: bg }}>
      <Header />

      <div className="grid-container">
        <Sidebar />
        <div className="postion-center">{modal && <Modal />}</div>
        {loader && <h1 className="center">...Loading</h1>}
        <div className="video-listing-main">

        {data.map((video) => {
          const { _id, image, title } = video;
          return (
            <div key={_id} className="video-card">
              <Link to={`/watch/${_id}`} onClick={()=>addToHistory(video,setHistory)}>
                <img className="thumbnail-image btn" src={image} alt={title} />
              </Link>
              <div>
                <div className="icon-container">
                  <span
                    onClick={() => addToPlaylist(video, playlistDispatch)}
                    className="material-icons btn playlist-btn"
                  >
                    playlist_add
                  </span>
                </div>

                {watchedVideo.find((video) => video._id === _id) ? (
                  <button
                    className="btn watch-later-btn primary-bg"
                    onClick={() =>
                      deleteFromWatchLater(_id, watchLaterDispatch)
                    }
                    >
                    Remove From Watchlater
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      auth
                        ? addToWatchLater(video, watchLaterDispatch)
                        : navigate("/login")
                    }
                    className="btn watch-later-btn primary-bg"
                    >
                    Watch Later
                  </button>
                )}
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export { VideoListing };
