import React from "react";
import { BandCard } from "../Containers/index";

const BandList = ({ bands, deleteBand }) => {
  return (
    <div className="bandList">
      {bands.map(band => (
        <BandCard key={band._id}>
          <div
            className="bandHeader"
            style={
              band.profile_img
                ? { backgroundImage: `url(${band.profile_img})` }
                : {
                    backgroundImage: `url(https://images.unsplash.com/photo-1527261834078-9b37d35a4a32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80)`
                  }
            }
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
          </div>
          <div className="cardControls">
            <button
              className="deleteButton"
              onClick={() => deleteBand(band._id)}
            >
              <i className="fas fa-times" /> Delete Band
            </button>
          </div>
        </BandCard>
      ))}
    </div>
  );
};

export default BandList;
