import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero'

function About(props) {
    return(
        <div>
            <Hero title={props.title}/>
            <Content>
                What up my name is Henry Yang, Hey guys! Health team is building a better when2meet this year and we would really appreciate some insights from you guys.Please take 3 minutes to complete this anonymous survey. It would really help with our user research. Many thanks! 
            </Content>
        </div>
    )    
}

export default About