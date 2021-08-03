import React from 'react';
import ProjectInfo from '../components/ProjectInfo';

import tower from '../assets/images/art/tower.jpeg'
import album from '../assets/images/art/album.jpeg';
import arc from '../assets/images/art/arc.jpeg';
import mountain from '../assets/images/art/mountain.jpeg';
import beach from '../assets/images/art/beach.jpeg';
import room from '../assets/images/art/room.jpeg';



function Project3(props) {

    return (
        <div className='project3' id='project3'>
            <div className='projectContainer'>
                <ProjectInfo projectName="Miscellaneous" projectTagline="See the world through my lense"></ProjectInfo>
                <div class="row">
                    <div class="column">
                        <img src={album} />
                        <img src={room} />
                    </div>
                    <div class="column">
                        <img src={beach} />
                        <img src={arc} />
                    </div>
                    <div class="column">
                        <img src={mountain} />
                        <img src={tower} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project3;