import React from 'react'

const OrderPage = () => {
    return (
      <section>
        <div>
            <h2 className='text-xl font-bold mt-10 mb-5 text-center'>Order Placed Successfully!</h2>
            <div>
                <p className='text-center mt-10'>Thank you for your purchase. Your order has been placed and is being processed.</p>
                <div className='flex justify-center mt-5'>
                    <img
                    src="https://cdn.dribbble.com/users/1283437/screenshots/4928332/checked-dribbble-looped.gif"
                    alt="Order Success"
                    className='w-48 h-48'
                    />
            </div>
        </div>
        </div>
      </section>
  )
}

export default OrderPage