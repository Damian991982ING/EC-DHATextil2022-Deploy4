import React from "react";
import { useCartContex } from "../../context/cartContext";
import Cart from "../svg/cart.svg";

const Cartwidget=()=>{
    const {productCount}=useCartContex();
    return(
        <div className="cart-icon">
            <span>{productCount()}</span>
            <img src={Cart} alt="" width="30"/>
        </div>

    );
};

export default Cartwidget;