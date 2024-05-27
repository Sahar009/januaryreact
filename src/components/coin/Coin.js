import  { useState,useEffect } from 'react'
import './coin.css'
import CoinItem from './CoinItem'
import axios from 'axios'

const Coin = () => {
const [coins, setCoins] = useState([])


// try {
//     const name = 'thomas'
// } catch (error) {
//     console.log(error.message);
// }

    
  // useEffect(() => {
  //   var url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
  //   axios.get(url)
  // .then(res => {
  //   console.log(res.data);
  //   setCoins(res.data)
  // }).catch((err) =>{
  //   console.log(err);
  // })
  
   
  // }, [])

useEffect(() => {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
  .then((response) => {
   
    setCoins(response.data)
    console.log(coins);
  }).catch((error) =>{
    console.log(error);
  })
  

 
}, [])


  

  return (
    <div className='container'>
        <h1>Authorized Coins with current rate</h1>
        <div className='heading'>
            <p> #</p>
            <p>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p>Volume</p>
            <p>Mkt Cap</p>
        </div>

{
  coins.map(({market_cap,image,name,market_cap_rank}) =>
<CoinItem market_cap={market_cap} image={image} name ={name} market_cap_rank={market_cap_rank}/>
  )
}
        






{/*        
       {
        coins.map(({id,image,market_cap,market_cap_rank,total_volume

            }) =>(
            
            <CoinItem id={id} img={image} market_cap_rank={market_cap_rank} total_volume={total_volume}/>
        ))
       } */}
       










    </div>
  )
}

export default Coin