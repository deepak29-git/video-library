import { useLike } from "../../Context/like-context";
import { Header } from "../../components/Header/Header";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { usePlaylist } from "../../Context/platlist-context";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";
import { deleteFromLiked } from "../../Utility/delete-from-liked";
import '../LikedVideos/LikedVideos.css'
import { useAuth } from "../../Context/auth-context";
export const LikedVideos = () => {
  const { likeState,likeDispatch } = useLike();
  const { likedVideo } = likeState;
  const { playlistState } = usePlaylist();
  const { bg, modal } = playlistState;
  const {auth}=useAuth()
  const navigate = useNavigate();
  return (
    <>
      <div style={{ backgroundColor: bg, height: "100vh" }}>
        <Header />
        {auth&&<div className="page-heading">
          <h2>Liked Videos({likedVideo.length})</h2>
        </div>}
        <div className="grid-container ">
          <div className="postion-center">{modal && <Modal />}</div>

          {!auth?<div className="center center-align">
              <div className="flex-column center-text">
                <h3>Keep track of what you Liked</h3>
                <small>Liked videos isn't viewable when signed out. </small>
                <div className="center mt-1">
                  <button
                    onClick={() => navigate("/login")}
                    className="primary-bg btn"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>:likedVideo.length === 0 ? (
            <div className="watchlater-container">
              <p className="h3 center-text mb-1">NO LIKED VIDEOS</p>
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
              {likedVideo.map((video) => (
                <div className="videocard">
                  <VideoCard key={video._id} video={video} />
                <span onClick={()=>deleteFromLiked(video._id,likeDispatch)} className="material-icons delete-btn">delete</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
