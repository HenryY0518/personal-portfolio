import React from 'react'
// eslint-disable-next-line 
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


function Button(props) {
    
    return (
        <div className='button-position'>
            <button className='button'><NavLink className="button-links"to={props.address}>LEARN MORE</NavLink></button>
        </div>
    )
}

export default Button
