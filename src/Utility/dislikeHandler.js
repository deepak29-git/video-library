import axios from "axios";
import { getToken } from "./get-token";

export const dislikeHandler = async (_id, likeDispatch) => {
  console.log(_id, likeDispatch);
  console.log(getToken());
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
