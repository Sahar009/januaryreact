import { BrowserRouter, Routes,Route, Link } from 'react-router-dom';
import './App.css'
import { Feature } from './components/featured/Feature';
import Gallery from './components/gallery/Gallery';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav'
import Profile from './components/profile/Profile';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
 <BrowserRouter>
  <ToastContainer position="top-left"/>
 <Nav />
 <Routes>
  <Route path='/' element={
    <>
    <div className='app'>
  <Hero/>
  </div>
  <Feature/>
  <Profile/>
  </>
  }/>

<Route path='/gallery' element={<Gallery/>}/>
<Route path='*' element={<div style={{textAlign:'center'}}>
  <h1>Error 404</h1>
  <Link to='/' style={{color:'red', }}>Home</Link>
  </div>}/>
</Routes>
<Footer/>
</BrowserRouter>

  );
}

export default App;
