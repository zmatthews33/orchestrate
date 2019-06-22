import React from "react";

export class NewContactRow extends React.Component {
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
