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

import Button from './Button';

function Project0(props) {

    return (
        <div className='project2' id='project2'>
            <div className='projectContainer'>
                <Button address={'/happy'}></Button>
                <ProjectInfo projectName="HappyHour" projectTagline="The only group sceduling product you need"></ProjectInfo>
                <div class="row">
                    <div class="column">
                        <img src={cross} />
                        <img src={car} />
                    </div>
                    <div class="column">
                        <img src={boi} />
                        <img src={truck} />
                    </div>
                    <div class="column">
                        <img src={shots} />
                        <img src={rice} />
                    </div>
                    <div class="column">
                        <img src={flower} />
                        <img src={light} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project0;