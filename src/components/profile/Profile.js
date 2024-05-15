import React from 'react'
import User from './User'
import './profile.css'
import  {profile}  from './ProfileData'

const Profile = () => {
  return (
    <div id='profile'>
        {
profile.map(({name,profession,image,twitterlink},key) =>{
    return(
<User name={name} profession={profession} image={image}  twitter_link={twitterlink} key={key}/>
    )
})
        }
        
    </div>
  )
}

export default Profile