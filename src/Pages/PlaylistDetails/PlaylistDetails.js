import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../PlaylistDetails/PlaylistDetails.css";
import { deleteVideo } from "../../Utility/deleteVideo";
import { Header } from "../../components/Header/Header";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { usePlaylist } from "../../Context/platlist-context";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";
export const PlaylistDetails = () => {
  const { getPlaylist, playlistState, playlistVideo, setPlaylistVideo } =
    usePlaylist();
  const { _id } = useParams();
  const { bg, modal } = playlistState;
  const navigate = useNavigate();

  useEffect(() => {
    const findById = getPlaylist.find((video) => video._id === _id);
    setPlaylistVideo(findById.videos);
  }, []);

  return (
    <>
      <div style={{ backgroundColor: bg, height: "100vh" }}>
        <Header />
        <div className="page-heading">
          <h2>Playlist Videos({playlistVideo.length})</h2>
        </div>
        <div className="grid-container ">
          <div className="postion-center">{modal && <Modal />}</div>

          {playlistVideo.length === 0 ? (
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
              {playlistVideo.map((video) => (
                <div className="videocard">
                  <VideoCard key={video._id} video={video} />
                  <span
                    onClick={() =>
                      deleteVideo(video._id, _id, setPlaylistVideo)
                    }
                    className="material-icons delete-btn"
                  >
                    delete
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
