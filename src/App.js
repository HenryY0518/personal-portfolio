import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { ParallaxProvider } from 'react-scroll-parallax';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop'

import HomePage from './pages/HomePage';
import About from './pages/About';
import Eat from './pages/projects/Eat';
import AI from './pages/projects/AI';
import Happy from './pages/projects/Happy';
import Biz from './pages/projects/Biz';

import Craig from './pages/ChristmasCards/Craig'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Henry Yang',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Resume', path: '/resume' }
      ],
      home: {
        title: "Hey, I'm Henry Yang, a product designer based in Vancouver.",
        subTitle: '🌏 Check out my projects below 🌎',
      },
      about: {
        title: 'About me',
      },
      resume: {
        title: 'Projects',
      }
    }
  }


  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop/>
        <Container className='p-0 background' fluid={true}>
          <ParallaxProvider>
            <Route path='/' exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          </ParallaxProvider>
          <Route path='/about' exact render={() => <About title={this.state.about.title} />} />
          <Route path='/eat' exact render={() => <Eat title={this.state.resume.title} />} />
          <Route path='/ai' exact render={() => <AI title={this.state.resume.title} />} />
          <Route path='/happy' exact render={() => <Happy title={this.state.resume.title} />} />
          <Route path='/biz' exact render={() => <Biz title={this.state.resume.title} />} />
          <Route path='/craig' exact render={() => <Craig/>}/>
          <Footer></Footer>
          <Navbar></Navbar>
        </Container>
      </Router>
    );
  }
}

export default App;
