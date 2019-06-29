import React from "react";
import BandList from "../Components/BandList/BandList";
import "../Styles/Bands.scss";
import {Page} from "../Components/Containers";

function Bands() {
  return (
    <Page>
      <h1>Bands</h1>
      <BandList />
    </Page>
  );
}

export default Bands;
