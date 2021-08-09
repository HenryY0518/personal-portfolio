import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


import Background from '../../components/forProjects/Background';
import Cover from '../../components/forProjects/Cover';
import Overview from '../../components/forProjects/Overview';
import Text from '../../components/forProjects/Text';
import Photo from '../../components/forProjects/Photo';
import Next from '../../components/forProjects/Next';


import sticky from '../../assets/images/happy/sticky.jpeg'
import happyBranding from  '../../assets/images/happy/happyBranding.jpeg'
import long from  '../../assets/images/happy/long.jpeg'
import bigHappy from  '../../assets/images/happy/bigHappy.jpeg'





function Happy() {
    return (
        <div>
            <Background coverNumber={'cover3'} />
            <Cover title={"HappyHour"} subTitle={"Group scheduling made simple"} colourNumber={'cover-container2'} />
            <div className="content">
                <Overview
                    role={'UX Designer, User Researcher'}
                    for={'UBC Lauch Pad'}
                    duration={'Ongoing'}
                    team={'Henry Yang, Tiffany Wu'}
                    status={'In development'}
                    discipline={'Product Redesign, User Research'} />
                <Text head={'Background'}>
                    <p>
                        The UBC Launch Pad is the best student-ran software developing club of UBC. I applied to the club as an UX designer towards the end of my first internship term in China because I wanted to improve my UX design skill set in a more structured and collaborative setting.
                    </p>
                    <p>
                        After some brainstorming and market research we decided to work on a new and improved version of the functional but outdated group scheduling product When2Meet.
                    </p>
                </Text>

                <Text head={'User Research'}>
                    <p>
                        Since we were not making a new product from scratch I proposed that we should mainly <strong>analyze the strengths and weaknesses of the existing When2Meet with usability tests</strong> while conducting some general user surveys to get a better understanding of the needs and desires of our potential target audience.
                    </p>
                </Text>

                <Text subhead={'Usability Test on When2Meet'}>
                    <p>
                        We conducted both remote and in-person usability tests on When2Meet with 5 volunteers of different familiarity with When2Meet. The findings were organized into three groups of sticky notes in Miro: what’s working well, what needs improvement, and feature suggestions.
                    </p>
                </Text>
                <Photo source={sticky} />
                <Text subsubhead={'The Good'}>
                    <p>
                        <ul>
                            <li>
                                The scheduling begins straight on the landing page
                            </li>
                            <li>
                                The option to schedule weekly recurring events is useful
                                </li>
                            <li>
                                Free to use and no need for an account
                                </li>
                            <li>
                                The drag-and-fill method for date selection is intuitive
                                </li>
                        </ul>
                    </p>
                </Text>

                <Text subsubhead={'The Bad'}>
                    <p>
                        <ul>
                            <li>
                                Overall outdated UI design
                            </li>
                            <li>
                                Random placement of the elements on the landing page resulting in poor usability
                            </li>
                            <li>
                                Suboptimal accessibility of the gradient availability indication
                                </li>
                            <li>
                                Users tend to loose the event links since there is no built-in save event function
                                </li>
                        </ul>
                    </p>
                </Text>
   
                <br></br>

                <Text head={"Redesign"}></Text>

                <Photo source={long}/>

                {/* <Carousel showThumbs={false} showArrows={true} emulateTouch={true} infiniteLoop={true}>
                    <div>
                        <img src={landing} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={login} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={gradient} />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel> */}

                <Text head={'Visual Design'}>
                    <p>
                    </p>
                </Text>

                <Photo source={happyBranding} />
                <img className="big-photo" src={bigHappy} alt='long'/>

                <Next address0={'/'} address1={'/ai'} name0={'Home'} name1={"AI Garden"} />
            </div>
        </div>
    )
}

export default Happy