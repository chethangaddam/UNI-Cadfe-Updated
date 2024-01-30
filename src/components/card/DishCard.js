import './dishcard.css'

function DishCard({dishData, onAddToCartClick}) {
  //   const {dishData} = props.dishData
  // console.log(dishData);
  //   const handlePlusClick = data => {
  //     setValue(value + 1)
  //     props.onPlusClick(data)
  //   }
  //   const handleMinusClick = data => {
  //     // value = value-1;

  //     setValue(value - 1 > 1 ? value - 1 : 0)
  //     props.onMinusClick(data)
  //   }
  return (
    <div className="dishcardMain1">
      <div className="dishcardMain">
        <div className="dishDetails">
          <div className="heading">
            <div
              className={`box ${
                dishData && dishData?.dish_Type === 2 ? 'veg' : 'non-veg'
              }`}
            >
              <div
                className={`circle ${
                  dishData && dishData?.dish_Type === 2 ? 'veg1' : 'non-veg'
                }`}
              />
            </div>
            <h3>{dishData && dishData?.dish_name}</h3>
          </div>
          <div className="itemsData">
            <div className="price">
              <p>{dishData && dishData?.dish_currency}</p>
              <p>{dishData && dishData?.dish_price}</p>
            </div>
            <div className="desc">
              <p>{dishData && dishData?.dish_description}</p>
            </div>
            {dishData && dishData?.dish_Availability ? (
              <div className="button">
                <button
                  type="button"
                  onClick={() => {
                    onAddToCartClick()
                  }}
                >
                  Add to cart
                </button>
              </div>
            ) : (
              <p className="unavailable">Currently unavailable</p>
            )}
          </div>
        </div>
        <div className="calories">
          <p>{dishData && dishData?.dish_calories} claories</p>
        </div>
        <div className="dishImage">
          <img src={dishData && dishData?.dish_image} alt="dish" />
        </div>
      </div>
    </div>
  )
}

export default DishCard

// dish_Availability
// :
// true
// dish_Type  2 veg and  1 for nonveg
// :
// 2
// dish_calories
// :
// 15
// dish_currency
// :
// "SAR"
// dish_description
// :
// "Fresh spinach, mushrooms, and hard-boiled egg served with warm bacon vinaigrette"
// dish_id
// :
// "100000001"
// dish_image
// :
// "https://i.imgur.com/PoJfqsD.jpg"
// dish_name
// :
// "Spinach Salad"
// dish_price
// :
// 7.95
