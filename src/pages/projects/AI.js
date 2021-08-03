import React from 'react';

import Background from '../../components/forProjects/Background';
import Cover from '../../components/forProjects/Cover';
import Overview from '../../components/forProjects/Overview';
import Text from '../../components/forProjects/Text';
import Photo from '../../components/forProjects/Photo';
import Next from '../../components/forProjects/Next';


import cross from '../../assets/sample/cross.jpeg'
import steak from '../../assets/sample/steak.jpeg'
import persona2 from '../../assets/images/ai/persona2.jpeg'
import logic from '../../assets/images/ai/logic.jpeg'
import ai_wireframe from '../../assets/images/ai/ai_wireframe.jpeg'
import style1 from '../../assets/images/ai/style1.jpeg'
import prototype1 from '../../assets/images/ai/prototype1.jpeg'
import team1 from '../../assets/images/ai/team1.jpeg'



function AI() {
    return (
        <div>
            <Background coverNumber={'cover1'} />
            <Cover title={"AI Garden"} subTitle={"Smart irrigation solution for the new generation farmers"} colourNumber={'cover-container1'} />
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
                    According to the research of AI Garden, there is a growing population of young entrepreneur farmers, and they are looking for ways to get into the industry without too much hassle, and irrigation is one of the most important part of the farming process. As a result, the company decided to gain traction by breaking into the emerging smart agriculture industry in China, which frames our <i>initial problem statement</i> as
                </p>
                <p className='statement'>
                    How might we provide an irrigation solution that allows younger farmers to irrigate with ease and enjoyment?
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

            <Text subhead={'Understanding the Irrigation Method'}>
                <p>
                    When irrigation takes place, the main pump needs to be first turned on and each individual valve would be turned on one at a time to ensure optimal water pressure at the sprinkler. In other words, farmers can only operate one valve at a time due to the limit of water pressure, and it could be very time-consuming for larger farms.
                </p>
            </Text>

            <Photo source={logic} />

            <Text subhead={'User Interviews'}>
                <p>
                    With the insights from the observation I was able to pose relevant questions to the users. We conducted 5 user interviews with farmers from the age of 25 to 40 and found the following key findings:
                    <br></br>
                    <br></br>
                    <ul>
                        <li>
                            They have to estimate the amount of water irrigated to each field, taking into account numerous factors such as the distance from the main pump to the valve, the decline angle of the ground, and the time of the day during irrigation.
                        </li>
                        <li>
                            The only reliable source of water volume used is the reading on the main pump.
                        </li>
                        <li>
                            Due to the limited pressure in the municipal water distribution system, the amount of water irrigated is reduced in rush irrigation hours.
                        </li>
                        <li>
                            The irrigation process is very strenuous and time-consuming for larger farm owners, with dozens of valves to switch open and close.
                        </li>
                        <li>
                            The younger farmers are interested in a more hands-free approach using their smart phones as they often take on other side gigs.
                        </li>
                    </ul>

                </p>
            </Text>

            <Text subhead={'Persona'}>
                <p>
                    The findings from the user research were summarized into a persona, which represents our target audiences.
                </p>
            </Text>
            <Photo source={persona2} />

            <Text head={'Design'}>
                <p>
                    With more understanding of our users and their key goals, we refined our <i>problem statement</i> to better guide the design:
                </p>
                <p className='statement'>
                    How might we provide an irrigation solution that helps the younger Chinese farmers to irrigate with less effort, time, and more accuracy? 
                </p>
            </Text>

            <Text subhead={'Wireframes'}>
                <p>
                    How might we provide an irrigation solution that help the younger Chines farmers to irrigate with less effort, time, and more accuracy?
                </p>
            </Text>

            <Photo source={ai_wireframe} />

            <Text subhead={'Visual Design'}>
                <p></p>
            </Text>

            <Photo source={style1} />

            <img className='big-photo' src={prototype1} />

            <Text head={'Our Team'}>
                <p></p>
            </Text>

            <Photo source={team1} />


            <Next address0={'/'} address1={'/happy'} name0={"Home"} name1={'Happy Hour'} />
        </div>
    )
}

export default AI