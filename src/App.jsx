import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AllRoutes from './AllRoutes'
import Home from './Pages/Home/Home'
import Otp from './Pages/Otp/Otp'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'

const App = () => {
  return (
    <div className='App'>
        <Router>
            {/* Navbar */}
            <Home/>
            <Otp/>
            <Login/>
            <Signup/>
            <AllRoutes/>
        </Router>
    </div>
  )
}

export default App