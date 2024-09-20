import React from 'react'
import NavigationBar from '../Components/Navbar/NavigationBar'
import Slider from '../Components/Slider';

import { RG1 } from '../Components/ReactGrids/RG1';
import { RG2 } from '../Components/ReactGrids/RG2';
import { RG3 } from '../Components/ReactGrids/RG3';
import { RG4 } from '../Components/ReactGrids/RG4';
import { Footer } from '../Components/Footer';
import { FiveLineTitle } from './FiveLineTitle';

export const HomePage = () => {
    return (
        <div>
            <NavigationBar />
            <Slider />
            <div style={{ height: '7vh' }}></div>
            <RG1 />
            <RG2 />
            <RG3 />
            <RG4 />
            <Footer />
        </div>
    )
}
