import React from "react";
import SearchBar from "./SearchBar";
import NewContactRow from "./NewContactRow";
import ContactTable from "./ContactTable";
import React, { Component } from 'react'

export class FilterableContactTable extends Component {
    state= {
        filterText: "",
        contacts: [
      {
        key: 1,
        name: "Jane Doe",
        phone: "615-321-3340",
        venue: "Exit/In",
        address: "2208 Elliston Pl, Nashville, TN 37203",
        email: "janedoe@gmail.com",
        notes: "She's cool"
      },
      {
        key: 2,
        name: "Tom",
        phone: "347-559-6031",
        venue: "The East Room",
        address: "2412 Gallatin Ave, Nashville, TN 37206",
        email: "tom@gmail.com",
        notes: "Tom has a bday the night before our show"
      },
      {
        key: 3,
        name: "Lemmy",
        phone: "666-666-6666",
        venue: "n/a",
        address: "Everywhere",
        email: "lemmyisgod123@gmail.com",
        notes: "Lemmy is God"
      }
    ]
  };
  this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  this.addContact = this.addContact.bind(this);
}

addContact(contact) {
  var timestamp = new Date().getTime();
  contact["key"] = timestamp;
  this.state.contacts.push(contact);
  this.setState({ contacts: this.state.contacts });
}

handleFilterTextInput(filterText) {
  this.setState({
    filterText: filterText
  });
}
    render() {
        return (
            <div>
            <h1>Contacts</h1>
            <SearchBar
              filterText={this.state.filterText}
              onFilterTextInput={this.handleFilterTextInput}
            />
            <NewContactRow addContact={this.addContact} />
            <ContactTable
              contacts={this.state.contacts}
              filterText={this.state.filterText}
            />
          </div>
        )
    }
}

export default FilterableContactTable

   