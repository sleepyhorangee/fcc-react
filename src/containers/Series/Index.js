import React, { Component } from 'react'
import SeriesList from '../../components/SeriesList/SeriesList'
import Loader from '../../components/Loader'
import Intro from '../../components/Intro'

export default class Series extends Component {
  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }

  componentDidMount() {
    // const series = ["Vikings", "Game of Thrones"]
    // setTimeout(() => {
    //   this.setState({ series})
    // }, 2000)
    // 
  }
  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFetching: true })
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then((response => response.json()))
      .then(json => this.setState({ series: json, isFetching: false }))
    // console.log(e);
    // this.setState({
    //   input: e.target.value
    // })
  }

  render() {
    const { series, seriesName, isFetching } = this.state

    return (
      <div>
        <Intro message="Here you can find all of your most loved series " />

        {/* The length of series array: {this.state.series.length} */}
        <div>
          <input
            value={seriesName}
            type="text"
            onChange={this.onSeriesInputChange} />
        </div>
        {
          !isFetching && series.length === 0 && seriesName.trim() === ''
          && <p>Please enter series name into the input</p>
        }
        {
          !isFetching && series.length === 0 && seriesName.trim() !== ''
          && <p>No tv series have been found with this name</p>
        }
        {
          isFetching && <Loader />
        }
        {
          !isFetching && <SeriesList list={this.state.series} />
        }

      </div>
    )
  }
}
