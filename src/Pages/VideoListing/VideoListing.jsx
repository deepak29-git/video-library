import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { usePlaylist } from "../../Context/platlist-context";
import { useLoader } from "../../Custom-hook/use-loader";
import "../VideoListing/VideoListing.css";
import { getVideos } from "../../Data/getvideos";
import { useData } from "../../Context/data-context";
import { Modal } from "../../components/Modal/Modal";
import { VideoCard } from "../../components/VideoCard/VideoCard";
function VideoListing() {
  const { data, setData } = useData();
  const { loader, setLoader } = useLoader();

  const { playlistState } = usePlaylist();
  const { bg, modal } = playlistState;

  useEffect(() => {
    getVideos(setLoader, setData);
  }, []);

  return (
    <div style={{ backgroundColor: bg }}>
      <Header />
      <div className="grid-container">
        <div className="postion-center">{modal && <Modal />}</div>
     
        <div className={!loader&&`video-listing-main`}>
        {loader && 
          <div className="center-xy">
            <img src="https://www.uttf.com.ua/assets/images/loader2.gif" alt="loader" />
            </div>}
          {data.map((video) => (
            <VideoCard key={video._id} video={video} />
            ))}
        </div>
      </div>
    </div>
  );
}

export { VideoListing };
