import { useState, useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

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
    const json = await data?.json();
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <div className="message-container">
        <h1 className="message">Offline</h1>
        <p className="subMessage">
          Please check your internet connection and try again.
        </p>
      </div>
    );
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="m-10 text-center">
        <input
          type="text"
          className="px-5 py-2 rounded-md ring-2 ring-slate-500 focus:outline-none focus:ring-slate-900 transition-all ease-in-out"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-5 py-2 mx-2 bg-sky-500 text-center text-white rounded-md shadow-md transition-all hover:bg-sky-800 ease-in-out"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex justify-around align-middle flex-wrap my-2 mx-20">
        {filteredRestaurants?.length == 0 ? (
          <h1 className="font-bold text-xl text-red-600">
            No Restaurant Found
          </h1>
        ) : (
          filteredRestaurants.map((restaurent) => {
            return (
              <Link to={`/restaurant/${restaurent.info.id}`}>
                <RestaurentCard
                  restaurant={restaurent.info}
                  key={restaurent.info.id}
                />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
