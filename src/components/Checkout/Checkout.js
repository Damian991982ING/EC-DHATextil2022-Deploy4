import React,{useState, useEffect} from "react";
import {collection, addDoc} from "firebase/firestore";
import {Link} from "react-router-dom";
import CheckoutLogo from "../svg/checkout.svg";

import db from "../../Firebase/FirebaseConfig";
import { useCartContex } from "../../context/cartContext";
import Loading from "../Loading/Loading";



const Checkout=()=>{
     // { buyer: { name, phone, email, addres}, items: [{ id, title, price, quantity }], date, total }
     const {cartList, getTotal, clearProducts} = useCartContex();

     const [loading,setLoading] = useState(false);
     const [orderID, setOrderID] = useState();

     const [buyer, setBuyer]=useState({
         Name:"",
         Email:"",
         Phone:"",
         Addres:""

     })

     const {Name, Email, Phone, Addres} = buyer

     const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }))
    }

    const generateOrder = async(data)=>{
        setLoading(true);
        try {
            const col = collection(db, "Orders");
            const order = await addDoc(col, data);
            setOrderID(order.id);
            clearProducts();
            setLoading(false);

        } catch (error) {
            console.log(error);

        }

    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const date = new Date();
        const items= cartList.map(e=>{return {id:e.id, title:e.title, price:e.price, quantity:e.quantity}});
        const total= getTotal();
        const data = {buyer, items, date, total}
        console.log("data", data);
        generateOrder(data);

    }
    

    return(
        <>

           <div className="container">
             <div className="py-5 text-center">
                <img className="mb-4 d-block mx-auto" src={CheckoutLogo} alt="checkout logo" width={72} height={72}/>
                <h2>Checkout form</h2>
                <p className="lead">this form is where you can pay for your purchases</p>
             </div>
           </div>
           {loading ? <Loading/>
           : (!orderID &&
           <div className="container">
               <h4 className="mb-3">User data</h4>
               <form noValidate onSubmit={handleSubmit}>
                   <div className="row">
                       <div className="col-sm-6">
                           <label htmlFor="name" className="form-label">Name </label>
                           
                           <input id="name" name="Name" type="text" className="form-control" placeholder="name" value={Name} onChange={handleInputChange} required></input>
                       </div>
                       <div className="col-sm-6">
                           <label htmlFor="email" className="form-label">Email</label>
                           <input id="email" name="Email" type="text" className="form-control" placeholder="email" value={Email} onChange={handleInputChange} required></input>
                       </div>
                       <div className="col-sm-6">
                           <label htmlFor="phone" className="form-label">Phone</label>
                           <input id="phone" name="Phone" type="text" className="form-control" placeholder="phone" value={Phone} onChange={handleInputChange} required></input>
                       </div>
                       <div className="col-sm-6">
                           <label htmlFor="addres" className="form-label">Addres</label>
                           <input id="addres" name="Addres" type="text" className="form-control" placeholder="addres" value={Addres} onChange={handleInputChange} required></input>
                       </div>
        

                       
                       <div className="my-4"></div>
                    
                    
                       <button className="btn btn-primary" type={"submit"}>Confirm</button>


                   </div>

               </form>
           </div>)
           }

           <div>
               {
                   orderID && (
                       <div>
                           <h4>purchase completed successfully</h4>
                           <h4>{`Your purchase code is: ${orderID}`}</h4>
                           <Link to="/"><h5>make another purchase</h5></Link>
                       </div>

                   )
               }
           </div>
           <br/>

           
        </>
       
       
    )

}
export default Checkout;