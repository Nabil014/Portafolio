import React, {useState,useEffect} from 'react';

import './App.css';
import About from './components/About/About';
import Cover from './components/cover/Cover'
import Footer from './components/Footer/Footer';
import NavBar from './components/navbar/NavBar';
import Slider from './components/slider/Slider';
import Tech from './components/Tech/Tech';

function App() {
  const [scrollHeigth, setScrollHeigth] = useState(0)
  const handleScroll = ()=>{
    const position = window.pageYOffset;
    setScrollHeigth(position)
  }
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll)
  },[scrollHeigth])
  return (
    <div className="App">
      <NavBar scrolling={scrollHeigth}/>
      <Cover/>
      <About/>
      <Slider/>
      <Tech/>
      <Footer/>
    </div>
  );
}

export default App;
