import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {ApiDataProvider} from './states/ApiData'
import {CartProvider} from './states/CartContext'

ReactDOM.render(
  <React.StrictMode>
    <ApiDataProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ApiDataProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
