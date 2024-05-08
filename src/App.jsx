import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AllRoutes from './AllRoutes'
import Home from './components/MidSection/Home';
import Navbar from './components/Landing/Navbar'
import Offers from './components/Offers/offers'
import Footer from './components/Footer/footer'

const App = () => {
  return (
    <div className='App'>
        <Router>
             <Navbar/>
            <Home/>
            <Offers/>
            <Footer/>
            <AllRoutes/>
        </Router>
    </div>
  )
}

export default App
