import React from 'react'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const {cart}=useCart();
  return (
    <div className='max-w-4xl mx-auto p-5'>
     <h1 className='text-2xl font-bold mb-4'>Your Shopping Cart</h1>
     {cart.length===0?
     (<h2>Cart Is Empty</h2>)
     :
     (
     <div>
      
    </div>
     )}
   
    </div>
   
  )
}

export default Cart