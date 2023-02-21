import React from 'react'
import './iphoneheader.css'

const iheader = (props) => {
  return (
    <div>
      <div className='iphone_title'>
              {props.title}
          </div>
          <div className='iphone_slogan'>
              {props.desc}
          </div>
          <div style={{margin: "10px 0 0 0", height: "50px", }}>
              <div className='iphone_fiveg'>
                  With superfast 5G*
              </div>
          </div>
          <div className='iphone_links'>
              <a>
                  Learn More 
              </a>
              <a>
                  Buy
              </a>
          </div>
    </div>
  )
}

export default iheader