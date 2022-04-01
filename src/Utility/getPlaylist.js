import axios from "axios"
import { getToken } from "./get-token"

export const getPlaylistVideo=async(_id)=>{

    try{
        const response=await axios.get(`/api/user/playlists/${_id}`,{
            headers:{
                authorization:getToken()
            }
        })
        console.log(response,"getplaylist")

    }catch(error){
        console.log(error)
    }
}