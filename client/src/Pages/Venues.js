import React from 'react'
import {Page} from '../Components/Containers/LayoutsElements'
import SearchVenue from '../Components/Venues/SearchVenue';
import '../Styles/Venues.scss';

function Venues() {
 
  return (
    <Page>
      <SearchVenue/>
    </Page>
  )
}

export default Venues;