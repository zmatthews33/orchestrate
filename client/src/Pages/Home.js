import React from "react";
import Container from "../Components/Container/Container";
import Todos from "../Components/Todos/Todos";
import UpcomingEvents from "../Components/UpcomingEvents/UpcomingEvents";
import Finances from "../Components/Finances/Finances";

import "./Home.scss";
import DashBtn from "../Components/DashBtn/DashBtn";
function Home() {
  return (
    <Container>
      <UpcomingEvents />
      <Todos />
      <Finances />
      <DashBtn />
    </Container>
  );
}

export default Home;
