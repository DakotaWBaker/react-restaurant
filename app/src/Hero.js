import React from 'react'
import vid from './Happy Grillmore.mp4'

export default function Hero() {
  return (
    <>
    <div className="container-fluid hero">
      <div className="row" >
      <video id = "vid" autoPlay loop>
      
    <source src = {vid} id = 'heroimg' type="video/mp4" />
    </video>
    </div>
    </div>

  
    </>
  )
}
