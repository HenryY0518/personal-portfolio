import React from 'react';



function Hero1(props) {
    return (
        <div className='hero1'md={10} small={6}>                             
            { props.title && <h1 className='title'>{props.title}</h1>}
            { props.subTitle && <p className='sub'>{props.subTitle}</p>}
            { props.text && <h3 className='lead font-weight-light'>{props.text}</h3>}
        </div>
    )
}

export default Hero1; 