import React, {useContext} from 'react'
import { Page } from "../Components/Containers";
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