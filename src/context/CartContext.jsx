import { createContext, useContext, useState } from "react";

const CartContext=createContext();

export const useCart=()=>useContext(CartContext);

export const CartProvider=({children})=>{
    const [cart,setCart]=useState([])

const addToCart=(product)=>{
   const existing=cart.find((p)=>p.id===product.id);
   if(existing){
      setCart(prev=>prev.map(p=>p.id===product.id?{...p,qty:p.qty+1}:1))
   }else{
     setCart(prev=>[...prev,{...product, qty:1}])
   }
}
return(
<CartContext.Provider value={{cart,addToCart}}>
    {children}
</CartContext.Provider>
)

}