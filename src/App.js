import {useState, useEffect} from 'react'
import './App.css'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Login from './pages/login/Login'
import Header from './components/head/Header'

function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname)

  const handleNavigation = path => {
    window.history.pushState({path}, '', path)
    setCurrentRoute(path)
  }

  useEffect(() => {
    window.addEventListener('popstate', () => {
      setCurrentRoute(window.location.pathname)
    })

    return () => {
      window.removeEventListener('popstate', () => {
        setCurrentRoute(window.location.pathname)
      })
    }
  }, [])

  const renderComponent = () => {
    switch (currentRoute) {
      case '/':
        return <Home />
      case '/cart':
        return <Cart />
      case '/login':
        return <Login />
      default:
        return <Home />
    }
  }

  return (
    <div>
      <Header handleNavigation={handleNavigation} />
      {renderComponent()}
    </div>
  )
}

export default App
