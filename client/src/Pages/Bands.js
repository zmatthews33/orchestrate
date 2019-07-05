import React from "react";
import BandList from "../Components/BandList/BandList";
import { Link } from "react-router-dom";
import "../Styles/Bands.scss";

import {Page} from "../Components/Containers";


function Bands() {
  return (
    <Page>
      <h1>Bands</h1>
      <BandList />
      <button>
        <Link className="add-artist" to="/addartist">
          Add an Artist
        </Link>
      </button>
    </Page>
  );
}

export default Bands;
