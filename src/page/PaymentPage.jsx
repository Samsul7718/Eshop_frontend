import React from 'react'

const PaymentPage = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10 mt-20'>
      <div className='text-2xl font-bold mb-5'>PaymentPage</div>
       <div className='font-bold text-gray-600'>Total Amount: $100</div>
      <div className='flex items-center spaces-between justify-center gap-8'>
         <button className='bg-yellow-500 text-white rounded-md shadow-md p-3'>Shop More</button>
         <button className='bg-green-400 p-3 rounded-md shadow-lg w-30 h-14'>PayNow</button>
      </div>
     
    </div>
    
  )
}

export default PaymentPage