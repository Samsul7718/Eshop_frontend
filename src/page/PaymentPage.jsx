import React from 'react'
import {useCart} from '../context/CartContext'
import { Link } from 'react-router-dom';

const PaymentPage = () => {
  const {cart} = useCart();
   const totalPrice=cart.reduce((sum,item)=>sum+item.price*(item.qty || 1),0);
  return (
    <div className='flex flex-col items-center justify-center gap-10 mt-20'>
      <div className='text-2xl font-bold mb-5'>PaymentPage</div>

         <div
         className='font-bold text-gray-600 border p-4'>
          Total Amount: ${totalPrice}
          </div>
     {console.log('total payment amount',totalPrice)}
     
      <div className='flex items-center spaces-between justify-center gap-8'>
        <Link to='/'>
         <button className='bg-yellow-500 text-white rounded-md shadow-md p-3'>Shop More</button>
        </Link>
        <Link to='/'>
         <button className='bg-green-400 p-3 rounded-md shadow-lg w-30 h-14'>PayNow</button>
        </Link>
      </div>
     
    </div>
    
  )
}

export default PaymentPage