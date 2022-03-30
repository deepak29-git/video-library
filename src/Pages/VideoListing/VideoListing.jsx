import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useAuth } from "../../Context/auth-context";
import { useLike } from "../../Context/like-context";
import { useWatchLater } from "../../Context/watch-leter-context";
import { addToWatchLater } from "../../Utility/addToWatchLater";
import { deleteFromWatchLater } from "../../Utility/deleteFromWatchLater";
import { dislikeHandler } from "../../Utility/dislikeHandler";
import { likeHandler } from "../../Utility/like-handler";
import "../VideoListing/VideoListing.css";
function VideoListing() {
  const [videos, setVideos] = useState([]);
  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const { watchedVideo } = watchLaterState;
  const { auth } = useAuth();
  const navigate = useNavigate();
const {likeDispatch}=useLike()


  const getVideos = async () => {
    try {
      const { data } = await axios.get("/api/videos");
      setVideos(data.videos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <>
      <Header />
      <div className="grid-container">
        <Sidebar />
        {videos.map((video) => {
          const { _id, image, title } = video;
          return (
            <div key={_id} className="video-listing-container plr-1">
              <img className="thumbnail-image" src={image} alt={title} />
              <div>
                <div className="space-between">
                  <span onClick={()=>likeHandler(video,likeDispatch)} className="btn material-icons">thumb_up</span>
                  <span onClick={()=>dislikeHandler(_id,likeDispatch)} className="btn material-icons">thumb_down</span>
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
    </>
  );
}

export { VideoListing };
