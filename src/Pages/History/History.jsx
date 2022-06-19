import "../../components/Sidebar/Sidebar.css";
import { useHistory } from "../../Context/history-context";
import { clearAllWatchHistory } from "../../Utility/clear-all-watch-history";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { usePlaylist } from "../../Context/platlist-context";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";
import { deleteFromHistory } from "../../Utility/delete-from-history";
import "../History/History.css";
import { useAuth } from "../../Context/auth-context";
export const History = () => {
  const { history, setHistory } = useHistory();
  const { playlistState } = usePlaylist();
  const { bg, modal } = playlistState;
  const { auth } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <div style={{ backgroundColor: bg, height: "100vh" }}>
        {auth && (
          <div className="history-heading ">
            <h2 className="">Watch History({history.length})</h2>
          </div>
        )}

        {auth && (
          <div className="clear-history-btn">
            <button
              onClick={() => clearAllWatchHistory(setHistory)}
              className="btn primary-bg"
            >
              CLEAR ALL WATCH HISTORY
            </button>
          </div>
        )}

        <div className="grid-container ">
          <div className="postion-center">{modal && <Modal />}</div>

          {!auth ? (
            <div className="center center-align">
              <div className="flex-column center-text">
                <h3>Keep track of what you watch</h3>
                <small>Watch history isn't viewable when signed out. </small>
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
          ) : history.length === 0 ? (
            <div className="watchlater-container">
              <p className="h3 center-text mb-1">NO VIDEOS IN HISTORY</p>
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
              {history.map((video) => (
                <div className="videocard">
                  <VideoCard key={video._id} video={video} />
                  <span
                    onClick={() => deleteFromHistory(video._id, setHistory)}
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
