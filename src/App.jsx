import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './page/Home'
import Login from './page/Login'
import Cart from './page/Cart'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
       <Home/>
  </div>
  )
}

export default App