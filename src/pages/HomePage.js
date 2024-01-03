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

// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
//   } from "@/components/ui/card"
  

function HomePage(props) {
    return (
        <div>
            <Header></Header>

            <div className='landingContainer'>
                <img className='disc2' src={disc2} alt="dics2" />
                <Index></Index>
                <img className='disc' src={disc} alt="dics" />
            </div>

            <div className="projectShadow">
                <div className="hrContainer">
                    <hr className='new1'></hr>
                </div>
                <Project4></Project4>
                <div className="hrContainer">
                    <hr className='new'></hr>
                </div>
                <Project2></Project2>
                <div className="hrContainer">
                    <hr className='new'></hr>
                </div>
                <Project1></Project1>
                <div className="hrContainer">
                    <hr className='new'></hr>
                </div>
                <Project0></Project0>
                <div className="hrContainer">
                    <hr className='new'></hr>
                </div>
                <Project3></Project3>

            </div>
        </div>
    );
}

export default HomePage