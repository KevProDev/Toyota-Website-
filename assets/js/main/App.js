import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './includes/Header.js'
// import 'bootstrap/dist/css/bootstrap.css';
// import "bootstrap/scss/bootstrap.scss"     




export default class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Kevin'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (<div>
        <Header/>
        <h1 className >THIS IS THE CARSITE</h1> 
      </div>)
  }
}
