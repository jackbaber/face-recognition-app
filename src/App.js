import React, { Component } from 'react';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

const particleOptions = {
  particles: {
    number: {
      value: 85,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
        value: "#86c232"
    },
    shape: {
        type: "circle",
        color: "#86c232"
    },
    size: {
        value: 2
    },
    line_linked:{
        enable: true,
        color: "#86c232"
    }
  }
}

class App extends Component {
  render() {
    return (
      <div>
      <Particles className="particles" 
        params={particleOptions}
            />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/*
        
        <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
