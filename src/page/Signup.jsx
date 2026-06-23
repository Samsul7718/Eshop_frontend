import React from 'react'

const Signup = () => {
  return (
    <>
    <h2>Signup</h2>
    <div>
     <form>
      <input type="name" placeholder='Enter your Name' />
      <input type="password" placeholder='Enter your Password' />
      <input type="mobile" placeholder='Enter your mobile' />
      <input type="email" placeholder='Enter your email' />
      <input type="city" placeholder='Enter your city' />
      <input type="gender" placeholder='Enter your gender' />
      <button type='submit'>Signup</button>
     </form>
    </div>
    </>
  )
}

export default Signup