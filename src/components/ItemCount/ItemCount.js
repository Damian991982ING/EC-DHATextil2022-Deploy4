import React, {useState} from "react";
import "./ItemCount.css";


const ItemCount = ({initial, min, max, onAdd}) => {
    const [counter, setCounter] = useState(initial)

    const handleIncrement=()=>{
       counter < max ? setCounter(counter + 1) : alert("Maximo Alcanzado");
    }
    const handleDecrement=()=>{
        counter > min ? setCounter(counter - 1) : alert("Minimo Alcanzado");
    }
    const handleClick=()=>{
        onAdd(counter);
    }
    return(
        <div className="amount">
            <button className="count" onClick={handleDecrement}>-</button>
             <span>{counter}</span>
            <button className="count" onClick={handleIncrement}>+</button>
            <div className="details">
                <div className="box-details">
                     <button className="cart" onClick={handleClick}>Add to cart</button>

                </div>
                
            </div>
            
        </div>
        
        


        
        
         

        

    );
}

export default ItemCount