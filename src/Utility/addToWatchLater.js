import axios from "axios";
import { getToken } from "./get-token";
export const addToWatchLater = async (video,watchLaterDispatch) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: "/api/user/watchlater",
      headers: {
        authorization: getToken(),
      },
      data: {
        video: video,
      },
    });
    console.log(data.watchlater)
    watchLaterDispatch({ type: "ADD_TO_WATCHLATER", payload: data.watchlater });
  } catch (error) {
    console.log(error);
  }
};
