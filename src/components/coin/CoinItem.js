import React from 'react'
import './coin.css'
import axios from 'axios'

const CoinItem = (props) => {
  
  return (
    <div className='coin-row'>
        <p>{props.market_cap_rank}</p>
        <div className='img-symbol'>
            <img src={props.img}/>
            <p>{props.id}</p>
        </div>
        <p>23</p>
        <p>24</p>
        <p>3353363</p>
<p>{props.total_volume.toLocaleString()}</p>        
    </div>
  )
}

export default CoinItem