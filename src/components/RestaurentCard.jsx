import { IMG_CDN_URL } from "../config";

const RestaurantCard = (props) => {
    return (
        <div className="w-64 h-96 m-5 shadow-lg text-center flex flex-col transition-transform transform hover:scale-105 mb-28">
            <img src={IMG_CDN_URL + props.restaurant.cloudinaryImageId} alt="item-img" className="h-40 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{props.restaurant.name}</h2>
                <p className="text-base text-gray-700 mb-2">{props.restaurant.costForTwo}</p>
                <p className="text-sm text-gray-700 mb-2">{props.restaurant.cuisines.join(", ")}</p>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">{props.restaurant.avgRating} stars</span>
            </div>
        </div>
    );
}

export default RestaurantCard;