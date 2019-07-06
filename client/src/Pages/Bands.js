import React from "react";
import "../Styles/Bands.scss";
import { Page } from "../Components/Containers";

import ArtistsContainer from '../Components/Artists/ArtistsContainer'

function Bands() {
  return (
    <Page>
      <ArtistsContainer />
    </Page>
  );
}

export default Bands;
