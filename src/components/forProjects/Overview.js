import React from 'react';


function Overview(props) {
    return (
        <div className='overview'>
            <div className='overview-column'>
                <p className=''><strong>Role: </strong>{props.role}</p>
                <p className=''><strong>For: </strong>{props.for}</p>
                <p className=''><strong>Duration: </strong>{props.duration}</p>
            </div>
            <div className='overview-column'>
                <p className=''><strong>Team: </strong>{props.team}</p>
                <p className=''><strong>Status: </strong>{props.status}</p>
                <p className=''><strong>Discipline: </strong>{props.discipline}</p>
            </div>
        </div>
    );
}

export default Overview;