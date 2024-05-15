import React from 'react'
import './nav.css'
import Logo from '../../assets/logooyinda.png'
import Button from '../ui/Button' 
import { Link, NavLink } from 'react-router-dom'
const Nav = ({navName1,navName2,navName3,navName4}) => {
   
  return (
   
    <div className='navbar container ' >
<img src={Logo} alt='logo'/>

<div className='nav-link'>
    <ul>
     {/* <li><Link to={navName1}>{navName1}</Link></li>
     <li><Link to={navName2}>{navName2}</Link></li>
     <li><Link to={navName3}>{navName3}</Link></li>
     <li><Link to={navName4}>{navName4}</Link></li> */}
          
    
          <li><Link to='/'>Home</Link ></li>
        {/* <li><a href='#feature'>Feature</a></li> */}
        <li><Link to='/gallery'>Contact</Link ></li>
        <li><Link to='/gallery'>Gallery</Link></li>
        <Button text={'contact us'} href={'https://www.google.com'} btnClass={'btn-light'}/>
    </ul>
</div>
{/* <div className='nav-link-mobile'>
    <ul>
        <li><a href='#hero'>Home</a></li>
        <li><a href='#feature'>Feature</a></li>
        <li><a>Contact</a></li>
    
    </ul>
</div> */}
    </div>
  )
}

export default Nav