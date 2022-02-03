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
                        <a href='/biz'><img src={bizTeam} alt="team"/></a>
                    </div>
                    <div class="column">
                        <a href='/biz'><img src={mission} alt="design"/></a>
                    </div>
                    <div class="column">
                        <a href='/biz'><img src={shang2} alt="shanghai"/></a>
                    </div>
                    <div class="column">
                        <a href='/biz'><img src={stats} alt="stats"/></a>
                    </div>
                    <div class="column">
                        <a href='/biz'><img src={bridge} alt="stats"/></a>
                    </div>
                    <div class="column">
                        <a href='/biz'><img src={contacts} alt="contacts"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project3;