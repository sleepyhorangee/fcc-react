import React, { Component } from 'react'

export default class Intro extends Component {
    render() {
        return (
            <div>
                {this.props.message}
            </div>
        )
    }
}
