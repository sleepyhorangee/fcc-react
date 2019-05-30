import React, { Component } from 'react'
import './App.css';
import Intro from '../Intro/Intro'
import Series from '../../containers/Series/Index'


export default class App extends Component {
 

  render() {
    return (
      <div>
        <header>
          <h1>TV Series List</h1>
        </header>
        <Intro message = "Here you can find all of your most loved series "/>
        <Series/>
      </div>
    )
  }
}






// onSeriesInputChange = e => {
//   this.setState({ seriesName: e.target.value, isFetching: true })
// }

// fetch(``)
