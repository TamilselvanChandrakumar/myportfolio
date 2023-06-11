
import {Link, useNavigate} from 'react-router-dom'
import './Navbar.css'
function Navbar() {

   const navigate=useNavigate();
  const handlehamburger=()=>{
  
  navigate('/hamburger');
  
  }
  return (
    <>
 <nav className='navbar'>

<div className='max-width'>

  <div className='logo'><Link to='' className='logoName'>Portfo<span className='logosplit'>lio</span></Link></div>

         <ul className='menu-list'>
            <li><Link to='/' className='menuname'>Home</Link ></li>
            <li><Link to='/about' className='menuname'>About</Link ></li>
            <li><Link to=''className='menuname'> Skills</Link ></li>
            <li><Link to=''className='menuname'>Contact</Link ></li>
            <li className='hamburger' onClick={handlehamburger}><i class="fa fa-bars"></i></li>
            
         </ul>
        
</div>






</nav>

    </>
  )
}

export default Navbar

