import axios from "axios";
import { useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useWatchLater } from "../../Context/watch-leter-context";
import { getToken } from "../../Utility/get-token";
import "../VideoListing/VideoListing.css";
import "../WatchLater/WatchLater.css";

export const WatchLater = () => {
  const { watchLaterState } = useWatchLater();
  const { watchedVideo } = watchLaterState;
  console.log(watchedVideo);
  console.log(watchedVideo, "post");
  useEffect(() => {
    (async () => {
      try {
        const response=await axios.get("/api/user/watchlater",{
          headers:{
            authorization:getToken()
          }
        })

        console.log(response, "get");
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <Header />
      <h1 className="page-heading">Watch Later</h1>
      <div className="grid-container ">
        <Sidebar />
        {watchedVideo.map((watchlater) => {
          const { _id, title, image } = watchlater;
          return (
            <div key={_id} className="video-listing-container plr-1">
              <img className="thumbnail-image" src={image} alt={title} />
              <h3>{title}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};
