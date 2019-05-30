import React, { Component } from 'react'
import './App.css';
// import Series from '../../containers/Series/Index'
import Main from '../Main'

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>TV Series List</h1>
        </header>
        {/* <Series /> */}
        <Main />
      </div>
    )
  }
}






// onSeriesInputChange = e => {
//   this.setState({ seriesName: e.target.value, isFetching: true })
// }

// fetch(``)
