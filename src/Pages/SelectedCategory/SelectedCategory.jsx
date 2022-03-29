import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import "../../Pages/SelectedCategory/SelectedCategory.css";
import { useParams } from "react-router-dom";

export const SelectedCategory = () => {
  const [loader, setLoader] = useState(false);
  const [selectedCategories, setSelectedCategory] = useState([]);
  const { _id } = useParams();
  // console.log(_id)
  const getCategories = async () => {
    try {
      setLoader(true);

      const response = await axios.get(`/api/categories/${_id}`);
      setLoader(false);
      setSelectedCategory(response.data?.category);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, [_id]);
  const { categoryName, categoryImage, description } = selectedCategories;

  return (
    <>
      {loader && <h1 style={{ textAlign: "center" }}>Loading...</h1>}
      <div className="plr-1 category-container">
        <div className="card shadow ">
          <img className="card-img" src={categoryImage} alt={categoryName} />
          <div>
            <div className="card-body">
              <h3 className="card-title ">{categoryName}</h3>
              <small className="card-subtitle">{description}</small>
            </div>
            <button className="btn watch-now-btn mt-1">Watch Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
