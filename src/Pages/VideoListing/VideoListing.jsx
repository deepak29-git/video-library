import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import "../VideoListing/VideoListing.css";
function VideoListing() {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    try {
      const { data } = await axios.get("/api/videos");
      console.log(data.videos);
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
        {videos.map((video) => {
          const { _id } = video;
          return (
            <div>
              <iframe
                className="video-frame"
                width="300"
                height="1000"
                src={`https://www.youtube.com/embed/${_id}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <button className="btn watch-later-btn primary-bg">
                Watch Later
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export { VideoListing };
