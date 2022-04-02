import axios from "axios"
import { getToken } from "./get-token"

export const clearAllWatchHistory=async(setHistory)=>{
    try{
        const {data}=await axios.delete("/api/user/history/all",{
            headers:{
                authorization:getToken()
            }
        })
        setHistory(data.history)
        console.log(data.history)
    }catch(error){
        console.log(error)
    }
}