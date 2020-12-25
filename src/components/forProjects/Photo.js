import React from 'react';


function Photo(props) {
    return (
        <div>
            <img className='photo' src={props.source}/>
        </div>
    );
}

export default Photo;