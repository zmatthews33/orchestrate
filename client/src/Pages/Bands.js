import React from "react";
import BandList from "../Components/BandList/BandList";
import "../Styles/Bands.scss";
import Page from '../Components/Containers/PageContainer'


function Bands() {
  return (
    <Page>
      <BandList />
    </Page>
  )
}

export default Bands;
