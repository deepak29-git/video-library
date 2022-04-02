import { createContext, useReducer, useContext } from "react";
import { useState } from "react";
import { playlistReducer } from "../Reducer/playlist-reducer";

const PlaylistContext = createContext(null);

const PlaylistProvider = ({ children }) => {
  const [getPlaylist, setGetPlaylist] = useState([]);
  const [getVideos, setGetVideos] = useState([]);

  const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
    playlistVideos: [],
    createPlaylist: [],
    modal: false,
    bg: "",
    selectedPlaylist: null,
  });
  return (
    <PlaylistContext.Provider
      value={{
        playlistState,
        playlistDispatch,
        getPlaylist,
        setGetPlaylist,
        getVideos,
        setGetVideos,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { PlaylistProvider, usePlaylist };
