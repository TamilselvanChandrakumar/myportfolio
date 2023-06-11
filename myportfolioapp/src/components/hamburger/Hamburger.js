import React from 'react'
import './Hamburger.css'
import {Link, useNavigate} from 'react-router-dom'
export default function Hamburger() {
  const navigate=useNavigate()
  const cancelbutton=()=>{
   navigate('/')
  }
  return (
    <>
    <div className='hamlist'>
    <button className='button' onClick={cancelbutton}>X</button>
    <ul className='linklist'>
            <li><Link to='/' className='menuname'>Home</Link ></li>
            <li><Link to='/about' className='menuname'>About</Link ></li>
            <li><Link to=''className='menuname'> Skills</Link ></li>
            <li><Link to=''className='menuname'>Contact</Link ></li>
    </ul>
</div>  
  
    </>
  )
}
