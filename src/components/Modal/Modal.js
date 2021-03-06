
import {  useState } from "react";

import { usePlaylist } from "../../Context/platlist-context";
import { useToast } from "../../Context/toast-context";
import { addedToPlaylist } from "../../Utility/addedToPlaylist";
import { createNewPlaylistHandler } from "../../Utility/create-new-playlist";


export const Modal = () => {
  const [playlist, setPlaylist] = useState({
    title: "",
  });
  const {toast,setToast}=useToast()

  const { playlistState, playlistDispatch } = usePlaylist();
  const { createPlaylist, selectedPlaylist } = playlistState;

  const closeHandler = () => {
    playlistDispatch({ type: "MODAL", payload: false });
    playlistDispatch({ type: "BG", payload: "blur(0)" });
  };


  const changeHandler = (e) => {
    const { name, value } = e.target;
    setPlaylist({ ...playlist, [name]: value });
  };
  return (
    <div>
      <div className="container">
        <div className="background">
          <div className="content">
            <header>
              <div className="modal-header">
                <span
                  onClick={closeHandler}
                  className="playlist-close material-icons"
                >
                  close
                </span>
                <h3 className="header_text">Save to Playlist</h3>
              </div>
            </header>
            <hr />
            <div className="items">
              {createPlaylist.map((list) => {
                const isVideo = list.videos.some(
                  (video) => video._id === selectedPlaylist._id
                );
                return (
                  <div key={list._id}>
                    <label htmlFor="">
                      <input
                        className="playlist-checkbox"
                        onChange={() =>
                          addedToPlaylist(
                            selectedPlaylist,
                            list._id,
                            playlistDispatch,
                            toast,setToast
                          )
                        }
                        type="checkbox"
                        checked={isVideo}
                      />
                      <span style={{ marginLeft: "10px", marginTop: "0.5rem" }}>
                        {list.title}
                      </span>
                      <br />
                    </label>
                  </div>
                );
              })}
              <div className="item">
                <label style={{ marginTop: "0.5rem" }}  htmlFor="">
                  Name
                  <input
                    value={playlist.title}
                    onChange={changeHandler}
                    className="form-control "
                    type="text"
                    name="title"
                    
                    autoFocus
                    placeholder="Enter playlist name"
                  />
                </label>
              </div>
            </div>
            <hr />
            <div className="btn">
              <button
                onClick={() =>
                  createNewPlaylistHandler(
                    playlist,
                    playlistDispatch,
                    setPlaylist
                  )
                }
                className="action1"
              >
                CREATE NEW PLAYLIST
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
