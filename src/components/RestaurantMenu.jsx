import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  const [restaurant, setRestaurant] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.91850&lng=76.25580&restaurantId=${params.id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setRestaurant(json.data.cards[2].card.card.info);
    setMenuItems(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
  }
  return restaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurant-container">
      <div className="restaurant-details">
        <h2>{restaurant.name}</h2>
        <img
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          alt="food-image"
        />
        <h3>{restaurant.areaName + "," + restaurant.city}</h3>
        <p>{restaurant.costForTwoMessage}</p>
        <p>{restaurant.avgRating} stars</p>
      </div>
      <div className="menu-container">
        <div className="card-list">
          {menuItems?.map((item) => {
            return <MenuCard item={item.card.info} key={item.card.info.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
