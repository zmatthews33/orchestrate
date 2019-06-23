import React from "react";

export default function SearchBar(props) {
  return (
    <form>
      <input
        className="form-control"
        type="text"
        placeholder="Search..."
        value={props.filterText}
        onChange={props.handleFilterTextInputChange}
      />
    </form>
  );
}
