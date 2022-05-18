import { Routes, Route} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


import NavBar from './components/NavBar/NavBar';
import About from "./Views/About/About";
import Cart from "./Views/Cart/Cart";
import Contact from "./Views/Contact/Contact";



function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path="/" element={<ItemListContainer titleSection='All Products'/>} />
       
        <Route path="/category/:nameCat" element={<ItemListContainer titleSection='Category'/>} />
        <Route path="/product/:productId" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      
      <Footer/>
      
    </div>


    
   
  );
}

export default App;
