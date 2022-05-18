import React,{useState,useEffect, useContext} from "react";
import Loading from "../Loading/Loading";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import Products from "../../db/products";
import { useParams } from "react-router-dom";
import CartContext from "../../context/cartContext";
import {collection,getDocs, getFirestore, limit, query, where} from "firebase/firestore";


const getProducts =(nameCat)=> {
    const db = getFirestore();

        const itemCollection = collection(db, 'items');


        const q = nameCat && query(
            itemCollection,
            where('category','==', nameCat)
           
        );

        return getDocs(q || itemCollection)
    

};

const ItemListContainer = ({titleSection}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading]= useState(true);

    const {nameCat} = useParams();

    const cartCtx = useContext(CartContext);

    

    useEffect(()=>{

        //const db = getFirestore();

        //const itemCollection = collection(db, 'items');


       // const q = query(
            //itemCollection,
           // where('price','<',300),
           // limit(1)
       // );

       // getDocs(q)
        //.then(snapshot=>{
            //console.log(snapshot.docs[0].id)
            //console.log(snapshot.docs[0].data())
           // console.log(snapshot.docs.map(doc=>{
                //return {...doc.data(), id: doc.id}
            //}));

       // })
        //.catch(
          //  err=>console.log(err)
        //)



        getProducts(nameCat)
        .then((snapshot)=>{
           setProducts(snapshot.docs.map(doc => { 
               return {...doc.data(), id: doc.id }
            }));
            setLoading(false);
        })
        .catch(err => {
            console.log(err)

        });

    },[nameCat]);


    return(
        <div id="ItemListContainer">
            <h1>{titleSection}</h1>
            {loading && <Loading/>}
            <ItemList items={products}/>
            
        </div>
       

        

    );

}

export default ItemListContainer;