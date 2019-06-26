import React, { Component } from "react";
import "./BandList.scss";
export class BandList extends Component {
  state = {
    bands: []
  };
  componentDidMount() {
    this.setState({
      bands: [
        { id: 1, name: "Echo Pilot" },
        { id: 2, name: "Fresh Hats Tight Beats" },
        { id: 3, name: "Macdennis" }
      ]
    });
  }
  render() {
    const { bands } = this.state;
    return (
      <ul id="bandList">
        {bands.map(band => (
          <li key={band.id}>{band.name}</li>
        ))}
      </ul>
    );
  }
}

export default BandList;
