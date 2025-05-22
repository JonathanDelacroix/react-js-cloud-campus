import { useContext } from "react"
import { CartContext } from "../context/CartContext.jsx"

const useCart = () => {
    const { cartCount, dispatch } = useContext(CartContext);

    function addToCart() {
        dispatch({ type: "increment" });
    }

    function removeFromCart() {
        dispatch({ type: "decrement" });
    }

    return { cartCount, addToCart, removeFromCart };
}

export default useCart;