import React, { useEffect, useState } from 'react';
import './App.css';
import {  faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from './components/Header/Header';
import Product from './components/Product/Product';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/')
    .then(res=> res.json())
    .then(data => setProducts(data))
  }, []);

  function handleAddToCart(product) {
    console.log('from add to cart button', product);
    const newCart = [...cart, product];
    setCart(newCart);
  }
  
  // cart calculation
  let totalAmount=0
  for (let i = 0; i < cart.length; i++) {
    
     totalAmount = cart[i].price+ totalAmount;
     totalAmount= Math.round(totalAmount);
     
    
  }
  console.log(totalAmount);

  
  return (
    <div className='container'>
      
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white">

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span ><FontAwesomeIcon icon={faBars} /></span>
  </button>
           
           <a className="navbar-brand ml-2 ml-sm-auto" href="#!">Global Store</a>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                   <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a>
                   </li>
                   <li className="nav-item"><a className="nav-link" href="#!">Shop</a></li>
                   <li className="nav-item"><a className="nav-link" href="#!">Check Out</a></li>
                   <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                   
               </ul>
       </div>
               <div className='cart cart-btn'>
                 
               <button className="btn btn-outline-dark " type="submit">
               <FontAwesomeIcon icon={faShoppingCart} />
                       <h6 style={{display:'inline-block'}}>Cart</h6>
                       <span className="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span>
               </button>
               <div className='shopping-cart'>
                 <p>Oedered Items: {cart.length}</p>
                 <h6>Total Amount : {totalAmount}</h6>
                 <div className='d-flex justify-content-center'>
                 <button className="btn btn-warning btncart" >Check out</button>
                 </div>
                 
               </div>
               
               </div>
   </nav>
      
   

        <div className='row header-card'>
          <Header></Header>
        </div>

        
        <br />
        <br />

        <div className=' product'>
        <h2 className='text-center mt-5 mb-3'>All Products</h2>

        {products.map(pd=>{
          
            return <Product handleAddToCart={handleAddToCart} product={pd} key={pd.id} ></Product>
        })}
        
        
        </div>
      

        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white"> &copy;<a href="https://www.linkedin.com/in/rakibul21"> Design & developed by Rakibul - 2021 </a></p>
            
            
            </div>
        </footer>
    
    </div>
  );
}

export default App;
