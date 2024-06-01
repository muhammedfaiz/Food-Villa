import { useDispatch, useSelector } from "react-redux"
import CartList from "./CartList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector(store=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
  return (
    <div className="m-5 p-2 mb-28">
    <div className="flex justify-between items-center mb-4">
      <h1 className="font-semibold text-3xl text-blue-500">Cart Items</h1>
      <button className="px-4 py-3 text-white bg-green-500 rounded-md hover:bg-green-900" onClick={handleClearCart}>Clear Cart</button>
    </div>
    <div className="flex flex-wrap justify-center">
      {cartItems.map((item) => (
        <CartList {...item} key={item.id} />
      ))}
    </div>
  </div>
  )
}
export default Cart