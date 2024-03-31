import { Routes,Route } from 'react-router-dom';
import { useEffect } from 'react';
import Standing from './Pages/Standing';
import Aos from 'aos';
import "aos/dist/aos.css";
function App() {
  useEffect(()=>{
    Aos.init({duration:1000})
   },[])
  return (
   
    <Routes>
          <Route path='/' element={ <Standing/> }/>
    </Routes>
    
  );
}

export default App;
