import "./ContactsList.scss";
import React from "react";
import ReactDOM from "react-dom";

class ContactRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.phone}</td>
        <td>{this.props.contact.venue}</td>
        <td>{this.props.contact.address}</td>
        <td>{this.props.contact.email}</td>
        <td>{this.props.contact.notes}</td>
      </tr>
    );
  }
}

class ContactTable extends React.Component {
  render() {
    var rows = [];
    this.props.contacts.forEach(contact => {
      if (contact.name.indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(<ContactRow key={contact.key} contact={contact} />);
    });
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              <i className="fa fa-fw fa-user" />
              Name
            </th>
            <th>
              <i className="fa fa-fw fa-phone" />
              Phone
            </th>
            <th>
              <i className="fa fa-fw fa-house-damage" />
              Venue
            </th>
            <th>
              <i className="fa fa-fw fa-map-pin" />
              Address
            </th>
            <th>
              <i className="fa fa-fw fa-envelope" />
              Email
            </th>
            <th>
              <i className="fa fa-fw fa-sticky-note" />
              Notes:
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(
      this
    );
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    return (
      <form>
        <input
          className="form-control"
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
        />
      </form>
    );
  }
}

class FilterableContactTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    //console.log("BEFORE: this.state.contacts: " + this.state.contacts.length);
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
    );
  }
}

class NewContactRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name.value;
    const phone = target.phone.value;
    const venue = target.venue.value;
    const address = target.address.value;
    const email = target.email.value;
    const notes = target.notes.value;

    var contact = {
      name: name,
      phone: phone,
      venue: venue,
      address: address,
      email: email,
      notes: notes
    };
    this.props.addContact(contact);
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <div className="col-md-3">
            <input
              type="text"
              name="name"
              className="form-control"
              id="nameInput"
              placeholder="Name"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="phone"
              className="form-control"
              id="phoneInput"
              placeholder="Phone"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="venue"
              className="form-control"
              id="venueInput"
              placeholder="Venue"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="address"
              className="form-control"
              id="addressInput"
              placeholder="Address"
            />
          </div>
          <div className="col-md-3">
            <input
              type="email"
              name="email"
              className="form-control"
              id="emailInput"
              placeholder="Email"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="notes"
              className="form-control"
              id="notesInput"
              placeholder="Notes"
            />
          </div>
          <div className="col-md-3">
            <button type="submit" className="btn btn-primary">
              <i className="fa fa-fw fa-plus" />
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

var CONTACTS = [
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
];
ReactDOM.render(
  <FilterableContactTable contacts={CONTACTS} />,
  document.getElementById("container")
);
export default ContactsList;
