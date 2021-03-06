import React,{useState,useEffect} from "react";
import Loading from "../Loading/Loading";
import ItemDetail from "../ItemDetail/ItemDetail";
import db from "../../Firebase/FirebaseConfig.js";
import { useParams } from "react-router-dom";
import {doc, getDoc} from "firebase/firestore"


const getProduct=(productId)=> {
   

   const productRef = doc(db,'items', productId);

   return getDoc(productRef);
    
}
  


const ItemDetailContainer=()=>{
   


    const [product,setProduct] = useState([]);
    const [loading, setLoading]= useState(true);

    const { productId } = useParams();



    useEffect(()=>{
        
        getProduct(productId)
        .then(snapshot=>{
            setProduct({...snapshot.data(), id: snapshot.id});
            setLoading(false);
            
        })
        .catch(err=>{
            console.log(err);
        });
    },[productId])

   

    return(
        <div id="ItemDetailContainer">
            {loading && <Loading/>}
            <ItemDetail product={product}/>
        </div>
    )



}

export default ItemDetailContainer;