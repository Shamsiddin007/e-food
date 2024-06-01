import React from 'react'
import fullVed from '/public/vedio/fullvideo.mp4'


function Vedio() {
  return (
    <div className='flex items-center justify-center m-16'>
        <video autoPlay muted preload="1" loop className="w-3/5 rounded-3xl" src={fullVed}></video>
    </div>
  )
}

export default Vedio