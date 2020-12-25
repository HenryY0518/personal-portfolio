import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Footer() {
    return(
        <div className='footer'>
            <p className='footer-left'>Henry Yang 2020</p>
            <p className='footer-right'>Made with love and tea</p>
            <Link className='links' to='/craig'>Craig</Link>
        </div>
    )
}

export default Footer;




