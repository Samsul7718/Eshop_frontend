import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
     <div className='p-4'>
        <div className='flex items-center justify-between gap-80 p-5'>
            <div className='flex-1'></div>
            <h2 className='text-2xl mb-2 font-bold '>Home Page</h2>
            <Link to="/login">
              <button className='bg-yellow-300 rounded-lg shadow-md text-black w-20 p-3 m-4'>login</button>
            </Link>
           
            <Link to='/cart'>
              <button className='bg-sky-400  rounded-lg shadow-md text-white w-20 p-4 m-4'>cart</button>
            </Link>
           
        </div>
            <hr />

        <ul className='space-y-4'>
            <li  className="flex items-center gap-4 border p-2 rounded">
                <img src="" alt="" />
                <div className='flex-1'>
                   <h3 className="font-medium">name</h3>
                   <p>price</p>
                </div>
                <button className="bg-violet-400 hover:bg-green-400 text-white px-4 py-2 rounded">Add to cart</button>
            </li>
        </ul>
    
    </div>
  )
}

export default Home