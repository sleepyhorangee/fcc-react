import React from 'react'
import './index.css'
import { Link } from 'react-router-dom';
// import React from 'react'

const SeriesListItem = ({ series }) => {
    // const {series} = this.props  // if passed in props, but this is better if only 1 prop
    return (
        <li>
            <Link to={`/series/${series.show.id}`} >
                {series.show.name}
            </Link>
        </li>
        // <div>
        //     <li>{series.show.name}</li>
        // </div>
    )
}


export default function SeriesList(props) {
    return (
        <div>
            <ul className="series-list">
                {props.list.map(series => (
                    <SeriesListItem series={series} key={series.show.id} />
                ))}
            </ul>
        </div>
    )
}
