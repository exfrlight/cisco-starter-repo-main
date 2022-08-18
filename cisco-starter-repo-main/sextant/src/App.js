import React, { Component } from 'react';
import './App.css';
import './Exhibit.css';
import Address from './Address.js';
import PylonConnector from './PylonConnector';


function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit name="ipv4 address">
        <Address url="https://api.ipify.org?format=json" />
      </Exhibit>
      <Exhibit name="ipv6 address">
        <Address url="https://api64.ipify.org?format=json" />  
      </Exhibit>
      <Exhibit name="Pylon Packet Latency">
        <PylonConnector />
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
