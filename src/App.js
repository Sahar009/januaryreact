import './App.css'
import { Feature } from './components/featured/Feature';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav'
function App() {
  return (
   <>
<div className='app'>
  <Nav/>
<Hero/>
</div>
<Feature/>
</>
  );
}

export default App;
