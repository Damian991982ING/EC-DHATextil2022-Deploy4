import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import CartContextProvider from './context/cartContext';
import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCheWEh1bBctx7ouKA8pX9oWdTR00O-naY",
  authDomain: "ec-dhatextil2022.firebaseapp.com",
  projectId: "ec-dhatextil2022",
  storageBucket: "ec-dhatextil2022.appspot.com",
  messagingSenderId: "1066442499078",
  appId: "1:1066442499078:web:1e73a6c8de79dc9bce0f87"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <React.StrictMode>
        <CartContextProvider>
          <App />
        </CartContextProvider>
    </React.StrictMode>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
