import React, { Component } from "react";
import classnames from "classnames";
// eslint-disable-next-line 
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import logo from '../assets/images/logo.jpeg';

import resume from '../pdf/resume.pdf';


export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };



  render() {
    return (

      <nav className={classnames("bnav")}>
        <div className='navContainer'>
          <li className='bnavItem'><NavLink className='links' to='/'><img className='logo' src={logo} alt='logo'></img></NavLink></li>
          {/* <li className='bnavItem--left'><NavLink className='links' to='/'exact={true} activeStyle={{ color: '#e34f34' }}>HY DESIGN.</NavLink></li> */}
          {// eslint-disable-next-line
            <li className='bnavItem--right'><a className='links' target='_blank' href={resume}>RESUME</a></li>}
            <li className='bnavItem--right'><NavLink className='links' to='/about' activeStyle={{ color: '#e34f34' }}>ABOUT</NavLink></li>
            <li className='bnavItem--right'><NavLink className='links' to='/' exact={true} activeStyle={{ color: '#e34f34' }}>PROJECTS</NavLink></li>
        </div>
      </nav>
    );
  }
}

