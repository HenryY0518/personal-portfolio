import React from 'react';

import Background from '../../components/forProjects/Background';
import Cover from '../../components/forProjects/Cover';
import Overview from '../../components/forProjects/Overview';
import Text from '../../components/forProjects/Text';
import Photo from '../../components/forProjects/Photo';
import Next from '../../components/forProjects/Next';


import persona2 from '../../assets/images/ai/persona2.jpeg'
import logic from '../../assets/images/ai/logic.jpeg'
import ai_wireframe from '../../assets/images/ai/ai_wireframe.jpeg'
import style1 from '../../assets/images/ai/style1.jpeg'
import prototype1 from '../../assets/images/ai/prototype1.jpeg'
import team1 from '../../assets/images/ai/team1.jpeg'
import malfunction from '../../assets/images/ai/malfunction.jpeg'



function AI() {
    return (
        <div>
            <Background coverNumber={'cover1'} />
            <Cover title={"AI Garden"} subTitle={"Smart irrigation solution for the new generation farmers"} colourNumber={'cover-container1'} />
            <Overview
                role={'UX Designer, UX Researcher'}
                for={'AI Garden'}
                duration={'May 2020-May 2021'}
                team={'Henry Yang'}
                status={'In development'}
                discipline={'UX Design, UX Research'} />

            <Text head={'Background'}>
                <p>
                    I went back to China to be with my family during the pandemic and was able to land a UX internship at a local start-up. The start-up, with garden design background, was pivoting into a tech company by the time I joined.
                </p>
                <p>
                    According to the research of AI Garden, thanks to the government’s promotion of new-age sustainable agriculture there is a growing interest in the agriculture industry among the youngsters of China and they are looking for ways to get into the industry. Based on the research, the company decided to gain traction by breaking into the emerging smart agriculture industry of China with a focus on irrigation since irrigation is one of the most important part of the farming process. This framed our <i>initial problem statement</i> as</p>
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
                            Since there is no way to accurately monitor the water usage and pump status, it is very common for large amount of water to go wasted.
                        </li>
                        <li>
                            The younger farmers are interested in a more hands-free approach using their smartphones as they often have other commitments.
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

            <Text head={'Refined Problem Statement'}>
                <p>
                    With more understanding of our users and their key goals, we refined our <i>problem statement</i> to better guide the design:
                </p>
                <p className='statement'>
                    How might we provide an irrigation solution that helps the new-age Chinese farmers to irrigate with less effort, time, and more accuracy?
                </p>
            </Text>

            <Text head={'Solution'}>
                <p>
                    Guided by the new problem statement, my team and I came up with a solution that can be implemented easily on the infrastructure of most Chinese farms. The system, driven by IOT (internet of things) technology, consists of smart solenoid valves, smart water meters, and a central system unit that communicates with our mobile app.
                </p>
                <p>
                    To implement the system, the trationdal valves would be swapped with smart solenoid valves that can accurately control and measure the flow of water; the mechanical water meter would be replaced with smart water meter than can accurately measure the total water usage; finally, the central system unit contained in a box would be installed near the farm. This way, the users can control which crop to irrigate, the amount of water to irrigate, as well as oversee the progress and status of the irrigation process.
                </p>
            </Text>

            <Text subhead={'Wireframes'}>
                <p>

                </p>
            </Text>

            <Photo source={ai_wireframe} />

            <Text head={'Design'}>
                <p>
                    <ul>
                        <li>
                            A straightforward card design was used in which one card corresponds to one valve.
                        </li>
                        <li>
                            Users can use the green radio buttons to select the desired valves.
                        </li>
                        <li>
                            For better affordance, I emulated the physical water meter in the irrigation amount adjustment design.
                        </li>
                        <li>
                            The progress of the irrigation is reflected in multiple ways including the progress bar, time elapsed, amount of water to irrigate for each valve, and the overall progress. percentage on the bottom left corner.
                        </li>
                        <li>
                            To deal with the possibility of malfunction, the status of valves is displayed on the cards. When the system detects a malfunctioning valve an overlay would inform the user the malfunction, customer service number, and the fact that the system has skipped the malfunctioning valve to proceed the irrigation.
                        </li>
                        <li>
                            When the irrigation is complete an overlay would inform the user the time taken, amount of water used, and amount of water preserved in the irrigation.
                        </li>
                    </ul>

                </p>
            </Text>

            <Text subhead={'Malfunctioning Valve Handling'}>
                <p>

                </p>
            </Text>

            <Photo source={malfunction} />

            <Text subhead={'Overall Irrigation Process'}>
                <p>

                </p>
            </Text>

            <img className='big-photo' src={prototype1} alt="prototype1" />

            <Text subhead={'Visual Design'}>
            </Text>

            <Photo source={style1} />

            <Text head={'Our Team'}>
                <p></p>
            </Text>

            <Photo source={team1} />


            <Next address0={'/happy'} address1={'/'} name0={"HappyHour"} name1={'Home'} />
        </div>
    )
}

export default AI