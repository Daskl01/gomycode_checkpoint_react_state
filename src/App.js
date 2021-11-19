
import './App.css';
import React from 'react'
import MyImage from './MyImage.jpg'
class App extends React.Component{
  state = {
    Person:{
      fullName:'Diaby Aboubackr',
      Bio:'Je suis Diaby je Kiff les bons pains',
      imgSrc:MyImage,
      Profession:'Etudiant FullStack Js',
    },
      shows : true,
    };
    handleShowPerson = () => {
      this.setState({
        ...this.state.Person,
        shows: !this.state.shows,
      });
    }

    render() {
      return( 
        <div className="App">
        {this.state.shows && (
          <>
        <h1>{this.state.Person.fullName}</h1>
        <h1>{this.state.Person.Bio}</h1>
        <img src={this.state.Person.imgSrc} alt="Naruto"></img>
        <h1>{this.state.Person.Profession}</h1>
        </>
        )}
        
        <button onClick={this.handleShowPerson}>click here</button>
        </div>

      )
    }

    
}

export default App;
