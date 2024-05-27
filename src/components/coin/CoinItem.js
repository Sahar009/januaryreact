import React from 'react'
import './coin.css'
import axios from 'axios'

const CoinItem = ({market_cap_rank,image,name,market_cap}) => {
  
  return (
    <div className='coin-row'>
        <p>{market_cap_rank}</p>
        <div className='img-symbol'>
            <img alt='symbol' src={image}/>
            <p>{name}</p>
        </div>
        <p>23</p>
        <p>24</p>
        <p>3353363</p>
<p>{market_cap}</p>        
    </div>
  )
}

export default CoinItem