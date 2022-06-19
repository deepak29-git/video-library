import axios from "axios";
import { getToken } from "./get-token";
export const addToWatchLater = async (video,watchLaterDispatch,toast,setToast) => {
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
    watchLaterDispatch({ type: "ADD_TO_WATCHLATER", payload: data.watchlater });
    setToast({...toast,addToWatchLater:true})
    setTimeout(()=>{
       setToast({...toast,addToWatchLater:false}) 
    },2000)
    
  } catch (error) {
    console.log(error);
  }
};
