import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';


const app = new Clarifai.App({
  apiKey: "f7bce737c22a48c7b16540fa0e566c58"
})

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
  constructor(props){
    super(props);
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
      route: "signin",
      isSignedIn: false,
    }
  }
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
  displayFaceBox = (box) => {
    this.setState({ box })
  }
  handleInputChange = (event) => {
    this.setState({ input: event.target.value })
  }
  handleButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input
    )
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err))
  }
  onRouteChange = (route) => {
    if(route === "signout"){
      this.setState({ isSignedIn: false })
    } else if (route === "home"){
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Particles className="particles" 
          params={particleOptions}
              />
          <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
          { route === "home" 
          ? <div> 
                <Logo />
                <Rank />
                <ImageLinkForm
                  onInputChange={this.handleInputChange}
                  onButtonSubmit={this.handleButtonSubmit}
                />
                <FaceRecognition
                  box={box}
                  imageUrl={imageUrl}
                />
            </div>
          : (
            route === "signin"
            ? <Signin onRouteChange={this.onRouteChange}/>
            : <Register onRouteChange={this.onRouteChange}/>
          )
        }
      
      </div>
    );
  }
}

export default App;
