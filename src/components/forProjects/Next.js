import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


function Next(props) {

    return (
        <div className='next'>
            <NavLink className='next-left' to={props.address0}>←    {props.name0}</NavLink>
            <NavLink className='next-right' to={props.address1}>{props.name1}    →</NavLink>
        </div>
    )
}

export default Next
