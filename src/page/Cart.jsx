import React from 'react'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const {cart,incQty}=useCart();
  return (
    <div className='max-w-4xl mx-auto p-5'>
     <h1 className='text-2xl font-bold mb-5'>Your Shopping Cart</h1>
     {cart.length===0?
     (<h2>Cart Is Empty</h2>)
     :
     (
     <div className='space-y-5'>
      {cart.map((item,index)=>(
        <div
        key={index}
        className='flex items-center justify-between border p-4 rounded-lg shadow-md'
        >
         <div className='flex item-center gap-4'>
          <img 
          src={item.imageUrl} 
          alt="image.name" 
          className='w-20 h-20 object-cover rounded-lg'
          />
          <div>
            <h1 className='font semi-bold'>{item.name}</h1>
            <p className='text-gray-500'>{item.price}</p>
          </div>
         </div>
         <div className='flex items-center gap-3'>
          <button>-</button>
          <span>{item.qty}</span>
          <button onClick={()=>incQty(item.id)}>+</button>
          <button>remove</button>
         </div>

        </div>
      ))}
    </div>
     )}
   
    </div>
   
  )
}

export default Cart