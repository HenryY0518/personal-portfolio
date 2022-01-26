import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


import Background from '../../components/forProjects/Background';
import Cover from '../../components/forProjects/Cover';
import Overview from '../../components/forProjects/Overview';
import Text from '../../components/forProjects/Text';
import Photo from '../../components/forProjects/Photo';
import Next from '../../components/forProjects/Next';

import stats from  '../../assets/images/biz/stats.jpeg'
import long2 from  '../../assets/images/biz/long2.jpeg'


function Happy() {
    return (
        <div>
            <Background coverNumber={'cover4'} />
            <Cover title={"UBC BizChina"} subTitle={"A bridge between China and Canada"} colourNumber={'cover-container4'} />
            <div className="content">
                <Overview
                    role={'Lead Web Designer'}
                    for={'UBC BizChina'}
                    duration={'Sep 2021-Jan 2022'}
                    team={'Mike Ju, Leaf Zhao, Nicolas Zeng, Neal Lu, Sylvia Wang'}
                    status={'Completed'}
                    discipline={'Web Design, UX Analytics'} />
                <Text head={'Background'}>
                    <p>
                    <a href="https://www.ubcchinaforum.com/">UBC BizChina</a> is Vancouver's largest Chinese business-focused student association. I joined the club’s tech department as a tech associate and web designer. Recently I got promoted as the director of technology </p>
                    <p>
                    The club official website is built on Wix. Although the website already had considerable traffic (More than 700 monthly visitors) thanks to the reputation of the club, it was due for a redesign since the website was designed for the 2021 China Forum, the biggest event of the club last year. The goal of the redesign was to build a website for the club itself that attracts new members and firms alike.
                    </p>
                    <p>
                    Coming from a UX design background, I had the pleasure of spearheading the project and work with 5 other teammates. </p>
                </Text>

                <Text head={'Problem Statement'}>
                    <p>
                    How might we improve the design of the UBC BizChina website to attract new members and sponsors?
                    </p>
                </Text>

                <Text subhead={'User Research'}>
                    <p>
                    With the website built on Wix, we had the luxury of accessing user analytic information on demand. We found that the bounce rate of 88% and the session duration of 1 min 26 sec are well below industry standard. This means many visitors of the website could not find useful information and gave up on the website prematurely.
                    </p>
                </Text>

                <Photo source={stats}/>

                <Text subhead={'Key Insights'}>
                    <p>
                        <p>Upon further inspections, the high bounce rate and the short session duration could be attributed to the following problems:</p>
                        <ul>
                            <li>
                            The landing page is a 5 minute long video recap of the 2021 China Forum event. Most first time users don’t watch the video at all as shown by the session duration average of 1 min 49 sec. In fact, using a video as the landing page is counterproductive, taking up precious screen real estate of the landing page.
                            </li>
                            <li>
                            There are also a number of irrelevant contents on China Forum that do not provide value to the users such as the Banner on the landing page and the Panel section. </li>
                            <li>
                            The information architecture is cumbersome and confusing with similar items like Speakers, Conference Archive, and 2019 UBC China Forum.
                                </li>
                            <li>
                            Some elements appear to be out of place: they don’t fit with the theme of the website visually such as the Newsletter Form section. 
                                </li>
                        </ul>
                    </p>
                </Text>

                <Text subhead={'Improvements Made'}>
                    <p>
                        <ul>
                            <li>
                            Streamlined information architecture by combing related items into the same sub menu
                            </li>
                            <li>
                            Relocated the long video to the bottom of the website
                            </li>
                            <li>
                            Careful copywriting and formatting of the vision and mission statement for improved branding
                                </li>
                            <li>
                            Added Recent Event section for quick insights of the club for new users
                                </li>
                                <li>
                                Added Sponsors section for more club credibility
                                </li>
                                <li>
                                Overhauled the Contacts section to facilitate communication with corporations
                                </li>
                                <li>
                                Uniformed the visual design based on the brand identity
                                </li>
                        </ul>
                    </p>
                </Text>
   
                <br></br>

                <Text head={"Redesign"}></Text>

                <Photo source={long2}/>

                <Text>
                    <a className="visit" href="https://www.ubcchinaforum.com/">Visit the BizChina Official Website</a>
                    <br></br>
                    <br></br>
                </Text>

                <Next address0={'/'} address1={'/happy'} name0={'Home'} name1={"HappyHour"}/>
            </div>
        </div>
    )
}

export default Happy