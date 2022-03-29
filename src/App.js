import "./App.css";
import {Routes,Route} from 'react-router-dom'
import {SelectedCategory} from './Pages/SelectedCategory/SelectedCategory'
import { Home } from "./Pages/Home/Home";
import { VideoListing } from "./Pages/VideoListing/VideoListing";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category/:_id" element={<SelectedCategory/>}/>
        <Route path="/videos" element={<VideoListing/>}/>
      </Routes>
        
    </div>
  );
}

export default App;
