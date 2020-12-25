import React from 'react';

import Cover from '../../components/forProjects/Cover';
import Overview from '../../components/forProjects/Overview';
import Text from '../../components/forProjects/Text';
import Photo from '../../components/forProjects/Photo';
import Next from '../../components/forProjects/Next';



import cross from '../../assets/sample/cross.jpeg'
import steak from '../../assets/sample/steak.jpeg'



function Happy() {
    return (
        <div>
            <Cover title={"Happy Hour"} subTitle={"A new way to record your favourite dishes"} coverNumber={'cover'} colourNumber={'cover-container2'} />
            <div className="content">
                <Overview
                    role={'UX Designer, UX Researcher'}
                    for={'UBC Lauch Pad'}
                    duration={'Ongoing'}
                    team={'Henry Yang, Tiffany Wu'}
                    status={'In development'}
                    discipline={'UX Design, Human Centered Design'} />
                <Text head={'Background'}>
                    <p>
                        Most of the food apps on the market now are health-based. After some market research that indicates the feasibility of the idea, my developer friend and I decided to work on this project together as we are both foodies.
                </p>
                </Text>
                <Text head={'Problem Statement'}>
                    <p>
                        “My food pictures are scattered everywhere…in my album, snapchat, and instagram. Sometimes I have trouble remembering where I took the picture.” —quote from a user in our user interview
                </p>
                </Text>

                <Photo source={steak} />
                <Next address0={'/ai'} address1={'/eat'} name0={'AI Garden'} name1={"Eat n' Log"} />
            </div>
        </div>
    )
}

export default Happy