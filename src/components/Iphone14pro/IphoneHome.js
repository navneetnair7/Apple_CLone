import React from 'react'
import './IphoneHome.css'
import iphone from './iphone.png'
import Iheader from '../Iphone-header/iheader'

const IphoneHome = () => {
  return (
    <div className='iphone' style={{position: "relative"}}>
        <p className='card_details'>Get up to ₹10000 instant savings on selected products with HDFC Bank credit cards.* Plus No Cost EMI from most leading banks.** Shop now</p>
        <Iheader title = {"iPhone 14 Pro"} desc = {"Pro. Beyond."} />
        <div>
            <img src={iphone} style={{position: "absolute", bottom: "0", left: "0"}}></img>
        </div>
    </div>
  )
}

export default IphoneHome