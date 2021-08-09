import React from 'react';

import Background from '../../components/forProjects/Background';
import Cover from '../../components/forProjects/Cover';
import Overview from '../../components/forProjects/Overview';
import Text from '../../components/forProjects/Text';
import Next from '../../components/forProjects/Next';



function Eat() {
    return (
        <div>
            <Background coverNumber={'cover'}/>
            <Cover title={"Eat n' Log"} subTitle={"Record meaningful food experience with ease"} colourNumber={'cover-container'} />
            <div className="content">
                <Overview
                    role={'UX Designer, UX Researcher'}
                    for={'Ourselves'}
                    duration={'Ongoing'}
                    team={'Henry Yang, Gavin Liu'}
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

                <Next address0={'/eat'} address1={'/ai'} name0={'This project'} name1={'AI Garden'} />
            </div>
        </div>
    )
}

export default Eat