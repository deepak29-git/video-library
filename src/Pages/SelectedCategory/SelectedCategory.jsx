import { useEffect, useState } from "react";

import "../../Pages/SelectedCategory/SelectedCategory.css";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useLoader } from "../../Custom-hook/use-loader";
import { useData } from "../../Context/data-context";
import { getVideos } from "../../Data/getvideos";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Modal } from "../../components/Modal/Modal";
import { addToHistory } from "../../Utility/add-to-history";
import { useHistory } from "../../Context/history-context";
import { usePlaylist } from "../../Context/platlist-context";
import { useWatchLater } from "../../Context/watch-leter-context";
import { deleteFromWatchLater } from "../../Utility/deleteFromWatchLater";
import { addToWatchLater } from "../../Utility/addToWatchLater";
import { useAuth } from "../../Context/auth-context";
export const SelectedCategory = () => {
  const { loader, setLoader } = useLoader();
  const { setHistory } = useHistory();
  const { playlistState, playlistDispatch } = usePlaylist();
  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const { watchedVideo } = watchLaterState;
  const [filteredCategoies, setFilteredCategories] = useState([]);
  const { categoryName } = useParams();
  const { data, setData } = useData();
  const { bg, modal } = playlistState;
  const { auth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    getVideos(setLoader, setData);
  }, []);

  useEffect(() => {
    filterData();
  }, [data]);

  const filterData = () => {
    const filteredData = data.filter(
      (item) => item.categoryName === categoryName.toLowerCase()
    );
    setFilteredCategories(filteredData);
  };

  return (
    <div style={{ backgroundColor: bg }}>
      <Header />

      <div className="grid-container">
        <Sidebar />
        <div className="postion-center">{modal && <Modal />}</div>
        {loader && <h1 className="center">...Loading</h1>}
        <div className="video-listing-main ">
          {filteredCategoies.map((video) => {
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
                  {/* <div className="icon-container"> */}
                    <span
                      onClick={() => addToPlaylist(video, playlistDispatch)}
                      className="material-icons btn playlist-btn align-text"
                    >
                      playlist_add
                      <span className="font-size">Save to Playlist</span>
                    </span>
                  {/* </div> */}
                  {watchedVideo.find((video) => video._id === _id) ? (
                    <div className="center">
                      <button
                        className="btn watch-later-btn primary-bg "
                        onClick={() =>
                          deleteFromWatchLater(_id, watchLaterDispatch)
                        }
                      >
                        Remove From Watchlater
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
          })}
        </div>
      </div>
    </div>
  );
};
