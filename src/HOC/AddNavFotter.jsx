import React from 'react'
import Header from '../Components/Header'
import Fotter from '../Components/Fotter'



const AddNavFotter = ({ children }) => {
  return (
      <>
          <div className='h-[96px]  fixed w-full z-50'><Header /></div>
      <br /> <br /><br /><br />
      
      {children}
      <div><Fotter/></div>
      </>
  )
}

export default AddNavFotter