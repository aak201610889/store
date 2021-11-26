import React, { useState } from 'react'
import './ShoppingItem.css'
 import Fade from 'react-reveal'
function ShoppingItem({ cartItems, removeFromCart, }) {
  const [showProceed, setshowProceed] = useState(false)
  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  const [address, setaddress] = useState("")
  return (
    <div className="shopping__cart">
      <div className="numb__type">
        {cartItems.length === 0 ? (
          <div>
            {" "}
            cart item is
            <span>0</span>
          </div>
        ) : (
          <div>
            {" "}
            cart item is <span>{cartItems.length} </span>
          </div>
        )}
      </div>
      <Fade left cascade>
        <div className="details__shopping">
          {cartItems.map((item) => (
            <div className="detail__shopping__item" key={item.id}>
              <div className="shopping__image">
                <img src={item.image} alt={item.title} />
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </div>
              <div className="shopping__count">
                <p>{item.title}</p>
                <p>
                  {item.count}x<span>{item.price} $</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </Fade>

      {cartItems.length !== 0 && (
        <div className="total__shopping">
          <div>
            {" "}
            <span>Total : </span>
            {cartItems.reduce((a, c) => a + c.price * c.count, 0)} $
          </div>
          <button
            onClick={() => {
              setshowProceed(true);
            }}
          >
            Proceed
          </button>
        </div>
      )}

      {cartItems.length !== 0 && showProceed && (
        <Fade right cascade>
          <form className="checkout__shopping" >
            {/*  TODO: ADD BACKEND  */}
            <p>Email:</p>
            <input type="email" onChange={(e)=>{setemail(e.target.value)}} />
            <p>Name:</p>
            <input type="text"  onChange={(e)=>{setname(e.target.value)}}/>
            <p>Address:</p>
            <input type="text" onChange={(e) => { setaddress(e.target.value) }} />
            {console.log('name is'+name)} 
            <br />
            <button>checkout</button>
          </form>
        </Fade>
      )}
    </div>
  );
}

export default ShoppingItem
