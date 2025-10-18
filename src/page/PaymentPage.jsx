import React from 'react'

const PaymentPage = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10 mt-20'>
      <div className='text-2xl font-bold mb-5'>PaymentPage</div>
      <div className='flex items-center spaces-between justify-center gap-4'>
         <div className='font-bold text-gray-600'>Total Amount: $100</div>
         <button className='bg-gray-500 text-white'>Shop More</button>
      <button className='bg-green-400 p-4 rounded-md shadow-lg'>PayNow</button>
      </div>
     
    </div>
    
  )
}

export default PaymentPage