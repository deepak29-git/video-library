import axios from "axios";
import { getToken } from "./get-token";

export const dislikeHandler = async (_id, likeDispatch) => {
  try {
    const { data } = await axios.delete(`/api/user/likes/${_id}`, {
      headers: {
        authorization: getToken(),
      },
    });    
    likeDispatch({ type: "DISLIKE", payload: data.likes });
  } catch (error) {
    console.log(error);
  }
};
