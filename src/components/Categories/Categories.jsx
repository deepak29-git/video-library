import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../Categories/Categories.css";

export const Categories = () => {
  const [loader, setLoader] = useState(false);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    setLoader(true);
    const { data } = await axios.get("/api/categories");
    setLoader(false);
    setCategories(data?.categories);
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      {loader && <h1 style={{ textAlign: "center" }}>Loading...</h1>}
      <div className="plr-1 category-container">
        {categories.map((category) => {
          const { _id, categoryName, description, categoryImage } = category;

          return (
            <div key={_id} className="card shadow ">
              <img
                className="card-img"
                src={categoryImage}
                alt={categoryName}
              />
              <div>
                <div className="card-body">
                  <h3 className="card-title ">{categoryName}</h3>
                  <small className="card-subtitle">{description}</small>
                </div>
                <Link to={`/category/${_id}`}>
                  <button className="btn watch-now-btn mt-1">Watch Now</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
