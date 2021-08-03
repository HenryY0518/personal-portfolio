import React, { Component } from "react";
import classnames from "classnames";
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
      <nav
        className={classnames("bnav", {
          "bnav--hidden": !this.state.visible
        })}
      >
        <li className='bnavItem'><NavLink className='links' to='/'><img className='logo' src={logo}></img></NavLink></li>
        <li className='bnavItem--left'><NavLink className='links' to='/'>HY Design.</NavLink></li>
        <li className='bnavItem--right'><NavLink className='links' to='/about' activeStyle={{ color: '#af2c2c' }}>About</NavLink></li>
        <li className='bnavItem--right'><a className='links' href={resume}>Resume</a></li>
      </nav>
    );
  }
}

