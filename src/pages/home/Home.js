import {useEffect, useState} from 'react'
import DishCard from '../../components/card/DishCard'
import './home.css'
import {useApiDataContext} from '../../states/ApiData'
import {useCartContext} from '../../states/CartContext'

function Home() {
  const apiData = useApiDataContext()
  const [categoryitemNumber, setCategoryItemNumber] = useState(0)
  const [categoryDishes, setCategoryDishes] = useState({})
  const temp = apiData && apiData[0]?.table_menu_list[0]
  const {addCartItem} = useCartContext()
  useEffect(() => {
    setCategoryDishes(temp)
  }, [temp])

  const handleMenuFilter = (index, data) => {
    setCategoryItemNumber(index)
    setCategoryDishes(data)
  }

  const handlePlusClick = data => {
    console.log('data', data)
  }
  const handleMinusClick = data => {
    console.log('data', data)
  }
  const handleAddToCart = data => {
    addCartItem(data)
  }
  //   console.log(categoryDishes);

  return (
    <div className="homeMain">
      <div className="meucategory">
        <div className="menuElements">
          {apiData &&
            apiData[0]?.table_menu_list.map((data, index) => (
              <div
                className={`categoryitem ${
                  categoryitemNumber === index ? 'categoryitemActive' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleMenuFilter(index, data)}
                  style={{
                    border: 'none',
                    background: 'white',
                    fontSize: '18px',
                    width: '100%',
                  }}
                >
                  {data.menu_category}
                </button>
              </div>
            ))}
        </div>
      </div>

      <div className="categoryDishes">
        {categoryDishes?.category_dishes &&
          categoryDishes?.category_dishes.map(dishData => (
            <div>
              <DishCard
                dishData={dishData}
                onPlusClick={() => handlePlusClick(dishData)}
                onMinusClick={() => handleMinusClick(dishData)}
                onAddToCartClick={() => handleAddToCart(dishData)}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Home
