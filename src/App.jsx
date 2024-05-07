import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AllRoutes from './AllRoutes'

const App = () => {
  return (
    <div className='App'>
        <Router>
            {/* Navbar */}
            <AllRoutes/>
        </Router>
    </div>
  )
}

export default App