import './cart.css'

import {Trash} from 'lucide-react'

import {useCartContext} from '../../states/CartContext'

function Cart() {
  const {
    cartList,
    removeAllCartItems,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
    removeCartItem,
  } = useCartContext()

  const handleRemoveAll = () => {
    removeAllCartItems()
  }
  const handleMinus = data => {
    decrementCartItemQuantity(data)
    console.log(data.quantity)
    if (data.quantity === 1) {
      removeCartItem(data)
    }
    // else{
    //     decrementCartItemQuantity(data);
    // }
  }
  console.log(cartList)
  return (
    <div className="cartmain">
      <button
        type="button"
        className="removeAll"
        style={{cursor: 'pointer'}}
        onClick={handleRemoveAll}
      >
        Remove All
      </button>
      <div className="cartMain">
        {cartList.map(dishData => (
          <div className="cartItemsDetails">
            <div className="cartContents">
              <div className="heading">
                <div
                  className={`box ${
                    dishData?.dish_Type === 2 ? 'veg' : 'non-veg'
                  }`}
                >
                  <div
                    className={`circle ${
                      dishData?.dish_Type === 2 ? 'veg1' : 'non-veg'
                    }`}
                  />
                </div>
                <h3>{dishData?.dish_name}</h3>
              </div>
              <div className="itemsData">
                <div className="price" style={{marginTop: '10px'}}>
                  <p>{dishData?.dish_currency}</p>
                  <p>{dishData?.dish_price}</p>
                </div>

                <div className="actionPlace">
                  <div className="button">
                    <div className="plus">
                      <button
                        type="button"
                        onClick={() => incrementCartItemQuantity(dishData)}
                      >
                        +
                      </button>
                    </div>
                    <div className="value">{dishData?.quantity}</div>
                    <div className="minus">
                      <button
                        type="button"
                        onClick={() => handleMinus(dishData)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="quantity">
                    <p>Total quantity :- {dishData.quantity}</p>
                  </div>
                  <div className="delete" style={{cursor: 'pointer'}}>
                    <button
                      type="button"
                      onClick={() => removeCartItem(dishData)}
                    >
                      <Trash color="red" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="totalPrice">
                <span>Total {dishData.dish_currency} :- </span>
                <p>{dishData?.quantity * dishData?.dish_price}</p>
              </div>
            </div>

            <div className="image">
              <img src={dishData?.dish_image} alt={dishData?.dish_name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
