import React from 'react';
import ProjectInfo from '../components/ProjectInfo';
import Button from './Button';

import persona2 from '../assets/images/ai/persona2.jpeg'
import logic from '../assets/images/ai/logic.jpeg'
import ai_wireframe from '../assets/images/ai/ai_wireframe.jpeg'
import style1 from '../assets/images/ai/style1.jpeg'
import prototype1 from '../assets/images/ai/prototype1.jpeg'
import team1 from '../assets/images/ai/team1.jpeg'


function Project0(props) {

    return (
        <div className='project1' id='project1'>
            <div className='projectContainer'>
                <Button address={'/ai'}></Button>
                <ProjectInfo projectName="AI Garden" projectTagline="Smart irrigation solution for the new generation farmers"></ProjectInfo>
                <div class="row">
                    <div class="column">
                        <img src={prototype1} />
                        <img src={style1} />
                    </div>
                    <div class="column">
                        <img src={logic} />
                        <img src={ai_wireframe} />
                    </div>
                    <div class="column">
                        <img src={persona2} />
                        <img src={team1} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project0;