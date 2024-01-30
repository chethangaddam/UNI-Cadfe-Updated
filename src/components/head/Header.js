import {ShoppingCartIcon} from 'lucide-react'
import './head.css'
import {useApiDataContext} from '../../states/ApiData'
import {useCartContext} from '../../states/CartContext'

function Header({handleNavigation}) {
  const apiData = useApiDataContext() // Replace with your actual API data
  const {cartList} = useCartContext() // Replace with your actual cart data

  return (
    <nav className="navbar">
      <div style={{cursor: 'pointer'}}>
        <button
          type="button"
          className="resturantName"
          onClick={() => {
            handleNavigation('/')
          }}
          style={{border: 'none', background: 'white'}}
        >
          {' '}
          <h2>{apiData && apiData[0]?.restaurant_name}</h2>
        </button>
      </div>
      <div style={{cursor: 'pointer'}}>
        <button
          type="button"
          className="myorder"
          onClick={() => {
            handleNavigation('/cart')
          }}
          style={{border: 'none', background: 'white'}}
        >
          <div className="order">
            <p>My Orders</p>
          </div>

          <div className="cartIcon">
            <span className="itemnumber">{cartList && cartList.length}</span>
            <ShoppingCartIcon size={30} />
          </div>
        </button>
      </div>
    </nav>
  )
}

export default Header
