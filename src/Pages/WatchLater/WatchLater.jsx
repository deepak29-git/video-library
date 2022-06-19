import { useNavigate, Link } from "react-router-dom";
import { useWatchLater } from "../../Context/watch-leter-context";
import "../../components/Sidebar/Sidebar.css";
import "../WatchLater/WatchLater.css";
import { Modal } from "../../components/Modal/Modal";
import { usePlaylist } from "../../Context/platlist-context";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useAuth } from "../../Context/auth-context";

export const WatchLater = () => {
  const { watchLaterState } = useWatchLater();
  const { watchedVideo } = watchLaterState;
  const { playlistState } = usePlaylist();
  const { bg, modal } = playlistState;
  const navigate = useNavigate();
  const { auth } = useAuth();

  return (
    <>
      <div style={{ backgroundColor: bg, height: "100vh" }}>
        {auth && (
          <div className="page-heading">
            <h2>Watch Later({watchedVideo.length})</h2>
          </div>
        )}
        <div className="grid-container ">
          <div className="postion-center">{modal && <Modal />}</div>

          {!auth ? (
            <div className="center center-align">
              <div className="flex-column center-text">
                <h3>Keep track of watch later videos</h3>
                <small>
                  watch later videos isn't viewable when signed out.{" "}
                </small>
                <div className="center mt-1">
                  <button
                    onClick={() => navigate("/login")}
                    className="primary-bg btn"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          ) : watchedVideo.length === 0 ? (
            <div className="watchlater-container">
              <p className="h3 center-text mb-1">NO VIDEOS IN WATCH LATER</p>
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
            <div className="video-listing-main">
              {watchedVideo.map((video) => (
                <VideoCard key={video._id} video={video} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
