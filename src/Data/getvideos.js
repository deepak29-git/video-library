import axios from "axios";

export const getVideos = async (setLoader, setData) => {
  try {
    setLoader(true);
    const { data } = await axios.get("/api/videos");
    setLoader(false);
    setData(data.videos);
  } catch (error) {
    console.log(error);
  }
};
