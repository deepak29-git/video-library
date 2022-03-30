import { useLike } from "../../Context/like-context";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
export const LikedVideos=()=>{
    const {likeState}=useLike();
    const {likedVideo}=likeState;
    console.log(likedVideo)
    return(
        <>
      <Header/>
      <h1 className="page-heading">Watch Later</h1>
      <div className="grid-container ">
        <Sidebar />
        {likedVideo.map((like) => {
          const { _id, title, image } = like;
          return (
            <div key={_id} className="video-listing-container plr-1">
              <img className="thumbnail-image" src={image} alt={title} />
              <h3>{title}</h3>
            </div>
          );
        })}
      </div>
    </>
    )
}