import React from 'react';
import ProjectInfo from '../components/ProjectInfo';



import sticky from '../assets/images/happy/sticky.jpeg'
import landing from '../assets/images/happy/landing.jpeg'
import gradient from '../assets/images/happy/gradient.jpeg'
import login from '../assets/images/happy/login.jpeg'
import happyBranding from  '../assets/images/happy/happyBranding.jpeg'
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
                        <img src={happyBranding} alt='happyBranding'/>
                        <img src={login} alt='login' />
                    </div>
                    <div class="column">
                        <img src={landing} alt='landing' />
                        <img src={bigHappy} alt='bigHappy' />
                    </div>
                    <div class="column">
                        <img src={sticky} alt='sticky' />
                        <img src={gradient} alt='gradient' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project0;