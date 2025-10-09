import React from 'react'

const Home = () => {
  return (
     <div className='p-4'>
        <div className='flex items-center justify-between gap-80 p-5'>
            <div className='flex-1'></div>
            <h2 className='text-2xl mb-2 font-bold '>Home Page</h2>
            <button className='bg-yellow-300 rounded-lg shadow-md text-black p-3 m-4'>login</button>
            <button className='bg-sky-400  rounded-lg shadow-md text-white p-4 m-4'>cart</button>
        </div>
        <hr />
    </div>
  )
}

export default Home