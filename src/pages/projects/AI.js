import React from 'react';

import Cover from '../../components/forProjects/Cover';
import Overview from '../../components/forProjects/Overview';
import Text from '../../components/forProjects/Text';
import Photo from '../../components/forProjects/Photo';
import Next from '../../components/forProjects/Next';


import cross from '../../assets/sample/cross.jpeg'
import steak from '../../assets/sample/steak.jpeg'
import persona2 from '../../assets/images/persona2.jpeg'
import logic from '../../assets/images/logic.jpeg'



function AI() {
    return (
        <div>
            <Cover title={"AI Garden"} subTitle={"Realize the garden of your dream"} coverNumber={'cover1'} colourNumber={'cover-container1'} />
            <Overview
                role={'UX Designer, UX Researcher'}
                for={'AI Garden'}
                duration={'Ongoing'}
                team={'Henry Yang'}
                status={'In development'}
                discipline={'UX Design, UX Research'} />
            
            <Text head={'Background'}>
                <p>
                I went back to China to be with my family during the pandemic and was able to land an UX internship at a local start-up. The start-up, with garden design background, was pivoting into a tech company by the time I joined. 
                </p>
                <p>
                According to the research of AI Garden, there is a growing population of young entrepreneur farmers, and they are looking for ways to get into the industry without too much hassle, and irrigation is one of the most important part of the farming process. As a result, the company decided to gain traction by breaking into the emerging smart agriculture industry in China.
                </p>
            </Text>
            
            <Text head={'Problem Statement'}>
                <p>
                How might we provide an irrigation solution that allows younger farmers to irrigate with relative ease and enjoyment?
                </p>

            </Text>
            
            <Text head={'User Research '}>
                <p>
                In order to better understand the problem and our target users we decided to take a field trip to the countryside of China. 
                </p>
                <p>
                I knew next to nothing about irrigation before the project, so I understood it was crucial for me to get a grasp on the basic mechanism and logic of irrigation before interviewing the users.
                </p>

            </Text>
            
            <Text head={'Problem Statement'}>
                <p>
                How might we provide an irrigation solution that allows younger farmers to irrigate with relative ease and enjoyment?
                </p>

            </Text>


            <Photo source={persona2}/>
            <Photo source={logic}/>

            <Next address0={'/eat'} address1={'/happy'} name0={"Eat n' Log"} name1={'Happy Hour'} />
        </div>
    )
}

export default AI