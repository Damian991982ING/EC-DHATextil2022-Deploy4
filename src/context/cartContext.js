import { createContext, useContext, useState } from "react";

export const CartContext=createContext({
    products:[],
    addProduct: ()=>{},
    removeProduct: ()=>{},
    clearProducts: ()=>{},
    productCount: ()=>{},
    getTotal: ()=>{},
    isInCart: ()=>{},
    getCartQuantity: ()=>{},
    removeOneProduct: ()=>{},
    addOneProduct: ()=>{},
    unitProduct: ()=>{}



});

export const useCartContex=()=>useContext(CartContext);



export const CartContextProvider = ({children}) => {
    const [cartList, setCartList ]= useState([]);

    const addProduct=(product)=>{
        const repeatedItemIndex = cartList.findIndex(item => item.id === product.id)
        if (repeatedItemIndex !== -1) {
            setCartList(cartList.map(p => p.id === product.id ? {...p, quantity: p.quantity + product.quantity} : p));
        } else {
            setCartList([product, ...cartList]);
        }
        
    }

    const removeProduct = (id) => {
        const indexToRemove = cartList.findIndex(item => item.id === id);
        if (cartList[indexToRemove].quantity === 1) {
            setCartList(cartList.filter(i => i.id !== id))
        } else {
            setCartList(cartList.map(p => p.id === id ? {...p, quantity: p.quantity - 1} : p));
        }
    }

    const productCount=()=>{
        return cartList.reduce((total,product)=>total + product.quantity, 0);
    
    }

    const getTotal=()=>{
        return cartList.reduce((total,product)=>total + product.quantity * product.price, 0)
    }

    const clearProducts = () => {
        setCartList([]);
    }

    const isInCart = (id) => {
        return cartList.map(p => p.id).indexOf(id) !== -1;
    }

    const getCartQuantity = () => {
        return cartList.reduce((total, value) => {
            return total + value.quantity
        }, 0)
    } 

    const deleteById=(id)=>{
        setCartList(cartList.filter((product) => product.id !== id));


    }

    const removeOneProduct=(id)=>{
        if(unitPerProduct(id) === 1){
            return deleteById(id)
        }
        setCartList(
            cartList.map((product)=>
              product.id
              ? { ...product, quantity: product.quantity - 1 }
              : product
            )
        );
    
    };

    const addOneProduct=(id)=>{
        setCartList(
            cartList.map((product)=>
             product.id
             ? {...product, quantity: product.quantity + 1 }
             : product

        )
      )
    }

    const unitPerProduct=(id)=>{
        const foundInCart = cartList.find((product) => product.id === id);
        return foundInCart ? foundInCart.quantity : 0;
    };




  return (
    <CartContext.Provider value={{cartList, addProduct, removeProduct, clearProducts, productCount, getTotal, isInCart, getCartQuantity, removeOneProduct,addOneProduct, unitPerProduct}}>
        {children}

    </CartContext.Provider>
  )
}


export default CartContextProvider;