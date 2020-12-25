import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Eat from '../assets/images/Eat.jpeg';
import AI from '../assets/images/AI.jpeg';
import When from '../assets/images/When.jpeg';
import Card from '../components/Card';



class Carousel extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            items: [
                {
                    id:0,
                    title: 'Eat n Log',
                    subTitle: 'Food journaling app for foodies',
                    imgSrc: Eat,
                    link: '/',
                    selected: false

                },

                {
                    id:1,
                    title: 'AI Garden',
                    subTitle: 'Realize the garden of your dream',
                    imgSrc: AI,
                    link: '/',
                    selected: false

                },
                
                {
                    id:2,
                    title: 'When3Meet',
                    subTitle: 'A group schedulling website',
                    imgSrc: When,
                    link: '/',
                    selected: false

                },
            ]

        }
    }

    handleCardClick = (id, card) => {
        
        console.log(id);
       
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false: true;
        
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click = {(e => this.handleCardClick(item.id,e))} key={item.id} />
        })
    }




    render() {
        return(
            <Container fluid={true} id='carousel'>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>


        );
    }

}



export default Carousel