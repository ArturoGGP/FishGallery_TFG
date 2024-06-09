import React from 'react'
import './scrollup.css'

function ScrollUp() {
  return (
    <button className='Up' onClick={() => window.scrollTo(0, 0)}><h1>^</h1></button>
  )
}

export default ScrollUp
