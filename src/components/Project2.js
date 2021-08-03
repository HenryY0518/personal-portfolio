import React from 'react';
import ProjectInfo from '../components/ProjectInfo';

import cross from '../assets/sample/cross.jpeg';
import car from '../assets/sample/car.jpeg';
import truck from '../assets/sample/truck.jpeg';
import rice from '../assets/sample/rice.jpeg';
import flower from '../assets/sample/flower.jpeg';
import boi from '../assets/sample/boi.jpeg';
import sky from '../assets/sample/sky.jpeg';
import light from '../assets/sample/light.jpeg';
import soup from '../assets/sample/soup.jpeg';
import grass from '../assets/sample/grass.jpeg';
import tea from '../assets/sample/tea.jpeg';
import shots from '../assets/sample/shots.jpeg';


import sticky from '../assets/images/happy/sticky.jpeg'
import landing from '../assets/images/happy/landing.jpeg'
import gradient from '../assets/images/happy/gradient.jpeg'
import login from '../assets/images/happy/login.jpeg'
import happyBranding from  '../assets/images/happy/happyBranding.jpeg'
import long from  '../assets/images/happy/long.jpeg'
import bigHappy from  '../assets/images/happy/bigHappy.jpeg'

import Button from './Button';

function Project0(props) {

    return (
        <div className='project2' id='project2'>
            <div className='projectContainer'>
                <Button address={'/happy'}></Button>
                <ProjectInfo projectName="HappyHour" projectTagline="Group scheduling made simple"></ProjectInfo>
                <div class="row">
                    <div class="column">
                        <img src={happyBranding} />
                        <img src={login} />
                    </div>
                    <div class="column">
                        <img src={landing} />
                        <img src={bigHappy} />
                    </div>
                    <div class="column">
                        <img src={sticky} />
                        <img src={gradient} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project0;