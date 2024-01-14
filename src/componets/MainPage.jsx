import React from 'react';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from './Home';
import Swap from './Swap';
import Lend from './Lend';
import Stake from './Stake';


const MainPage = () => {
    return(
        <Router>
            <Routes>
             <Routes path='/' element={<Home/>}/>
             <Route path='stake' element={<Stake />}/>
             <Route path='/lend' element={<Lend />}/>
             <Route path='/swap' element={<Swap/>} />
            </Routes>
        </Router>
    )
}

export default MainPage;