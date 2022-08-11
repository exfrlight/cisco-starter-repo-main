import React, { Component } from 'react';
import './App.css';
import './Exhibit.css';


function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit name="Welcome to the new world">
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        Learn React
        </a>
      </Exhibit>
    </div>
  );
}

class Banner extends React.Component{
  render(){
    return (
    <div className='Banner'>
      <h1>Sextant</h1>
    </div>
    )
  }
}
class Exhibit extends React.Component{
  render(){
    return(
      <div className='Exhibit'>
        <h2 className='ExhibitHeading'>{this.props.name}</h2>
        <div className='ExhibitContent'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
