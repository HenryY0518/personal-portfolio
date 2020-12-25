import React from 'react';

import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Index from '../components/Index';
import Project0 from '../components/Project0';
import Project1 from '../components/Project1';
import Project2 from '../components/Project2';


function HomePage(props) {
    return(
        <div>
            <Header></Header>
            <div className='landingContainer'>
                <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
                <Index></Index>  
            </div>
            <Project0></Project0>
            <Project1></Project1>
            <Project2></Project2>
            {/* <Carousel/> */}
        </div>
    );    
}

export default HomePage