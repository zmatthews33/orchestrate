import React from "react";

export default function ContactRow({
  name,
  phone,
  venue,
  address,
  email,
  notes
}) {
  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{venue}</td>
      <td>{address}</td>
      <td>{email}</td>
      <td>{notes}</td>
    </tr>
  );
}