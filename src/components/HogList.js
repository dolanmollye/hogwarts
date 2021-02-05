import React from 'react'
import hogs from '../porkers_data.js';
import HogTile from './HogTile.js';



export default class HogList extends React.Component {
    render () {
        return (
            <div className='ui-grid-container'>
            {hogs.map(hog => <HogTile hogData = {hog} filter = {this.props.filter}/> )}
            </div>
        )
    }
}     