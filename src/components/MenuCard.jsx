import { useDispatch } from "react-redux";
import {IMG_CDN_URL} from "../config.js"
import { addItem } from "../utils/cartSlice.jsx";

const MenuCard = (props) => {
  const { name, category, defaultPrice, imageId } = props.item;
  const dispatch = useDispatch();
  const handleAdd = ()=>{
    dispatch(addItem(props.item));
  }
  return (
      <div className="w-64 h-96 m-5 bg-white rounded-lg p-4 shadow-md">
        <img src={IMG_CDN_URL + imageId} alt="item-img" className="w-full h-40 object-cover rounded-md mb-2"/>
        <h2 className="text-lg font-bold mb-1">{name}</h2>
        <p className="text-sm text-gray-700 mb-1">{category}</p>
        <h3 className="text-base font-semibold">Rs. {defaultPrice?defaultPrice/100:100}</h3>
        <button className="p-3 m-5 bg-green-600 text-white rounded-md hover:bg-green-900" onClick={()=>handleAdd()}>Add Item</button>
      </div>
  );
};
export default MenuCard;
