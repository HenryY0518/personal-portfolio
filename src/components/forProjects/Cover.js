import React from 'react';


function Cover(props) {
    return (
        <div className={props.colourNumber}>
            <h2 className='cover-title'>{props.title}</h2>
            <p className='cover-sub'>{props.subTitle}</p>
        </div>
    );
}

export default Cover;