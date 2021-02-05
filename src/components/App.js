import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";
import GreasedHogs from "./GreasedHogs.js";

class App extends Component {
  state = {
    azClicked: false, 
    weightClicked: false,
    greasedClicked: false,
    dryClicked: false
  }

  handleSortByAZ = () => {
    this.setState(prevState => {
      return{
        azClicked: !prevState.azClicked
      }
    })
  }

  handleSortByWeight = () => {
    this.setState(prevState => {
      return{
        weightClicked: !prevState.weightClicked
      }
    })
  }

  handleFilterGreased = () => {
    this.setState(prevState => {
      return{
        greasedClicked: !prevState.greasedClicked
      }
    })
    console.log(this.state)
  }

  handleFilterDry = () => {
    this.setState(prevState => {
      return{
        dryClicked: !prevState.dryClicked
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className='btn-div'>
            <button className='a-z' onClick= {this.handleSortByAZ}>
              Pigs A-Z  
            </button>
            <button className='weight' onClick= {this.handleSortByWeight}>
              Weight 
            </button>
            <button className='greased' onClick= {this.handleFilterGreased}>
              Greased
            </button>
            <button className='dry' onClick= {this.handleFilterDry}>
              Dry 
            </button>
        </div>
        {!this.state.greasedClicked ? <HogList /> : <GreasedHogs />}
      </div>
    );
  }
}

export default App;
