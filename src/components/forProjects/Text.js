import React, { Children } from 'react';


function Text (props) {
    return (
        <div className='text'>
            <h4>{props.head}</h4>
            <p>{props.children}</p>
        </div>
    );
}

export default Text;