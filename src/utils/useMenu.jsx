import { useState,useEffect } from "react";

const useMenu = (id) => {
    const [restaurant, setRestaurant] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
      getRestaurantInfo();
    }, []);
  
    async function getRestaurantInfo() {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.91850&lng=76.25580&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await data.json();
      setRestaurant(json.data.cards[2].card.card.info);
      setMenuItems(
        json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
          .itemCards
      );
    }
    return [restaurant,menuItems];
}
export default useMenu