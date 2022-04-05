import axios from "axios"
import { getToken } from "./get-token"

export const deleteVideo=async(videoId,playlistId,setVideo)=>{
    try{
        const response=await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`,{
            headers:{
                authorization:getToken()
            }
        })
        console.log(response.data,"delete")
        setVideo(response.data.playlist.videos)
    }catch(error){
        console.log(error)
    }
}