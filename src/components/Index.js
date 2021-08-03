import React from 'react';
import { Link } from "react-scroll";

function Index(props) {
  return (
    <div className='index'>

      <div className="indexTag">
        <p>
          UX Design, User Research
        </p>
      </div>
      
      <Link className='indexItem1'
        activeClass="active"
        to="project1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      ><span className="linkSpacer">AI Garden</span></Link>
      
      <div className="indexTag">
        <p>
          User Research, Product Redesign
        </p>
      </div>


      <Link className='indexItem2'
        activeClass="active"
        to="project2"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      ><span className="linkSpacer">HappyHour</span></Link>

      <div className="indexTag">
        <p>
          Coming Soon
        </p>
      </div>

      <Link className='indexItem'
        activeClass="active"
        to="project0"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      ><span className="linkSpacer">Eat n' Log</span></Link>

<div className="indexTag">
        <p>
          Visaul Design, Photography
        </p>
      </div>

      <Link className='indexItem3'
        activeClass="active"
        to="project3"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      ><span className="linkSpacer">Miscellaneous</span></Link>
    </div>
  );
}

export default Index; 
