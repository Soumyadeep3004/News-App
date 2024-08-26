import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './Components/NavigationBar'
import Slider from './Components/Slider';

import { RG1 } from './Components/ReactGrids/RG1';
import { RG2 } from './Components/ReactGrids/RG2';
import { RG3 } from './Components/ReactGrids/RG3';
import { RG4 } from './Components/ReactGrids/RG4';
import { Footer } from './Components/Footer';
function App() {

  return (
    <div>
      <NavigationBar/>
      <Slider/>
      <div style={{height:'7vh'}}></div>
      <RG1/>
      <RG2/>
      <RG3/>
      <RG4/>
      <Footer/>
    </div>
  )
}

export default App
