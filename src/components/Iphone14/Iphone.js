import React from 'react'
import './Iphone.css'
import Iheader from '../Iphone-header/iheader'
import iphoneimg from'./iphone.png'

const Iphone = () => {
  return (
    <div className='iphone' style={{backgroundColor: "white", color: "black"}}>
        <Iheader title = {"iPhone 14"} desc = {"Big and bigger."} />
        <img src={iphoneimg}/>
    </div>
  )
}

export default Iphone