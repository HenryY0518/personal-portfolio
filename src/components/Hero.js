import React from 'react';



function Hero(props) {
    return (
        <div className='hero'md={10} small={6}>                             
            { props.title && <h1 className='title'>{props.title}</h1>}
            { props.subTitle && <h3 className='sub'>{props.subTitle}</h3>}
            { props.text && <h3 className='lead font-weight-light'>{props.text}</h3>}
        </div>
    )
}

export default Hero; 