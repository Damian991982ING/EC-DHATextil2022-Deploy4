import BH1 from "../assets/BH1.jpg";
import BH2 from "../assets/BH2.jpg";
import BH3 from "../assets/BH3.jpg";
import BH4 from "../assets/BH4.jpg";
import BH5 from "../assets/BH5.jpg";
import BH6 from "../assets/BH6.jpg";

const products = [
    {
        id:1,
        title:"BH1",
        description:"Polyamide thread spool",
        category:"Polyamide",
        price:100,
        colors:["red","black","crimson","teal"],
        sizes:["1d","2d","3d","4d"],
        stock:10,
        pictureUrl:BH1},
    {
        id:2,
        title:"BH2",
        description:"Polyester thread spool",
        category:"Polyester",
        price:200,
        colors:["red","black","crimson","teal"],
        sizes:["1d","2d","3d","4d"],
        stock:10,
        pictureUrl:BH2},
    {
        id:3,
        title:"BH3",
        description:"Acrylic thread spool",
        category:"Acrylic",
        price:300,
        colors:["red","black","crimson","teal"],
        sizes:["1d","2d","3d","4d"],
        stock:10,
        pictureUrl:BH3},
    {
        id:4,
        title:"BH4",
        description:"Plasma polymerization polyamide thread spool",
        category:"Polyamide",
        price:200,
        colors:["red","black","crimson","teal"],
        sizes:["1d","2d","3d","4d"],
        stock:10,
        pictureUrl:BH4},
    {
        id:5,
        title:"BH5",
        description:"Plasma polimerization polyester thread spool",
        category:"Polyester",
        price:400,
        colors:["red","black","crimson","teal"],
        sizes:["1d","2d","3d","4d"],
        stock:10,
        pictureUrl:BH5},
    {
        id:6,
        title:"BH6",
        description:"Plasma polimerization acrylic thread spool",
        category:"Acrylic",
        price:600,
        colors:["red","black","crimson","teal"],
        sizes:["1d","2d","3d","4d"],
        stock:10,
        pictureUrl:BH6},

]

export const getProducts=()=>{
    return new Promise((resolve,reject)=>{
        resolve(products);
    });
};

export const getProductById=(id)=>{
    return new Promise((resolve,reject)=>{
        resolve(products.find((p)=> p.id === Number(id)))
    });

};

export default products

