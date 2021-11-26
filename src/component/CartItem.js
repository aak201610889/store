import React from 'react'
import './CartItem.css'
// import Modal from 'react-modal'
// import Zoom from 'react-reveal'
function CartItem({ product, Sort, Size, addToCart }) {
  // const [model, setmodel] = useState(null)

  // const openModal = (product) => {
  //   setmodel({product})
  // }
  // const closeModal = () => {
  //   setmodel(null)
  // }
  // console.log(model);

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
        
        .filter((item) => item.availableSizes.indexOf(Size) > 0)
        .map((product) => (
          
          <div key={product.id}
            //onClick={() => openModal(product)}
          >
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
      {/* {product && (
        <Modal isOpen={false} onRequestClose={() => closeModal}>
          <Zoom>
            <button onClick={() => openModal(product)}>X</button>
            <img src={product.image} alt={product.title} />
          </Zoom>
        </Modal>
      )} */}


    </div>
  );
}

export default CartItem
