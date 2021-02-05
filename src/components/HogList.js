import React from 'react'
import HogTile from './HogTile.js';



export default class HogList extends React.Component {
    render () {
        return (
            <div className='ui six stackable cards'>
            {this.props.hogs.map(hog => <HogTile hogData={hog} filter={this.props.filter}/> )}
            </div>
        )
    }
}     