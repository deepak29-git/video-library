import { useEffect, useState } from "react";

import "../../Pages/SelectedCategory/SelectedCategory.css";
import { useParams } from "react-router-dom";
import { useLoader } from "../../Custom-hook/use-loader";
import { useData } from "../../Context/data-context";
import { getVideos } from "../../Data/getvideos";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Modal } from "../../components/Modal/Modal";

import { VideoCard } from "../../components/VideoCard/VideoCard";
import { usePlaylist } from "../../Context/platlist-context";
export const SelectedCategory = () => {
  const { loader, setLoader } = useLoader();
  const [filteredCategoies, setFilteredCategories] = useState([]);
  const { categoryName } = useParams();
  const { data, setData } = useData();
  const { playlistState } = usePlaylist();
  const { bg, modal } = playlistState;

  useEffect(() => {
    getVideos(setLoader, setData);
  }, []);

  useEffect(() => {
    filterData();
  }, [data]);

  const filterData = () => {
    const filteredData = data.filter(
      (item) => item.categoryName === categoryName.toLowerCase()
    );
    setFilteredCategories(filteredData);
  };

  return (
    <div style={{ backgroundColor: bg, height: "100vh" }}>
      <Header />
      <div className="grid-container">
        <Sidebar />
        <div className="postion-center">{modal && <Modal />}</div>
        {loader && <h1 className="center">...Loading</h1>}
        <div className="video-listing-main ">
          {filteredCategoies.map((video) => {
            return <VideoCard key={video._id} video={video} />;
          })}
        </div>
      </div>
    </div>
  );
};
