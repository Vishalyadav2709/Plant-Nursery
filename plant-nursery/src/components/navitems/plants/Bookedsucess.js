import React from 'react'
import Header from '../../header/header'


const Bookedsucess = () => {
  
  return (
    <div style={{width:'100%'}}>
        <Header />
      <div style={{display:'flex', justifyContent:'center',flexDirection:'column',width:'100%',alignItems:'center',height:'100%'}} >
      <h1 >Your Order Booked Successfully !!</h1> <br>
      </br>
      <h2>Please see your message for further details !!</h2>
      </div>
    </div>
  )
}

export default Bookedsucess
