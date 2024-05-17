import { IMG_CDN_URL } from "../config";



const RestaurentCard = (props)=>{
    return(
        <div className="card">
            <img src={IMG_CDN_URL+props.restaurant.cloudinaryImageId} alt="item-img" />
            <h2>{props.restaurant.name}</h2>
            <h3>{props.restaurant.costForTwo}</h3>
            <p>{props.restaurant.cuisines.join(", ")}</p>
            <h4>{props.restaurant.avgRating} stars</h4>
        </div>
    );
}

export default RestaurentCard;