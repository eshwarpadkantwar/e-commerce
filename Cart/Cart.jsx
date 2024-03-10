import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import "./Cart.css";

function Cart() {
    const { cart, setCart } = useContext(CartContext);
    const [quantities, setQuantities] = useState(cart.map(() => 1)); // Initialize quantities for each item to 1

    const totalPrice = cart.reduce((acc, item, index) => acc + (item.price * quantities[index]), 0);

    const incQuantity = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index]++;
        setQuantities(newQuantities);
    }

    const decQuantity = (index) => {
        const newQuantities = [...quantities];
        if (newQuantities[index] > 1) {
            newQuantities[index]--;
            setQuantities(newQuantities);
        }
    }

    const removeItem = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);

        const newQuantities = [...quantities];
        newQuantities.splice(index, 1);
        setQuantities(newQuantities);
    }

    return (
        <div>
            <h1>Cart</h1>
            <div className="cartitems">
                {cart.map((item, index) => (
                    <div key={item.id}>
                        <img className="cartimg" src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <h3>₹{item.price}.00/-</h3>
                        <h3>Quantity: <button className="decbtn" onClick={() => decQuantity(index)}>-</button>{quantities[index]}<button className="incbtn" onClick={() => incQuantity(index)}>+</button></h3>
                        <button className="removebtn" onClick={() => removeItem(index)}>Remove</button>
                    </div>
                ))}
            </div>
            <h2>Total Price: ₹{totalPrice}.00/-</h2>
        </div>
    );
}

export default Cart;
