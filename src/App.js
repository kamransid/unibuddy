import React, { Component } from 'react';
import logo from './logo.svg';
import './myCss.css'
import arr from './data'
import User from './components/userComponent'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      numberOfLikes : 0
    }
    this.increaseLike = this.increaseLike.bind(this)
  }
  increaseLike(){
    this.setState({
      numberOfLikes : this.state.numberOfLikes + 1
    })
  }
  render() {
    console.log(arr)
    var elements = arr.map(item=>{
      return( 
      <li key={item.id} >
      {/* <img src={item.image} /> */}
      <User item={item}/>
      </li>
      )
    })
    return (
      <div>
        <ul>
        {elements}
        </ul>
      </div>
    );
  }
}

export default App;
