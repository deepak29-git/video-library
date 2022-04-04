import { addToHistory } from "../../Utility/add-to-history";
import { deleteFromWatchLater } from "../../Utility/deleteFromWatchLater";
import { addToWatchLater } from "../../Utility/addToWatchLater";
import { addToPlaylist } from "../../Utility/add-to-playlist";
import { useAuth } from "../../Context/auth-context";
import { useHistory } from "../../Context/history-context";
import { usePlaylist } from "../../Context/platlist-context";
import { useWatchLater } from "../../Context/watch-leter-context";
import { useNavigate, Link } from "react-router-dom";
import '../VideoCard/VideoCard.css'

export const VideoCard = ({ video }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { setHistory } = useHistory();
  const { playlistDispatch } = usePlaylist();

  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const { watchedVideo } = watchLaterState;
  const { _id, image, title } = video;
  return (
    <div key={_id} className="video-card">
      <Link
        to={`/watch/${_id}`}
        onClick={() => addToHistory(video, setHistory)}
      >
        <img className="thumbnail-image" src={image} alt={title} />
      </Link>
      <div>
        <span
          onClick={() =>auth ? addToPlaylist(video, playlistDispatch):navigate("/login")}
          className="material-icons btn playlist-btn align-text"
        >
          playlist_add
          <span className="font-size">Save to Playlist</span>
        </span>
        {watchedVideo.find((video) => video._id === _id) ? (
          <div className="center">
            <button
              className="btn watch-later-btn primary-bg align-text "
              onClick={() => deleteFromWatchLater(_id, watchLaterDispatch)}
            >
              <span class="material-icons align-text">delete</span>

              <span className="font-size">Remove From Watch Later</span>
            </button>
          </div>
        ) : (
          <button
            onClick={() =>
              auth
                ? addToWatchLater(video, watchLaterDispatch)
                : navigate("/login")
            }
            className="btn watch-later-btn primary-bg align-text"
          >
            <span className="material-icons align-text ">
              watch_later
              <span className="font-size">Save to Watch Later</span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
};