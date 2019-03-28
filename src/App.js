import React, { Component } from "react";
import Flat from "./components/Flat/Flat";
import "./App.css";
import GoogleMapReact from "google-map-react";
import Marker from "./components/Marker/Marker";
import Flats from "./Flatinfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slectedFlat: null,
      term: ""
    };
    console.log("flat state", this.state.flats);
  }

  selectFlat = flat => {
    console.log(flat);
    this.setState({
      slectedFlat: flat
    });
  };

  handleChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  render() {
    const term = this.state.term;
    const filteredFlats = Flats.filter(flat => {
      return flat.name.toLowerCase().indexOf(term.toLowerCase()) !== -1;
    });

    let center = {
      //give the coordinates for the map
      lat: 60.1699,
      lng: 24.9384
    };
    if (this.state.slectedFlat) {
      center = {
        lat: this.state.slectedFlat.lat,
        lng: this.state.slectedFlat.lng
      };
    }
    return (
      <div className="app">
        Hello
        <div className="main">
          <div className="search">
            <input
              type="text"
              placeholder="search"
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>

          <div className="flats">
            {filteredFlats.map((flat, i) => {
              return (
                <Flat key={flat.id} flat={flat} selectFlat={this.selectFlat} />
              );
            })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact center={center} defaultZoom={10}>
            {filteredFlats.map(flat => {
              return (
                <Marker
                  key={flat.id}
                  lat={flat.lat}
                  lng={flat.lng}
                  text={flat.price}
                  selected={flat === this.state.slectedFlat}
                />
              );
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
