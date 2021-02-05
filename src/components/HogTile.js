import React from 'react';
import HogData from './HogData.js';

class HogTile extends React.Component {
    state = {
        selected: false,
        hidden: false
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

    handleHidePiggy = () => {
        this.setState((prevState) => ({
            hidden: !prevState.hidden
        }))
    }

    render() {
        if(this.state.hidden) {
            return ( 
            <div className= 'ui card pigTile' onClick= {this.handleClick}>
                <button className='ui button' onClick={this.handleHidePiggy}>Reveal Piggy</button>
            </div>
            )
        }
        else{
            return (
                <div className= 'ui card pigTile' onClick= {this.handleClick}>
                    <h3 className='header'>{this.props.hogData.name}</h3>
                    <img src={this.getImage(this.props.hogData.name)}/>
                    <button className='ui button' onClick={this.handleHidePiggy}>Hide Piggy</button>
                    {this.state.selected == true ? <HogData hog = {this.props.hogData}/> : null}
                </div>
        )}
    }
}




export default HogTile