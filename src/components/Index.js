import React from 'react';
import { Link } from "react-scroll";
import 'normalize.css'

function Index(props) {
  return (
    <div className='index'>
      <span className="indexTitle">2022 Portfolio</span>

      {/* <div className="indexTag">
        <p>
          Wed Design
        </p>
      </div> */}

      <Link className='indexItem4'
        activeClass="active"
        to="project4"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >1.UBC BizChina <span className="lighter">(Web Design)</span></Link>
      
      {/* <div className="indexTag">
        <p>
          User Research, Product Redesign
        </p>
      </div> */}

      <Link className='indexItem2'
        activeClass="active"
        to="project2"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >2.HappyHour <span className="lighter">(App Redesign)</span></Link>

      {/* <div className="indexTag">
        <p>
          UX Design, User Research
        </p>
      </div> */}
      
      <Link className='indexItem1'
        activeClass="active"
        to="project1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >3.AI Garden <span className="lighter">(User Research)</span></Link>

      {/* <div className="indexTag">
        <p>
          Coming Soon
        </p>
      </div> */}

      <Link className='indexItem'
        activeClass="active"
        to="project0"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >4.Eat n' Log <span className="lighter">(Coming Soon)</span></Link>

      {/* <div className="indexTag">
        <p>
          Visual Design, Photography
        </p>
      </div> */}

      <Link className='indexItem3'
        activeClass="active"
        to="project3"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >5.Miscellaneous <span className="lighter">(Visual Design)</span></Link>
    </div>
  );
}

export default Index; 
