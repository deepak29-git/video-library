import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import "../VideoListing/VideoListing.css";
import "../PlayList/PlayList.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { getToken } from "../../Utility/get-token";
import { usePlaylist } from "../../Context/platlist-context";
import { deletePlaylist } from "../../Utility/deletePlaylist";
export const PlayList = () => {
  const { getPlaylist, setGetPlaylist } = usePlaylist();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/playlists", {
          headers: {
            authorization: getToken(),
          },
        });

        setGetPlaylist(response.data.playlists);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <Header />
      <div className="grid-container">
        <Sidebar />
        <h2>Your Playlist({getPlaylist.length}) </h2>
        {getPlaylist.map(({ _id, title, videos }) => (
          <div key={_id}>
              <div className=" box-container">
            <Link to={`/playlist/${_id}`}>
              <div >
                <h2>{title}</h2>
                <small>{videos.length}videos</small>
              </div>
            </Link>
                <span onClick={()=>deletePlaylist(_id,setGetPlaylist)} className="material-icons btn">delete</span>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};
