import React from 'react'
import "./Notfoun.css"
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div className='cntr'>
    <div className='bcg'>
    </div>
    <Link to="/">

    <button className="btn btn-outline btn-primary flex items-center justify-center m-auto">Primary</button>
    </Link>
    
    </div>
  )
}

export default Notfound