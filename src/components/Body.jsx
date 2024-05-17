import { useState, useEffect } from "react";
import { restaurentList } from "../config";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";

function filterData(text, restaurant) {
  return restaurant.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(text.toLowerCase())
  );
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    // Api call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="card-list">
        {filteredRestaurants?.length == 0 ? (
          <h1 style={{ color: "red", fontFamily: "sans-serif" }}>
            No Restaurant Found
          </h1>
        ) : (
          filteredRestaurants.map((restaurent) => {
            return (
              <RestaurentCard
                restaurant={restaurent.info}
                key={restaurent.info.id}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;