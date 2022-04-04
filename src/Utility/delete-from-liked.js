import axios from "axios"
import { getToken } from "./get-token"

export const deleteFromLiked=async(_id,likeDispatch)=>{
    try{
        const {data}=await axios.delete(`/api/user/likes/${_id}`,{
            headers:{
                authorization:getToken()
            }
        })
        likeDispatch({type:"DELETE_FROM_LIKED",payload:data.likes})
    }catch(error){
        alert(error)
    }
}