import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import React from 'react'

import Home from './page/Home'
import Login from './page/Login'
import Cart from './page/Cart'
import PaymentPage from './page/PaymentPage'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/payment' element={<PaymentPage/>}/>
        </Routes>
      </Router>
  </div>
  )
}

export default App