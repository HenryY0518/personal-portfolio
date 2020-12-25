import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop'

import HomePage from './pages/HomePage';
import About from './pages/About';
import Resume from './pages/Resume';
import Eat from './pages/projects/Eat';
import AI from './pages/projects/AI';
import Happy from './pages/projects/Happy';

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
        title: "Hi, I'm Henry, an aspired UX desginer.",
        subTitle: 'Check out my awesome projects below.',
        // text: 'Check out my awesome projects below'
      },
      about: {
        title: 'About me',
      },
      resume: {
        title: 'What up',
      }
    }
  }


  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop/>
        <Container className='p-0 background' fluid={true}>
          <Route path='/' exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path='/about' exact render={() => <About title={this.state.about.title} />} />
          <Route path='/resume' exact render={() => <Resume title={this.state.resume.title} />} />
          <Route path='/eat' exact render={() => <Eat title={this.state.resume.title} />} />
          <Route path='/ai' exact render={() => <AI title={this.state.resume.title} />} />
          <Route path='/happy' exact render={() => <Happy title={this.state.resume.title} />} />
          <Route path='/craig' exact render={() => <Craig/>} />
          <Footer></Footer>
          <Navbar></Navbar>
        </Container>
      </Router>
    );
  }
}

export default App;
