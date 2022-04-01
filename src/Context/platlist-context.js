import { createContext,useReducer ,useContext} from "react";
import { useState } from "react";
import { playlistReducer } from "../Reducer/playlist-reducer";

const PlaylistContext=createContext(null);

const PlaylistProvider=({children})=>{
    // const [modalData,setModalData]=useState({})
    const [value,setValue]=useState("")
    const [getPlaylist,setGetPlaylist]=useState([]);
    const [getVideos,setGetVideos]=useState([])
    const [playlistState,playlistDispatch]=useReducer(playlistReducer,{
        playlistVideos:[],
        createPlaylist:[]
    })
    return <PlaylistContext.Provider value={{playlistState,playlistDispatch,value,setValue,getPlaylist,setGetPlaylist,getVideos,setGetVideos}}>{children}</PlaylistContext.Provider>
}

const usePlaylist=()=>useContext(PlaylistContext)

export {PlaylistProvider,usePlaylist}