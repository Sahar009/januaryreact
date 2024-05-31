import { useEffect, useState } from 'react'
import './coinRoutes.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CoinRoute = () => {
const [coin, setCoin] = useState([])
const params = useParams()

   useEffect(() => {
   
    const url = `https://api.coingecko.com/api/v3/coins/${params.id}`
    axios.get(url)
    .then((response) =>{
    
    setCoin(response.data)
    console.log(response.data)
    }
).catch((err) => console.log(err))
    
   }, [])
   

  return (
    <div>
        <div className='coin-container'>
            <div className='content'>
                <h1>{coin.name}</h1>
            </div>
<div className='content'>
<div className='rank'>
<span className='rank-btn'>Rank # {coin.
market_cap_rank
}</span>

</div>
<div className='info'>
    <div className='coin-heading'>
{coin.image? <img alt='coin logo' src={coin.image.small}/> :null}
<p>{coin.name}</p>
<p>{coin.symbol}</p>
    </div>

</div>
<div className='coin-price'>

{coin.market_data?.current_price ? <h1>{coin.market_data.current_price.ngn.toLocaleString()}</h1> : null}
</div>
</div>
        </div>
        <div className='content'>
            <table>
                <thead>
                    <tr>
                        <th>1h</th>
                        <th>24h</th>
                        <th>7d</th>
                        <th>14d</th>

                        <th>30d</th>
                        <th>1yr</th>
                    </tr>
                </thead>
                <tbody>
                   <tr>
                   <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                   </tr>
                </tbody>
            </table>
        </div>
        <div className='content'>
        <div className='stats'>
            <div className='left'>
            <div className='row'>
            <h4>24 Hour Low</h4>
            <p>test</p>
            </div>
            <div className='row'>
            <h4>24 Hour High</h4>
            <p>test</p>
            </div>
            <div className='right'>
            <div className='row'>
            <h4>Market Cap</h4>
            <p>test</p>
            </div>
            <div className='row'>
            <h4>Circulating Supply</h4>
            <p>test</p>
            </div>
            </div>
            </div>

        </div>
        <div className='content'>
            <div className='about'>
                <h3>About</h3>
                <p>vzvzcnjznxMKxnzjkcncnkzmcnkZCcmx</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CoinRoute