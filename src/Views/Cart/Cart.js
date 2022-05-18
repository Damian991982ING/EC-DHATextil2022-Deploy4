import React from "react";

import { useCartContex } from "../../context/cartContext";
import { Link } from "react-router-dom";

const Cart=()=>{
    const {cartList,removeProduct,clearProducts, getTotal, removeOneProduct, addOneProduct}=useCartContex();

    if(cartList.length === 0){
        console.log("El carrito tiene:", cartList)

        return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2>
    }



    return(
        <>
        {
            cartList.map(product=>(
                <div className="details cart" key={product.id}>
                    <div className="img-container" style={{backgroundImage: `url(${product.pictureUrl})`}}/>

                    <div className="box-details">
                        <h2 title={product.title}>{product.title}</h2>
                        <h3>${product.price}</h3>
                        <p>{product.description}</p>

                        <div className="amount">
                            <button className="count" onClick={()=>removeOneProduct(product.id)}>-</button>
                            <span>{product.quantity}</span>
                            <button className="count" onClick={()=>addOneProduct(product.id)}>+</button>

                        </div>

                        <button className="delete" onClick={()=>removeProduct(product.id)}>x</button>

                    </div>

                </div>
            ))

        }
        <div className="total">
            <Link to={'/payment'}>Payment</Link>
            <h3>Total:${getTotal()} </h3>
        </div>
        <div className="details">
            <div className="box-details">
               <button className="cart" onClick={()=>clearProducts()}>Delete all</button>
               <Link to={'/'}>
                <button className="cart">Return</button>
               </Link>

            </div>

        </div>
        </>
    )
}
export default Cart;