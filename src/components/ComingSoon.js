import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


function ComingSoon(props) {
    
    return (
        <div className='button-position'>
            <button className='button1'><NavLink className="button1-links"to="/">COMING SOON</NavLink></button>
        </div>
    )
}

export default ComingSoon
