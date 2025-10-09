import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import React from 'react'

import Home from './page/Home'
import Login from './page/Login'
import Cart from './page/Cart'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
  </div>
  )
}

export default App