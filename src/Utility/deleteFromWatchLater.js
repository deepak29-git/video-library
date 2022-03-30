import axios from "axios";
import { getToken } from "./get-token";
export const deleteFromWatchLater = async (_id, watchLaterDispatch) => {
  try {
    const { data } = await axios({
      method: "DELETE",
      url: `/api/user/watchlater/${_id}`,
      headers: {
        authorization: getToken(),
      },
    });
    console.log(data.watchlater);
    watchLaterDispatch({
      type: "DELETE_FROM_WATCHLATER",
      payload: data.watchlater,
    });
  } catch (error) {
    console.log(error);
  }
};
