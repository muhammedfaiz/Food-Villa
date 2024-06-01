import { IMG_CDN_URL } from "../config"

const CartList = ({imageId,name,category,description,defaultPrice}) => {
  return (
    <div className="w-64 h-96 m-5 shadow-lg text-center flex flex-col transition-transform transform hover:scale-105">
    <img src={IMG_CDN_URL + imageId} alt="item-img" className="h-40 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-base text-gray-700 mb-2">{category}</p>
      <p className="text-sm text-gray-700 mb-2">{description}</p>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700">Rs. {defaultPrice/100}</span>
    </div>
  </div>
  )
}
export default CartList