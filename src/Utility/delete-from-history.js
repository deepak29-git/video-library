import axios from "axios"
import { getToken } from "./get-token"

export const deleteFromHistory=async(_id,setHistory)=>{
    try{
        const {data}=await axios.delete(`/api/user/history/${_id}`,{
            headers:{
                authorization:getToken()
            }
        })
        setHistory(data.history)
    }catch(error){
        console.log(error)
    }
} 