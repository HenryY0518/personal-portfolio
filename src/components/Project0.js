import React from 'react';
import ProjectInfo from '../components/ProjectInfo';

import neon2 from '../assets/images/eat/neon2.jpeg';
import post from '../assets/images/eat/post.jpeg';
import entry from '../assets/images/eat/entry.jpeg';



import ComingSoon from './ComingSoon';

function Project0(props) {

    return (
        <div className='project0' id='project0'>
            <div className='projectContainer'>
                <ComingSoon address={'/eat'}></ComingSoon>
                <ProjectInfo projectName="Eat n' Log" projectTagline="Record meaningful food experience with ease"></ProjectInfo>
                <div class="row">
                    <div class="column">
                        <img src={neon2} alt="neon2"/>
                    </div>
                    <div class="column">
                        <img src={entry} alt="entry"/>
                    </div>
                    <div class="column">
                        <img src={post} alt="post"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project0;