import React from "react";
import { Link } from "react-router-dom";
//import "./Item.css";

const Item=({item})=>{
    
    
    return(
        
        
            <div className="card">
                
                    <img src={item?.pictureUrl} alt="Imagen del product"/>
                
                <div className="box">
                    <h3 title={item?.title}>
                        
                    </h3>
                    <p>{item?.description}</p>
                    <h4>${item?.price}</h4>
                    <Link to={`/product/` + item?.id}>
                       <button>View Detail</button>

                    </Link>
                   
                    
                </div>
            </div>
            
        
        

        
    )

}
export default Item;