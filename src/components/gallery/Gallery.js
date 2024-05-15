import {useState} from 'react'
import Nav from '../nav/Nav'
import Button from '../ui/Button'
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {

const [number, setNumber] = useState(0)

//handler function
 const increaseHandler = () =>{
setNumber(number  +1)
 }
 //decreas function
  const DecreaseHandler = () =>{
    setNumber(number -1)
  }

  //reset button
  const resetHandler = () =>{
    setNumber(0)
  }

  // const color = number < 0 ? 'red' :'green'
  var color = 'black'

  if(number > 0){
    color = 'green'
  } else{
   color = 'red'
  } 

  // var onLine = true

//   if (onLine){
// console.log('is online');
//   }
//   else{
//     console.log('is offline');
//   }
// const message = onLine ?'is online' : 'is offline'
// console.log(message);

// const age = 10;
// const msssg = age >= 20 ? 'you are eligible' : 'not eligible'
// console.log(msssg);


const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleNameChange = (e) =>{
setName(e.target.value)
}


const handleSubmit = (e) =>{
e.preventDefault();
if(name == ''){
  toast.error('input field cannot be empty')
}

setName('')

}

 
  return (
    <div >
{/* <h1 style={{color: number < 0 ? 'red' : number > 0 ? 'green' : 'black'}}>{number}</h1>
<button onClick={DecreaseHandler}>Deccrease Number</button>
<button onClick={resetHandler}>Reset Button</button>
<button onClick={increaseHandler}>INCREASE NUMBER</button> */}

<form >
  <label>Name:</label>
  <input type='text' placeholder='enter name ...' value={name} onChange={handleNameChange}/>
  <br/>
  <label>Email:</label>
  <input type='email' placeholder='enter email ...' value={email}/>
  <br/>
  <label>password:</label>
  <input type='password' placeholder='enter password' value={password}/>
  <input type='submit' value='submit' onClick={handleSubmit}/>
</form>



        
  </div>
  )
}

export default Gallery