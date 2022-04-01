import axios from "axios"
import { getToken } from "./get-token"

export const deleteVideo=async(videoId,playlistId,setVideo)=>{
    console.log(videoId,"video id from utils",playlistId,"pl id from util")
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