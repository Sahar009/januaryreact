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
<div>
        {/* {
          Data.map((ali,key) =>{
return(
  <div className='prediction' key={key}>
  <h3>{ali.fixture}</h3>
  <h3>{ali.prediction}</h3>
  <div className='icon'>{ali.icon}</div>
</div>
 
)
          })
        } */}
        {
          Data.map(({fixture,prediction,icon}, key) =>{
            return(
              <div className='prediction' key={key}>
              <h3>{fixture}</h3>
              <h3>{prediction}</h3>
              <div className='icon'>{icon}</div>
            </div>
            )
          })
        }
       </div>
       </div>
        </div>
  )
}
