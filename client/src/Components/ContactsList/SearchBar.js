import React from "react";

export default function SearchBar(props) {
  return (
    <form>
      <input
        className="form-control"
        type="text"
        placeholder="Search..."
        value={this.props.filterText}
        onChange={this.props.handleFilterTextInputChange}
      />
    </form>
  );
}
