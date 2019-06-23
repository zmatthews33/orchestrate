import React from "react";
import BandList from "../Components/BandList/BandList";
import "../Styles/Bands.scss";
import {Page} from '../Components/Containers/LayoutsElements'


function Bands() {
  return (
    <Page>
      <BandList />
    </Page>
  )
}

export default Bands;
