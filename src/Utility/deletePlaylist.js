import axios from "axios"
import { getToken } from "./get-token"

export const deletePlaylist=async(_id,setGetPlaylist)=>{
    try{
        const response=await axios.delete(`/api/user/playlists/${_id}`,{
            headers:{
                authorization:getToken()
            }
        })
        setGetPlaylist(response.data.playlists)
    }catch(error){
        console.log(error)
    }
}