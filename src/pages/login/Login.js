import {useState} from 'react'
import './login.css'
import {CupSoda, Eye, EyeOff} from 'lucide-react'
import Cookies from 'js-cookie'

function Login() {
  const [username, setUserName] = useState('')
  const [password, setpassword] = useState('')
  const [isClicked, setIsClicked] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = async e => {
    e.preventDefault()
    try {
      const response = await fetch('https://apis.ccbp.in/login', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })

      if (response.status === 200) {
        console.log(response.json())
      }

      console.log(response)
      // Cookies.set('jwt', response.jwt_token)
      setUserName('')
      setpassword('')
      setIsLoggedIn(true)
    } catch (error) {
      console.error(error)
    }
  }

  const handleTogglePasswordVisibility = () => setIsClicked(!isClicked)

  const renderLoginForm = () => (
    <form onSubmit={handleLogin}>
      <h2 className="logintitle">
        Login To your Account
        <CupSoda color="red" />
      </h2>
      <input
        onChange={e => setUserName(e.target.value)}
        value={username}
        type="text"
        placeholder="user-id"
        className="userinput"
      />
      <div className="passwordfield">
        <input
          onChange={e => setpassword(e.target.value)}
          type={`${isClicked ? 'text' : 'password'}`}
          placeholder="*********"
          value={password}
        />
        <button
          type="button"
          className="viewpassword"
          onClick={handleTogglePasswordVisibility}
        >
          {!isClicked ? <EyeOff /> : <Eye />}
        </button>
      </div>
      <button type="submit" className="submitButton">
        Login
      </button>
    </form>
  )

  const renderLoggedInView = () => (
    <div>
      You are logged in! Redirecting to the home page...
      {/* You can also include home page content here */}
    </div>
  )

  return (
    <div className="loginMain">
      {isLoggedIn ? renderLoggedInView() : renderLoginForm()}
    </div>
  )
}

export default Login
