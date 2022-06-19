import axios from "axios";
import { getToken } from "./get-token";

export const likeHandler = async (video, likeDispatch,toast,setToast) => {
  try {
    const {data} = await axios.post(
      "/api/user/likes",
      {
        video,
      },
      {
        headers: {
          authorization: getToken(),
        },
      }
    );
    likeDispatch({type:"LIKE",payload:data.likes})
    setToast({...toast,addToLike:true})
    setTimeout(()=>{
      setToast({...toast,addToLike:false})
    },3000)
  } catch (error) {
    console.log(error);
  }
};
