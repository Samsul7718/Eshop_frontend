import React, { useState } from 'react'
import {useCart} from '../context/CartContext'
import { Link } from 'react-router-dom';

const PaymentPage = () => {
  const [paymentMethod,setPaymentMethod]=useState("card");
  const {cart} = useCart();
   const totalPrice=cart.reduce((sum,item)=>sum+item.price*(item.qty || 1),0);

   const handlePayment=()=>{
    alert(`Payment of $${totalPrice} done using ${paymentMethod}`);
   }
  return (
    <div className='flex flex-col items-center justify-center gap-10 mt-10'>
      <h2 className='text-2xl font-bold mb-5'>Payment</h2>

         <div
         className='font-bold text-gray-600 border p-2'>
          Total Amount: ${totalPrice}
          </div>
     {console.log('total payment amount',totalPrice)}

     <div className='space-y-2'>
       {["card","upi","netbanking","wallet","Cash On Delivery"].map((process)=>(
        <label key={process} className='flex items-center gap-2'>
          <input 
          name='paymentMethod'
          value={process}
          type="radio" 
          checked={paymentMethod===process}
          onClick={(e)=>setPaymentMethod(e.target.value)}
          />
          <span className='capitalize'>{process}</span>

        </label>
       ))}
     </div>
        {paymentMethod === "card" && (
        <div className="mt-2 space-y-2">
          <input type="text" placeholder="Card Number" className="border p-2 w-full" />
          <input type="text" placeholder="Name on Card" className="border p-2 w-full" />
          <div className="flex gap-2">
            <input type="text" placeholder="MM/YY" className="border p-2 w-1/2" />
            <input type="text" placeholder="CVV" className="border p-2 w-1/2" />
          </div>
        </div>
      )}
     <div className='flex justify-center gap-25 mt-0'>
      <Link to='/'>
         <button className='bg-yellow-500 text-white rounded-md shadow-md p-3'>Shop More</button>
        </Link>
     <button 
     onClick={handlePayment}
     className='bg-green-500 text-white px-6 py-3'>
      Pay ${totalPrice} 
     </button>

     </div>
     
      {/* <div className='flex items-center spaces-between justify-center gap-8'>
        <Link to='/'>
         <button className='bg-yellow-500 text-white rounded-md shadow-md p-3'>Shop More</button>
        </Link>
        <Link to='/cart'>
        <button className='bg-blue-400 p-3 rounded-md shadow-md'>go to cart</button>
        </Link>
        <Link to='/'>
         <button className='bg-green-400 p-3 rounded-md shadow-lg w-30 h-14'>PayNow</button>
        </Link>
      </div> */}
     
    </div>
    
  )
}

export default PaymentPage