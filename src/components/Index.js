import React from 'react';
import { Link } from "react-scroll";

function Index(props) {
  return (
    <div className='index'>

      <Link className='indexItem'
        activeClass="active"
        to="project0"
        spy={true}
        smooth={true}   
        offset={-70}                   
        duration={500}
      >Eat n' Log</Link>

      <Link className='indexItem1'
        activeClass="active"
        to="project1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >AI Garden</Link>

      <Link className='indexItem2'
        activeClass="active"
        to="project2"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >HappyHour</Link>
    </div>
  );
}

export default Index; 
