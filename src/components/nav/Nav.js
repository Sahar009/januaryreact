import React from 'react'
import './nav.css'
import Logo from '../../assets/logooyinda.png'
import Button from '../ui/Button' 
const Nav = () => {
    const lastList = 'Gallery'
  return (
    <div className='navbar container ' >
<img src={Logo} alt='logo'/>

<div className='nav-link'>
    <ul>
        <li><a href='#hero'>Home</a></li>
        <li><a href='#feature'>Feature</a></li>
        <li><a>Contact</a></li>
        <li><a>{lastList}</a></li>
        <Button text={'contact us'} href={'https://www.google.com'} btnClass={'btn-light'}/>
    </ul>
</div>
<div className='nav-link-mobile'>
    <ul>
        <li><a href='#hero'>Home</a></li>
        <li><a href='#feature'>Feature</a></li>
        <li><a>Contact</a></li>
        <li><a>{lastList}</a></li>
    </ul>
</div>
    </div>
  )
}

export default Nav