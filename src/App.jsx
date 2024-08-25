import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './Components/NavigationBar'
import Slider from './Components/Slider';
import { Grid1, Grid2, Grid3, Grid4 } from './Components/Grids';
import { RG1 } from './Components/ReactGrids/RG1';
import { RG2 } from './Components/ReactGrids/RG2';
function App() {

  return (
    <div>
      <NavigationBar/>
      <Slider/>
      {/* <Grid1/> */}
      {/* <Grid2/>
      <Grid3/>
      <Grid4/> */}
      <RG1/>
      <RG2/>
    </div>
  )
}

export default App
