import React from 'react';

import Header from '../components/Header';
import Index from '../components/Index';
import Project0 from '../components/Project0';
import Project1 from '../components/Project1';
import Project2 from '../components/Project2';
import Project3 from '../components/Project3';
import Project4 from '../components/Project4';

import disc from '../assets/images/disc.jpeg';
import disc2 from '../assets/images/disc2.jpeg';




function HomePage(props) {
    return(
        <div>
            <Header></Header>
            <div className='landingContainer'>
                <img className='disc2' src={disc2} alt="dics2"/>
                <Index></Index>  
                <img className='disc' src={disc} alt="dics"/>
            </div>
            <Project4></Project4>
            <Project2></Project2>
            <Project1></Project1>
            <Project0></Project0>
            <Project3></Project3>
        </div>
    );    
}

export default HomePage