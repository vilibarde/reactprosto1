import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import photo from './photo.jpg';


class App extends Component {
  constructor(){
    super();
    this.state = {show: true};
    
  }
  
hideText(){
  this.setState({show: false});
}
toggleText(){
  this.setState({show: !this.state.show});
}

  render() {

    
   if (this.state.show){
     var message = <img src={photo}></img>
   }
  
    
    return (
      
        <div className ="App">
        
    
 <header className="App-header">
          
          <h2 className="App-intro">{message}</h2>
          <button onClick={this.toggleText.bind(this)}>Change</button>
          
        
</header>
         </div>
    );
  }
}

export default App;
