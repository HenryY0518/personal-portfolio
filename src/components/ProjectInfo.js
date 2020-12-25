import React from 'react';

function ProjectInfo(props) {

    
    return(
        <div>
            <p className='projectInfo'>{props.projectName}</p>
            <p className='projectDescription'>{props.projectTagline}</p>
        </div>
    );
    
}

export default ProjectInfo;