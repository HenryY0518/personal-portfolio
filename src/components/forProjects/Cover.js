import React from 'react';


function Cover(props) {
    return (
        <div className={props.coverNumber}>
            <div className={props.colourNumber}>
                <h6 className='cover-title'>{props.title}</h6>
                <p className='cover-sub'>{props.subTitle}</p>
            </div>
        </div>
    );
}

export default Cover;