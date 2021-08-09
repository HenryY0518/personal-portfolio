import React from 'react';

function Text (props) {
    return (
        <div className='text'>
            <h3>{props.head}</h3>
            <h4>{props.subhead}</h4>
            <h5>{props.subsubhead}</h5>
            <p>{props.children}</p>
        </div>
    );
}

export default Text;