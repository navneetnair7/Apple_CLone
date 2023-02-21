import React from 'react'
import macbook from './macbook.png'
import homepod from './homepod.png'
import ipad from './ipad.png'
import ipad2 from './ipad2.png'
import watch from './watch.png'
import watch2 from './watch2.png'
import './Card.css'

const Card = () => {
  return (
    <div className='cards'>
        <div className='cards_img_l'>
            <img src = {macbook} />
        </div>
        <div className='cards_img_r'>
            <img src={watch}></img>
        </div>
        <div className='cards_img_l'>
            <img src={homepod}></img>
        </div>
        <div className='cards_img_r'>
            <img src={ipad}></img>
        </div>
        <div className='cards_img_l'>
            <img src={watch2}></img>
        </div>
        <div className='cards_img_r'> 
            <img src={ipad2}></img>
        </div>
    </div>
  )
}

export default Card