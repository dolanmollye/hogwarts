import React from 'react';
import HogList from './HogList.js';
import HogData from './HogData.js';

class HogTile extends React.Component {
    state = {
        selected: false
    }

    getImage = pigName => {
        let splitName = pigName.split(" ")
        let fileName = splitName.join("_").toLowerCase()
        let pigImage = require(`../hog-imgs/${fileName}.jpg`)
        return pigImage
    }

    handleClick = () => {
        this.setState(prevState => {
            return{
                selected: !prevState.selected
            }
        })
    }

    render() {
        return (
            <div className= 'pigTile' onClick= {this.handleClick}>
                <h3>{this.props.hogData.name}</h3>
                <img src={this.getImage(this.props.hogData.name)}/>
                {this.state.selected == true ? <HogData hog = {this.props.hogData}/> : null}
            </div>
        )
    }
}




export default HogTile