import React from 'react'
import './feature.css'
import { AiFillBank } from "react-icons/ai";
import { Data } from './Data';




export const Feature = () => {
  console.log(Data);
  return (
    <div id='feature'>
        <AiFillBank size={40} color='pink'/>
        <h2>FEATURED PICKS</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reprehenderit corrupti? Sapiente blanditiis neque autem consectetur qui sunt labore? Nulla.</p>
       <div className='feature-section'>
        <div>

        </div>
        <div className='prediction'>
          <h3>Manchester - Chelsea</h3>
          <h3>1X</h3>
          <AiFillBank size={20} className='icon'/>
        </div>
       </div>
        </div>
  )
}
