import React from 'react'
import './CartItem.css'

function CartItem({ product, Sort, Size, addToCart }) {

  return (
    <div className="cartitem">
      {product
        .sort((a, b) =>
          Sort === "HIGH"
            ? a.price < b.price
              ? 1
              : -1
            : a.price > b.price
            ? 1
            : -1
      )
        // FIXME: this is a bug, the filter is not working
        
        .filter((item) => item.availableSizes.indexOf(Size) > 0)
        .map((product) => (
          <div key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                width="250px"
                height="320px"
              />
              <div className="sub__title">
                <p>{product.price}</p>
                <p>{product.title}</p>
                <p>{product.availableSizes.indexOf(Size)}</p>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="additem__btn"
              >
                add Item
              </button>
            </div>
          
        ))}
  


    </div>
  );
}

export default CartItem
