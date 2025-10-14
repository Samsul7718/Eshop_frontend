import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {
  const {cart,incQty,decQty,remove}=useCart();
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
          <button onClick={()=>decQty(item.id)}>-</button>
          <span>{item.qty}</span>
          <button onClick={()=>incQty(item.id)}>+</button>
          <button onClick={()=>remove(item.id)}>remove</button>
         </div>

        </div>
      ))}
    </div>
     )}
     <div className='border p-6 mt-4 flex justify-between'>
      <div className='flex flex-col gap-6'>
        <div className='text-bold-500 text-2xl text-gray-800'>Total Payble Amount</div>
      <span className='text-2xl font-bold'>$ 100</span>
      </div>
      <Link to='/payment'>  
      <button className='bg-green-400 text-white p-3 rounded-md shadow-md w-30 h-15 mt-5'>CheckOut</button>
     </Link>
     </div>
     
   
    </div>
   
  )
}

export default Cart