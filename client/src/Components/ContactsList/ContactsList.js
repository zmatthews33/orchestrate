import "./ContactsList.scss";
import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ContactTable from "./ContactTable";
import ContactRow from "./ContactRow";
import NewContactRow from "./NewContactRow";
export class ContactsList extends Component {
  state = {
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

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  addContact(newContact) {
    let currentState = [...this.state.contacts];
    currentState.push(newContact);
    this.setState({
      contacts: currentState
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    const { name, phone, venue, address, email, notes } = event.target;
    const newContact = {
      name: name,
      phone: phone,
      venue: venue,
      address: address,
      email: email,
      notes: notes
    };
    this.addContact(newContact);
  };

  handleFilterTextInputChange(input) {
    this.setState({
      filterText: input
    });
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <SearchBar
          filterText={this.state.filterText}
          handleFilterTextInputChange={e =>
            this.handleFilterTextInput(e.target.value)
          }
        />
        <NewContactRow addContact={this.addContact} />
        <ContactTable>
          {this.state.contacts.map(contact => {
            const { key, name, phone, venue, address, email, notes } = contact;
            return (
              <ContactRow
                key={key}
                name={name}
                phone={phone}
                venue={venue}
                address={address}
                email={email}
                notes={notes}
              />
            );
          })}
        </ContactTable>
      </div>
    );
  }
}

export default ContactsList;
