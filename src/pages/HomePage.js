import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Index from '../components/Index';
import Project0 from '../components/Project0';
import Project1 from '../components/Project1';
import Project2 from '../components/Project2';
import Project3 from '../components/Project3';
import Project4 from '../components/Project4';


function HomePage(props) {
    return(
        <div>
            <Header></Header>
            <div className='landingContainer'>
                <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
                <Index></Index>  
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