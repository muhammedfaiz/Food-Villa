
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer";
import useMenu from "../utils/useMenu";

const RestaurantMenu = () => {
  const {id} = useParams();
  const [restaurant,menuItems]=useMenu(id);

  return restaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex bg-gray-100 p-5 flex-row mb-28">
      <div className=" bg-white rounded-lg p-5 shadow-md mb-4 w-full h-[28rem]">
        <h2 className="text-2xl font-bold mb-2">{restaurant.name}</h2>
        <img
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          alt="food-image"
          className="w-full h-64 object-cover rounded-md mb-2"
        />
        <h3 className="text-lg font-semibold">{restaurant.areaName + "," + restaurant.city}</h3>
        <p className="text-base text-gray-700 mb-2">{restaurant.costForTwoMessage}</p>
        <p className="text-base text-gray-700">{restaurant.avgRating} stars</p>
      </div>
      
      
        <div className="flex flex-wrap mx-2">
          {menuItems?.map((item) => {
            return <MenuCard item={item.card.info} key={item.card.info.id} />;
          })}
        </div>
      
    </div>
  );
};

export default RestaurantMenu;
