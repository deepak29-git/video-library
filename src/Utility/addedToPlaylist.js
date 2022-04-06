import axios from "axios";
import { getToken } from "./get-token";

export const addedToPlaylist = async (  video,_id,playlistDispatch) => {

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
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
