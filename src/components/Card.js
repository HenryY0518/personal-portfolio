import React from 'react';
import CardInfo from '../components/CardInfo'; 

function Card(props) {

    return(
        // <div onMouseOver={(e) => props.click(props.item)} onMouseOut={(e) => props.click(props.item)}>   for clicking function
        <div>
            <img className='carouselImage' src={props.item.imgSrc} alt={props.item.imgSrc}/>
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/> }
        </div>
    );


    
}

export default Card;
