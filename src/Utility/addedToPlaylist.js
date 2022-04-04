import axios from "axios";
import { getToken } from "./get-token";

export const addedToPlaylist = async (  video,_id) => {

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
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
