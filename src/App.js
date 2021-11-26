import React, { useState } from 'react'
import './App.css';
import CartItem from './component/CartItem.js';
import Filter from './component/Filter';
import ShoppingItem from './component/ShoppingItem';
import data from './data.json';


function App() {
  const [products, setproducts] = useState(data.products);
  const [Size, setSize] = useState('xxl')
  const [Sort, setSort] = useState('HIGH')
  const [cartItems, setcartItems] = useState(
    localStorage.getItem('cartItem')
      ?JSON.parse(localStorage.getItem('cartItem'))
      : []
      
  )

  const removeFromCart = (product) => {
    const cartItem = cartItems.slice();
  setcartItems(cartItem.filter(x=>x.id!==product.id))
    localStorage.setItem(
      "cartItem",
      JSON.stringify(cartItem.filter((x) => x.id !== product.id))
    );
  }
  const addToCart = (product) => {
    const cartItem = cartItems.slice();
    let alreadyInCart = false;
    cartItem.forEach(item => {
      if (item.id === product.id) {
      item.count++;
        alreadyInCart = true;   
      };
    })
    if (!alreadyInCart) {
      cartItem.push({ ...product, count: 1 })
    }
    setcartItems(cartItem)
    localStorage.setItem("cartItem",JSON.stringify(cartItem))
  }
 
  
  return (
    <div className="App">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="cart">
          <Filter
            product={products}
            Size={Size}
            Sort={Sort}
            setSize={setSize}
            setSort={setSort}
          />

          <CartItem
            product={products}
            setproduct={setproducts}
            Size={Size}
            Sort={Sort}
            addToCart={addToCart}
          />
        </div>
        <div className="shopping">
          {" "}
          <ShoppingItem cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
      </main>
      <footer>All rigths reserved.</footer>
    </div>
  );
  
}

export default App;
