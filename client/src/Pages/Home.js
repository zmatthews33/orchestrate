import React from "react";
import Container from "../Components/Container/Container";
import Todos from "../Components/Todos/Todos";
import UpcomingEvents from "../Components/UpcomingEvents/UpcomingEvents";
import "./Home.scss";
function Home() {
    return (
        <Container>
            <UpcomingEvents />
            <Todos />
        </Container>
    );
}

export default Home;
