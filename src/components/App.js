import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";
import FilterSelector from "./FilterSelector";

class App extends Component {
  state = {
    hogs: []
  }

  componentDidMount(){
    this.setState({
      hogs: hogs
    })
  }

  filterHogs = filter => {
    switch (filter) {
      case 'none': this.setState({
        hogs: hogs
      })  
        break;
      case 'greased': this.setState({
        hogs: hogs.filter(hog => hog.greased === true)
      })       
        break;
      case 'name': this.setState({
        hogs: hogs.sort((a,b) => (a.name > b.name) ? 1 : -1)
      })       
        break;  
      case 'weight': this.setState({
        hogs: hogs.sort((a,b) => (a.weight > b.weight)? 1 : -1 )
      })       
        break; 
      default:
        break;
    }
  }

  fetchHogGifs = () => {
    
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <FilterSelector filterSelected={this.filterHogs}/>
        <HogList hogs={this.state.hogs}/>
      </div>
    );
  }
}

export default App;
