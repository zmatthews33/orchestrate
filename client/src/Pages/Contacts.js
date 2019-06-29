import React from 'react'
import { Page } from "../Components/Containers";
import ContactList from '../Components/ContactList/ContactList'
function Contacts() {
  return (
    <Page>
      <h1>Contacts</h1>
      <ContactList/>
    </Page>
  )
}

export default Contacts