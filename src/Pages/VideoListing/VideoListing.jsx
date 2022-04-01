import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useAuth } from "../../Context/auth-context";
import { useLike } from "../../Context/like-context";
import { usePlaylist } from "../../Context/platlist-context";
import { useWatchLater } from "../../Context/watch-leter-context";
import { useLoader } from "../../Custom-hook/use-loader";
import { addedToPlaylist } from "../../Utility/addedToPlaylist";
import { addToWatchLater } from "../../Utility/addToWatchLater";
import { deleteFromWatchLater } from "../../Utility/deleteFromWatchLater";
import { dislikeHandler } from "../../Utility/dislikeHandler";
import { likeHandler } from "../../Utility/like-handler";
import "../VideoListing/VideoListing.css";
import { videoObj } from "../../Utility/video-obj";
import { createNewPlaylistHandler } from "../../Utility/create-new-playlist";
function VideoListing() {
  const [videos, setVideos] = useState([]);
  const [model, setModel] = useState(false);
  const [bg, setBg] = useState("");
  const [playlist, setPlaylist] = useState({
    title: "",
  });
  const { loader, setLoader } = useLoader();
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const { watchedVideo } = watchLaterState;
  const {
    playlistState,
    playlistDispatch,
    setValue,
  } = usePlaylist();
  const { createPlaylist } = playlistState;
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { likeDispatch } = useLike();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setPlaylist({ ...playlist, [name]: value });
  };

  const addToPlaylist = (video) => {
    setSelectedPlaylist(video);
    setModel(true);
    setBg("grey");
  };

  const closeHandler = () => {
    setModel(false);
    setBg("white");
  };

  const getVideos = async () => {
    try {
      setLoader(true);
      const { data } = await axios.get("/api/videos");
      setLoader(false);
      setVideos(data.videos);
    } catch (error) {
      console.log(error);
    }
  };

  

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div style={{ backgroundColor: bg }}>
      <Header />

      <div className="grid-container">
        <Sidebar />
        <div className="postion-center">
          {model && (
            <div className="container">
              <div className="background">
                <div className="content">
                  <header>
                    <div className="modal-header">
                      <span
                        onClick={closeHandler}
                        className="playlist-close material-icons"
                      >
                        close
                      </span>
                      <h3 className="header_text">Save to Playlist</h3>
                    </div>
                  </header>
                  <hr />
                  <div className="items">
                    {createPlaylist.map((list) => (
                      <div key={list._id}> 
                        <label htmlFor="">
                          <input
                            className="playlist-checkbox"
                            onChange={()=>addedToPlaylist(selectedPlaylist,list._id)}
                            type="checkbox"
                          />
                          <span
                            style={{ marginLeft: "10px", marginTop: "0.5rem" }}
                            
                          >
                            {list.title}
                          </span>
                          <br />
                        </label>
                      </div>
                    ))}
                    <div className="item">
                      <label style={{ marginTop: "0.5rem" }} htmlFor="">
                        Name
                        <input
                          value={playlist.title}
                          onChange={changeHandler}
                          className="playlist-input"
                          type="text"
                          name="title"
                          placeholder="Enter playlist name"
                        />
                      </label>
                    </div>
                  </div>
                  <hr />
                  <div className="btn">
                    <button
                      onClick={() =>
                        createNewPlaylistHandler(
                          playlist,
                          playlistDispatch,
                          setPlaylist
                        )
                      }
                      className="action1"
                    >
                      CREATE NEW PLAYLIST
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {loader && <h1 className="center">...Loading</h1>}
        {videos.map((video) => {
          const { _id, image, title } = video;
          return (
            <div key={_id} className="video-listing-container plr-1">
              <img className="thumbnail-image" src={image} alt={title} />
              <div>
                <div className="icon-container">
                  <span
                    onClick={() => addToPlaylist(video)}
                    className="material-icons btn playlist-btn"
                  >
                    playlist_add
                  </span>
                  <div className="like-dislike-container">
                    <span
                      onClick={() => likeHandler(video, likeDispatch)}
                      className=" material-icons  btn"
                    >
                      thumb_up
                    </span>
                    <span
                      onClick={() => dislikeHandler(_id, likeDispatch)}
                      className=" material-icons btn"
                    >
                      thumb_down
                    </span>
                  </div>
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
  );
}

export { VideoListing };
