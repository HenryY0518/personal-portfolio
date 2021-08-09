import React from 'react';
import { SocialIcon } from 'react-social-icons';

import Hero1 from '../components/Hero1';
import me from "../assets/images/about/me.jpeg"


function About(props) {
    return (
        <div>
            <Hero1 title={props.title} />
            <div className="aboutText">
                <p>
                    Hi, I’m a designer passionate about bringing people closer with human centered design. I’m currently a third-year undergraduate studying Cognitive Systems (Psychology + Computer Science) at University of British Columbia.
                </p>
                <p>
                    Ever since I was a child I have been fond of creative activities whether it’s legos or traditional Chinese paintings. Growing up as a first generation immigrant I also aspire to do my part in bridging the cultural differences between the East and the West through my work.
                </p>
                <p>
                    Recently, I have been exploring ways to connect technology and arts to solve complex problems for people through UX design. In my spare times I like to jam on my guitar and get together with the buddies for some pick up basketball games :)
                </p>
                <br></br>
                <h2>Get in touch</h2>
                <p>henryyang0518@gmail.com</p>
                <SocialIcon className="icons" url="https://www.linkedin.com/in/henry-yang-designer" />
                <SocialIcon className="icons" url="https://www.instagram.com/henryyang0518/" />
                <SocialIcon className="icons" url="https://soundcloud.com/henry-yang-733070391" />
            </div>
            <img className='aboutPhoto' src={me} alt='me'/>
        </div>
    )
}

export default About