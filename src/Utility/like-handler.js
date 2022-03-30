import axios from "axios";
import { getToken } from "./get-token";

export const likeHandler = async (video, likeDispatch) => {
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
  } catch (error) {
    console.log(error);
  }
};
