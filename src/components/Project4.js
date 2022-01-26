import React from 'react';
import ProjectInfo from '../components/ProjectInfo';
import Button from './Button';

import shang2 from '../assets/images/biz/shang2.jpeg'
import bridge from '../assets/images/biz/bridge.jpeg';
import mission from '../assets/images/biz/mission.jpeg';
import bizTeam from '../assets/images/biz/bizTeam.jpeg';
import stats from '../assets/images/biz/stats.jpeg';
import contacts from '../assets/images/biz/contacts.jpeg';




function Project3(props) {

    return (
        <div className='project4' id='project4'>
            <div className='projectContainer'>
                <Button address={'/biz'}></Button>
                <ProjectInfo projectName="UBC BizChina" projectTagline="A bridge between China and Canada"></ProjectInfo>
                <div class="row">
                    <div class="column">
                        <img src={bizTeam} alt="team"/>
                    </div>
                    <div class="column">
                    <img src={mission} alt="design"/>
                    </div>
                    <div class="column">
                        <img src={shang2} alt="shanghai"/>
                    </div>
                    <div class="column">
                    <img src={stats} alt="stats"/>
                    </div>
                    <div class="column">
                    <img src={bridge} alt="stats"/>
                    </div>
                    <div class="column">
                    <img src={contacts} alt="contacts"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project3;