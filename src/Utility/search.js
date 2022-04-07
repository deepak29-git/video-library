export const getSearch=(search,data)=>{
    if(search){
        return data.filter(video=>video.title.toLowerCase().includes(search.toLowerCase()))
    }
    return data
}