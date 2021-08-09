import React from 'react';


function Photo(props) {
    return (
        <div>
            <img className='photo' src={props.source} alt=''/>
        </div>
    );
}

export default Photo;