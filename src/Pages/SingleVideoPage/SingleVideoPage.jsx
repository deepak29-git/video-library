import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import ReactPlayer from "react-player/youtube";
import "../SingleVideoPage/SingleVideoPage.css";
import { Header } from "../../components/Header/Header";
import { useEffect } from "react";
import { getVideos } from "../../Data/getvideos";
import { useLoader } from "../../Custom-hook/use-loader";
import { useData } from "../../Context/data-context";
import { useState } from "react";
import { likeHandler } from "../../Utility/like-handler";
import { dislikeHandler } from "../../Utility/dislikeHandler";
import { useLike } from "../../Context/like-context";
import { addToPlaylist } from "../../Utility/add-to-playlist";
import { usePlaylist } from "../../Context/platlist-context";
import { Modal } from "../../components/Modal/Modal";
import { deleteFromWatchLater } from "../../Utility/deleteFromWatchLater";
import { addToWatchLater } from "../../Utility/addToWatchLater";
import { useWatchLater } from "../../Context/watch-leter-context";
import { useAuth } from "../../Context/auth-context";
export const SingleVideoPage = () => {
  const { data, setData } = useData();
  
  const { playlistState, playlistDispatch } = usePlaylist();
  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const { watchedVideo } = watchLaterState;
  const { setLoader } = useLoader();
  const [find, setFind] = useState([]);
  const { likeDispatch } = useLike();
  const { _id } = useParams();
  const { bg, modal } = playlistState;
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const findId = data.find((item) => item._id === _id);
    setFind(findId);
    getVideos(setLoader, setData);
  }, []);

  return (
    <>
      <Header />
      <div className="player-wrapper" style={{ backgroundColor: bg }}>
        <ReactPlayer
          className="react-player"
          url={`https://www.youtube.com/watch?v=${_id}`}
          width="900px"
          playing={true}
        />
      </div>
      <div className="video-description">
        <h2>{find.title}</h2>
        <div className="icon-container">
          <div className="like-dislike-container">
            <span
              onClick={() => likeHandler(find, likeDispatch)}
              className=" material-icons  btn"
            >
              thumb_up
            </span>
            <span
              onClick={() => dislikeHandler(find._id, likeDispatch)}
              className=" material-icons btn"
            >
              thumb_down
            </span>
          </div>
          <div className="postion-center">{modal && <Modal />}</div>
          <div className="icon-container single-page-icon">
            <span
              onClick={() => addToPlaylist(find, playlistDispatch)}
              className="material-icons btn playlist-btn align-text"
            >
              playlist_add 
              <span style={{ fontSize: "15px" }}>save</span>
            </span>

            {watchedVideo.find((video) => video._id === _id) ? (
              <button
             
                onClick={() =>
                  deleteFromWatchLater(find._id, watchLaterDispatch)
                }
              >
                Remove From Watchlater
              </button>
            ) : (
              <button
                onClick={() =>
                  auth
                    ? addToWatchLater(find, watchLaterDispatch)
                    : navigate("/login")
                }
                style={{background:"transparent",border:"none"}}
              >
                <span className="material-icons align-text">watch_later
                
                <span style={{ fontSize: "15px"}}>Watch Later</span>
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
