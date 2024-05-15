import React from 'react'
import { AiFillBehanceCircle } from "react-icons/ai";
import './profile.css'
// import PROFILE1 from '../../assets/etty-fidele-KmaM6AV4bhQ-unsplash.jpg'
const User = ({name,profession,twitter_link,image}) => {
  return (
    <div className='user'>
        <img src={image} alt='img1'/>
        <h2>Name: {name}</h2>
        <hr/>
        <h3>Profession: {profession}</h3>
        <hr/>
        <a href={twitter_link} target='_blank'><AiFillBehanceCircle color='blue'/></a>
    </div>
  )
}

export default User