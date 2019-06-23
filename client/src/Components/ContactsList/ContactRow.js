import React from "react";

export default function ContactRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.venue}</td>
      <td>{props.address}</td>
      <td>{props.email}</td>
      <td>{props.notes}</td>
    </tr>
  );
}
