import React from "react";
import Item from "../Item/Item";



const ItemList = ({items}) => {
    
    return(
        <div id="ItemList" className="products">
            
            {items.map(item =><Item item={item} key={item.id}/> )}

        </div>

    )

}
export default ItemList;