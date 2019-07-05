import "./BandList.scss";
import React from "react";

const BandList = ({ bands, deleteBand }) => (
  <div id="bandList">
    {bands.map(band => (
      <div key={band._id} className="band_">
        <div className="band_name">{band.name}</div>
        <span className="band_delete" onClick={() => deleteBand(band._id)}>
          x
        </span>
      </div>
    ))}
  </div>
);

export default BandList;
