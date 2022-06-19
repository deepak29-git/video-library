import axios from "axios";
import { getToken } from "./get-token";

export const addedToPlaylist = async (  video,_id,playlistDispatch,toast,setToast) => {

  try {
    const response = await axios.post(
      `/api/user/playlists/${_id}`,
      {
        video,
      },
      {
        headers: {
          authorization: getToken(),
        },
      }
    );
    playlistDispatch({type:"PLAYLIST_VIDEO",payload:response.data.playlist})
    setToast({...toast,addToPlaylist:true})
    setTimeout(()=>{
      setToast({...toast,addToPlaylist:false})
    },3000)
  } catch (error) {
    console.log(error);
  }
};
