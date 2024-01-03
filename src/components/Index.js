import React from 'react';
import { Link } from "react-scroll";
import 'normalize.css'

function Index(props) {
  return (
    <div className='index'>
      <span className="indexTitle">2024 Portfolio</span>

      <Link className='indexItem4'
        activeClass="active"
        to="project4"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >UBC BizChina <span className="lighter">(Web Design)</span></Link>

      <Link className='indexItem2'
        activeClass="active"
        to="project2"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >HappyHour <span className="lighter">(App Redesign)</span></Link>
      
      <Link className='indexItem1'
        activeClass="active"
        to="project1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >AI Garden <span className="lighter">(User Research)</span></Link>

      <Link className='indexItem'
        activeClass="active"
        to="project0"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Eat n' Log <span className="lighter">(Coming Soon)</span></Link>

      <Link className='indexItem3'
        activeClass="active"
        to="project3"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Miscellaneous <span className="lighter">(Visual Design)</span></Link>
    </div>
  );
}

export default Index; 
