import axios from "axios";
import { getToken } from "./get-token";
export const deleteFromWatchLater = async (_id, watchLaterDispatch,toast,setToast) => {
  try {
    const { data } = await axios({
      method: "DELETE",
      url: `/api/user/watchlater/${_id}`,
      headers: {
        authorization: getToken(),
      },
    });
   
    watchLaterDispatch({
      type: "DELETE_FROM_WATCHLATER",
      payload: data.watchlater,
    });
    setToast({...toast,removeFromWatchLater:true})
    setTimeout(()=>{
      setToast({...toast,removeFromWatchLater:false})
    },3000)
  } catch (error) {
    alert(error);
  }
};
