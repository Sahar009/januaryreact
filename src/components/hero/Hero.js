import React from 'react'
import './hero.css'
import heroIMG from '../../assets/hero-img.jpg'
import { Feature } from '../featured/Feature'
import Button from '../ui/Button'
const Hero = () => {
  return (
    <div id='hero' className='container'>
    <div className='hero-left'>
    <h1>
      <span>ENGLISH FANTASY</span>
<span>CROSS-PLATFORM SECURE</span>
<span>FANTASY LEAGUE</span> </h1>
<hr/>
<p>You can join and perticipate in our special Fantacy leages
</p>
<Button text={'play fantasy'} href={'appclick.com'}/>
    </div>
    <div className='hero-right'>
      <img alt='img' src={heroIMG}/>
    </div>
  
      </div>
  )
}

export default Hero