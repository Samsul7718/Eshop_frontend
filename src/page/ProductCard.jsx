import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4'>
          {item.map((product,index)=>(
     <div 
     key={index}
     className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full max-h-92 p-2 object-contain"
      />
      <div className="p-6">
        <div className='flex items-center justify-between'>
             <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
             <p className="text-lg font-bold text-green-600 mb-3">${product.price}</p>
        </div>
       
        <div className='flex justify-center p-6'>
           <button
            className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition-all">
            Add to Cart
           </button>
        </div>
          
      </div>
      </div>
     ))}
    </div>
     
  );
}

export default ProductCard