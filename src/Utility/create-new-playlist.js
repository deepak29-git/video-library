import axios from "axios";
import { getToken } from "./get-token";

export const createNewPlaylistHandler = async (
  playlist,
  playlistDispatch,
  setPlaylist
) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/`,
      {
        playlist: playlist,
      },

      {
        headers: {
          authorization: getToken(),
        },
      }
    );

    playlistDispatch({
      type: "CREATE_PLAYLIST",
      payload: response.data.playlists,
    });
    setPlaylist({ ...playlist, title: "" });
  } catch (error) {
    alert(error);
  }
};
