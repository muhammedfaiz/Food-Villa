import {IMG_CDN_URL} from "../config"

const MenuCard = (props) => {
  const { name, category, defaultPrice, imageId } = props.item;
  return (
      <div className="card">
        <img src={IMG_CDN_URL + imageId} alt="item-img" />
        <h2>{name}</h2>
        <p>{category}</p>
        <h3>Rs. {defaultPrice?defaultPrice/100:100}</h3>
      </div>
  );
};
export default MenuCard;
