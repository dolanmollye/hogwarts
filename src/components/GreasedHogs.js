import React from 'react'
import hogs from '../porkers_data.js';
import HogTile from './HogTile.js';



export default class GreasedHogs extends React.Component {
    render () {
        return (
            <div className='ui-grid-container'>
            {hogs.filter(hog => hog.greased == true).map(hog => {<HogTile hogData = {hog}/>})}
            </div>
        )
    }
}     

