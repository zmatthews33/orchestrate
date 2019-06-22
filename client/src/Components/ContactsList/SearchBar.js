import React from "react";

export default function SearchBar() {
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
