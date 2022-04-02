import { useParams } from "react-router-dom";
import { usePlaylist } from "../../Context/platlist-context";
import { useState,useEffect } from "react";
import "../PlaylistDetails/PlaylistDetails.css";
import { deleteVideo } from "../../Utility/deleteVideo";

export const PlaylistDetails = () => {
  const { getPlaylist } = usePlaylist();
  const [video, setVideo] = useState([]);
  const { _id } = useParams();


  useEffect(() => {
    const findById = getPlaylist.find((video) => video._id === _id);
    setVideo(findById.videos);
  }, []);

  return (
    <div>
      {video &&
        video.map((item) => (
          <div key={_id} className="video-container">
            <img
              className="thumbnail-image"
              src={item.image}
              alt={item.title}
            />
            <div className="space-between">
              <h2 className="video-title">{item.title}</h2>
              <span
                onClick={() => deleteVideo(item._id, _id, setVideo)}
                className="material-icons btn"
              >
                delete
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};
