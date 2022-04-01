import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { usePlaylist } from "../../Context/platlist-context";
import { getPlaylistVideo } from "../../Utility/getPlaylist";
import { useState } from "react";
import '../PlaylistDetails/PlaylistDetails.css'
import { deleteVideo } from "../../Utility/deleteVideo";

export const PlaylistDetails = () => {
  const { getPlaylist,setGetPlaylist } = usePlaylist();
  const [video, setVideo] = useState([]);
  const { _id } = useParams();
    

  useEffect(() => {
    getPlaylistVideo(_id);
    const findById = getPlaylist.find((video) => video._id === _id);
    setVideo(findById.videos);
    console.log(getPlaylist,"playlist id")
  }, []);

  return (
    <div>
      {video &&
        video.map(({ _id, image, title }) => (
            
          <div key={_id} className="video-container">
              {console.log(_id,"video")}
            <img className="thumbnail-image" src={image} alt={title} />
            <div className="space-between">
            <h2 className="video-title">{title}</h2>
            <span  onClick={()=>deleteVideo(_id,getPlaylist[0]._id ,setVideo)} className="material-icons btn">delete</span>
            </div>
          </div>
        ))}
    </div>
  );
};
