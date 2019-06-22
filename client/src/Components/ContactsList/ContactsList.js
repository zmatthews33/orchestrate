import "./ContactsList.scss";
import React from "react";
import Container from "../Container";
import FilterableContactTable from "./FilterableContactTable";

export default function ContactsList() {
  return (
    <Container>
      <FilterableContactTable />
    </Container>
  );
}
