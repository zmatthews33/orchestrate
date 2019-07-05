import React from "react";
import { BandCard } from "../Containers/index";

const BandList = ({ bands, deleteBand }) => {
  return (
    <div className="bandList">
      {bands.map(band => (
        <BandCard key={band._id}>
          <div
            className="bandHeader"
            style={band.profile_img ? { backgroundImage: `url(${band.profile_img})` } : {}}
          />
          <div className="bandContent">
            <h2>{band.name}</h2>
            <a href={`mailto:${band.email}`}>{band.email}</a>
            <p>{band.bio}</p>
            {band.members.length && (
              <div className="members">
                <h4>Members</h4>
                <ul>
                  {band.members.map(mem => (
                    <li key={mem}>{mem}</li>
                  ))}
                </ul>
              </div>
            )}
            {band.links.length && (
              <div className="links">
                <h4>Links</h4>
                <ul>
                  {band.links.map(link => (
                    <li key={link}>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button className="deleteButton" onClick={() => deleteBand(band._id)}>
              <i className="fas fa-times" /> Delete Band
            </button>
          </div>
        </BandCard>
      ))}
    </div>
  );
};

export default BandList;
