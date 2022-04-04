import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../../Pages/SelectedCategory/SelectedCategory.css'
import "../Categories/Categories.css";
import { useLoader } from "../../Custom-hook/use-loader";

export const Categories = () => {
  const { loader, setLoader } = useLoader();
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
          const { _id, categoryName, categoryImage } = category;

          return (
            <div key={_id} className="card shadow scale">
              <Link to={`/category/${categoryName}`}>
                <img
                  className="card-img"
                  src={categoryImage}
                  alt={categoryName}
                />
                <div>
                  <div className="card-body">
                    <h3 className="card-title center-text ">{categoryName}</h3>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
