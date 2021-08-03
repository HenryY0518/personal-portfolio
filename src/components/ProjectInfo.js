import React from 'react';

function ProjectInfo(props) {

    
    return(
        <div>
            <h1 className='projectInfo'>{props.projectName}</h1>
            <p className='projectDescription'>{props.projectTagline}</p>
        </div>
    );
    
}

export default ProjectInfo;