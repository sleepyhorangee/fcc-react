import React, { Component } from 'react'
import Loader from '../../components/Loader'
export default class SingleSeries extends Component {
    state = {
        show: null
    }
    componentDidMount() {
        const { id } = this.props.match.params
        fetch(`http://api.tvmaze.com/shows/${id}?embed-episodes`)
            .then((response => response.json()))
            .then(json => this.setState({ show: json }))
    }

    render() {
        // console.log(this.props) // Inspect the match.params value
        const { show } = this.state
        console.log(show)
        return (

            <div>
                {show === null && <Loader />}
                {
                    show !== null
                    &&
                    <div>
                        <p>{show.name}</p>
                        <p>Premiered - {show.premiered}</p>
                        <p>Rating - {show.rating.average}</p>
                        <p>URL - {show.url}</p>
                        <p>
                            <img alt="Show" src={show.image.medium} />
                        </p>
                    </div>
                }

                {/* <p>Single Series: the show ID will be {this.props.match.params.id}</p> */}
            </div>
        )
    }
}
