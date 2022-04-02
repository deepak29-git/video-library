import axios from "axios";

export const getVideos = async (setLoader, setVideos) => {
  try {
    setLoader(true);
    const { data } = await axios.get("/api/videos");
    setLoader(false);
    setVideos(data.videos);
  } catch (error) {
    console.log(error);
  }
};
