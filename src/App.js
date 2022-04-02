import "./App.css";
import {Routes,Route} from 'react-router-dom'
import {SelectedCategory} from './Pages/SelectedCategory/SelectedCategory'
import { Home } from "./Pages/Home/Home";
import { VideoListing } from "./Pages/VideoListing/VideoListing";
import { Login } from "./Pages/Login/Login";
import Mockman from "mockman-js";
import { WatchLater } from "./Pages/WatchLater/WatchLater";
import { LikedVideos } from "./Pages/LikedVideos/LikedVideos";
import { PlayList } from "./Pages/PlayList/PlayList";
import { PlaylistDetails } from "./Pages/PlaylistDetails/PlaylistDetails";
import { SingleVideoPage } from "./Pages/SingleVideoPage/SingleVideoPage";
import { History } from "./Pages/History/History";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/watch/:_id" element={<SingleVideoPage/>}/>
        <Route path="/mock" element={<Mockman/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/likedvideos" element={<LikedVideos/>}/>
        <Route path="/watchlater" element={<WatchLater/>}/>
        <Route path="/playlist" element={<PlayList/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/playlist/:_id" element={<PlaylistDetails/>}/>
        <Route path="/category/:_id" element={<SelectedCategory/>}/>
        <Route path="/videos" element={<VideoListing/>}/>
      </Routes>
        
    </div>
  );
}

export default App;
