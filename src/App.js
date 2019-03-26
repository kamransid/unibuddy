import React, { Component } from 'react';
import logo from './logo.svg';
import './myCss.css'
import arr from './data'
import User from './components/userComponent'

class App extends Component {
  render() {
    console.log(arr)
    var elements = arr.map(item=>{
      return( 
      <li key={item.id} style={{listStylePosition:'inside', border:'1px solid black', borderRadius:'5px', margin:'10px', listStyleType:'none', padding:'5px'}}>
      <User item={item}/>
      </li>
      )
    })
    return (
        <div>
        {elements}
        </div>
    );
  }
}

export default App;
